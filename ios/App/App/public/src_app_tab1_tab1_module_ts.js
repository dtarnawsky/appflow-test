"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 5973:
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _ionic_enterprise_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-enterprise/auth */ 6824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vault.service */ 3899);








class AuthenticationService extends _ionic_enterprise_auth__WEBPACK_IMPORTED_MODULE_1__.IonicAuth {
  constructor(platform, ngZone, vaultService) {
    super(platform.is('hybrid') ? { ..._environments_environment__WEBPACK_IMPORTED_MODULE_2__.nativeIonicAuthOptions,
      tokenStorageProvider: vaultService.vault
    } : _environments_environment__WEBPACK_IMPORTED_MODULE_2__.webIonicAuthOptions);
    this.ngZone = ngZone;
    this.vaultService = vaultService;
    this.authenticationChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.authenticationChange$ = this.authenticationChange.asObservable();
    this.isAuthenticated().then(authenticated => {
      this.onAuthChange(authenticated);
    });
  }

  onLoginSuccess() {
    var _this = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.onAuthChange(true);
    })();
  }

  onLogout() {
    var _this2 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.onAuthChange(false);
    })();
  }

  onAuthChange(isAuthenticated) {
    var _this3 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.ngZone.run(() => {
        _this3.authenticationChange.next(isAuthenticated);
      });
    })();
  }

}

AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_vault_service__WEBPACK_IMPORTED_MODULE_3__.VaultService));
};

AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
class Tab1PageRoutingModule {
}
Tab1PageRoutingModule.ɵfac = function Tab1PageRoutingModule_Factory(t) { return new (t || Tab1PageRoutingModule)(); };
Tab1PageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Tab1PageRoutingModule });
Tab1PageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Tab1PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class Tab1PageModule {
}
Tab1PageModule.ɵfac = function Tab1PageModule_Factory(t) { return new (t || Tab1PageModule)(); };
Tab1PageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Tab1PageModule });
Tab1PageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Tab1PageModule, { declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule] }); })();


/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var _Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/authentication.service */ 5973);
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vault.service */ 3899);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






class Tab1Page {
  constructor(authenticationService, vaultService, platform) {
    var _this = this;

    this.authenticationService = authenticationService;
    this.vaultService = vaultService;
    this.platform = platform;
    this.authenticationChange$ = authenticationService.authenticationChange$;
    this.platform.resume.subscribe( /*#__PURE__*/(0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.update();
    }));
  }

  ionViewDidEnter() {
    var _this2 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.update();
    })();
  }

  update() {
    var _this3 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isEmpty = (yield _this3.vaultService.isEmpty()) ? 'Vault is empty' : 'Vault has data';
      _this3.isLocked = (yield _this3.vaultService.isLocked()) ? 'Vault is locked' : 'Vault is unlocked';
    })();
  }

  login() {
    var _this4 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // This line is required if iosWebView is shared and we are using Identity Vault. It prevents the privacy screen from displaying
      // Device.setHideScreenOnBackground(false);
      yield _this4.authenticationService.login();
    })();
  }

  logout() {
    var _this5 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this5.authenticationService.logout();
      } catch (err) {
        console.error(err);
      }
    })();
  }

  refresh() {
    var _this6 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(yield _this6.authenticationService.isRefreshTokenAvailable());
      const token = yield _this6.authenticationService.getAccessToken();
      console.log(token);
      yield _this6.authenticationService.refreshSession();
      const atoken = yield _this6.authenticationService.getAccessToken();
      console.log(atoken);

      if (atoken !== token) {
        alert('Token was refreshed');
      }
    })();
  }

  lock() {
    var _this7 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (yield _this7.vaultService.lock()) {
        const isLocked = yield _this7.vaultService.isLocked();

        if (!isLocked) {
          _this7.vaultService.presentAlert('Error', 'Vault lock call was successfully made but is returning locked is false');
        }
      }

      yield _this7.update();
    })();
  }

  unlock() {
    var _this8 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this8.vaultService.unlock();
      yield _this8.update();
    })();
  }

  checkIsEmpty() {
    var _this9 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isEmpty = yield _this9.vaultService.isEmpty();

      _this9.vaultService.presentAlert('Message', `isEmpty is ${isEmpty}"`);
    })();
  }

  clear() {
    var _this10 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this10.vaultService.clear();
      yield _this10.update();
    })();
  }

  setData() {
    var _this11 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11.vaultService.setData();
      yield _this11.update();
    })();
  }

  getData() {
    var _this12 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const data = yield _this12.vaultService.getData();

        _this12.vaultService.presentAlert('Message', `The vault data read as "${data}"`);
      } catch (err) {
        _this12.vaultService.presentAlert('Error', `Failed to get data "${err.message}" (Error Code: ${err.code})`);

        yield _this12.update();
      }
    })();
  }

  checkBio() {
    var _this13 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const hasBio = yield _this13.vaultService.hasBiometrics();
      alert('Biometrics is ' + hasBio);
    })();
  }

  useSecure(enabled) {
    var _this14 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this14.vaultService.useSecure(enabled);
    })();
  }

  setToPasscode() {
    var _this15 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this15.vaultService.switchPasscode();
    })();
  }

  setToBoth() {
    var _this16 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this16.vaultService.switchBoth();
    })();
  }

}

Tab1Page.ɵfac = function Tab1Page_Factory(t) {
  return new (t || Tab1Page)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_vault_service__WEBPACK_IMPORTED_MODULE_2__.VaultService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform));
};

Tab1Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: Tab1Page,
  selectors: [["app-tab1"]],
  decls: 48,
  vars: 13,
  consts: [[3, "translucent"], [3, "hidden", "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [2, "padding", "25px"], [3, "click"]],
  template: function Tab1Page_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons")(3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_6_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_9_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Sign Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-content", 2)(13, "ion-header", 3)(14, "ion-toolbar")(15, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Test");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5)(18, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_18_listener() {
        return ctx.lock();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Lock");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_20_listener() {
        return ctx.unlock();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Unlock");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_22_listener() {
        return ctx.clear();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_24_listener() {
        return ctx.refresh();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_26_listener() {
        return ctx.checkBio();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Check Bio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_28_listener() {
        return ctx.getData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Get Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_30_listener() {
        return ctx.setData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Set Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_32_listener() {
        return ctx.useSecure(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Switch to Secure");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_34_listener() {
        return ctx.useSecure(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Switch to Bio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_36_listener() {
        return ctx.setToBoth();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Switch to Both");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_38_listener() {
        return ctx.setToPasscode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Switch to Passcode");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab1Page_Template_ion_button_click_40_listener() {
        return ctx.checkIsEmpty();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Check isEmpty");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 5)(43, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Authenticated=", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, ctx.authenticationChange$), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 9, ctx.authenticationChange$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 11, ctx.authenticationChange$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isEmpty);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isLocked);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */"]
});

/***/ }),

/***/ 3899:
/*!**********************************!*\
  !*** ./src/app/vault.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultService": () => (/* binding */ VaultService)
/* harmony export */ });
/* harmony import */ var _Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-enterprise/identity-vault */ 7312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);





class VaultService {
  constructor(platform, alertController) {
    this.platform = platform;
    this.alertController = alertController;
    this.config = {
      key: 'io.ionic.iv-test-bio5',
      type: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.VaultType.DeviceSecurity,
      deviceSecurityType: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.DeviceSecurityType.Biometrics,
      lockAfterBackgrounded: 2000,
      shouldClearVaultAfterTooManyFailedAttempts: true,
      customPasscodeInvalidUnlockAttempts: 10,
      unlockVaultOnLoad: false
    };
    this.init();
  }

  init() {
    var _this = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.platform.ready();
      _this.vault = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'web' ? new _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.BrowserVault(_this.config) : new _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.Vault(_this.config);

      _this.vault.onConfigChanged(() => {
        console.log('Vault configuration was changed', _this.config);
      });

      _this.vault.onLock(() => {
        console.log('Vault was locked');
      });

      _this.vault.onUnlock(() => {
        console.log('Vault was unlocked');
      });

      _this.vault.onError(err => {
        console.error('Vault error', err);

        _this.presentAlert('Vault Error', err.code + ': ' + err.message);
      });

      yield _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.Device.setHideScreenOnBackground(true);
    })();
  }

  presentAlert(header, message) {
    var _this2 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
      return role;
    })();
  }

  switchBoth() {
    var _this3 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.config.type = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.VaultType.DeviceSecurity;
      _this3.config.deviceSecurityType = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.DeviceSecurityType.Both;
      yield _this3.vault.updateConfig(_this3.config);

      _this3.setData();
    })();
  }

  switchPasscode() {
    var _this4 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this4.vault = new _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.Vault({
          key: 'io.ionic.iv-test-sysp',
          type: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.VaultType.SecureStorage,
          deviceSecurityType: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.DeviceSecurityType.None,
          lockAfterBackgrounded: 2000,
          shouldClearVaultAfterTooManyFailedAttempts: true,
          customPasscodeInvalidUnlockAttempts: 10,
          unlockVaultOnLoad: false
        });
        yield _this4.vault.setValue('blar', 'stuff'); // This code blows up on an iOS device without fingerprint/bio and only system passcode

        yield _this4.vault.updateConfig({
          key: 'io.ionic.iv-test-sysp',
          type: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.VaultType.DeviceSecurity,
          deviceSecurityType: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.DeviceSecurityType.SystemPasscode,
          lockAfterBackgrounded: 2000,
          shouldClearVaultAfterTooManyFailedAttempts: true,
          customPasscodeInvalidUnlockAttempts: 10,
          unlockVaultOnLoad: false
        });
      } catch (err) {
        alert(`${err.message} (Error Code: ${err.code})`);
      }
    })();
  }

  lock() {
    var _this5 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this5.vault.lock();
        console.log('vault was locked');
        return true;
      } catch (err) {
        console.error('vault.service.ts lock()', err);
        return false;
      }
    })();
  }

  unlock() {
    var _this6 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this6.vault.unlock();
        console.log('vault was unlocked');
      } catch (err) {
        const msg = typeof err == 'object' ? JSON.stringify(err) : err;
        console.error('vault.service.ts unlock()', msg);
      }
    })();
  }

  useSecure(enabled) {
    var _this7 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.config.type = enabled ? _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.VaultType.SecureStorage : _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.VaultType.DeviceSecurity;
      _this7.config.deviceSecurityType = enabled ? _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.DeviceSecurityType.None : _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.DeviceSecurityType.Biometrics;
      yield _this7.vault.updateConfig(_this7.config);

      _this7.setData();
    })();
  }

  getData() {
    var _this8 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Get Data....');
      const data = yield _this8.vault.getValue('blar');
      console.log('Get Data', data);
      return data;
    })();
  }

  setData() {
    var _this9 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Setting data...');
        yield _this9.vault.setValue('blar', 'test');
        console.log('Data is set');
      } catch (err) {
        console.error('vault.service.ts setData()', err);
      }
    })();
  }

  isEmpty() {
    var _this10 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this10.vault.isEmpty();
    })();
  }

  isLocked() {
    var _this11 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this11.vault.isLocked();
    })();
  }

  clear() {
    var _this12 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this12.vault.clear();
        console.log('Vault was cleared');
      } catch (err) {
        console.error('vault.service.ts clear()', err);
      }
    })();
  }

  hasBiometrics() {
    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_2__.Device.isBiometricsEnabled();
    })();
  }

}

VaultService.ɵfac = function VaultService_Factory(t) {
  return new (t || VaultService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController));
};

VaultService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: VaultService,
  factory: VaultService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6824:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic-enterprise/auth/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicAuth": () => (/* binding */ IonicAuth),
/* harmony export */   "NativeStorageProvider": () => (/* binding */ NativeStorageProvider),
/* harmony export */   "WebStorageProvider": () => (/* binding */ WebStorageProvider)
/* harmony export */ });
/* harmony import */ var _Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Ionic Enterprise Auth Connect: https://ionicframework.com/ - Commercially Licensed */
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

var requiresPort = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;
  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

var has = Object.prototype.hasOwnProperty,
    undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */

function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */


function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */


function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]); //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //

    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */


function querystringify(obj, prefix) {
  prefix = prefix || '';
  var pairs = [],
      value,
      key; //
  // Optionally prefix with a '?' if needed
  //

  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key]; //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //

      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value); //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //

      if (key === null || value === null) continue;
      pairs.push(key + '=' + value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
} //
// Expose the module.
//


var stringify = querystringify;
var parse = querystring;
var querystringify_1 = {
  stringify: stringify,
  parse: parse
};
var controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
    CRHTLF = /[\n\r\t]/g,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    port = /:\d+$/,
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
    windowsDriveLetter = /^[a-zA-Z]:/;
/**
 * Remove control characters and whitespace from the beginning of a string.
 *
 * @param {Object|String} str String to trim.
 * @returns {String} A new string representing `str` stripped of control
 *     characters and whitespace from its beginning.
 * @public
 */

function trimLeft(str) {
  return (str ? str : '').toString().replace(controlOrWhitespace, '');
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */


var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address, url) {
  // Sanitize what is left of the address
  return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d*)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */

var ignore = {
  hash: 1,
  query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */

function lolcation(loc) {
  var globalVar;
  if (typeof window !== 'undefined') globalVar = window;else if (typeof commonjsGlobal !== 'undefined') globalVar = commonjsGlobal;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
  var location = globalVar.location || {};
  loc = loc || location;
  var finaldestination = {},
      type = typeof loc,
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});

    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}
/**
 * Check whether a protocol scheme is special.
 *
 * @param {String} The protocol scheme of the URL
 * @return {Boolean} `true` if the protocol scheme is special, else `false`
 * @private
 */


function isSpecial(scheme) {
  return scheme === 'file:' || scheme === 'ftp:' || scheme === 'http:' || scheme === 'https:' || scheme === 'ws:' || scheme === 'wss:';
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @param {Object} location
 * @return {ProtocolExtract} Extracted information.
 * @private
 */


function extractProtocol(address, location) {
  address = trimLeft(address);
  address = address.replace(CRHTLF, '');
  location = location || {};
  var match = protocolre.exec(address);
  var protocol = match[1] ? match[1].toLowerCase() : '';
  var forwardSlashes = !!match[2];
  var otherSlashes = !!match[3];
  var slashesCount = 0;
  var rest;

  if (forwardSlashes) {
    if (otherSlashes) {
      rest = match[2] + match[3] + match[4];
      slashesCount = match[2].length + match[3].length;
    } else {
      rest = match[2] + match[4];
      slashesCount = match[2].length;
    }
  } else {
    if (otherSlashes) {
      rest = match[3] + match[4];
      slashesCount = match[3].length;
    } else {
      rest = match[4];
    }
  }

  if (protocol === 'file:') {
    if (slashesCount >= 2) {
      rest = rest.slice(2);
    }
  } else if (isSpecial(protocol)) {
    rest = match[4];
  } else if (protocol) {
    if (forwardSlashes) {
      rest = rest.slice(2);
    }
  } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
    rest = match[4];
  }

  return {
    protocol: protocol,
    slashes: forwardSlashes || isSpecial(protocol),
    slashesCount: slashesCount,
    rest: rest
  };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */


function resolve(relative, base) {
  if (relative === '') return base;
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');
  return path.join('/');
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */


function Url(address, location, parser) {
  address = trimLeft(address);
  address = address.replace(CRHTLF, '');

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location,
      url = this,
      i = 0; //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //

  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = querystringify_1.parse;
  location = lolcation(location); //
  // Extract protocol information before running the instructions.
  //

  extracted = extractProtocol(address || '', location);
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest; //
  // When the authority component is absent the URL starts with a path
  // component.
  //

  if (extracted.protocol === 'file:' && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
    instructions[3] = [/(.*)/, 'pathname'];
  }

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address, url);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      index = parse === '@' ? address.lastIndexOf(parse) : address.indexOf(parse);

      if (~index) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //

    if (instruction[4]) url[key] = url[key].toLowerCase();
  } //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //


  if (parser) url.query = parser(url.query); //
  // If the URL is relative, resolve the pathname against the base URL.
  //

  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  } //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //


  if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
    url.pathname = '/' + url.pathname;
  } //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //


  if (!requiresPort(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  } //
  // Parse down the `auth` for the username and password.
  //


  url.username = url.password = '';

  if (url.auth) {
    index = url.auth.indexOf(':');

    if (~index) {
      url.username = url.auth.slice(0, index);
      url.username = encodeURIComponent(decodeURIComponent(url.username));
      url.password = url.auth.slice(index + 1);
      url.password = encodeURIComponent(decodeURIComponent(url.password));
    } else {
      url.username = encodeURIComponent(decodeURIComponent(url.auth));
    }

    url.auth = url.password ? url.username + ':' + url.password : url.username;
  }

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null'; //
  // The href is just the compiled result.
  //

  url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */


function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || querystringify_1.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!requiresPort(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;
      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (port.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }

      break;

    case 'username':
    case 'password':
      url[part] = encodeURIComponent(value);
      break;

    case 'auth':
      var index = value.indexOf(':');

      if (~index) {
        url.username = value.slice(0, index);
        url.username = encodeURIComponent(decodeURIComponent(url.username));
        url.password = value.slice(index + 1);
        url.password = encodeURIComponent(decodeURIComponent(url.password));
      } else {
        url.username = encodeURIComponent(decodeURIComponent(value));
      }

  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];
    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.auth = url.password ? url.username + ':' + url.password : url.username;
  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
  url.href = url.toString();
  return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */


function toString$1(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = querystringify_1.stringify;
  var query,
      url = this,
      host = url.host,
      protocol = url.protocol;
  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
  var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  } else if (url.password) {
    result += ':' + url.password;
    result += '@';
  } else if (url.protocol !== 'file:' && isSpecial(url.protocol) && !host && url.pathname !== '/') {
    //
    // Add back the empty userinfo, otherwise the original invalid URL
    // might be transformed into a valid one with `url.pathname` as host.
    //
    result += '@';
  } //
  // Trailing colon is removed from `url.host` when it is parsed. If it still
  // ends with a colon, then add back the trailing colon that was removed. This
  // prevents an invalid URL from being transformed into a valid one.
  //


  if (host[host.length - 1] === ':' || port.test(url.hostname) && !url.port) {
    host += ':';
  }

  result += host + url.pathname;
  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
  if (url.hash) result += url.hash;
  return result;
}

Url.prototype = {
  set: set,
  toString: toString$1
}; //
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//

Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = querystringify_1;
var urlParse = Url;
/**
 * @hidden
 */

class UrlInfo {
  constructor(url = undefined) {
    this.url = url;
    this.headers = undefined;
    this.payload = undefined;
  }

}

class Logger {
  constructor() {
    this.log_debug = false;
    this.log_error = true;
  }

  setLogLevel(logLevel) {
    switch (logLevel) {
      case 'DEBUG':
        this.log_debug = true;
        this.log_error = true;
        break;

      case 'ERROR':
        this.log_debug = false;
        this.log_error = true;
        break;

      case 'NONE':
        this.log_debug = false;
        this.log_error = false;
        break;

      default:
        this.log_debug = false;
        this.log_error = true;
    }
  }

  debug(...args) {
    if (this.log_debug) {
      console.log(...args);
    }
  }

  error(...args) {
    if (this.log_error) {
      console.error(...args);
    }
  }

}

const logging = new Logger();
window._ionicAuthLogging = logging;

class messages {}

messages.ADDING_COOKIES_NOT_SUPPORTED = 'auth-connect: string = "setHeader" does not support adding cookies, please use "setCookie" function instead';
messages.DATA_TYPE_MISMATCH = 'auth-connect: string = "data" argument supports only following data types:';
messages.INVALID_CLIENT_AUTH_ALIAS = 'auth-connect: string = invalid client certificate alias, needs to be a string or undefined';
messages.INVALID_CLIENT_AUTH_MODE = 'auth-connect: string = invalid client certificate authentication mode, supported modes are:';
messages.INVALID_CLIENT_AUTH_OPTIONS = 'auth-connect: string = invalid client certificate authentication options, needs to be an object';
messages.INVALID_CLIENT_AUTH_PKCS_PASSWORD = 'auth-connect: string = invalid PKCS12 container password, needs to be a string';
messages.INVALID_CLIENT_AUTH_RAW_PKCS = 'auth-connect: string = invalid PKCS12 container, needs to be an array buffer';
messages.INVALID_DATA_SERIALIZER = 'auth-connect: string = invalid serializer, supported serializers are:';
messages.INVALID_FOLLOW_REDIRECT_VALUE = 'auth-connect: string = invalid follow redirect value, needs to be a boolean value';
messages.INVALID_HEADERS_VALUE = 'auth-connect: string = header values must be strings';
messages.INVALID_HTTP_METHOD = 'auth-connect: string = invalid HTTP method, supported methods are:';
messages.INVALID_PARAMS_VALUE = 'auth-connect: string = invalid params object, needs to be an object with strings';
messages.INVALID_RESPONSE_TYPE = 'auth-connect: string = invalid response type, supported types are:';
messages.INVALID_SSL_CERT_MODE = 'auth-connect: string = invalid SSL cert mode, supported modes are:';
messages.INVALID_TIMEOUT_VALUE = 'auth-connect: string = invalid timeout value, needs to be a positive numeric value';
messages.MANDATORY_FAIL = 'auth-connect: string = missing mandatory "onFail" callback function';
messages.MANDATORY_SUCCESS = 'auth-connect: string = missing mandatory "onSuccess" callback function';
messages.LOGOUT_UNABLE_TO_RETRIEVE_TOKEN = 'auth-connect: string = Unable to retrieve Id Token from storage';

class jsUtil {
  // typeof is not working reliably in JS
  static getTypeOf(object) {
    switch (Object.prototype.toString.call(object)) {
      case '[object Array]':
        return 'Array';

      case '[object Blob]':
        return 'Blob';

      case '[object ArrayBuffer]':
        return 'ArrayBuffer';

      case '[object Boolean]':
        return 'Boolean';

      case '[object Function]':
        return 'Function';

      case '[object Null]':
        return 'Null';

      case '[object Number]':
        return 'Number';

      case '[object Object]':
        return 'Object';

      case '[object String]':
        return 'String';

      case '[object Undefined]':
        return 'Undefined';

      default:
        return 'Unknown';
    }
  }

}

class helpers {
  static mergeHeaders(globalHeaders, localHeaders) {
    var globalKeys = Object.keys(globalHeaders);
    var key;

    for (var i = 0; i < globalKeys.length; i++) {
      key = globalKeys[i];

      if (!localHeaders.hasOwnProperty(key)) {
        localHeaders[key] = globalHeaders[key];
      }
    }

    return localHeaders;
  }

  static checkForValidStringValue(list, value, onInvalidValueMessage) {
    if (jsUtil.getTypeOf(value) !== 'String') {
      throw new Error(onInvalidValueMessage + ' ' + list.join(', '));
    }

    value = value.trim().toLowerCase();

    if (list.indexOf(value) === -1) {
      throw new Error(onInvalidValueMessage + ' ' + list.join(', '));
    }

    return value;
  }

  static checkKeyValuePairObject(obj, allowedChildren, onInvalidValueMessage) {
    if (jsUtil.getTypeOf(obj) !== 'Object') {
      throw new Error(onInvalidValueMessage);
    }

    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      if (allowedChildren.indexOf(jsUtil.getTypeOf(obj[keys[i]])) === -1) {
        throw new Error(onInvalidValueMessage);
      }
    }

    return obj;
  }

  static checkHttpMethod(method) {
    return this.checkForValidStringValue(this.validHttpMethods, method, messages.INVALID_HTTP_METHOD);
  }

  static checkResponseType(type) {
    return this.checkForValidStringValue(this.validResponseTypes, type, messages.INVALID_RESPONSE_TYPE);
  }

  static checkSerializer(serializer) {
    return this.checkForValidStringValue(this.validSerializers, serializer, messages.INVALID_DATA_SERIALIZER);
  }

  static checkForBlacklistedHeaderKey(key) {
    if (key.toLowerCase() === 'cookie') {
      throw new Error(messages.ADDING_COOKIES_NOT_SUPPORTED);
    }

    return key;
  }

  static checkForInvalidHeaderValue(value) {
    if (jsUtil.getTypeOf(value) !== 'String') {
      throw new Error(messages.INVALID_HEADERS_VALUE);
    }

    return value;
  }

  static checkTimeoutValue(timeout) {
    if (jsUtil.getTypeOf(timeout) !== 'Number' || timeout < 0) {
      throw new Error(messages.INVALID_TIMEOUT_VALUE);
    }

    return timeout;
  }

  static checkFollowRedirectValue(follow) {
    if (jsUtil.getTypeOf(follow) !== 'Boolean') {
      throw new Error(messages.INVALID_FOLLOW_REDIRECT_VALUE);
    }

    return follow;
  }

  static checkHeadersObject(headers) {
    return this.checkKeyValuePairObject(headers, ['String'], messages.INVALID_HEADERS_VALUE);
  }

  static checkParamsObject(params) {
    return this.checkKeyValuePairObject(params, ['String', 'Array'], messages.INVALID_PARAMS_VALUE);
  }

  static getMatchingHostHeaders(url, headersList) {
    var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    var domain = matches && matches[1];
    return headersList[domain] || null;
  }

  static getMergedHeaders(url, requestHeaders, predefinedHeaders) {
    var globalHeaders = predefinedHeaders['*'] || {};
    var hostHeaders = this.getMatchingHostHeaders(url, predefinedHeaders) || {};
    var mergedHeaders = this.mergeHeaders(globalHeaders, hostHeaders);
    mergedHeaders = this.mergeHeaders(mergedHeaders, requestHeaders);
    return mergedHeaders;
  }

  static getAllowedDataTypes(dataSerializer) {
    switch (dataSerializer) {
      case 'utf8':
        return ['String'];

      case 'urlencoded':
        return ['Object'];

      default:
        return ['Array', 'Object'];
    }
  }

  static getProcessedData(data, dataSerializer) {
    var currentDataType = jsUtil.getTypeOf(data);
    var allowedDataTypes = this.getAllowedDataTypes(dataSerializer);

    if (allowedDataTypes.indexOf(currentDataType) === -1) {
      throw new Error(messages.DATA_TYPE_MISMATCH + ' ' + allowedDataTypes.join(', '));
    }

    if (dataSerializer === 'utf8') {
      data = {
        text: data
      };
    }

    return data;
  }

  static handleMissingCallbacks(successFn, failFn) {
    if (successFn === undefined) {
      throw new Error(messages.MANDATORY_SUCCESS);
    }

    if (failFn === undefined) {
      throw new Error(messages.MANDATORY_FAIL);
    }
  }

  static handleMissingOptions(options, globals) {
    options = options || {};
    return {
      method: this.checkHttpMethod(options.method || this.validHttpMethods[0]),
      responseType: this.checkResponseType(options.responseType || this.validResponseTypes[0]),
      serializer: this.checkSerializer(options.serializer || globals.serializer),
      timeout: this.checkTimeoutValue(options.timeout || globals.timeout),
      followRedirect: this.checkFollowRedirectValue(options.followRedirect || globals.followRedirect),
      headers: this.checkHeadersObject(options.headers || {}),
      params: this.checkParamsObject(options.params || {}),
      data: jsUtil.getTypeOf(options.data) === 'Undefined' ? null : options.data,
      filePath: options.filePath || '',
      name: options.name || ''
    };
  }

}

helpers.validSerializers = ['urlencoded', 'json', 'utf8'];
helpers.validHttpMethods = ['get', 'put', 'post', 'patch', 'head', 'delete', 'upload', 'download'];
helpers.validResponseTypes = ['text', 'arraybuffer', 'blob'];

class globalConfigs {}

globalConfigs.headers = {};
globalConfigs.serializer = 'urlencoded';
globalConfigs.followRedirect = true;
globalConfigs.timeout = 60.0;

class http {
  static sendRequest(url, options, success, failure) {
    helpers.handleMissingCallbacks(success, failure);
    options = helpers.handleMissingOptions(options, globalConfigs);
    var headers = helpers.getMergedHeaders(url, options.headers, globalConfigs.headers);

    switch (options.method) {
      case 'post':
      case 'put':
      case 'patch':
        var data = helpers.getProcessedData(options.data, options.serializer);
        return cordova.exec(success, failure, 'IonicHttp', options.method, [url, data, options.serializer, headers, options.timeout, options.followRedirect, options.responseType]);

      default:
        return cordova.exec(success, failure, 'IonicHttp', options.method, [url, headers, options.timeout, options.followRedirect, options.responseType]);
    }
  }

  static post(url, data, headers, success, failure) {
    return http.sendRequest(url, {
      method: 'post',
      data: data,
      headers: headers
    }, success, failure);
  }

  static get(url, success, failure) {
    return http.sendRequest(url, {
      method: 'get',
      params: {},
      headers: {}
    }, success, failure);
  }

  static put(url, data, headers, success, failure) {
    return http.sendRequest(url, {
      method: 'put',
      data: data,
      headers: headers
    }, success, failure);
  }

  static patch(url, data, headers, success, failure) {
    return http.sendRequest(url, {
      method: 'patch',
      data: data,
      headers: headers
    }, success, failure);
  }

  static del(url, params, headers, success, failure) {
    return http.sendRequest(url, {
      method: 'delete',
      params: params,
      headers: headers
    }, success, failure);
  }

  static head(url, params, headers, success, failure) {
    return http.sendRequest(url, {
      method: 'head',
      params: params,
      headers: headers
    }, success, failure);
  }

}

class UrlHelper {
  static buildUrl(url, options) {
    const params = new URLSearchParams(options);
    const urlObj = new URL(url);
    params.forEach((val, key) => urlObj.searchParams.append(key, val));
    logging.debug(urlObj.href, this.logTag, 'buildUrl: ');
    return new UrlInfo(urlObj.href);
  }

  static parseHash(urlHash) {
    let params = {};
    let queries;
    let temp;
    let i;
    let l;

    if (urlHash[0] === '#') {
      urlHash = urlHash.slice(1);
    } // Split into key/value pairs


    queries = urlHash.split('&'); // Convert the array of strings into an object

    for (i = 0, l = queries.length; i < l; i++) {
      temp = queries[i].split('=');
      params[temp[0]] = temp[1];
    }

    return params;
  }

  static post(url, data, headers) {
    logging.debug('UrlHelper::Post');
    return new Promise((resolve, reject) => {
      return http.post(url, data, headers, resolve, reject);
    });
  }

  static get(url) {
    logging.debug('UrlHelper::Post');
    return new Promise(function (resolve, reject) {
      return http.get(url, resolve, reject);
    });
  }

}

UrlHelper.logTag = 'UrlHelper: ';

class BaseStorage {
  constructor() {
    this.accessTokenKey = '_ionicAuth.accessToken';
    this.refreshTokenKey = '_ionicAuth.refreshToken';
    this.idTokenKey = '_ionicAuth.idToken';
    this.authResponseKey = '_ionicAuth.authResponse';
  }

  setClientId(clientId) {
    this.accessTokenKey = this.accessTokenKey + '.' + clientId;
    this.refreshTokenKey = this.refreshTokenKey + '.' + clientId;
    this.idTokenKey = this.idTokenKey + '.' + clientId;
    this.authResponseKey = this.authResponseKey + '.' + clientId;
  } // some keys need to be store per token, helper to ensure consistency


  formatKeyForToken(keyName, tokenName) {
    return tokenName ? this.accessTokenKey + '.' + tokenName : this.accessTokenKey;
  }

}

const isTokenStorageProvider = obj => {
  const provider = obj;
  return typeof provider === 'object' && provider.getAccessToken && typeof provider.getAccessToken === 'function' || provider.getAuthResponse && typeof provider.getAuthResponse === 'function' || provider.getIdToken && typeof provider.getIdToken === 'function' || provider.getRefreshToken && typeof provider.getRefreshToken === 'function' || provider.setAccessToken && typeof provider.setAccessToken === 'function' || provider.setAuthResponse && typeof provider.setAuthResponse === 'function' || provider.setIdToken && typeof provider.setIdToken === 'function' || provider.setRefreshToken && typeof provider.setRefreshToken === 'function' || false;
};

const isIV5UserInterface = obj => {
  const provider = obj;
  return provider.getValue && typeof provider.getValue === 'function' && provider.setValue && typeof provider.setValue === 'function' && provider.clear && typeof provider.clear === 'function' && provider.onLock && typeof provider.onLock === 'function';
};

class AuthIdentityVault5Storage extends BaseStorage {
  constructor(vault) {
    super();
    this.vault = vault;
  }
  /**
   * get the saved access token
   */


  getAccessToken(tokenName) {
    var _this = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const key = _this.formatKeyForToken(_this.accessTokenKey, tokenName);

      logging.debug('getAccessToken key:', key);
      return (_a = yield _this.vault.getValue(key)) !== null && _a !== void 0 ? _a : undefined;
    })();
  }
  /**
   * save the access token
   */


  setAccessToken(accessToken, tokenName) {
    var _this2 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const key = _this2.formatKeyForToken(_this2.accessTokenKey, tokenName);

      logging.debug('setAccessToken: key: ', key);
      return _this2.vault.setValue(key, accessToken);
    })();
  }
  /**
   * get the saved refresh token
   */


  getRefreshToken() {
    var _this3 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      return (_a = yield _this3.vault.getValue(_this3.refreshTokenKey)) !== null && _a !== void 0 ? _a : undefined;
    })();
  }
  /**
   * save the refresh token
   */


  setRefreshToken(refreshToken) {
    var _this4 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4.vault.setValue(_this4.refreshTokenKey, refreshToken);
    })();
  }
  /**
   * get the id token
   */


  getIdToken() {
    var _this5 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      return (_a = yield _this5.vault.getValue(_this5.idTokenKey)) !== null && _a !== void 0 ? _a : undefined;
    })();
  }
  /**
   * save the id token
   */


  setIdToken(idToken) {
    var _this6 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.vault.setValue(_this6.idTokenKey, idToken);
    })();
  }
  /**
   * get the full auth result
   */


  getAuthResponse() {
    var _this7 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.vault.getValue(_this7.authResponseKey);
    })();
  }
  /**
   * save the full auth response
   */


  setAuthResponse(response) {
    var _this8 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.vault.setValue(_this8.authResponseKey, response);
    })();
  }

  clear() {
    var _this9 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.vault.clear();
    })();
  }

  onLock(callback) {
    this.vault.onLock(callback);
  }

}

class AuthIdentityVaultStorage extends BaseStorage {
  constructor(iv) {
    super();
    this.iv = iv;
  }

  ensureVaultConfigured(setPasscodeIfNeeded) {
    var _this10 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const vault = yield _this10.iv.getVault();
      const ivConfig = yield vault.getConfig();

      if (ivConfig.isPasscodeSetupNeeded && setPasscodeIfNeeded) {
        yield _this10.iv.setPasscode();
      }

      return vault;
    })();
  }
  /**
   * get the saved access token
   */


  getAccessToken(tokenName) {
    var _this11 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const key = _this11.formatKeyForToken(_this11.accessTokenKey, tokenName);

      logging.debug('getAccessToken: key: ', key);
      const vault = yield _this11.ensureVaultConfigured(false);
      return vault.getValue(key);
    })();
  }
  /**
   * save the access token
   */


  setAccessToken(accessToken, tokenName) {
    var _this12 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const key = _this12.formatKeyForToken(_this12.accessTokenKey, tokenName);

      logging.debug('setAccessToken: key: ', key);
      const vault = yield _this12.ensureVaultConfigured(true);
      return vault.storeValue(key, accessToken);
    })();
  }
  /**
   * get the saved refresh token
   */


  getRefreshToken() {
    var _this13 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const vault = yield _this13.ensureVaultConfigured(false);
      return vault.getValue(_this13.refreshTokenKey);
    })();
  }
  /**
   * save the refresh token
   */


  setRefreshToken(refreshToken) {
    var _this14 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const vault = yield _this14.ensureVaultConfigured(true);
      return vault.storeValue(_this14.refreshTokenKey, refreshToken);
    })();
  }
  /**
   * get the id token
   */


  getIdToken() {
    var _this15 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const vault = yield _this15.ensureVaultConfigured(false);
      return vault.getValue(_this15.idTokenKey);
    })();
  }
  /**
   * save the id token
   */


  setIdToken(idToken) {
    var _this16 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const vault = yield _this16.ensureVaultConfigured(true);
      return vault.storeValue(_this16.idTokenKey, idToken);
    })();
  }
  /**
   * get the full auth result
   */


  getAuthResponse() {
    var _this17 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const vault = yield _this17.ensureVaultConfigured(false);
      return vault.getValue(_this17.authResponseKey);
    })();
  }
  /**
   * save the full auth response
   */


  setAuthResponse(response) {
    var _this18 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const vault = yield _this18.ensureVaultConfigured(true);
      return vault.storeValue(_this18.authResponseKey, response);
    })();
  }

  clear() {
    var _this19 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const vault = yield _this19.iv.getVault();
      return vault.clear();
    })();
  }

}

class AuthLocalStorage extends BaseStorage {
  /**
   * get the saved access token
   */
  getAccessToken(tokenName) {
    var _this20 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const key = _this20.formatKeyForToken(_this20.accessTokenKey, tokenName);

      const accessToken = localStorage.getItem(key);
      return accessToken || undefined;
    })();
  }
  /**
   * save the access token
   */


  setAccessToken(accessToken, tokenName) {
    var _this21 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const key = _this21.formatKeyForToken(_this21.accessTokenKey, tokenName);

      return localStorage.setItem(key, accessToken);
    })();
  }
  /**
   * get the saved refresh token
   */


  getRefreshToken() {
    var _this22 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const refreshToken = localStorage.getItem(_this22.refreshTokenKey);
      return refreshToken || undefined;
    })();
  }
  /**
   * save the refresh token
   */


  setRefreshToken(refreshToken) {
    var _this23 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return localStorage.setItem(_this23.refreshTokenKey, refreshToken);
    })();
  }
  /**
   * get the id token
   */


  getIdToken() {
    var _this24 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const idToken = localStorage.getItem(_this24.idTokenKey);
      return idToken || undefined;
    })();
  }
  /**
   * save the id token
   */


  setIdToken(idToken) {
    var _this25 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return localStorage.setItem(_this25.idTokenKey, idToken);
    })();
  }
  /**
   * get the full auth result
   */


  getAuthResponse() {
    var _this26 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authResponseString = localStorage.getItem(_this26.authResponseKey);

      if (authResponseString) {
        try {
          return JSON.parse(authResponseString);
        } catch (e) {
          logging.error(`auth response of ${authResponseString} is not valid json`);
        }
      }
    })();
  }
  /**
   * save the full auth response
   */


  setAuthResponse(response) {
    var _this27 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const authRespString = JSON.stringify(response);
        return localStorage.setItem(_this27.authResponseKey, authRespString);
      } catch (e) {}
    })();
  }

  clear() {
    var _this28 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.removeItem(_this28.accessTokenKey);
      localStorage.removeItem(_this28.refreshTokenKey);
      localStorage.removeItem(_this28.idTokenKey);
      localStorage.removeItem(_this28.authResponseKey);
    })();
  }

}

class SessionHelper {
  constructor(clientId, storage) {
    this.authDataKey = 'ionicauth.authdata';
    this.expiresAtKey = 'ionicauth.expiresAt';
    this.nonceKey = 'ionicauth.nonce';
    this.tokenScopes = 'ionicauth.scopes';
    this.overrideUrlKey = 'ionicauth.overrideUrl';
    this.expiresAtKeys = [];
    this.tokenScopesKeys = [];
    this.authDataKey = clientId + '.' + this.authDataKey;
    this.expiresAtKey = clientId + '.' + this.expiresAtKey;
    this.nonceKey = clientId + '.' + this.nonceKey;
    this.overrideUrlKey = clientId + '.' + this.overrideUrlKey;
    this.tokenScopes = clientId + '.' + this.tokenScopes;
    this.storage = storage;
  }

  getAuthData() {
    var _this29 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dataKey = yield _this29.storage.get(_this29.authDataKey);

      if (dataKey) {
        const session = JSON.parse(dataKey);
        return session;
      } else {
        return undefined;
      }
    })();
  }

  setAuthData(session) {
    var _this30 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this30.storage.set(_this30.authDataKey, JSON.stringify(session));
    })();
  }

  setOverrideUrl(url) {
    var _this31 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this31.storage.set(_this31.overrideUrlKey, url);
    })();
  }

  getOverrideUrl() {
    var _this32 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const overrideUrl = yield _this32.storage.get(_this32.overrideUrlKey);
      return overrideUrl ? overrideUrl : undefined;
    })();
  }

  clearOverrideUrl() {
    var _this33 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this33.storage.remove(_this33.overrideUrlKey);
    })();
  }

  clearAuthData() {
    var _this34 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this34.storage.remove(_this34.authDataKey);
    })();
  }

  getExpiresAt(tokenName) {
    var _this35 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let expiresAtKeyName = _this35.expiresAtKey;

      if (tokenName) {
        expiresAtKeyName = _this35.expiresAtKey + '.' + tokenName;
      }

      const expiresAtKey = yield _this35.storage.get(expiresAtKeyName);

      if (expiresAtKey) {
        const expiresAt = JSON.parse(expiresAtKey);
        return expiresAt;
      }

      return undefined;
    })();
  }

  setExpiresAt(expiresAt, tokenName) {
    var _this36 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let expiresAtKey = _this36.expiresAtKey;

      if (tokenName) {
        expiresAtKey = _this36.expiresAtKey + '.' + tokenName;

        _this36.tokenScopesKeys.push(expiresAtKey);
      }

      logging.debug('setExpiresAt', 'expiresAtKey', expiresAtKey);
      yield _this36.storage.set(expiresAtKey, JSON.stringify(expiresAt));
    })();
  }

  getTokenScopes(tokenName) {
    var _this37 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tokenScopesKey = _this37.tokenScopes + '.' + tokenName;
      logging.debug('getTokenScopes', 'tokenScopes', tokenScopesKey);
      const tokenScopes = yield _this37.storage.get(tokenScopesKey);

      if (tokenScopes) {
        const expiresAt = JSON.parse(tokenScopes);
        return expiresAt;
      }

      return undefined;
    })();
  }

  setTokenScopes(scopes, tokenName) {
    var _this38 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tokenScopesKey = _this38.tokenScopes + '.' + tokenName;

      _this38.tokenScopesKeys.push(tokenScopesKey);

      logging.debug('setTokenScopes', 'tokenScopes', tokenScopesKey);
      yield _this38.storage.set(tokenScopesKey, JSON.stringify(scopes));
    })();
  }

  clearTokenScopes() {
    var _this39 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this39.tokenScopesKeys.forEach( /*#__PURE__*/function () {
        var _ref = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key) {
          yield _this39.storage.remove(key);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  clearExpiresAt() {
    var _this40 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this40.storage.remove(_this40.expiresAtKey);

      _this40.expiresAtKeys.forEach( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key) {
          yield _this40.storage.remove(key);
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  getNonce() {
    var _this41 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nonceKey = yield _this41.storage.get(_this41.nonceKey);

      if (nonceKey) {
        const nonce = JSON.parse(nonceKey);
        return nonce;
      }

      return undefined;
    })();
  }

  setNonce(nonce) {
    var _this42 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this42.storage.set(_this42.nonceKey, JSON.stringify(nonce));
    })();
  }

  clearNonce() {
    var _this43 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this43.storage.remove(_this43.nonceKey);
    })();
  }

  clear() {
    var _this44 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this44.clearAuthData();
      yield _this44.clearExpiresAt();
      yield _this44.clearNonce();
      yield _this44.clearTokenScopes();
    })();
  }

}

var toByteArray_1 = toByteArray;
var fromByteArray_1 = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

const generateChallengeAndVerifier = /*#__PURE__*/function () {
  var _ref3 = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (useBase64String = false) {
    const verifierPlain = getRandomCharacters(128, useBase64String);
    const verifierHashArray = yield sha256(verifierPlain);
    const challenge = base64Encode(verifierHashArray);
    logging.debug('challenge: ' + challenge);
    return {
      verifier: verifierPlain,
      challenge
    };
  });

  return function generateChallengeAndVerifier() {
    return _ref3.apply(this, arguments);
  };
}();

const getRandomNonce = () => {
  return getRandomCharacters(20);
};

const bufferToString = arrayBuffer => {
  const coder = new TextDecoder();
  return coder.decode(arrayBuffer);
};

const parseJwt = token => {
  const parts = token.split('.');
  const headerString = base64Decode(parts[0]);
  const payloadString = base64Decode(parts[1]);
  const header = JSON.parse(headerString);
  const payload = JSON.parse(payloadString);
  return {
    header,
    payload
  };
};

const base64Encode = byteArray => {
  const base64String = fromByteArray_1(byteArray);
  const urlString = escapeUrl(base64String);
  return urlString;
};

const base64Decode = encodedString => {
  const unescapedString = unescapeUrl(encodedString);
  const byteArray = toByteArray_1(unescapedString);
  const string = bufferToString(byteArray);
  return string;
};

const escapeUrl = baseString => {
  return baseString.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};

const unescapeUrl = baseString => {
  let newString = baseString.replace(/\-/g, '+').replace(/_/g, '/'); // .replace(/\-/g, "+")
  // .replace(/_/g, "/");

  while (newString.length % 4 !== 0) {
    newString += '=';
  }

  return newString;
};
/**
 *  Secure Hash Algorithm (SHA256)
 *  http://www.webtoolkit.info/
 *  Original code by Angel Marin, Paul Johnston.
 **/


const sha256 = /*#__PURE__*/function () {
  var _sha = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (s) {
    var chrsz = 8;

    function safe_add(x, y) {
      var lsw = (x & 0xffff) + (y & 0xffff);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xffff;
    }

    function S(X, n) {
      return X >>> n | X << 32 - n;
    }

    function R(X, n) {
      return X >>> n;
    }

    function Ch(x, y, z) {
      return x & y ^ ~x & z;
    }

    function Maj(x, y, z) {
      return x & y ^ x & z ^ y & z;
    }

    function Sigma0256(x) {
      return S(x, 2) ^ S(x, 13) ^ S(x, 22);
    }

    function Sigma1256(x) {
      return S(x, 6) ^ S(x, 11) ^ S(x, 25);
    }

    function Gamma0256(x) {
      return S(x, 7) ^ S(x, 18) ^ R(x, 3);
    }

    function Gamma1256(x) {
      return S(x, 17) ^ S(x, 19) ^ R(x, 10);
    }

    function core_sha256(m, l) {
      var K = new Array(0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2);
      var HASH = new Array(0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19);
      var W = new Array(64);
      var a, b, c, d, e, f, g, h;
      var T1, T2;
      m[l >> 5] |= 0x80 << 24 - l % 32;
      m[(l + 64 >> 9 << 4) + 15] = l;

      for (var i = 0; i < m.length; i += 16) {
        a = HASH[0];
        b = HASH[1];
        c = HASH[2];
        d = HASH[3];
        e = HASH[4];
        f = HASH[5];
        g = HASH[6];
        h = HASH[7];

        for (var j = 0; j < 64; j++) {
          if (j < 16) W[j] = m[j + i];else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
          T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
          T2 = safe_add(Sigma0256(a), Maj(a, b, c));
          h = g;
          g = f;
          f = e;
          e = safe_add(d, T1);
          d = c;
          c = b;
          b = a;
          a = safe_add(T1, T2);
        }

        HASH[0] = safe_add(a, HASH[0]);
        HASH[1] = safe_add(b, HASH[1]);
        HASH[2] = safe_add(c, HASH[2]);
        HASH[3] = safe_add(d, HASH[3]);
        HASH[4] = safe_add(e, HASH[4]);
        HASH[5] = safe_add(f, HASH[5]);
        HASH[6] = safe_add(g, HASH[6]);
        HASH[7] = safe_add(h, HASH[7]);
      }

      return HASH;
    }

    function str2binb(str) {
      var bin = Array();
      var mask = (1 << chrsz) - 1;

      for (var i = 0; i < str.length * chrsz; i += chrsz) {
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << 24 - i % 32;
      }

      return bin;
    }

    function Utf8Encode(string) {
      string = string.replace(/\r\n/g, '\n');
      var utftext = '';

      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode(c >> 6 | 192);
          utftext += String.fromCharCode(c & 63 | 128);
        } else {
          utftext += String.fromCharCode(c >> 12 | 224);
          utftext += String.fromCharCode(c >> 6 & 63 | 128);
          utftext += String.fromCharCode(c & 63 | 128);
        }
      }

      return utftext;
    }

    function binb2hex(binarray) {
      var hex_tab = '0123456789abcdef';
      var str = '';

      for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 + 4 & 0xf) + hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 & 0xf);
      }

      return str;
    }

    function hex2uint8(string) {
      var bytes = new Uint8Array(Math.ceil(string.length / 2));

      for (var i = 0; i < bytes.length; i++) bytes[i] = parseInt(string.substr(i * 2, 2), 16);

      return bytes;
    }

    s = Utf8Encode(s);
    return hex2uint8(binb2hex(core_sha256(str2binb(s), s.length * chrsz)));
  });

  function sha256(_x3) {
    return _sha.apply(this, arguments);
  }

  return sha256;
}();

const getRandomCharacters = (length, useBase64String = false) => {
  const values = useBase64String ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  const array = new Array();

  for (let i = 0; i < length; i++) {
    array.push(values.charAt(Math.floor(Math.random() * values.length)));
  }

  return array.join('');
};

const ready$1 = new Promise(resolve => {
  const DEVICE_READY_TIMEOUT = 5000;
  const readyTimeout = setTimeout(() => {
    console.warn(`Auth Connect: deviceready did not fire within ${DEVICE_READY_TIMEOUT}ms.`);
    resolve();
  }, DEVICE_READY_TIMEOUT);
  document.addEventListener('deviceready', () => {
    clearTimeout(readyTimeout);
    resolve();
  });
});
/**
 * @hidden
 */

class IonicAuthConfig {
  constructor(options) {
    this.options = options;
    this.logTag = 'IonicAuthConfig';
    this.defaultDiscoveryUrl = '';
    this.overrideDiscoveryUrl = '';
    this.currentDiscoveryUrl = '';
    this.locations = undefined;
    logging.setLogLevel(options.logLevel);
    this.logger = logging;
  }

  generateChallengeAndVerifier() {
    return generateChallengeAndVerifier();
  }

  validateLocations() {
    if (this.locations === undefined) {
      this.logger.debug(this.logTag, 'locations undefined');
      return false;
    } // we have locations loaded are they the right ones? yep, unless we have an override


    if (this.overrideDiscoveryUrl === undefined || this.overrideDiscoveryUrl === '') {
      this.logger.debug(this.logTag, 'override discovery url empty or null');
      return true;
    }

    this.logger.debug(this.logTag, 'override discovery url: ', this.overrideDiscoveryUrl); // does the current equal the override?

    if (this.overrideDiscoveryUrl !== this.currentDiscoveryUrl) {
      this.logger.debug(this.logTag, 'override not eq current discovery url');
      return false;
    }

    this.logger.debug(this.logTag, 'all ok?');
    return true;
  }

  loadLocations() {
    var _this45 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this45.validateLocations()) {
        return;
      }

      _this45.currentDiscoveryUrl = _this45.overrideDiscoveryUrl;

      if (_this45.currentDiscoveryUrl === '') {
        _this45.currentDiscoveryUrl = _this45.options.discoveryUrl || _this45.defaultDiscoveryUrl;
      }

      _this45.logger.debug(_this45.logTag, 'discoveryUrl: ', _this45.currentDiscoveryUrl);

      if (_this45.options.platform === 'cordova' || _this45.options.platform === 'capacitor') {
        // validate?
        yield ready$1;

        try {
          const result = yield UrlHelper.get(_this45.currentDiscoveryUrl);

          _this45.logger.debug(_this45.logTag, 'result.data: ', result);

          _this45.locations = JSON.parse(result.data);
        } catch (err) {
          throw new Error(err.error);
        }
      } else {
        const resp = yield fetch(_this45.currentDiscoveryUrl);
        _this45.locations = yield resp.json(); // Transform the data into json

        _this45.logger.debug(_this45.logTag, 'locations resp: ', _this45.locations);
      }
    })();
  }

  getIssuer() {
    var _this46 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this46.loadLocations();
      return _this46.locations['issuer'];
    })();
  }

}
/** Detect free variable `global` from Node.js. */


var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal$1 || freeSelf || Function('return this')();
var root$1 = root;
/** Built-in value references. */

var Symbol = root$1.Symbol;
var Symbol$1 = Symbol;
/** Used for built-in method references. */

var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto$1.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/** Built-in value references. */

var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }

  return result;
}
/** Used for built-in method references. */


var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */


function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */


var isArray = Array.isArray;
var isArray$1 = isArray;
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray$1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */


function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }

  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }

  return accumulator;
}
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */


function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}
/** Used to map Latin Unicode letters to basic Latin letters. */


var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',
  '\xc1': 'A',
  '\xc2': 'A',
  '\xc3': 'A',
  '\xc4': 'A',
  '\xc5': 'A',
  '\xe0': 'a',
  '\xe1': 'a',
  '\xe2': 'a',
  '\xe3': 'a',
  '\xe4': 'a',
  '\xe5': 'a',
  '\xc7': 'C',
  '\xe7': 'c',
  '\xd0': 'D',
  '\xf0': 'd',
  '\xc8': 'E',
  '\xc9': 'E',
  '\xca': 'E',
  '\xcb': 'E',
  '\xe8': 'e',
  '\xe9': 'e',
  '\xea': 'e',
  '\xeb': 'e',
  '\xcc': 'I',
  '\xcd': 'I',
  '\xce': 'I',
  '\xcf': 'I',
  '\xec': 'i',
  '\xed': 'i',
  '\xee': 'i',
  '\xef': 'i',
  '\xd1': 'N',
  '\xf1': 'n',
  '\xd2': 'O',
  '\xd3': 'O',
  '\xd4': 'O',
  '\xd5': 'O',
  '\xd6': 'O',
  '\xd8': 'O',
  '\xf2': 'o',
  '\xf3': 'o',
  '\xf4': 'o',
  '\xf5': 'o',
  '\xf6': 'o',
  '\xf8': 'o',
  '\xd9': 'U',
  '\xda': 'U',
  '\xdb': 'U',
  '\xdc': 'U',
  '\xf9': 'u',
  '\xfa': 'u',
  '\xfb': 'u',
  '\xfc': 'u',
  '\xdd': 'Y',
  '\xfd': 'y',
  '\xff': 'y',
  '\xc6': 'Ae',
  '\xe6': 'ae',
  '\xde': 'Th',
  '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',
  '\u0102': 'A',
  '\u0104': 'A',
  '\u0101': 'a',
  '\u0103': 'a',
  '\u0105': 'a',
  '\u0106': 'C',
  '\u0108': 'C',
  '\u010a': 'C',
  '\u010c': 'C',
  '\u0107': 'c',
  '\u0109': 'c',
  '\u010b': 'c',
  '\u010d': 'c',
  '\u010e': 'D',
  '\u0110': 'D',
  '\u010f': 'd',
  '\u0111': 'd',
  '\u0112': 'E',
  '\u0114': 'E',
  '\u0116': 'E',
  '\u0118': 'E',
  '\u011a': 'E',
  '\u0113': 'e',
  '\u0115': 'e',
  '\u0117': 'e',
  '\u0119': 'e',
  '\u011b': 'e',
  '\u011c': 'G',
  '\u011e': 'G',
  '\u0120': 'G',
  '\u0122': 'G',
  '\u011d': 'g',
  '\u011f': 'g',
  '\u0121': 'g',
  '\u0123': 'g',
  '\u0124': 'H',
  '\u0126': 'H',
  '\u0125': 'h',
  '\u0127': 'h',
  '\u0128': 'I',
  '\u012a': 'I',
  '\u012c': 'I',
  '\u012e': 'I',
  '\u0130': 'I',
  '\u0129': 'i',
  '\u012b': 'i',
  '\u012d': 'i',
  '\u012f': 'i',
  '\u0131': 'i',
  '\u0134': 'J',
  '\u0135': 'j',
  '\u0136': 'K',
  '\u0137': 'k',
  '\u0138': 'k',
  '\u0139': 'L',
  '\u013b': 'L',
  '\u013d': 'L',
  '\u013f': 'L',
  '\u0141': 'L',
  '\u013a': 'l',
  '\u013c': 'l',
  '\u013e': 'l',
  '\u0140': 'l',
  '\u0142': 'l',
  '\u0143': 'N',
  '\u0145': 'N',
  '\u0147': 'N',
  '\u014a': 'N',
  '\u0144': 'n',
  '\u0146': 'n',
  '\u0148': 'n',
  '\u014b': 'n',
  '\u014c': 'O',
  '\u014e': 'O',
  '\u0150': 'O',
  '\u014d': 'o',
  '\u014f': 'o',
  '\u0151': 'o',
  '\u0154': 'R',
  '\u0156': 'R',
  '\u0158': 'R',
  '\u0155': 'r',
  '\u0157': 'r',
  '\u0159': 'r',
  '\u015a': 'S',
  '\u015c': 'S',
  '\u015e': 'S',
  '\u0160': 'S',
  '\u015b': 's',
  '\u015d': 's',
  '\u015f': 's',
  '\u0161': 's',
  '\u0162': 'T',
  '\u0164': 'T',
  '\u0166': 'T',
  '\u0163': 't',
  '\u0165': 't',
  '\u0167': 't',
  '\u0168': 'U',
  '\u016a': 'U',
  '\u016c': 'U',
  '\u016e': 'U',
  '\u0170': 'U',
  '\u0172': 'U',
  '\u0169': 'u',
  '\u016b': 'u',
  '\u016d': 'u',
  '\u016f': 'u',
  '\u0171': 'u',
  '\u0173': 'u',
  '\u0174': 'W',
  '\u0175': 'w',
  '\u0176': 'Y',
  '\u0177': 'y',
  '\u0178': 'Y',
  '\u0179': 'Z',
  '\u017b': 'Z',
  '\u017d': 'Z',
  '\u017a': 'z',
  '\u017c': 'z',
  '\u017e': 'z',
  '\u0132': 'IJ',
  '\u0133': 'ij',
  '\u0152': 'Oe',
  '\u0153': 'oe',
  '\u0149': "'n",
  '\u017f': 's'
};
/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */

var deburrLetter = basePropertyOf(deburredLetters);
var deburrLetter$1 = deburrLetter;
/** Used to match Latin Unicode letters (excluding mathematical operators). */

var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */

var rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
/** Used to compose unicode capture groups. */

var rsCombo$1 = '[' + rsComboRange$1 + ']';
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */

var reComboMark = RegExp(rsCombo$1, 'g');
/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */

function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter$1).replace(reComboMark, '');
}
/** Used to match words composed of alphanumeric characters. */


var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */

function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
/** Used to detect strings that need a more robust regexp to match words. */


var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */

function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
/** Used to compose unicode character classes. */


var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
/** Used to compose unicode capture groups. */

var rsApos$1 = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';
/** Used to compose unicode regexes. */

var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;
/** Used to match complex or compound words. */

var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */

function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */


function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }

  return string.match(pattern) || [];
}
/** Used to compose unicode capture groups. */


var rsApos = "['\u2019]";
/** Used to match apostrophes. */

var reApos = RegExp(rsApos, 'g');
/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */

function createCompounder(callback) {
  return function (string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}
/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */


var snakeCase = createCompounder(function (result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});
var snakeCase$1 = snakeCase;
var validAuthorizationParams = ['acr_values', 'audience', 'claims', 'claims_locales', 'client_id', 'client_secret', 'code_challenge', 'code_challenge_method', 'domain_hint', 'display', 'id_token_hint', 'login_hint', 'logout_uri', 'max_age', 'nonce', 'post_logout_redirect_uri', 'prompt', 'redirect_uri', 'registration', 'request', 'request_uri', 'response_mode', 'response_type', 'return_to', 'scope', 'state', 'ui_locales', 'vtr'];

class OAuthPacker {
  static packParams(options) {
    const validParams = {};

    for (let key in options) {
      if (!options[key]) continue; // skip null/undefined/empty string values

      const snakedKey = snakeCase$1(key);

      if (validAuthorizationParams.includes(snakedKey)) {
        validParams[snakedKey] = options[key];
      } else {
        logging.debug('OAuthPacker::packParams', 'adding additional param:', key);
        validParams[key] = options[key];
      }
    }

    return validParams;
  }

}

class IonicAuth0Config extends IonicAuthConfig {
  constructor(options) {
    super(options);
    this.options = options;

    if (options.discoveryUrl == undefined) {
      throw "IonicAuthOptions.discoveryUrl must be defined for Auth0, it usually is 'https://YOUR_DOMAIN/.well-known/openid-configuration'";
    }
  }

  loadLocations() {
    var _superprop_getLoadLocations = () => super.loadLocations,
        _this47 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _superprop_getLoadLocations().call(_this47);

      if (_this47.locations['logout_endpoint'] == undefined) {
        _this47.locations['logout_endpoint'] = _this47.locations['issuer'] + 'logout';
      }
    })();
  }

  getAuthorizeUrl(nonce, challenge, parameters) {
    var _this48 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this48.loadLocations();
      const base = Object.assign(Object.assign({}, parameters), {
        clientId: _this48.options.clientID,
        redirectUri: _this48.options.redirectUri,
        audience: _this48.options.audience,
        nonce: nonce,
        state: nonce,
        scope: _this48.options.scope
      });
      const PKCE = {
        code_challenge_method: 'S256',
        code_challenge: challenge,
        responseType: 'code'
      };

      if (_this48.options.platform !== 'web') {
        const options = Object.assign(Object.assign({}, base), PKCE);
        return UrlHelper.buildUrl(_this48.locations['authorization_endpoint'], OAuthPacker.packParams(options));
      } else {
        // web case
        const webBase = Object.assign(Object.assign({}, base), {
          client_secret: _this48.options.clientSecret
        });
        let options = {};

        if (_this48.options.webAuthFlow && _this48.options.webAuthFlow === 'PKCE') {
          options = Object.assign(Object.assign({}, webBase), PKCE);
        } else {
          options = Object.assign(Object.assign({}, webBase), {
            response_type: 'id_token token',
            response_mode: 'fragment'
          });
        }

        return UrlHelper.buildUrl(_this48.locations['authorization_endpoint'], OAuthPacker.packParams(options));
      }
    })();
  }

  getLogoutUrl() {
    var _this49 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this49.loadLocations();
      const options = {
        clientId: _this49.options.clientID
      };
      let params = OAuthPacker.packParams(options);
      params['returnTo'] = _this49.options.logoutUrl;
      let logoutUrl = UrlHelper.buildUrl(_this49.locations['logout_endpoint'], params);
      return logoutUrl;
    })();
  }

  getTokenUrl() {
    var _this50 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this50.loadLocations();
      return {
        url: _this50.locations['token_endpoint'],
        headers: {},
        payload: {}
      };
    })();
  }

}

class IonicAzureConfig extends IonicAuthConfig {
  constructor(options) {
    super(options);
    this.options = options;
    this.defaultDiscoveryUrl = 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration';
  }

  getAuthorizeUrl(nonce, challenge, parameters) {
    var _this51 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this51.loadLocations();
      const base = Object.assign(Object.assign({}, parameters), {
        clientId: _this51.options.clientID,
        redirectUri: _this51.options.redirectUri,
        audience: _this51.options.audience,
        nonce: nonce,
        state: nonce,
        scope: _this51.options.scope
      });

      if (_this51.options.platform != 'web') {
        const options = Object.assign(Object.assign({}, base), {
          code_challenge_method: 'S256',
          code_challenge: challenge,
          responseType: 'code'
        });
        return UrlHelper.buildUrl(_this51.locations['authorization_endpoint'], OAuthPacker.packParams(options));
      } else {
        // web case
        let options = {};

        if (_this51.options.webAuthFlow && _this51.options.webAuthFlow === 'PKCE') {
          options = Object.assign(Object.assign({}, base), {
            code_challenge_method: 'S256',
            code_challenge: challenge,
            responseType: 'code'
          });
        } else {
          options = Object.assign(Object.assign({}, base), {
            response_type: 'id_token token',
            response_mode: 'fragment',
            client_secret: _this51.options.clientSecret
          });
        }

        return UrlHelper.buildUrl(_this51.locations['authorization_endpoint'], OAuthPacker.packParams(options));
      }
    })();
  }

  getLogoutUrl() {
    var _this52 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this52.loadLocations();
      const options = {
        clientId: _this52.options.clientID,
        returnTo: _this52.options.redirectUri,
        redirectUri: _this52.options.redirectUri,
        postLogoutRedirectUri: _this52.options.logoutUrl
      };
      return UrlHelper.buildUrl(_this52.locations['end_session_endpoint'], OAuthPacker.packParams(options));
    })();
  }

  getTokenUrl() {
    var _this53 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this53.loadLocations();
      return {
        url: _this53.locations['token_endpoint'],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        },
        payload: {
          scope: String(_this53.options.scope)
        }
      };
    })();
  }

}

class IonicCognitoConfig extends IonicAuthConfig {
  constructor(options) {
    super(options);
    this.options = options; // validate that client_id and client_secret are set

    if (this.options.discoveryUrl == undefined) {
      throw "IonicAuthOptions.discoveryUrl must be defined for Cognito, it usually is 'https://cognito-idp.REGION.amazonaws.com/USER-POOL-ID'";
    }
  }

  loadLocations() {
    var _superprop_getLoadLocations2 = () => super.loadLocations,
        _this54 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _superprop_getLoadLocations2().call(_this54);

      if (_this54.locations['logout_endpoint'] == undefined) {
        const auth_endpoint = _this54.locations['authorization_endpoint'] || '';
        const url = new URL(auth_endpoint);
        url.pathname = 'logout';
        _this54.locations['logout_endpoint'] = url.href;
      }
    })();
  }

  getAuthorizeUrl(nonce, challenge, parameters) {
    var _this55 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this55.loadLocations();
      const base = Object.assign(Object.assign({}, parameters), {
        clientId: _this55.options.clientID,
        redirectUri: _this55.options.redirectUri,
        audience: _this55.options.audience,
        nonce: nonce,
        state: nonce,
        scope: _this55.options.scope
      });
      const PKCE = Object.assign(Object.assign({}, base), {
        code_challenge_method: 'S256',
        code_challenge: challenge,
        responseType: 'code'
      });

      if (_this55.options.platform !== 'web') {
        const options = Object.assign({}, PKCE);
        return UrlHelper.buildUrl(_this55.locations['authorization_endpoint'], OAuthPacker.packParams(options));
      } else {
        // web case
        let options = {};

        if (_this55.options.webAuthFlow && _this55.options.webAuthFlow === 'PKCE') {
          options = Object.assign({}, PKCE);
        } else {
          options = Object.assign(Object.assign({}, base), {
            response_type: 'token',
            response_mode: 'fragment'
          });
        }

        return UrlHelper.buildUrl(_this55.locations['authorization_endpoint'], OAuthPacker.packParams(options));
      }
    })();
  }

  getLogoutUrl() {
    var _this56 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this56.loadLocations();
      const options = {
        clientId: _this56.options.clientID,
        logoutUri: _this56.options.logoutUrl
      };
      return UrlHelper.buildUrl(_this56.locations['logout_endpoint'], OAuthPacker.packParams(options));
    })();
  }

  getTokenUrl() {
    var _this57 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this57.loadLocations();
      const headers = {};

      if (_this57.options.clientSecret) {
        const auth_header = base64Encode(new TextEncoder().encode(`${_this57.options.clientID}:${_this57.options.clientSecret}`));
        headers['Authorization'] = `Basic ${auth_header}`;
      }

      return {
        url: _this57.locations['token_endpoint'],
        headers,
        payload: {}
      };
    })();
  }

}

class IonicGeneralAuthConfig extends IonicAuthConfig {
  constructor(options) {
    super(options);
    this.options = options;

    if (options.discoveryUrl == undefined) {
      throw "IonicAuthOptions.discoveryUrl must be defined, it usually is 'https://YOUR_DOMAIN/.well-known/openid-configuration'";
    }
  }

  loadLocations() {
    var _superprop_getLoadLocations3 = () => super.loadLocations,
        _this58 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _superprop_getLoadLocations3().call(_this58);

      if (_this58.locations['logout_endpoint'] == undefined) {
        const issuer = _this58.locations['issuer'];
        _this58.locations['logout_endpoint'] = issuer.endsWith('/') ? `${issuer}logout` : `${issuer}/logout`;
      }
    })();
  }

  getAuthorizeUrl(nonce, challenge, parameters) {
    var _this59 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this59.loadLocations();
      const base = Object.assign(Object.assign({}, parameters), {
        clientId: _this59.options.clientID,
        redirectUri: _this59.options.redirectUri,
        audience: _this59.options.audience,
        nonce: nonce,
        state: nonce,
        scope: _this59.options.scope
      });
      const PKCE = {
        code_challenge_method: 'S256',
        code_challenge: challenge,
        responseType: 'code'
      };

      if (_this59.options.platform !== 'web') {
        const options = Object.assign(Object.assign({}, base), PKCE);
        return UrlHelper.buildUrl(_this59.locations['authorization_endpoint'], OAuthPacker.packParams(options));
      } else {
        // web case
        const webBase = Object.assign(Object.assign({}, base), {
          client_secret: _this59.options.clientSecret
        });
        let options = {};

        if (_this59.options.webAuthFlow && _this59.options.webAuthFlow === 'PKCE') {
          options = Object.assign(Object.assign({}, webBase), PKCE);
        } else {
          options = Object.assign(Object.assign({}, webBase), {
            response_type: 'id_token token',
            response_mode: 'fragment'
          });
        }

        return UrlHelper.buildUrl(_this59.locations['authorization_endpoint'], OAuthPacker.packParams(options));
      }
    })();
  }

  getLogoutUrl() {
    var _this60 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this60.loadLocations();
      const options = {
        clientId: _this60.options.clientID
      };
      let params = OAuthPacker.packParams(options);
      params['returnTo'] = _this60.options.logoutUrl;
      let logoutUrl = UrlHelper.buildUrl(_this60.locations['end_session_endpoint'] || _this60.locations['logout_endpoint'], params);
      return logoutUrl;
    })();
  }

  getTokenUrl() {
    var _this61 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this61.loadLocations();
      const generalConfig = _this61.options;
      let payload = {}; // defaults to true

      if (generalConfig.alwaysSendClientSecretOnLogin !== false && !!generalConfig.clientSecret) {
        payload = {
          client_secret: generalConfig.clientSecret
        };
      }

      return {
        url: _this61.locations['token_endpoint'],
        headers: {},
        payload: payload
      };
    })();
  }

}

class IonicSalesForceAuthConfig extends IonicGeneralAuthConfig {
  // The only unique salesforce quirk is that the challenge/verifier can only consist of hexidecimal chars
  generateChallengeAndVerifier() {
    return generateChallengeAndVerifier(true);
  }

  getLogoutUrl() {
    var _this62 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this62.loadLocations();
      const options = {
        clientId: _this62.options.clientID,
        postLogoutRedirectUri: _this62.options.logoutUrl
      };
      return UrlHelper.buildUrl(_this62.locations['end_session_endpoint'], OAuthPacker.packParams(options));
    })();
  }

}

class IonicPingAuthConfig extends IonicGeneralAuthConfig {
  getLogoutUrl() {
    var _this63 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this63.loadLocations();
      const options = {
        clientId: _this63.options.clientID,
        redirectUri: _this63.options.redirectUri
      };
      return UrlHelper.buildUrl(_this63.locations['ping_end_session_endpoint'], OAuthPacker.packParams(options));
    })();
  }

}

class IonicOneLoginConfig extends IonicGeneralAuthConfig {
  constructor(options, onGetRawIdToken) {
    super(options);
    this.onGetRawIdToken = onGetRawIdToken;
  }

  getLogoutUrl() {
    var _this64 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this64.loadLocations();
      let token;

      try {
        token = yield _this64.onGetRawIdToken();
      } catch (e) {
        throw new Error(messages.LOGOUT_UNABLE_TO_RETRIEVE_TOKEN);
      }

      const options = {
        postLogoutRedirectUri: _this64.options.logoutUrl,
        idTokenHint: token
      };
      return UrlHelper.buildUrl(_this64.locations['end_session_endpoint'], OAuthPacker.packParams(options));
    })();
  }

}

class IonicOktaAuthConfig extends IonicGeneralAuthConfig {
  constructor(options, onGetRawIdToken) {
    super(options);
    this.onGetRawIdToken = onGetRawIdToken;
  } // OKTA doesn't have a logout_endpoint in their config, rather they use end_session_endpoint


  getLogoutUrl() {
    var _this65 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this65.loadLocations();
      let token;

      try {
        token = yield _this65.onGetRawIdToken();
      } catch (e) {
        throw new Error(messages.LOGOUT_UNABLE_TO_RETRIEVE_TOKEN);
      }

      const options = {
        idTokenHint: token,
        postLogoutRedirectUri: _this65.options.logoutUrl
      };
      return UrlHelper.buildUrl(_this65.locations['end_session_endpoint'], OAuthPacker.packParams(options));
    })();
  }

}

class IdentityServerAuthConfig extends IonicGeneralAuthConfig {
  constructor(options, onGetRawIdToken) {
    super(options);
    this.onGetRawIdToken = onGetRawIdToken;
  } // IdentityServer doesn't have a logout_endpoint in their config, rather they use end_session_endpoint


  getLogoutUrl() {
    var _this66 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this66.loadLocations();
      let token;

      try {
        token = yield _this66.onGetRawIdToken();
      } catch (e) {
        throw new Error(messages.LOGOUT_UNABLE_TO_RETRIEVE_TOKEN);
      }

      const options = {
        idTokenHint: token,
        postLogoutRedirectUri: _this66.options.logoutUrl
      };
      return UrlHelper.buildUrl(_this66.locations['end_session_endpoint'], OAuthPacker.packParams(options));
    })();
  }

}

class IonicKeyCloakConfig extends IonicGeneralAuthConfig {
  // The only unique salesforce quirk is that the challenge/verifier can only consist of hexidecimal chars
  getLogoutUrl() {
    var _this67 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this67.loadLocations();
      const options = {
        clientId: _this67.options.clientID,
        postLogoutRedirectUri: _this67.options.logoutUrl
      };
      return UrlHelper.buildUrl(_this67.locations['end_session_endpoint'], OAuthPacker.packParams(options));
    })();
  }

}
/**
 * @hidden
 */


class WebStorageProvider {
  constructor(keyPrefix = 'ionic-ac-storage:') {
    this.keyPrefix = keyPrefix;
  }

  get(key) {
    var _this68 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return localStorage.getItem(_this68.getKey(key));
    })();
  }

  set(key, value) {
    var _this69 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return localStorage.setItem(_this69.getKey(key), value);
    })();
  }

  remove(key) {
    var _this70 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return localStorage.removeItem(_this70.getKey(key));
    })();
  }

  clear() {
    var _this71 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const length = localStorage.length;

      for (let i = 0; i < length; i++) {
        if ((_a = localStorage.key(i)) === null || _a === void 0 ? void 0 : _a.startsWith(_this71.keyPrefix)) {
          localStorage.removeItem(localStorage.key(i));
        }
      }
    })();
  }

  getKey(key) {
    return `${this.keyPrefix}${key}`;
  }

}
/**
 * @hidden
 */


class NativeStorageProvider {
  get(key) {
    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((res, rej) => {
        cordova.exec(function (result) {
          res(result);
        }, function (error) {
          rej(error);
        }, 'IonicAuthConnectStorage', 'get', [key]);
      });
    })();
  }

  set(key, value) {
    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((res, rej) => {
        cordova.exec(function (_winParam) {
          res();
        }, function (error) {
          rej(error);
        }, 'IonicAuthConnectStorage', 'set', [key, value]);
      });
    })();
  }

  remove(key) {
    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((res, rej) => {
        cordova.exec(function () {
          res();
        }, function (error) {
          rej(error);
        }, 'IonicAuthConnectStorage', 'remove', [key]);
      });
    })();
  }

  clear() {
    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((res, rej) => {
        cordova.exec(function () {
          res();
        }, function (error) {
          rej(error);
        }, 'IonicAuthConnectStorage', 'clear');
      });
    })();
  }

}

class IonicBaseAuth {
  constructor(options, handlers) {
    var _this72 = this;

    this.options = options;
    this.handlers = handlers;
    this.logTag = 'IonicBaseAuth: ';
    this.addedLoginParameters = {};
    this.storage = this.getStorageProvider(options.tokenStorageProvider);
    this.session = new SessionHelper(options.clientID, this.options.platform === 'web' ? new WebStorageProvider() : new NativeStorageProvider());
    logging.setLogLevel(options.logLevel);
    this.logger = logging;

    switch (this.options.authConfig) {
      case 'auth0':
        this.authConfig = new IonicAuth0Config(options);
        break;

      case 'azure':
        this.authConfig = new IonicAzureConfig(options);
        break;

      case 'cognito':
        this.authConfig = new IonicCognitoConfig(options);
        break;

      case 'general':
        this.authConfig = new IonicGeneralAuthConfig(options);
        break;

      case 'salesforce':
        this.authConfig = new IonicSalesForceAuthConfig(options);
        break;

      case 'ping':
        this.authConfig = new IonicPingAuthConfig(options);
        break;

      case 'identity-server':
        this.authConfig = new IdentityServerAuthConfig(options, /*#__PURE__*/(0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return _this72.getRawIdToken();
        }));
        break;

      case 'okta':
        this.authConfig = new IonicOktaAuthConfig(options, /*#__PURE__*/(0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return _this72.getRawIdToken();
        }));
        break;

      case 'keycloak':
        this.authConfig = new IonicKeyCloakConfig(options);
        break;

      case 'onelogin':
        this.authConfig = new IonicOneLoginConfig(options, /*#__PURE__*/(0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return _this72.getRawIdToken();
        }));
        break;

      default:
        this.authConfig = new IonicAzureConfig(options);
        break;
    }
  }

  getRawIdToken() {
    var _this73 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let idToken = undefined;

      if (_this73.storage.getIdToken) {
        idToken = yield _this73.storage.getIdToken();
      } else {
        idToken = _this73.authResult && _this73.authResult.idToken;
      }

      return idToken;
    })();
  }

  setStorageOnLockCallback(onLockCallback) {
    if (this.storage.onLock && typeof this.storage.onLock === 'function') {
      this.storage.onLock(onLockCallback);
    }
  }

  getStorageProvider(type) {
    if (!type || type === 'localStorage') {
      const authLocalStorage = new AuthLocalStorage();
      authLocalStorage.setClientId(this.options.clientID);
      return authLocalStorage;
    } else if (isTokenStorageProvider(type)) {
      return type;
    } else if (isIV5UserInterface(type)) {
      const authIV5Storage = new AuthIdentityVault5Storage(type);
      authIV5Storage.setClientId(this.options.clientID);
      return authIV5Storage;
    } else {
      const authIVStorage = new AuthIdentityVaultStorage(type);
      authIVStorage.setClientId(this.options.clientID);
      return authIVStorage;
    }
  }

  validateIdToken(idToken) {
    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return parseJwt(idToken).payload;
    })();
  }

  setSession(authResult, tokenName, scopes) {
    var _this74 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const expiresAt = authResult.expiresIn ? authResult.expiresIn * 1000 + new Date().getTime() : undefined;

      if (expiresAt) {
        _this74.logger.debug('setting expires at', expiresAt);

        yield _this74.session.setExpiresAt(expiresAt, tokenName);
      } else {
        _this74.logger.debug('no expiration sent in result');
      } // if we have a valid tokenName we are refreshing a secondary token
      //   save the scopes, but not the result


      if (tokenName) {
        yield _this74.session.setTokenScopes(scopes, tokenName);
      } else {
        _this74.authResult = authResult;
      }

      if (_this74.storage.setIdToken && authResult.idToken) {
        yield _this74.storage.setIdToken(authResult.idToken);
      }

      if (_this74.storage.setAccessToken && authResult.accessToken) {
        yield _this74.storage.setAccessToken(authResult.accessToken, tokenName);
      }

      if (_this74.storage.setRefreshToken && authResult.refreshToken) {
        yield _this74.storage.setRefreshToken(authResult.refreshToken);
      }

      return _this74.authResult;
    })();
  }

  additionalLoginParameters(parameters) {
    this.addedLoginParameters = parameters;
  }

  setOverrideDiscoveryUrl(url) {
    var _this75 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this75.authConfig.overrideDiscoveryUrl = url;
      yield _this75.session.setOverrideUrl(url);
    })();
  }

  clearOverrideDiscoveryUrl() {
    var _this76 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this76.authConfig.overrideDiscoveryUrl = '';
      yield _this76.session.clearOverrideUrl();
    })();
  }

  getOverrideDiscoveryUrl() {
    var _this77 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this77.authConfig.overrideDiscoveryUrl = (yield _this77.session.getOverrideUrl()) || '';
      return _this77.authConfig.overrideDiscoveryUrl || undefined;
    })();
  }

  getAccessTokenExpiration(tokenName) {
    var _this78 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const expiresAt = yield _this78.session.getExpiresAt(tokenName);
      return typeof expiresAt === 'number' ? expiresAt : undefined;
    })();
  }

  login(overrideUrl) {
    var _this79 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref7 = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          const keys = yield _this79.authConfig.generateChallengeAndVerifier();
          const nonce = getRandomNonce();
          yield _this79.session.clearAuthData();
          yield _this79.session.setAuthData(keys);
          yield _this79.session.setNonce(nonce);
          const previousOverrideUrl = yield _this79.session.getOverrideUrl();
          _this79.authConfig.overrideDiscoveryUrl = overrideUrl || previousOverrideUrl || '';

          try {
            const url = yield _this79.authConfig.getAuthorizeUrl(nonce, keys.challenge, _this79.addedLoginParameters);

            _this79.showUrl(url.url, undefined, _this79.options.redirectUri).then( /*#__PURE__*/function () {
              var _ref8 = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
                const callbackString = result.callback;

                if (callbackString) {
                  const searchParams = new URL(callbackString).searchParams;

                  if (searchParams.has('error_description')) {
                    const errorDescription = searchParams.get('error_description');
                    logging.debug('error_description' + errorDescription);
                    throw new Error(errorDescription);
                  }

                  const authResult = yield _this79.internalHandleCallback(callbackString, false);

                  _this79.onLoginSuccess(authResult);

                  resolve();
                } else {
                  if (result.event === 'closed') {
                    throw new Error('browser was closed');
                  } else {
                    throw new Error('no callback string');
                  }
                }
              });

              return function (_x6) {
                return _ref8.apply(this, arguments);
              };
            }()).catch(error => {
              reject(error);
            });
          } catch (err) {
            reject(err);
          }
        });

        return function (_x4, _x5) {
          return _ref7.apply(this, arguments);
        };
      }());
    })();
  }

  getIdToken() {
    var _this80 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const idToken = yield _this80.getRawIdToken();

      if (!idToken) {
        return;
      }

      const result = yield _this80.validateIdToken(idToken);
      return result;
    })();
  }

  getAuthResponse() {
    var _this81 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this81.storage.getAuthResponse) {
        return _this81.storage.getAuthResponse();
      }
    })();
  }

  handleLoginCallback(url = window.location.href) {
    var _this82 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authResult = yield _this82.internalHandleCallback(url, true);

      _this82.onLoginSuccess(authResult);

      return authResult;
    })();
  }

  handleLogoutCallback() {
    var _this83 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this83.finishLogout();
    })();
  }
  /**
   * @deprecated Use `handleLoginCallback()` instead
   */


  handleCallback(url) {
    var _this84 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this84.handleLoginCallback(url);
    })();
  }

  isAccessTokenAvailable(tokenName) {
    var _this85 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this85.storage.getAccessToken) {
        const token = yield _this85.storage.getAccessToken(tokenName);
        return !!token;
      }

      return false;
    })();
  }

  isAccessTokenExpired(tokenName) {
    var _this86 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const expiresAt = yield _this86.session.getExpiresAt(tokenName);

      _this86.logger.debug(_this86.logTag, 'expiresAt: ', expiresAt); // If the result didn't include an expires_in we can't know whether it's expired or not


      return typeof expiresAt === 'number' ? new Date().getTime() >= expiresAt : false;
    })();
  }

  isAuthenticated(tokenName) {
    var _this87 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const idToken = yield _this87.getIdToken();

      if (!idToken) {
        _this87.logger.debug(_this87.logTag, 'no idToken, false');

        return false;
      }

      try {
        let isAuthenticated = !(yield _this87.isAccessTokenExpired(tokenName));

        if (!isAuthenticated) {
          _this87.logger.debug(_this87.logTag, 'after expiresAt time');

          try {
            yield _this87.refreshSession(tokenName);

            _this87.logger.debug(_this87.logTag, 'refresh succeeded, returning true');

            isAuthenticated = true;
          } catch (e) {
            yield _this87.clearStorage();

            _this87.logger.debug(_this87.logTag, 'refresh threw, false', e);

            isAuthenticated = false;
          }
        }

        return isAuthenticated;
      } catch (e) {
        _this87.logger.error(`${_this87.logTag} isAuthenticated`, e);

        yield _this87.clearStorage();
        return false;
      }
    })();
  }

  getRefreshToken() {
    var _this88 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this88.storage.getRefreshToken ? yield _this88.storage.getRefreshToken() : undefined;
    })();
  }

  isRefreshTokenAvailable() {
    var _this89 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return !!(yield _this89.getRefreshToken());
    })();
  }

  internalGetToken(codeName, code, grantType, verifier, scope) {
    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw Error('Not Implemented');
    })();
  }

  getAccessToken(tokenName, scopes) {
    var _this90 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isAuthenticated = yield _this90.isAuthenticated();

      if (!isAuthenticated) {
        _this90.logger.debug(_this90.logTag, 'Not authenticated, refresh failed.');

        throw 'Not authenticated, refresh failed.';
      }

      if (_this90.storage.getAccessToken) {
        _this90.logger.debug(_this90.logTag, 'returning storage accessToken', tokenName);

        if (tokenName) {
          const tempAccessToken = yield _this90.storage.getAccessToken(tokenName);

          if (tempAccessToken) {
            const isAuthenticatedToken = yield _this90.isAuthenticated(tokenName);

            if (!isAuthenticatedToken) {
              _this90.logger.debug(_this90.logTag, 'Not authenticated, refresh2 failed.');

              throw 'Not authenticated, refresh2 failed.';
            }
          }
        }

        const accessToken = yield _this90.storage.getAccessToken(tokenName);

        if (accessToken) {
          return accessToken;
        }
      }

      if (tokenName) {
        let session = yield _this90.session.getAuthData();

        if (!session) {
          session = yield _this90.authConfig.generateChallengeAndVerifier();
        }

        let refreshToken = '';

        if (_this90.storage.getRefreshToken) {
          refreshToken = yield _this90.storage.getRefreshToken();
        }

        const result = yield _this90.internalGetToken('refresh_token', refreshToken, 'refresh_token', session.verifier, scopes);

        if (result) {
          yield _this90.setSession(result, tokenName, scopes);

          _this90.logger.debug(_this90.logTag, 'Acquired a new token.', tokenName, scopes);

          return result.accessToken;
        }

        _this90.logger.debug(_this90.logTag, 'Could not acquire a new token for: ', tokenName, scopes);

        throw 'No token could be acquired.';
      } else {
        if (_this90.storage.getAuthResponse) {
          const authResponse = yield _this90.storage.getAuthResponse();

          if (authResponse && authResponse.accessToken) {
            _this90.logger.debug(_this90.logTag, 'returning authResponse accessToken');

            return authResponse.accessToken;
          }
        }

        if (_this90.authResult && _this90.authResult.accessToken) {
          _this90.logger.debug(_this90.logTag, 'returning authResult accessToken');

          return _this90.authResult.accessToken;
        }
      }

      _this90.logger.debug(_this90.logTag, 'Could not find a token, failing.');

      throw 'Authenticated, but token not found.';
    })();
  }

  expire(tokenName) {
    var _this91 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this91.session.setExpiresAt(0, tokenName);
    })();
  }

  logout() {
    var _this92 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this92.getOverrideDiscoveryUrl();
      const url = yield _this92.authConfig.getLogoutUrl();
      logging.debug('logout url: ' + url.url);
      yield _this92.showUrl(url.url, {
        hide: true
      }, _this92.options.logoutUrl);
      yield _this92.finishLogout();
    })();
  }

  finishLogout() {
    var _this93 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this93.authResult = undefined;
      yield _this93.clearStorage();
      _this93.authConfig.locations = undefined;
      yield _this93.clearOverrideDiscoveryUrl();

      _this93.onLogout();
    })();
  }

  onLoginSuccess(authResponse) {
    this.authConfig.locations = undefined;
    this.authConfig.overrideDiscoveryUrl = '';
    this.handlers.onLoginSuccess(authResponse);
  }

  onLogout() {
    this.handlers.onLogout();
  }

  clearStorage() {
    var _this94 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this94.session.clear();

      if (_this94.storage.clear) {
        yield _this94.storage.clear();
      }
    })();
  }

}

class IonicAuthWeb extends IonicBaseAuth {
  constructor(options, handlers) {
    super(options, handlers);
    this.options = options;
    this.handlers = handlers;
    this.logTag = 'IonicWebAuth: ';
    this.logger.debug(this.logTag, 'ctor options', options);
    window.addEventListener('message', event => {
      this.logger.debug(this.logTag, 'event: ', event);
    });
  }

  internalGetToken(_codeName, _code, _grantType, _verifier, scope) {
    var _this95 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this95.logger.debug(_this95.logTag, 'getting token'); // setup the env for a new token request


      const keys = yield _this95.authConfig.generateChallengeAndVerifier();
      yield _this95.session.setAuthData(keys);
      const nonce = (yield _this95.session.getNonce()) || ''; // setup the url for the token

      let urlInfo = yield _this95.authConfig.getAuthorizeUrl(nonce, keys.challenge, {});
      let url = new URL(urlInfo.url);
      url.searchParams.set('prompt', 'none');
      url.searchParams.set('scope', scope);
      url.searchParams.set('response_type', 'token');

      _this95.logger.debug(_this95.logTag, 'url for internalGetToken: ', url.href);

      const result = yield _this95.hiddenLoadUrl(url.href);
      const callbackString = result.callback;

      if (callbackString != undefined && callbackString != '') {
        const parsedUrl = urlParse(callbackString, true);
        let result = UrlHelper.parseHash(parsedUrl.hash);
        const authResult = {
          accessToken: result.access_token,
          idToken: result.id_token,
          refreshToken: result.refresh_token,
          expiresIn: result.expires_in,
          scope: result.scope,
          tokenType: result.token_type
        };

        _this95.logger.debug(_this95.logTag, 'returning authResult: ', authResult);

        return authResult;
      } else {
        var error = 'could not get token';

        _this95.logger.error(error);

        throw error;
      }
    })();
  }

  internalHandleCallback(url, externalCallback) {
    var _this96 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this96.logger.debug(_this96.logTag, 'handleCallback url:' + url);

      const parsedUrl = urlParse(url, true);
      const searchParams = new URLSearchParams(parsedUrl.hash);

      _this96.logger.debug(_this96.logTag, 'searchParams: ', JSON.stringify(searchParams));

      if (searchParams.has('error_description')) {
        const errorDescription = searchParams.get('error_description');

        _this96.logger.debug('error_description' + errorDescription);

        throw new Error(errorDescription);
      }

      const query_params = parsedUrl.query;

      _this96.logger.debug(_this96.logTag, 'query params: ', query_params);

      const hash = UrlHelper.parseHash(parsedUrl.hash);

      _this96.logger.debug(_this96.logTag, 'hash: ', hash);

      if (hash.access_token != undefined && hash.id_token != undefined || _this96.options.webAuthFlow && _this96.options.webAuthFlow === 'PKCE' && query_params.code != undefined) {
        let result = {};
        const session = yield _this96.session.getAuthData();

        if (!session) {
          throw new Error('No session data stored');
        }

        _this96.logger.debug(_this96.logTag, 'got a session');

        if (query_params.code != undefined) {
          var options = {
            grant_type: 'authorization_code',
            client_id: _this96.options.clientID,
            code_verifier: session.verifier,
            code: query_params.code,
            redirect_uri: String(_this96.options.redirectUri)
          };
          result = yield _this96.postToken(options);
        } else {
          result = hash;
        }

        return yield _this96.handleAuthResult(result);
      } else {
        var error = 'Web only supports implicit login with id and access token returned from the authorize call or PKCE';

        _this96.logger.error(error);

        throw error;
      }
    })();
  }

  refreshSession(tokenName) {
    var _this97 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this97.logger.debug(_this97.logTag, 'refreshing session');

      yield _this97.getOverrideDiscoveryUrl();

      if (tokenName) {
        _this97.logger.debug(_this97.logTag, 'refreshing other token: ', tokenName);

        const scope = yield _this97.session.getTokenScopes(tokenName);
        const authResult = yield _this97.internalGetToken('', '', '', undefined, scope);
        yield _this97.setSession(authResult, tokenName, scope);
        return;
      }

      if (_this97.options.webAuthFlow === 'PKCE') {
        const refreshToken = yield _this97.getRefreshToken();

        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        let options = {
          grant_type: 'refresh_token',
          client_id: _this97.options.clientID,
          refresh_token: refreshToken
        };
        const result = yield _this97.postToken(options);
        yield _this97.handleAuthResult(result);
      } else {
        const keys = yield _this97.authConfig.generateChallengeAndVerifier();
        yield _this97.session.clearAuthData();
        yield _this97.session.setAuthData(keys);

        _this97.logger.debug(_this97.logTag, 'keys: ', keys);

        const nonce = (yield _this97.session.getNonce()) || '';

        _this97.logger.debug(_this97.logTag, 'nonce: ', nonce);

        let url = yield _this97.authConfig.getAuthorizeUrl(nonce, keys.challenge, {});
        url.url = url.url + '&prompt=none';

        _this97.logger.debug(_this97.logTag, 'url for refresh: ', url.url);

        try {
          const result = yield _this97.hiddenLoadUrl(url.url);

          _this97.logger.debug(_this97.logTag, 'result for refresh: ', result);

          const callbackString = result.callback;

          if (callbackString != undefined && callbackString != '') {
            _this97.logger.debug(_this97.logTag, 'calling handleCallback');

            yield _this97.internalHandleCallback(callbackString, false);
          }
        } catch (e) {
          var error = 'Failed to refresh session';

          _this97.logger.error(error);

          throw error;
        }
      }
    })();
  }

  handleAuthResult(result) {
    var _this98 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this98.storage.setAuthResponse) {
        yield _this98.storage.setAuthResponse(result);
      }

      _this98.logger.debug(_this98.logTag, 'result: ', result);

      const authResult = {
        accessToken: result.access_token,
        idToken: result.id_token,
        refreshToken: result.refresh_token,
        expiresIn: result.expires_in,
        scope: result.scope,
        tokenType: result.token_type
      };
      yield _this98.setSession(authResult);

      _this98.logger.debug(_this98.logTag, 'clear auth data');

      yield _this98.session.clearAuthData();

      _this98.logger.debug(_this98.logTag, 'return auth result', authResult);

      return authResult;
    })();
  }

  postToken(options) {
    var _this99 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tokenUrlInfo = yield _this99.authConfig.getTokenUrl();
      const tokenUrl = tokenUrlInfo.url || '';
      const headers = Object.assign(Object.assign({}, tokenUrlInfo.headers), {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      options = Object.assign(Object.assign({}, tokenUrlInfo.payload), options);
      const bodyParams = Object.keys(options).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
      }).join('&');
      const response = yield fetch(tokenUrl, {
        method: 'POST',
        headers: headers,
        body: bodyParams
      });

      if (!response.ok) {
        const jsonRes = yield response.json();
        const errorMessage = `POST to token endpoint failed with error: ${jsonRes.error_description ? jsonRes.error_description : jsonRes.error}`;

        _this99.logger.error(errorMessage);

        throw errorMessage;
      }

      return JSON.parse(yield response.text());
    })();
  }

  hiddenLoadUrl(url) {
    try {
      return new Promise((resolve, reject) => {
        this.logger.debug(this.logTag, 'opening browser.');
        let iframeLocation;
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = url;
        document.getElementsByTagName('body')[0].appendChild(iframe);
        iframe.src = url;
        const that = this;
        var timer = window.setInterval(() => {
          try {
            if (iframe === null) {
              return;
            }

            if (iframe.contentWindow !== null) {
              iframeLocation = iframe.contentWindow.location;
            } else if (iframe.contentDocument !== null) {
              iframeLocation = iframe.contentDocument.location;
            } else {
              this.logger.debug(this.logTag, 'no doc or window');
              return;
            }

            if (!encodeURI(iframeLocation.href).indexOf(encodeURI(that.options.redirectUri))) {
              window.clearInterval(timer);
              const href = iframeLocation.href;
              this.logger.debug(this.logTag, 'closing iframe: ', href);

              if (iframe.parentNode !== null) {
                iframe.parentNode.removeChild(iframe);
              }

              this.logger.debug(this.logTag, 'calling resolve');
              resolve({
                event: 'opened',
                callback: href
              });
            }

            return;
          } catch (e) {
            window.clearInterval(timer);
            this.logger.error(this.logTag, e.message);
            reject(e.message);
          }
        }, 1);
      });
    } catch (err) {
      this.logger.error(this.logTag, 'hiddenLoadUrl error: ', err);
      throw err;
    }
  }

  showUrl(url, _options, urlToCloseWindow = this.options.redirectUri) {
    try {
      if (this.options.implicitLogin !== 'CURRENT') {
        // POPUP
        return new Promise((resolve, reject) => {
          this.logger.debug(this.logTag, 'opening browser.');
          let popupLocation;
          const popup = window.open(url, '_system');
          var timer = window.setInterval(() => {
            if (!popup || popup.closed) {
              window.clearInterval(timer);
              const error = 'popup window closed without navigating to result url';
              this.logger.error(this.logTag, error);
              reject(error);
            }

            try {
              if (!popup) {
                return;
              }

              popupLocation = popup.location;

              if (!encodeURI(popupLocation.href).indexOf(encodeURI(urlToCloseWindow))) {
                window.clearInterval(timer);
                const popupString = popupLocation.toString();
                this.logger.debug(this.logTag, 'closing popup: ', popupLocation);
                popup.close();
                this.logger.debug(this.logTag, 'closed popup', popupString);
                resolve({
                  event: 'opened',
                  callback: popupString
                });
              }

              return;
            } catch (e) {// While the URL is at the auth provider, we will get a DOMException error trying to access the window.
              // We eat the error and try again.
            }
          }, 1);
        });
      } else {
        // CURRENT
        logging.debug(this.logTag, 'about to navigate forward');
        window.location.replace(url);
        return new Promise(() => {});
      }
    } catch (err) {
      this.logger.error(this.logTag, 'showUrl error: ', err);
      throw err;
    }
  }

}

class SecureWebView {
  isAvailable(callback) {
    var errorHandler = function errorHandler(error) {
      // An error has occurred while trying to access the
      // SecureWebView native implementation, most likely because
      // we are on an unsupported platform.
      callback(false);
    };

    cordova.exec(callback, errorHandler, 'SecureWebView', 'isAvailable', []);
  } // options:
  //  url - url to display
  //  webView - for iOS which webview to display, if possible. By default we use the newest one available for OS version
  //      - ASWebAuth - ASWebAuthenticationSession (avaialble starting in iOS 12)
  //      - SFAuth - SFAuthenticationSession (available starting in iOS 11)
  //      - SFSafari - SFSafariViewController (available starting in iOS 9)
  //      - MobileSafari - Mobile Safari (pre-iOS 8)


  show(options, onSuccess, onError) {
    options = options || {};

    if (!options.hasOwnProperty('animated')) {
      options.animated = true;
    }

    cordova.exec(onSuccess, onError, 'SecureWebView', 'show', [options]);
  }

  hide(onSuccess, onError) {
    cordova.exec(onSuccess, onError, 'SecureWebView', 'hide', []);
  }

  getViewHandlerPackages(onSuccess, onError) {
    cordova.exec(onSuccess, onError, 'SecureWebView', 'getViewHandlerPackages', []);
  }

  useCustomTabsImplementation(packageName, onSuccess, onError) {
    cordova.exec(onSuccess, onError, 'SecureWebView', 'useCustomTabsImplementation', [packageName]);
  }

  connectToService(onSuccess, onError) {
    cordova.exec(onSuccess, onError, 'SecureWebView', 'connectToService', []);
  }

  warmUp(onSuccess, onError) {
    cordova.exec(onSuccess, onError, 'SecureWebView', 'warmUp', []);
  }

  mayLaunchUrl(url, onSuccess, onError) {
    cordova.exec(onSuccess, onError, 'SecureWebView', 'mayLaunchUrl', [url]);
  }

}

const IonicSecureWebView = new SecureWebView();
const ready = new Promise(resolve => {
  const DEVICE_READY_TIMEOUT = 5000;
  const readyTimeout = setTimeout(() => {
    console.warn(`Auth Connect: deviceready did not fire within ${DEVICE_READY_TIMEOUT}ms.`);
    resolve();
  }, DEVICE_READY_TIMEOUT);
  document.addEventListener('deviceready', () => {
    clearTimeout(readyTimeout);
    resolve();
  });
});

class IonicNativeAuth extends IonicBaseAuth {
  constructor() {
    super(...arguments);
    this.logTag = 'IonicNativeAuth: ';
  }

  internalGetToken(codeName, code, grantType, verifier, scope) {
    var _this100 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let payload;
      payload = {
        grant_type: grantType,
        client_id: _this100.options.clientID,
        code_verifier: verifier,
        redirect_uri: String(_this100.options.redirectUri)
      };
      payload[codeName] = String(code);
      const tokenUrlInfo = yield _this100.authConfig.getTokenUrl();
      const tokenUrl = tokenUrlInfo.url || '';

      if (tokenUrlInfo.payload) {
        payload = Object.assign(Object.assign({}, tokenUrlInfo.payload), payload);
      }

      if (scope != undefined) {
        payload.scope = scope;
      }

      let headers = {};

      if (tokenUrlInfo.headers) {
        headers = tokenUrlInfo.headers;
      } else {
        headers = {
          'Content-Type': 'application/json'
        };
      } // need to await device ready


      return yield UrlHelper.post(tokenUrl, payload, headers).then( /*#__PURE__*/function () {
        var _ref9 = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          const result = JSON.parse(response.data);

          if (_this100.storage.setAuthResponse && grantType != 'refresh_token') {
            yield _this100.storage.setAuthResponse(result);
          }

          _this100.logger.debug(_this100.logTag, 'got result', result);

          _this100.logger.debug(_this100.logTag, 'access_token', result.access_token);

          _this100.logger.debug(_this100.logTag, 'id_token', result.id_token);

          _this100.logger.debug(_this100.logTag, 'refresh_token', result.refresh_token);

          _this100.logger.debug(_this100.logTag, 'profile_info', result.profile_info);

          _this100.logger.debug(_this100.logTag, 'expires_in', result.expires_in);

          const authResult = {
            accessToken: result.access_token,
            idToken: result.id_token,
            refreshToken: result.refresh_token,
            expiresIn: result.expires_in,
            scope: result.scope,
            tokenType: result.token_type
          };
          return authResult;
        });

        return function (_x7) {
          return _ref9.apply(this, arguments);
        };
      }()).catch(error => {
        _this100.logger.debug(tokenUrl, _this100.logTag, ' - tokenUrl');

        _this100.logger.debug(headers, _this100.logTag, ' - headers');

        _this100.logger.debug(payload, _this100.logTag, ' - payload');

        _this100.logger.error(_this100.logTag, error);

        return {};
      });
    })();
  }

  internalHandleCallback(url, _externalCallback) {
    var _this101 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const session = yield _this101.session.getAuthData();

      if (!session) {
        throw new Error('No session data stored');
      }

      let {
        code
      } = urlParse(url, true).query;
      yield ready;
      let grantType = 'authorization_code';
      let codeName = 'code';

      try {
        const result = yield _this101.internalGetToken(codeName, code, grantType, session.verifier, undefined);
        yield _this101.setSession(result);
        yield _this101.session.clearAuthData();
        IonicSecureWebView.hide(data => {
          _this101.logger.debug(_this101.logTag, 'IonicSecureWebView.hide succeeded: ', data);
        }, err => {
          _this101.logger.error(_this101.logTag, 'IonicSecureWebView.hide failed: ', err);
        });
        return result;
      } catch (err) {
        yield _this101.session.clearAuthData();

        _this101.logout();

        throw err;
      }
    })();
  }

  refreshSession(tokenName) {
    var _this102 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this102.getOverrideDiscoveryUrl();

      _this102.logger.debug(_this102.logTag, 'refresh flow');

      const url = yield _this102.authConfig.getTokenUrl();
      const nonce = yield _this102.session.getNonce();
      const refreshToken = yield _this102.getRefreshToken();

      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      let payload;
      payload = {
        client_id: _this102.options.clientID,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
        nonce,
        state: nonce
      };

      if (url.payload) {
        payload = Object.assign(Object.assign({}, url.payload), payload);
      }

      let secondaryToken = false;

      if (tokenName) {
        payload.scope = yield _this102.session.getTokenScopes(tokenName);
        secondaryToken = true;
      }

      const headers = url.headers ? url.headers : {
        'Content-Type': 'application/json'
      };
      yield ready;
      return yield UrlHelper.post(url.url || '', payload, headers).then( /*#__PURE__*/function () {
        var _ref10 = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          const result = JSON.parse(response.data);

          if (_this102.storage.setAuthResponse && !secondaryToken) {
            yield _this102.storage.setAuthResponse(result);
          }

          const authResult = {
            accessToken: result.access_token,
            idToken: result.id_token,
            refreshToken: result.refresh_token,
            expiresIn: result.expires_in,
            scope: result.scope,
            tokenType: result.token_type
          };
          yield _this102.setSession(authResult, tokenName, result.scope);
          return;
        });

        return function (_x8) {
          return _ref10.apply(this, arguments);
        };
      }()).catch(error => {
        _this102.logger.debug(_this102.logTag, 'tokenUrl: ' + url.url);

        _this102.logger.debug(_this102.logTag, 'headers: ', headers);

        _this102.logger.debug(_this102.logTag, 'payload: ', payload);

        _this102.logger.error(_this102.logTag, error);

        throw error;
      });
    })();
  }

  showUrl(url, options) {
    return new Promise((resolve, reject) => {
      let curOptions = {};

      if (this.options.androidToolbarColor) {
        curOptions = Object.assign(Object.assign({}, curOptions), {
          toolbarColor: this.options.androidToolbarColor
        });
      }

      if (this.options.safariWebViewOptions) {
        curOptions = Object.assign(Object.assign({}, curOptions), this.options.safariWebViewOptions);
      }

      this.logger.debug(this.logTag, 'webView option: ', this.authConfig.options.iosWebView);
      const params = Object.assign({}, {
        url,
        callbackUrl: this.authConfig.options.redirectUri,
        iosWebView: this.authConfig.options.iosWebView
      }, curOptions);
      this.logger.debug(this.logTag, 'using params: ', params);
      IonicSecureWebView.show(params, result => {
        this.logger.debug(this.logTag, 'result :', result);
        resolve(result);
      }, error => {
        this.logger.error(this.logTag, 'show failed: ', error);
        reject(error);
      });
    });
  }

}

class IonicAuth {
  constructor(options) {
    this.implementation = this.getImplementation(options);
  }
  /**
   * Using configuration display the auth provider's login UI.
   *
   *  The overrideUrl parameter should only be used when the default
   *  discovery url needs to be overrode. (The known use case is with Azure AD
   *  custom user flows/policies.)
   *
   * @example
   * myAuthService.login("")
   */


  login(overrideUrl) {
    return this.implementation.login(overrideUrl);
  }
  /**
   * Add additional parameters to the login request.
   *
   * @example
   * myAuthService.additionalLoginParameters({ 'login_hint': 'neighbors cat name' })
   *
   * @param parameters any additional parameters that should be added to the login request
   *  examples: `login_hint`, `domain_hint`
   */


  additionalLoginParameters(parameters) {
    return this.implementation.additionalLoginParameters(parameters);
  }
  /**
   * Get the access token, once logged in, for API calls.
   *
   * @example
   * myAuthService.getAccessToken()
   *
   * @param tokenName Optional token name, only used when multiple tokens are required (Azure specific feature).
   * @param scopes The scopes for the access token.
   */


  getAccessToken(tokenName, scopes) {
    return this.implementation.getAccessToken(tokenName, scopes);
  }
  /**
   * Get the unparsed id token.
   *
   * @example
   * myAuthService.getRawIdToken()
   */


  getRawIdToken() {
    return this.implementation.getRawIdToken();
  }
  /**
   * Get the parsed id token, includes requested scope values.
   *
   * @example
   * myAuthService.getIdToken()
   */


  getIdToken() {
    return this.implementation.getIdToken();
  }
  /**
   * Get the full original auth response.
   *
   * @example
   * myAuthService.getAuthResponse()
   */


  getAuthResponse() {
    return this.implementation.getAuthResponse();
  }
  /**
   * Check to see if the access token is available.
   *
   * @example
   * myAuthService.isAccessTokenAvailable()
   *
   * @param tokenName Optional token name, only used when multiple tokens are required (Azure specific feature).
   */


  isAccessTokenAvailable(tokenName) {
    return this.implementation.isAccessTokenAvailable(tokenName);
  }
  /**
   * Check to see if the access token is expired.
   *
   * @example
   * myAuthService.isAccessTokenExpired()
   */


  isAccessTokenExpired() {
    return this.implementation.isAccessTokenExpired();
  }
  /**
   * Check to see if the refresh token is available.
   *
   * @example
   * myAuthService.isRefreshTokenAvailable()
   */


  isRefreshTokenAvailable() {
    return this.implementation.isRefreshTokenAvailable();
  }
  /**
   * Get the refresh token if available.
   *
   * @example
   * myAuthService.getRefreshToken()
   */


  getRefreshToken() {
    return this.implementation.getRefreshToken();
  }
  /**
   * Refresh the session, throws if refresh token is invalid or missing.
   *
   * @example
   * myAuthService.refreshSession()
   *
   * @param tokenName Optional token name, only used when multiple tokens are required (Azure specific feature).
   */


  refreshSession() {
    return this.implementation.refreshSession();
  }
  /**
   * Check to see if the user is logged in, and refresh the token if needed.
   *
   * @example
   * const isAuth = myAuthService.isAuthenticated()
   */


  isAuthenticated() {
    return this.implementation.isAuthenticated();
  }
  /**
   * Log the user out and clear all tokens & data stored in the {@link TokenStorageProvider} as well as any
   * metadata relevant to the existing session such as access token expiration time.
   *
   * @example
   * myAuthService.logout()
   */


  logout() {
    return this.implementation.logout();
  }
  /**
   * Expire the current access token, but keep the refresh token, useful for testing.
   *
   * @example
   * myAuthService.expire()
   */


  expire() {
    return this.implementation.expire();
  }
  /**
   * Called by the hosting app when login callbacks happen, these will be to the URL specified
   *  in the options for RedirectUri.
   *
   * @example
   * myAuthService.handleLoginCallback()
   *
   * @param url callback url to handle @default defaults to `window.location.href`
   */


  handleLoginCallback(url) {
    return this.implementation.handleLoginCallback(url);
  }
  /**
   * Called by the hosting app when logout callbacks happens.
   *
   * @example
   * myAuthService.handleLogoutCallback()
   */


  handleLogoutCallback() {
    return this.implementation.handleLogoutCallback();
  }
  /**
   * Called by the hosting app when callbacks happen, these will be to the URL specified
   *  in the options for LogoutUrl and RedirectUri.
   *
   * @example
   * myAuthService.handleCallback(window.location.href)
   *
   * @deprecated Use [handleLoginCallback](#iionicauth.handlelogincallback) instead
   * @param url callback url to handle
   */


  handleCallback(url) {
    return this.implementation.handleLoginCallback(url);
  }
  /**
   * This method will clear all tokens & data stored in the {@link TokenStorageProvider} as well as any
   * metadata relevant to the existing session such as access token expiration time.
   *
   * @example
   * myAuthService.clearStorage()
   */


  clearStorage() {
    var _this103 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this103.implementation.clearStorage();
    })();
  }
  /**
   * Override the discovery url used for login in a way that persists.
   *
   * @example
   * myAuthService.setOverrideDiscoveryUrl("https://myurl")
   *
   * @param url the discovery url used for login
   */


  setOverrideDiscoveryUrl(url) {
    return this.implementation.setOverrideDiscoveryUrl(url);
  }
  /**
   * Clear previosly persisted override of the discovery url used for login.
   *
   * @example
   * myAuthService.clearOverrideDiscoveryUrl()
   */


  clearOverrideDiscoveryUrl() {
    return this.implementation.clearOverrideDiscoveryUrl();
  }
  /**
   * Clear previosly persisted override of the discovery url used for login.
   *
   * @example
   * myAuthService.getOverrideDiscoveryUrl()
   */


  getOverrideDiscoveryUrl() {
    return this.implementation.getOverrideDiscoveryUrl();
  }
  /**
   * Get the time the access token will expire in milliseconds from the epoch.
   *
   * @example
   * myAuthService.getAccessTokenExpiration()
   */


  getAccessTokenExpiration() {
    return this.implementation.getAccessTokenExpiration();
  }
  /**
   * Event handler which can be overridden to handle successful login events.
   *
   * @usage
   * ```typescript
   * async onLoginSuccess(): Promise<void> {
   *  // do something here
   * }
   * ```
   * @param result the auth result from a successful login
   */


  onLoginSuccess(result) {}
  /**
   * Event handler which can be overridden to handle successful logout events.
   *
   * @usage
   * ```typescript
   * async onLogout(): Promise<void> {
   *  // do something here
   * }
   * ```
   */


  onLogout() {}

  getImplementation(options) {
    switch (options.platform) {
      case 'web':
        return new IonicAuthWeb(options, {
          onLoginSuccess: this.onLoginSuccess.bind(this),
          onLogout: this.onLogout.bind(this)
        });

      default:
        return new IonicNativeAuth(options, {
          onLoginSuccess: this.onLoginSuccess.bind(this),
          onLogout: this.onLogout.bind(this)
        });
    }
  }

}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFKLENBQW9CeGdCLE9BQXBCLEVBQTZCO1VBQ2hDOVIsY0FBYyxFQUFFLEtBQUtBLGNBQUwsQ0FBb0JtekIsSUFBcEIsQ0FBeUIsSUFBekIsQ0FEZ0I7VUFFaENsekIsUUFBUSxFQUFFLEtBQUtBLFFBQUwsQ0FBY2t6QixJQUFkLENBQW1CLElBQW5CO1FBRnNCLENBQTdCLENBQVA7SUFQUjtFQVlIOztBQXZRVyIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCIuL3NyYy9hcHAvdGFiMS90YWIxLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3RhYjEvdGFiMS5tb2R1bGUudHMiLCIuL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2UudHMiLCIuL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2UuaHRtbCIsIi4vc3JjL2FwcC92YXVsdC5zZXJ2aWNlLnRzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljLWVudGVycHJpc2UvYXV0aC9kaXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNBdXRoIH0gZnJvbSAnQGlvbmljLWVudGVycHJpc2UvYXV0aCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbmF0aXZlSW9uaWNBdXRoT3B0aW9ucywgd2ViSW9uaWNBdXRoT3B0aW9ucyB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBWYXVsdFNlcnZpY2UgfSBmcm9tICcuLi92YXVsdC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIGV4dGVuZHMgSW9uaWNBdXRoIHtcbiAgcHVibGljIGF1dGhlbnRpY2F0aW9uQ2hhbmdlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvbkNoYW5nZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgY29uc3RydWN0b3IocGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHZhdWx0U2VydmljZTogVmF1bHRTZXJ2aWNlKSB7XG4gICAgc3VwZXIocGxhdGZvcm0uaXMoJ2h5YnJpZCcpXG4gICAgPyB7IC4uLm5hdGl2ZUlvbmljQXV0aE9wdGlvbnMsIHRva2VuU3RvcmFnZVByb3ZpZGVyOiB2YXVsdFNlcnZpY2UudmF1bHQgfVxuICAgIDogd2ViSW9uaWNBdXRoT3B0aW9uc1xuICAgICk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvbkNoYW5nZSQgPSB0aGlzLmF1dGhlbnRpY2F0aW9uQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkKCkudGhlbigoYXV0aGVudGljYXRlZCkgPT4geyB0aGlzLm9uQXV0aENoYW5nZShhdXRoZW50aWNhdGVkKTsgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgb25Mb2dpblN1Y2Nlc3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5vbkF1dGhDaGFuZ2UodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgb25Mb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5vbkF1dGhDaGFuZ2UoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBvbkF1dGhDaGFuZ2UoaXNBdXRoZW50aWNhdGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuYXV0aGVudGljYXRpb25DaGFuZ2UubmV4dChpc0F1dGhlbnRpY2F0ZWQpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGFiMVBhZ2UgfSBmcm9tICcuL3RhYjEucGFnZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBUYWIxUGFnZSxcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFiMVBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUYWIxUGFnZSB9IGZyb20gJy4vdGFiMS5wYWdlJztcbmltcG9ydCB7IEV4cGxvcmVDb250YWluZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBUYWIxUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RhYjEtcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEV4cGxvcmVDb250YWluZXJDb21wb25lbnRNb2R1bGUsXG4gICAgVGFiMVBhZ2VSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1RhYjFQYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBUYWIxUGFnZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERldmljZSB9IGZyb20gJ0Bpb25pYy1lbnRlcnByaXNlL2lkZW50aXR5LXZhdWx0JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBWYXVsdFNlcnZpY2UgfSBmcm9tICcuLi92YXVsdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRhYjEnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYjEucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYjEucGFnZS5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFiMVBhZ2Uge1xuICBwdWJsaWMgaXNFbXB0eTogc3RyaW5nO1xuICBwdWJsaWMgaXNMb2NrZWQ6IHN0cmluZztcbiAgcHVibGljIGF1dGhlbnRpY2F0aW9uQ2hhbmdlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIHZhdWx0U2VydmljZTogVmF1bHRTZXJ2aWNlLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIHRoaXMuYXV0aGVudGljYXRpb25DaGFuZ2UkID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmF1dGhlbnRpY2F0aW9uQ2hhbmdlJDtcbiAgICB0aGlzLnBsYXRmb3JtLnJlc3VtZS5zdWJzY3JpYmUoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgYXN5bmMgaW9uVmlld0RpZEVudGVyKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoKSB7XG4gICAgdGhpcy5pc0VtcHR5ID0gYXdhaXQgdGhpcy52YXVsdFNlcnZpY2UuaXNFbXB0eSgpID8gJ1ZhdWx0IGlzIGVtcHR5JzogJ1ZhdWx0IGhhcyBkYXRhJztcbiAgICB0aGlzLmlzTG9ja2VkID0gYXdhaXQgdGhpcy52YXVsdFNlcnZpY2UuaXNMb2NrZWQoKSA/ICdWYXVsdCBpcyBsb2NrZWQnOiAnVmF1bHQgaXMgdW5sb2NrZWQnO1xuXG4gIH1cblxuICBhc3luYyBsb2dpbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBUaGlzIGxpbmUgaXMgcmVxdWlyZWQgaWYgaW9zV2ViVmlldyBpcyBzaGFyZWQgYW5kIHdlIGFyZSB1c2luZyBJZGVudGl0eSBWYXVsdC4gSXQgcHJldmVudHMgdGhlIHByaXZhY3kgc2NyZWVuIGZyb20gZGlzcGxheWluZ1xuICAgIC8vIERldmljZS5zZXRIaWRlU2NyZWVuT25CYWNrZ3JvdW5kKGZhbHNlKTtcbiAgICBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dpbigpO1xuICB9XG5cbiAgYXN5bmMgbG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuXG4gIGFzeW5jIHJlZnJlc2goKSB7XG4gICAgY29uc29sZS5sb2coYXdhaXQgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNSZWZyZXNoVG9rZW5BdmFpbGFibGUoKSk7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRBY2Nlc3NUb2tlbigpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWZyZXNoU2Vzc2lvbigpO1xuICAgIGNvbnN0IGF0b2tlbiA9IGF3YWl0IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEFjY2Vzc1Rva2VuKCk7XG4gICAgY29uc29sZS5sb2coYXRva2VuKTtcbiAgICBpZiAoYXRva2VuICE9PSB0b2tlbikge1xuICAgICAgYWxlcnQoJ1Rva2VuIHdhcyByZWZyZXNoZWQnKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2NrKCkge1xuICAgIGlmIChhd2FpdCB0aGlzLnZhdWx0U2VydmljZS5sb2NrKCkpIHtcbiAgICAgIGNvbnN0IGlzTG9ja2VkID0gYXdhaXQgdGhpcy52YXVsdFNlcnZpY2UuaXNMb2NrZWQoKTtcbiAgICAgIGlmICghaXNMb2NrZWQpIHtcbiAgICAgICAgdGhpcy52YXVsdFNlcnZpY2UucHJlc2VudEFsZXJ0KCdFcnJvcicsJ1ZhdWx0IGxvY2sgY2FsbCB3YXMgc3VjY2Vzc2Z1bGx5IG1hZGUgYnV0IGlzIHJldHVybmluZyBsb2NrZWQgaXMgZmFsc2UnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGFzeW5jIHVubG9jaygpIHtcbiAgICBhd2FpdCB0aGlzLnZhdWx0U2VydmljZS51bmxvY2soKTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgYXN5bmMgY2hlY2tJc0VtcHR5KCkge1xuICAgIGNvbnN0IGlzRW1wdHkgPSBhd2FpdCB0aGlzLnZhdWx0U2VydmljZS5pc0VtcHR5KCk7XG4gICAgdGhpcy52YXVsdFNlcnZpY2UucHJlc2VudEFsZXJ0KCdNZXNzYWdlJywgYGlzRW1wdHkgaXMgJHtpc0VtcHR5fVwiYCk7XG4gIH1cblxuICBhc3luYyBjbGVhcigpIHtcbiAgICBhd2FpdCB0aGlzLnZhdWx0U2VydmljZS5jbGVhcigpO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBhc3luYyBzZXREYXRhKCkge1xuICAgIGF3YWl0IHRoaXMudmF1bHRTZXJ2aWNlLnNldERhdGEoKTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMudmF1bHRTZXJ2aWNlLmdldERhdGEoKTtcbiAgICAgIHRoaXMudmF1bHRTZXJ2aWNlLnByZXNlbnRBbGVydCgnTWVzc2FnZScsIGBUaGUgdmF1bHQgZGF0YSByZWFkIGFzIFwiJHtkYXRhfVwiYCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnZhdWx0U2VydmljZS5wcmVzZW50QWxlcnQoJ0Vycm9yJywgYEZhaWxlZCB0byBnZXQgZGF0YSBcIiR7ZXJyLm1lc3NhZ2V9XCIgKEVycm9yIENvZGU6ICR7ZXJyLmNvZGV9KWApO1xuICAgICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjaGVja0JpbygpIHtcbiAgICBjb25zdCBoYXNCaW8gPSBhd2FpdCB0aGlzLnZhdWx0U2VydmljZS5oYXNCaW9tZXRyaWNzKCk7XG4gICAgYWxlcnQoJ0Jpb21ldHJpY3MgaXMgJyArIGhhc0Jpbyk7XG4gIH1cblxuICBhc3luYyB1c2VTZWN1cmUoZW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMudmF1bHRTZXJ2aWNlLnVzZVNlY3VyZShlbmFibGVkKTtcbiAgfVxuXG4gIGFzeW5jIHNldFRvUGFzc2NvZGUoKSB7XG4gICAgdGhpcy52YXVsdFNlcnZpY2Uuc3dpdGNoUGFzc2NvZGUoKTtcbiAgfVxuXG4gIGFzeW5jIHNldFRvQm90aCgpIHtcbiAgICB0aGlzLnZhdWx0U2VydmljZS5zd2l0Y2hCb3RoKCk7XG4gIH1cblxufVxuIiwiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucz5cbiAgICAgIDxpb24tdGl0bGU+XG4gICAgICAgIEF1dGhlbnRpY2F0ZWQ9e3thdXRoZW50aWNhdGlvbkNoYW5nZSQgfCBhc3luY319XG4gICAgICA8L2lvbi10aXRsZT5cbiAgICAgIDxpb24tYnV0dG9uIFtoaWRkZW5dPVwiKGF1dGhlbnRpY2F0aW9uQ2hhbmdlJCB8IGFzeW5jKVwiIChjbGljayk9XCJsb2dpbigpXCI+U2lnbiBJbjwvaW9uLWJ1dHRvbj5cbiAgICAgIDxpb24tYnV0dG9uIFtoaWRkZW5dPVwiKGF1dGhlbnRpY2F0aW9uQ2hhbmdlJCB8IGFzeW5jKSA9PT0gZmFsc2VcIiAoY2xpY2spPVwibG9nb3V0KClcIj5TaWduIE91dDwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj5UZXN0PC9pb24tdGl0bGU+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxkaXYgc3R5bGU9XCJwYWRkaW5nOjI1cHhcIj5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwibG9jaygpXCI+TG9jazwvaW9uLWJ1dHRvbj5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwidW5sb2NrKClcIj5VbmxvY2s8L2lvbi1idXR0b24+XG4gICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsZWFyKClcIj5DbGVhcjwvaW9uLWJ1dHRvbj5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwicmVmcmVzaCgpXCI+UmVmcmVzaDwvaW9uLWJ1dHRvbj5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2hlY2tCaW8oKVwiPkNoZWNrIEJpbzwvaW9uLWJ1dHRvbj5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiZ2V0RGF0YSgpXCI+R2V0IERhdGE8L2lvbi1idXR0b24+XG4gICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInNldERhdGEoKVwiPlNldCBEYXRhPC9pb24tYnV0dG9uPlxuICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJ1c2VTZWN1cmUodHJ1ZSlcIj5Td2l0Y2ggdG8gU2VjdXJlPC9pb24tYnV0dG9uPlxuICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJ1c2VTZWN1cmUoZmFsc2UpXCI+U3dpdGNoIHRvIEJpbzwvaW9uLWJ1dHRvbj5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwic2V0VG9Cb3RoKClcIj5Td2l0Y2ggdG8gQm90aDwvaW9uLWJ1dHRvbj5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwic2V0VG9QYXNzY29kZSgpXCI+U3dpdGNoIHRvIFBhc3Njb2RlPC9pb24tYnV0dG9uPlxuICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJjaGVja0lzRW1wdHkoKVwiPkNoZWNrIGlzRW1wdHk8L2lvbi1idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IHN0eWxlPVwicGFkZGluZzoyNXB4XCI+XG4gICAgPHA+e3tpc0VtcHR5fX08L3A+PGJyLz5cbiAgICA8cD57e2lzTG9ja2VkfX08L3A+XG4gIDwvZGl2PlxuPC9pb24tY29udGVudD4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXBhY2l0b3IgfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnJvd3NlclZhdWx0LCBEZXZpY2UsIERldmljZVNlY3VyaXR5VHlwZSxcbiAgSWRlbnRpdHlWYXVsdENvbmZpZywgVmF1bHQsIFZhdWx0VHlwZVxufSBmcm9tICdAaW9uaWMtZW50ZXJwcmlzZS9pZGVudGl0eS12YXVsdCc7XG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIsIFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBWYXVsdFNlcnZpY2Uge1xuXG4gIGNvbmZpZzogSWRlbnRpdHlWYXVsdENvbmZpZyA9IHtcbiAgICBrZXk6ICdpby5pb25pYy5pdi10ZXN0LWJpbzUnLFxuICAgIHR5cGU6IFZhdWx0VHlwZS5EZXZpY2VTZWN1cml0eSxcbiAgICBkZXZpY2VTZWN1cml0eVR5cGU6IERldmljZVNlY3VyaXR5VHlwZS5CaW9tZXRyaWNzLFxuICAgIGxvY2tBZnRlckJhY2tncm91bmRlZDogMjAwMCxcbiAgICBzaG91bGRDbGVhclZhdWx0QWZ0ZXJUb29NYW55RmFpbGVkQXR0ZW1wdHM6IHRydWUsXG4gICAgY3VzdG9tUGFzc2NvZGVJbnZhbGlkVW5sb2NrQXR0ZW1wdHM6IDEwLFxuICAgIHVubG9ja1ZhdWx0T25Mb2FkOiBmYWxzZSxcbiAgfTtcblxuICB2YXVsdDogVmF1bHQgfCBCcm93c2VyVmF1bHQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpO1xuICAgIHRoaXMudmF1bHQgPSBDYXBhY2l0b3IuZ2V0UGxhdGZvcm0oKSA9PT0gJ3dlYicgPyBuZXcgQnJvd3NlclZhdWx0KHRoaXMuY29uZmlnKSA6IG5ldyBWYXVsdCh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy52YXVsdC5vbkNvbmZpZ0NoYW5nZWQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1ZhdWx0IGNvbmZpZ3VyYXRpb24gd2FzIGNoYW5nZWQnLCB0aGlzLmNvbmZpZyk7XG4gICAgfSk7XG4gICAgdGhpcy52YXVsdC5vbkxvY2soKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1ZhdWx0IHdhcyBsb2NrZWQnKTtcbiAgICB9KTtcbiAgICB0aGlzLnZhdWx0Lm9uVW5sb2NrKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdWYXVsdCB3YXMgdW5sb2NrZWQnKTtcbiAgICB9KTtcbiAgICB0aGlzLnZhdWx0Lm9uRXJyb3IoKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignVmF1bHQgZXJyb3InLCBlcnIpO1xuICAgICAgdGhpcy5wcmVzZW50QWxlcnQoJ1ZhdWx0IEVycm9yJywgZXJyLmNvZGUgKyAnOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIGF3YWl0IERldmljZS5zZXRIaWRlU2NyZWVuT25CYWNrZ3JvdW5kKHRydWUpO1xuICB9XG5cbiAgYXN5bmMgcHJlc2VudEFsZXJ0KGhlYWRlcjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcixcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBidXR0b25zOiBbJ09LJ11cbiAgICB9KTtcblxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgcm9sZSB9ID0gYXdhaXQgYWxlcnQub25EaWREaXNtaXNzKCk7XG4gICAgcmV0dXJuIHJvbGU7XG4gIH1cblxuICBhc3luYyBzd2l0Y2hCb3RoKCkge1xuICAgIHRoaXMuY29uZmlnLnR5cGUgPSBWYXVsdFR5cGUuRGV2aWNlU2VjdXJpdHk7XG4gICAgdGhpcy5jb25maWcuZGV2aWNlU2VjdXJpdHlUeXBlID0gRGV2aWNlU2VjdXJpdHlUeXBlLkJvdGg7XG4gICAgYXdhaXQgdGhpcy52YXVsdC51cGRhdGVDb25maWcodGhpcy5jb25maWcpO1xuICAgIHRoaXMuc2V0RGF0YSgpO1xuICB9XG5cbiAgYXN5bmMgc3dpdGNoUGFzc2NvZGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMudmF1bHQgPSBuZXcgVmF1bHQoXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdpby5pb25pYy5pdi10ZXN0LXN5c3AnLFxuICAgICAgICAgIHR5cGU6IFZhdWx0VHlwZS5TZWN1cmVTdG9yYWdlLFxuICAgICAgICAgIGRldmljZVNlY3VyaXR5VHlwZTogRGV2aWNlU2VjdXJpdHlUeXBlLk5vbmUsXG4gICAgICAgICAgbG9ja0FmdGVyQmFja2dyb3VuZGVkOiAyMDAwLFxuICAgICAgICAgIHNob3VsZENsZWFyVmF1bHRBZnRlclRvb01hbnlGYWlsZWRBdHRlbXB0czogdHJ1ZSxcbiAgICAgICAgICBjdXN0b21QYXNzY29kZUludmFsaWRVbmxvY2tBdHRlbXB0czogMTAsXG4gICAgICAgICAgdW5sb2NrVmF1bHRPbkxvYWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgYXdhaXQgdGhpcy52YXVsdC5zZXRWYWx1ZSgnYmxhcicsICdzdHVmZicpO1xuXG4gICAgICAvLyBUaGlzIGNvZGUgYmxvd3MgdXAgb24gYW4gaU9TIGRldmljZSB3aXRob3V0IGZpbmdlcnByaW50L2JpbyBhbmQgb25seSBzeXN0ZW0gcGFzc2NvZGVcbiAgICAgIGF3YWl0IHRoaXMudmF1bHQudXBkYXRlQ29uZmlnKFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnaW8uaW9uaWMuaXYtdGVzdC1zeXNwJyxcbiAgICAgICAgICB0eXBlOiBWYXVsdFR5cGUuRGV2aWNlU2VjdXJpdHksXG4gICAgICAgICAgZGV2aWNlU2VjdXJpdHlUeXBlOiBEZXZpY2VTZWN1cml0eVR5cGUuU3lzdGVtUGFzc2NvZGUsXG4gICAgICAgICAgbG9ja0FmdGVyQmFja2dyb3VuZGVkOiAyMDAwLFxuICAgICAgICAgIHNob3VsZENsZWFyVmF1bHRBZnRlclRvb01hbnlGYWlsZWRBdHRlbXB0czogdHJ1ZSxcbiAgICAgICAgICBjdXN0b21QYXNzY29kZUludmFsaWRVbmxvY2tBdHRlbXB0czogMTAsXG4gICAgICAgICAgdW5sb2NrVmF1bHRPbkxvYWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYCR7ZXJyLm1lc3NhZ2V9IChFcnJvciBDb2RlOiAke2Vyci5jb2RlfSlgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2NrKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnZhdWx0LmxvY2soKTtcbiAgICAgIGNvbnNvbGUubG9nKCd2YXVsdCB3YXMgbG9ja2VkJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZhdWx0LnNlcnZpY2UudHMgbG9jaygpJywgZXJyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB1bmxvY2soKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMudmF1bHQudW5sb2NrKCk7XG4gICAgICBjb25zb2xlLmxvZygndmF1bHQgd2FzIHVubG9ja2VkJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBtc2cgPSAodHlwZW9mIGVyciA9PSAnb2JqZWN0JykgPyBKU09OLnN0cmluZ2lmeShlcnIpIDogZXJyO1xuICAgICAgY29uc29sZS5lcnJvcigndmF1bHQuc2VydmljZS50cyB1bmxvY2soKScsIG1zZyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdXNlU2VjdXJlKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZy50eXBlID0gZW5hYmxlZCA/IFZhdWx0VHlwZS5TZWN1cmVTdG9yYWdlIDogVmF1bHRUeXBlLkRldmljZVNlY3VyaXR5O1xuICAgIHRoaXMuY29uZmlnLmRldmljZVNlY3VyaXR5VHlwZSA9IGVuYWJsZWQgPyBEZXZpY2VTZWN1cml0eVR5cGUuTm9uZSA6IERldmljZVNlY3VyaXR5VHlwZS5CaW9tZXRyaWNzO1xuICAgIGF3YWl0IHRoaXMudmF1bHQudXBkYXRlQ29uZmlnKHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLnNldERhdGEoKTtcblxuICB9XG5cbiAgYXN5bmMgZ2V0RGF0YSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnNvbGUubG9nKCdHZXQgRGF0YS4uLi4nKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy52YXVsdC5nZXRWYWx1ZSgnYmxhcicpO1xuICAgIGNvbnNvbGUubG9nKCdHZXQgRGF0YScsIGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgc2V0RGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ1NldHRpbmcgZGF0YS4uLicpO1xuICAgICAgYXdhaXQgdGhpcy52YXVsdC5zZXRWYWx1ZSgnYmxhcicsICd0ZXN0Jyk7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YSBpcyBzZXQnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZhdWx0LnNlcnZpY2UudHMgc2V0RGF0YSgpJywgZXJyKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBpc0VtcHR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnZhdWx0LmlzRW1wdHkoKTtcbiAgfVxuXG4gIGFzeW5jIGlzTG9ja2VkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnZhdWx0LmlzTG9ja2VkKCk7XG4gIH1cblxuICBhc3luYyBjbGVhcigpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy52YXVsdC5jbGVhcigpO1xuICAgICAgY29uc29sZS5sb2coJ1ZhdWx0IHdhcyBjbGVhcmVkJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd2YXVsdC5zZXJ2aWNlLnRzIGNsZWFyKCknLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhc0Jpb21ldHJpY3MoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGF3YWl0IERldmljZS5pc0Jpb21ldHJpY3NFbmFibGVkKCk7XG4gIH1cbn1cbiIsIi8qISBJb25pYyBFbnRlcnByaXNlIEF1dGggQ29ubmVjdDogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vIC0gQ29tbWVyY2lhbGx5IExpY2Vuc2VkICovXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuLyoqXG4gKiBDaGVjayBpZiB3ZSdyZSByZXF1aXJlZCB0byBhZGQgYSBwb3J0IG51bWJlci5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jZGVmYXVsdC1wb3J0XG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHBvcnQgUG9ydCBudW1iZXIgd2UgbmVlZCB0byBjaGVja1xuICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sIFByb3RvY29sIHdlIG5lZWQgdG8gY2hlY2sgYWdhaW5zdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBJcyBpdCBhIGRlZmF1bHQgcG9ydCBmb3IgdGhlIGdpdmVuIHByb3RvY29sXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xudmFyIHJlcXVpcmVzUG9ydCA9IGZ1bmN0aW9uIHJlcXVpcmVkKHBvcnQsIHByb3RvY29sKSB7XG4gIHByb3RvY29sID0gcHJvdG9jb2wuc3BsaXQoJzonKVswXTtcbiAgcG9ydCA9ICtwb3J0O1xuXG4gIGlmICghcG9ydCkgcmV0dXJuIGZhbHNlO1xuXG4gIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICBjYXNlICdodHRwJzpcbiAgICBjYXNlICd3cyc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDgwO1xuXG4gICAgY2FzZSAnaHR0cHMnOlxuICAgIGNhc2UgJ3dzcyc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDQ0MztcblxuICAgIGNhc2UgJ2Z0cCc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDIxO1xuXG4gICAgY2FzZSAnZ29waGVyJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gNzA7XG5cbiAgICBjYXNlICdmaWxlJzpcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcG9ydCAhPT0gMDtcbn07XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgdW5kZWY7XG5cbi8qKlxuICogRGVjb2RlIGEgVVJJIGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgVVJJIGVuY29kZWQgc3RyaW5nLlxuICogQHJldHVybnMge1N0cmluZ3xOdWxsfSBUaGUgZGVjb2RlZCBzdHJpbmcuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dC5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGVuY29kZSBhIGdpdmVuIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZW5jb2RlZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd8TnVsbH0gVGhlIGVuY29kZWQgc3RyaW5nLlxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShpbnB1dCkge1xuICB0cnkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBTaW1wbGUgcXVlcnkgc3RyaW5nIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgVGhlIHF1ZXJ5IHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIHBhcnNlZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBxdWVyeXN0cmluZyhxdWVyeSkge1xuICB2YXIgcGFyc2VyID0gLyhbXj0/IyZdKyk9PyhbXiZdKikvZ1xuICAgICwgcmVzdWx0ID0ge31cbiAgICAsIHBhcnQ7XG5cbiAgd2hpbGUgKHBhcnQgPSBwYXJzZXIuZXhlYyhxdWVyeSkpIHtcbiAgICB2YXIga2V5ID0gZGVjb2RlKHBhcnRbMV0pXG4gICAgICAsIHZhbHVlID0gZGVjb2RlKHBhcnRbMl0pO1xuXG4gICAgLy9cbiAgICAvLyBQcmV2ZW50IG92ZXJyaWRpbmcgb2YgZXhpc3RpbmcgcHJvcGVydGllcy4gVGhpcyBlbnN1cmVzIHRoYXQgYnVpbGQtaW5cbiAgICAvLyBtZXRob2RzIGxpa2UgYHRvU3RyaW5nYCBvciBfX3Byb3RvX18gYXJlIG5vdCBvdmVycmlkZW4gYnkgbWFsaWNpb3VzXG4gICAgLy8gcXVlcnlzdHJpbmdzLlxuICAgIC8vXG4gICAgLy8gSW4gdGhlIGNhc2UgaWYgZmFpbGVkIGRlY29kaW5nLCB3ZSB3YW50IHRvIG9taXQgdGhlIGtleS92YWx1ZSBwYWlyc1xuICAgIC8vIGZyb20gdGhlIHJlc3VsdC5cbiAgICAvL1xuICAgIGlmIChrZXkgPT09IG51bGwgfHwgdmFsdWUgPT09IG51bGwgfHwga2V5IGluIHJlc3VsdCkgY29udGludWU7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgcXVlcnkgc3RyaW5nIHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB0aGF0IHNob3VsZCBiZSB0cmFuc2Zvcm1lZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcmVmaXggT3B0aW9uYWwgcHJlZml4LlxuICogQHJldHVybnMge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5naWZ5KG9iaiwgcHJlZml4KSB7XG4gIHByZWZpeCA9IHByZWZpeCB8fCAnJztcblxuICB2YXIgcGFpcnMgPSBbXVxuICAgICwgdmFsdWVcbiAgICAsIGtleTtcblxuICAvL1xuICAvLyBPcHRpb25hbGx5IHByZWZpeCB3aXRoIGEgJz8nIGlmIG5lZWRlZFxuICAvL1xuICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBwcmVmaXgpIHByZWZpeCA9ICc/JztcblxuICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICAvL1xuICAgICAgLy8gRWRnZSBjYXNlcyB3aGVyZSB3ZSBhY3R1YWxseSB3YW50IHRvIGVuY29kZSB0aGUgdmFsdWUgdG8gYW4gZW1wdHlcbiAgICAgIC8vIHN0cmluZyBpbnN0ZWFkIG9mIHRoZSBzdHJpbmdpZmllZCB2YWx1ZS5cbiAgICAgIC8vXG4gICAgICBpZiAoIXZhbHVlICYmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWYgfHwgaXNOYU4odmFsdWUpKSkge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSBlbmNvZGUoa2V5KTtcbiAgICAgIHZhbHVlID0gZW5jb2RlKHZhbHVlKTtcblxuICAgICAgLy9cbiAgICAgIC8vIElmIHdlIGZhaWxlZCB0byBlbmNvZGUgdGhlIHN0cmluZ3MsIHdlIHNob3VsZCBiYWlsIG91dCBhcyB3ZSBkb24ndFxuICAgICAgLy8gd2FudCB0byBhZGQgaW52YWxpZCBzdHJpbmdzIHRvIHRoZSBxdWVyeS5cbiAgICAgIC8vXG4gICAgICBpZiAoa2V5ID09PSBudWxsIHx8IHZhbHVlID09PSBudWxsKSBjb250aW51ZTtcbiAgICAgIHBhaXJzLnB1c2goa2V5ICsnPScrIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFpcnMubGVuZ3RoID8gcHJlZml4ICsgcGFpcnMuam9pbignJicpIDogJyc7XG59XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG52YXIgc3RyaW5naWZ5ID0gcXVlcnlzdHJpbmdpZnk7XG52YXIgcGFyc2UgPSBxdWVyeXN0cmluZztcblxudmFyIHF1ZXJ5c3RyaW5naWZ5XzEgPSB7XG5cdHN0cmluZ2lmeTogc3RyaW5naWZ5LFxuXHRwYXJzZTogcGFyc2Vcbn07XG5cbnZhciBjb250cm9sT3JXaGl0ZXNwYWNlID0gL15bXFx4MDAtXFx4MjBcXHUwMGEwXFx1MTY4MFxcdTIwMDAtXFx1MjAwYVxcdTIwMjhcXHUyMDI5XFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1ZmVmZl0rL1xuICAsIENSSFRMRiA9IC9bXFxuXFxyXFx0XS9nXG4gICwgc2xhc2hlcyA9IC9eW0EtWmEtel1bQS1aYS16MC05Ky0uXSo6XFwvXFwvL1xuICAsIHBvcnQgPSAvOlxcZCskL1xuICAsIHByb3RvY29scmUgPSAvXihbYS16XVthLXowLTkuKy1dKjopPyhcXC9cXC8pPyhbXFxcXC9dKyk/KFtcXFNcXHNdKikvaVxuICAsIHdpbmRvd3NEcml2ZUxldHRlciA9IC9eW2EtekEtWl06LztcblxuLyoqXG4gKiBSZW1vdmUgY29udHJvbCBjaGFyYWN0ZXJzIGFuZCB3aGl0ZXNwYWNlIGZyb20gdGhlIGJlZ2lubmluZyBvZiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHN0ciBTdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IEEgbmV3IHN0cmluZyByZXByZXNlbnRpbmcgYHN0cmAgc3RyaXBwZWQgb2YgY29udHJvbFxuICogICAgIGNoYXJhY3RlcnMgYW5kIHdoaXRlc3BhY2UgZnJvbSBpdHMgYmVnaW5uaW5nLlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB0cmltTGVmdChzdHIpIHtcbiAgcmV0dXJuIChzdHIgPyBzdHIgOiAnJykudG9TdHJpbmcoKS5yZXBsYWNlKGNvbnRyb2xPcldoaXRlc3BhY2UsICcnKTtcbn1cblxuLyoqXG4gKiBUaGVzZSBhcmUgdGhlIHBhcnNlIHJ1bGVzIGZvciB0aGUgVVJMIHBhcnNlciwgaXQgaW5mb3JtcyB0aGUgcGFyc2VyXG4gKiBhYm91dDpcbiAqXG4gKiAwLiBUaGUgY2hhciBpdCBOZWVkcyB0byBwYXJzZSwgaWYgaXQncyBhIHN0cmluZyBpdCBzaG91bGQgYmUgZG9uZSB1c2luZ1xuICogICAgaW5kZXhPZiwgUmVnRXhwIHVzaW5nIGV4ZWMgYW5kIE5hTiBtZWFucyBzZXQgYXMgY3VycmVudCB2YWx1ZS5cbiAqIDEuIFRoZSBwcm9wZXJ0eSB3ZSBzaG91bGQgc2V0IHdoZW4gcGFyc2luZyB0aGlzIHZhbHVlLlxuICogMi4gSW5kaWNhdGlvbiBpZiBpdCdzIGJhY2t3YXJkcyBvciBmb3J3YXJkIHBhcnNpbmcsIHdoZW4gc2V0IGFzIG51bWJlciBpdCdzXG4gKiAgICB0aGUgdmFsdWUgb2YgZXh0cmEgY2hhcnMgdGhhdCBzaG91bGQgYmUgc3BsaXQgb2ZmLlxuICogMy4gSW5oZXJpdCBmcm9tIGxvY2F0aW9uIGlmIG5vbiBleGlzdGluZyBpbiB0aGUgcGFyc2VyLlxuICogNC4gYHRvTG93ZXJDYXNlYCB0aGUgcmVzdWx0aW5nIHZhbHVlLlxuICovXG52YXIgcnVsZXMgPSBbXG4gIFsnIycsICdoYXNoJ10sICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBiYWNrLlxuICBbJz8nLCAncXVlcnknXSwgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgYmFjay5cbiAgZnVuY3Rpb24gc2FuaXRpemUoYWRkcmVzcywgdXJsKSB7ICAgICAvLyBTYW5pdGl6ZSB3aGF0IGlzIGxlZnQgb2YgdGhlIGFkZHJlc3NcbiAgICByZXR1cm4gaXNTcGVjaWFsKHVybC5wcm90b2NvbCkgPyBhZGRyZXNzLnJlcGxhY2UoL1xcXFwvZywgJy8nKSA6IGFkZHJlc3M7XG4gIH0sXG4gIFsnLycsICdwYXRobmFtZSddLCAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBiYWNrLlxuICBbJ0AnLCAnYXV0aCcsIDFdLCAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgZnJvbnQuXG4gIFtOYU4sICdob3N0JywgdW5kZWZpbmVkLCAxLCAxXSwgICAgICAgLy8gU2V0IGxlZnQgb3ZlciB2YWx1ZS5cbiAgWy86KFxcZCopJC8sICdwb3J0JywgdW5kZWZpbmVkLCAxXSwgICAgLy8gUmVnRXhwIHRoZSBiYWNrLlxuICBbTmFOLCAnaG9zdG5hbWUnLCB1bmRlZmluZWQsIDEsIDFdICAgIC8vIFNldCBsZWZ0IG92ZXIuXG5dO1xuXG4vKipcbiAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIG5vdCBiZSBjb3BpZWQgb3IgaW5oZXJpdGVkIGZyb20uIFRoaXMgaXMgb25seSBuZWVkZWRcbiAqIGZvciBhbGwgbm9uIGJsb2IgVVJMJ3MgYXMgYSBibG9iIFVSTCBkb2VzIG5vdCBpbmNsdWRlIGEgaGFzaCwgb25seSB0aGVcbiAqIG9yaWdpbi5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIGlnbm9yZSA9IHsgaGFzaDogMSwgcXVlcnk6IDEgfTtcblxuLyoqXG4gKiBUaGUgbG9jYXRpb24gb2JqZWN0IGRpZmZlcnMgd2hlbiB5b3VyIGNvZGUgaXMgbG9hZGVkIHRocm91Z2ggYSBub3JtYWwgcGFnZSxcbiAqIFdvcmtlciBvciB0aHJvdWdoIGEgd29ya2VyIHVzaW5nIGEgYmxvYi4gQW5kIHdpdGggdGhlIGJsb2JibGUgYmVnaW5zIHRoZVxuICogdHJvdWJsZSBhcyB0aGUgbG9jYXRpb24gb2JqZWN0IHdpbGwgY29udGFpbiB0aGUgVVJMIG9mIHRoZSBibG9iLCBub3QgdGhlXG4gKiBsb2NhdGlvbiBvZiB0aGUgcGFnZSB3aGVyZSBvdXIgY29kZSBpcyBsb2FkZWQgaW4uIFRoZSBhY3R1YWwgb3JpZ2luIGlzXG4gKiBlbmNvZGVkIGluIHRoZSBgcGF0aG5hbWVgIHNvIHdlIGNhbiB0aGFua2Z1bGx5IGdlbmVyYXRlIGEgZ29vZCBcImRlZmF1bHRcIlxuICogbG9jYXRpb24gZnJvbSBpdCBzbyB3ZSBjYW4gZ2VuZXJhdGUgcHJvcGVyIHJlbGF0aXZlIFVSTCdzIGFnYWluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbG9jIE9wdGlvbmFsIGRlZmF1bHQgbG9jYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gbG9sY2F0aW9uIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9sY2F0aW9uKGxvYykge1xuICB2YXIgZ2xvYmFsVmFyO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gd2luZG93O1xuICBlbHNlIGlmICh0eXBlb2YgY29tbW9uanNHbG9iYWwgIT09ICd1bmRlZmluZWQnKSBnbG9iYWxWYXIgPSBjb21tb25qc0dsb2JhbDtcbiAgZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSBnbG9iYWxWYXIgPSBzZWxmO1xuICBlbHNlIGdsb2JhbFZhciA9IHt9O1xuXG4gIHZhciBsb2NhdGlvbiA9IGdsb2JhbFZhci5sb2NhdGlvbiB8fCB7fTtcbiAgbG9jID0gbG9jIHx8IGxvY2F0aW9uO1xuXG4gIHZhciBmaW5hbGRlc3RpbmF0aW9uID0ge31cbiAgICAsIHR5cGUgPSB0eXBlb2YgbG9jXG4gICAgLCBrZXk7XG5cbiAgaWYgKCdibG9iOicgPT09IGxvYy5wcm90b2NvbCkge1xuICAgIGZpbmFsZGVzdGluYXRpb24gPSBuZXcgVXJsKHVuZXNjYXBlKGxvYy5wYXRobmFtZSksIHt9KTtcbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PT0gdHlwZSkge1xuICAgIGZpbmFsZGVzdGluYXRpb24gPSBuZXcgVXJsKGxvYywge30pO1xuICAgIGZvciAoa2V5IGluIGlnbm9yZSkgZGVsZXRlIGZpbmFsZGVzdGluYXRpb25ba2V5XTtcbiAgfSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZSkge1xuICAgIGZvciAoa2V5IGluIGxvYykge1xuICAgICAgaWYgKGtleSBpbiBpZ25vcmUpIGNvbnRpbnVlO1xuICAgICAgZmluYWxkZXN0aW5hdGlvbltrZXldID0gbG9jW2tleV07XG4gICAgfVxuXG4gICAgaWYgKGZpbmFsZGVzdGluYXRpb24uc2xhc2hlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmaW5hbGRlc3RpbmF0aW9uLnNsYXNoZXMgPSBzbGFzaGVzLnRlc3QobG9jLmhyZWYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaW5hbGRlc3RpbmF0aW9uO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBwcm90b2NvbCBzY2hlbWUgaXMgc3BlY2lhbC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gVGhlIHByb3RvY29sIHNjaGVtZSBvZiB0aGUgVVJMXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIHByb3RvY29sIHNjaGVtZSBpcyBzcGVjaWFsLCBlbHNlIGBmYWxzZWBcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzU3BlY2lhbChzY2hlbWUpIHtcbiAgcmV0dXJuIChcbiAgICBzY2hlbWUgPT09ICdmaWxlOicgfHxcbiAgICBzY2hlbWUgPT09ICdmdHA6JyB8fFxuICAgIHNjaGVtZSA9PT0gJ2h0dHA6JyB8fFxuICAgIHNjaGVtZSA9PT0gJ2h0dHBzOicgfHxcbiAgICBzY2hlbWUgPT09ICd3czonIHx8XG4gICAgc2NoZW1lID09PSAnd3NzOidcbiAgKTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiBQcm90b2NvbEV4dHJhY3RcbiAqIEB0eXBlIE9iamVjdFxuICogQHByb3BlcnR5IHtTdHJpbmd9IHByb3RvY29sIFByb3RvY29sIG1hdGNoZWQgaW4gdGhlIFVSTCwgaW4gbG93ZXJjYXNlLlxuICogQHByb3BlcnR5IHtCb29sZWFufSBzbGFzaGVzIGB0cnVlYCBpZiBwcm90b2NvbCBpcyBmb2xsb3dlZCBieSBcIi8vXCIsIGVsc2UgYGZhbHNlYC5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSByZXN0IFJlc3Qgb2YgdGhlIFVSTCB0aGF0IGlzIG5vdCBwYXJ0IG9mIHRoZSBwcm90b2NvbC5cbiAqL1xuXG4vKipcbiAqIEV4dHJhY3QgcHJvdG9jb2wgaW5mb3JtYXRpb24gZnJvbSBhIFVSTCB3aXRoL3dpdGhvdXQgZG91YmxlIHNsYXNoIChcIi8vXCIpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFVSTCB3ZSB3YW50IHRvIGV4dHJhY3QgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBsb2NhdGlvblxuICogQHJldHVybiB7UHJvdG9jb2xFeHRyYWN0fSBFeHRyYWN0ZWQgaW5mb3JtYXRpb24uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHRyYWN0UHJvdG9jb2woYWRkcmVzcywgbG9jYXRpb24pIHtcbiAgYWRkcmVzcyA9IHRyaW1MZWZ0KGFkZHJlc3MpO1xuICBhZGRyZXNzID0gYWRkcmVzcy5yZXBsYWNlKENSSFRMRiwgJycpO1xuICBsb2NhdGlvbiA9IGxvY2F0aW9uIHx8IHt9O1xuXG4gIHZhciBtYXRjaCA9IHByb3RvY29scmUuZXhlYyhhZGRyZXNzKTtcbiAgdmFyIHByb3RvY29sID0gbWF0Y2hbMV0gPyBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpIDogJyc7XG4gIHZhciBmb3J3YXJkU2xhc2hlcyA9ICEhbWF0Y2hbMl07XG4gIHZhciBvdGhlclNsYXNoZXMgPSAhIW1hdGNoWzNdO1xuICB2YXIgc2xhc2hlc0NvdW50ID0gMDtcbiAgdmFyIHJlc3Q7XG5cbiAgaWYgKGZvcndhcmRTbGFzaGVzKSB7XG4gICAgaWYgKG90aGVyU2xhc2hlcykge1xuICAgICAgcmVzdCA9IG1hdGNoWzJdICsgbWF0Y2hbM10gKyBtYXRjaFs0XTtcbiAgICAgIHNsYXNoZXNDb3VudCA9IG1hdGNoWzJdLmxlbmd0aCArIG1hdGNoWzNdLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdCA9IG1hdGNoWzJdICsgbWF0Y2hbNF07XG4gICAgICBzbGFzaGVzQ291bnQgPSBtYXRjaFsyXS5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChvdGhlclNsYXNoZXMpIHtcbiAgICAgIHJlc3QgPSBtYXRjaFszXSArIG1hdGNoWzRdO1xuICAgICAgc2xhc2hlc0NvdW50ID0gbWF0Y2hbM10ubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN0ID0gbWF0Y2hbNF07XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb3RvY29sID09PSAnZmlsZTonKSB7XG4gICAgaWYgKHNsYXNoZXNDb3VudCA+PSAyKSB7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZSgyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNTcGVjaWFsKHByb3RvY29sKSkge1xuICAgIHJlc3QgPSBtYXRjaFs0XTtcbiAgfSBlbHNlIGlmIChwcm90b2NvbCkge1xuICAgIGlmIChmb3J3YXJkU2xhc2hlcykge1xuICAgICAgcmVzdCA9IHJlc3Quc2xpY2UoMik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHNsYXNoZXNDb3VudCA+PSAyICYmIGlzU3BlY2lhbChsb2NhdGlvbi5wcm90b2NvbCkpIHtcbiAgICByZXN0ID0gbWF0Y2hbNF07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3RvY29sOiBwcm90b2NvbCxcbiAgICBzbGFzaGVzOiBmb3J3YXJkU2xhc2hlcyB8fCBpc1NwZWNpYWwocHJvdG9jb2wpLFxuICAgIHNsYXNoZXNDb3VudDogc2xhc2hlc0NvdW50LFxuICAgIHJlc3Q6IHJlc3RcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVsYXRpdmUgVVJMIHBhdGhuYW1lIGFnYWluc3QgYSBiYXNlIFVSTCBwYXRobmFtZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVsYXRpdmUgUGF0aG5hbWUgb2YgdGhlIHJlbGF0aXZlIFVSTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlIFBhdGhuYW1lIG9mIHRoZSBiYXNlIFVSTC5cbiAqIEByZXR1cm4ge1N0cmluZ30gUmVzb2x2ZWQgcGF0aG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXNvbHZlKHJlbGF0aXZlLCBiYXNlKSB7XG4gIGlmIChyZWxhdGl2ZSA9PT0gJycpIHJldHVybiBiYXNlO1xuXG4gIHZhciBwYXRoID0gKGJhc2UgfHwgJy8nKS5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5jb25jYXQocmVsYXRpdmUuc3BsaXQoJy8nKSlcbiAgICAsIGkgPSBwYXRoLmxlbmd0aFxuICAgICwgbGFzdCA9IHBhdGhbaSAtIDFdXG4gICAgLCB1bnNoaWZ0ID0gZmFsc2VcbiAgICAsIHVwID0gMDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKHBhdGhbaV0gPT09ICcuJykge1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChwYXRoW2ldID09PSAnLi4nKSB7XG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgaWYgKGkgPT09IDApIHVuc2hpZnQgPSB0cnVlO1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICh1bnNoaWZ0KSBwYXRoLnVuc2hpZnQoJycpO1xuICBpZiAobGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicpIHBhdGgucHVzaCgnJyk7XG5cbiAgcmV0dXJuIHBhdGguam9pbignLycpO1xufVxuXG4vKipcbiAqIFRoZSBhY3R1YWwgVVJMIGluc3RhbmNlLiBJbnN0ZWFkIG9mIHJldHVybmluZyBhbiBvYmplY3Qgd2UndmUgb3B0ZWQtaW4gdG9cbiAqIGNyZWF0ZSBhbiBhY3R1YWwgY29uc3RydWN0b3IgYXMgaXQncyBtdWNoIG1vcmUgbWVtb3J5IGVmZmljaWVudCBhbmRcbiAqIGZhc3RlciBhbmQgaXQgcGxlYXNlcyBteSBPQ0QuXG4gKlxuICogSXQgaXMgd29ydGggbm90aW5nIHRoYXQgd2Ugc2hvdWxkIG5vdCB1c2UgYFVSTGAgYXMgY2xhc3MgbmFtZSB0byBwcmV2ZW50XG4gKiBjbGFzaGVzIHdpdGggdGhlIGdsb2JhbCBVUkwgaW5zdGFuY2UgdGhhdCBnb3QgaW50cm9kdWNlZCBpbiBicm93c2Vycy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFVSTCB3ZSB3YW50IHRvIHBhcnNlLlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbbG9jYXRpb25dIExvY2F0aW9uIGRlZmF1bHRzIGZvciByZWxhdGl2ZSBwYXRocy5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gW3BhcnNlcl0gUGFyc2VyIGZvciB0aGUgcXVlcnkgc3RyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gVXJsKGFkZHJlc3MsIGxvY2F0aW9uLCBwYXJzZXIpIHtcbiAgYWRkcmVzcyA9IHRyaW1MZWZ0KGFkZHJlc3MpO1xuICBhZGRyZXNzID0gYWRkcmVzcy5yZXBsYWNlKENSSFRMRiwgJycpO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBVcmwpKSB7XG4gICAgcmV0dXJuIG5ldyBVcmwoYWRkcmVzcywgbG9jYXRpb24sIHBhcnNlcik7XG4gIH1cblxuICB2YXIgcmVsYXRpdmUsIGV4dHJhY3RlZCwgcGFyc2UsIGluc3RydWN0aW9uLCBpbmRleCwga2V5XG4gICAgLCBpbnN0cnVjdGlvbnMgPSBydWxlcy5zbGljZSgpXG4gICAgLCB0eXBlID0gdHlwZW9mIGxvY2F0aW9uXG4gICAgLCB1cmwgPSB0aGlzXG4gICAgLCBpID0gMDtcblxuICAvL1xuICAvLyBUaGUgZm9sbG93aW5nIGlmIHN0YXRlbWVudHMgYWxsb3dzIHRoaXMgbW9kdWxlIHR3byBoYXZlIGNvbXBhdGliaWxpdHkgd2l0aFxuICAvLyAyIGRpZmZlcmVudCBBUEk6XG4gIC8vXG4gIC8vIDEuIE5vZGUuanMncyBgdXJsLnBhcnNlYCBhcGkgd2hpY2ggYWNjZXB0cyBhIFVSTCwgYm9vbGVhbiBhcyBhcmd1bWVudHNcbiAgLy8gICAgd2hlcmUgdGhlIGJvb2xlYW4gaW5kaWNhdGVzIHRoYXQgdGhlIHF1ZXJ5IHN0cmluZyBzaG91bGQgYWxzbyBiZSBwYXJzZWQuXG4gIC8vXG4gIC8vIDIuIFRoZSBgVVJMYCBpbnRlcmZhY2Ugb2YgdGhlIGJyb3dzZXIgd2hpY2ggYWNjZXB0cyBhIFVSTCwgb2JqZWN0IGFzXG4gIC8vICAgIGFyZ3VtZW50cy4gVGhlIHN1cHBsaWVkIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdCB2YWx1ZXMgLyBmYWxsLWJhY2tcbiAgLy8gICAgZm9yIHJlbGF0aXZlIHBhdGhzLlxuICAvL1xuICBpZiAoJ29iamVjdCcgIT09IHR5cGUgJiYgJ3N0cmluZycgIT09IHR5cGUpIHtcbiAgICBwYXJzZXIgPSBsb2NhdGlvbjtcbiAgICBsb2NhdGlvbiA9IG51bGw7XG4gIH1cblxuICBpZiAocGFyc2VyICYmICdmdW5jdGlvbicgIT09IHR5cGVvZiBwYXJzZXIpIHBhcnNlciA9IHF1ZXJ5c3RyaW5naWZ5XzEucGFyc2U7XG5cbiAgbG9jYXRpb24gPSBsb2xjYXRpb24obG9jYXRpb24pO1xuXG4gIC8vXG4gIC8vIEV4dHJhY3QgcHJvdG9jb2wgaW5mb3JtYXRpb24gYmVmb3JlIHJ1bm5pbmcgdGhlIGluc3RydWN0aW9ucy5cbiAgLy9cbiAgZXh0cmFjdGVkID0gZXh0cmFjdFByb3RvY29sKGFkZHJlc3MgfHwgJycsIGxvY2F0aW9uKTtcbiAgcmVsYXRpdmUgPSAhZXh0cmFjdGVkLnByb3RvY29sICYmICFleHRyYWN0ZWQuc2xhc2hlcztcbiAgdXJsLnNsYXNoZXMgPSBleHRyYWN0ZWQuc2xhc2hlcyB8fCByZWxhdGl2ZSAmJiBsb2NhdGlvbi5zbGFzaGVzO1xuICB1cmwucHJvdG9jb2wgPSBleHRyYWN0ZWQucHJvdG9jb2wgfHwgbG9jYXRpb24ucHJvdG9jb2wgfHwgJyc7XG4gIGFkZHJlc3MgPSBleHRyYWN0ZWQucmVzdDtcblxuICAvL1xuICAvLyBXaGVuIHRoZSBhdXRob3JpdHkgY29tcG9uZW50IGlzIGFic2VudCB0aGUgVVJMIHN0YXJ0cyB3aXRoIGEgcGF0aFxuICAvLyBjb21wb25lbnQuXG4gIC8vXG4gIGlmIChcbiAgICBleHRyYWN0ZWQucHJvdG9jb2wgPT09ICdmaWxlOicgJiYgKFxuICAgICAgZXh0cmFjdGVkLnNsYXNoZXNDb3VudCAhPT0gMiB8fCB3aW5kb3dzRHJpdmVMZXR0ZXIudGVzdChhZGRyZXNzKSkgfHxcbiAgICAoIWV4dHJhY3RlZC5zbGFzaGVzICYmXG4gICAgICAoZXh0cmFjdGVkLnByb3RvY29sIHx8XG4gICAgICAgIGV4dHJhY3RlZC5zbGFzaGVzQ291bnQgPCAyIHx8XG4gICAgICAgICFpc1NwZWNpYWwodXJsLnByb3RvY29sKSkpXG4gICkge1xuICAgIGluc3RydWN0aW9uc1szXSA9IFsvKC4qKS8sICdwYXRobmFtZSddO1xuICB9XG5cbiAgZm9yICg7IGkgPCBpbnN0cnVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpbnN0cnVjdGlvbiA9IGluc3RydWN0aW9uc1tpXTtcblxuICAgIGlmICh0eXBlb2YgaW5zdHJ1Y3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFkZHJlc3MgPSBpbnN0cnVjdGlvbihhZGRyZXNzLCB1cmwpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcGFyc2UgPSBpbnN0cnVjdGlvblswXTtcbiAgICBrZXkgPSBpbnN0cnVjdGlvblsxXTtcblxuICAgIGlmIChwYXJzZSAhPT0gcGFyc2UpIHtcbiAgICAgIHVybFtrZXldID0gYWRkcmVzcztcbiAgICB9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgcGFyc2UpIHtcbiAgICAgIGluZGV4ID0gcGFyc2UgPT09ICdAJ1xuICAgICAgICA/IGFkZHJlc3MubGFzdEluZGV4T2YocGFyc2UpXG4gICAgICAgIDogYWRkcmVzcy5pbmRleE9mKHBhcnNlKTtcblxuICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbnN0cnVjdGlvblsyXSkge1xuICAgICAgICAgIHVybFtrZXldID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoaW5kZXggKyBpbnN0cnVjdGlvblsyXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXJsW2tleV0gPSBhZGRyZXNzLnNsaWNlKGluZGV4KTtcbiAgICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChpbmRleCA9IHBhcnNlLmV4ZWMoYWRkcmVzcykpKSB7XG4gICAgICB1cmxba2V5XSA9IGluZGV4WzFdO1xuICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXguaW5kZXgpO1xuICAgIH1cblxuICAgIHVybFtrZXldID0gdXJsW2tleV0gfHwgKFxuICAgICAgcmVsYXRpdmUgJiYgaW5zdHJ1Y3Rpb25bM10gPyBsb2NhdGlvbltrZXldIHx8ICcnIDogJydcbiAgICApO1xuXG4gICAgLy9cbiAgICAvLyBIb3N0bmFtZSwgaG9zdCBhbmQgcHJvdG9jb2wgc2hvdWxkIGJlIGxvd2VyY2FzZWQgc28gdGhleSBjYW4gYmUgdXNlZCB0b1xuICAgIC8vIGNyZWF0ZSBhIHByb3BlciBgb3JpZ2luYC5cbiAgICAvL1xuICAgIGlmIChpbnN0cnVjdGlvbls0XSkgdXJsW2tleV0gPSB1cmxba2V5XS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgLy9cbiAgLy8gQWxzbyBwYXJzZSB0aGUgc3VwcGxpZWQgcXVlcnkgc3RyaW5nIGluIHRvIGFuIG9iamVjdC4gSWYgd2UncmUgc3VwcGxpZWRcbiAgLy8gd2l0aCBhIGN1c3RvbSBwYXJzZXIgYXMgZnVuY3Rpb24gdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBidWlsZC1pblxuICAvLyBwYXJzZXIuXG4gIC8vXG4gIGlmIChwYXJzZXIpIHVybC5xdWVyeSA9IHBhcnNlcih1cmwucXVlcnkpO1xuXG4gIC8vXG4gIC8vIElmIHRoZSBVUkwgaXMgcmVsYXRpdmUsIHJlc29sdmUgdGhlIHBhdGhuYW1lIGFnYWluc3QgdGhlIGJhc2UgVVJMLlxuICAvL1xuICBpZiAoXG4gICAgICByZWxhdGl2ZVxuICAgICYmIGxvY2F0aW9uLnNsYXNoZXNcbiAgICAmJiB1cmwucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLydcbiAgICAmJiAodXJsLnBhdGhuYW1lICE9PSAnJyB8fCBsb2NhdGlvbi5wYXRobmFtZSAhPT0gJycpXG4gICkge1xuICAgIHVybC5wYXRobmFtZSA9IHJlc29sdmUodXJsLnBhdGhuYW1lLCBsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxuICAvL1xuICAvLyBEZWZhdWx0IHRvIGEgLyBmb3IgcGF0aG5hbWUgaWYgbm9uZSBleGlzdHMuIFRoaXMgbm9ybWFsaXplcyB0aGUgVVJMXG4gIC8vIHRvIGFsd2F5cyBoYXZlIGEgL1xuICAvL1xuICBpZiAodXJsLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nICYmIGlzU3BlY2lhbCh1cmwucHJvdG9jb2wpKSB7XG4gICAgdXJsLnBhdGhuYW1lID0gJy8nICsgdXJsLnBhdGhuYW1lO1xuICB9XG5cbiAgLy9cbiAgLy8gV2Ugc2hvdWxkIG5vdCBhZGQgcG9ydCBudW1iZXJzIGlmIHRoZXkgYXJlIGFscmVhZHkgdGhlIGRlZmF1bHQgcG9ydCBudW1iZXJcbiAgLy8gZm9yIGEgZ2l2ZW4gcHJvdG9jb2wuIEFzIHRoZSBob3N0IGFsc28gY29udGFpbnMgdGhlIHBvcnQgbnVtYmVyIHdlJ3JlIGdvaW5nXG4gIC8vIG92ZXJyaWRlIGl0IHdpdGggdGhlIGhvc3RuYW1lIHdoaWNoIGNvbnRhaW5zIG5vIHBvcnQgbnVtYmVyLlxuICAvL1xuICBpZiAoIXJlcXVpcmVzUG9ydCh1cmwucG9ydCwgdXJsLnByb3RvY29sKSkge1xuICAgIHVybC5ob3N0ID0gdXJsLmhvc3RuYW1lO1xuICAgIHVybC5wb3J0ID0gJyc7XG4gIH1cblxuICAvL1xuICAvLyBQYXJzZSBkb3duIHRoZSBgYXV0aGAgZm9yIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQuXG4gIC8vXG4gIHVybC51c2VybmFtZSA9IHVybC5wYXNzd29yZCA9ICcnO1xuXG4gIGlmICh1cmwuYXV0aCkge1xuICAgIGluZGV4ID0gdXJsLmF1dGguaW5kZXhPZignOicpO1xuXG4gICAgaWYgKH5pbmRleCkge1xuICAgICAgdXJsLnVzZXJuYW1lID0gdXJsLmF1dGguc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgdXJsLnVzZXJuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KGRlY29kZVVSSUNvbXBvbmVudCh1cmwudXNlcm5hbWUpKTtcblxuICAgICAgdXJsLnBhc3N3b3JkID0gdXJsLmF1dGguc2xpY2UoaW5kZXggKyAxKTtcbiAgICAgIHVybC5wYXNzd29yZCA9IGVuY29kZVVSSUNvbXBvbmVudChkZWNvZGVVUklDb21wb25lbnQodXJsLnBhc3N3b3JkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybC51c2VybmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChkZWNvZGVVUklDb21wb25lbnQodXJsLmF1dGgpKTtcbiAgICB9XG5cbiAgICB1cmwuYXV0aCA9IHVybC5wYXNzd29yZCA/IHVybC51c2VybmFtZSArJzonKyB1cmwucGFzc3dvcmQgOiB1cmwudXNlcm5hbWU7XG4gIH1cblxuICB1cmwub3JpZ2luID0gdXJsLnByb3RvY29sICE9PSAnZmlsZTonICYmIGlzU3BlY2lhbCh1cmwucHJvdG9jb2wpICYmIHVybC5ob3N0XG4gICAgPyB1cmwucHJvdG9jb2wgKycvLycrIHVybC5ob3N0XG4gICAgOiAnbnVsbCc7XG5cbiAgLy9cbiAgLy8gVGhlIGhyZWYgaXMganVzdCB0aGUgY29tcGlsZWQgcmVzdWx0LlxuICAvL1xuICB1cmwuaHJlZiA9IHVybC50b1N0cmluZygpO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgY29udmVuaWVuY2UgbWV0aG9kIGZvciBjaGFuZ2luZyBwcm9wZXJ0aWVzIGluIHRoZSBVUkwgaW5zdGFuY2UgdG9cbiAqIGluc3VyZSB0aGF0IHRoZXkgYWxsIHByb3BhZ2F0ZSBjb3JyZWN0bHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhcnQgICAgICAgICAgUHJvcGVydHkgd2UgbmVlZCB0byBhZGp1c3QuXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSAgICAgICAgICBUaGUgbmV3bHkgYXNzaWduZWQgdmFsdWUuXG4gKiBAcGFyYW0ge0Jvb2xlYW58RnVuY3Rpb259IGZuICBXaGVuIHNldHRpbmcgdGhlIHF1ZXJ5LCBpdCB3aWxsIGJlIHRoZSBmdW5jdGlvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCB0byBwYXJzZSB0aGUgcXVlcnkuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHNldHRpbmcgdGhlIHByb3RvY29sLCBkb3VibGUgc2xhc2ggd2lsbCBiZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZCBmcm9tIHRoZSBmaW5hbCB1cmwgaWYgaXQgaXMgdHJ1ZS5cbiAqIEByZXR1cm5zIHtVUkx9IFVSTCBpbnN0YW5jZSBmb3IgY2hhaW5pbmcuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHNldChwYXJ0LCB2YWx1ZSwgZm4pIHtcbiAgdmFyIHVybCA9IHRoaXM7XG5cbiAgc3dpdGNoIChwYXJ0KSB7XG4gICAgY2FzZSAncXVlcnknOlxuICAgICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgdmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gKGZuIHx8IHF1ZXJ5c3RyaW5naWZ5XzEucGFyc2UpKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvcnQnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICghcmVxdWlyZXNQb3J0KHZhbHVlLCB1cmwucHJvdG9jb2wpKSB7XG4gICAgICAgIHVybC5ob3N0ID0gdXJsLmhvc3RuYW1lO1xuICAgICAgICB1cmxbcGFydF0gPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWUgKyc6JysgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaG9zdG5hbWUnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICh1cmwucG9ydCkgdmFsdWUgKz0gJzonKyB1cmwucG9ydDtcbiAgICAgIHVybC5ob3N0ID0gdmFsdWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2hvc3QnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmIChwb3J0LnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgdXJsLnBvcnQgPSB2YWx1ZS5wb3AoKTtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWUuam9pbignOicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWU7XG4gICAgICAgIHVybC5wb3J0ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncHJvdG9jb2wnOlxuICAgICAgdXJsLnByb3RvY29sID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHVybC5zbGFzaGVzID0gIWZuO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXRobmFtZSc6XG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBwYXJ0ID09PSAncGF0aG5hbWUnID8gJy8nIDogJyMnO1xuICAgICAgICB1cmxbcGFydF0gPSB2YWx1ZS5jaGFyQXQoMCkgIT09IGNoYXIgPyBjaGFyICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd1c2VybmFtZSc6XG4gICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgdXJsW3BhcnRdID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYXV0aCc6XG4gICAgICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCc6Jyk7XG5cbiAgICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgdXJsLnVzZXJuYW1lID0gdmFsdWUuc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICB1cmwudXNlcm5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoZGVjb2RlVVJJQ29tcG9uZW50KHVybC51c2VybmFtZSkpO1xuXG4gICAgICAgIHVybC5wYXNzd29yZCA9IHZhbHVlLnNsaWNlKGluZGV4ICsgMSk7XG4gICAgICAgIHVybC5wYXNzd29yZCA9IGVuY29kZVVSSUNvbXBvbmVudChkZWNvZGVVUklDb21wb25lbnQodXJsLnBhc3N3b3JkKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmwudXNlcm5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGlucyA9IHJ1bGVzW2ldO1xuXG4gICAgaWYgKGluc1s0XSkgdXJsW2luc1sxXV0gPSB1cmxbaW5zWzFdXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdXJsLmF1dGggPSB1cmwucGFzc3dvcmQgPyB1cmwudXNlcm5hbWUgKyc6JysgdXJsLnBhc3N3b3JkIDogdXJsLnVzZXJuYW1lO1xuXG4gIHVybC5vcmlnaW4gPSB1cmwucHJvdG9jb2wgIT09ICdmaWxlOicgJiYgaXNTcGVjaWFsKHVybC5wcm90b2NvbCkgJiYgdXJsLmhvc3RcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcbiAgICA6ICdudWxsJztcblxuICB1cmwuaHJlZiA9IHVybC50b1N0cmluZygpO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBwcm9wZXJ0aWVzIGJhY2sgaW4gdG8gYSB2YWxpZCBhbmQgZnVsbCBVUkwgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZ2lmeSBPcHRpb25hbCBxdWVyeSBzdHJpbmdpZnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBDb21waWxlZCB2ZXJzaW9uIG9mIHRoZSBVUkwuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nJDEoc3RyaW5naWZ5KSB7XG4gIGlmICghc3RyaW5naWZ5IHx8ICdmdW5jdGlvbicgIT09IHR5cGVvZiBzdHJpbmdpZnkpIHN0cmluZ2lmeSA9IHF1ZXJ5c3RyaW5naWZ5XzEuc3RyaW5naWZ5O1xuXG4gIHZhciBxdWVyeVxuICAgICwgdXJsID0gdGhpc1xuICAgICwgaG9zdCA9IHVybC5ob3N0XG4gICAgLCBwcm90b2NvbCA9IHVybC5wcm90b2NvbDtcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuY2hhckF0KHByb3RvY29sLmxlbmd0aCAtIDEpICE9PSAnOicpIHByb3RvY29sICs9ICc6JztcblxuICB2YXIgcmVzdWx0ID1cbiAgICBwcm90b2NvbCArXG4gICAgKCh1cmwucHJvdG9jb2wgJiYgdXJsLnNsYXNoZXMpIHx8IGlzU3BlY2lhbCh1cmwucHJvdG9jb2wpID8gJy8vJyA6ICcnKTtcblxuICBpZiAodXJsLnVzZXJuYW1lKSB7XG4gICAgcmVzdWx0ICs9IHVybC51c2VybmFtZTtcbiAgICBpZiAodXJsLnBhc3N3b3JkKSByZXN1bHQgKz0gJzonKyB1cmwucGFzc3dvcmQ7XG4gICAgcmVzdWx0ICs9ICdAJztcbiAgfSBlbHNlIGlmICh1cmwucGFzc3dvcmQpIHtcbiAgICByZXN1bHQgKz0gJzonKyB1cmwucGFzc3dvcmQ7XG4gICAgcmVzdWx0ICs9ICdAJztcbiAgfSBlbHNlIGlmIChcbiAgICB1cmwucHJvdG9jb2wgIT09ICdmaWxlOicgJiZcbiAgICBpc1NwZWNpYWwodXJsLnByb3RvY29sKSAmJlxuICAgICFob3N0ICYmXG4gICAgdXJsLnBhdGhuYW1lICE9PSAnLydcbiAgKSB7XG4gICAgLy9cbiAgICAvLyBBZGQgYmFjayB0aGUgZW1wdHkgdXNlcmluZm8sIG90aGVyd2lzZSB0aGUgb3JpZ2luYWwgaW52YWxpZCBVUkxcbiAgICAvLyBtaWdodCBiZSB0cmFuc2Zvcm1lZCBpbnRvIGEgdmFsaWQgb25lIHdpdGggYHVybC5wYXRobmFtZWAgYXMgaG9zdC5cbiAgICAvL1xuICAgIHJlc3VsdCArPSAnQCc7XG4gIH1cblxuICAvL1xuICAvLyBUcmFpbGluZyBjb2xvbiBpcyByZW1vdmVkIGZyb20gYHVybC5ob3N0YCB3aGVuIGl0IGlzIHBhcnNlZC4gSWYgaXQgc3RpbGxcbiAgLy8gZW5kcyB3aXRoIGEgY29sb24sIHRoZW4gYWRkIGJhY2sgdGhlIHRyYWlsaW5nIGNvbG9uIHRoYXQgd2FzIHJlbW92ZWQuIFRoaXNcbiAgLy8gcHJldmVudHMgYW4gaW52YWxpZCBVUkwgZnJvbSBiZWluZyB0cmFuc2Zvcm1lZCBpbnRvIGEgdmFsaWQgb25lLlxuICAvL1xuICBpZiAoaG9zdFtob3N0Lmxlbmd0aCAtIDFdID09PSAnOicgfHwgKHBvcnQudGVzdCh1cmwuaG9zdG5hbWUpICYmICF1cmwucG9ydCkpIHtcbiAgICBob3N0ICs9ICc6JztcbiAgfVxuXG4gIHJlc3VsdCArPSBob3N0ICsgdXJsLnBhdGhuYW1lO1xuXG4gIHF1ZXJ5ID0gJ29iamVjdCcgPT09IHR5cGVvZiB1cmwucXVlcnkgPyBzdHJpbmdpZnkodXJsLnF1ZXJ5KSA6IHVybC5xdWVyeTtcbiAgaWYgKHF1ZXJ5KSByZXN1bHQgKz0gJz8nICE9PSBxdWVyeS5jaGFyQXQoMCkgPyAnPycrIHF1ZXJ5IDogcXVlcnk7XG5cbiAgaWYgKHVybC5oYXNoKSByZXN1bHQgKz0gdXJsLmhhc2g7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuVXJsLnByb3RvdHlwZSA9IHsgc2V0OiBzZXQsIHRvU3RyaW5nOiB0b1N0cmluZyQxIH07XG5cbi8vXG4vLyBFeHBvc2UgdGhlIFVSTCBwYXJzZXIgYW5kIHNvbWUgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRoYXQgbWlnaHQgYmUgdXNlZnVsIGZvclxuLy8gb3RoZXJzIG9yIHRlc3RpbmcuXG4vL1xuVXJsLmV4dHJhY3RQcm90b2NvbCA9IGV4dHJhY3RQcm90b2NvbDtcblVybC5sb2NhdGlvbiA9IGxvbGNhdGlvbjtcblVybC50cmltTGVmdCA9IHRyaW1MZWZ0O1xuVXJsLnFzID0gcXVlcnlzdHJpbmdpZnlfMTtcblxudmFyIHVybFBhcnNlID0gVXJsO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY2xhc3MgVXJsSW5mbyB7XG4gICAgY29uc3RydWN0b3IodXJsID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmNsYXNzIExvZ2dlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubG9nX2RlYnVnID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9nX2Vycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgc2V0TG9nTGV2ZWwobG9nTGV2ZWwpIHtcbiAgICAgICAgc3dpdGNoIChsb2dMZXZlbCkge1xuICAgICAgICAgICAgY2FzZSAnREVCVUcnOlxuICAgICAgICAgICAgICAgIHRoaXMubG9nX2RlYnVnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ19lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFUlJPUic6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dfZGVidWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ19lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdOT05FJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ19kZWJ1ZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nX2Vycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMubG9nX2RlYnVnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dfZXJyb3IgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlYnVnKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMubG9nX2RlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlcnJvciguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ19lcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IGxvZ2dpbmcgPSBuZXcgTG9nZ2VyKCk7XG53aW5kb3cuX2lvbmljQXV0aExvZ2dpbmcgPSBsb2dnaW5nO1xuXG5jbGFzcyBtZXNzYWdlcyB7XG59XG5tZXNzYWdlcy5BRERJTkdfQ09PS0lFU19OT1RfU1VQUE9SVEVEID0gJ2F1dGgtY29ubmVjdDogc3RyaW5nID0gXCJzZXRIZWFkZXJcIiBkb2VzIG5vdCBzdXBwb3J0IGFkZGluZyBjb29raWVzLCBwbGVhc2UgdXNlIFwic2V0Q29va2llXCIgZnVuY3Rpb24gaW5zdGVhZCc7XG5tZXNzYWdlcy5EQVRBX1RZUEVfTUlTTUFUQ0ggPSAnYXV0aC1jb25uZWN0OiBzdHJpbmcgPSBcImRhdGFcIiBhcmd1bWVudCBzdXBwb3J0cyBvbmx5IGZvbGxvd2luZyBkYXRhIHR5cGVzOic7XG5tZXNzYWdlcy5JTlZBTElEX0NMSUVOVF9BVVRIX0FMSUFTID0gJ2F1dGgtY29ubmVjdDogc3RyaW5nID0gaW52YWxpZCBjbGllbnQgY2VydGlmaWNhdGUgYWxpYXMsIG5lZWRzIHRvIGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCc7XG5tZXNzYWdlcy5JTlZBTElEX0NMSUVOVF9BVVRIX01PREUgPSAnYXV0aC1jb25uZWN0OiBzdHJpbmcgPSBpbnZhbGlkIGNsaWVudCBjZXJ0aWZpY2F0ZSBhdXRoZW50aWNhdGlvbiBtb2RlLCBzdXBwb3J0ZWQgbW9kZXMgYXJlOic7XG5tZXNzYWdlcy5JTlZBTElEX0NMSUVOVF9BVVRIX09QVElPTlMgPSAnYXV0aC1jb25uZWN0OiBzdHJpbmcgPSBpbnZhbGlkIGNsaWVudCBjZXJ0aWZpY2F0ZSBhdXRoZW50aWNhdGlvbiBvcHRpb25zLCBuZWVkcyB0byBiZSBhbiBvYmplY3QnO1xubWVzc2FnZXMuSU5WQUxJRF9DTElFTlRfQVVUSF9QS0NTX1BBU1NXT1JEID0gJ2F1dGgtY29ubmVjdDogc3RyaW5nID0gaW52YWxpZCBQS0NTMTIgY29udGFpbmVyIHBhc3N3b3JkLCBuZWVkcyB0byBiZSBhIHN0cmluZyc7XG5tZXNzYWdlcy5JTlZBTElEX0NMSUVOVF9BVVRIX1JBV19QS0NTID0gJ2F1dGgtY29ubmVjdDogc3RyaW5nID0gaW52YWxpZCBQS0NTMTIgY29udGFpbmVyLCBuZWVkcyB0byBiZSBhbiBhcnJheSBidWZmZXInO1xubWVzc2FnZXMuSU5WQUxJRF9EQVRBX1NFUklBTElaRVIgPSAnYXV0aC1jb25uZWN0OiBzdHJpbmcgPSBpbnZhbGlkIHNlcmlhbGl6ZXIsIHN1cHBvcnRlZCBzZXJpYWxpemVycyBhcmU6Jztcbm1lc3NhZ2VzLklOVkFMSURfRk9MTE9XX1JFRElSRUNUX1ZBTFVFID0gJ2F1dGgtY29ubmVjdDogc3RyaW5nID0gaW52YWxpZCBmb2xsb3cgcmVkaXJlY3QgdmFsdWUsIG5lZWRzIHRvIGJlIGEgYm9vbGVhbiB2YWx1ZSc7XG5tZXNzYWdlcy5JTlZBTElEX0hFQURFUlNfVkFMVUUgPSAnYXV0aC1jb25uZWN0OiBzdHJpbmcgPSBoZWFkZXIgdmFsdWVzIG11c3QgYmUgc3RyaW5ncyc7XG5tZXNzYWdlcy5JTlZBTElEX0hUVFBfTUVUSE9EID0gJ2F1dGgtY29ubmVjdDogc3RyaW5nID0gaW52YWxpZCBIVFRQIG1ldGhvZCwgc3VwcG9ydGVkIG1ldGhvZHMgYXJlOic7XG5tZXNzYWdlcy5JTlZBTElEX1BBUkFNU19WQUxVRSA9ICdhdXRoLWNvbm5lY3Q6IHN0cmluZyA9IGludmFsaWQgcGFyYW1zIG9iamVjdCwgbmVlZHMgdG8gYmUgYW4gb2JqZWN0IHdpdGggc3RyaW5ncyc7XG5tZXNzYWdlcy5JTlZBTElEX1JFU1BPTlNFX1RZUEUgPSAnYXV0aC1jb25uZWN0OiBzdHJpbmcgPSBpbnZhbGlkIHJlc3BvbnNlIHR5cGUsIHN1cHBvcnRlZCB0eXBlcyBhcmU6Jztcbm1lc3NhZ2VzLklOVkFMSURfU1NMX0NFUlRfTU9ERSA9ICdhdXRoLWNvbm5lY3Q6IHN0cmluZyA9IGludmFsaWQgU1NMIGNlcnQgbW9kZSwgc3VwcG9ydGVkIG1vZGVzIGFyZTonO1xubWVzc2FnZXMuSU5WQUxJRF9USU1FT1VUX1ZBTFVFID0gJ2F1dGgtY29ubmVjdDogc3RyaW5nID0gaW52YWxpZCB0aW1lb3V0IHZhbHVlLCBuZWVkcyB0byBiZSBhIHBvc2l0aXZlIG51bWVyaWMgdmFsdWUnO1xubWVzc2FnZXMuTUFOREFUT1JZX0ZBSUwgPSAnYXV0aC1jb25uZWN0OiBzdHJpbmcgPSBtaXNzaW5nIG1hbmRhdG9yeSBcIm9uRmFpbFwiIGNhbGxiYWNrIGZ1bmN0aW9uJztcbm1lc3NhZ2VzLk1BTkRBVE9SWV9TVUNDRVNTID0gJ2F1dGgtY29ubmVjdDogc3RyaW5nID0gbWlzc2luZyBtYW5kYXRvcnkgXCJvblN1Y2Nlc3NcIiBjYWxsYmFjayBmdW5jdGlvbic7XG5tZXNzYWdlcy5MT0dPVVRfVU5BQkxFX1RPX1JFVFJJRVZFX1RPS0VOID0gJ2F1dGgtY29ubmVjdDogc3RyaW5nID0gVW5hYmxlIHRvIHJldHJpZXZlIElkIFRva2VuIGZyb20gc3RvcmFnZSc7XG5cbmNsYXNzIGpzVXRpbCB7XG4gICAgLy8gdHlwZW9mIGlzIG5vdCB3b3JraW5nIHJlbGlhYmx5IGluIEpTXG4gICAgc3RhdGljIGdldFR5cGVPZihvYmplY3QpIHtcbiAgICAgICAgc3dpdGNoIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSkge1xuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBBcnJheV0nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnQXJyYXknO1xuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBCbG9iXSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdCbG9iJztcbiAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgQXJyYXlCdWZmZXJdJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FycmF5QnVmZmVyJztcbiAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnQm9vbGVhbic7XG4gICAgICAgICAgICBjYXNlICdbb2JqZWN0IEZ1bmN0aW9uXSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdGdW5jdGlvbic7XG4gICAgICAgICAgICBjYXNlICdbb2JqZWN0IE51bGxdJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ051bGwnO1xuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ051bWJlcic7XG4gICAgICAgICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTdHJpbmcnO1xuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBVbmRlZmluZWRdJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1VuZGVmaW5lZCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnVW5rbm93bic7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIGhlbHBlcnMge1xuICAgIHN0YXRpYyBtZXJnZUhlYWRlcnMoZ2xvYmFsSGVhZGVycywgbG9jYWxIZWFkZXJzKSB7XG4gICAgICAgIHZhciBnbG9iYWxLZXlzID0gT2JqZWN0LmtleXMoZ2xvYmFsSGVhZGVycyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2xvYmFsS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gZ2xvYmFsS2V5c1tpXTtcbiAgICAgICAgICAgIGlmICghbG9jYWxIZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsb2NhbEhlYWRlcnNba2V5XSA9IGdsb2JhbEhlYWRlcnNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxIZWFkZXJzO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tGb3JWYWxpZFN0cmluZ1ZhbHVlKGxpc3QsIHZhbHVlLCBvbkludmFsaWRWYWx1ZU1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGpzVXRpbC5nZXRUeXBlT2YodmFsdWUpICE9PSAnU3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG9uSW52YWxpZFZhbHVlTWVzc2FnZSArICcgJyArIGxpc3Quam9pbignLCAnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGxpc3QuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iob25JbnZhbGlkVmFsdWVNZXNzYWdlICsgJyAnICsgbGlzdC5qb2luKCcsICcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0tleVZhbHVlUGFpck9iamVjdChvYmosIGFsbG93ZWRDaGlsZHJlbiwgb25JbnZhbGlkVmFsdWVNZXNzYWdlKSB7XG4gICAgICAgIGlmIChqc1V0aWwuZ2V0VHlwZU9mKG9iaikgIT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iob25JbnZhbGlkVmFsdWVNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFsbG93ZWRDaGlsZHJlbi5pbmRleE9mKGpzVXRpbC5nZXRUeXBlT2Yob2JqW2tleXNbaV1dKSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG9uSW52YWxpZFZhbHVlTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrSHR0cE1ldGhvZChtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tGb3JWYWxpZFN0cmluZ1ZhbHVlKHRoaXMudmFsaWRIdHRwTWV0aG9kcywgbWV0aG9kLCBtZXNzYWdlcy5JTlZBTElEX0hUVFBfTUVUSE9EKTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrUmVzcG9uc2VUeXBlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tGb3JWYWxpZFN0cmluZ1ZhbHVlKHRoaXMudmFsaWRSZXNwb25zZVR5cGVzLCB0eXBlLCBtZXNzYWdlcy5JTlZBTElEX1JFU1BPTlNFX1RZUEUpO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tTZXJpYWxpemVyKHNlcmlhbGl6ZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tGb3JWYWxpZFN0cmluZ1ZhbHVlKHRoaXMudmFsaWRTZXJpYWxpemVycywgc2VyaWFsaXplciwgbWVzc2FnZXMuSU5WQUxJRF9EQVRBX1NFUklBTElaRVIpO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tGb3JCbGFja2xpc3RlZEhlYWRlcktleShrZXkpIHtcbiAgICAgICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29va2llJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLkFERElOR19DT09LSUVTX05PVF9TVVBQT1JURUQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZvckludmFsaWRIZWFkZXJWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoanNVdGlsLmdldFR5cGVPZih2YWx1ZSkgIT09ICdTdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuSU5WQUxJRF9IRUFERVJTX1ZBTFVFKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja1RpbWVvdXRWYWx1ZSh0aW1lb3V0KSB7XG4gICAgICAgIGlmIChqc1V0aWwuZ2V0VHlwZU9mKHRpbWVvdXQpICE9PSAnTnVtYmVyJyB8fCB0aW1lb3V0IDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLklOVkFMSURfVElNRU9VVF9WQUxVRSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbWVvdXQ7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZvbGxvd1JlZGlyZWN0VmFsdWUoZm9sbG93KSB7XG4gICAgICAgIGlmIChqc1V0aWwuZ2V0VHlwZU9mKGZvbGxvdykgIT09ICdCb29sZWFuJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLklOVkFMSURfRk9MTE9XX1JFRElSRUNUX1ZBTFVFKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9sbG93O1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tIZWFkZXJzT2JqZWN0KGhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tLZXlWYWx1ZVBhaXJPYmplY3QoaGVhZGVycywgWydTdHJpbmcnXSwgbWVzc2FnZXMuSU5WQUxJRF9IRUFERVJTX1ZBTFVFKTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrUGFyYW1zT2JqZWN0KHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0tleVZhbHVlUGFpck9iamVjdChwYXJhbXMsIFsnU3RyaW5nJywgJ0FycmF5J10sIG1lc3NhZ2VzLklOVkFMSURfUEFSQU1TX1ZBTFVFKTtcbiAgICB9XG4gICAgc3RhdGljIGdldE1hdGNoaW5nSG9zdEhlYWRlcnModXJsLCBoZWFkZXJzTGlzdCkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHVybC5tYXRjaCgvXmh0dHBzP1xcOlxcL1xcLyhbXlxcLz8jXSspKD86W1xcLz8jXXwkKS9pKTtcbiAgICAgICAgdmFyIGRvbWFpbiA9IG1hdGNoZXMgJiYgbWF0Y2hlc1sxXTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnNMaXN0W2RvbWFpbl0gfHwgbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIGdldE1lcmdlZEhlYWRlcnModXJsLCByZXF1ZXN0SGVhZGVycywgcHJlZGVmaW5lZEhlYWRlcnMpIHtcbiAgICAgICAgdmFyIGdsb2JhbEhlYWRlcnMgPSBwcmVkZWZpbmVkSGVhZGVyc1snKiddIHx8IHt9O1xuICAgICAgICB2YXIgaG9zdEhlYWRlcnMgPSB0aGlzLmdldE1hdGNoaW5nSG9zdEhlYWRlcnModXJsLCBwcmVkZWZpbmVkSGVhZGVycykgfHwge307XG4gICAgICAgIHZhciBtZXJnZWRIZWFkZXJzID0gdGhpcy5tZXJnZUhlYWRlcnMoZ2xvYmFsSGVhZGVycywgaG9zdEhlYWRlcnMpO1xuICAgICAgICBtZXJnZWRIZWFkZXJzID0gdGhpcy5tZXJnZUhlYWRlcnMobWVyZ2VkSGVhZGVycywgcmVxdWVzdEhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gbWVyZ2VkSGVhZGVycztcbiAgICB9XG4gICAgc3RhdGljIGdldEFsbG93ZWREYXRhVHlwZXMoZGF0YVNlcmlhbGl6ZXIpIHtcbiAgICAgICAgc3dpdGNoIChkYXRhU2VyaWFsaXplcikge1xuICAgICAgICAgICAgY2FzZSAndXRmOCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnU3RyaW5nJ107XG4gICAgICAgICAgICBjYXNlICd1cmxlbmNvZGVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWydPYmplY3QnXTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnQXJyYXknLCAnT2JqZWN0J107XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldFByb2Nlc3NlZERhdGEoZGF0YSwgZGF0YVNlcmlhbGl6ZXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnREYXRhVHlwZSA9IGpzVXRpbC5nZXRUeXBlT2YoZGF0YSk7XG4gICAgICAgIHZhciBhbGxvd2VkRGF0YVR5cGVzID0gdGhpcy5nZXRBbGxvd2VkRGF0YVR5cGVzKGRhdGFTZXJpYWxpemVyKTtcbiAgICAgICAgaWYgKGFsbG93ZWREYXRhVHlwZXMuaW5kZXhPZihjdXJyZW50RGF0YVR5cGUpID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLkRBVEFfVFlQRV9NSVNNQVRDSCArICcgJyArIGFsbG93ZWREYXRhVHlwZXMuam9pbignLCAnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFTZXJpYWxpemVyID09PSAndXRmOCcpIHtcbiAgICAgICAgICAgIGRhdGEgPSB7IHRleHQ6IGRhdGEgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZU1pc3NpbmdDYWxsYmFja3Moc3VjY2Vzc0ZuLCBmYWlsRm4pIHtcbiAgICAgICAgaWYgKHN1Y2Nlc3NGbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuTUFOREFUT1JZX1NVQ0NFU1MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWlsRm4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLk1BTkRBVE9SWV9GQUlMKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlTWlzc2luZ09wdGlvbnMob3B0aW9ucywgZ2xvYmFscykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5jaGVja0h0dHBNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy52YWxpZEh0dHBNZXRob2RzWzBdKSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogdGhpcy5jaGVja1Jlc3BvbnNlVHlwZShvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCB0aGlzLnZhbGlkUmVzcG9uc2VUeXBlc1swXSksXG4gICAgICAgICAgICBzZXJpYWxpemVyOiB0aGlzLmNoZWNrU2VyaWFsaXplcihvcHRpb25zLnNlcmlhbGl6ZXIgfHwgZ2xvYmFscy5zZXJpYWxpemVyKSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMuY2hlY2tUaW1lb3V0VmFsdWUob3B0aW9ucy50aW1lb3V0IHx8IGdsb2JhbHMudGltZW91dCksXG4gICAgICAgICAgICBmb2xsb3dSZWRpcmVjdDogdGhpcy5jaGVja0ZvbGxvd1JlZGlyZWN0VmFsdWUob3B0aW9ucy5mb2xsb3dSZWRpcmVjdCB8fCBnbG9iYWxzLmZvbGxvd1JlZGlyZWN0KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuY2hlY2tIZWFkZXJzT2JqZWN0KG9wdGlvbnMuaGVhZGVycyB8fCB7fSksXG4gICAgICAgICAgICBwYXJhbXM6IHRoaXMuY2hlY2tQYXJhbXNPYmplY3Qob3B0aW9ucy5wYXJhbXMgfHwge30pLFxuICAgICAgICAgICAgZGF0YToganNVdGlsLmdldFR5cGVPZihvcHRpb25zLmRhdGEpID09PSAnVW5kZWZpbmVkJyA/IG51bGwgOiBvcHRpb25zLmRhdGEsXG4gICAgICAgICAgICBmaWxlUGF0aDogb3B0aW9ucy5maWxlUGF0aCB8fCAnJyxcbiAgICAgICAgICAgIG5hbWU6IG9wdGlvbnMubmFtZSB8fCAnJyxcbiAgICAgICAgfTtcbiAgICB9XG59XG5oZWxwZXJzLnZhbGlkU2VyaWFsaXplcnMgPSBbJ3VybGVuY29kZWQnLCAnanNvbicsICd1dGY4J107XG5oZWxwZXJzLnZhbGlkSHR0cE1ldGhvZHMgPSBbJ2dldCcsICdwdXQnLCAncG9zdCcsICdwYXRjaCcsICdoZWFkJywgJ2RlbGV0ZScsICd1cGxvYWQnLCAnZG93bmxvYWQnXTtcbmhlbHBlcnMudmFsaWRSZXNwb25zZVR5cGVzID0gWyd0ZXh0JywgJ2FycmF5YnVmZmVyJywgJ2Jsb2InXTtcblxuY2xhc3MgZ2xvYmFsQ29uZmlncyB7XG59XG5nbG9iYWxDb25maWdzLmhlYWRlcnMgPSB7fTtcbmdsb2JhbENvbmZpZ3Muc2VyaWFsaXplciA9ICd1cmxlbmNvZGVkJztcbmdsb2JhbENvbmZpZ3MuZm9sbG93UmVkaXJlY3QgPSB0cnVlO1xuZ2xvYmFsQ29uZmlncy50aW1lb3V0ID0gNjAuMDtcblxuY2xhc3MgaHR0cCB7XG4gICAgc3RhdGljIHNlbmRSZXF1ZXN0KHVybCwgb3B0aW9ucywgc3VjY2VzcywgZmFpbHVyZSkge1xuICAgICAgICBoZWxwZXJzLmhhbmRsZU1pc3NpbmdDYWxsYmFja3Moc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICAgIG9wdGlvbnMgPSBoZWxwZXJzLmhhbmRsZU1pc3NpbmdPcHRpb25zKG9wdGlvbnMsIGdsb2JhbENvbmZpZ3MpO1xuICAgICAgICB2YXIgaGVhZGVycyA9IGhlbHBlcnMuZ2V0TWVyZ2VkSGVhZGVycyh1cmwsIG9wdGlvbnMuaGVhZGVycywgZ2xvYmFsQ29uZmlncy5oZWFkZXJzKTtcbiAgICAgICAgc3dpdGNoIChvcHRpb25zLm1ldGhvZCkge1xuICAgICAgICAgICAgY2FzZSAncG9zdCc6XG4gICAgICAgICAgICBjYXNlICdwdXQnOlxuICAgICAgICAgICAgY2FzZSAncGF0Y2gnOlxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gaGVscGVycy5nZXRQcm9jZXNzZWREYXRhKG9wdGlvbnMuZGF0YSwgb3B0aW9ucy5zZXJpYWxpemVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29yZG92YS5leGVjKHN1Y2Nlc3MsIGZhaWx1cmUsICdJb25pY0h0dHAnLCBvcHRpb25zLm1ldGhvZCwgW1xuICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2VyaWFsaXplcixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50aW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZvbGxvd1JlZGlyZWN0LFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcmRvdmEuZXhlYyhzdWNjZXNzLCBmYWlsdXJlLCAnSW9uaWNIdHRwJywgb3B0aW9ucy5tZXRob2QsIFtcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9sbG93UmVkaXJlY3QsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBwb3N0KHVybCwgZGF0YSwgaGVhZGVycywgc3VjY2VzcywgZmFpbHVyZSkge1xuICAgICAgICByZXR1cm4gaHR0cC5zZW5kUmVxdWVzdCh1cmwsIHsgbWV0aG9kOiAncG9zdCcsIGRhdGE6IGRhdGEsIGhlYWRlcnM6IGhlYWRlcnMgfSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQodXJsLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgICAgIHJldHVybiBodHRwLnNlbmRSZXF1ZXN0KHVybCwgeyBtZXRob2Q6ICdnZXQnLCBwYXJhbXM6IHt9LCBoZWFkZXJzOiB7fSB9LCBzdWNjZXNzLCBmYWlsdXJlKTtcbiAgICB9XG4gICAgc3RhdGljIHB1dCh1cmwsIGRhdGEsIGhlYWRlcnMsIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICAgICAgcmV0dXJuIGh0dHAuc2VuZFJlcXVlc3QodXJsLCB7IG1ldGhvZDogJ3B1dCcsIGRhdGE6IGRhdGEsIGhlYWRlcnM6IGhlYWRlcnMgfSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgfVxuICAgIHN0YXRpYyBwYXRjaCh1cmwsIGRhdGEsIGhlYWRlcnMsIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICAgICAgcmV0dXJuIGh0dHAuc2VuZFJlcXVlc3QodXJsLCB7IG1ldGhvZDogJ3BhdGNoJywgZGF0YTogZGF0YSwgaGVhZGVyczogaGVhZGVycyB9LCBzdWNjZXNzLCBmYWlsdXJlKTtcbiAgICB9XG4gICAgc3RhdGljIGRlbCh1cmwsIHBhcmFtcywgaGVhZGVycywgc3VjY2VzcywgZmFpbHVyZSkge1xuICAgICAgICByZXR1cm4gaHR0cC5zZW5kUmVxdWVzdCh1cmwsIHsgbWV0aG9kOiAnZGVsZXRlJywgcGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IGhlYWRlcnMgfSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgfVxuICAgIHN0YXRpYyBoZWFkKHVybCwgcGFyYW1zLCBoZWFkZXJzLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgICAgIHJldHVybiBodHRwLnNlbmRSZXF1ZXN0KHVybCwgeyBtZXRob2Q6ICdoZWFkJywgcGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IGhlYWRlcnMgfSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgfVxufVxuXG5jbGFzcyBVcmxIZWxwZXIge1xuICAgIHN0YXRpYyBidWlsZFVybCh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhvcHRpb25zKTtcbiAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpO1xuICAgICAgICBwYXJhbXMuZm9yRWFjaCgodmFsLCBrZXkpID0+IHVybE9iai5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsKSk7XG4gICAgICAgIGxvZ2dpbmcuZGVidWcodXJsT2JqLmhyZWYsIHRoaXMubG9nVGFnLCAnYnVpbGRVcmw6ICcpO1xuICAgICAgICByZXR1cm4gbmV3IFVybEluZm8odXJsT2JqLmhyZWYpO1xuICAgIH1cbiAgICBzdGF0aWMgcGFyc2VIYXNoKHVybEhhc2gpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgICAgICBsZXQgcXVlcmllcztcbiAgICAgICAgbGV0IHRlbXA7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgbDtcbiAgICAgICAgaWYgKHVybEhhc2hbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgdXJsSGFzaCA9IHVybEhhc2guc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3BsaXQgaW50byBrZXkvdmFsdWUgcGFpcnNcbiAgICAgICAgcXVlcmllcyA9IHVybEhhc2guc3BsaXQoJyYnKTtcbiAgICAgICAgLy8gQ29udmVydCB0aGUgYXJyYXkgb2Ygc3RyaW5ncyBpbnRvIGFuIG9iamVjdFxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gcXVlcmllcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAgPSBxdWVyaWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSB0ZW1wWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICAgIHN0YXRpYyBwb3N0KHVybCwgZGF0YSwgaGVhZGVycykge1xuICAgICAgICBsb2dnaW5nLmRlYnVnKCdVcmxIZWxwZXI6OlBvc3QnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBodHRwLnBvc3QodXJsLCBkYXRhLCBoZWFkZXJzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldCh1cmwpIHtcbiAgICAgICAgbG9nZ2luZy5kZWJ1ZygnVXJsSGVscGVyOjpQb3N0Jyk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gaHR0cC5nZXQodXJsLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5VcmxIZWxwZXIubG9nVGFnID0gJ1VybEhlbHBlcjogJztcblxuY2xhc3MgQmFzZVN0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuS2V5ID0gJ19pb25pY0F1dGguYWNjZXNzVG9rZW4nO1xuICAgICAgICB0aGlzLnJlZnJlc2hUb2tlbktleSA9ICdfaW9uaWNBdXRoLnJlZnJlc2hUb2tlbic7XG4gICAgICAgIHRoaXMuaWRUb2tlbktleSA9ICdfaW9uaWNBdXRoLmlkVG9rZW4nO1xuICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUtleSA9ICdfaW9uaWNBdXRoLmF1dGhSZXNwb25zZSc7XG4gICAgfVxuICAgIHNldENsaWVudElkKGNsaWVudElkKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW5LZXkgPSB0aGlzLmFjY2Vzc1Rva2VuS2V5ICsgJy4nICsgY2xpZW50SWQ7XG4gICAgICAgIHRoaXMucmVmcmVzaFRva2VuS2V5ID0gdGhpcy5yZWZyZXNoVG9rZW5LZXkgKyAnLicgKyBjbGllbnRJZDtcbiAgICAgICAgdGhpcy5pZFRva2VuS2V5ID0gdGhpcy5pZFRva2VuS2V5ICsgJy4nICsgY2xpZW50SWQ7XG4gICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlS2V5ID0gdGhpcy5hdXRoUmVzcG9uc2VLZXkgKyAnLicgKyBjbGllbnRJZDtcbiAgICB9XG4gICAgLy8gc29tZSBrZXlzIG5lZWQgdG8gYmUgc3RvcmUgcGVyIHRva2VuLCBoZWxwZXIgdG8gZW5zdXJlIGNvbnNpc3RlbmN5XG4gICAgZm9ybWF0S2V5Rm9yVG9rZW4oa2V5TmFtZSwgdG9rZW5OYW1lKSB7XG4gICAgICAgIHJldHVybiB0b2tlbk5hbWUgPyB0aGlzLmFjY2Vzc1Rva2VuS2V5ICsgJy4nICsgdG9rZW5OYW1lIDogdGhpcy5hY2Nlc3NUb2tlbktleTtcbiAgICB9XG59XG5jb25zdCBpc1Rva2VuU3RvcmFnZVByb3ZpZGVyID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gb2JqO1xuICAgIHJldHVybiAoKHR5cGVvZiBwcm92aWRlciA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgcHJvdmlkZXIuZ2V0QWNjZXNzVG9rZW4gJiZcbiAgICAgICAgdHlwZW9mIHByb3ZpZGVyLmdldEFjY2Vzc1Rva2VuID09PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgICAocHJvdmlkZXIuZ2V0QXV0aFJlc3BvbnNlICYmIHR5cGVvZiBwcm92aWRlci5nZXRBdXRoUmVzcG9uc2UgPT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChwcm92aWRlci5nZXRJZFRva2VuICYmIHR5cGVvZiBwcm92aWRlci5nZXRJZFRva2VuID09PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgICAocHJvdmlkZXIuZ2V0UmVmcmVzaFRva2VuICYmIHR5cGVvZiBwcm92aWRlci5nZXRSZWZyZXNoVG9rZW4gPT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChwcm92aWRlci5zZXRBY2Nlc3NUb2tlbiAmJiB0eXBlb2YgcHJvdmlkZXIuc2V0QWNjZXNzVG9rZW4gPT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChwcm92aWRlci5zZXRBdXRoUmVzcG9uc2UgJiYgdHlwZW9mIHByb3ZpZGVyLnNldEF1dGhSZXNwb25zZSA9PT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgICAgKHByb3ZpZGVyLnNldElkVG9rZW4gJiYgdHlwZW9mIHByb3ZpZGVyLnNldElkVG9rZW4gPT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChwcm92aWRlci5zZXRSZWZyZXNoVG9rZW4gJiYgdHlwZW9mIHByb3ZpZGVyLnNldFJlZnJlc2hUb2tlbiA9PT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgICAgZmFsc2UpO1xufTtcbmNvbnN0IGlzSVY1VXNlckludGVyZmFjZSA9IChvYmopID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG9iajtcbiAgICByZXR1cm4gKHByb3ZpZGVyLmdldFZhbHVlICYmXG4gICAgICAgIHR5cGVvZiBwcm92aWRlci5nZXRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICBwcm92aWRlci5zZXRWYWx1ZSAmJlxuICAgICAgICB0eXBlb2YgcHJvdmlkZXIuc2V0VmFsdWUgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgcHJvdmlkZXIuY2xlYXIgJiZcbiAgICAgICAgdHlwZW9mIHByb3ZpZGVyLmNsZWFyID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIHByb3ZpZGVyLm9uTG9jayAmJlxuICAgICAgICB0eXBlb2YgcHJvdmlkZXIub25Mb2NrID09PSAnZnVuY3Rpb24nKTtcbn07XG5jbGFzcyBBdXRoSWRlbnRpdHlWYXVsdDVTdG9yYWdlIGV4dGVuZHMgQmFzZVN0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHZhdWx0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmF1bHQgPSB2YXVsdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSBzYXZlZCBhY2Nlc3MgdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRBY2Nlc3NUb2tlbih0b2tlbk5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmZvcm1hdEtleUZvclRva2VuKHRoaXMuYWNjZXNzVG9rZW5LZXksIHRva2VuTmFtZSk7XG4gICAgICAgIGxvZ2dpbmcuZGVidWcoJ2dldEFjY2Vzc1Rva2VuIGtleTonLCBrZXkpO1xuICAgICAgICByZXR1cm4gKF9hID0gKGF3YWl0IHRoaXMudmF1bHQuZ2V0VmFsdWUoa2V5KSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogc2F2ZSB0aGUgYWNjZXNzIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgc2V0QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4sIHRva2VuTmFtZSkge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmZvcm1hdEtleUZvclRva2VuKHRoaXMuYWNjZXNzVG9rZW5LZXksIHRva2VuTmFtZSk7XG4gICAgICAgIGxvZ2dpbmcuZGVidWcoJ3NldEFjY2Vzc1Rva2VuOiBrZXk6ICcsIGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhdWx0LnNldFZhbHVlKGtleSwgYWNjZXNzVG9rZW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIHNhdmVkIHJlZnJlc2ggdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRSZWZyZXNoVG9rZW4oKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IChhd2FpdCB0aGlzLnZhdWx0LmdldFZhbHVlKHRoaXMucmVmcmVzaFRva2VuS2V5KSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogc2F2ZSB0aGUgcmVmcmVzaCB0b2tlblxuICAgICAqL1xuICAgIGFzeW5jIHNldFJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmF1bHQuc2V0VmFsdWUodGhpcy5yZWZyZXNoVG9rZW5LZXksIHJlZnJlc2hUb2tlbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCB0aGUgaWQgdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRJZFRva2VuKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSAoYXdhaXQgdGhpcy52YXVsdC5nZXRWYWx1ZSh0aGlzLmlkVG9rZW5LZXkpKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBzYXZlIHRoZSBpZCB0b2tlblxuICAgICAqL1xuICAgIGFzeW5jIHNldElkVG9rZW4oaWRUb2tlbikge1xuICAgICAgICByZXR1cm4gdGhpcy52YXVsdC5zZXRWYWx1ZSh0aGlzLmlkVG9rZW5LZXksIGlkVG9rZW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIGZ1bGwgYXV0aCByZXN1bHRcbiAgICAgKi9cbiAgICBhc3luYyBnZXRBdXRoUmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhdWx0LmdldFZhbHVlKHRoaXMuYXV0aFJlc3BvbnNlS2V5KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogc2F2ZSB0aGUgZnVsbCBhdXRoIHJlc3BvbnNlXG4gICAgICovXG4gICAgYXN5bmMgc2V0QXV0aFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhdWx0LnNldFZhbHVlKHRoaXMuYXV0aFJlc3BvbnNlS2V5LCByZXNwb25zZSk7XG4gICAgfVxuICAgIGFzeW5jIGNsZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YXVsdC5jbGVhcigpO1xuICAgIH1cbiAgICBvbkxvY2soY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy52YXVsdC5vbkxvY2soY2FsbGJhY2spO1xuICAgIH1cbn1cbmNsYXNzIEF1dGhJZGVudGl0eVZhdWx0U3RvcmFnZSBleHRlbmRzIEJhc2VTdG9yYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihpdikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLml2ID0gaXY7XG4gICAgfVxuICAgIGFzeW5jIGVuc3VyZVZhdWx0Q29uZmlndXJlZChzZXRQYXNzY29kZUlmTmVlZGVkKSB7XG4gICAgICAgIGNvbnN0IHZhdWx0ID0gYXdhaXQgdGhpcy5pdi5nZXRWYXVsdCgpO1xuICAgICAgICBjb25zdCBpdkNvbmZpZyA9IGF3YWl0IHZhdWx0LmdldENvbmZpZygpO1xuICAgICAgICBpZiAoaXZDb25maWcuaXNQYXNzY29kZVNldHVwTmVlZGVkICYmIHNldFBhc3Njb2RlSWZOZWVkZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaXYuc2V0UGFzc2NvZGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmF1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCB0aGUgc2F2ZWQgYWNjZXNzIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWNjZXNzVG9rZW4odG9rZW5OYW1lKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZm9ybWF0S2V5Rm9yVG9rZW4odGhpcy5hY2Nlc3NUb2tlbktleSwgdG9rZW5OYW1lKTtcbiAgICAgICAgbG9nZ2luZy5kZWJ1ZygnZ2V0QWNjZXNzVG9rZW46IGtleTogJywga2V5KTtcbiAgICAgICAgY29uc3QgdmF1bHQgPSBhd2FpdCB0aGlzLmVuc3VyZVZhdWx0Q29uZmlndXJlZChmYWxzZSk7XG4gICAgICAgIHJldHVybiB2YXVsdC5nZXRWYWx1ZShrZXkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBzYXZlIHRoZSBhY2Nlc3MgdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyBzZXRBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbiwgdG9rZW5OYW1lKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZm9ybWF0S2V5Rm9yVG9rZW4odGhpcy5hY2Nlc3NUb2tlbktleSwgdG9rZW5OYW1lKTtcbiAgICAgICAgbG9nZ2luZy5kZWJ1Zygnc2V0QWNjZXNzVG9rZW46IGtleTogJywga2V5KTtcbiAgICAgICAgY29uc3QgdmF1bHQgPSBhd2FpdCB0aGlzLmVuc3VyZVZhdWx0Q29uZmlndXJlZCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHZhdWx0LnN0b3JlVmFsdWUoa2V5LCBhY2Nlc3NUb2tlbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCB0aGUgc2F2ZWQgcmVmcmVzaCB0b2tlblxuICAgICAqL1xuICAgIGFzeW5jIGdldFJlZnJlc2hUb2tlbigpIHtcbiAgICAgICAgY29uc3QgdmF1bHQgPSBhd2FpdCB0aGlzLmVuc3VyZVZhdWx0Q29uZmlndXJlZChmYWxzZSk7XG4gICAgICAgIHJldHVybiB2YXVsdC5nZXRWYWx1ZSh0aGlzLnJlZnJlc2hUb2tlbktleSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNhdmUgdGhlIHJlZnJlc2ggdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyBzZXRSZWZyZXNoVG9rZW4ocmVmcmVzaFRva2VuKSB7XG4gICAgICAgIGNvbnN0IHZhdWx0ID0gYXdhaXQgdGhpcy5lbnN1cmVWYXVsdENvbmZpZ3VyZWQodHJ1ZSk7XG4gICAgICAgIHJldHVybiB2YXVsdC5zdG9yZVZhbHVlKHRoaXMucmVmcmVzaFRva2VuS2V5LCByZWZyZXNoVG9rZW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIGlkIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0SWRUb2tlbigpIHtcbiAgICAgICAgY29uc3QgdmF1bHQgPSBhd2FpdCB0aGlzLmVuc3VyZVZhdWx0Q29uZmlndXJlZChmYWxzZSk7XG4gICAgICAgIHJldHVybiB2YXVsdC5nZXRWYWx1ZSh0aGlzLmlkVG9rZW5LZXkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBzYXZlIHRoZSBpZCB0b2tlblxuICAgICAqL1xuICAgIGFzeW5jIHNldElkVG9rZW4oaWRUb2tlbikge1xuICAgICAgICBjb25zdCB2YXVsdCA9IGF3YWl0IHRoaXMuZW5zdXJlVmF1bHRDb25maWd1cmVkKHRydWUpO1xuICAgICAgICByZXR1cm4gdmF1bHQuc3RvcmVWYWx1ZSh0aGlzLmlkVG9rZW5LZXksIGlkVG9rZW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIGZ1bGwgYXV0aCByZXN1bHRcbiAgICAgKi9cbiAgICBhc3luYyBnZXRBdXRoUmVzcG9uc2UoKSB7XG4gICAgICAgIGNvbnN0IHZhdWx0ID0gYXdhaXQgdGhpcy5lbnN1cmVWYXVsdENvbmZpZ3VyZWQoZmFsc2UpO1xuICAgICAgICByZXR1cm4gdmF1bHQuZ2V0VmFsdWUodGhpcy5hdXRoUmVzcG9uc2VLZXkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBzYXZlIHRoZSBmdWxsIGF1dGggcmVzcG9uc2VcbiAgICAgKi9cbiAgICBhc3luYyBzZXRBdXRoUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgdmF1bHQgPSBhd2FpdCB0aGlzLmVuc3VyZVZhdWx0Q29uZmlndXJlZCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHZhdWx0LnN0b3JlVmFsdWUodGhpcy5hdXRoUmVzcG9uc2VLZXksIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgYXN5bmMgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHZhdWx0ID0gYXdhaXQgdGhpcy5pdi5nZXRWYXVsdCgpO1xuICAgICAgICByZXR1cm4gdmF1bHQuY2xlYXIoKTtcbiAgICB9XG59XG5jbGFzcyBBdXRoTG9jYWxTdG9yYWdlIGV4dGVuZHMgQmFzZVN0b3JhZ2Uge1xuICAgIC8qKlxuICAgICAqIGdldCB0aGUgc2F2ZWQgYWNjZXNzIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWNjZXNzVG9rZW4odG9rZW5OYW1lKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZm9ybWF0S2V5Rm9yVG9rZW4odGhpcy5hY2Nlc3NUb2tlbktleSwgdG9rZW5OYW1lKTtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW4gfHwgdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBzYXZlIHRoZSBhY2Nlc3MgdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyBzZXRBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbiwgdG9rZW5OYW1lKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZm9ybWF0S2V5Rm9yVG9rZW4odGhpcy5hY2Nlc3NUb2tlbktleSwgdG9rZW5OYW1lKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgYWNjZXNzVG9rZW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIHNhdmVkIHJlZnJlc2ggdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRSZWZyZXNoVG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucmVmcmVzaFRva2VuS2V5KTtcbiAgICAgICAgcmV0dXJuIHJlZnJlc2hUb2tlbiB8fCB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNhdmUgdGhlIHJlZnJlc2ggdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyBzZXRSZWZyZXNoVG9rZW4ocmVmcmVzaFRva2VuKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnJlZnJlc2hUb2tlbktleSwgcmVmcmVzaFRva2VuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSBpZCB0b2tlblxuICAgICAqL1xuICAgIGFzeW5jIGdldElkVG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IGlkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmlkVG9rZW5LZXkpO1xuICAgICAgICByZXR1cm4gaWRUb2tlbiB8fCB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNhdmUgdGhlIGlkIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgc2V0SWRUb2tlbihpZFRva2VuKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmlkVG9rZW5LZXksIGlkVG9rZW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIGZ1bGwgYXV0aCByZXN1bHRcbiAgICAgKi9cbiAgICBhc3luYyBnZXRBdXRoUmVzcG9uc2UoKSB7XG4gICAgICAgIGNvbnN0IGF1dGhSZXNwb25zZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuYXV0aFJlc3BvbnNlS2V5KTtcbiAgICAgICAgaWYgKGF1dGhSZXNwb25zZVN0cmluZykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShhdXRoUmVzcG9uc2VTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2dnaW5nLmVycm9yKGBhdXRoIHJlc3BvbnNlIG9mICR7YXV0aFJlc3BvbnNlU3RyaW5nfSBpcyBub3QgdmFsaWQganNvbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNhdmUgdGhlIGZ1bGwgYXV0aCByZXNwb25zZVxuICAgICAqL1xuICAgIGFzeW5jIHNldEF1dGhSZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYXV0aFJlc3BTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZSk7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hdXRoUmVzcG9uc2VLZXksIGF1dGhSZXNwU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgfVxuICAgIGFzeW5jIGNsZWFyKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmFjY2Vzc1Rva2VuS2V5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5yZWZyZXNoVG9rZW5LZXkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmlkVG9rZW5LZXkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmF1dGhSZXNwb25zZUtleSk7XG4gICAgfVxufVxuXG5jbGFzcyBTZXNzaW9uSGVscGVyIHtcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRJZCwgc3RvcmFnZSkge1xuICAgICAgICB0aGlzLmF1dGhEYXRhS2V5ID0gJ2lvbmljYXV0aC5hdXRoZGF0YSc7XG4gICAgICAgIHRoaXMuZXhwaXJlc0F0S2V5ID0gJ2lvbmljYXV0aC5leHBpcmVzQXQnO1xuICAgICAgICB0aGlzLm5vbmNlS2V5ID0gJ2lvbmljYXV0aC5ub25jZSc7XG4gICAgICAgIHRoaXMudG9rZW5TY29wZXMgPSAnaW9uaWNhdXRoLnNjb3Blcyc7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVVcmxLZXkgPSAnaW9uaWNhdXRoLm92ZXJyaWRlVXJsJztcbiAgICAgICAgdGhpcy5leHBpcmVzQXRLZXlzID0gW107XG4gICAgICAgIHRoaXMudG9rZW5TY29wZXNLZXlzID0gW107XG4gICAgICAgIHRoaXMuYXV0aERhdGFLZXkgPSBjbGllbnRJZCArICcuJyArIHRoaXMuYXV0aERhdGFLZXk7XG4gICAgICAgIHRoaXMuZXhwaXJlc0F0S2V5ID0gY2xpZW50SWQgKyAnLicgKyB0aGlzLmV4cGlyZXNBdEtleTtcbiAgICAgICAgdGhpcy5ub25jZUtleSA9IGNsaWVudElkICsgJy4nICsgdGhpcy5ub25jZUtleTtcbiAgICAgICAgdGhpcy5vdmVycmlkZVVybEtleSA9IGNsaWVudElkICsgJy4nICsgdGhpcy5vdmVycmlkZVVybEtleTtcbiAgICAgICAgdGhpcy50b2tlblNjb3BlcyA9IGNsaWVudElkICsgJy4nICsgdGhpcy50b2tlblNjb3BlcztcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0QXV0aERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXkgPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMuYXV0aERhdGFLZXkpO1xuICAgICAgICBpZiAoZGF0YUtleSkge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IEpTT04ucGFyc2UoZGF0YUtleSk7XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgc2V0QXV0aERhdGEoc2Vzc2lvbikge1xuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2Uuc2V0KHRoaXMuYXV0aERhdGFLZXksIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKTtcbiAgICB9XG4gICAgYXN5bmMgc2V0T3ZlcnJpZGVVcmwodXJsKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zZXQodGhpcy5vdmVycmlkZVVybEtleSwgdXJsKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0T3ZlcnJpZGVVcmwoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJyaWRlVXJsID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldCh0aGlzLm92ZXJyaWRlVXJsS2V5KTtcbiAgICAgICAgcmV0dXJuIG92ZXJyaWRlVXJsID8gb3ZlcnJpZGVVcmwgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGFzeW5jIGNsZWFyT3ZlcnJpZGVVcmwoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5yZW1vdmUodGhpcy5vdmVycmlkZVVybEtleSk7XG4gICAgfVxuICAgIGFzeW5jIGNsZWFyQXV0aERhdGEoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5yZW1vdmUodGhpcy5hdXRoRGF0YUtleSk7XG4gICAgfVxuICAgIGFzeW5jIGdldEV4cGlyZXNBdCh0b2tlbk5hbWUpIHtcbiAgICAgICAgbGV0IGV4cGlyZXNBdEtleU5hbWUgPSB0aGlzLmV4cGlyZXNBdEtleTtcbiAgICAgICAgaWYgKHRva2VuTmFtZSkge1xuICAgICAgICAgICAgZXhwaXJlc0F0S2V5TmFtZSA9IHRoaXMuZXhwaXJlc0F0S2V5ICsgJy4nICsgdG9rZW5OYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4cGlyZXNBdEtleSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXQoZXhwaXJlc0F0S2V5TmFtZSk7XG4gICAgICAgIGlmIChleHBpcmVzQXRLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IEpTT04ucGFyc2UoZXhwaXJlc0F0S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBleHBpcmVzQXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgYXN5bmMgc2V0RXhwaXJlc0F0KGV4cGlyZXNBdCwgdG9rZW5OYW1lKSB7XG4gICAgICAgIGxldCBleHBpcmVzQXRLZXkgPSB0aGlzLmV4cGlyZXNBdEtleTtcbiAgICAgICAgaWYgKHRva2VuTmFtZSkge1xuICAgICAgICAgICAgZXhwaXJlc0F0S2V5ID0gdGhpcy5leHBpcmVzQXRLZXkgKyAnLicgKyB0b2tlbk5hbWU7XG4gICAgICAgICAgICB0aGlzLnRva2VuU2NvcGVzS2V5cy5wdXNoKGV4cGlyZXNBdEtleSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2luZy5kZWJ1Zygnc2V0RXhwaXJlc0F0JywgJ2V4cGlyZXNBdEtleScsIGV4cGlyZXNBdEtleSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zZXQoZXhwaXJlc0F0S2V5LCBKU09OLnN0cmluZ2lmeShleHBpcmVzQXQpKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0VG9rZW5TY29wZXModG9rZW5OYW1lKSB7XG4gICAgICAgIGxldCB0b2tlblNjb3Blc0tleSA9IHRoaXMudG9rZW5TY29wZXMgKyAnLicgKyB0b2tlbk5hbWU7XG4gICAgICAgIGxvZ2dpbmcuZGVidWcoJ2dldFRva2VuU2NvcGVzJywgJ3Rva2VuU2NvcGVzJywgdG9rZW5TY29wZXNLZXkpO1xuICAgICAgICBjb25zdCB0b2tlblNjb3BlcyA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXQodG9rZW5TY29wZXNLZXkpO1xuICAgICAgICBpZiAodG9rZW5TY29wZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IEpTT04ucGFyc2UodG9rZW5TY29wZXMpO1xuICAgICAgICAgICAgcmV0dXJuIGV4cGlyZXNBdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBhc3luYyBzZXRUb2tlblNjb3BlcyhzY29wZXMsIHRva2VuTmFtZSkge1xuICAgICAgICBsZXQgdG9rZW5TY29wZXNLZXkgPSB0aGlzLnRva2VuU2NvcGVzICsgJy4nICsgdG9rZW5OYW1lO1xuICAgICAgICB0aGlzLnRva2VuU2NvcGVzS2V5cy5wdXNoKHRva2VuU2NvcGVzS2V5KTtcbiAgICAgICAgbG9nZ2luZy5kZWJ1Zygnc2V0VG9rZW5TY29wZXMnLCAndG9rZW5TY29wZXMnLCB0b2tlblNjb3Blc0tleSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zZXQodG9rZW5TY29wZXNLZXksIEpTT04uc3RyaW5naWZ5KHNjb3BlcykpO1xuICAgIH1cbiAgICBhc3luYyBjbGVhclRva2VuU2NvcGVzKCkge1xuICAgICAgICB0aGlzLnRva2VuU2NvcGVzS2V5cy5mb3JFYWNoKGFzeW5jIChrZXkpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5yZW1vdmUoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGNsZWFyRXhwaXJlc0F0KCkge1xuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2UucmVtb3ZlKHRoaXMuZXhwaXJlc0F0S2V5KTtcbiAgICAgICAgdGhpcy5leHBpcmVzQXRLZXlzLmZvckVhY2goYXN5bmMgKGtleSkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnJlbW92ZShrZXkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Tm9uY2UoKSB7XG4gICAgICAgIGNvbnN0IG5vbmNlS2V5ID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldCh0aGlzLm5vbmNlS2V5KTtcbiAgICAgICAgaWYgKG5vbmNlS2V5KSB7XG4gICAgICAgICAgICBjb25zdCBub25jZSA9IEpTT04ucGFyc2Uobm9uY2VLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIG5vbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGFzeW5jIHNldE5vbmNlKG5vbmNlKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zZXQodGhpcy5ub25jZUtleSwgSlNPTi5zdHJpbmdpZnkobm9uY2UpKTtcbiAgICB9XG4gICAgYXN5bmMgY2xlYXJOb25jZSgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnJlbW92ZSh0aGlzLm5vbmNlS2V5KTtcbiAgICB9XG4gICAgYXN5bmMgY2xlYXIoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuY2xlYXJBdXRoRGF0YSgpO1xuICAgICAgICBhd2FpdCB0aGlzLmNsZWFyRXhwaXJlc0F0KCk7XG4gICAgICAgIGF3YWl0IHRoaXMuY2xlYXJOb25jZSgpO1xuICAgICAgICBhd2FpdCB0aGlzLmNsZWFyVG9rZW5TY29wZXMoKTtcbiAgICB9XG59XG5cbnZhciB0b0J5dGVBcnJheV8xID0gdG9CeXRlQXJyYXk7XG52YXIgZnJvbUJ5dGVBcnJheV8xID0gZnJvbUJ5dGVBcnJheTtcblxudmFyIGxvb2t1cCA9IFtdO1xudmFyIHJldkxvb2t1cCA9IFtdO1xudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheTtcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldO1xuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGk7XG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MjtcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2MztcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoO1xuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9Jyk7XG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuO1xuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNCk7XG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXA7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpO1xuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdO1xuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXTtcblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKTtcblxuICB2YXIgY3VyQnl0ZSA9IDA7XG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlbjtcblxuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXTtcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRjtcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGO1xuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRjtcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpO1xuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRjtcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMik7XG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRjtcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkY7XG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcDtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpO1xuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXA7XG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGg7XG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMzsgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW107XG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzOyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKTtcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXTtcbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApO1xuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXTtcbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgICk7XG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cblxuY29uc3QgZ2VuZXJhdGVDaGFsbGVuZ2VBbmRWZXJpZmllciA9IGFzeW5jICh1c2VCYXNlNjRTdHJpbmcgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHZlcmlmaWVyUGxhaW4gPSBnZXRSYW5kb21DaGFyYWN0ZXJzKDEyOCwgdXNlQmFzZTY0U3RyaW5nKTtcbiAgICBjb25zdCB2ZXJpZmllckhhc2hBcnJheSA9IGF3YWl0IHNoYTI1Nih2ZXJpZmllclBsYWluKTtcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBiYXNlNjRFbmNvZGUodmVyaWZpZXJIYXNoQXJyYXkpO1xuICAgIGxvZ2dpbmcuZGVidWcoJ2NoYWxsZW5nZTogJyArIGNoYWxsZW5nZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyaWZpZXI6IHZlcmlmaWVyUGxhaW4sXG4gICAgICAgIGNoYWxsZW5nZSxcbiAgICB9O1xufTtcbmNvbnN0IGdldFJhbmRvbU5vbmNlID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRSYW5kb21DaGFyYWN0ZXJzKDIwKTtcbn07XG5jb25zdCBidWZmZXJUb1N0cmluZyA9IChhcnJheUJ1ZmZlcikgPT4ge1xuICAgIGNvbnN0IGNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG4gICAgcmV0dXJuIGNvZGVyLmRlY29kZShhcnJheUJ1ZmZlcik7XG59O1xuY29uc3QgcGFyc2VKd3QgPSAodG9rZW4pID0+IHtcbiAgICBjb25zdCBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgaGVhZGVyU3RyaW5nID0gYmFzZTY0RGVjb2RlKHBhcnRzWzBdKTtcbiAgICBjb25zdCBwYXlsb2FkU3RyaW5nID0gYmFzZTY0RGVjb2RlKHBhcnRzWzFdKTtcbiAgICBjb25zdCBoZWFkZXIgPSBKU09OLnBhcnNlKGhlYWRlclN0cmluZyk7XG4gICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UocGF5bG9hZFN0cmluZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59O1xuY29uc3QgYmFzZTY0RW5jb2RlID0gKGJ5dGVBcnJheSkgPT4ge1xuICAgIGNvbnN0IGJhc2U2NFN0cmluZyA9IGZyb21CeXRlQXJyYXlfMShieXRlQXJyYXkpO1xuICAgIGNvbnN0IHVybFN0cmluZyA9IGVzY2FwZVVybChiYXNlNjRTdHJpbmcpO1xuICAgIHJldHVybiB1cmxTdHJpbmc7XG59O1xuY29uc3QgYmFzZTY0RGVjb2RlID0gKGVuY29kZWRTdHJpbmcpID0+IHtcbiAgICBjb25zdCB1bmVzY2FwZWRTdHJpbmcgPSB1bmVzY2FwZVVybChlbmNvZGVkU3RyaW5nKTtcbiAgICBjb25zdCBieXRlQXJyYXkgPSB0b0J5dGVBcnJheV8xKHVuZXNjYXBlZFN0cmluZyk7XG4gICAgY29uc3Qgc3RyaW5nID0gYnVmZmVyVG9TdHJpbmcoYnl0ZUFycmF5KTtcbiAgICByZXR1cm4gc3RyaW5nO1xufTtcbmNvbnN0IGVzY2FwZVVybCA9IChiYXNlU3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGJhc2VTdHJpbmcucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJykucmVwbGFjZSgvPS9nLCAnJyk7XG59O1xuY29uc3QgdW5lc2NhcGVVcmwgPSAoYmFzZVN0cmluZykgPT4ge1xuICAgIGxldCBuZXdTdHJpbmcgPSBiYXNlU3RyaW5nLnJlcGxhY2UoL1xcLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICAvLyAucmVwbGFjZSgvXFwtL2csIFwiK1wiKVxuICAgIC8vIC5yZXBsYWNlKC9fL2csIFwiL1wiKTtcbiAgICB3aGlsZSAobmV3U3RyaW5nLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgICAgbmV3U3RyaW5nICs9ICc9JztcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0cmluZztcbn07XG4vKipcbiAqICBTZWN1cmUgSGFzaCBBbGdvcml0aG0gKFNIQTI1NilcbiAqICBodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby9cbiAqICBPcmlnaW5hbCBjb2RlIGJ5IEFuZ2VsIE1hcmluLCBQYXVsIEpvaG5zdG9uLlxuICoqL1xuY29uc3Qgc2hhMjU2ID0gYXN5bmMgZnVuY3Rpb24gc2hhMjU2KHMpIHtcbiAgICB2YXIgY2hyc3ogPSA4O1xuICAgIGZ1bmN0aW9uIHNhZmVfYWRkKHgsIHkpIHtcbiAgICAgICAgdmFyIGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgICAgICAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgICAgICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhmZmZmKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUyhYLCBuKSB7XG4gICAgICAgIHJldHVybiAoWCA+Pj4gbikgfCAoWCA8PCAoMzIgLSBuKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFIoWCwgbikge1xuICAgICAgICByZXR1cm4gWCA+Pj4gbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gQ2goeCwgeSwgeikge1xuICAgICAgICByZXR1cm4gKHggJiB5KSBeICh+eCAmIHopO1xuICAgIH1cbiAgICBmdW5jdGlvbiBNYWooeCwgeSwgeikge1xuICAgICAgICByZXR1cm4gKHggJiB5KSBeICh4ICYgeikgXiAoeSAmIHopO1xuICAgIH1cbiAgICBmdW5jdGlvbiBTaWdtYTAyNTYoeCkge1xuICAgICAgICByZXR1cm4gUyh4LCAyKSBeIFMoeCwgMTMpIF4gUyh4LCAyMik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFNpZ21hMTI1Nih4KSB7XG4gICAgICAgIHJldHVybiBTKHgsIDYpIF4gUyh4LCAxMSkgXiBTKHgsIDI1KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gR2FtbWEwMjU2KHgpIHtcbiAgICAgICAgcmV0dXJuIFMoeCwgNykgXiBTKHgsIDE4KSBeIFIoeCwgMyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEdhbW1hMTI1Nih4KSB7XG4gICAgICAgIHJldHVybiBTKHgsIDE3KSBeIFMoeCwgMTkpIF4gUih4LCAxMCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvcmVfc2hhMjU2KG0sIGwpIHtcbiAgICAgICAgdmFyIEsgPSBuZXcgQXJyYXkoMHg0MjhhMmY5OCwgMHg3MTM3NDQ5MSwgMHhiNWMwZmJjZiwgMHhlOWI1ZGJhNSwgMHgzOTU2YzI1YiwgMHg1OWYxMTFmMSwgMHg5MjNmODJhNCwgMHhhYjFjNWVkNSwgMHhkODA3YWE5OCwgMHgxMjgzNWIwMSwgMHgyNDMxODViZSwgMHg1NTBjN2RjMywgMHg3MmJlNWQ3NCwgMHg4MGRlYjFmZSwgMHg5YmRjMDZhNywgMHhjMTliZjE3NCwgMHhlNDliNjljMSwgMHhlZmJlNDc4NiwgMHhmYzE5ZGM2LCAweDI0MGNhMWNjLCAweDJkZTkyYzZmLCAweDRhNzQ4NGFhLCAweDVjYjBhOWRjLCAweDc2Zjk4OGRhLCAweDk4M2U1MTUyLCAweGE4MzFjNjZkLCAweGIwMDMyN2M4LCAweGJmNTk3ZmM3LCAweGM2ZTAwYmYzLCAweGQ1YTc5MTQ3LCAweDZjYTYzNTEsIDB4MTQyOTI5NjcsIDB4MjdiNzBhODUsIDB4MmUxYjIxMzgsIDB4NGQyYzZkZmMsIDB4NTMzODBkMTMsIDB4NjUwYTczNTQsIDB4NzY2YTBhYmIsIDB4ODFjMmM5MmUsIDB4OTI3MjJjODUsIDB4YTJiZmU4YTEsIDB4YTgxYTY2NGIsIDB4YzI0YjhiNzAsIDB4Yzc2YzUxYTMsIDB4ZDE5MmU4MTksIDB4ZDY5OTA2MjQsIDB4ZjQwZTM1ODUsIDB4MTA2YWEwNzAsIDB4MTlhNGMxMTYsIDB4MWUzNzZjMDgsIDB4Mjc0ODc3NGMsIDB4MzRiMGJjYjUsIDB4MzkxYzBjYjMsIDB4NGVkOGFhNGEsIDB4NWI5Y2NhNGYsIDB4NjgyZTZmZjMsIDB4NzQ4ZjgyZWUsIDB4NzhhNTYzNmYsIDB4ODRjODc4MTQsIDB4OGNjNzAyMDgsIDB4OTBiZWZmZmEsIDB4YTQ1MDZjZWIsIDB4YmVmOWEzZjcsIDB4YzY3MTc4ZjIpO1xuICAgICAgICB2YXIgSEFTSCA9IG5ldyBBcnJheSgweDZhMDllNjY3LCAweGJiNjdhZTg1LCAweDNjNmVmMzcyLCAweGE1NGZmNTNhLCAweDUxMGU1MjdmLCAweDliMDU2ODhjLCAweDFmODNkOWFiLCAweDViZTBjZDE5KTtcbiAgICAgICAgdmFyIFcgPSBuZXcgQXJyYXkoNjQpO1xuICAgICAgICB2YXIgYSwgYiwgYywgZCwgZSwgZiwgZywgaDtcbiAgICAgICAgdmFyIFQxLCBUMjtcbiAgICAgICAgbVtsID4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gKGwgJSAzMikpO1xuICAgICAgICBtWygoKGwgKyA2NCkgPj4gOSkgPDwgNCkgKyAxNV0gPSBsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgICAgICAgICBhID0gSEFTSFswXTtcbiAgICAgICAgICAgIGIgPSBIQVNIWzFdO1xuICAgICAgICAgICAgYyA9IEhBU0hbMl07XG4gICAgICAgICAgICBkID0gSEFTSFszXTtcbiAgICAgICAgICAgIGUgPSBIQVNIWzRdO1xuICAgICAgICAgICAgZiA9IEhBU0hbNV07XG4gICAgICAgICAgICBnID0gSEFTSFs2XTtcbiAgICAgICAgICAgIGggPSBIQVNIWzddO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA2NDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPCAxNilcbiAgICAgICAgICAgICAgICAgICAgV1tqXSA9IG1baiArIGldO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgV1tqXSA9IHNhZmVfYWRkKHNhZmVfYWRkKHNhZmVfYWRkKEdhbW1hMTI1NihXW2ogLSAyXSksIFdbaiAtIDddKSwgR2FtbWEwMjU2KFdbaiAtIDE1XSkpLCBXW2ogLSAxNl0pO1xuICAgICAgICAgICAgICAgIFQxID0gc2FmZV9hZGQoc2FmZV9hZGQoc2FmZV9hZGQoc2FmZV9hZGQoaCwgU2lnbWExMjU2KGUpKSwgQ2goZSwgZiwgZykpLCBLW2pdKSwgV1tqXSk7XG4gICAgICAgICAgICAgICAgVDIgPSBzYWZlX2FkZChTaWdtYTAyNTYoYSksIE1haihhLCBiLCBjKSk7XG4gICAgICAgICAgICAgICAgaCA9IGc7XG4gICAgICAgICAgICAgICAgZyA9IGY7XG4gICAgICAgICAgICAgICAgZiA9IGU7XG4gICAgICAgICAgICAgICAgZSA9IHNhZmVfYWRkKGQsIFQxKTtcbiAgICAgICAgICAgICAgICBkID0gYztcbiAgICAgICAgICAgICAgICBjID0gYjtcbiAgICAgICAgICAgICAgICBiID0gYTtcbiAgICAgICAgICAgICAgICBhID0gc2FmZV9hZGQoVDEsIFQyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEhBU0hbMF0gPSBzYWZlX2FkZChhLCBIQVNIWzBdKTtcbiAgICAgICAgICAgIEhBU0hbMV0gPSBzYWZlX2FkZChiLCBIQVNIWzFdKTtcbiAgICAgICAgICAgIEhBU0hbMl0gPSBzYWZlX2FkZChjLCBIQVNIWzJdKTtcbiAgICAgICAgICAgIEhBU0hbM10gPSBzYWZlX2FkZChkLCBIQVNIWzNdKTtcbiAgICAgICAgICAgIEhBU0hbNF0gPSBzYWZlX2FkZChlLCBIQVNIWzRdKTtcbiAgICAgICAgICAgIEhBU0hbNV0gPSBzYWZlX2FkZChmLCBIQVNIWzVdKTtcbiAgICAgICAgICAgIEhBU0hbNl0gPSBzYWZlX2FkZChnLCBIQVNIWzZdKTtcbiAgICAgICAgICAgIEhBU0hbN10gPSBzYWZlX2FkZChoLCBIQVNIWzddKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSEFTSDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RyMmJpbmIoc3RyKSB7XG4gICAgICAgIHZhciBiaW4gPSBBcnJheSgpO1xuICAgICAgICB2YXIgbWFzayA9ICgxIDw8IGNocnN6KSAtIDE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aCAqIGNocnN6OyBpICs9IGNocnN6KSB7XG4gICAgICAgICAgICBiaW5baSA+PiA1XSB8PSAoc3RyLmNoYXJDb2RlQXQoaSAvIGNocnN6KSAmIG1hc2spIDw8ICgyNCAtIChpICUgMzIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmluO1xuICAgIH1cbiAgICBmdW5jdGlvbiBVdGY4RW5jb2RlKHN0cmluZykge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxyXFxuL2csICdcXG4nKTtcbiAgICAgICAgdmFyIHV0ZnRleHQgPSAnJztcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG4gICAgICAgICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgPiAxMjcgJiYgYyA8IDIwNDgpIHtcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTtcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjID4+IDYpICYgNjMpIHwgMTI4KTtcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGZ0ZXh0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiaW5iMmhleChiaW5hcnJheSkge1xuICAgICAgICB2YXIgaGV4X3RhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcbiAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbmFycmF5Lmxlbmd0aCAqIDQ7IGkrKykge1xuICAgICAgICAgICAgc3RyICs9XG4gICAgICAgICAgICAgICAgaGV4X3RhYi5jaGFyQXQoKGJpbmFycmF5W2kgPj4gMl0gPj4gKCgzIC0gKGkgJSA0KSkgKiA4ICsgNCkpICYgMHhmKSArXG4gICAgICAgICAgICAgICAgICAgIGhleF90YWIuY2hhckF0KChiaW5hcnJheVtpID4+IDJdID4+ICgoMyAtIChpICUgNCkpICogOCkpICYgMHhmKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoZXgydWludDgoc3RyaW5nKSB7XG4gICAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KE1hdGguY2VpbChzdHJpbmcubGVuZ3RoIC8gMikpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgYnl0ZXNbaV0gPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICAgIHMgPSBVdGY4RW5jb2RlKHMpO1xuICAgIHJldHVybiBoZXgydWludDgoYmluYjJoZXgoY29yZV9zaGEyNTYoc3RyMmJpbmIocyksIHMubGVuZ3RoICogY2hyc3opKSk7XG59O1xuY29uc3QgZ2V0UmFuZG9tQ2hhcmFjdGVycyA9IChsZW5ndGgsIHVzZUJhc2U2NFN0cmluZyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gdXNlQmFzZTY0U3RyaW5nXG4gICAgICAgID8gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LV8nXG4gICAgICAgIDogJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LS5ffic7XG4gICAgY29uc3QgYXJyYXkgPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5LnB1c2godmFsdWVzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWx1ZXMubGVuZ3RoKSkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXkuam9pbignJyk7XG59O1xuXG5jb25zdCByZWFkeSQxID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3QgREVWSUNFX1JFQURZX1RJTUVPVVQgPSA1MDAwO1xuICAgIGNvbnN0IHJlYWR5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oYEF1dGggQ29ubmVjdDogZGV2aWNlcmVhZHkgZGlkIG5vdCBmaXJlIHdpdGhpbiAke0RFVklDRV9SRUFEWV9USU1FT1VUfW1zLmApO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSwgREVWSUNFX1JFQURZX1RJTUVPVVQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQocmVhZHlUaW1lb3V0KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xufSk7XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY2xhc3MgSW9uaWNBdXRoQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMubG9nVGFnID0gJ0lvbmljQXV0aENvbmZpZyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdERpc2NvdmVyeVVybCA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJyaWRlRGlzY292ZXJ5VXJsID0gJyc7XG4gICAgICAgIHRoaXMuY3VycmVudERpc2NvdmVyeVVybCA9ICcnO1xuICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgICAgbG9nZ2luZy5zZXRMb2dMZXZlbChvcHRpb25zLmxvZ0xldmVsKTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnaW5nO1xuICAgIH1cbiAgICBnZW5lcmF0ZUNoYWxsZW5nZUFuZFZlcmlmaWVyKCkge1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGVDaGFsbGVuZ2VBbmRWZXJpZmllcigpO1xuICAgIH1cbiAgICB2YWxpZGF0ZUxvY2F0aW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnbG9jYXRpb25zIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIGhhdmUgbG9jYXRpb25zIGxvYWRlZCBhcmUgdGhleSB0aGUgcmlnaHQgb25lcz8geWVwLCB1bmxlc3Mgd2UgaGF2ZSBhbiBvdmVycmlkZVxuICAgICAgICBpZiAodGhpcy5vdmVycmlkZURpc2NvdmVyeVVybCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub3ZlcnJpZGVEaXNjb3ZlcnlVcmwgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ292ZXJyaWRlIGRpc2NvdmVyeSB1cmwgZW1wdHkgb3IgbnVsbCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdvdmVycmlkZSBkaXNjb3ZlcnkgdXJsOiAnLCB0aGlzLm92ZXJyaWRlRGlzY292ZXJ5VXJsKTtcbiAgICAgICAgLy8gZG9lcyB0aGUgY3VycmVudCBlcXVhbCB0aGUgb3ZlcnJpZGU/XG4gICAgICAgIGlmICh0aGlzLm92ZXJyaWRlRGlzY292ZXJ5VXJsICE9PSB0aGlzLmN1cnJlbnREaXNjb3ZlcnlVcmwpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnb3ZlcnJpZGUgbm90IGVxIGN1cnJlbnQgZGlzY292ZXJ5IHVybCcpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnYWxsIG9rPycpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYXN5bmMgbG9hZExvY2F0aW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVMb2NhdGlvbnMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudERpc2NvdmVyeVVybCA9IHRoaXMub3ZlcnJpZGVEaXNjb3ZlcnlVcmw7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREaXNjb3ZlcnlVcmwgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNjb3ZlcnlVcmwgPSB0aGlzLm9wdGlvbnMuZGlzY292ZXJ5VXJsIHx8IHRoaXMuZGVmYXVsdERpc2NvdmVyeVVybDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ2Rpc2NvdmVyeVVybDogJywgdGhpcy5jdXJyZW50RGlzY292ZXJ5VXJsKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2NvcmRvdmEnIHx8IHRoaXMub3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2NhcGFjaXRvcicpIHtcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlP1xuICAgICAgICAgICAgYXdhaXQgcmVhZHkkMTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVXJsSGVscGVyLmdldCh0aGlzLmN1cnJlbnREaXNjb3ZlcnlVcmwpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmVzdWx0LmRhdGE6ICcsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyLmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh0aGlzLmN1cnJlbnREaXNjb3ZlcnlVcmwpO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSBhd2FpdCByZXNwLmpzb24oKTsgLy8gVHJhbnNmb3JtIHRoZSBkYXRhIGludG8ganNvblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdsb2NhdGlvbnMgcmVzcDogJywgdGhpcy5sb2NhdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldElzc3VlcigpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkTG9jYXRpb25zKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uc1snaXNzdWVyJ107XG4gICAgfVxufVxuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG52YXIgZnJlZUdsb2JhbCQxID0gZnJlZUdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCQxIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbnZhciByb290JDEgPSByb290O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290JDEuU3ltYm9sO1xuXG52YXIgU3ltYm9sJDEgPSBTeW1ib2w7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byQxID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90byQxLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmckMSA9IG9iamVjdFByb3RvJDEudG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnJDEgPSBTeW1ib2wkMSA/IFN5bWJvbCQxLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyQxKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnJDFdO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWckMV0gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmckMS5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZyQxXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sJDEgPyBTeW1ib2wkMS50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxudmFyIGlzQXJyYXkkMSA9IGlzQXJyYXk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sJDEgPyBTeW1ib2wkMS5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5JDEodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5T2ZgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eU9mKG9iamVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbi8qKiBVc2VkIHRvIG1hcCBMYXRpbiBVbmljb2RlIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy4gKi9cbnZhciBkZWJ1cnJlZExldHRlcnMgPSB7XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCBibG9jay5cbiAgJ1xceGMwJzogJ0EnLCAgJ1xceGMxJzogJ0EnLCAnXFx4YzInOiAnQScsICdcXHhjMyc6ICdBJywgJ1xceGM0JzogJ0EnLCAnXFx4YzUnOiAnQScsXG4gICdcXHhlMCc6ICdhJywgICdcXHhlMSc6ICdhJywgJ1xceGUyJzogJ2EnLCAnXFx4ZTMnOiAnYScsICdcXHhlNCc6ICdhJywgJ1xceGU1JzogJ2EnLFxuICAnXFx4YzcnOiAnQycsICAnXFx4ZTcnOiAnYycsXG4gICdcXHhkMCc6ICdEJywgICdcXHhmMCc6ICdkJyxcbiAgJ1xceGM4JzogJ0UnLCAgJ1xceGM5JzogJ0UnLCAnXFx4Y2EnOiAnRScsICdcXHhjYic6ICdFJyxcbiAgJ1xceGU4JzogJ2UnLCAgJ1xceGU5JzogJ2UnLCAnXFx4ZWEnOiAnZScsICdcXHhlYic6ICdlJyxcbiAgJ1xceGNjJzogJ0knLCAgJ1xceGNkJzogJ0knLCAnXFx4Y2UnOiAnSScsICdcXHhjZic6ICdJJyxcbiAgJ1xceGVjJzogJ2knLCAgJ1xceGVkJzogJ2knLCAnXFx4ZWUnOiAnaScsICdcXHhlZic6ICdpJyxcbiAgJ1xceGQxJzogJ04nLCAgJ1xceGYxJzogJ24nLFxuICAnXFx4ZDInOiAnTycsICAnXFx4ZDMnOiAnTycsICdcXHhkNCc6ICdPJywgJ1xceGQ1JzogJ08nLCAnXFx4ZDYnOiAnTycsICdcXHhkOCc6ICdPJyxcbiAgJ1xceGYyJzogJ28nLCAgJ1xceGYzJzogJ28nLCAnXFx4ZjQnOiAnbycsICdcXHhmNSc6ICdvJywgJ1xceGY2JzogJ28nLCAnXFx4ZjgnOiAnbycsXG4gICdcXHhkOSc6ICdVJywgICdcXHhkYSc6ICdVJywgJ1xceGRiJzogJ1UnLCAnXFx4ZGMnOiAnVScsXG4gICdcXHhmOSc6ICd1JywgICdcXHhmYSc6ICd1JywgJ1xceGZiJzogJ3UnLCAnXFx4ZmMnOiAndScsXG4gICdcXHhkZCc6ICdZJywgICdcXHhmZCc6ICd5JywgJ1xceGZmJzogJ3knLFxuICAnXFx4YzYnOiAnQWUnLCAnXFx4ZTYnOiAnYWUnLFxuICAnXFx4ZGUnOiAnVGgnLCAnXFx4ZmUnOiAndGgnLFxuICAnXFx4ZGYnOiAnc3MnLFxuICAvLyBMYXRpbiBFeHRlbmRlZC1BIGJsb2NrLlxuICAnXFx1MDEwMCc6ICdBJywgICdcXHUwMTAyJzogJ0EnLCAnXFx1MDEwNCc6ICdBJyxcbiAgJ1xcdTAxMDEnOiAnYScsICAnXFx1MDEwMyc6ICdhJywgJ1xcdTAxMDUnOiAnYScsXG4gICdcXHUwMTA2JzogJ0MnLCAgJ1xcdTAxMDgnOiAnQycsICdcXHUwMTBhJzogJ0MnLCAnXFx1MDEwYyc6ICdDJyxcbiAgJ1xcdTAxMDcnOiAnYycsICAnXFx1MDEwOSc6ICdjJywgJ1xcdTAxMGInOiAnYycsICdcXHUwMTBkJzogJ2MnLFxuICAnXFx1MDEwZSc6ICdEJywgICdcXHUwMTEwJzogJ0QnLCAnXFx1MDEwZic6ICdkJywgJ1xcdTAxMTEnOiAnZCcsXG4gICdcXHUwMTEyJzogJ0UnLCAgJ1xcdTAxMTQnOiAnRScsICdcXHUwMTE2JzogJ0UnLCAnXFx1MDExOCc6ICdFJywgJ1xcdTAxMWEnOiAnRScsXG4gICdcXHUwMTEzJzogJ2UnLCAgJ1xcdTAxMTUnOiAnZScsICdcXHUwMTE3JzogJ2UnLCAnXFx1MDExOSc6ICdlJywgJ1xcdTAxMWInOiAnZScsXG4gICdcXHUwMTFjJzogJ0cnLCAgJ1xcdTAxMWUnOiAnRycsICdcXHUwMTIwJzogJ0cnLCAnXFx1MDEyMic6ICdHJyxcbiAgJ1xcdTAxMWQnOiAnZycsICAnXFx1MDExZic6ICdnJywgJ1xcdTAxMjEnOiAnZycsICdcXHUwMTIzJzogJ2cnLFxuICAnXFx1MDEyNCc6ICdIJywgICdcXHUwMTI2JzogJ0gnLCAnXFx1MDEyNSc6ICdoJywgJ1xcdTAxMjcnOiAnaCcsXG4gICdcXHUwMTI4JzogJ0knLCAgJ1xcdTAxMmEnOiAnSScsICdcXHUwMTJjJzogJ0knLCAnXFx1MDEyZSc6ICdJJywgJ1xcdTAxMzAnOiAnSScsXG4gICdcXHUwMTI5JzogJ2knLCAgJ1xcdTAxMmInOiAnaScsICdcXHUwMTJkJzogJ2knLCAnXFx1MDEyZic6ICdpJywgJ1xcdTAxMzEnOiAnaScsXG4gICdcXHUwMTM0JzogJ0onLCAgJ1xcdTAxMzUnOiAnaicsXG4gICdcXHUwMTM2JzogJ0snLCAgJ1xcdTAxMzcnOiAnaycsICdcXHUwMTM4JzogJ2snLFxuICAnXFx1MDEzOSc6ICdMJywgICdcXHUwMTNiJzogJ0wnLCAnXFx1MDEzZCc6ICdMJywgJ1xcdTAxM2YnOiAnTCcsICdcXHUwMTQxJzogJ0wnLFxuICAnXFx1MDEzYSc6ICdsJywgICdcXHUwMTNjJzogJ2wnLCAnXFx1MDEzZSc6ICdsJywgJ1xcdTAxNDAnOiAnbCcsICdcXHUwMTQyJzogJ2wnLFxuICAnXFx1MDE0Myc6ICdOJywgICdcXHUwMTQ1JzogJ04nLCAnXFx1MDE0Nyc6ICdOJywgJ1xcdTAxNGEnOiAnTicsXG4gICdcXHUwMTQ0JzogJ24nLCAgJ1xcdTAxNDYnOiAnbicsICdcXHUwMTQ4JzogJ24nLCAnXFx1MDE0Yic6ICduJyxcbiAgJ1xcdTAxNGMnOiAnTycsICAnXFx1MDE0ZSc6ICdPJywgJ1xcdTAxNTAnOiAnTycsXG4gICdcXHUwMTRkJzogJ28nLCAgJ1xcdTAxNGYnOiAnbycsICdcXHUwMTUxJzogJ28nLFxuICAnXFx1MDE1NCc6ICdSJywgICdcXHUwMTU2JzogJ1InLCAnXFx1MDE1OCc6ICdSJyxcbiAgJ1xcdTAxNTUnOiAncicsICAnXFx1MDE1Nyc6ICdyJywgJ1xcdTAxNTknOiAncicsXG4gICdcXHUwMTVhJzogJ1MnLCAgJ1xcdTAxNWMnOiAnUycsICdcXHUwMTVlJzogJ1MnLCAnXFx1MDE2MCc6ICdTJyxcbiAgJ1xcdTAxNWInOiAncycsICAnXFx1MDE1ZCc6ICdzJywgJ1xcdTAxNWYnOiAncycsICdcXHUwMTYxJzogJ3MnLFxuICAnXFx1MDE2Mic6ICdUJywgICdcXHUwMTY0JzogJ1QnLCAnXFx1MDE2Nic6ICdUJyxcbiAgJ1xcdTAxNjMnOiAndCcsICAnXFx1MDE2NSc6ICd0JywgJ1xcdTAxNjcnOiAndCcsXG4gICdcXHUwMTY4JzogJ1UnLCAgJ1xcdTAxNmEnOiAnVScsICdcXHUwMTZjJzogJ1UnLCAnXFx1MDE2ZSc6ICdVJywgJ1xcdTAxNzAnOiAnVScsICdcXHUwMTcyJzogJ1UnLFxuICAnXFx1MDE2OSc6ICd1JywgICdcXHUwMTZiJzogJ3UnLCAnXFx1MDE2ZCc6ICd1JywgJ1xcdTAxNmYnOiAndScsICdcXHUwMTcxJzogJ3UnLCAnXFx1MDE3Myc6ICd1JyxcbiAgJ1xcdTAxNzQnOiAnVycsICAnXFx1MDE3NSc6ICd3JyxcbiAgJ1xcdTAxNzYnOiAnWScsICAnXFx1MDE3Nyc6ICd5JywgJ1xcdTAxNzgnOiAnWScsXG4gICdcXHUwMTc5JzogJ1onLCAgJ1xcdTAxN2InOiAnWicsICdcXHUwMTdkJzogJ1onLFxuICAnXFx1MDE3YSc6ICd6JywgICdcXHUwMTdjJzogJ3onLCAnXFx1MDE3ZSc6ICd6JyxcbiAgJ1xcdTAxMzInOiAnSUonLCAnXFx1MDEzMyc6ICdpaicsXG4gICdcXHUwMTUyJzogJ09lJywgJ1xcdTAxNTMnOiAnb2UnLFxuICAnXFx1MDE0OSc6IFwiJ25cIiwgJ1xcdTAxN2YnOiAncydcbn07XG5cbi8qKlxuICogVXNlZCBieSBgXy5kZWJ1cnJgIHRvIGNvbnZlcnQgTGF0aW4tMSBTdXBwbGVtZW50IGFuZCBMYXRpbiBFeHRlbmRlZC1BXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXR0ZXIgVGhlIG1hdGNoZWQgbGV0dGVyIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIGxldHRlci5cbiAqL1xudmFyIGRlYnVyckxldHRlciA9IGJhc2VQcm9wZXJ0eU9mKGRlYnVycmVkTGV0dGVycyk7XG5cbnZhciBkZWJ1cnJMZXR0ZXIkMSA9IGRlYnVyckxldHRlcjtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggTGF0aW4gVW5pY29kZSBsZXR0ZXJzIChleGNsdWRpbmcgbWF0aGVtYXRpY2FsIG9wZXJhdG9ycykuICovXG52YXIgcmVMYXRpbiA9IC9bXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxceGZmXFx1MDEwMC1cXHUwMTdmXS9nO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNDb21ib01hcmtzUmFuZ2UkMSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UkMSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlJDEgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlJDEgPSByc0NvbWJvTWFya3NSYW5nZSQxICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlJDEgKyByc0NvbWJvU3ltYm9sc1JhbmdlJDE7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0NvbWJvJDEgPSAnWycgKyByc0NvbWJvUmFuZ2UkMSArICddJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykgYW5kXG4gKiBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIGZvciBzeW1ib2xzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3NfZm9yX1N5bWJvbHMpLlxuICovXG52YXIgcmVDb21ib01hcmsgPSBSZWdFeHAocnNDb21ibyQxLCAnZycpO1xuXG4vKipcbiAqIERlYnVycnMgYHN0cmluZ2AgYnkgY29udmVydGluZ1xuICogW0xhdGluLTEgU3VwcGxlbWVudF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW4tMV9TdXBwbGVtZW50XyhVbmljb2RlX2Jsb2NrKSNDaGFyYWN0ZXJfdGFibGUpXG4gKiBhbmQgW0xhdGluIEV4dGVuZGVkLUFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluX0V4dGVuZGVkLUEpXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMgYW5kIHJlbW92aW5nXG4gKiBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWJ1cnIoJ2TDqWrDoCB2dScpO1xuICogLy8gPT4gJ2RlamEgdnUnXG4gKi9cbmZ1bmN0aW9uIGRlYnVycihzdHJpbmcpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZyAmJiBzdHJpbmcucmVwbGFjZShyZUxhdGluLCBkZWJ1cnJMZXR0ZXIkMSkucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG4vKiogVXNlZCB0byBtYXRjaCB3b3JkcyBjb21wb3NlZCBvZiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycy4gKi9cbnZhciByZUFzY2lpV29yZCA9IC9bXlxceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceDdmXSsvZztcblxuLyoqXG4gKiBTcGxpdHMgYW4gQVNDSUkgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiBhc2NpaVdvcmRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlQXNjaWlXb3JkKSB8fCBbXTtcbn1cblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3MgdGhhdCBuZWVkIGEgbW9yZSByb2J1c3QgcmVnZXhwIHRvIG1hdGNoIHdvcmRzLiAqL1xudmFyIHJlSGFzVW5pY29kZVdvcmQgPSAvW2Etel1bQS1aXXxbQS1aXXsyfVthLXpdfFswLTldW2EtekEtWl18W2EtekEtWl1bMC05XXxbXmEtekEtWjAtOSBdLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgYSB3b3JkIGNvbXBvc2VkIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSB3b3JkIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGVXb3JkKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlV29yZC50ZXN0KHN0cmluZyk7XG59XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc0RpbmdiYXRSYW5nZSA9ICdcXFxcdTI3MDAtXFxcXHUyN2JmJyxcbiAgICByc0xvd2VyUmFuZ2UgPSAnYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmJyxcbiAgICByc01hdGhPcFJhbmdlID0gJ1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjcnLFxuICAgIHJzTm9uQ2hhclJhbmdlID0gJ1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZicsXG4gICAgcnNQdW5jdHVhdGlvblJhbmdlID0gJ1xcXFx1MjAwMC1cXFxcdTIwNmYnLFxuICAgIHJzU3BhY2VSYW5nZSA9ICcgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMCcsXG4gICAgcnNVcHBlclJhbmdlID0gJ0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZScsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnLFxuICAgIHJzQnJlYWtSYW5nZSA9IHJzTWF0aE9wUmFuZ2UgKyByc05vbkNoYXJSYW5nZSArIHJzUHVuY3R1YXRpb25SYW5nZSArIHJzU3BhY2VSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyQxID0gXCJbJ1xcdTIwMTldXCIsXG4gICAgcnNCcmVhayA9ICdbJyArIHJzQnJlYWtSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRGlnaXRzID0gJ1xcXFxkKycsXG4gICAgcnNEaW5nYmF0ID0gJ1snICsgcnNEaW5nYmF0UmFuZ2UgKyAnXScsXG4gICAgcnNMb3dlciA9ICdbJyArIHJzTG93ZXJSYW5nZSArICddJyxcbiAgICByc01pc2MgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArIHJzQnJlYWtSYW5nZSArIHJzRGlnaXRzICsgcnNEaW5nYmF0UmFuZ2UgKyByc0xvd2VyUmFuZ2UgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzVXBwZXIgPSAnWycgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcnNNaXNjTG93ZXIgPSAnKD86JyArIHJzTG93ZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNNaXNjVXBwZXIgPSAnKD86JyArIHJzVXBwZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNPcHRDb250ckxvd2VyID0gJyg/OicgKyByc0Fwb3MkMSArICcoPzpkfGxsfG18cmV8c3x0fHZlKSk/JyxcbiAgICByc09wdENvbnRyVXBwZXIgPSAnKD86JyArIHJzQXBvcyQxICsgJyg/OkR8TEx8TXxSRXxTfFR8VkUpKT8nLFxuICAgIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNPcmRMb3dlciA9ICdcXFxcZCooPzoxc3R8Mm5kfDNyZHwoPyFbMTIzXSlcXFxcZHRoKSg/PVxcXFxifFtBLVpfXSknLFxuICAgIHJzT3JkVXBwZXIgPSAnXFxcXGQqKD86MVNUfDJORHwzUkR8KD8hWzEyM10pXFxcXGRUSCkoPz1cXFxcYnxbYS16X10pJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNFbW9qaSA9ICcoPzonICsgW3JzRGluZ2JhdCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNTZXE7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGNvbXBsZXggb3IgY29tcG91bmQgd29yZHMuICovXG52YXIgcmVVbmljb2RlV29yZCA9IFJlZ0V4cChbXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzTWlzY1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciArIHJzTWlzY0xvd2VyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlciArICc/JyArIHJzTWlzY0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyLFxuICByc1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyLFxuICByc09yZFVwcGVyLFxuICByc09yZExvd2VyLFxuICByc0RpZ2l0cyxcbiAgcnNFbW9qaVxuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKlxuICogU3BsaXRzIGEgVW5pY29kZSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGVXb3JkKSB8fCBbXTtcbn1cblxuLyoqXG4gKiBTcGxpdHMgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gW3BhdHRlcm5dIFRoZSBwYXR0ZXJuIHRvIG1hdGNoIHdvcmRzLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnXVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJywgL1teLCBdKy9nKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAnJicsICdwZWJibGVzJ11cbiAqL1xuZnVuY3Rpb24gd29yZHMoc3RyaW5nLCBwYXR0ZXJuLCBndWFyZCkge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBwYXR0ZXJuID0gZ3VhcmQgPyB1bmRlZmluZWQgOiBwYXR0ZXJuO1xuXG4gIGlmIChwYXR0ZXJuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSA/IHVuaWNvZGVXb3JkcyhzdHJpbmcpIDogYXNjaWlXb3JkcyhzdHJpbmcpO1xuICB9XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybikgfHwgW107XG59XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIjtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYXBvc3Ryb3BoZXMuICovXG52YXIgcmVBcG9zID0gUmVnRXhwKHJzQXBvcywgJ2cnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5jYW1lbENhc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY29tYmluZSBlYWNoIHdvcmQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb21wb3VuZGVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDb21wb3VuZGVyKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gYXJyYXlSZWR1Y2Uod29yZHMoZGVidXJyKHN0cmluZykucmVwbGFjZShyZUFwb3MsICcnKSksIGNhbGxiYWNrLCAnJyk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG9cbiAqIFtzbmFrZSBjYXNlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TbmFrZV9jYXNlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc25ha2UgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnNuYWtlQ2FzZSgnRm9vIEJhcicpO1xuICogLy8gPT4gJ2Zvb19iYXInXG4gKlxuICogXy5zbmFrZUNhc2UoJ2Zvb0JhcicpO1xuICogLy8gPT4gJ2Zvb19iYXInXG4gKlxuICogXy5zbmFrZUNhc2UoJy0tRk9PLUJBUi0tJyk7XG4gKiAvLyA9PiAnZm9vX2JhcidcbiAqL1xudmFyIHNuYWtlQ2FzZSA9IGNyZWF0ZUNvbXBvdW5kZXIoZnVuY3Rpb24ocmVzdWx0LCB3b3JkLCBpbmRleCkge1xuICByZXR1cm4gcmVzdWx0ICsgKGluZGV4ID8gJ18nIDogJycpICsgd29yZC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBzbmFrZUNhc2UkMSA9IHNuYWtlQ2FzZTtcblxudmFyIHZhbGlkQXV0aG9yaXphdGlvblBhcmFtcyA9IFtcbiAgICAnYWNyX3ZhbHVlcycsXG4gICAgJ2F1ZGllbmNlJyxcbiAgICAnY2xhaW1zJyxcbiAgICAnY2xhaW1zX2xvY2FsZXMnLFxuICAgICdjbGllbnRfaWQnLFxuICAgICdjbGllbnRfc2VjcmV0JyxcbiAgICAnY29kZV9jaGFsbGVuZ2UnLFxuICAgICdjb2RlX2NoYWxsZW5nZV9tZXRob2QnLFxuICAgICdkb21haW5faGludCcsXG4gICAgJ2Rpc3BsYXknLFxuICAgICdpZF90b2tlbl9oaW50JyxcbiAgICAnbG9naW5faGludCcsXG4gICAgJ2xvZ291dF91cmknLFxuICAgICdtYXhfYWdlJyxcbiAgICAnbm9uY2UnLFxuICAgICdwb3N0X2xvZ291dF9yZWRpcmVjdF91cmknLFxuICAgICdwcm9tcHQnLFxuICAgICdyZWRpcmVjdF91cmknLFxuICAgICdyZWdpc3RyYXRpb24nLFxuICAgICdyZXF1ZXN0JyxcbiAgICAncmVxdWVzdF91cmknLFxuICAgICdyZXNwb25zZV9tb2RlJyxcbiAgICAncmVzcG9uc2VfdHlwZScsXG4gICAgJ3JldHVybl90bycsXG4gICAgJ3Njb3BlJyxcbiAgICAnc3RhdGUnLFxuICAgICd1aV9sb2NhbGVzJyxcbiAgICAndnRyJyxcbl07XG5jbGFzcyBPQXV0aFBhY2tlciB7XG4gICAgc3RhdGljIHBhY2tQYXJhbXMob3B0aW9ucykge1xuICAgICAgICBjb25zdCB2YWxpZFBhcmFtcyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zW2tleV0pXG4gICAgICAgICAgICAgICAgY29udGludWU7IC8vIHNraXAgbnVsbC91bmRlZmluZWQvZW1wdHkgc3RyaW5nIHZhbHVlc1xuICAgICAgICAgICAgY29uc3Qgc25ha2VkS2V5ID0gc25ha2VDYXNlJDEoa2V5KTtcbiAgICAgICAgICAgIGlmICh2YWxpZEF1dGhvcml6YXRpb25QYXJhbXMuaW5jbHVkZXMoc25ha2VkS2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbGlkUGFyYW1zW3NuYWtlZEtleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnaW5nLmRlYnVnKCdPQXV0aFBhY2tlcjo6cGFja1BhcmFtcycsICdhZGRpbmcgYWRkaXRpb25hbCBwYXJhbTonLCBrZXkpO1xuICAgICAgICAgICAgICAgIHZhbGlkUGFyYW1zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkUGFyYW1zO1xuICAgIH1cbn1cblxuY2xhc3MgSW9uaWNBdXRoMENvbmZpZyBleHRlbmRzIElvbmljQXV0aENvbmZpZyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMuZGlzY292ZXJ5VXJsID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgXCJJb25pY0F1dGhPcHRpb25zLmRpc2NvdmVyeVVybCBtdXN0IGJlIGRlZmluZWQgZm9yIEF1dGgwLCBpdCB1c3VhbGx5IGlzICdodHRwczovL1lPVVJfRE9NQUlOLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJ1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGxvYWRMb2NhdGlvbnMoKSB7XG4gICAgICAgIGF3YWl0IHN1cGVyLmxvYWRMb2NhdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb25zWydsb2dvdXRfZW5kcG9pbnQnXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25zWydsb2dvdXRfZW5kcG9pbnQnXSA9IHRoaXMubG9jYXRpb25zWydpc3N1ZXInXSArICdsb2dvdXQnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldEF1dGhvcml6ZVVybChub25jZSwgY2hhbGxlbmdlLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZExvY2F0aW9ucygpO1xuICAgICAgICBjb25zdCBiYXNlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwYXJhbWV0ZXJzKSwgeyBjbGllbnRJZDogdGhpcy5vcHRpb25zLmNsaWVudElELCByZWRpcmVjdFVyaTogdGhpcy5vcHRpb25zLnJlZGlyZWN0VXJpLCBhdWRpZW5jZTogdGhpcy5vcHRpb25zLmF1ZGllbmNlLCBub25jZTogbm9uY2UsIHN0YXRlOiBub25jZSwgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcbiAgICAgICAgY29uc3QgUEtDRSA9IHtcbiAgICAgICAgICAgIGNvZGVfY2hhbGxlbmdlX21ldGhvZDogJ1MyNTYnLFxuICAgICAgICAgICAgY29kZV9jaGFsbGVuZ2U6IGNoYWxsZW5nZSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2NvZGUnLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBsYXRmb3JtICE9PSAnd2ViJykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYmFzZSksIFBLQ0UpO1xuICAgICAgICAgICAgcmV0dXJuIFVybEhlbHBlci5idWlsZFVybCh0aGlzLmxvY2F0aW9uc1snYXV0aG9yaXphdGlvbl9lbmRwb2ludCddLCBPQXV0aFBhY2tlci5wYWNrUGFyYW1zKG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHdlYiBjYXNlXG4gICAgICAgICAgICBjb25zdCB3ZWJCYXNlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBiYXNlKSwgeyBjbGllbnRfc2VjcmV0OiB0aGlzLm9wdGlvbnMuY2xpZW50U2VjcmV0IH0pO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2ViQXV0aEZsb3cgJiYgdGhpcy5vcHRpb25zLndlYkF1dGhGbG93ID09PSAnUEtDRScpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3ZWJCYXNlKSwgUEtDRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3ZWJCYXNlKSwgeyByZXNwb25zZV90eXBlOiAnaWRfdG9rZW4gdG9rZW4nLCByZXNwb25zZV9tb2RlOiAnZnJhZ21lbnQnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFVybEhlbHBlci5idWlsZFVybCh0aGlzLmxvY2F0aW9uc1snYXV0aG9yaXphdGlvbl9lbmRwb2ludCddLCBPQXV0aFBhY2tlci5wYWNrUGFyYW1zKG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRMb2dvdXRVcmwoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZExvY2F0aW9ucygpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY2xpZW50SWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJRCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IE9BdXRoUGFja2VyLnBhY2tQYXJhbXMob3B0aW9ucyk7XG4gICAgICAgIHBhcmFtc1sncmV0dXJuVG8nXSA9IHRoaXMub3B0aW9ucy5sb2dvdXRVcmw7XG4gICAgICAgIGxldCBsb2dvdXRVcmwgPSBVcmxIZWxwZXIuYnVpbGRVcmwodGhpcy5sb2NhdGlvbnNbJ2xvZ291dF9lbmRwb2ludCddLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gbG9nb3V0VXJsO1xuICAgIH1cbiAgICBhc3luYyBnZXRUb2tlblVybCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkTG9jYXRpb25zKCk7XG4gICAgICAgIHJldHVybiB7IHVybDogdGhpcy5sb2NhdGlvbnNbJ3Rva2VuX2VuZHBvaW50J10sIGhlYWRlcnM6IHt9LCBwYXlsb2FkOiB7fSB9O1xuICAgIH1cbn1cblxuY2xhc3MgSW9uaWNBenVyZUNvbmZpZyBleHRlbmRzIElvbmljQXV0aENvbmZpZyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5kZWZhdWx0RGlzY292ZXJ5VXJsID1cbiAgICAgICAgICAgICdodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uL3YyLjAvLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xuICAgIH1cbiAgICBhc3luYyBnZXRBdXRob3JpemVVcmwobm9uY2UsIGNoYWxsZW5nZSwgcGFyYW1ldGVycykge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRMb2NhdGlvbnMoKTtcbiAgICAgICAgY29uc3QgYmFzZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1ldGVycyksIHsgY2xpZW50SWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJRCwgcmVkaXJlY3RVcmk6IHRoaXMub3B0aW9ucy5yZWRpcmVjdFVyaSwgYXVkaWVuY2U6IHRoaXMub3B0aW9ucy5hdWRpZW5jZSwgbm9uY2U6IG5vbmNlLCBzdGF0ZTogbm9uY2UsIHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGxhdGZvcm0gIT0gJ3dlYicpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGJhc2UpLCB7IGNvZGVfY2hhbGxlbmdlX21ldGhvZDogJ1MyNTYnLCBjb2RlX2NoYWxsZW5nZTogY2hhbGxlbmdlLCByZXNwb25zZVR5cGU6ICdjb2RlJyB9KTtcbiAgICAgICAgICAgIHJldHVybiBVcmxIZWxwZXIuYnVpbGRVcmwodGhpcy5sb2NhdGlvbnNbJ2F1dGhvcml6YXRpb25fZW5kcG9pbnQnXSwgT0F1dGhQYWNrZXIucGFja1BhcmFtcyhvcHRpb25zKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZWIgY2FzZVxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2ViQXV0aEZsb3cgJiYgdGhpcy5vcHRpb25zLndlYkF1dGhGbG93ID09PSAnUEtDRScpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBiYXNlKSwgeyBjb2RlX2NoYWxsZW5nZV9tZXRob2Q6ICdTMjU2JywgY29kZV9jaGFsbGVuZ2U6IGNoYWxsZW5nZSwgcmVzcG9uc2VUeXBlOiAnY29kZScgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBiYXNlKSwgeyByZXNwb25zZV90eXBlOiAnaWRfdG9rZW4gdG9rZW4nLCByZXNwb25zZV9tb2RlOiAnZnJhZ21lbnQnLCBjbGllbnRfc2VjcmV0OiB0aGlzLm9wdGlvbnMuY2xpZW50U2VjcmV0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFVybEhlbHBlci5idWlsZFVybCh0aGlzLmxvY2F0aW9uc1snYXV0aG9yaXphdGlvbl9lbmRwb2ludCddLCBPQXV0aFBhY2tlci5wYWNrUGFyYW1zKG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRMb2dvdXRVcmwoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZExvY2F0aW9ucygpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY2xpZW50SWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJRCxcbiAgICAgICAgICAgIHJldHVyblRvOiB0aGlzLm9wdGlvbnMucmVkaXJlY3RVcmksXG4gICAgICAgICAgICByZWRpcmVjdFVyaTogdGhpcy5vcHRpb25zLnJlZGlyZWN0VXJpLFxuICAgICAgICAgICAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiB0aGlzLm9wdGlvbnMubG9nb3V0VXJsLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVXJsSGVscGVyLmJ1aWxkVXJsKHRoaXMubG9jYXRpb25zWydlbmRfc2Vzc2lvbl9lbmRwb2ludCddLCBPQXV0aFBhY2tlci5wYWNrUGFyYW1zKG9wdGlvbnMpKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0VG9rZW5VcmwoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZExvY2F0aW9ucygpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJsOiB0aGlzLmxvY2F0aW9uc1sndG9rZW5fZW5kcG9pbnQnXSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF5bG9hZDogeyBzY29wZTogU3RyaW5nKHRoaXMub3B0aW9ucy5zY29wZSkgfSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNsYXNzIElvbmljQ29nbml0b0NvbmZpZyBleHRlbmRzIElvbmljQXV0aENvbmZpZyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgLy8gdmFsaWRhdGUgdGhhdCBjbGllbnRfaWQgYW5kIGNsaWVudF9zZWNyZXQgYXJlIHNldFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2NvdmVyeVVybCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IFwiSW9uaWNBdXRoT3B0aW9ucy5kaXNjb3ZlcnlVcmwgbXVzdCBiZSBkZWZpbmVkIGZvciBDb2duaXRvLCBpdCB1c3VhbGx5IGlzICdodHRwczovL2NvZ25pdG8taWRwLlJFR0lPTi5hbWF6b25hd3MuY29tL1VTRVItUE9PTC1JRCdcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBsb2FkTG9jYXRpb25zKCkge1xuICAgICAgICBhd2FpdCBzdXBlci5sb2FkTG9jYXRpb25zKCk7XG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uc1snbG9nb3V0X2VuZHBvaW50J10gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBhdXRoX2VuZHBvaW50ID0gdGhpcy5sb2NhdGlvbnNbJ2F1dGhvcml6YXRpb25fZW5kcG9pbnQnXSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYXV0aF9lbmRwb2ludCk7XG4gICAgICAgICAgICB1cmwucGF0aG5hbWUgPSAnbG9nb3V0JztcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25zWydsb2dvdXRfZW5kcG9pbnQnXSA9IHVybC5ocmVmO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldEF1dGhvcml6ZVVybChub25jZSwgY2hhbGxlbmdlLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZExvY2F0aW9ucygpO1xuICAgICAgICBjb25zdCBiYXNlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwYXJhbWV0ZXJzKSwgeyBjbGllbnRJZDogdGhpcy5vcHRpb25zLmNsaWVudElELCByZWRpcmVjdFVyaTogdGhpcy5vcHRpb25zLnJlZGlyZWN0VXJpLCBhdWRpZW5jZTogdGhpcy5vcHRpb25zLmF1ZGllbmNlLCBub25jZTogbm9uY2UsIHN0YXRlOiBub25jZSwgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcbiAgICAgICAgY29uc3QgUEtDRSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYmFzZSksIHsgY29kZV9jaGFsbGVuZ2VfbWV0aG9kOiAnUzI1NicsIGNvZGVfY2hhbGxlbmdlOiBjaGFsbGVuZ2UsIHJlc3BvbnNlVHlwZTogJ2NvZGUnIH0pO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBsYXRmb3JtICE9PSAnd2ViJykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIFBLQ0UpO1xuICAgICAgICAgICAgcmV0dXJuIFVybEhlbHBlci5idWlsZFVybCh0aGlzLmxvY2F0aW9uc1snYXV0aG9yaXphdGlvbl9lbmRwb2ludCddLCBPQXV0aFBhY2tlci5wYWNrUGFyYW1zKG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHdlYiBjYXNlXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy53ZWJBdXRoRmxvdyAmJiB0aGlzLm9wdGlvbnMud2ViQXV0aEZsb3cgPT09ICdQS0NFJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBQS0NFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGJhc2UpLCB7IHJlc3BvbnNlX3R5cGU6ICd0b2tlbicsIHJlc3BvbnNlX21vZGU6ICdmcmFnbWVudCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gVXJsSGVscGVyLmJ1aWxkVXJsKHRoaXMubG9jYXRpb25zWydhdXRob3JpemF0aW9uX2VuZHBvaW50J10sIE9BdXRoUGFja2VyLnBhY2tQYXJhbXMob3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldExvZ291dFVybCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkTG9jYXRpb25zKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjbGllbnRJZDogdGhpcy5vcHRpb25zLmNsaWVudElELFxuICAgICAgICAgICAgbG9nb3V0VXJpOiB0aGlzLm9wdGlvbnMubG9nb3V0VXJsLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVXJsSGVscGVyLmJ1aWxkVXJsKHRoaXMubG9jYXRpb25zWydsb2dvdXRfZW5kcG9pbnQnXSwgT0F1dGhQYWNrZXIucGFja1BhcmFtcyhvcHRpb25zKSk7XG4gICAgfVxuICAgIGFzeW5jIGdldFRva2VuVXJsKCkge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRMb2NhdGlvbnMoKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNsaWVudFNlY3JldCkge1xuICAgICAgICAgICAgY29uc3QgYXV0aF9oZWFkZXIgPSBiYXNlNjRFbmNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGAke3RoaXMub3B0aW9ucy5jbGllbnRJRH06JHt0aGlzLm9wdGlvbnMuY2xpZW50U2VjcmV0fWApKTtcbiAgICAgICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCYXNpYyAke2F1dGhfaGVhZGVyfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXJsOiB0aGlzLmxvY2F0aW9uc1sndG9rZW5fZW5kcG9pbnQnXSwgaGVhZGVycywgcGF5bG9hZDoge30gfTtcbiAgICB9XG59XG5cbmNsYXNzIElvbmljR2VuZXJhbEF1dGhDb25maWcgZXh0ZW5kcyBJb25pY0F1dGhDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChvcHRpb25zLmRpc2NvdmVyeVVybCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IFwiSW9uaWNBdXRoT3B0aW9ucy5kaXNjb3ZlcnlVcmwgbXVzdCBiZSBkZWZpbmVkLCBpdCB1c3VhbGx5IGlzICdodHRwczovL1lPVVJfRE9NQUlOLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJ1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGxvYWRMb2NhdGlvbnMoKSB7XG4gICAgICAgIGF3YWl0IHN1cGVyLmxvYWRMb2NhdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb25zWydsb2dvdXRfZW5kcG9pbnQnXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzc3VlciA9IHRoaXMubG9jYXRpb25zWydpc3N1ZXInXTtcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25zWydsb2dvdXRfZW5kcG9pbnQnXSA9IGlzc3Vlci5lbmRzV2l0aCgnLycpXG4gICAgICAgICAgICAgICAgPyBgJHtpc3N1ZXJ9bG9nb3V0YFxuICAgICAgICAgICAgICAgIDogYCR7aXNzdWVyfS9sb2dvdXRgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldEF1dGhvcml6ZVVybChub25jZSwgY2hhbGxlbmdlLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZExvY2F0aW9ucygpO1xuICAgICAgICBjb25zdCBiYXNlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwYXJhbWV0ZXJzKSwgeyBjbGllbnRJZDogdGhpcy5vcHRpb25zLmNsaWVudElELCByZWRpcmVjdFVyaTogdGhpcy5vcHRpb25zLnJlZGlyZWN0VXJpLCBhdWRpZW5jZTogdGhpcy5vcHRpb25zLmF1ZGllbmNlLCBub25jZTogbm9uY2UsIHN0YXRlOiBub25jZSwgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcbiAgICAgICAgY29uc3QgUEtDRSA9IHtcbiAgICAgICAgICAgIGNvZGVfY2hhbGxlbmdlX21ldGhvZDogJ1MyNTYnLFxuICAgICAgICAgICAgY29kZV9jaGFsbGVuZ2U6IGNoYWxsZW5nZSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2NvZGUnLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBsYXRmb3JtICE9PSAnd2ViJykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYmFzZSksIFBLQ0UpO1xuICAgICAgICAgICAgcmV0dXJuIFVybEhlbHBlci5idWlsZFVybCh0aGlzLmxvY2F0aW9uc1snYXV0aG9yaXphdGlvbl9lbmRwb2ludCddLCBPQXV0aFBhY2tlci5wYWNrUGFyYW1zKG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHdlYiBjYXNlXG4gICAgICAgICAgICBjb25zdCB3ZWJCYXNlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBiYXNlKSwgeyBjbGllbnRfc2VjcmV0OiB0aGlzLm9wdGlvbnMuY2xpZW50U2VjcmV0IH0pO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2ViQXV0aEZsb3cgJiYgdGhpcy5vcHRpb25zLndlYkF1dGhGbG93ID09PSAnUEtDRScpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3ZWJCYXNlKSwgUEtDRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3ZWJCYXNlKSwgeyByZXNwb25zZV90eXBlOiAnaWRfdG9rZW4gdG9rZW4nLCByZXNwb25zZV9tb2RlOiAnZnJhZ21lbnQnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFVybEhlbHBlci5idWlsZFVybCh0aGlzLmxvY2F0aW9uc1snYXV0aG9yaXphdGlvbl9lbmRwb2ludCddLCBPQXV0aFBhY2tlci5wYWNrUGFyYW1zKG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRMb2dvdXRVcmwoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZExvY2F0aW9ucygpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY2xpZW50SWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJRCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IE9BdXRoUGFja2VyLnBhY2tQYXJhbXMob3B0aW9ucyk7XG4gICAgICAgIHBhcmFtc1sncmV0dXJuVG8nXSA9IHRoaXMub3B0aW9ucy5sb2dvdXRVcmw7XG4gICAgICAgIGxldCBsb2dvdXRVcmwgPSBVcmxIZWxwZXIuYnVpbGRVcmwodGhpcy5sb2NhdGlvbnNbJ2VuZF9zZXNzaW9uX2VuZHBvaW50J10gfHwgdGhpcy5sb2NhdGlvbnNbJ2xvZ291dF9lbmRwb2ludCddLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gbG9nb3V0VXJsO1xuICAgIH1cbiAgICBhc3luYyBnZXRUb2tlblVybCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkTG9jYXRpb25zKCk7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxDb25maWcgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGxldCBwYXlsb2FkID0ge307XG4gICAgICAgIC8vIGRlZmF1bHRzIHRvIHRydWVcbiAgICAgICAgaWYgKGdlbmVyYWxDb25maWcuYWx3YXlzU2VuZENsaWVudFNlY3JldE9uTG9naW4gIT09IGZhbHNlICYmICEhZ2VuZXJhbENvbmZpZy5jbGllbnRTZWNyZXQpIHtcbiAgICAgICAgICAgIHBheWxvYWQgPSB7IGNsaWVudF9zZWNyZXQ6IGdlbmVyYWxDb25maWcuY2xpZW50U2VjcmV0IH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVybDogdGhpcy5sb2NhdGlvbnNbJ3Rva2VuX2VuZHBvaW50J10sXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jbGFzcyBJb25pY1NhbGVzRm9yY2VBdXRoQ29uZmlnIGV4dGVuZHMgSW9uaWNHZW5lcmFsQXV0aENvbmZpZyB7XG4gICAgLy8gVGhlIG9ubHkgdW5pcXVlIHNhbGVzZm9yY2UgcXVpcmsgaXMgdGhhdCB0aGUgY2hhbGxlbmdlL3ZlcmlmaWVyIGNhbiBvbmx5IGNvbnNpc3Qgb2YgaGV4aWRlY2ltYWwgY2hhcnNcbiAgICBnZW5lcmF0ZUNoYWxsZW5nZUFuZFZlcmlmaWVyKCkge1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGVDaGFsbGVuZ2VBbmRWZXJpZmllcih0cnVlKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0TG9nb3V0VXJsKCkge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRMb2NhdGlvbnMoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNsaWVudElkOiB0aGlzLm9wdGlvbnMuY2xpZW50SUQsXG4gICAgICAgICAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6IHRoaXMub3B0aW9ucy5sb2dvdXRVcmwsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBVcmxIZWxwZXIuYnVpbGRVcmwodGhpcy5sb2NhdGlvbnNbJ2VuZF9zZXNzaW9uX2VuZHBvaW50J10sIE9BdXRoUGFja2VyLnBhY2tQYXJhbXMob3B0aW9ucykpO1xuICAgIH1cbn1cblxuY2xhc3MgSW9uaWNQaW5nQXV0aENvbmZpZyBleHRlbmRzIElvbmljR2VuZXJhbEF1dGhDb25maWcge1xuICAgIGFzeW5jIGdldExvZ291dFVybCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkTG9jYXRpb25zKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjbGllbnRJZDogdGhpcy5vcHRpb25zLmNsaWVudElELFxuICAgICAgICAgICAgcmVkaXJlY3RVcmk6IHRoaXMub3B0aW9ucy5yZWRpcmVjdFVyaSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFVybEhlbHBlci5idWlsZFVybCh0aGlzLmxvY2F0aW9uc1sncGluZ19lbmRfc2Vzc2lvbl9lbmRwb2ludCddLCBPQXV0aFBhY2tlci5wYWNrUGFyYW1zKG9wdGlvbnMpKTtcbiAgICB9XG59XG5cbmNsYXNzIElvbmljT25lTG9naW5Db25maWcgZXh0ZW5kcyBJb25pY0dlbmVyYWxBdXRoQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBvbkdldFJhd0lkVG9rZW4pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMub25HZXRSYXdJZFRva2VuID0gb25HZXRSYXdJZFRva2VuO1xuICAgIH1cbiAgICBhc3luYyBnZXRMb2dvdXRVcmwoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZExvY2F0aW9ucygpO1xuICAgICAgICBsZXQgdG9rZW47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0b2tlbiA9IGF3YWl0IHRoaXMub25HZXRSYXdJZFRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlcy5MT0dPVVRfVU5BQkxFX1RPX1JFVFJJRVZFX1RPS0VOKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiB0aGlzLm9wdGlvbnMubG9nb3V0VXJsLFxuICAgICAgICAgICAgaWRUb2tlbkhpbnQ6IHRva2VuLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVXJsSGVscGVyLmJ1aWxkVXJsKHRoaXMubG9jYXRpb25zWydlbmRfc2Vzc2lvbl9lbmRwb2ludCddLCBPQXV0aFBhY2tlci5wYWNrUGFyYW1zKG9wdGlvbnMpKTtcbiAgICB9XG59XG5cbmNsYXNzIElvbmljT2t0YUF1dGhDb25maWcgZXh0ZW5kcyBJb25pY0dlbmVyYWxBdXRoQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBvbkdldFJhd0lkVG9rZW4pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMub25HZXRSYXdJZFRva2VuID0gb25HZXRSYXdJZFRva2VuO1xuICAgIH1cbiAgICAvLyBPS1RBIGRvZXNuJ3QgaGF2ZSBhIGxvZ291dF9lbmRwb2ludCBpbiB0aGVpciBjb25maWcsIHJhdGhlciB0aGV5IHVzZSBlbmRfc2Vzc2lvbl9lbmRwb2ludFxuICAgIGFzeW5jIGdldExvZ291dFVybCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkTG9jYXRpb25zKCk7XG4gICAgICAgIGxldCB0b2tlbjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRva2VuID0gYXdhaXQgdGhpcy5vbkdldFJhd0lkVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLkxPR09VVF9VTkFCTEVfVE9fUkVUUklFVkVfVE9LRU4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBpZFRva2VuSGludDogdG9rZW4sXG4gICAgICAgICAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6IHRoaXMub3B0aW9ucy5sb2dvdXRVcmwsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBVcmxIZWxwZXIuYnVpbGRVcmwodGhpcy5sb2NhdGlvbnNbJ2VuZF9zZXNzaW9uX2VuZHBvaW50J10sIE9BdXRoUGFja2VyLnBhY2tQYXJhbXMob3B0aW9ucykpO1xuICAgIH1cbn1cblxuY2xhc3MgSWRlbnRpdHlTZXJ2ZXJBdXRoQ29uZmlnIGV4dGVuZHMgSW9uaWNHZW5lcmFsQXV0aENvbmZpZyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgb25HZXRSYXdJZFRva2VuKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9uR2V0UmF3SWRUb2tlbiA9IG9uR2V0UmF3SWRUb2tlbjtcbiAgICB9XG4gICAgLy8gSWRlbnRpdHlTZXJ2ZXIgZG9lc24ndCBoYXZlIGEgbG9nb3V0X2VuZHBvaW50IGluIHRoZWlyIGNvbmZpZywgcmF0aGVyIHRoZXkgdXNlIGVuZF9zZXNzaW9uX2VuZHBvaW50XG4gICAgYXN5bmMgZ2V0TG9nb3V0VXJsKCkge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRMb2NhdGlvbnMoKTtcbiAgICAgICAgbGV0IHRva2VuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdG9rZW4gPSBhd2FpdCB0aGlzLm9uR2V0UmF3SWRUb2tlbigpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuTE9HT1VUX1VOQUJMRV9UT19SRVRSSUVWRV9UT0tFTik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGlkVG9rZW5IaW50OiB0b2tlbixcbiAgICAgICAgICAgIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogdGhpcy5vcHRpb25zLmxvZ291dFVybCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFVybEhlbHBlci5idWlsZFVybCh0aGlzLmxvY2F0aW9uc1snZW5kX3Nlc3Npb25fZW5kcG9pbnQnXSwgT0F1dGhQYWNrZXIucGFja1BhcmFtcyhvcHRpb25zKSk7XG4gICAgfVxufVxuXG5jbGFzcyBJb25pY0tleUNsb2FrQ29uZmlnIGV4dGVuZHMgSW9uaWNHZW5lcmFsQXV0aENvbmZpZyB7XG4gICAgLy8gVGhlIG9ubHkgdW5pcXVlIHNhbGVzZm9yY2UgcXVpcmsgaXMgdGhhdCB0aGUgY2hhbGxlbmdlL3ZlcmlmaWVyIGNhbiBvbmx5IGNvbnNpc3Qgb2YgaGV4aWRlY2ltYWwgY2hhcnNcbiAgICBhc3luYyBnZXRMb2dvdXRVcmwoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZExvY2F0aW9ucygpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY2xpZW50SWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJRCxcbiAgICAgICAgICAgIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogdGhpcy5vcHRpb25zLmxvZ291dFVybCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFVybEhlbHBlci5idWlsZFVybCh0aGlzLmxvY2F0aW9uc1snZW5kX3Nlc3Npb25fZW5kcG9pbnQnXSwgT0F1dGhQYWNrZXIucGFja1BhcmFtcyhvcHRpb25zKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY2xhc3MgV2ViU3RvcmFnZVByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihrZXlQcmVmaXggPSAnaW9uaWMtYWMtc3RvcmFnZTonKSB7XG4gICAgICAgIHRoaXMua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIH1cbiAgICBhc3luYyBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmdldEtleShrZXkpKTtcbiAgICB9XG4gICAgYXN5bmMgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZ2V0S2V5KGtleSksIHZhbHVlKTtcbiAgICB9XG4gICAgYXN5bmMgcmVtb3ZlKGtleSkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5nZXRLZXkoa2V5KSk7XG4gICAgfVxuICAgIGFzeW5jIGNsZWFyKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgoX2EgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3RhcnRzV2l0aCh0aGlzLmtleVByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmtleVByZWZpeH0ke2tleX1gO1xuICAgIH1cbn1cbi8qKlxuICogQGhpZGRlblxuICovXG5jbGFzcyBOYXRpdmVTdG9yYWdlUHJvdmlkZXIge1xuICAgIGFzeW5jIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgY29yZG92YS5leGVjKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXMocmVzdWx0KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlaihlcnJvcik7XG4gICAgICAgICAgICB9LCAnSW9uaWNBdXRoQ29ubmVjdFN0b3JhZ2UnLCAnZ2V0JywgW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgY29yZG92YS5leGVjKGZ1bmN0aW9uIChfd2luUGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlaihlcnJvcik7XG4gICAgICAgICAgICB9LCAnSW9uaWNBdXRoQ29ubmVjdFN0b3JhZ2UnLCAnc2V0JywgW2tleSwgdmFsdWVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHJlbW92ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgY29yZG92YS5leGVjKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlaihlcnJvcik7XG4gICAgICAgICAgICB9LCAnSW9uaWNBdXRoQ29ubmVjdFN0b3JhZ2UnLCAncmVtb3ZlJywgW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgY2xlYXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgIGNvcmRvdmEuZXhlYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWooZXJyb3IpO1xuICAgICAgICAgICAgfSwgJ0lvbmljQXV0aENvbm5lY3RTdG9yYWdlJywgJ2NsZWFyJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgSW9uaWNCYXNlQXV0aCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaGFuZGxlcnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgICAgICB0aGlzLmxvZ1RhZyA9ICdJb25pY0Jhc2VBdXRoOiAnO1xuICAgICAgICB0aGlzLmFkZGVkTG9naW5QYXJhbWV0ZXJzID0ge307XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHRoaXMuZ2V0U3RvcmFnZVByb3ZpZGVyKG9wdGlvbnMudG9rZW5TdG9yYWdlUHJvdmlkZXIpO1xuICAgICAgICB0aGlzLnNlc3Npb24gPSBuZXcgU2Vzc2lvbkhlbHBlcihvcHRpb25zLmNsaWVudElELCB0aGlzLm9wdGlvbnMucGxhdGZvcm0gPT09ICd3ZWInID8gbmV3IFdlYlN0b3JhZ2VQcm92aWRlcigpIDogbmV3IE5hdGl2ZVN0b3JhZ2VQcm92aWRlcigpKTtcbiAgICAgICAgbG9nZ2luZy5zZXRMb2dMZXZlbChvcHRpb25zLmxvZ0xldmVsKTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnaW5nO1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5hdXRoQ29uZmlnKSB7XG4gICAgICAgICAgICBjYXNlICdhdXRoMCc6XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoQ29uZmlnID0gbmV3IElvbmljQXV0aDBDb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhenVyZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoQ29uZmlnID0gbmV3IElvbmljQXp1cmVDb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb2duaXRvJzpcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhDb25maWcgPSBuZXcgSW9uaWNDb2duaXRvQ29uZmlnKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ2VuZXJhbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoQ29uZmlnID0gbmV3IElvbmljR2VuZXJhbEF1dGhDb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzYWxlc2ZvcmNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhDb25maWcgPSBuZXcgSW9uaWNTYWxlc0ZvcmNlQXV0aENvbmZpZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BpbmcnOlxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aENvbmZpZyA9IG5ldyBJb25pY1BpbmdBdXRoQ29uZmlnKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaWRlbnRpdHktc2VydmVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhDb25maWcgPSBuZXcgSWRlbnRpdHlTZXJ2ZXJBdXRoQ29uZmlnKG9wdGlvbnMsIGFzeW5jICgpID0+IHRoaXMuZ2V0UmF3SWRUb2tlbigpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29rdGEnOlxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aENvbmZpZyA9IG5ldyBJb25pY09rdGFBdXRoQ29uZmlnKG9wdGlvbnMsIGFzeW5jICgpID0+IHRoaXMuZ2V0UmF3SWRUb2tlbigpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2tleWNsb2FrJzpcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhDb25maWcgPSBuZXcgSW9uaWNLZXlDbG9ha0NvbmZpZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29uZWxvZ2luJzpcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhDb25maWcgPSBuZXcgSW9uaWNPbmVMb2dpbkNvbmZpZyhvcHRpb25zLCBhc3luYyAoKSA9PiB0aGlzLmdldFJhd0lkVG9rZW4oKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aENvbmZpZyA9IG5ldyBJb25pY0F6dXJlQ29uZmlnKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJhd0lkVG9rZW4oKSB7XG4gICAgICAgIGxldCBpZFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmdldElkVG9rZW4pIHtcbiAgICAgICAgICAgIGlkVG9rZW4gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SWRUb2tlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWRUb2tlbiA9IHRoaXMuYXV0aFJlc3VsdCAmJiB0aGlzLmF1dGhSZXN1bHQuaWRUb2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRUb2tlbjtcbiAgICB9XG4gICAgc2V0U3RvcmFnZU9uTG9ja0NhbGxiYWNrKG9uTG9ja0NhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2Uub25Mb2NrICYmIHR5cGVvZiB0aGlzLnN0b3JhZ2Uub25Mb2NrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uub25Mb2NrKG9uTG9ja0NhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRTdG9yYWdlUHJvdmlkZXIodHlwZSkge1xuICAgICAgICBpZiAoIXR5cGUgfHwgdHlwZSA9PT0gJ2xvY2FsU3RvcmFnZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGF1dGhMb2NhbFN0b3JhZ2UgPSBuZXcgQXV0aExvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgYXV0aExvY2FsU3RvcmFnZS5zZXRDbGllbnRJZCh0aGlzLm9wdGlvbnMuY2xpZW50SUQpO1xuICAgICAgICAgICAgcmV0dXJuIGF1dGhMb2NhbFN0b3JhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNUb2tlblN0b3JhZ2VQcm92aWRlcih0eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJVjVVc2VySW50ZXJmYWNlKHR5cGUpKSB7XG4gICAgICAgICAgICBjb25zdCBhdXRoSVY1U3RvcmFnZSA9IG5ldyBBdXRoSWRlbnRpdHlWYXVsdDVTdG9yYWdlKHR5cGUpO1xuICAgICAgICAgICAgYXV0aElWNVN0b3JhZ2Uuc2V0Q2xpZW50SWQodGhpcy5vcHRpb25zLmNsaWVudElEKTtcbiAgICAgICAgICAgIHJldHVybiBhdXRoSVY1U3RvcmFnZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGF1dGhJVlN0b3JhZ2UgPSBuZXcgQXV0aElkZW50aXR5VmF1bHRTdG9yYWdlKHR5cGUpO1xuICAgICAgICAgICAgYXV0aElWU3RvcmFnZS5zZXRDbGllbnRJZCh0aGlzLm9wdGlvbnMuY2xpZW50SUQpO1xuICAgICAgICAgICAgcmV0dXJuIGF1dGhJVlN0b3JhZ2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgdmFsaWRhdGVJZFRva2VuKGlkVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSnd0KGlkVG9rZW4pLnBheWxvYWQ7XG4gICAgfVxuICAgIGFzeW5jIHNldFNlc3Npb24oYXV0aFJlc3VsdCwgdG9rZW5OYW1lLCBzY29wZXMpIHtcbiAgICAgICAgY29uc3QgZXhwaXJlc0F0ID0gYXV0aFJlc3VsdC5leHBpcmVzSW5cbiAgICAgICAgICAgID8gYXV0aFJlc3VsdC5leHBpcmVzSW4gKiAxMDAwICsgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZXhwaXJlc0F0KSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zygnc2V0dGluZyBleHBpcmVzIGF0JywgZXhwaXJlc0F0KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2Vzc2lvbi5zZXRFeHBpcmVzQXQoZXhwaXJlc0F0LCB0b2tlbk5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ25vIGV4cGlyYXRpb24gc2VudCBpbiByZXN1bHQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgdmFsaWQgdG9rZW5OYW1lIHdlIGFyZSByZWZyZXNoaW5nIGEgc2Vjb25kYXJ5IHRva2VuXG4gICAgICAgIC8vICAgc2F2ZSB0aGUgc2NvcGVzLCBidXQgbm90IHRoZSByZXN1bHRcbiAgICAgICAgaWYgKHRva2VuTmFtZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXNzaW9uLnNldFRva2VuU2NvcGVzKHNjb3BlcywgdG9rZW5OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFJlc3VsdCA9IGF1dGhSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5zZXRJZFRva2VuICYmIGF1dGhSZXN1bHQuaWRUb2tlbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNldElkVG9rZW4oYXV0aFJlc3VsdC5pZFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLnNldEFjY2Vzc1Rva2VuICYmIGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zZXRBY2Nlc3NUb2tlbihhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuLCB0b2tlbk5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2Uuc2V0UmVmcmVzaFRva2VuICYmIGF1dGhSZXN1bHQucmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2Uuc2V0UmVmcmVzaFRva2VuKGF1dGhSZXN1bHQucmVmcmVzaFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoUmVzdWx0O1xuICAgIH1cbiAgICBhZGRpdGlvbmFsTG9naW5QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5hZGRlZExvZ2luUGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgfVxuICAgIGFzeW5jIHNldE92ZXJyaWRlRGlzY292ZXJ5VXJsKHVybCkge1xuICAgICAgICB0aGlzLmF1dGhDb25maWcub3ZlcnJpZGVEaXNjb3ZlcnlVcmwgPSB1cmw7XG4gICAgICAgIGF3YWl0IHRoaXMuc2Vzc2lvbi5zZXRPdmVycmlkZVVybCh1cmwpO1xuICAgIH1cbiAgICBhc3luYyBjbGVhck92ZXJyaWRlRGlzY292ZXJ5VXJsKCkge1xuICAgICAgICB0aGlzLmF1dGhDb25maWcub3ZlcnJpZGVEaXNjb3ZlcnlVcmwgPSAnJztcbiAgICAgICAgYXdhaXQgdGhpcy5zZXNzaW9uLmNsZWFyT3ZlcnJpZGVVcmwoKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0T3ZlcnJpZGVEaXNjb3ZlcnlVcmwoKSB7XG4gICAgICAgIHRoaXMuYXV0aENvbmZpZy5vdmVycmlkZURpc2NvdmVyeVVybCA9IChhd2FpdCB0aGlzLnNlc3Npb24uZ2V0T3ZlcnJpZGVVcmwoKSkgfHwgJyc7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhDb25maWcub3ZlcnJpZGVEaXNjb3ZlcnlVcmwgfHwgdW5kZWZpbmVkO1xuICAgIH1cbiAgICBhc3luYyBnZXRBY2Nlc3NUb2tlbkV4cGlyYXRpb24odG9rZW5OYW1lKSB7XG4gICAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IGF3YWl0IHRoaXMuc2Vzc2lvbi5nZXRFeHBpcmVzQXQodG9rZW5OYW1lKTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBleHBpcmVzQXQgPT09ICdudW1iZXInID8gZXhwaXJlc0F0IDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBhc3luYyBsb2dpbihvdmVycmlkZVVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IHRoaXMuYXV0aENvbmZpZy5nZW5lcmF0ZUNoYWxsZW5nZUFuZFZlcmlmaWVyKCk7XG4gICAgICAgICAgICBjb25zdCBub25jZSA9IGdldFJhbmRvbU5vbmNlKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNlc3Npb24uY2xlYXJBdXRoRGF0YSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXNzaW9uLnNldEF1dGhEYXRhKGtleXMpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXNzaW9uLnNldE5vbmNlKG5vbmNlKTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzT3ZlcnJpZGVVcmwgPSBhd2FpdCB0aGlzLnNlc3Npb24uZ2V0T3ZlcnJpZGVVcmwoKTtcbiAgICAgICAgICAgIHRoaXMuYXV0aENvbmZpZy5vdmVycmlkZURpc2NvdmVyeVVybCA9IG92ZXJyaWRlVXJsIHx8IHByZXZpb3VzT3ZlcnJpZGVVcmwgfHwgJyc7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGF3YWl0IHRoaXMuYXV0aENvbmZpZy5nZXRBdXRob3JpemVVcmwobm9uY2UsIGtleXMuY2hhbGxlbmdlLCB0aGlzLmFkZGVkTG9naW5QYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dVcmwodXJsLnVybCwgdW5kZWZpbmVkLCB0aGlzLm9wdGlvbnMucmVkaXJlY3RVcmkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tTdHJpbmcgPSByZXN1bHQuY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTChjYWxsYmFja1N0cmluZykuc2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFBhcmFtcy5oYXMoJ2Vycm9yX2Rlc2NyaXB0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRlc2NyaXB0aW9uID0gc2VhcmNoUGFyYW1zLmdldCgnZXJyb3JfZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnaW5nLmRlYnVnKCdlcnJvcl9kZXNjcmlwdGlvbicgKyBlcnJvckRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdXRoUmVzdWx0ID0gYXdhaXQgdGhpcy5pbnRlcm5hbEhhbmRsZUNhbGxiYWNrKGNhbGxiYWNrU3RyaW5nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG9naW5TdWNjZXNzKGF1dGhSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5ldmVudCA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Jyb3dzZXIgd2FzIGNsb3NlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBjYWxsYmFjayBzdHJpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBnZXRJZFRva2VuKCkge1xuICAgICAgICBjb25zdCBpZFRva2VuID0gYXdhaXQgdGhpcy5nZXRSYXdJZFRva2VuKCk7XG4gICAgICAgIGlmICghaWRUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudmFsaWRhdGVJZFRva2VuKGlkVG9rZW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBhc3luYyBnZXRBdXRoUmVzcG9uc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuZ2V0QXV0aFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldEF1dGhSZXNwb25zZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZUxvZ2luQ2FsbGJhY2sodXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgICAgY29uc3QgYXV0aFJlc3VsdCA9IGF3YWl0IHRoaXMuaW50ZXJuYWxIYW5kbGVDYWxsYmFjayh1cmwsIHRydWUpO1xuICAgICAgICB0aGlzLm9uTG9naW5TdWNjZXNzKGF1dGhSZXN1bHQpO1xuICAgICAgICByZXR1cm4gYXV0aFJlc3VsdDtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlTG9nb3V0Q2FsbGJhY2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmlzaExvZ291dCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgYGhhbmRsZUxvZ2luQ2FsbGJhY2soKWAgaW5zdGVhZFxuICAgICAqL1xuICAgIGFzeW5jIGhhbmRsZUNhbGxiYWNrKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVMb2dpbkNhbGxiYWNrKHVybCk7XG4gICAgfVxuICAgIGFzeW5jIGlzQWNjZXNzVG9rZW5BdmFpbGFibGUodG9rZW5OYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuZ2V0QWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEFjY2Vzc1Rva2VuKHRva2VuTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gISF0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFzeW5jIGlzQWNjZXNzVG9rZW5FeHBpcmVkKHRva2VuTmFtZSkge1xuICAgICAgICBjb25zdCBleHBpcmVzQXQgPSBhd2FpdCB0aGlzLnNlc3Npb24uZ2V0RXhwaXJlc0F0KHRva2VuTmFtZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnZXhwaXJlc0F0OiAnLCBleHBpcmVzQXQpO1xuICAgICAgICAvLyBJZiB0aGUgcmVzdWx0IGRpZG4ndCBpbmNsdWRlIGFuIGV4cGlyZXNfaW4gd2UgY2FuJ3Qga25vdyB3aGV0aGVyIGl0J3MgZXhwaXJlZCBvciBub3RcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBleHBpcmVzQXQgPT09ICdudW1iZXInID8gbmV3IERhdGUoKS5nZXRUaW1lKCkgPj0gZXhwaXJlc0F0IDogZmFsc2U7XG4gICAgfVxuICAgIGFzeW5jIGlzQXV0aGVudGljYXRlZCh0b2tlbk5hbWUpIHtcbiAgICAgICAgY29uc3QgaWRUb2tlbiA9IGF3YWl0IHRoaXMuZ2V0SWRUb2tlbigpO1xuICAgICAgICBpZiAoIWlkVG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnbm8gaWRUb2tlbiwgZmFsc2UnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGlzQXV0aGVudGljYXRlZCA9ICEoYXdhaXQgdGhpcy5pc0FjY2Vzc1Rva2VuRXhwaXJlZCh0b2tlbk5hbWUpKTtcbiAgICAgICAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdhZnRlciBleHBpcmVzQXQgdGltZScpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaFNlc3Npb24odG9rZW5OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdyZWZyZXNoIHN1Y2NlZWRlZCwgcmV0dXJuaW5nIHRydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jbGVhclN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdyZWZyZXNoIHRocmV3LCBmYWxzZScsIGUpO1xuICAgICAgICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNBdXRoZW50aWNhdGVkO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgJHt0aGlzLmxvZ1RhZ30gaXNBdXRoZW50aWNhdGVkYCwgZSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNsZWFyU3RvcmFnZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJlZnJlc2hUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRSZWZyZXNoVG9rZW4gPyBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0UmVmcmVzaFRva2VuKCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGFzeW5jIGlzUmVmcmVzaFRva2VuQXZhaWxhYmxlKCkge1xuICAgICAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5nZXRSZWZyZXNoVG9rZW4oKSk7XG4gICAgfVxuICAgIGFzeW5jIGludGVybmFsR2V0VG9rZW4oY29kZU5hbWUsIGNvZGUsIGdyYW50VHlwZSwgdmVyaWZpZXIsIHNjb3BlKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdOb3QgSW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0QWNjZXNzVG9rZW4odG9rZW5OYW1lLCBzY29wZXMpIHtcbiAgICAgICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gYXdhaXQgdGhpcy5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnTm90IGF1dGhlbnRpY2F0ZWQsIHJlZnJlc2ggZmFpbGVkLicpO1xuICAgICAgICAgICAgdGhyb3cgJ05vdCBhdXRoZW50aWNhdGVkLCByZWZyZXNoIGZhaWxlZC4nO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuZ2V0QWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmV0dXJuaW5nIHN0b3JhZ2UgYWNjZXNzVG9rZW4nLCB0b2tlbk5hbWUpO1xuICAgICAgICAgICAgaWYgKHRva2VuTmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBBY2Nlc3NUb2tlbiA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRBY2Nlc3NUb2tlbih0b2tlbk5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wQWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBdXRoZW50aWNhdGVkVG9rZW4gPSBhd2FpdCB0aGlzLmlzQXV0aGVudGljYXRlZCh0b2tlbk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQXV0aGVudGljYXRlZFRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ05vdCBhdXRoZW50aWNhdGVkLCByZWZyZXNoMiBmYWlsZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnTm90IGF1dGhlbnRpY2F0ZWQsIHJlZnJlc2gyIGZhaWxlZC4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0QWNjZXNzVG9rZW4odG9rZW5OYW1lKTtcbiAgICAgICAgICAgIGlmIChhY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW5OYW1lKSB7XG4gICAgICAgICAgICBsZXQgc2Vzc2lvbiA9IGF3YWl0IHRoaXMuc2Vzc2lvbi5nZXRBdXRoRGF0YSgpO1xuICAgICAgICAgICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbiA9IGF3YWl0IHRoaXMuYXV0aENvbmZpZy5nZW5lcmF0ZUNoYWxsZW5nZUFuZFZlcmlmaWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVmcmVzaFRva2VuID0gJyc7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmdldFJlZnJlc2hUb2tlbikge1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbiA9IChhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0UmVmcmVzaFRva2VuKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5pbnRlcm5hbEdldFRva2VuKCdyZWZyZXNoX3Rva2VuJywgcmVmcmVzaFRva2VuLCAncmVmcmVzaF90b2tlbicsIHNlc3Npb24udmVyaWZpZXIsIHNjb3Blcyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRTZXNzaW9uKHJlc3VsdCwgdG9rZW5OYW1lLCBzY29wZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnQWNxdWlyZWQgYSBuZXcgdG9rZW4uJywgdG9rZW5OYW1lLCBzY29wZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuYWNjZXNzVG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ0NvdWxkIG5vdCBhY3F1aXJlIGEgbmV3IHRva2VuIGZvcjogJywgdG9rZW5OYW1lLCBzY29wZXMpO1xuICAgICAgICAgICAgdGhyb3cgJ05vIHRva2VuIGNvdWxkIGJlIGFjcXVpcmVkLic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmdldEF1dGhSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhSZXNwb25zZSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRBdXRoUmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoYXV0aFJlc3BvbnNlICYmIGF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ3JldHVybmluZyBhdXRoUmVzcG9uc2UgYWNjZXNzVG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hdXRoUmVzdWx0ICYmIHRoaXMuYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmV0dXJuaW5nIGF1dGhSZXN1bHQgYWNjZXNzVG9rZW4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoUmVzdWx0LmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnQ291bGQgbm90IGZpbmQgYSB0b2tlbiwgZmFpbGluZy4nKTtcbiAgICAgICAgdGhyb3cgJ0F1dGhlbnRpY2F0ZWQsIGJ1dCB0b2tlbiBub3QgZm91bmQuJztcbiAgICB9XG4gICAgYXN5bmMgZXhwaXJlKHRva2VuTmFtZSkge1xuICAgICAgICBhd2FpdCB0aGlzLnNlc3Npb24uc2V0RXhwaXJlc0F0KDAsIHRva2VuTmFtZSk7XG4gICAgfVxuICAgIGFzeW5jIGxvZ291dCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRPdmVycmlkZURpc2NvdmVyeVVybCgpO1xuICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCB0aGlzLmF1dGhDb25maWcuZ2V0TG9nb3V0VXJsKCk7XG4gICAgICAgIGxvZ2dpbmcuZGVidWcoJ2xvZ291dCB1cmw6ICcgKyB1cmwudXJsKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zaG93VXJsKHVybC51cmwsIHsgaGlkZTogdHJ1ZSB9LCB0aGlzLm9wdGlvbnMubG9nb3V0VXJsKTtcbiAgICAgICAgYXdhaXQgdGhpcy5maW5pc2hMb2dvdXQoKTtcbiAgICB9XG4gICAgYXN5bmMgZmluaXNoTG9nb3V0KCkge1xuICAgICAgICB0aGlzLmF1dGhSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGF3YWl0IHRoaXMuY2xlYXJTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMuYXV0aENvbmZpZy5sb2NhdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGF3YWl0IHRoaXMuY2xlYXJPdmVycmlkZURpc2NvdmVyeVVybCgpO1xuICAgICAgICB0aGlzLm9uTG9nb3V0KCk7XG4gICAgfVxuICAgIG9uTG9naW5TdWNjZXNzKGF1dGhSZXNwb25zZSkge1xuICAgICAgICB0aGlzLmF1dGhDb25maWcubG9jYXRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmF1dGhDb25maWcub3ZlcnJpZGVEaXNjb3ZlcnlVcmwgPSAnJztcbiAgICAgICAgdGhpcy5oYW5kbGVycy5vbkxvZ2luU3VjY2VzcyhhdXRoUmVzcG9uc2UpO1xuICAgIH1cbiAgICBvbkxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5vbkxvZ291dCgpO1xuICAgIH1cbiAgICBhc3luYyBjbGVhclN0b3JhZ2UoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2Vzc2lvbi5jbGVhcigpO1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmNsZWFyKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgSW9uaWNBdXRoV2ViIGV4dGVuZHMgSW9uaWNCYXNlQXV0aCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaGFuZGxlcnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucywgaGFuZGxlcnMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgICAgIHRoaXMubG9nVGFnID0gJ0lvbmljV2ViQXV0aDogJztcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdjdG9yIG9wdGlvbnMnLCBvcHRpb25zKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ2V2ZW50OiAnLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBpbnRlcm5hbEdldFRva2VuKF9jb2RlTmFtZSwgX2NvZGUsIF9ncmFudFR5cGUsIF92ZXJpZmllciwgc2NvcGUpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdnZXR0aW5nIHRva2VuJyk7XG4gICAgICAgIC8vIHNldHVwIHRoZSBlbnYgZm9yIGEgbmV3IHRva2VuIHJlcXVlc3RcbiAgICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IHRoaXMuYXV0aENvbmZpZy5nZW5lcmF0ZUNoYWxsZW5nZUFuZFZlcmlmaWVyKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2Vzc2lvbi5zZXRBdXRoRGF0YShrZXlzKTtcbiAgICAgICAgY29uc3Qgbm9uY2UgPSAoYXdhaXQgdGhpcy5zZXNzaW9uLmdldE5vbmNlKCkpIHx8ICcnO1xuICAgICAgICAvLyBzZXR1cCB0aGUgdXJsIGZvciB0aGUgdG9rZW5cbiAgICAgICAgbGV0IHVybEluZm8gPSBhd2FpdCB0aGlzLmF1dGhDb25maWcuZ2V0QXV0aG9yaXplVXJsKG5vbmNlLCBrZXlzLmNoYWxsZW5nZSwge30pO1xuICAgICAgICBsZXQgdXJsID0gbmV3IFVSTCh1cmxJbmZvLnVybCk7XG4gICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdwcm9tcHQnLCAnbm9uZScpO1xuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc2NvcGUnLCBzY29wZSk7XG4gICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdyZXNwb25zZV90eXBlJywgJ3Rva2VuJyk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAndXJsIGZvciBpbnRlcm5hbEdldFRva2VuOiAnLCB1cmwuaHJlZik7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuaGlkZGVuTG9hZFVybCh1cmwuaHJlZik7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrU3RyaW5nID0gcmVzdWx0LmNhbGxiYWNrO1xuICAgICAgICBpZiAoY2FsbGJhY2tTdHJpbmcgIT0gdW5kZWZpbmVkICYmIGNhbGxiYWNrU3RyaW5nICE9ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRVcmwgPSB1cmxQYXJzZShjYWxsYmFja1N0cmluZywgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gVXJsSGVscGVyLnBhcnNlSGFzaChwYXJzZWRVcmwuaGFzaCk7XG4gICAgICAgICAgICBjb25zdCBhdXRoUmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiByZXN1bHQuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgIGlkVG9rZW46IHJlc3VsdC5pZF90b2tlbixcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlc3VsdC5yZWZyZXNoX3Rva2VuLFxuICAgICAgICAgICAgICAgIGV4cGlyZXNJbjogcmVzdWx0LmV4cGlyZXNfaW4sXG4gICAgICAgICAgICAgICAgc2NvcGU6IHJlc3VsdC5zY29wZSxcbiAgICAgICAgICAgICAgICB0b2tlblR5cGU6IHJlc3VsdC50b2tlbl90eXBlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmV0dXJuaW5nIGF1dGhSZXN1bHQ6ICcsIGF1dGhSZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIGF1dGhSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSAnY291bGQgbm90IGdldCB0b2tlbic7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBpbnRlcm5hbEhhbmRsZUNhbGxiYWNrKHVybCwgZXh0ZXJuYWxDYWxsYmFjaykge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ2hhbmRsZUNhbGxiYWNrIHVybDonICsgdXJsKTtcbiAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gdXJsUGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJzZWRVcmwuaGFzaCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnc2VhcmNoUGFyYW1zOiAnLCBKU09OLnN0cmluZ2lmeShzZWFyY2hQYXJhbXMpKTtcbiAgICAgICAgaWYgKHNlYXJjaFBhcmFtcy5oYXMoJ2Vycm9yX2Rlc2NyaXB0aW9uJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yRGVzY3JpcHRpb24gPSBzZWFyY2hQYXJhbXMuZ2V0KCdlcnJvcl9kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ2Vycm9yX2Rlc2NyaXB0aW9uJyArIGVycm9yRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHF1ZXJ5X3BhcmFtcyA9IHBhcnNlZFVybC5xdWVyeTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdxdWVyeSBwYXJhbXM6ICcsIHF1ZXJ5X3BhcmFtcyk7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBVcmxIZWxwZXIucGFyc2VIYXNoKHBhcnNlZFVybC5oYXNoKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdoYXNoOiAnLCBoYXNoKTtcbiAgICAgICAgaWYgKChoYXNoLmFjY2Vzc190b2tlbiAhPSB1bmRlZmluZWQgJiYgaGFzaC5pZF90b2tlbiAhPSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAodGhpcy5vcHRpb25zLndlYkF1dGhGbG93ICYmXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLndlYkF1dGhGbG93ID09PSAnUEtDRScgJiZcbiAgICAgICAgICAgICAgICBxdWVyeV9wYXJhbXMuY29kZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgdGhpcy5zZXNzaW9uLmdldEF1dGhEYXRhKCk7XG4gICAgICAgICAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlc3Npb24gZGF0YSBzdG9yZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnZ290IGEgc2Vzc2lvbicpO1xuICAgICAgICAgICAgaWYgKHF1ZXJ5X3BhcmFtcy5jb2RlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLm9wdGlvbnMuY2xpZW50SUQsXG4gICAgICAgICAgICAgICAgICAgIGNvZGVfdmVyaWZpZXI6IHNlc3Npb24udmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHF1ZXJ5X3BhcmFtcy5jb2RlLFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdF91cmk6IFN0cmluZyh0aGlzLm9wdGlvbnMucmVkaXJlY3RVcmkpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5wb3N0VG9rZW4ob3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBoYXNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlQXV0aFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gJ1dlYiBvbmx5IHN1cHBvcnRzIGltcGxpY2l0IGxvZ2luIHdpdGggaWQgYW5kIGFjY2VzcyB0b2tlbiByZXR1cm5lZCBmcm9tIHRoZSBhdXRob3JpemUgY2FsbCBvciBQS0NFJztcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHJlZnJlc2hTZXNzaW9uKHRva2VuTmFtZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ3JlZnJlc2hpbmcgc2Vzc2lvbicpO1xuICAgICAgICBhd2FpdCB0aGlzLmdldE92ZXJyaWRlRGlzY292ZXJ5VXJsKCk7XG4gICAgICAgIGlmICh0b2tlbk5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmVmcmVzaGluZyBvdGhlciB0b2tlbjogJywgdG9rZW5OYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlID0gYXdhaXQgdGhpcy5zZXNzaW9uLmdldFRva2VuU2NvcGVzKHRva2VuTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBhdXRoUmVzdWx0ID0gYXdhaXQgdGhpcy5pbnRlcm5hbEdldFRva2VuKCcnLCAnJywgJycsIHVuZGVmaW5lZCwgc2NvcGUpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQsIHRva2VuTmFtZSwgc2NvcGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2ViQXV0aEZsb3cgPT09ICdQS0NFJykge1xuICAgICAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gYXdhaXQgdGhpcy5nZXRSZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyByZWZyZXNoIHRva2VuIGF2YWlsYWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5vcHRpb25zLmNsaWVudElELFxuICAgICAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnBvc3RUb2tlbihvcHRpb25zKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlQXV0aFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IHRoaXMuYXV0aENvbmZpZy5nZW5lcmF0ZUNoYWxsZW5nZUFuZFZlcmlmaWVyKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNlc3Npb24uY2xlYXJBdXRoRGF0YSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXNzaW9uLnNldEF1dGhEYXRhKGtleXMpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdrZXlzOiAnLCBrZXlzKTtcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlID0gKGF3YWl0IHRoaXMuc2Vzc2lvbi5nZXROb25jZSgpKSB8fCAnJztcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnbm9uY2U6ICcsIG5vbmNlKTtcbiAgICAgICAgICAgIGxldCB1cmwgPSBhd2FpdCB0aGlzLmF1dGhDb25maWcuZ2V0QXV0aG9yaXplVXJsKG5vbmNlLCBrZXlzLmNoYWxsZW5nZSwge30pO1xuICAgICAgICAgICAgdXJsLnVybCA9IHVybC51cmwgKyAnJnByb21wdD1ub25lJztcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAndXJsIGZvciByZWZyZXNoOiAnLCB1cmwudXJsKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5oaWRkZW5Mb2FkVXJsKHVybC51cmwpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmVzdWx0IGZvciByZWZyZXNoOiAnLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrU3RyaW5nID0gcmVzdWx0LmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja1N0cmluZyAhPSB1bmRlZmluZWQgJiYgY2FsbGJhY2tTdHJpbmcgIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdjYWxsaW5nIGhhbmRsZUNhbGxiYWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaW50ZXJuYWxIYW5kbGVDYWxsYmFjayhjYWxsYmFja1N0cmluZywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gJ0ZhaWxlZCB0byByZWZyZXNoIHNlc3Npb24nO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVBdXRoUmVzdWx0KHJlc3VsdCkge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLnNldEF1dGhSZXNwb25zZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNldEF1dGhSZXNwb25zZShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmVzdWx0OiAnLCByZXN1bHQpO1xuICAgICAgICBjb25zdCBhdXRoUmVzdWx0ID0ge1xuICAgICAgICAgICAgYWNjZXNzVG9rZW46IHJlc3VsdC5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICBpZFRva2VuOiByZXN1bHQuaWRfdG9rZW4sXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlc3VsdC5yZWZyZXNoX3Rva2VuLFxuICAgICAgICAgICAgZXhwaXJlc0luOiByZXN1bHQuZXhwaXJlc19pbixcbiAgICAgICAgICAgIHNjb3BlOiByZXN1bHQuc2NvcGUsXG4gICAgICAgICAgICB0b2tlblR5cGU6IHJlc3VsdC50b2tlbl90eXBlLFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCB0aGlzLnNldFNlc3Npb24oYXV0aFJlc3VsdCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnY2xlYXIgYXV0aCBkYXRhJyk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2Vzc2lvbi5jbGVhckF1dGhEYXRhKCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmV0dXJuIGF1dGggcmVzdWx0JywgYXV0aFJlc3VsdCk7XG4gICAgICAgIHJldHVybiBhdXRoUmVzdWx0O1xuICAgIH1cbiAgICBhc3luYyBwb3N0VG9rZW4ob3B0aW9ucykge1xuICAgICAgICBjb25zdCB0b2tlblVybEluZm8gPSBhd2FpdCB0aGlzLmF1dGhDb25maWcuZ2V0VG9rZW5VcmwoKTtcbiAgICAgICAgY29uc3QgdG9rZW5VcmwgPSB0b2tlblVybEluZm8udXJsIHx8ICcnO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlblVybEluZm8uaGVhZGVycyksIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0pO1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlblVybEluZm8ucGF5bG9hZCksIG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBib2R5UGFyYW1zID0gT2JqZWN0LmtleXMob3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zW2tleV0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJyYnKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0b2tlblVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogYm9keVBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGpzb25SZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgUE9TVCB0byB0b2tlbiBlbmRwb2ludCBmYWlsZWQgd2l0aCBlcnJvcjogJHtqc29uUmVzLmVycm9yX2Rlc2NyaXB0aW9uID8ganNvblJlcy5lcnJvcl9kZXNjcmlwdGlvbiA6IGpzb25SZXMuZXJyb3J9YDtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvck1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICB9XG4gICAgaGlkZGVuTG9hZFVybCh1cmwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdvcGVuaW5nIGJyb3dzZXIuJyk7XG4gICAgICAgICAgICAgICAgbGV0IGlmcmFtZUxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmcmFtZS5zcmMgPSB1cmw7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICAgIGlmcmFtZS5zcmMgPSB1cmw7XG4gICAgICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZnJhbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWVMb2NhdGlvbiA9IGlmcmFtZS5jb250ZW50V2luZG93LmxvY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaWZyYW1lLmNvbnRlbnREb2N1bWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUxvY2F0aW9uID0gaWZyYW1lLmNvbnRlbnREb2N1bWVudC5sb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnbm8gZG9jIG9yIHdpbmRvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZW5jb2RlVVJJKGlmcmFtZUxvY2F0aW9uLmhyZWYpLmluZGV4T2YoZW5jb2RlVVJJKHRoYXQub3B0aW9ucy5yZWRpcmVjdFVyaSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBpZnJhbWVMb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnY2xvc2luZyBpZnJhbWU6ICcsIGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZnJhbWUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ2NhbGxpbmcgcmVzb2x2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBldmVudDogJ29wZW5lZCcsIGNhbGxiYWNrOiBocmVmIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcih0aGlzLmxvZ1RhZywgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcih0aGlzLmxvZ1RhZywgJ2hpZGRlbkxvYWRVcmwgZXJyb3I6ICcsIGVycik7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd1VybCh1cmwsIF9vcHRpb25zLCB1cmxUb0Nsb3NlV2luZG93ID0gdGhpcy5vcHRpb25zLnJlZGlyZWN0VXJpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmltcGxpY2l0TG9naW4gIT09ICdDVVJSRU5UJykge1xuICAgICAgICAgICAgICAgIC8vIFBPUFVQXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdvcGVuaW5nIGJyb3dzZXIuJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cExvY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cCA9IHdpbmRvdy5vcGVuKHVybCwgJ19zeXN0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcG9wdXAgfHwgcG9wdXAuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gJ3BvcHVwIHdpbmRvdyBjbG9zZWQgd2l0aG91dCBuYXZpZ2F0aW5nIHRvIHJlc3VsdCB1cmwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKHRoaXMubG9nVGFnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwTG9jYXRpb24gPSBwb3B1cC5sb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVuY29kZVVSSShwb3B1cExvY2F0aW9uLmhyZWYpLmluZGV4T2YoZW5jb2RlVVJJKHVybFRvQ2xvc2VXaW5kb3cpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwU3RyaW5nID0gcG9wdXBMb2NhdGlvbi50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ2Nsb3NpbmcgcG9wdXA6ICcsIHBvcHVwTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ2Nsb3NlZCBwb3B1cCcsIHBvcHVwU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGV2ZW50OiAnb3BlbmVkJywgY2FsbGJhY2s6IHBvcHVwU3RyaW5nIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoaWxlIHRoZSBVUkwgaXMgYXQgdGhlIGF1dGggcHJvdmlkZXIsIHdlIHdpbGwgZ2V0IGEgRE9NRXhjZXB0aW9uIGVycm9yIHRyeWluZyB0byBhY2Nlc3MgdGhlIHdpbmRvdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBlYXQgdGhlIGVycm9yIGFuZCB0cnkgYWdhaW4uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQ1VSUkVOVFxuICAgICAgICAgICAgICAgIGxvZ2dpbmcuZGVidWcodGhpcy5sb2dUYWcsICdhYm91dCB0byBuYXZpZ2F0ZSBmb3J3YXJkJyk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcih0aGlzLmxvZ1RhZywgJ3Nob3dVcmwgZXJyb3I6ICcsIGVycik7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFNlY3VyZVdlYlZpZXcge1xuICAgIGlzQXZhaWxhYmxlKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBlcnJvckhhbmRsZXIgPSBmdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIEFuIGVycm9yIGhhcyBvY2N1cnJlZCB3aGlsZSB0cnlpbmcgdG8gYWNjZXNzIHRoZVxuICAgICAgICAgICAgLy8gU2VjdXJlV2ViVmlldyBuYXRpdmUgaW1wbGVtZW50YXRpb24sIG1vc3QgbGlrZWx5IGJlY2F1c2VcbiAgICAgICAgICAgIC8vIHdlIGFyZSBvbiBhbiB1bnN1cHBvcnRlZCBwbGF0Zm9ybS5cbiAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29yZG92YS5leGVjKGNhbGxiYWNrLCBlcnJvckhhbmRsZXIsICdTZWN1cmVXZWJWaWV3JywgJ2lzQXZhaWxhYmxlJywgW10pO1xuICAgIH1cbiAgICAvLyBvcHRpb25zOlxuICAgIC8vICB1cmwgLSB1cmwgdG8gZGlzcGxheVxuICAgIC8vICB3ZWJWaWV3IC0gZm9yIGlPUyB3aGljaCB3ZWJ2aWV3IHRvIGRpc3BsYXksIGlmIHBvc3NpYmxlLiBCeSBkZWZhdWx0IHdlIHVzZSB0aGUgbmV3ZXN0IG9uZSBhdmFpbGFibGUgZm9yIE9TIHZlcnNpb25cbiAgICAvLyAgICAgIC0gQVNXZWJBdXRoIC0gQVNXZWJBdXRoZW50aWNhdGlvblNlc3Npb24gKGF2YWlhbGJsZSBzdGFydGluZyBpbiBpT1MgMTIpXG4gICAgLy8gICAgICAtIFNGQXV0aCAtIFNGQXV0aGVudGljYXRpb25TZXNzaW9uIChhdmFpbGFibGUgc3RhcnRpbmcgaW4gaU9TIDExKVxuICAgIC8vICAgICAgLSBTRlNhZmFyaSAtIFNGU2FmYXJpVmlld0NvbnRyb2xsZXIgKGF2YWlsYWJsZSBzdGFydGluZyBpbiBpT1MgOSlcbiAgICAvLyAgICAgIC0gTW9iaWxlU2FmYXJpIC0gTW9iaWxlIFNhZmFyaSAocHJlLWlPUyA4KVxuICAgIHNob3cob3B0aW9ucywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBpZiAoIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2FuaW1hdGVkJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvcmRvdmEuZXhlYyhvblN1Y2Nlc3MsIG9uRXJyb3IsICdTZWN1cmVXZWJWaWV3JywgJ3Nob3cnLCBbb3B0aW9uc10pO1xuICAgIH1cbiAgICBoaWRlKG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgICAgICBjb3Jkb3ZhLmV4ZWMob25TdWNjZXNzLCBvbkVycm9yLCAnU2VjdXJlV2ViVmlldycsICdoaWRlJywgW10pO1xuICAgIH1cbiAgICBnZXRWaWV3SGFuZGxlclBhY2thZ2VzKG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgICAgICBjb3Jkb3ZhLmV4ZWMob25TdWNjZXNzLCBvbkVycm9yLCAnU2VjdXJlV2ViVmlldycsICdnZXRWaWV3SGFuZGxlclBhY2thZ2VzJywgW10pO1xuICAgIH1cbiAgICB1c2VDdXN0b21UYWJzSW1wbGVtZW50YXRpb24ocGFja2FnZU5hbWUsIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgICAgICBjb3Jkb3ZhLmV4ZWMob25TdWNjZXNzLCBvbkVycm9yLCAnU2VjdXJlV2ViVmlldycsICd1c2VDdXN0b21UYWJzSW1wbGVtZW50YXRpb24nLCBbcGFja2FnZU5hbWVdKTtcbiAgICB9XG4gICAgY29ubmVjdFRvU2VydmljZShvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICAgICAgY29yZG92YS5leGVjKG9uU3VjY2Vzcywgb25FcnJvciwgJ1NlY3VyZVdlYlZpZXcnLCAnY29ubmVjdFRvU2VydmljZScsIFtdKTtcbiAgICB9XG4gICAgd2FybVVwKG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgICAgICBjb3Jkb3ZhLmV4ZWMob25TdWNjZXNzLCBvbkVycm9yLCAnU2VjdXJlV2ViVmlldycsICd3YXJtVXAnLCBbXSk7XG4gICAgfVxuICAgIG1heUxhdW5jaFVybCh1cmwsIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgICAgICBjb3Jkb3ZhLmV4ZWMob25TdWNjZXNzLCBvbkVycm9yLCAnU2VjdXJlV2ViVmlldycsICdtYXlMYXVuY2hVcmwnLCBbdXJsXSk7XG4gICAgfVxufVxuY29uc3QgSW9uaWNTZWN1cmVXZWJWaWV3ID0gbmV3IFNlY3VyZVdlYlZpZXcoKTtcblxuY29uc3QgcmVhZHkgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBERVZJQ0VfUkVBRFlfVElNRU9VVCA9IDUwMDA7XG4gICAgY29uc3QgcmVhZHlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihgQXV0aCBDb25uZWN0OiBkZXZpY2VyZWFkeSBkaWQgbm90IGZpcmUgd2l0aGluICR7REVWSUNFX1JFQURZX1RJTUVPVVR9bXMuYCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICB9LCBERVZJQ0VfUkVBRFlfVElNRU9VVCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChyZWFkeVRpbWVvdXQpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG59KTtcbmNsYXNzIElvbmljTmF0aXZlQXV0aCBleHRlbmRzIElvbmljQmFzZUF1dGgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmxvZ1RhZyA9ICdJb25pY05hdGl2ZUF1dGg6ICc7XG4gICAgfVxuICAgIGFzeW5jIGludGVybmFsR2V0VG9rZW4oY29kZU5hbWUsIGNvZGUsIGdyYW50VHlwZSwgdmVyaWZpZXIsIHNjb3BlKSB7XG4gICAgICAgIGxldCBwYXlsb2FkO1xuICAgICAgICBwYXlsb2FkID0ge1xuICAgICAgICAgICAgZ3JhbnRfdHlwZTogZ3JhbnRUeXBlLFxuICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLm9wdGlvbnMuY2xpZW50SUQsXG4gICAgICAgICAgICBjb2RlX3ZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogU3RyaW5nKHRoaXMub3B0aW9ucy5yZWRpcmVjdFVyaSksXG4gICAgICAgIH07XG4gICAgICAgIHBheWxvYWRbY29kZU5hbWVdID0gU3RyaW5nKGNvZGUpO1xuICAgICAgICBjb25zdCB0b2tlblVybEluZm8gPSBhd2FpdCB0aGlzLmF1dGhDb25maWcuZ2V0VG9rZW5VcmwoKTtcbiAgICAgICAgY29uc3QgdG9rZW5VcmwgPSB0b2tlblVybEluZm8udXJsIHx8ICcnO1xuICAgICAgICBpZiAodG9rZW5VcmxJbmZvLnBheWxvYWQpIHtcbiAgICAgICAgICAgIHBheWxvYWQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRva2VuVXJsSW5mby5wYXlsb2FkKSwgcGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjb3BlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGF5bG9hZC5zY29wZSA9IHNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBoZWFkZXJzID0ge307XG4gICAgICAgIGlmICh0b2tlblVybEluZm8uaGVhZGVycykge1xuICAgICAgICAgICAgaGVhZGVycyA9IHRva2VuVXJsSW5mby5oZWFkZXJzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZWVkIHRvIGF3YWl0IGRldmljZSByZWFkeVxuICAgICAgICByZXR1cm4gYXdhaXQgVXJsSGVscGVyLnBvc3QodG9rZW5VcmwsIHBheWxvYWQsIGhlYWRlcnMpXG4gICAgICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IEpTT04ucGFyc2UocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yYWdlLnNldEF1dGhSZXNwb25zZSAmJiBncmFudFR5cGUgIT0gJ3JlZnJlc2hfdG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNldEF1dGhSZXNwb25zZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICdnb3QgcmVzdWx0JywgcmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnYWNjZXNzX3Rva2VuJywgcmVzdWx0LmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ2lkX3Rva2VuJywgcmVzdWx0LmlkX3Rva2VuKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmVmcmVzaF90b2tlbicsIHJlc3VsdC5yZWZyZXNoX3Rva2VuKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncHJvZmlsZV9pbmZvJywgcmVzdWx0LnByb2ZpbGVfaW5mbyk7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ2V4cGlyZXNfaW4nLCByZXN1bHQuZXhwaXJlc19pbik7XG4gICAgICAgICAgICBjb25zdCBhdXRoUmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiByZXN1bHQuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgIGlkVG9rZW46IHJlc3VsdC5pZF90b2tlbixcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlc3VsdC5yZWZyZXNoX3Rva2VuLFxuICAgICAgICAgICAgICAgIGV4cGlyZXNJbjogcmVzdWx0LmV4cGlyZXNfaW4sXG4gICAgICAgICAgICAgICAgc2NvcGU6IHJlc3VsdC5zY29wZSxcbiAgICAgICAgICAgICAgICB0b2tlblR5cGU6IHJlc3VsdC50b2tlbl90eXBlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBhdXRoUmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRva2VuVXJsLCB0aGlzLmxvZ1RhZywgJyAtIHRva2VuVXJsJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhoZWFkZXJzLCB0aGlzLmxvZ1RhZywgJyAtIGhlYWRlcnMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHBheWxvYWQsIHRoaXMubG9nVGFnLCAnIC0gcGF5bG9hZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IodGhpcy5sb2dUYWcsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGludGVybmFsSGFuZGxlQ2FsbGJhY2sodXJsLCBfZXh0ZXJuYWxDYWxsYmFjaykge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgdGhpcy5zZXNzaW9uLmdldEF1dGhEYXRhKCk7XG4gICAgICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBzZXNzaW9uIGRhdGEgc3RvcmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgY29kZSB9ID0gdXJsUGFyc2UodXJsLCB0cnVlKS5xdWVyeTtcbiAgICAgICAgYXdhaXQgcmVhZHk7XG4gICAgICAgIGxldCBncmFudFR5cGUgPSAnYXV0aG9yaXphdGlvbl9jb2RlJztcbiAgICAgICAgbGV0IGNvZGVOYW1lID0gJ2NvZGUnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5pbnRlcm5hbEdldFRva2VuKGNvZGVOYW1lLCBjb2RlLCBncmFudFR5cGUsIHNlc3Npb24udmVyaWZpZXIsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldFNlc3Npb24ocmVzdWx0KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2Vzc2lvbi5jbGVhckF1dGhEYXRhKCk7XG4gICAgICAgICAgICBJb25pY1NlY3VyZVdlYlZpZXcuaGlkZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ0lvbmljU2VjdXJlV2ViVmlldy5oaWRlIHN1Y2NlZWRlZDogJywgZGF0YSk7XG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKHRoaXMubG9nVGFnLCAnSW9uaWNTZWN1cmVXZWJWaWV3LmhpZGUgZmFpbGVkOiAnLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2Vzc2lvbi5jbGVhckF1dGhEYXRhKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHJlZnJlc2hTZXNzaW9uKHRva2VuTmFtZSkge1xuICAgICAgICBhd2FpdCB0aGlzLmdldE92ZXJyaWRlRGlzY292ZXJ5VXJsKCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmVmcmVzaCBmbG93Jyk7XG4gICAgICAgIGNvbnN0IHVybCA9IGF3YWl0IHRoaXMuYXV0aENvbmZpZy5nZXRUb2tlblVybCgpO1xuICAgICAgICBjb25zdCBub25jZSA9IGF3YWl0IHRoaXMuc2Vzc2lvbi5nZXROb25jZSgpO1xuICAgICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhd2FpdCB0aGlzLmdldFJlZnJlc2hUb2tlbigpO1xuICAgICAgICBpZiAoIXJlZnJlc2hUb2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyByZWZyZXNoIHRva2VuIGF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXlsb2FkO1xuICAgICAgICBwYXlsb2FkID0ge1xuICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLm9wdGlvbnMuY2xpZW50SUQsXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICAgICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgICAgICAgICBub25jZSxcbiAgICAgICAgICAgIHN0YXRlOiBub25jZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHVybC5wYXlsb2FkKSB7XG4gICAgICAgICAgICBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB1cmwucGF5bG9hZCksIHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWNvbmRhcnlUb2tlbiA9IGZhbHNlO1xuICAgICAgICBpZiAodG9rZW5OYW1lKSB7XG4gICAgICAgICAgICBwYXlsb2FkLnNjb3BlID0gYXdhaXQgdGhpcy5zZXNzaW9uLmdldFRva2VuU2NvcGVzKHRva2VuTmFtZSk7XG4gICAgICAgICAgICBzZWNvbmRhcnlUb2tlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHVybC5oZWFkZXJzID8gdXJsLmhlYWRlcnMgOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfTtcbiAgICAgICAgYXdhaXQgcmVhZHk7XG4gICAgICAgIHJldHVybiBhd2FpdCBVcmxIZWxwZXIucG9zdCh1cmwudXJsIHx8ICcnLCBwYXlsb2FkLCBoZWFkZXJzKVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5zZXRBdXRoUmVzcG9uc2UgJiYgIXNlY29uZGFyeVRva2VuKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNldEF1dGhSZXNwb25zZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYXV0aFJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogcmVzdWx0LmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgICAgICBpZFRva2VuOiByZXN1bHQuaWRfdG9rZW4sXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiByZXN1bHQucmVmcmVzaF90b2tlbixcbiAgICAgICAgICAgICAgICBleHBpcmVzSW46IHJlc3VsdC5leHBpcmVzX2luLFxuICAgICAgICAgICAgICAgIHNjb3BlOiByZXN1bHQuc2NvcGUsXG4gICAgICAgICAgICAgICAgdG9rZW5UeXBlOiByZXN1bHQudG9rZW5fdHlwZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldFNlc3Npb24oYXV0aFJlc3VsdCwgdG9rZW5OYW1lLCByZXN1bHQuc2NvcGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAndG9rZW5Vcmw6ICcgKyB1cmwudXJsKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAnaGVhZGVyczogJywgaGVhZGVycyk7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ3BheWxvYWQ6ICcsIHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IodGhpcy5sb2dUYWcsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2hvd1VybCh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJPcHRpb25zID0ge307XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuZHJvaWRUb29sYmFyQ29sb3IpIHtcbiAgICAgICAgICAgICAgICBjdXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJPcHRpb25zKSwgeyB0b29sYmFyQ29sb3I6IHRoaXMub3B0aW9ucy5hbmRyb2lkVG9vbGJhckNvbG9yIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zYWZhcmlXZWJWaWV3T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGN1ck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1ck9wdGlvbnMpLCB0aGlzLm9wdGlvbnMuc2FmYXJpV2ViVmlld09wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5sb2dUYWcsICd3ZWJWaWV3IG9wdGlvbjogJywgdGhpcy5hdXRoQ29uZmlnLm9wdGlvbnMuaW9zV2ViVmlldyk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrVXJsOiB0aGlzLmF1dGhDb25maWcub3B0aW9ucy5yZWRpcmVjdFVyaSxcbiAgICAgICAgICAgICAgICBpb3NXZWJWaWV3OiB0aGlzLmF1dGhDb25maWcub3B0aW9ucy5pb3NXZWJWaWV3LFxuICAgICAgICAgICAgfSwgY3VyT3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLmxvZ1RhZywgJ3VzaW5nIHBhcmFtczogJywgcGFyYW1zKTtcbiAgICAgICAgICAgIElvbmljU2VjdXJlV2ViVmlldy5zaG93KHBhcmFtcywgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHRoaXMubG9nVGFnLCAncmVzdWx0IDonLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKHRoaXMubG9nVGFnLCAnc2hvdyBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgSW9uaWNBdXRoIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW1wbGVtZW50YXRpb24gPSB0aGlzLmdldEltcGxlbWVudGF0aW9uKG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVc2luZyBjb25maWd1cmF0aW9uIGRpc3BsYXkgdGhlIGF1dGggcHJvdmlkZXIncyBsb2dpbiBVSS5cbiAgICAgKlxuICAgICAqICBUaGUgb3ZlcnJpZGVVcmwgcGFyYW1ldGVyIHNob3VsZCBvbmx5IGJlIHVzZWQgd2hlbiB0aGUgZGVmYXVsdFxuICAgICAqICBkaXNjb3ZlcnkgdXJsIG5lZWRzIHRvIGJlIG92ZXJyb2RlLiAoVGhlIGtub3duIHVzZSBjYXNlIGlzIHdpdGggQXp1cmUgQURcbiAgICAgKiAgY3VzdG9tIHVzZXIgZmxvd3MvcG9saWNpZXMuKVxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBteUF1dGhTZXJ2aWNlLmxvZ2luKFwiXCIpXG4gICAgICovXG4gICAgbG9naW4ob3ZlcnJpZGVVcmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbGVtZW50YXRpb24ubG9naW4ob3ZlcnJpZGVVcmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIHRoZSBsb2dpbiByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBteUF1dGhTZXJ2aWNlLmFkZGl0aW9uYWxMb2dpblBhcmFtZXRlcnMoeyAnbG9naW5faGludCc6ICduZWlnaGJvcnMgY2F0IG5hbWUnIH0pXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1ldGVycyBhbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBsb2dpbiByZXF1ZXN0XG4gICAgICogIGV4YW1wbGVzOiBgbG9naW5faGludGAsIGBkb21haW5faGludGBcbiAgICAgKi9cbiAgICBhZGRpdGlvbmFsTG9naW5QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbGVtZW50YXRpb24uYWRkaXRpb25hbExvZ2luUGFyYW1ldGVycyhwYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhY2Nlc3MgdG9rZW4sIG9uY2UgbG9nZ2VkIGluLCBmb3IgQVBJIGNhbGxzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBteUF1dGhTZXJ2aWNlLmdldEFjY2Vzc1Rva2VuKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbk5hbWUgT3B0aW9uYWwgdG9rZW4gbmFtZSwgb25seSB1c2VkIHdoZW4gbXVsdGlwbGUgdG9rZW5zIGFyZSByZXF1aXJlZCAoQXp1cmUgc3BlY2lmaWMgZmVhdHVyZSkuXG4gICAgICogQHBhcmFtIHNjb3BlcyBUaGUgc2NvcGVzIGZvciB0aGUgYWNjZXNzIHRva2VuLlxuICAgICAqL1xuICAgIGdldEFjY2Vzc1Rva2VuKHRva2VuTmFtZSwgc2NvcGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxlbWVudGF0aW9uLmdldEFjY2Vzc1Rva2VuKHRva2VuTmFtZSwgc2NvcGVzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1bnBhcnNlZCBpZCB0b2tlbi5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogbXlBdXRoU2VydmljZS5nZXRSYXdJZFRva2VuKClcbiAgICAgKi9cbiAgICBnZXRSYXdJZFRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsZW1lbnRhdGlvbi5nZXRSYXdJZFRva2VuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGFyc2VkIGlkIHRva2VuLCBpbmNsdWRlcyByZXF1ZXN0ZWQgc2NvcGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBteUF1dGhTZXJ2aWNlLmdldElkVG9rZW4oKVxuICAgICAqL1xuICAgIGdldElkVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxlbWVudGF0aW9uLmdldElkVG9rZW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmdWxsIG9yaWdpbmFsIGF1dGggcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG15QXV0aFNlcnZpY2UuZ2V0QXV0aFJlc3BvbnNlKClcbiAgICAgKi9cbiAgICBnZXRBdXRoUmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxlbWVudGF0aW9uLmdldEF1dGhSZXNwb25zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGFjY2VzcyB0b2tlbiBpcyBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG15QXV0aFNlcnZpY2UuaXNBY2Nlc3NUb2tlbkF2YWlsYWJsZSgpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5OYW1lIE9wdGlvbmFsIHRva2VuIG5hbWUsIG9ubHkgdXNlZCB3aGVuIG11bHRpcGxlIHRva2VucyBhcmUgcmVxdWlyZWQgKEF6dXJlIHNwZWNpZmljIGZlYXR1cmUpLlxuICAgICAqL1xuICAgIGlzQWNjZXNzVG9rZW5BdmFpbGFibGUodG9rZW5OYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxlbWVudGF0aW9uLmlzQWNjZXNzVG9rZW5BdmFpbGFibGUodG9rZW5OYW1lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBhY2Nlc3MgdG9rZW4gaXMgZXhwaXJlZC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogbXlBdXRoU2VydmljZS5pc0FjY2Vzc1Rva2VuRXhwaXJlZCgpXG4gICAgICovXG4gICAgaXNBY2Nlc3NUb2tlbkV4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxlbWVudGF0aW9uLmlzQWNjZXNzVG9rZW5FeHBpcmVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgcmVmcmVzaCB0b2tlbiBpcyBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG15QXV0aFNlcnZpY2UuaXNSZWZyZXNoVG9rZW5BdmFpbGFibGUoKVxuICAgICAqL1xuICAgIGlzUmVmcmVzaFRva2VuQXZhaWxhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsZW1lbnRhdGlvbi5pc1JlZnJlc2hUb2tlbkF2YWlsYWJsZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJlZnJlc2ggdG9rZW4gaWYgYXZhaWxhYmxlLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBteUF1dGhTZXJ2aWNlLmdldFJlZnJlc2hUb2tlbigpXG4gICAgICovXG4gICAgZ2V0UmVmcmVzaFRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsZW1lbnRhdGlvbi5nZXRSZWZyZXNoVG9rZW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVmcmVzaCB0aGUgc2Vzc2lvbiwgdGhyb3dzIGlmIHJlZnJlc2ggdG9rZW4gaXMgaW52YWxpZCBvciBtaXNzaW5nLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBteUF1dGhTZXJ2aWNlLnJlZnJlc2hTZXNzaW9uKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbk5hbWUgT3B0aW9uYWwgdG9rZW4gbmFtZSwgb25seSB1c2VkIHdoZW4gbXVsdGlwbGUgdG9rZW5zIGFyZSByZXF1aXJlZCAoQXp1cmUgc3BlY2lmaWMgZmVhdHVyZSkuXG4gICAgICovXG4gICAgcmVmcmVzaFNlc3Npb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxlbWVudGF0aW9uLnJlZnJlc2hTZXNzaW9uKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW4sIGFuZCByZWZyZXNoIHRoZSB0b2tlbiBpZiBuZWVkZWQuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGNvbnN0IGlzQXV0aCA9IG15QXV0aFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKClcbiAgICAgKi9cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxlbWVudGF0aW9uLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2cgdGhlIHVzZXIgb3V0IGFuZCBjbGVhciBhbGwgdG9rZW5zICYgZGF0YSBzdG9yZWQgaW4gdGhlIHtAbGluayBUb2tlblN0b3JhZ2VQcm92aWRlcn0gYXMgd2VsbCBhcyBhbnlcbiAgICAgKiBtZXRhZGF0YSByZWxldmFudCB0byB0aGUgZXhpc3Rpbmcgc2Vzc2lvbiBzdWNoIGFzIGFjY2VzcyB0b2tlbiBleHBpcmF0aW9uIHRpbWUuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG15QXV0aFNlcnZpY2UubG9nb3V0KClcbiAgICAgKi9cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxlbWVudGF0aW9uLmxvZ291dCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBpcmUgdGhlIGN1cnJlbnQgYWNjZXNzIHRva2VuLCBidXQga2VlcCB0aGUgcmVmcmVzaCB0b2tlbiwgdXNlZnVsIGZvciB0ZXN0aW5nLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBteUF1dGhTZXJ2aWNlLmV4cGlyZSgpXG4gICAgICovXG4gICAgZXhwaXJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsZW1lbnRhdGlvbi5leHBpcmUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IHRoZSBob3N0aW5nIGFwcCB3aGVuIGxvZ2luIGNhbGxiYWNrcyBoYXBwZW4sIHRoZXNlIHdpbGwgYmUgdG8gdGhlIFVSTCBzcGVjaWZpZWRcbiAgICAgKiAgaW4gdGhlIG9wdGlvbnMgZm9yIFJlZGlyZWN0VXJpLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBteUF1dGhTZXJ2aWNlLmhhbmRsZUxvZ2luQ2FsbGJhY2soKVxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCBjYWxsYmFjayB1cmwgdG8gaGFuZGxlIEBkZWZhdWx0IGRlZmF1bHRzIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmBcbiAgICAgKi9cbiAgICBoYW5kbGVMb2dpbkNhbGxiYWNrKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsZW1lbnRhdGlvbi5oYW5kbGVMb2dpbkNhbGxiYWNrKHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCBieSB0aGUgaG9zdGluZyBhcHAgd2hlbiBsb2dvdXQgY2FsbGJhY2tzIGhhcHBlbnMuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG15QXV0aFNlcnZpY2UuaGFuZGxlTG9nb3V0Q2FsbGJhY2soKVxuICAgICAqL1xuICAgIGhhbmRsZUxvZ291dENhbGxiYWNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsZW1lbnRhdGlvbi5oYW5kbGVMb2dvdXRDYWxsYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYnkgdGhlIGhvc3RpbmcgYXBwIHdoZW4gY2FsbGJhY2tzIGhhcHBlbiwgdGhlc2Ugd2lsbCBiZSB0byB0aGUgVVJMIHNwZWNpZmllZFxuICAgICAqICBpbiB0aGUgb3B0aW9ucyBmb3IgTG9nb3V0VXJsIGFuZCBSZWRpcmVjdFVyaS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogbXlBdXRoU2VydmljZS5oYW5kbGVDYWxsYmFjayh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSBbaGFuZGxlTG9naW5DYWxsYmFja10oI2lpb25pY2F1dGguaGFuZGxlbG9naW5jYWxsYmFjaykgaW5zdGVhZFxuICAgICAqIEBwYXJhbSB1cmwgY2FsbGJhY2sgdXJsIHRvIGhhbmRsZVxuICAgICAqL1xuICAgIGhhbmRsZUNhbGxiYWNrKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsZW1lbnRhdGlvbi5oYW5kbGVMb2dpbkNhbGxiYWNrKHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgY2xlYXIgYWxsIHRva2VucyAmIGRhdGEgc3RvcmVkIGluIHRoZSB7QGxpbmsgVG9rZW5TdG9yYWdlUHJvdmlkZXJ9IGFzIHdlbGwgYXMgYW55XG4gICAgICogbWV0YWRhdGEgcmVsZXZhbnQgdG8gdGhlIGV4aXN0aW5nIHNlc3Npb24gc3VjaCBhcyBhY2Nlc3MgdG9rZW4gZXhwaXJhdGlvbiB0aW1lLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBteUF1dGhTZXJ2aWNlLmNsZWFyU3RvcmFnZSgpXG4gICAgICovXG4gICAgYXN5bmMgY2xlYXJTdG9yYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsZW1lbnRhdGlvbi5jbGVhclN0b3JhZ2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhlIGRpc2NvdmVyeSB1cmwgdXNlZCBmb3IgbG9naW4gaW4gYSB3YXkgdGhhdCBwZXJzaXN0cy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogbXlBdXRoU2VydmljZS5zZXRPdmVycmlkZURpc2NvdmVyeVVybChcImh0dHBzOi8vbXl1cmxcIilcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGRpc2NvdmVyeSB1cmwgdXNlZCBmb3IgbG9naW5cbiAgICAgKi9cbiAgICBzZXRPdmVycmlkZURpc2NvdmVyeVVybCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbGVtZW50YXRpb24uc2V0T3ZlcnJpZGVEaXNjb3ZlcnlVcmwodXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYXIgcHJldmlvc2x5IHBlcnNpc3RlZCBvdmVycmlkZSBvZiB0aGUgZGlzY292ZXJ5IHVybCB1c2VkIGZvciBsb2dpbi5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogbXlBdXRoU2VydmljZS5jbGVhck92ZXJyaWRlRGlzY292ZXJ5VXJsKClcbiAgICAgKi9cbiAgICBjbGVhck92ZXJyaWRlRGlzY292ZXJ5VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsZW1lbnRhdGlvbi5jbGVhck92ZXJyaWRlRGlzY292ZXJ5VXJsKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIHByZXZpb3NseSBwZXJzaXN0ZWQgb3ZlcnJpZGUgb2YgdGhlIGRpc2NvdmVyeSB1cmwgdXNlZCBmb3IgbG9naW4uXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG15QXV0aFNlcnZpY2UuZ2V0T3ZlcnJpZGVEaXNjb3ZlcnlVcmwoKVxuICAgICAqL1xuICAgIGdldE92ZXJyaWRlRGlzY292ZXJ5VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsZW1lbnRhdGlvbi5nZXRPdmVycmlkZURpc2NvdmVyeVVybCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHRpbWUgdGhlIGFjY2VzcyB0b2tlbiB3aWxsIGV4cGlyZSBpbiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZXBvY2guXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG15QXV0aFNlcnZpY2UuZ2V0QWNjZXNzVG9rZW5FeHBpcmF0aW9uKClcbiAgICAgKi9cbiAgICBnZXRBY2Nlc3NUb2tlbkV4cGlyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxlbWVudGF0aW9uLmdldEFjY2Vzc1Rva2VuRXhwaXJhdGlvbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIHdoaWNoIGNhbiBiZSBvdmVycmlkZGVuIHRvIGhhbmRsZSBzdWNjZXNzZnVsIGxvZ2luIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEB1c2FnZVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBhc3luYyBvbkxvZ2luU3VjY2VzcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgKiAgLy8gZG8gc29tZXRoaW5nIGhlcmVcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHJlc3VsdCB0aGUgYXV0aCByZXN1bHQgZnJvbSBhIHN1Y2Nlc3NmdWwgbG9naW5cbiAgICAgKi9cbiAgICBvbkxvZ2luU3VjY2VzcyhyZXN1bHQpIHsgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgd2hpY2ggY2FuIGJlIG92ZXJyaWRkZW4gdG8gaGFuZGxlIHN1Y2Nlc3NmdWwgbG9nb3V0IGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEB1c2FnZVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBhc3luYyBvbkxvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgKiAgLy8gZG8gc29tZXRoaW5nIGhlcmVcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgb25Mb2dvdXQoKSB7IH1cbiAgICBnZXRJbXBsZW1lbnRhdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHN3aXRjaCAob3B0aW9ucy5wbGF0Zm9ybSkge1xuICAgICAgICAgICAgY2FzZSAnd2ViJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElvbmljQXV0aFdlYihvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uTG9naW5TdWNjZXNzOiB0aGlzLm9uTG9naW5TdWNjZXNzLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIG9uTG9nb3V0OiB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW9uaWNOYXRpdmVBdXRoKG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgICAgb25Mb2dpblN1Y2Nlc3M6IHRoaXMub25Mb2dpblN1Y2Nlc3MuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgb25Mb2dvdXQ6IHRoaXMub25Mb2dvdXQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgSW9uaWNBdXRoLCBOYXRpdmVTdG9yYWdlUHJvdmlkZXIsIFdlYlN0b3JhZ2VQcm92aWRlciB9O1xuIl0sIm5hbWVzIjpbIk5nWm9uZSIsIklvbmljQXV0aCIsIkJlaGF2aW9yU3ViamVjdCIsIm5hdGl2ZUlvbmljQXV0aE9wdGlvbnMiLCJ3ZWJJb25pY0F1dGhPcHRpb25zIiwiQXV0aGVudGljYXRpb25TZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJwbGF0Zm9ybSIsIm5nWm9uZSIsInZhdWx0U2VydmljZSIsImlzIiwidG9rZW5TdG9yYWdlUHJvdmlkZXIiLCJ2YXVsdCIsImF1dGhlbnRpY2F0aW9uQ2hhbmdlJCIsImF1dGhlbnRpY2F0aW9uQ2hhbmdlIiwiYXNPYnNlcnZhYmxlIiwiaXNBdXRoZW50aWNhdGVkIiwidGhlbiIsImF1dGhlbnRpY2F0ZWQiLCJvbkF1dGhDaGFuZ2UiLCJvbkxvZ2luU3VjY2VzcyIsIm9uTG9nb3V0IiwicnVuIiwibmV4dCIsImkwIiwiZmFjdG9yeSIsInByb3ZpZGVkSW4iLCJUYWIxUGFnZSIsImF1dGhlbnRpY2F0aW9uU2VydmljZSIsInJlc3VtZSIsInN1YnNjcmliZSIsInVwZGF0ZSIsImlvblZpZXdEaWRFbnRlciIsImlzRW1wdHkiLCJpc0xvY2tlZCIsImxvZ2luIiwibG9nb3V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVmcmVzaCIsImxvZyIsImlzUmVmcmVzaFRva2VuQXZhaWxhYmxlIiwidG9rZW4iLCJnZXRBY2Nlc3NUb2tlbiIsInJlZnJlc2hTZXNzaW9uIiwiYXRva2VuIiwiYWxlcnQiLCJsb2NrIiwicHJlc2VudEFsZXJ0IiwidW5sb2NrIiwiY2hlY2tJc0VtcHR5IiwiY2xlYXIiLCJzZXREYXRhIiwiZ2V0RGF0YSIsImRhdGEiLCJtZXNzYWdlIiwiY29kZSIsImNoZWNrQmlvIiwiaGFzQmlvIiwiaGFzQmlvbWV0cmljcyIsInVzZVNlY3VyZSIsImVuYWJsZWQiLCJzZXRUb1Bhc3Njb2RlIiwic3dpdGNoUGFzc2NvZGUiLCJzZXRUb0JvdGgiLCJzd2l0Y2hCb3RoIiwic2VsZWN0b3JzIiwiZGVjbHMiLCJ2YXJzIiwiY29uc3RzIiwidGVtcGxhdGUiLCJjdHgiLCJDYXBhY2l0b3IiLCJCcm93c2VyVmF1bHQiLCJEZXZpY2UiLCJEZXZpY2VTZWN1cml0eVR5cGUiLCJWYXVsdCIsIlZhdWx0VHlwZSIsIlZhdWx0U2VydmljZSIsImFsZXJ0Q29udHJvbGxlciIsImtleSIsInR5cGUiLCJEZXZpY2VTZWN1cml0eSIsImRldmljZVNlY3VyaXR5VHlwZSIsIkJpb21ldHJpY3MiLCJsb2NrQWZ0ZXJCYWNrZ3JvdW5kZWQiLCJzaG91bGRDbGVhclZhdWx0QWZ0ZXJUb29NYW55RmFpbGVkQXR0ZW1wdHMiLCJjdXN0b21QYXNzY29kZUludmFsaWRVbmxvY2tBdHRlbXB0cyIsInVubG9ja1ZhdWx0T25Mb2FkIiwiaW5pdCIsInJlYWR5IiwiZ2V0UGxhdGZvcm0iLCJjb25maWciLCJvbkNvbmZpZ0NoYW5nZWQiLCJvbkxvY2siLCJvblVubG9jayIsIm9uRXJyb3IiLCJzZXRIaWRlU2NyZWVuT25CYWNrZ3JvdW5kIiwiaGVhZGVyIiwiY3JlYXRlIiwiYnV0dG9ucyIsInByZXNlbnQiLCJyb2xlIiwib25EaWREaXNtaXNzIiwiQm90aCIsInVwZGF0ZUNvbmZpZyIsIlNlY3VyZVN0b3JhZ2UiLCJOb25lIiwic2V0VmFsdWUiLCJTeXN0ZW1QYXNzY29kZSIsIm1zZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRWYWx1ZSIsImlzQmlvbWV0cmljc0VuYWJsZWQiLCJjb21tb25qc0dsb2JhbCIsImdsb2JhbFRoaXMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJzZWxmIiwicmVxdWlyZXNQb3J0IiwicmVxdWlyZWQiLCJwb3J0IiwicHJvdG9jb2wiLCJzcGxpdCIsImhhcyIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwidW5kZWYiLCJkZWNvZGUiLCJpbnB1dCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJlIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXVlcnlzdHJpbmciLCJxdWVyeSIsInBhcnNlciIsInJlc3VsdCIsInBhcnQiLCJleGVjIiwidmFsdWUiLCJxdWVyeXN0cmluZ2lmeSIsIm9iaiIsInByZWZpeCIsInBhaXJzIiwiY2FsbCIsImlzTmFOIiwicHVzaCIsImxlbmd0aCIsImpvaW4iLCJwYXJzZSIsInF1ZXJ5c3RyaW5naWZ5XzEiLCJjb250cm9sT3JXaGl0ZXNwYWNlIiwiQ1JIVExGIiwic2xhc2hlcyIsInByb3RvY29scmUiLCJ3aW5kb3dzRHJpdmVMZXR0ZXIiLCJ0cmltTGVmdCIsInN0ciIsInRvU3RyaW5nIiwicnVsZXMiLCJzYW5pdGl6ZSIsImFkZHJlc3MiLCJ1cmwiLCJpc1NwZWNpYWwiLCJOYU4iLCJ1bmRlZmluZWQiLCJpZ25vcmUiLCJoYXNoIiwibG9sY2F0aW9uIiwibG9jIiwiZ2xvYmFsVmFyIiwibG9jYXRpb24iLCJmaW5hbGRlc3RpbmF0aW9uIiwiVXJsIiwidW5lc2NhcGUiLCJwYXRobmFtZSIsInRlc3QiLCJocmVmIiwic2NoZW1lIiwiZXh0cmFjdFByb3RvY29sIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsImZvcndhcmRTbGFzaGVzIiwib3RoZXJTbGFzaGVzIiwic2xhc2hlc0NvdW50IiwicmVzdCIsInNsaWNlIiwicmVzb2x2ZSIsInJlbGF0aXZlIiwiYmFzZSIsInBhdGgiLCJjb25jYXQiLCJpIiwibGFzdCIsInVuc2hpZnQiLCJ1cCIsInNwbGljZSIsImV4dHJhY3RlZCIsImluc3RydWN0aW9uIiwiaW5kZXgiLCJpbnN0cnVjdGlvbnMiLCJsYXN0SW5kZXhPZiIsImluZGV4T2YiLCJjaGFyQXQiLCJob3N0IiwiaG9zdG5hbWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYXV0aCIsIm9yaWdpbiIsInNldCIsImZuIiwicG9wIiwiY2hhciIsImlucyIsInRvU3RyaW5nJDEiLCJxcyIsInVybFBhcnNlIiwiVXJsSW5mbyIsImhlYWRlcnMiLCJwYXlsb2FkIiwiTG9nZ2VyIiwibG9nX2RlYnVnIiwibG9nX2Vycm9yIiwic2V0TG9nTGV2ZWwiLCJsb2dMZXZlbCIsImRlYnVnIiwiYXJncyIsImxvZ2dpbmciLCJfaW9uaWNBdXRoTG9nZ2luZyIsIm1lc3NhZ2VzIiwiQURESU5HX0NPT0tJRVNfTk9UX1NVUFBPUlRFRCIsIkRBVEFfVFlQRV9NSVNNQVRDSCIsIklOVkFMSURfQ0xJRU5UX0FVVEhfQUxJQVMiLCJJTlZBTElEX0NMSUVOVF9BVVRIX01PREUiLCJJTlZBTElEX0NMSUVOVF9BVVRIX09QVElPTlMiLCJJTlZBTElEX0NMSUVOVF9BVVRIX1BLQ1NfUEFTU1dPUkQiLCJJTlZBTElEX0NMSUVOVF9BVVRIX1JBV19QS0NTIiwiSU5WQUxJRF9EQVRBX1NFUklBTElaRVIiLCJJTlZBTElEX0ZPTExPV19SRURJUkVDVF9WQUxVRSIsIklOVkFMSURfSEVBREVSU19WQUxVRSIsIklOVkFMSURfSFRUUF9NRVRIT0QiLCJJTlZBTElEX1BBUkFNU19WQUxVRSIsIklOVkFMSURfUkVTUE9OU0VfVFlQRSIsIklOVkFMSURfU1NMX0NFUlRfTU9ERSIsIklOVkFMSURfVElNRU9VVF9WQUxVRSIsIk1BTkRBVE9SWV9GQUlMIiwiTUFOREFUT1JZX1NVQ0NFU1MiLCJMT0dPVVRfVU5BQkxFX1RPX1JFVFJJRVZFX1RPS0VOIiwianNVdGlsIiwiZ2V0VHlwZU9mIiwib2JqZWN0IiwiaGVscGVycyIsIm1lcmdlSGVhZGVycyIsImdsb2JhbEhlYWRlcnMiLCJsb2NhbEhlYWRlcnMiLCJnbG9iYWxLZXlzIiwia2V5cyIsImNoZWNrRm9yVmFsaWRTdHJpbmdWYWx1ZSIsImxpc3QiLCJvbkludmFsaWRWYWx1ZU1lc3NhZ2UiLCJFcnJvciIsInRyaW0iLCJjaGVja0tleVZhbHVlUGFpck9iamVjdCIsImFsbG93ZWRDaGlsZHJlbiIsImNoZWNrSHR0cE1ldGhvZCIsIm1ldGhvZCIsInZhbGlkSHR0cE1ldGhvZHMiLCJjaGVja1Jlc3BvbnNlVHlwZSIsInZhbGlkUmVzcG9uc2VUeXBlcyIsImNoZWNrU2VyaWFsaXplciIsInNlcmlhbGl6ZXIiLCJ2YWxpZFNlcmlhbGl6ZXJzIiwiY2hlY2tGb3JCbGFja2xpc3RlZEhlYWRlcktleSIsImNoZWNrRm9ySW52YWxpZEhlYWRlclZhbHVlIiwiY2hlY2tUaW1lb3V0VmFsdWUiLCJ0aW1lb3V0IiwiY2hlY2tGb2xsb3dSZWRpcmVjdFZhbHVlIiwiZm9sbG93IiwiY2hlY2tIZWFkZXJzT2JqZWN0IiwiY2hlY2tQYXJhbXNPYmplY3QiLCJwYXJhbXMiLCJnZXRNYXRjaGluZ0hvc3RIZWFkZXJzIiwiaGVhZGVyc0xpc3QiLCJtYXRjaGVzIiwiZG9tYWluIiwiZ2V0TWVyZ2VkSGVhZGVycyIsInJlcXVlc3RIZWFkZXJzIiwicHJlZGVmaW5lZEhlYWRlcnMiLCJob3N0SGVhZGVycyIsIm1lcmdlZEhlYWRlcnMiLCJnZXRBbGxvd2VkRGF0YVR5cGVzIiwiZGF0YVNlcmlhbGl6ZXIiLCJnZXRQcm9jZXNzZWREYXRhIiwiY3VycmVudERhdGFUeXBlIiwiYWxsb3dlZERhdGFUeXBlcyIsInRleHQiLCJoYW5kbGVNaXNzaW5nQ2FsbGJhY2tzIiwic3VjY2Vzc0ZuIiwiZmFpbEZuIiwiaGFuZGxlTWlzc2luZ09wdGlvbnMiLCJvcHRpb25zIiwiZ2xvYmFscyIsInJlc3BvbnNlVHlwZSIsImZvbGxvd1JlZGlyZWN0IiwiZmlsZVBhdGgiLCJuYW1lIiwiZ2xvYmFsQ29uZmlncyIsImh0dHAiLCJzZW5kUmVxdWVzdCIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwiY29yZG92YSIsInBvc3QiLCJnZXQiLCJwdXQiLCJwYXRjaCIsImRlbCIsImhlYWQiLCJVcmxIZWxwZXIiLCJidWlsZFVybCIsIlVSTFNlYXJjaFBhcmFtcyIsInVybE9iaiIsIlVSTCIsImZvckVhY2giLCJ2YWwiLCJzZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJsb2dUYWciLCJwYXJzZUhhc2giLCJ1cmxIYXNoIiwicXVlcmllcyIsInRlbXAiLCJsIiwiUHJvbWlzZSIsInJlamVjdCIsIkJhc2VTdG9yYWdlIiwiYWNjZXNzVG9rZW5LZXkiLCJyZWZyZXNoVG9rZW5LZXkiLCJpZFRva2VuS2V5IiwiYXV0aFJlc3BvbnNlS2V5Iiwic2V0Q2xpZW50SWQiLCJjbGllbnRJZCIsImZvcm1hdEtleUZvclRva2VuIiwia2V5TmFtZSIsInRva2VuTmFtZSIsImlzVG9rZW5TdG9yYWdlUHJvdmlkZXIiLCJwcm92aWRlciIsImdldEF1dGhSZXNwb25zZSIsImdldElkVG9rZW4iLCJnZXRSZWZyZXNoVG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsInNldEF1dGhSZXNwb25zZSIsInNldElkVG9rZW4iLCJzZXRSZWZyZXNoVG9rZW4iLCJpc0lWNVVzZXJJbnRlcmZhY2UiLCJBdXRoSWRlbnRpdHlWYXVsdDVTdG9yYWdlIiwiX2EiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hUb2tlbiIsImlkVG9rZW4iLCJyZXNwb25zZSIsImNhbGxiYWNrIiwiQXV0aElkZW50aXR5VmF1bHRTdG9yYWdlIiwiaXYiLCJlbnN1cmVWYXVsdENvbmZpZ3VyZWQiLCJzZXRQYXNzY29kZUlmTmVlZGVkIiwiZ2V0VmF1bHQiLCJpdkNvbmZpZyIsImdldENvbmZpZyIsImlzUGFzc2NvZGVTZXR1cE5lZWRlZCIsInNldFBhc3Njb2RlIiwic3RvcmVWYWx1ZSIsIkF1dGhMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImF1dGhSZXNwb25zZVN0cmluZyIsImF1dGhSZXNwU3RyaW5nIiwicmVtb3ZlSXRlbSIsIlNlc3Npb25IZWxwZXIiLCJzdG9yYWdlIiwiYXV0aERhdGFLZXkiLCJleHBpcmVzQXRLZXkiLCJub25jZUtleSIsInRva2VuU2NvcGVzIiwib3ZlcnJpZGVVcmxLZXkiLCJleHBpcmVzQXRLZXlzIiwidG9rZW5TY29wZXNLZXlzIiwiZ2V0QXV0aERhdGEiLCJkYXRhS2V5Iiwic2Vzc2lvbiIsInNldEF1dGhEYXRhIiwic2V0T3ZlcnJpZGVVcmwiLCJnZXRPdmVycmlkZVVybCIsIm92ZXJyaWRlVXJsIiwiY2xlYXJPdmVycmlkZVVybCIsInJlbW92ZSIsImNsZWFyQXV0aERhdGEiLCJnZXRFeHBpcmVzQXQiLCJleHBpcmVzQXRLZXlOYW1lIiwiZXhwaXJlc0F0Iiwic2V0RXhwaXJlc0F0IiwiZ2V0VG9rZW5TY29wZXMiLCJ0b2tlblNjb3Blc0tleSIsInNldFRva2VuU2NvcGVzIiwic2NvcGVzIiwiY2xlYXJUb2tlblNjb3BlcyIsImNsZWFyRXhwaXJlc0F0IiwiZ2V0Tm9uY2UiLCJub25jZSIsInNldE5vbmNlIiwiY2xlYXJOb25jZSIsInRvQnl0ZUFycmF5XzEiLCJ0b0J5dGVBcnJheSIsImZyb21CeXRlQXJyYXlfMSIsImZyb21CeXRlQXJyYXkiLCJsb29rdXAiLCJyZXZMb29rdXAiLCJBcnIiLCJVaW50OEFycmF5IiwiQXJyYXkiLCJsZW4iLCJjaGFyQ29kZUF0IiwiZ2V0TGVucyIsImI2NCIsInZhbGlkTGVuIiwicGxhY2VIb2xkZXJzTGVuIiwiX2J5dGVMZW5ndGgiLCJ0bXAiLCJsZW5zIiwiYXJyIiwiY3VyQnl0ZSIsInRyaXBsZXRUb0Jhc2U2NCIsIm51bSIsImVuY29kZUNodW5rIiwidWludDgiLCJzdGFydCIsImVuZCIsIm91dHB1dCIsImV4dHJhQnl0ZXMiLCJwYXJ0cyIsIm1heENodW5rTGVuZ3RoIiwibGVuMiIsImdlbmVyYXRlQ2hhbGxlbmdlQW5kVmVyaWZpZXIiLCJ1c2VCYXNlNjRTdHJpbmciLCJ2ZXJpZmllclBsYWluIiwiZ2V0UmFuZG9tQ2hhcmFjdGVycyIsInZlcmlmaWVySGFzaEFycmF5Iiwic2hhMjU2IiwiY2hhbGxlbmdlIiwiYmFzZTY0RW5jb2RlIiwidmVyaWZpZXIiLCJnZXRSYW5kb21Ob25jZSIsImJ1ZmZlclRvU3RyaW5nIiwiYXJyYXlCdWZmZXIiLCJjb2RlciIsIlRleHREZWNvZGVyIiwicGFyc2VKd3QiLCJoZWFkZXJTdHJpbmciLCJiYXNlNjREZWNvZGUiLCJwYXlsb2FkU3RyaW5nIiwiYnl0ZUFycmF5IiwiYmFzZTY0U3RyaW5nIiwidXJsU3RyaW5nIiwiZXNjYXBlVXJsIiwiZW5jb2RlZFN0cmluZyIsInVuZXNjYXBlZFN0cmluZyIsInVuZXNjYXBlVXJsIiwic3RyaW5nIiwiYmFzZVN0cmluZyIsIm5ld1N0cmluZyIsInMiLCJjaHJzeiIsInNhZmVfYWRkIiwieCIsInkiLCJsc3ciLCJtc3ciLCJTIiwiWCIsIm4iLCJSIiwiQ2giLCJ6IiwiTWFqIiwiU2lnbWEwMjU2IiwiU2lnbWExMjU2IiwiR2FtbWEwMjU2IiwiR2FtbWExMjU2IiwiY29yZV9zaGEyNTYiLCJtIiwiSyIsIkhBU0giLCJXIiwiYSIsImIiLCJjIiwiZCIsImYiLCJnIiwiaCIsIlQxIiwiVDIiLCJqIiwic3RyMmJpbmIiLCJiaW4iLCJtYXNrIiwiVXRmOEVuY29kZSIsInV0ZnRleHQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJiaW5iMmhleCIsImJpbmFycmF5IiwiaGV4X3RhYiIsImhleDJ1aW50OCIsImJ5dGVzIiwiTWF0aCIsImNlaWwiLCJwYXJzZUludCIsInN1YnN0ciIsInZhbHVlcyIsImFycmF5IiwiZmxvb3IiLCJyYW5kb20iLCJyZWFkeSQxIiwiREVWSUNFX1JFQURZX1RJTUVPVVQiLCJyZWFkeVRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwid2FybiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsIklvbmljQXV0aENvbmZpZyIsImRlZmF1bHREaXNjb3ZlcnlVcmwiLCJvdmVycmlkZURpc2NvdmVyeVVybCIsImN1cnJlbnREaXNjb3ZlcnlVcmwiLCJsb2NhdGlvbnMiLCJsb2dnZXIiLCJ2YWxpZGF0ZUxvY2F0aW9ucyIsImxvYWRMb2NhdGlvbnMiLCJkaXNjb3ZlcnlVcmwiLCJyZXNwIiwiZmV0Y2giLCJqc29uIiwiZ2V0SXNzdWVyIiwiZnJlZUdsb2JhbCIsImZyZWVHbG9iYWwkMSIsImZyZWVTZWxmIiwicm9vdCIsIkZ1bmN0aW9uIiwicm9vdCQxIiwiU3ltYm9sIiwiU3ltYm9sJDEiLCJvYmplY3RQcm90byQxIiwibmF0aXZlT2JqZWN0VG9TdHJpbmckMSIsInN5bVRvU3RyaW5nVGFnJDEiLCJ0b1N0cmluZ1RhZyIsImdldFJhd1RhZyIsImlzT3duIiwidGFnIiwidW5tYXNrZWQiLCJvYmplY3RQcm90byIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwic3ltVG9TdHJpbmdUYWciLCJiYXNlR2V0VGFnIiwiaXNPYmplY3RMaWtlIiwic3ltYm9sVGFnIiwiaXNTeW1ib2wiLCJhcnJheU1hcCIsIml0ZXJhdGVlIiwiaXNBcnJheSIsImlzQXJyYXkkMSIsIklORklOSVRZIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xUb1N0cmluZyIsImJhc2VUb1N0cmluZyIsImFycmF5UmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpbml0QWNjdW0iLCJiYXNlUHJvcGVydHlPZiIsImRlYnVycmVkTGV0dGVycyIsImRlYnVyckxldHRlciIsImRlYnVyckxldHRlciQxIiwicmVMYXRpbiIsInJzQ29tYm9NYXJrc1JhbmdlJDEiLCJyZUNvbWJvSGFsZk1hcmtzUmFuZ2UkMSIsInJzQ29tYm9TeW1ib2xzUmFuZ2UkMSIsInJzQ29tYm9SYW5nZSQxIiwicnNDb21ibyQxIiwicmVDb21ib01hcmsiLCJSZWdFeHAiLCJkZWJ1cnIiLCJyZUFzY2lpV29yZCIsImFzY2lpV29yZHMiLCJyZUhhc1VuaWNvZGVXb3JkIiwiaGFzVW5pY29kZVdvcmQiLCJyc0FzdHJhbFJhbmdlIiwicnNDb21ib01hcmtzUmFuZ2UiLCJyZUNvbWJvSGFsZk1hcmtzUmFuZ2UiLCJyc0NvbWJvU3ltYm9sc1JhbmdlIiwicnNDb21ib1JhbmdlIiwicnNEaW5nYmF0UmFuZ2UiLCJyc0xvd2VyUmFuZ2UiLCJyc01hdGhPcFJhbmdlIiwicnNOb25DaGFyUmFuZ2UiLCJyc1B1bmN0dWF0aW9uUmFuZ2UiLCJyc1NwYWNlUmFuZ2UiLCJyc1VwcGVyUmFuZ2UiLCJyc1ZhclJhbmdlIiwicnNCcmVha1JhbmdlIiwicnNBcG9zJDEiLCJyc0JyZWFrIiwicnNDb21ibyIsInJzRGlnaXRzIiwicnNEaW5nYmF0IiwicnNMb3dlciIsInJzTWlzYyIsInJzRml0eiIsInJzTW9kaWZpZXIiLCJyc05vbkFzdHJhbCIsInJzUmVnaW9uYWwiLCJyc1N1cnJQYWlyIiwicnNVcHBlciIsInJzWldKIiwicnNNaXNjTG93ZXIiLCJyc01pc2NVcHBlciIsInJzT3B0Q29udHJMb3dlciIsInJzT3B0Q29udHJVcHBlciIsInJlT3B0TW9kIiwicnNPcHRWYXIiLCJyc09wdEpvaW4iLCJyc09yZExvd2VyIiwicnNPcmRVcHBlciIsInJzU2VxIiwicnNFbW9qaSIsInJlVW5pY29kZVdvcmQiLCJ1bmljb2RlV29yZHMiLCJ3b3JkcyIsInBhdHRlcm4iLCJndWFyZCIsInJzQXBvcyIsInJlQXBvcyIsImNyZWF0ZUNvbXBvdW5kZXIiLCJzbmFrZUNhc2UiLCJ3b3JkIiwic25ha2VDYXNlJDEiLCJ2YWxpZEF1dGhvcml6YXRpb25QYXJhbXMiLCJPQXV0aFBhY2tlciIsInBhY2tQYXJhbXMiLCJ2YWxpZFBhcmFtcyIsInNuYWtlZEtleSIsImluY2x1ZGVzIiwiSW9uaWNBdXRoMENvbmZpZyIsImdldEF1dGhvcml6ZVVybCIsInBhcmFtZXRlcnMiLCJhc3NpZ24iLCJjbGllbnRJRCIsInJlZGlyZWN0VXJpIiwiYXVkaWVuY2UiLCJzdGF0ZSIsInNjb3BlIiwiUEtDRSIsImNvZGVfY2hhbGxlbmdlX21ldGhvZCIsImNvZGVfY2hhbGxlbmdlIiwid2ViQmFzZSIsImNsaWVudF9zZWNyZXQiLCJjbGllbnRTZWNyZXQiLCJ3ZWJBdXRoRmxvdyIsInJlc3BvbnNlX3R5cGUiLCJyZXNwb25zZV9tb2RlIiwiZ2V0TG9nb3V0VXJsIiwibG9nb3V0VXJsIiwiZ2V0VG9rZW5VcmwiLCJJb25pY0F6dXJlQ29uZmlnIiwicmV0dXJuVG8iLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJBY2NlcHQiLCJJb25pY0NvZ25pdG9Db25maWciLCJhdXRoX2VuZHBvaW50IiwibG9nb3V0VXJpIiwiYXV0aF9oZWFkZXIiLCJUZXh0RW5jb2RlciIsIklvbmljR2VuZXJhbEF1dGhDb25maWciLCJpc3N1ZXIiLCJlbmRzV2l0aCIsImdlbmVyYWxDb25maWciLCJhbHdheXNTZW5kQ2xpZW50U2VjcmV0T25Mb2dpbiIsIklvbmljU2FsZXNGb3JjZUF1dGhDb25maWciLCJJb25pY1BpbmdBdXRoQ29uZmlnIiwiSW9uaWNPbmVMb2dpbkNvbmZpZyIsIm9uR2V0UmF3SWRUb2tlbiIsImlkVG9rZW5IaW50IiwiSW9uaWNPa3RhQXV0aENvbmZpZyIsIklkZW50aXR5U2VydmVyQXV0aENvbmZpZyIsIklvbmljS2V5Q2xvYWtDb25maWciLCJXZWJTdG9yYWdlUHJvdmlkZXIiLCJrZXlQcmVmaXgiLCJnZXRLZXkiLCJzdGFydHNXaXRoIiwiTmF0aXZlU3RvcmFnZVByb3ZpZGVyIiwicmVzIiwicmVqIiwiX3dpblBhcmFtIiwiSW9uaWNCYXNlQXV0aCIsImhhbmRsZXJzIiwiYWRkZWRMb2dpblBhcmFtZXRlcnMiLCJnZXRTdG9yYWdlUHJvdmlkZXIiLCJhdXRoQ29uZmlnIiwiZ2V0UmF3SWRUb2tlbiIsImF1dGhSZXN1bHQiLCJzZXRTdG9yYWdlT25Mb2NrQ2FsbGJhY2siLCJvbkxvY2tDYWxsYmFjayIsImF1dGhMb2NhbFN0b3JhZ2UiLCJhdXRoSVY1U3RvcmFnZSIsImF1dGhJVlN0b3JhZ2UiLCJ2YWxpZGF0ZUlkVG9rZW4iLCJzZXRTZXNzaW9uIiwiZXhwaXJlc0luIiwiRGF0ZSIsImdldFRpbWUiLCJhZGRpdGlvbmFsTG9naW5QYXJhbWV0ZXJzIiwic2V0T3ZlcnJpZGVEaXNjb3ZlcnlVcmwiLCJjbGVhck92ZXJyaWRlRGlzY292ZXJ5VXJsIiwiZ2V0T3ZlcnJpZGVEaXNjb3ZlcnlVcmwiLCJnZXRBY2Nlc3NUb2tlbkV4cGlyYXRpb24iLCJwcmV2aW91c092ZXJyaWRlVXJsIiwic2hvd1VybCIsImNhbGxiYWNrU3RyaW5nIiwiZXJyb3JEZXNjcmlwdGlvbiIsImludGVybmFsSGFuZGxlQ2FsbGJhY2siLCJldmVudCIsImNhdGNoIiwiaGFuZGxlTG9naW5DYWxsYmFjayIsImhhbmRsZUxvZ291dENhbGxiYWNrIiwiZmluaXNoTG9nb3V0IiwiaGFuZGxlQ2FsbGJhY2siLCJpc0FjY2Vzc1Rva2VuQXZhaWxhYmxlIiwiaXNBY2Nlc3NUb2tlbkV4cGlyZWQiLCJjbGVhclN0b3JhZ2UiLCJpbnRlcm5hbEdldFRva2VuIiwiY29kZU5hbWUiLCJncmFudFR5cGUiLCJ0ZW1wQWNjZXNzVG9rZW4iLCJpc0F1dGhlbnRpY2F0ZWRUb2tlbiIsImF1dGhSZXNwb25zZSIsImV4cGlyZSIsImhpZGUiLCJJb25pY0F1dGhXZWIiLCJfY29kZU5hbWUiLCJfY29kZSIsIl9ncmFudFR5cGUiLCJfdmVyaWZpZXIiLCJ1cmxJbmZvIiwiaGlkZGVuTG9hZFVybCIsInBhcnNlZFVybCIsImFjY2Vzc190b2tlbiIsImlkX3Rva2VuIiwicmVmcmVzaF90b2tlbiIsImV4cGlyZXNfaW4iLCJ0b2tlblR5cGUiLCJ0b2tlbl90eXBlIiwiZXh0ZXJuYWxDYWxsYmFjayIsInF1ZXJ5X3BhcmFtcyIsImdyYW50X3R5cGUiLCJjbGllbnRfaWQiLCJjb2RlX3ZlcmlmaWVyIiwicmVkaXJlY3RfdXJpIiwicG9zdFRva2VuIiwiaGFuZGxlQXV0aFJlc3VsdCIsInRva2VuVXJsSW5mbyIsInRva2VuVXJsIiwiYm9keVBhcmFtcyIsIm1hcCIsImJvZHkiLCJvayIsImpzb25SZXMiLCJlcnJvck1lc3NhZ2UiLCJlcnJvcl9kZXNjcmlwdGlvbiIsImlmcmFtZUxvY2F0aW9uIiwiaWZyYW1lIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInNyYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJ0aGF0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNvbnRlbnRXaW5kb3ciLCJjb250ZW50RG9jdW1lbnQiLCJlbmNvZGVVUkkiLCJjbGVhckludGVydmFsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiX29wdGlvbnMiLCJ1cmxUb0Nsb3NlV2luZG93IiwiaW1wbGljaXRMb2dpbiIsInBvcHVwTG9jYXRpb24iLCJwb3B1cCIsIm9wZW4iLCJjbG9zZWQiLCJwb3B1cFN0cmluZyIsImNsb3NlIiwiU2VjdXJlV2ViVmlldyIsImlzQXZhaWxhYmxlIiwiZXJyb3JIYW5kbGVyIiwic2hvdyIsIm9uU3VjY2VzcyIsImFuaW1hdGVkIiwiZ2V0Vmlld0hhbmRsZXJQYWNrYWdlcyIsInVzZUN1c3RvbVRhYnNJbXBsZW1lbnRhdGlvbiIsInBhY2thZ2VOYW1lIiwiY29ubmVjdFRvU2VydmljZSIsIndhcm1VcCIsIm1heUxhdW5jaFVybCIsIklvbmljU2VjdXJlV2ViVmlldyIsIklvbmljTmF0aXZlQXV0aCIsImFyZ3VtZW50cyIsInByb2ZpbGVfaW5mbyIsIl9leHRlcm5hbENhbGxiYWNrIiwic2Vjb25kYXJ5VG9rZW4iLCJjdXJPcHRpb25zIiwiYW5kcm9pZFRvb2xiYXJDb2xvciIsInRvb2xiYXJDb2xvciIsInNhZmFyaVdlYlZpZXdPcHRpb25zIiwiaW9zV2ViVmlldyIsImNhbGxiYWNrVXJsIiwiaW1wbGVtZW50YXRpb24iLCJnZXRJbXBsZW1lbnRhdGlvbiIsImJpbmQiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzZdfQ==