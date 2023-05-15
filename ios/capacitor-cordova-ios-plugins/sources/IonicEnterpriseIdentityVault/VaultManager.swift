import Cordova
import Foundation
import UIKit

// swiftlint:disable function_body_length identifier_name
// swiftlint:disable type_body_length force_unwrapping

class VaultManager {

    private var vaults: [String: VaultBase] = [:]
    private var isSetup = false
    private var onConfigChangedCallback: ((IdentityVaultConfig) throws -> Void)?

    func appResumed(_ config: IdentityVaultConfig) throws {
        let vault = try self.getOrCreateVault(config)
        do {
            try vault.appResumed()
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    func clear(_ config: IdentityVaultConfig) throws {
        let vault = try self.getOrCreateVault(config)
        do {
            try vault.clear()
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    @available(*, deprecated, message: "Deprecated in favor of using the isEmpty method.")
    func doesVaultExist(_ config: IdentityVaultConfig) throws -> Bool {
        let vault = try self.getOrCreateVault(config)
        do {
            let value = try vault.doesVaultExist()
            return value
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    func exportVault(_ config: IdentityVaultConfig) throws -> String {
        let vault = try self.getOrCreateVault(config)
        do {
            let data = try vault.exportVault()
            let jsonData = try JSONSerialization.data(withJSONObject: data ?? "" )
            let jsonString = String(data: jsonData, encoding: .ascii) ?? ""
            return jsonString
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    func importVault(_ config: IdentityVaultConfig, _ json: String) throws {
        let vault = try self.getOrCreateVault(config)
        do {
            var value: [String: String] = [:]
            if let data = json.data(using: String.Encoding.utf8) {
                do {
                    // swiftlint:disable:next force_cast
                    let parsedJSON = try JSONSerialization.jsonObject(with: data, options: .mutableContainers) as! [String: Any?]

                    try parsedJSON.keys.forEach { key in
                        if let anyObject = parsedJSON[key] {
                            let json = try JSONSerialization.data(withJSONObject: anyObject ?? "", options: .fragmentsAllowed)

                            value[key] = anyObject is String ?
                                String(describing: anyObject!) : String(data: json, encoding: .utf8)
                        } else {
                            value[key] = nil
                        }
                    }
                } catch {
                    throw VaultError.unhandledError("Unabled to parse data: \(error.localizedDescription)")
                }
            } else {
                throw VaultError.unhandledError("Unable to parse data")
            }
            try vault.importVault(value)
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    func isEmpty(_ config: IdentityVaultConfig) throws -> Bool {
        let vault = try self.getOrCreateVault(config)
        let value = vault.isEmpty()
        return value
    }

    func isLocked(_ config: IdentityVaultConfig) throws -> Bool {
        let vault = try self.getOrCreateVault(config)
        let value = vault.isLocked()
        return value
    }

    func getKeys(_ config: IdentityVaultConfig) throws -> String {
        let vault = try self.getOrCreateVault(config)
        do {
            let keys = try vault.getKeys()
            let jsonData = try JSONSerialization.data(withJSONObject: keys )
            let jsonString = String(data: jsonData, encoding: .ascii) ?? ""
            return jsonString
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    func getValue(_ config: IdentityVaultConfig, _ key: String) throws -> String? {
        let vault = try self.getOrCreateVault(config)
        do {
            guard let value = try vault.getValue(key) else {
                return nil
            }
            return value
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    func lock(_ config: IdentityVaultConfig) throws {
        let vault = try self.getOrCreateVault(config)
        do {
            try vault.lock(false)
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    func onConfigChanged(_ callback: @escaping (IdentityVaultConfig) throws -> Void) throws {
        self.onConfigChangedCallback = callback
    }

    func onLock(_ config: IdentityVaultConfig, _ callback: @escaping (Bool) throws -> Void) throws {
        let vault = try self.getOrCreateVault(config)
        vault.onLock(callback)
    }

    func onUnlock(_ config: IdentityVaultConfig, _ callback: @escaping () -> Void) throws {
        let vault = try self.getOrCreateVault(config)
        vault.onUnlock(callback)
    }

    func onError(_ config: IdentityVaultConfig, _ callbackId: String, _ callback: @escaping(Error, String) -> Void) throws {
        let vault = try self.getOrCreateVault(config)
        vault.onError(callbackId, callback)
    }

    func removeValue(_ config: IdentityVaultConfig, _ key: String) throws {
        let vault = try self.getOrCreateVault(config)
        do {
            try vault.removeValue(key)
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    func setCustomPasscode(_ config: IdentityVaultConfig, _ passcode: String) throws {
        let vault = try self.getOrCreateVault(config)
        try vault.setCustomPasscode(passcode)
    }

    func setValue(_ config: IdentityVaultConfig, _ key: String, _ value: String?) throws {
        let vault = try self.getOrCreateVault(config)
        do {
            try vault.setValue(key, value)
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    func setup(_ config: IdentityVaultConfig) throws {
        if !self.isSetup {
            self.setupNotifications()
            self.isSetup = true
        }

        if config.unlockVaultOnLoad == true {
            // trigger the appLaunched event
            let vault = try self.getOrCreateVault(config)
            do {
                try vault.appLaunched()
            } catch {
                vault.handleError(error: error)
                throw error
            }
        }
    }

    func getVaultConfig(_ config: IdentityVaultConfig) throws -> IdentityVaultConfig {
        let vault = try self.getOrCreateVault(config)
        return vault.config
    }

    func unlock(_ config: IdentityVaultConfig) throws {
        let vault = try self.getOrCreateVault(config)
        do {
            try vault.unlock()
        } catch {
            vault.handleError(error: error)
            throw error
        }
    }

    func updateConfig(_ config: IdentityVaultConfig) throws {
        let vault = try self.getOrCreateVault(config)
        try vault.unlock()
        let passcodeFromOldVault = vault.customPasscode
        self.vaults.removeValue(forKey: config.key)
        let data = try vault.exportVault()
        do {
            try vault.clear()
            let newVault = try self.getOrCreateVault(config)
            if newVault is CustomPasscodeVault {
                if passcodeFromOldVault != nil {
                    newVault.customPasscode = passcodeFromOldVault
                } else {
                    throw VaultError.missingPasscode(true)
                }
            }
            try newVault.unlock()
            if data != nil {
                try newVault.importVault(data!)
            }
            self.vaults[config.key] = newVault
            if let onLockCallback = vault.onLockCallback {
                newVault.onLock(onLockCallback)
            }
            if let onUnlockCallback = vault.onUnlockCallback {
                newVault.onUnlock(onUnlockCallback)
            }
            if let onErrorCallback = vault.onErrorCallback, let errorCallbackId = vault.errorCallbackId {
                newVault.onError(errorCallbackId, onErrorCallback)
            }

            if self.onConfigChangedCallback != nil {
                try self.onConfigChangedCallback!(config)
            }
        } catch {
            // if there was an error, keep the old vault in place
            if data != nil {
                try vault.importVault(data!)
            }
            if passcodeFromOldVault != nil {
                vault.customPasscode = passcodeFromOldVault
            }
            self.vaults[config.key] = vault

            vault.handleError(error: error)
            throw error
        }
    }

    private func createVault(_ config: IdentityVaultConfig) throws -> VaultBase {
        var vault: VaultBase
        var vaultType: String?
        var vaultDeviceSecurityType: String?
        var vaultConfig = config

        vaultType = try VaultBase.getPersistedVaultType(key: vaultConfig.key)
        if let type = vaultType {
            vaultConfig.type = type
        }

        vaultDeviceSecurityType = try VaultBase.getPersistedVaultDeviceSecurityType(key: vaultConfig.key)
        if let deviceSecurity = vaultDeviceSecurityType {
            vaultConfig.deviceSecurityType = deviceSecurity
        }

        switch vaultConfig.type {
        case "CustomPasscode":
            vault = try CustomPasscodeVault(vaultConfig)
        case "DeviceSecurity":
            vault = try DeviceSecurityVault(vaultConfig)
        case "SecureStorage":
            vault = try SecureStorageVault(vaultConfig)
        case "InMemory":
            vault = try InMemoryVault(vaultConfig)
        default:
            throw VaultError.invalidArguments("Vault Config type \(vaultConfig.type) is not a valid type")
        }
        return vault
    }

    private func getOrCreateVault(_ config: IdentityVaultConfig) throws -> VaultBase {
        var vault = self.vaults[config.key]
        if vault == nil {
            vault = try createVault(config)
            self.vaults[config.key] = vault
        }
        return vault!
    }

    private func setupNotifications() {

        #if swift(>=4.2)

        //        NotificationCenter.default.addObserver(self,
        //                                               selector:#selector(applicationDidFinishLaunching(_:)),
        //                                               name:UIApplication.didFinishLaunchingNotification,
        //                                               object: nil)

        NotificationCenter.default.addObserver(self,
                                               selector: #selector(applicationDidEnterBackground(_:)),
                                               name: UIApplication.didEnterBackgroundNotification,
                                               object: nil)

        // Note: app resuming is handled by subscribing to cordova's "resume" event in IDVault.ts

        //        NotificationCenter.default.addObserver(self,
        //                                               selector:#selector(applicationWillResignActive(_:)),
        //                                               name:UIApplication.willResignActiveNotification,
        //                                               object: nil)

        NotificationCenter.default.addObserver(self,
                                               selector: #selector(applicationWillEnterForeground(_:)),
                                               name: UIApplication.willEnterForegroundNotification,
                                               object: nil)

        #else

        //        NotificationCenter.default.addObserver(self,
        //                                               selector:#selector(applicationWillResignActive(_:)),
        //                                               name: UIApplication.didEnterBackgroundNotification,
        //                                               object: nil)
        //
        //        NotificationCenter.default.addObserver(self,
        //                                               selector:#selector(applicationWillEnterForeground(_:)),
        //                                               name:NSNotification.Name.UIApplicationWillEnterForeground,
        //                                               object: nil)
        //
        #endif
    }

    // Notifcation Handlers

    @objc func applicationDidEnterBackground(_ notification: NSNotification) {
        for (_, vault) in self.vaults {
            vault.backgroundEntered()
        }
    }

    @objc func applicationWillEnterForeground(_ notification: NSNotification) throws {

    }

}
