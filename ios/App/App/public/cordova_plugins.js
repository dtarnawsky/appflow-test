
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "@ionic-enterprise/identity-vault.ionicnativeauth",
          "file": "plugins/@ionic-enterprise/identity-vault/www/ionicnativeauth.js",
          "pluginId": "@ionic-enterprise/identity-vault",
        "clobbers": [
          "IonicNativeAuth"
        ],
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "@ionic-enterprise/auth": "3.10.2",
      "@ionic-enterprise/identity-vault": "5.9.5"
    };
    // BOTTOM OF METADATA
    });
    