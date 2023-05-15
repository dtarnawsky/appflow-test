"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_explore-container_explore-container_module_ts-node_modules_ionic-enterprise_i-87b14d"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_explore-container_explore-container_module_ts-node_modules_ionic-enterprise_i-87b14d"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 4608)).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab3_tab3_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
class TabsPageRoutingModule {
}
TabsPageRoutingModule.ɵfac = function TabsPageRoutingModule_Factory(t) { return new (t || TabsPageRoutingModule)(); };
TabsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TabsPageRoutingModule });
TabsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class TabsPageModule {
}
TabsPageModule.ɵfac = function TabsPageModule_Factory(t) { return new (t || TabsPageModule)(); };
TabsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TabsPageModule });
TabsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabsPageModule, { declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule] }); })();


/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);


class TabsPage {
    constructor() { }
}
TabsPage.ɵfac = function TabsPage_Factory(t) { return new (t || TabsPage)(); };
TabsPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsPage, selectors: [["app-tabs"]], decls: 14, vars: 0, consts: [["slot", "bottom"], ["tab", "tab1"], ["name", "triangle"], ["tab", "tab2"], ["name", "ellipse"], ["tab", "tab3"], ["name", "square"]], template: function TabsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs")(1, "ion-tab-bar", 0)(2, "ion-tab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tab 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tab 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-tab-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tab 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabs], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF90YWJzX3RhYnNfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDaEI7OztBQUV2QyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLGdEQUFRO1FBQ25CLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxzU0FBNkIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO2FBQzlFO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLHNTQUE2QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7YUFDOUU7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMseUpBQTZCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQzthQUM5RTtZQUNEO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixTQUFTLEVBQUUsTUFBTTthQUNsQjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLFlBQVk7UUFDeEIsU0FBUyxFQUFFLE1BQU07S0FDbEI7Q0FDRixDQUFDO0FBS0ssTUFBTSxxQkFBcUI7OzBGQUFyQixxQkFBcUI7a0hBQXJCLHFCQUFxQjtzSEFGdEIsa0VBQXFCLENBQUMsTUFBTSxDQUFDO21JQUU1QixxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDVztBQUVFO0FBQ0Y7QUFFaUI7QUFFdkI7O0FBV2hDLE1BQU0sY0FBYzs7NEVBQWQsY0FBYzsyR0FBZCxjQUFjOytHQVB2Qix1REFBVztRQUNYLHlEQUFZO1FBQ1osdURBQVc7UUFDWCx1RUFBcUI7bUlBSVosY0FBYyxtQkFGVixnREFBUSxhQUxyQix1REFBVztRQUNYLHlEQUFZO1FBQ1osdURBQVc7UUFDWCx1RUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQbEIsTUFBTSxRQUFRO0lBRW5CLGdCQUFlLENBQUM7O2dFQUZMLFFBQVE7c0dBQVIsUUFBUTtRQ1ByQiwyRUFBVTtRQUlKLHlFQUFxQztRQUNyQyw0RUFBVztRQUFBLGdFQUFLO1FBQUEsNERBQVk7UUFHOUIsb0ZBQTJCO1FBQ3pCLHlFQUFvQztRQUNwQyw0RUFBVztRQUFBLGdFQUFLO1FBQUEsNERBQVk7UUFHOUIscUZBQTJCO1FBQ3pCLDBFQUFtQztRQUNuQyw2RUFBVztRQUFBLGlFQUFLO1FBQUEsNERBQVkiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC90YWJzL3RhYnMtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvdGFicy90YWJzLm1vZHVsZS50cyIsIi4vc3JjL2FwcC90YWJzL3RhYnMucGFnZS50cyIsIi4vc3JjL2FwcC90YWJzL3RhYnMucGFnZS5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUYWJzUGFnZSB9IGZyb20gJy4vdGFicy5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAndGFicycsXG4gICAgY29tcG9uZW50OiBUYWJzUGFnZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAndGFiMScsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi90YWIxL3RhYjEubW9kdWxlJykudGhlbihtID0+IG0uVGFiMVBhZ2VNb2R1bGUpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAndGFiMicsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi90YWIyL3RhYjIubW9kdWxlJykudGhlbihtID0+IG0uVGFiMlBhZ2VNb2R1bGUpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAndGFiMycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi90YWIzL3RhYjMubW9kdWxlJykudGhlbihtID0+IG0uVGFiM1BhZ2VNb2R1bGUpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgcmVkaXJlY3RUbzogJy90YWJzL3RhYjEnLFxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIHJlZGlyZWN0VG86ICcvdGFicy90YWIxJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJzUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVGFic1BhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi90YWJzLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgVGFic1BhZ2UgfSBmcm9tICcuL3RhYnMucGFnZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJb25pY01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVGFic1BhZ2VSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1RhYnNQYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzUGFnZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWJzLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWJzLnBhZ2Uuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNQYWdlIHtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbn1cbiIsIjxpb24tdGFicz5cblxuICA8aW9uLXRhYi1iYXIgc2xvdD1cImJvdHRvbVwiPlxuICAgIDxpb24tdGFiLWJ1dHRvbiB0YWI9XCJ0YWIxXCI+XG4gICAgICA8aW9uLWljb24gbmFtZT1cInRyaWFuZ2xlXCI+PC9pb24taWNvbj5cbiAgICAgIDxpb24tbGFiZWw+VGFiIDE8L2lvbi1sYWJlbD5cbiAgICA8L2lvbi10YWItYnV0dG9uPlxuXG4gICAgPGlvbi10YWItYnV0dG9uIHRhYj1cInRhYjJcIj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwiZWxsaXBzZVwiPjwvaW9uLWljb24+XG4gICAgICA8aW9uLWxhYmVsPlRhYiAyPC9pb24tbGFiZWw+XG4gICAgPC9pb24tdGFiLWJ1dHRvbj5cblxuICAgIDxpb24tdGFiLWJ1dHRvbiB0YWI9XCJ0YWIzXCI+XG4gICAgICA8aW9uLWljb24gbmFtZT1cInNxdWFyZVwiPjwvaW9uLWljb24+XG4gICAgICA8aW9uLWxhYmVsPlRhYiAzPC9pb24tbGFiZWw+XG4gICAgPC9pb24tdGFiLWJ1dHRvbj5cbiAgPC9pb24tdGFiLWJhcj5cblxuPC9pb24tdGFicz5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==