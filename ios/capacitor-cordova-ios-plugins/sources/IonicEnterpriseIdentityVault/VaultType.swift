import Cordova
internal enum VaultType: String {
    // swiftlint:disable identifier_name
    case CUSTOM_PASSCODE = "CustomPasscode"
    case DEVICE_SECURITY = "DeviceSecurity"
    case SECURE_STORAGE = "SecureStorage"
    case IN_MEMORY = "InMemory"
    case UNKNOWN = "Unknown"
}
