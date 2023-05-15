import Cordova
import Foundation

// swiftlint:disable function_body_length identifier_name
// swiftlint:disable type_body_length force_unwrapping

class InMemoryVault: VaultBase {
    override var vaultType: String? {
        return VaultType.IN_MEMORY.rawValue
    }

    override init(_ config: IdentityVaultConfig) throws {
        try super.init(config)
        self.data = [:]
    }

    override func clear() throws {
        self.data = nil
        self.data = [:]
        self.customPasscode = nil
    }

    override func doesVaultExist() throws -> Bool {
        return true
    }

    override func exportVault() throws -> [String: String]? {
        return self.data
    }

    override func lock(_ wasTimeout: Bool) throws {
        try self.clear()
        if let onLockCallback = self.onLockCallback {
            try onLockCallback(wasTimeout)
        }
        return
    }

    override func importVault(_ data: [String: String]) throws {
        self.data = data
    }

    override func isEmpty() -> Bool {
        guard let data = self.data else {
            return true
        }

        return data.isEmpty
    }

    override func setValue(_ key: String, _ value: String?) throws {
        self.data![key] = value
    }

    override func removeValue(_ key: String) throws {
        self.data!.removeValue(forKey: key)
    }

    override func unlock(_ forceUnlock: Bool = true) throws {
        return
    }
}
