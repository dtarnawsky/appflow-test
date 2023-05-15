import Cordova
import Foundation
@objc(IonicAuthConnectStorage) class IonicAuthConnectStorage : CDVPlugin {
    
    let KEY_PREFIX = "ionic_auth_connect:"
    
    func getDefaults() -> UserDefaults {
        return UserDefaults.standard
    }
    
    @objc(get:)
    func get(command: CDVInvokedUrlCommand) {
        let key = command.argument(at: 0) as! String
        let value = getDefaults().string(forKey: makeKey(key))
        let result = CDVPluginResult(status: CDVCommandStatus.ok, messageAs: value)
        self.commandDelegate.send(result, callbackId: command.callbackId)
    }
    
    @objc(set:)
    func set(command: CDVInvokedUrlCommand) {
        let key = command.argument(at: 0) as! String
        let value = command.argument(at: 1) as! String
        getDefaults().set(value, forKey: makeKey(key))
        self.commandDelegate.send(CDVPluginResult(status: CDVCommandStatus.ok), callbackId: command.callbackId)
    }
    
    @objc(remove:)
    func remove(command: CDVInvokedUrlCommand) {
        let key = command.argument(at: 0) as! String
        getDefaults().removeObject(forKey: makeKey(key))
        self.commandDelegate.send(CDVPluginResult(status: CDVCommandStatus.ok), callbackId: command.callbackId)
    }
    
    @objc(clear:)
    func clear(command: CDVInvokedUrlCommand) {
        getDefaults().dictionaryRepresentation().keys.filter({ (key) -> Bool in
            return isKey(key)
        }).forEach { (key) in
            getDefaults().removeObject(forKey: key)
        }
    }
    
    private func isKey(_ key: String) -> Bool {
        return key.hasPrefix(KEY_PREFIX)
    }    
    
    private func makeKey(_ key: String) -> String {
        return KEY_PREFIX + key
    }
}
