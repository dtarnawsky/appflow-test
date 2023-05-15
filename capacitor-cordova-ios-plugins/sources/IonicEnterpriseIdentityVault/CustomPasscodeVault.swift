import Cordova
import Foundation
import LocalAuthentication

class CustomPasscodeVault: VaultBase {

    override var vaultType: String? {
        return VaultType.CUSTOM_PASSCODE.rawValue
    }

    override init(_ config: IdentityVaultConfig) throws {
        try super.init(config)
        self.allowedInvalidUnlockAttempts = config.customPasscodeInvalidUnlockAttempts != nil ? config.customPasscodeInvalidUnlockAttempts! : 5
        self.authContext = LAContext()
        self.accessControl = SecAccessControlCreateWithFlags(nil,
                                                             kSecAttrAccessibleWhenUnlockedThisDeviceOnly,
                                                             .applicationPassword,
                                                             nil)
    }

    override func unlock(_ forceUnlock: Bool = true) throws {
        if self.isLocked() {
            let doesVaultExist = try self.doesVaultExist()
            if doesVaultExist || forceUnlock {
                if self.customPasscode == nil {
                    throw VaultError.missingPasscode(!doesVaultExist)
                }
                self.authContext!.setCredential(self.customPasscode!.data(using: .utf8), type: .applicationPassword)
                return try super.unlock(forceUnlock)
            }
        }
    }
}
