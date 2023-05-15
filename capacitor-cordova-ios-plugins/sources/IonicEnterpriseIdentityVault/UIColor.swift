import Cordova
import UIKit

extension UIColor {
    convenience init(hexString: String) {
        let hex = hexString.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int = UInt32()
        Scanner(string: hex).scanHexInt32(&int)
        let alphaVal, redVal, greenVal, blueVal: UInt32
        switch hex.count {
        case 3: // RGB (12-bit)
            (alphaVal, redVal, greenVal, blueVal) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: // RGB (24-bit)
            (alphaVal, redVal, greenVal, blueVal) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8: // ARGB (32-bit)
            (alphaVal, redVal, greenVal, blueVal) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (alphaVal, redVal, greenVal, blueVal) = (255, 0, 0, 0)
        }
        self.init(red: CGFloat(redVal) / 255,
                  green: CGFloat(greenVal) / 255,
                  blue: CGFloat(blueVal) / 255,
                  alpha: CGFloat(alphaVal) / 255)
    }
}
