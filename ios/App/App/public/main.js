(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.service */ 2655);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



class AppComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.notificationService.register();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicRouteStrategy }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 2655:
/*!******************************************!*\
  !*** ./src/app/notifications.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var _Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/push-notifications */ 1704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class NotificationsService {
  constructor() {}

  register() {
    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationActionPerformed', notification => {
        console.log('pushNotificationActionPerformed', notification);
      });
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registration', token => {
        console.log('Register ' + JSON.stringify(token));
      });
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registrationError', error => {
        console.log('registrationError ', error);
      });
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationReceived', notification => {
        console.log('pushNotificationReceived ', JSON.stringify(notification));
      });
      yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.register();
      console.log('Push notifications registered');
    })();
  }

}

NotificationsService.ɵfac = function NotificationsService_Factory(t) {
  return new (t || NotificationsService)();
};

NotificationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: NotificationsService,
  factory: NotificationsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment),
/* harmony export */   "nativeIonicAuthOptions": () => (/* binding */ nativeIonicAuthOptions),
/* harmony export */   "webIonicAuthOptions": () => (/* binding */ webIonicAuthOptions)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const nativeIonicAuthOptions = {
    // The auth provider.
    authConfig: 'azure',
    // The platform which the app is running on
    platform: 'capacitor',
    // client or application id for provider
    clientID: '5a5ef942-0e44-46a8-bbac-6a8ba7654eb0',
    // the discovery url for the provider
    // OpenID configuration
    discoveryUrl: 'https://ioniccs.b2clogin.com/ioniccs.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_SignUp',
    // the URI to redirect to after log in
    redirectUri: 'io.ionic.iv-test://login',
    // requested scopes from provider
    scope: 'openid offline_access email profile https://ioniccs.onmicrosoft.com/5a5ef942-0e44-46a8-bbac-6a8ba7654eb0/user_impersonation',
    // the URL to redirect to after log out
    logoutUrl: 'io.ionic.iv-test://logout',
    // The type of iOS webview to use. 'shared' will use a webview that can
    // share session/cookies on iOS to provide SSO across multiple apps but
    // will cause a prompt for the user which asks them to confirm they want
    // to share site data with the app. 'private' uses a webview which will
    // not prompt the user but will not be able to share session/cookie data
    // either for true SSO across multiple apps.
    iosWebView: 'private',
    webAuthFlow: 'PKCE'
};
const webIonicAuthOptions = {
    // The auth provider.
    authConfig: 'azure',
    // The platform which the app is running on
    platform: 'web',
    // client or application id for provider
    clientID: '5a5ef942-0e44-46a8-bbac-6a8ba7654eb0',
    // the discovery url for the provider
    // OpenID configuration
    discoveryUrl: 'https://ioniccs.b2clogin.com/ioniccs.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_SignUp',
    // the URI to redirect to after log in
    redirectUri: 'http://localhost:8100/tabs/tab1',
    // requested scopes from provider
    scope: 'openid offline_access email profile https://ioniccs.onmicrosoft.com/5a5ef942-0e44-46a8-bbac-6a8ba7654eb0/user_impersonation',
    // the URL to redirect to after log out
    logoutUrl: 'http://localhost:8100/tabs/tab1',
    // The type of iOS webview to use. 'shared' will use a webview that can
    // share session/cookies on iOS to provide SSO across multiple apps but
    // will cause a prompt for the user which asks them to confirm they want
    // to share site data with the app. 'private' uses a webview which will
    // not prompt the user but will not be able to share session/cookie data
    // either for true SSO across multiple apps.
    iosWebView: 'private'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ1hsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIuL3NyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwiLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCIuL3NyYy9hcHAvbm90aWZpY2F0aW9ucy5zZXJ2aWNlLnRzIiwiLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLi9zcmMvbWFpbi50cyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMkIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByZWxvYWRBbGxNb2R1bGVzLCBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vdGFicy90YWJzLm1vZHVsZScpLnRoZW4obSA9PiBtLlRhYnNQYWdlTW9kdWxlKVxuICB9LFxuICB7XG4gICAgcGF0aDogJ2xvZ2luJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9sb2dpbi9sb2dpbi5tb2R1bGUnKS50aGVuKCBtID0+IG0uTG9naW5QYWdlTW9kdWxlKVxuICB9XG5dO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyBwcmVsb2FkaW5nU3RyYXRlZ3k6IFByZWxvYWRBbGxNb2R1bGVzIH0pXG4gIF0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXIoKTtcbiAgfVxuXG5cbn1cbiIsIjxpb24tYXBwPlxuICA8aW9uLXJvdXRlci1vdXRsZXQ+PC9pb24tcm91dGVyLW91dGxldD5cbjwvaW9uLWFwcD5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZVJldXNlU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBJb25pY01vZHVsZSwgSW9uaWNSb3V0ZVN0cmF0ZWd5IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBJb25pY01vZHVsZS5mb3JSb290KCksIEFwcFJvdXRpbmdNb2R1bGVdLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogUm91dGVSZXVzZVN0cmF0ZWd5LCB1c2VDbGFzczogSW9uaWNSb3V0ZVN0cmF0ZWd5IH1dLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3Rpb25QZXJmb3JtZWQsXG4gIFB1c2hOb3RpZmljYXRpb25zLFxuICBQdXNoTm90aWZpY2F0aW9uU2NoZW1hLFxuICBUb2tlblxufSBmcm9tICdAY2FwYWNpdG9yL3B1c2gtbm90aWZpY2F0aW9ucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBhc3luYyByZWdpc3RlcigpIHtcbiAgICBQdXNoTm90aWZpY2F0aW9ucy5hZGRMaXN0ZW5lcigncHVzaE5vdGlmaWNhdGlvbkFjdGlvblBlcmZvcm1lZCcsIChub3RpZmljYXRpb246IEFjdGlvblBlcmZvcm1lZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3B1c2hOb3RpZmljYXRpb25BY3Rpb25QZXJmb3JtZWQnLCBub3RpZmljYXRpb24pO1xuICAgIH0pO1xuICAgIFB1c2hOb3RpZmljYXRpb25zLmFkZExpc3RlbmVyKCdyZWdpc3RyYXRpb24nLCAodG9rZW46IFRva2VuKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXIgJyArIEpTT04uc3RyaW5naWZ5KHRva2VuKSk7XG4gICAgfSk7XG4gICAgUHVzaE5vdGlmaWNhdGlvbnMuYWRkTGlzdGVuZXIoJ3JlZ2lzdHJhdGlvbkVycm9yJywgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RyYXRpb25FcnJvciAnLCBlcnJvcik7XG4gICAgfSk7XG4gICAgUHVzaE5vdGlmaWNhdGlvbnMuYWRkTGlzdGVuZXIoJ3B1c2hOb3RpZmljYXRpb25SZWNlaXZlZCcsIChub3RpZmljYXRpb246IFB1c2hOb3RpZmljYXRpb25TY2hlbWEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdwdXNoTm90aWZpY2F0aW9uUmVjZWl2ZWQgJywgSlNPTi5zdHJpbmdpZnkobm90aWZpY2F0aW9uKSk7XG4gICAgfSk7XG4gICAgYXdhaXQgUHVzaE5vdGlmaWNhdGlvbnMucmVnaXN0ZXIoKTtcbiAgICBjb25zb2xlLmxvZygnUHVzaCBub3RpZmljYXRpb25zIHJlZ2lzdGVyZWQnKTtcbiAgfVxufVxuXG4vLyBOb3RlczogRG9jcyBkb250IG1lbnRpb24gd2hhdCB0byBpbXBvcnQsIGFkZExpc3RlbmVyIHNob3VsZCBiZSByZWZhY3RvcmVkIHRvIHJlbW92ZSBzdHJpbmdzXG4iLCIvLyBUaGlzIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGR1cmluZyBidWlsZCBieSB1c2luZyB0aGUgYGZpbGVSZXBsYWNlbWVudHNgIGFycmF5LlxuLy8gYG5nIGJ1aWxkIC0tcHJvZGAgcmVwbGFjZXMgYGVudmlyb25tZW50LnRzYCB3aXRoIGBlbnZpcm9ubWVudC5wcm9kLnRzYC5cbi8vIFRoZSBsaXN0IG9mIGZpbGUgcmVwbGFjZW1lbnRzIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci5qc29uYC5cblxuaW1wb3J0IHsgSW9uaWNBdXRoT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1lbnRlcnByaXNlL2F1dGgnO1xuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgbmF0aXZlSW9uaWNBdXRoT3B0aW9uczogSW9uaWNBdXRoT3B0aW9ucyA9IHtcbiAgLy8gVGhlIGF1dGggcHJvdmlkZXIuXG4gIGF1dGhDb25maWc6ICdhenVyZScsXG4gIC8vIFRoZSBwbGF0Zm9ybSB3aGljaCB0aGUgYXBwIGlzIHJ1bm5pbmcgb25cbiAgcGxhdGZvcm06ICdjYXBhY2l0b3InLFxuICAvLyBjbGllbnQgb3IgYXBwbGljYXRpb24gaWQgZm9yIHByb3ZpZGVyXG4gIGNsaWVudElEOiAnNWE1ZWY5NDItMGU0NC00NmE4LWJiYWMtNmE4YmE3NjU0ZWIwJyxcbiAgLy8gdGhlIGRpc2NvdmVyeSB1cmwgZm9yIHRoZSBwcm92aWRlclxuICAvLyBPcGVuSUQgY29uZmlndXJhdGlvblxuICBkaXNjb3ZlcnlVcmw6ICdodHRwczovL2lvbmljY3MuYjJjbG9naW4uY29tL2lvbmljY3Mub25taWNyb3NvZnQuY29tL3YyLjAvLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24/cD1CMkNfMV9TaWduVXAnLFxuICAvLyB0aGUgVVJJIHRvIHJlZGlyZWN0IHRvIGFmdGVyIGxvZyBpblxuICByZWRpcmVjdFVyaTogJ2lvLmlvbmljLml2LXRlc3Q6Ly9sb2dpbicsXG4gIC8vIHJlcXVlc3RlZCBzY29wZXMgZnJvbSBwcm92aWRlclxuICBzY29wZTogJ29wZW5pZCBvZmZsaW5lX2FjY2VzcyBlbWFpbCBwcm9maWxlIGh0dHBzOi8vaW9uaWNjcy5vbm1pY3Jvc29mdC5jb20vNWE1ZWY5NDItMGU0NC00NmE4LWJiYWMtNmE4YmE3NjU0ZWIwL3VzZXJfaW1wZXJzb25hdGlvbicsXG4gIC8vIHRoZSBVUkwgdG8gcmVkaXJlY3QgdG8gYWZ0ZXIgbG9nIG91dFxuICBsb2dvdXRVcmw6ICdpby5pb25pYy5pdi10ZXN0Oi8vbG9nb3V0JyxcbiAgLy8gVGhlIHR5cGUgb2YgaU9TIHdlYnZpZXcgdG8gdXNlLiAnc2hhcmVkJyB3aWxsIHVzZSBhIHdlYnZpZXcgdGhhdCBjYW5cbiAgLy8gc2hhcmUgc2Vzc2lvbi9jb29raWVzIG9uIGlPUyB0byBwcm92aWRlIFNTTyBhY3Jvc3MgbXVsdGlwbGUgYXBwcyBidXRcbiAgLy8gd2lsbCBjYXVzZSBhIHByb21wdCBmb3IgdGhlIHVzZXIgd2hpY2ggYXNrcyB0aGVtIHRvIGNvbmZpcm0gdGhleSB3YW50XG4gIC8vIHRvIHNoYXJlIHNpdGUgZGF0YSB3aXRoIHRoZSBhcHAuICdwcml2YXRlJyB1c2VzIGEgd2VidmlldyB3aGljaCB3aWxsXG4gIC8vIG5vdCBwcm9tcHQgdGhlIHVzZXIgYnV0IHdpbGwgbm90IGJlIGFibGUgdG8gc2hhcmUgc2Vzc2lvbi9jb29raWUgZGF0YVxuICAvLyBlaXRoZXIgZm9yIHRydWUgU1NPIGFjcm9zcyBtdWx0aXBsZSBhcHBzLlxuICBpb3NXZWJWaWV3OiAncHJpdmF0ZScsXG4gIHdlYkF1dGhGbG93OiAnUEtDRSdcbn07XG5cbmV4cG9ydCBjb25zdCB3ZWJJb25pY0F1dGhPcHRpb25zOiBJb25pY0F1dGhPcHRpb25zID0ge1xuICAvLyBUaGUgYXV0aCBwcm92aWRlci5cbiAgYXV0aENvbmZpZzogJ2F6dXJlJyxcbiAgLy8gVGhlIHBsYXRmb3JtIHdoaWNoIHRoZSBhcHAgaXMgcnVubmluZyBvblxuICBwbGF0Zm9ybTogJ3dlYicsXG4gIC8vIGNsaWVudCBvciBhcHBsaWNhdGlvbiBpZCBmb3IgcHJvdmlkZXJcbiAgY2xpZW50SUQ6ICc1YTVlZjk0Mi0wZTQ0LTQ2YTgtYmJhYy02YThiYTc2NTRlYjAnLFxuICAvLyB0aGUgZGlzY292ZXJ5IHVybCBmb3IgdGhlIHByb3ZpZGVyXG4gIC8vIE9wZW5JRCBjb25maWd1cmF0aW9uXG4gIGRpc2NvdmVyeVVybDogJ2h0dHBzOi8vaW9uaWNjcy5iMmNsb2dpbi5jb20vaW9uaWNjcy5vbm1pY3Jvc29mdC5jb20vdjIuMC8ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbj9wPUIyQ18xX1NpZ25VcCcsXG4gIC8vIHRoZSBVUkkgdG8gcmVkaXJlY3QgdG8gYWZ0ZXIgbG9nIGluXG4gIHJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDo4MTAwL3RhYnMvdGFiMScsXG4gIC8vIHJlcXVlc3RlZCBzY29wZXMgZnJvbSBwcm92aWRlclxuICBzY29wZTogJ29wZW5pZCBvZmZsaW5lX2FjY2VzcyBlbWFpbCBwcm9maWxlIGh0dHBzOi8vaW9uaWNjcy5vbm1pY3Jvc29mdC5jb20vNWE1ZWY5NDItMGU0NC00NmE4LWJiYWMtNmE4YmE3NjU0ZWIwL3VzZXJfaW1wZXJzb25hdGlvbicsXG4gIC8vIHRoZSBVUkwgdG8gcmVkaXJlY3QgdG8gYWZ0ZXIgbG9nIG91dFxuICBsb2dvdXRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjgxMDAvdGFicy90YWIxJyxcbiAgLy8gVGhlIHR5cGUgb2YgaU9TIHdlYnZpZXcgdG8gdXNlLiAnc2hhcmVkJyB3aWxsIHVzZSBhIHdlYnZpZXcgdGhhdCBjYW5cbiAgLy8gc2hhcmUgc2Vzc2lvbi9jb29raWVzIG9uIGlPUyB0byBwcm92aWRlIFNTTyBhY3Jvc3MgbXVsdGlwbGUgYXBwcyBidXRcbiAgLy8gd2lsbCBjYXVzZSBhIHByb21wdCBmb3IgdGhlIHVzZXIgd2hpY2ggYXNrcyB0aGVtIHRvIGNvbmZpcm0gdGhleSB3YW50XG4gIC8vIHRvIHNoYXJlIHNpdGUgZGF0YSB3aXRoIHRoZSBhcHAuICdwcml2YXRlJyB1c2VzIGEgd2VidmlldyB3aGljaCB3aWxsXG4gIC8vIG5vdCBwcm9tcHQgdGhlIHVzZXIgYnV0IHdpbGwgbm90IGJlIGFibGUgdG8gc2hhcmUgc2Vzc2lvbi9jb29raWUgZGF0YVxuICAvLyBlaXRoZXIgZm9yIHRydWUgU1NPIGFjcm9zcyBtdWx0aXBsZSBhcHBzLlxuICBpb3NXZWJWaWV3OiAncHJpdmF0ZSdcbn07XG5cbi8qXG4gKiBGb3IgZWFzaWVyIGRlYnVnZ2luZyBpbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgY2FuIGltcG9ydCB0aGUgZm9sbG93aW5nIGZpbGVcbiAqIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXMgYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYC5cbiAqXG4gKiBUaGlzIGltcG9ydCBzaG91bGQgYmUgY29tbWVudGVkIG91dCBpbiBwcm9kdWN0aW9uIG1vZGUgYmVjYXVzZSBpdCB3aWxsIGhhdmUgYSBuZWdhdGl2ZSBpbXBhY3RcbiAqIG9uIHBlcmZvcm1hbmNlIGlmIGFuIGVycm9yIGlzIHRocm93bi5cbiAqL1xuLy8gaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZS1lcnJvcic7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuIiwiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pb24tYWNjb3JkaW9uXzIuZW50cnkuanNcIjogW1xuXHRcdDc5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYWNjb3JkaW9uXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWFjdGlvbi1zaGVldC5lbnRyeS5qc1wiOiBbXG5cdFx0NTU5Myxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFjdGlvbi1zaGVldF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYWxlcnQuZW50cnkuanNcIjogW1xuXHRcdDMyMjUsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hbGVydF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYXBwXzguZW50cnkuanNcIjogW1xuXHRcdDQ4MTIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hcHBfOF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYXZhdGFyXzMuZW50cnkuanNcIjogW1xuXHRcdDY2NTUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYXZhdGFyXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJhY2stYnV0dG9uLmVudHJ5LmpzXCI6IFtcblx0XHQ0ODU2LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYmFjay1idXR0b25fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJhY2tkcm9wLmVudHJ5LmpzXCI6IFtcblx0XHQzMDU5LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJhY2tkcm9wX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1icmVhZGNydW1iXzIuZW50cnkuanNcIjogW1xuXHRcdDg2NDgsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1icmVhZGNydW1iXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJ1dHRvbl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ4MzA4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJ1dHRvbl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jYXJkXzUuZW50cnkuanNcIjogW1xuXHRcdDQ2OTAsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tY2FyZF81X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jaGVja2JveC5lbnRyeS5qc1wiOiBbXG5cdFx0NDA5MCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGVja2JveF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY2hpcC5lbnRyeS5qc1wiOiBbXG5cdFx0NjIxNCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGlwX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jb2xfMy5lbnRyeS5qc1wiOiBbXG5cdFx0OTQ0Nyxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jb2xfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWUtYnV0dG9uLmVudHJ5LmpzXCI6IFtcblx0XHQ3OTUwLFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9kYXRhLWNiNzI0NDhjX2pzLW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX3RoLTI5ZTI4ZVwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWRhdGV0aW1lLWJ1dHRvbl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWVfMy5lbnRyeS5qc1wiOiBbXG5cdFx0OTY4OSxcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21fZGF0YS1jYjcyNDQ4Y19qcy1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV90aC0yOWUyOGVcIixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWRhdGV0aW1lXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWZhYl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ4ODQwLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tZmFiXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWltZy5lbnRyeS5qc1wiOiBbXG5cdFx0NzQ5LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWltZ19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5maW5pdGUtc2Nyb2xsXzIuZW50cnkuanNcIjogW1xuXHRcdDk2NjcsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbmZpbml0ZS1zY3JvbGxfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5wdXQuZW50cnkuanNcIjogW1xuXHRcdDMyODgsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbnB1dF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taXRlbS1vcHRpb25fMy5lbnRyeS5qc1wiOiBbXG5cdFx0NTQ3Myxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWl0ZW0tb3B0aW9uXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWl0ZW1fOC5lbnRyeS5qc1wiOiBbXG5cdFx0MzYzNCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWl0ZW1fOF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbG9hZGluZy5lbnRyeS5qc1wiOiBbXG5cdFx0Mjg1NSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1sb2FkaW5nX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1tZW51XzMuZW50cnkuanNcIjogW1xuXHRcdDQ5NSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW1lbnVfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbW9kYWwuZW50cnkuanNcIjogW1xuXHRcdDg3MzcsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1tb2RhbF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbmF2XzIuZW50cnkuanNcIjogW1xuXHRcdDk2MzIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1uYXZfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcGlja2VyLWNvbHVtbi1pbnRlcm5hbC5lbnRyeS5qc1wiOiBbXG5cdFx0NDQ0Nixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXBpY2tlci1jb2x1bW4taW50ZXJuYWxfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBpY2tlci1pbnRlcm5hbC5lbnRyeS5qc1wiOiBbXG5cdFx0MjI3NSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1waWNrZXItaW50ZXJuYWxfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBvcG92ZXIuZW50cnkuanNcIjogW1xuXHRcdDgwNTAsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1wb3BvdmVyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1wcm9ncmVzcy1iYXIuZW50cnkuanNcIjogW1xuXHRcdDg5OTQsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcHJvZ3Jlc3MtYmFyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yYWRpb18yLmVudHJ5LmpzXCI6IFtcblx0XHQzNTkyLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJhZGlvXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJhbmdlLmVudHJ5LmpzXCI6IFtcblx0XHQ1NDU0LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmFuZ2VfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJlZnJlc2hlcl8yLmVudHJ5LmpzXCI6IFtcblx0XHQyOTAsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yZWZyZXNoZXJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmVvcmRlcl8yLmVudHJ5LmpzXCI6IFtcblx0XHQyNjY2LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmVvcmRlcl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yaXBwbGUtZWZmZWN0LmVudHJ5LmpzXCI6IFtcblx0XHQ0ODE2LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJpcHBsZS1lZmZlY3RfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJvdXRlXzQuZW50cnkuanNcIjogW1xuXHRcdDU1MzQsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcm91dGVfNF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VhcmNoYmFyLmVudHJ5LmpzXCI6IFtcblx0XHQ0OTAyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc2VhcmNoYmFyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zZWdtZW50XzIuZW50cnkuanNcIjogW1xuXHRcdDE5MzgsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWdtZW50XzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlbGVjdF8zLmVudHJ5LmpzXCI6IFtcblx0XHQ4MTc5LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlbGVjdF8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zbGlkZV8yLmVudHJ5LmpzXCI6IFtcblx0XHQ2NjgsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc2xpZGVfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc3Bpbm5lci5lbnRyeS5qc1wiOiBbXG5cdFx0MTYyNCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNwaW5uZXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNwbGl0LXBhbmUuZW50cnkuanNcIjogW1xuXHRcdDk5ODksXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc3BsaXQtcGFuZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGFiLWJhcl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ4OTAyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdGFiLWJhcl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10YWJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MTk5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdGFiXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRleHQuZW50cnkuanNcIjogW1xuXHRcdDgzOTUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdGV4dF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGV4dGFyZWEuZW50cnkuanNcIjogW1xuXHRcdDYzNTcsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdGV4dGFyZWFfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRvYXN0LmVudHJ5LmpzXCI6IFtcblx0XHQ4MjY4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRvYXN0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10b2dnbGUuZW50cnkuanNcIjogW1xuXHRcdDUyNjksXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10b2dnbGVfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXZpcnR1YWwtc2Nyb2xsLmVudHJ5LmpzXCI6IFtcblx0XHQyODc1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXZpcnR1YWwtc2Nyb2xsX2VudHJ5X2pzXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gODYzO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyJdLCJuYW1lcyI6WyJQdXNoTm90aWZpY2F0aW9ucyIsIk5vdGlmaWNhdGlvbnNTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJyZWdpc3RlciIsImFkZExpc3RlbmVyIiwibm90aWZpY2F0aW9uIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiZmFjdG9yeSIsInByb3ZpZGVkSW4iXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzddfQ==