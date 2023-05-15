import Cordova
@objc(VaultPlugin)
// swiftlint:disable type_body_length
class VaultPlugin: CDVPlugin {

    private lazy var vaultManager = VaultManager()
    private var errorCallbacks: [String: CDVInvokedUrlCommand] = [:]

    // swiftlint:disable lower_acl_than_parent
    override public func pluginInitialize() {
        self.errorCallbacks = [:]
    }
    // swiftlint:disable lower_acl_than_parent

    @objc(appResumed:) func appResumed(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            try self.vaultManager.appResumed(config)
            return sendEmptyResult(command)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(clear:) func clear(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            try self.vaultManager.clear(config)
            return sendEmptyResult(command)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @available(*, deprecated, message: "Deprecated in favor of using the isEmpty method.")
    @objc(doesVaultExist:) func doesVaultExist(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            let value = try vaultManager.doesVaultExist(config)
            return sendResult(command, value)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(exportVault:) func exportVault(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            let jsonString = try vaultManager.exportVault(config)
            return sendResult(command, jsonString)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(importVault:) func importVault(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            guard let json = command.arguments[1] as? String else {
                throw VaultError.invalidArguments("data missing")
            }
            try vaultManager.importVault(config, json)
            sendEmptyResult(command)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(isEmpty:) func isEmpty(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            let value = try vaultManager.isEmpty(config)
            return sendResult(command, value)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(isLocked:) func isLocked(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            let value = try vaultManager.isLocked(config)
            return sendResult(command, value)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(getKeys:) func getKeys(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            let jsonString = try vaultManager.getKeys(config)
            return sendResult(command, jsonString)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(getValue:) func getValue(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            guard let key = command.arguments[1] as? String else {
                throw VaultError.invalidArguments("key missing")
            }
            let value = try vaultManager.getValue(config, key)
            return sendResult(command, value)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(lock:) func lock(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            try vaultManager.lock(config)
            return sendEmptyResult(command)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(onConfigChanged:) func onConfigChanged(_ command: CDVInvokedUrlCommand) {
        do {
            try vaultManager.onConfigChanged({ config in
                let jsonEncoder = JSONEncoder()
                let jsonData = try jsonEncoder.encode(config)
                let jsonString = String(data: jsonData, encoding: .utf8)
                self.sendResult(command, jsonString, true)
            })
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(onError:) func onError(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            self.errorCallbacks[config.key] = command

            try vaultManager.onError(config, command.callbackId, { error, callbackId in
                let result = CDVPluginResult(
                    status: CDVCommandStatus_ERROR,
                    messageAs: getVaultErrorObject(error).asDictionary)
                result?.setKeepCallbackAs(true)
                self.commandDelegate.send(result, callbackId: callbackId)
            })
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(onLock:) func onLock(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            try vaultManager.onLock(config, { wasTimeout in
                let jsonData = try JSONSerialization.data(withJSONObject: ["timeout": wasTimeout])
                let jsonString = String(data: jsonData, encoding: .utf8) ?? ""
                self.sendResult(command, jsonString, true)
            })
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(onUnlock:) func onUnlock(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            try vaultManager.onUnlock(config, {
                self.sendEmptyResult(command, true)
            })
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(removeValue:) func removeValue(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            guard let key = command.arguments[1] as? String else {
                throw VaultError.invalidArguments("key missing")
            }
            try vaultManager.removeValue(config, key)
            sendEmptyResult(command)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(setup:) func setup(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            self.clearIfFirstRun(config: config)

            try vaultManager.setup(config)
            sendEmptyResult(command)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(getVaultConfig:) func getVaultConfig(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            let vaultConfig = try vaultManager.getVaultConfig(config)

            let jsonEncoder = JSONEncoder()
            let jsonData = try jsonEncoder.encode(vaultConfig)
            let jsonString = String(data: jsonData, encoding: .utf8)
            self.sendResult(command, jsonString, true)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(setValue:) func setValue(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            guard let key = command.arguments[1] as? String else {
                throw VaultError.invalidArguments("key must be a string")
            }
            let data = command.arguments[2] as? String
            try vaultManager.setValue(config, key, data)
            sendEmptyResult(command)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(setCustomPasscode:) func setCustomPasscode(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            guard let passcode = command.arguments[1] as? String else {
                throw VaultError.invalidArguments("passcode missing")
            }
            try vaultManager.setCustomPasscode(config, passcode)
            sendEmptyResult(command)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(unlock:) func unlock(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            try vaultManager.unlock(config)
            return sendEmptyResult(command)
        } catch {
            sendErrorResult(command, error)
        }
    }

    @objc(updateConfig:) func updateConfig(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            try vaultManager.updateConfig(config)
            return sendEmptyResult(command)
        } catch {
            sendErrorResult(command, error)
        }
    }

    private func clearIfFirstRun(config: IdentityVaultConfig) {
        if !UserDefaults.standard.bool(forKey: "HasRun-" + config.key) {
            try? self.vaultManager.clear(config)
        }

        UserDefaults.standard.set(true, forKey: "HasRun-" + config.key)
    }

    private func getConfig(_ command: CDVInvokedUrlCommand) throws -> IdentityVaultConfig {
        guard let vaultConfigDict = command.arguments[0] as? [String: Any] else {
            throw VaultError.invalidArguments("Vault Config missing")
        }
        let vaultConfig = try IdentityVaultConfig(vaultConfigDict)
        return vaultConfig
    }

    private func sendResult(_ command: CDVInvokedUrlCommand, _ value: String?, _ keepCallback: Bool = false) {
        let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: value)
        result?.setKeepCallbackAs(keepCallback)
        commandDelegate.send(result, callbackId: command.callbackId)
    }

    private func sendResult(_ command: CDVInvokedUrlCommand, _ value: Bool, _ keepCallback: Bool = false) {
        let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: value)
        result?.setKeepCallbackAs(keepCallback)
        commandDelegate.send(result, callbackId: command.callbackId)
    }

    private func sendEmptyResult(_ command: CDVInvokedUrlCommand, _ keepCallback: Bool = false) {
        let result = CDVPluginResult(status: CDVCommandStatus_OK)
        result?.setKeepCallbackAs(keepCallback)
        commandDelegate.send(result, callbackId: command.callbackId)
    }

    private func sendErrorResult(_ command: CDVInvokedUrlCommand, _ error: Error) {
        let result = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: getVaultErrorObject(error).asDictionary)
        result?.setKeepCallbackAs(true)
        commandDelegate.send(result, callbackId: command.callbackId)
    }
}
