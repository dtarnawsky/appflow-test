import Cordova
import Foundation

public enum DevicePluginError: Error {
    case invalidArguments(_ description: String)
    case unhandledError(_ description: String)
    case authFailed
    case userCanceledAuth
    case securityNotAvailable
    case biometricsNotEnabled
    case biometricsLockedOut
}

public struct DevicePluginErrorObject {
    let code: Int
    let message: String
    init(_ code: Int, _ message: String) {
        self.code = code
        self.message = message
    }

    var asDictionary: [String: Any] {
        return ["code": code, "message": message]
    }
}

public func getDevicePluginErrorObject(_ error: Error) -> DevicePluginErrorObject {
    switch error {
    case DevicePluginError.invalidArguments(let message):
        return DevicePluginErrorObject(1, "Invalid Arguments Provided: " + message)
    case DevicePluginError.userCanceledAuth:
        return DevicePluginErrorObject(2, "User canceled auth attempt.")
    case DevicePluginError.securityNotAvailable:
        return DevicePluginErrorObject(3, "Biometric Security unavailable.")
    case DevicePluginError.authFailed:
        return DevicePluginErrorObject(4, "Failed authorization attempt")
    case DevicePluginError.biometricsLockedOut:
        return DevicePluginErrorObject(5, "Biometrics have been locked due to too many attempts")
    case DevicePluginError.biometricsNotEnabled:
        return DevicePluginErrorObject(6, "Biometric auth is not enabled")
    case DevicePluginError.unhandledError(let message):
        return DevicePluginErrorObject(0, "Unhandled Error: " + message)
    default:
        return DevicePluginErrorObject(0, "Unhandled Error: " + error.localizedDescription)
    }
}
