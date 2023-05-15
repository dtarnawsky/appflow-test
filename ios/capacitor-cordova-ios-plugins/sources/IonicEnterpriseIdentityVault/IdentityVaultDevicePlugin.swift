import Cordova
@objc(IdentityVaultDevicePlugin)
class IdentityVaultDevicePlugin: CDVPlugin {
    private lazy var device = Device()
    private var screenProtectionViewController: UIViewController?

    // swiftlint:disable lower_acl_than_parent
    override public func pluginInitialize() {

        #if swift(>=4.2)
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(applicationDidBecomeActive(_:)),
                                               name: UIApplication.didBecomeActiveNotification,
                                               object: nil)

        NotificationCenter.default.addObserver(self,
                                               selector: #selector(applicationWillResignActive(_:)),
                                               name: UIApplication.willResignActiveNotification,
                                               object: nil)
        #else
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(applicationDidBecomeActive(_:)),
                                               name: .UIApplicationDidBecomeActive,
                                               object: nil)
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(applicationWillResignActive(_:)),
                                               name: .UIApplicationWillResignActive,
                                               object: nil)
        #endif
    }
    // swiftlint:enable lower_acl_than_parent

    @objc(getAvailableHardware:) func getAvailableHardware(_ command: CDVInvokedUrlCommand) {
        let hardware: [String] = [device.type.rawValue]
        return sendResult(command, hardware)
    }

    @objc(isLockedOutOfBiometrics:) func isLockedOutOfBiometrics(_ command: CDVInvokedUrlCommand) {
        let isLockedOut = device.isLockedOut
        return sendResult(command, isLockedOut ? "true" : "false")
    }

    @objc(getBiometricStrengthLevel:) func getBiometricStrengthLevel(_ command: CDVInvokedUrlCommand) {
        // always returns 'strong' on iOS
        return sendResult(command, "strong")
    }

    @objc(isHideScreenOnBackgroundEnabled:) func isHideScreenOnBackgroundEnabled(_ command: CDVInvokedUrlCommand) {
        let isEnabled = device.hideScreenOnBackground
        return sendResult(command, isEnabled ? "true" : "false")
    }

    @objc(setHideScreenOnBackground:) func setHideScreenOnBackground(_ command: CDVInvokedUrlCommand) {
        guard let isEnabled = command.arguments[0] as? Bool else {
            return sendErrorResult(command, DevicePluginError.invalidArguments("boolean value missing"))
        }

        device.setHideScreenOnBackground(enabled: isEnabled)
        return sendEmptyResult(command)
    }

    @objc(isSystemPasscodeSet:) func isSystemPasscodeSet(_ command: CDVInvokedUrlCommand) {
        let isSet = device.isDevicePasscodeSet
        return sendResult(command, isSet ? "true" : "false")
    }

    @objc(isBiometricsEnabled:) func isBiometricsEnabled(_ command: CDVInvokedUrlCommand) {
        let isEnabled  = device.isBiometricsEnabled
        return sendResult(command, isEnabled ? "true" : "false")
    }

    @objc(isBiometricsAllowed:) func isBiometricsAllowed(_ command: CDVInvokedUrlCommand) {
        if device.type == .fingerprint {
            return sendResult(command, "granted")
        }

        let isAllowed = device.isBiometricsGranted
        let prompted = UserDefaults.standard.bool(forKey: "iv_biometricPrompted")

        if prompted {
            return sendResult(command, isAllowed ? "granted" : "denied")
        } else {
            return sendResult(command, "prompt")
        }
    }

    @objc(isBiometricsSupported:) func isBiometricsSupported(_ command: CDVInvokedUrlCommand) {
        let isAvailable = device.isBiometricsSupported
        return sendResult(command, isAvailable ? "true" : "false")
    }

    @objc(hasSecureHardware:) func hasSecureHardware(_ command: CDVInvokedUrlCommand) {
        let isSecure = device.hasSecureHardware
        return sendResult(command, isSecure ? "true" : "false")
    }

    @objc(showBiometricPrompt:) func showBiometricPrompt(_ command: CDVInvokedUrlCommand) {
        do {
            let config = try self.getConfig(command)
            try device.showBiometricPrompt(config)
            return sendEmptyResult(command)
        } catch {
            return sendErrorResult(command, error)
        }
    }

    private func sendResult(_ command: CDVInvokedUrlCommand, _ value: String?, keepCallback: Bool = false) {
        let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: value)
        result?.setKeepCallbackAs(keepCallback)
        commandDelegate.send(result, callbackId: command.callbackId)
    }

    private func sendResult(_ command: CDVInvokedUrlCommand, _ data: [String], keepCallback: Bool = false) {
        let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: data)
        result?.setKeepCallbackAs(keepCallback)
        commandDelegate.send(result, callbackId: command.callbackId)
    }

    private func sendEmptyResult(_ command: CDVInvokedUrlCommand, keepCallback: Bool = false) {
        let result = CDVPluginResult(status: CDVCommandStatus_OK)
        result?.setKeepCallbackAs(keepCallback)
        commandDelegate.send(result, callbackId: command.callbackId)
    }

    private func sendErrorResult(_ command: CDVInvokedUrlCommand, _ error: Error) {
        let result = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: getDevicePluginErrorObject(error).asDictionary)
        result?.setKeepCallbackAs(true)
        commandDelegate.send(result, callbackId: command.callbackId)
    }

    private func obscureScreen() {
        // first, get the key window which should be the primary interface
        let window: UIWindow?
        if #available(iOS 13, *) {
            window = UIApplication.shared.connectedScenes
                .filter({$0.activationState == .foregroundActive || $0.activationState == .foregroundInactive})
                .compactMap({$0 as? UIWindowScene}).first?.windows.filter({$0.isKeyWindow}).first
        } else {
            window = UIApplication.shared.windows.filter({$0.isKeyWindow}).first
        }
        // now get its view controller
        guard var vc = window?.rootViewController else {
            return
        }
        // or the top-most presented view controller, as the presenter may no longer be in the visual hierarchy
        while let presentedVC = vc.presentedViewController {
            vc = presentedVC
        }
        // now that we know where to present it, get a view controller and show it
        if screenProtectionViewController == nil {
            let screenVC = viewControllerForObscuringScreen()
            vc.present(screenVC, animated: false, completion: nil)
            screenProtectionViewController = screenVC
        }
    }

    private func unobscureScreen() {
        screenProtectionViewController?.dismiss(animated: false, completion: nil)
        screenProtectionViewController = nil
    }

    private func getConfig(_ command: CDVInvokedUrlCommand) throws -> PromptConfig {
        guard let promptConfigDict = command.arguments[0] as? [String: Any] else {
            throw DevicePluginError.invalidArguments("Prompt Config missing")
        }

        let promptConfig = try PromptConfig(promptConfigDict)
        return promptConfig
    }

    fileprivate func viewControllerForObscuringScreen() -> UIViewController {
        let viewController: UIViewController
        // first, try to get one of our expected launch images
        var image = UIImage(named: "LaunchImage")
        if image == nil {
            image = UIImage(named: "Splash")
        }
        // if we don't have an image, check if we can get a view controller from the launch storyboard
        if image == nil,
           let boardName = Bundle.main.object(forInfoDictionaryKey: "UILaunchStoryboardName") as? String,
           let launchVC = UIStoryboard(name: boardName, bundle: nil).instantiateInitialViewController() {
            viewController = launchVC
        } else {
            // create a view controller and set its background color so the screen will always be hidden
            viewController = UIViewController(nibName: nil, bundle: nil)
            if #available(iOS 13, *) {
                viewController.view.backgroundColor = UIColor.systemBackground
            } else {
                viewController.view.backgroundColor = .white
            }
            if let image = image {
                // add the image if we have it
                let imageView = UIImageView(image: image)
                imageView.translatesAutoresizingMaskIntoConstraints = false
                imageView.contentMode = .scaleAspectFill
                imageView.isOpaque = false
                imageView.backgroundColor = .clear
                viewController.view.addSubview(imageView)
                imageView.leadingAnchor.constraint(equalTo: viewController.view.leadingAnchor).isActive = true
                imageView.trailingAnchor.constraint(equalTo: viewController.view.trailingAnchor).isActive = true
                imageView.topAnchor.constraint(equalTo: viewController.view.topAnchor).isActive = true
                imageView.bottomAnchor.constraint(equalTo: viewController.view.bottomAnchor).isActive = true
            }
        }
        // use overFullScreen so that existing views are not removed
        viewController.modalPresentationStyle = .overFullScreen
        viewController.view.isUserInteractionEnabled = false
        return viewController
    }

    @objc func applicationDidBecomeActive(_ notification: NSNotification) {
        unobscureScreen()
    }

    @objc func applicationWillResignActive(_ notification: NSNotification) {
        if device.hideScreenOnBackground && !Device.isShowingBiometrics {
            obscureScreen()
        }
    }
}
