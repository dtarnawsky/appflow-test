import Cordova
import Foundation

public struct IdentityVaultConfig: Codable {
    let key: String
    var type: String
    var deviceSecurityType: String
    let lockAfterBackgrounded: Int32?
    let customPasscodeInvalidUnlockAttempts: Int32?
    let shouldClearVaultAfterTooManyFailedAttempts: Bool?
    let unlockVaultOnLoad: Bool?
    let iosBiometricsLocalizedCancelTitle: String?
    let iosBiometricsLocalizedFallbackTitle: String?
    let iosBiometricsLocalizedReason: String?

    init(_ config: [String: Any]) throws {
        do {
            self = try JSONDecoder().decode(IdentityVaultConfig.self,
                                            from: JSONSerialization.data(withJSONObject: config))
        } catch DecodingError.keyNotFound(let key, _) {
            // swiftlint:disable:next line_length
            throw VaultError.invalidArguments("Config object is missing the required '\(key.stringValue)' property. [Docs: https://ionic.io/docs/identity-vault/interfaces/identityvaultconfig]")
        } catch DecodingError.typeMismatch(let theType, let context),
                DecodingError.valueNotFound(let theType, let context) {
            // swiftlint:disable:next line_length
            throw VaultError.invalidArguments("Config object property '\(context.codingPath[0].stringValue)' is not of type '\(theType)'. [Docs: https://ionic.io/docs/identity-vault/interfaces/identityvaultconfig]")
        } catch {
            // swiftlint:disable:next line_length
            throw VaultError.invalidArguments("Supplied Config object is invalid. [Docs: https://ionic.io/docs/identity-vault/interfaces/identityvaultconfig]")
        }
    }
}
