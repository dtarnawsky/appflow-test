"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
class Tab2PageRoutingModule {
}
Tab2PageRoutingModule.ɵfac = function Tab2PageRoutingModule_Factory(t) { return new (t || Tab2PageRoutingModule)(); };
Tab2PageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Tab2PageRoutingModule });
Tab2PageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Tab2PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class Tab2PageModule {
}
Tab2PageModule.ɵfac = function Tab2PageModule_Factory(t) { return new (t || Tab2PageModule)(); };
Tab2PageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Tab2PageModule });
Tab2PageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Tab2PageModule, { declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule] }); })();


/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var _Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-enterprise/identity-vault */ 7312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);




class Tab2Page {
  constructor() {
    this.config = {
      key: 'io.ionic.iv-test-both',
      type: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.VaultType.DeviceSecurity,
      deviceSecurityType: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.DeviceSecurityType.Both,
      unlockVaultOnLoad: false
    };
  }

  getStatus() {
    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      alert(`isSystemPasscodeSet=${yield _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isSystemPasscodeSet()} isBiometricsEnabled=${yield _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isBiometricsEnabled()}`);
    })();
  }

  setVault() {
    this.vault = new _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Vault(this.config);
    this.vault.onError(err => {
      alert('Vault Error: ' + JSON.stringify(err));
    });
    this.vault.onLock(lockEvent => {
      alert('Vault is Locked ' + JSON.stringify(lockEvent));
    });
    this.vault.onUnlock(() => {
      alert('Vault is unlocked');
    });
  }

  setVaultValue() {
    var _this = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.vault.setValue('stuff', 'things');
      } catch (err) {
        alert(err);
      }
    })();
  }

  clearVault() {
    var _this2 = this;

    return (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.vault.clear();
      } catch (err) {
        alert(err);
      }
    })();
  }

}

Tab2Page.ɵfac = function Tab2Page_Factory(t) {
  return new (t || Tab2Page)();
};

Tab2Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: Tab2Page,
  selectors: [["app-tab2"]],
  decls: 17,
  vars: 2,
  consts: [[3, "translucent"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [3, "click"]],
  template: function Tab2Page_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Identity Vault Test ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar")(7, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Identity Vault Test");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab2Page_Template_ion_button_click_9_listener() {
        return ctx.setVault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Set Security Type to Both");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab2Page_Template_ion_button_click_11_listener() {
        return ctx.setVaultValue();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Set Value in Vault");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab2Page_Template_ion_button_click_13_listener() {
        return ctx.getStatus();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Get Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab2Page_Template_ion_button_click_15_listener() {
        return ctx.clearVault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Clear Vault");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MERBQUFBO01BSTdDQSw0REFBQUE7TUFBWUEsd0RBQUFBO1FBQUEsT0FBU0MsY0FBVDtNQUFtQixDQUFuQjtNQUFxQkQsb0RBQUFBO01BQXlCQSwwREFBQUE7TUFDMURBLDREQUFBQTtNQUFZQSx3REFBQUE7UUFBQSxPQUFTQyxtQkFBVDtNQUF3QixDQUF4QjtNQUEwQkQsb0RBQUFBO01BQWtCQSwwREFBQUE7TUFDeERBLDREQUFBQTtNQUFZQSx3REFBQUE7UUFBQSxPQUFTQyxlQUFUO01BQW9CLENBQXBCO01BQXNCRCxvREFBQUE7TUFBVUEsMERBQUFBO01BQzVDQSw0REFBQUE7TUFBWUEsd0RBQUFBO1FBQUEsT0FBU0MsZ0JBQVQ7TUFBcUIsQ0FBckI7TUFBdUJELG9EQUFBQTtNQUFXQSwwREFBQUE7Ozs7TUFsQnRDQSx3REFBQUE7TUFRQ0EsdURBQUFBO01BQUFBLHdEQUFBQSIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL3RhYjIvdGFiMi1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC90YWIyL3RhYjIubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnRzIiwiLi9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRhYjJQYWdlIH0gZnJvbSAnLi90YWIyLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogVGFiMlBhZ2UsXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFRhYjJQYWdlUm91dGluZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRhYjJQYWdlIH0gZnJvbSAnLi90YWIyLnBhZ2UnO1xuaW1wb3J0IHsgRXhwbG9yZUNvbnRhaW5lckNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLm1vZHVsZSc7XG5cbmltcG9ydCB7IFRhYjJQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdGFiMi1yb3V0aW5nLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJb25pY01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRXhwbG9yZUNvbnRhaW5lckNvbXBvbmVudE1vZHVsZSxcbiAgICBUYWIyUGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGFiMlBhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIFRhYjJQYWdlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERldmljZSwgRGV2aWNlU2VjdXJpdHlUeXBlLCBJZGVudGl0eVZhdWx0Q29uZmlnLCBWYXVsdCwgVmF1bHRFcnJvciwgVmF1bHRUeXBlIH0gZnJvbSAnQGlvbmljLWVudGVycHJpc2UvaWRlbnRpdHktdmF1bHQnO1xuaW1wb3J0IHsgVmF1bHRMb2NrRXZlbnQgfSBmcm9tICdAaW9uaWMtZW50ZXJwcmlzZS9pZGVudGl0eS12YXVsdC9kaXN0L3R5cGluZ3MvVmF1bHRJbnRlcmZhY2UnO1xuaW1wb3J0IHsgVmF1bHRTZXJ2aWNlIH0gZnJvbSAnLi4vdmF1bHQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10YWIyJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWIyLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWIyLnBhZ2Uuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYjJQYWdlIHtcblxuICBjb25maWc6IElkZW50aXR5VmF1bHRDb25maWcgPSB7XG4gICAga2V5OiAnaW8uaW9uaWMuaXYtdGVzdC1ib3RoJyxcbiAgICB0eXBlOiBWYXVsdFR5cGUuRGV2aWNlU2VjdXJpdHksXG4gICAgZGV2aWNlU2VjdXJpdHlUeXBlOiBEZXZpY2VTZWN1cml0eVR5cGUuQm90aCxcbiAgICB1bmxvY2tWYXVsdE9uTG9hZDogZmFsc2UsXG4gIH07XG5cbiAgdmF1bHQ6IFZhdWx0O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgYXN5bmMgZ2V0U3RhdHVzKCkge1xuICAgIGFsZXJ0KGBpc1N5c3RlbVBhc3Njb2RlU2V0PSR7YXdhaXQgRGV2aWNlLmlzU3lzdGVtUGFzc2NvZGVTZXQoKX0gaXNCaW9tZXRyaWNzRW5hYmxlZD0ke2F3YWl0IERldmljZS5pc0Jpb21ldHJpY3NFbmFibGVkKCl9YCk7XG4gIH1cblxuICBzZXRWYXVsdCgpIHtcbiAgICB0aGlzLnZhdWx0ID0gbmV3IFZhdWx0KHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLnZhdWx0Lm9uRXJyb3IoKGVycjogVmF1bHRFcnJvcikgPT4ge1xuICAgICAgYWxlcnQoJ1ZhdWx0IEVycm9yOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgfSk7XG4gICAgdGhpcy52YXVsdC5vbkxvY2soKGxvY2tFdmVudDogVmF1bHRMb2NrRXZlbnQpID0+IHtcbiAgICAgIGFsZXJ0KCdWYXVsdCBpcyBMb2NrZWQgJyArIEpTT04uc3RyaW5naWZ5KGxvY2tFdmVudCkpO1xuICAgIH0pO1xuICAgIHRoaXMudmF1bHQub25VbmxvY2soKCkgPT4ge1xuICAgICAgYWxlcnQoJ1ZhdWx0IGlzIHVubG9ja2VkJyk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzZXRWYXVsdFZhbHVlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnZhdWx0LnNldFZhbHVlKCdzdHVmZicsICd0aGluZ3MnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVycik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY2xlYXJWYXVsdCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy52YXVsdC5jbGVhcigpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyKTtcbiAgICB9XG4gIH1cblxufVxuIiwiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tdGl0bGU+XG4gICAgICBJZGVudGl0eSBWYXVsdCBUZXN0XG4gICAgPC9pb24tdGl0bGU+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG5cbjxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPklkZW50aXR5IFZhdWx0IFRlc3Q8L2lvbi10aXRsZT5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwic2V0VmF1bHQoKVwiPlNldCBTZWN1cml0eSBUeXBlIHRvIEJvdGg8L2lvbi1idXR0b24+XG4gICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInNldFZhdWx0VmFsdWUoKVwiPlNldCBWYWx1ZSBpbiBWYXVsdDwvaW9uLWJ1dHRvbj5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiZ2V0U3RhdHVzKClcIj5HZXQgU3RhdHVzPC9pb24tYnV0dG9uPlxuICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJjbGVhclZhdWx0KClcIj5DbGVhciBWYXVsdDwvaW9uLWJ1dHRvbj5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwibmFtZXMiOlsiRGV2aWNlIiwiRGV2aWNlU2VjdXJpdHlUeXBlIiwiVmF1bHQiLCJWYXVsdFR5cGUiLCJUYWIyUGFnZSIsImNvbnN0cnVjdG9yIiwia2V5IiwidHlwZSIsIkRldmljZVNlY3VyaXR5IiwiZGV2aWNlU2VjdXJpdHlUeXBlIiwiQm90aCIsInVubG9ja1ZhdWx0T25Mb2FkIiwiZ2V0U3RhdHVzIiwiYWxlcnQiLCJpc1N5c3RlbVBhc3Njb2RlU2V0IiwiaXNCaW9tZXRyaWNzRW5hYmxlZCIsInNldFZhdWx0IiwidmF1bHQiLCJjb25maWciLCJvbkVycm9yIiwiZXJyIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uTG9jayIsImxvY2tFdmVudCIsIm9uVW5sb2NrIiwic2V0VmF1bHRWYWx1ZSIsInNldFZhbHVlIiwiY2xlYXJWYXVsdCIsImNsZWFyIiwic2VsZWN0b3JzIiwiZGVjbHMiLCJ2YXJzIiwiY29uc3RzIiwidGVtcGxhdGUiLCJpMCIsImN0eCJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=