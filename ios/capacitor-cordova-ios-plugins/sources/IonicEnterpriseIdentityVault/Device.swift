import Cordova
import LocalAuthentication

public class Device {
    public static var isShowingBiometrics: Bool = false
    public var error: NSError?
    private let context = LAContext()
    private var hideScreenOnBackgroundEnabled: Bool = false

    public enum HardwareType: String {
        case fingerprint
        case face
        case none

        var deprecatedType: String {
            switch self {
            case .fingerprint:
                return "touchID"
            case .face:
                return "faceID"
            case .none:
                return self.rawValue
            }
        }
    }

    public var hideScreenOnBackground: Bool {
        return hideScreenOnBackgroundEnabled
    }

    public func setHideScreenOnBackground(enabled: Bool) {
        hideScreenOnBackgroundEnabled = enabled
    }

    public var isAvailable: Bool {
        return context.canEvaluatePolicy(.deviceOwnerAuthentication, error: &error)
    }

    public var isLockedOut: Bool {
        return !isAvailable && error!.code == LAError.biometryLockout.rawValue
    }

    public var isDevicePasscodeSet: Bool {
        return context.canEvaluatePolicy(.deviceOwnerAuthentication, error: &error)
    }

    public var isBiometricsEnabled: Bool {
        // swiftlint:disable line_length
        return !(!context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) && (error!.code == LAError.biometryNotEnrolled.rawValue  || error!.code == LAError.passcodeNotSet.rawValue))
        // swiftlint:enable line_length
    }

    public var isBiometricsGranted: Bool {
        return context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error)
    }

    public var isBiometricsSupported: Bool {
        return !(!isAvailable && error!.code == LAError.biometryNotAvailable.rawValue)
    }

    public var hasSecureHardware: Bool {
        let isSimulator = TARGET_OS_SIMULATOR == 1
        return !isSimulator && isAvailable
    }

    public var type: HardwareType {
        if #available(iOS 11.0, *) {
            // biometryType is not set until canEvaluatePolicy is called at least once, so this empty call is required
            _ = isAvailable
            switch context.biometryType {
            case .faceID:
                return .face
            case .touchID:
                return .fingerprint
            case .none:
                return .none
            default:
                return .none
            }
        } else {
            return isAvailable ? .fingerprint : .none
        }
    }

    internal static func setBiometricPermissionPromptState(prompted: Bool) {
        UserDefaults.standard.set(prompted, forKey: "iv_biometricPrompted")
    }

    public func showBiometricPrompt(_ config: PromptConfig) throws {
        let authContext = LAContext()

        if config.iosBiometricsLocalizedCancelTitle != nil {
            authContext.localizedCancelTitle = config.iosBiometricsLocalizedCancelTitle
        }
        if config.iosBiometricsLocalizedReason != nil {
            authContext.localizedReason = config.iosBiometricsLocalizedReason!
        }

        authContext.localizedFallbackTitle = ""

        var resultError: DevicePluginError?
        var resultBool: Bool?

        let dispatchGroup = DispatchGroup()

        dispatchGroup.enter()

        authContext.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: authContext.localizedReason) { success, error in
            if success {
                resultBool = true
                Device.setBiometricPermissionPromptState(prompted: true)
            } else {
                resultBool = false
                if let laError = (error as? LAError) {
                    switch laError.code {
                    case .userCancel:
                        resultError = DevicePluginError.userCanceledAuth
                    case .authenticationFailed:
                        resultError = DevicePluginError.authFailed
                    case .biometryNotEnrolled:
                        resultError = DevicePluginError.biometricsNotEnabled
                    case .biometryNotAvailable:
                        resultError = DevicePluginError.securityNotAvailable
                    case .biometryLockout:
                        resultError = DevicePluginError.biometricsLockedOut
                    default:
                        print("unknown error: \(laError.localizedDescription)")
                        resultError = DevicePluginError.unhandledError(laError.localizedDescription)
                    }
                }
            }

            dispatchGroup.leave()
        }

        dispatchGroup.wait()

        if let success = resultBool {
            if !success {
                if let err = resultError {
                    throw err
                }
            }
        }
    }
}
