import Cordova
import Foundation

public struct UIKitLocalizedString {

    public static func forKey(_ key: String) -> String {

        guard let bundle = Bundle(identifier: "com.apple.UIKit") else { return key}

        let localizedString = bundle.localizedString(forKey: key, value: nil, table: nil)

        return localizedString

    }

}

extension UIKitLocalizedString {

    // swiftlint:disable identifier_name
    public static var ok: String {
        return UIKitLocalizedString.forKey("OK")
    }
    // swiftlint:enable identifier_name

    public static var genericLoginError: String {
        return UIKitLocalizedString.forKey("LOGIN_ERROR_GENERIC")
    }
}
