cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-email-composer.EmailComposer",
    "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
    "pluginId": "cordova-plugin-email-composer",
    "clobbers": [
      "cordova.plugins.email"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "clobbers": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "cordova-plugin-speechrecognition.SpeechRecognition",
    "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
    "pluginId": "cordova-plugin-speechrecognition",
    "merges": [
      "window.plugins.speechRecognition"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-tts.tts",
    "file": "plugins/cordova-plugin-tts/www/tts.js",
    "pluginId": "cordova-plugin-tts",
    "clobbers": [
      "TTS"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-email-composer": "0.9.1",
  "cordova-plugin-ionic-keyboard": "2.1.3",
  "cordova-plugin-ionic-webview": "2.3.1",
  "cordova-plugin-screen-orientation": "3.0.1",
  "cordova-plugin-speechrecognition": "1.1.2",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-tts": "0.2.3",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});