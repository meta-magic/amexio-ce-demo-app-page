(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _ce_demo_app_ceDemoApp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ce-demo-app/ceDemoApp.component */ "./src/app/ce-demo-app/ceDemoApp.component.ts");
/* harmony import */ var _creative_menu1_menu1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./creative-menu1/menu1.component */ "./src/app/creative-menu1/menu1.component.ts");
/* harmony import */ var _creative_menu2_menu2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./creative-menu2/menu2.component */ "./src/app/creative-menu2/menu2.component.ts");
/* harmony import */ var _creative_menu3_menu3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./creative-menu3/menu3.component */ "./src/app/creative-menu3/menu3.component.ts");
/* harmony import */ var _viewport_viewport_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./viewport/viewport.component */ "./src/app/viewport/viewport.component.ts");
/* harmony import */ var _viewport2_viewport2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewport2/viewport2.component */ "./src/app/viewport2/viewport2.component.ts");
/* harmony import */ var _viewport3_viewport3_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./viewport3/viewport3.component */ "./src/app/viewport3/viewport3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // Import Amexio library









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _ce_demo_app_ceDemoApp_component__WEBPACK_IMPORTED_MODULE_7__["ceDemoAppComponent"],
                _creative_menu1_menu1_component__WEBPACK_IMPORTED_MODULE_8__["MenuOneComponent"],
                _creative_menu2_menu2_component__WEBPACK_IMPORTED_MODULE_9__["MenuTwoComponent"],
                _creative_menu3_menu3_component__WEBPACK_IMPORTED_MODULE_10__["MenuThreeComponent"],
                _viewport_viewport_component__WEBPACK_IMPORTED_MODULE_11__["ViewportComponent"],
                _viewport2_viewport2_component__WEBPACK_IMPORTED_MODULE_12__["ViewportComponent2"],
                _viewport3_viewport3_component__WEBPACK_IMPORTED_MODULE_13__["ViewportComponent3"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(src_app_app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTE"], { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTE", function() { return APP_ROUTE; });
/* harmony import */ var _ce_demo_app_ceDemoApp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ce-demo-app/ceDemoApp.component */ "./src/app/ce-demo-app/ceDemoApp.component.ts");
/* harmony import */ var _creative_menu1_menu1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creative-menu1/menu1.component */ "./src/app/creative-menu1/menu1.component.ts");
/* harmony import */ var _creative_menu2_menu2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creative-menu2/menu2.component */ "./src/app/creative-menu2/menu2.component.ts");
/* harmony import */ var _creative_menu3_menu3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creative-menu3/menu3.component */ "./src/app/creative-menu3/menu3.component.ts");
/* harmony import */ var _viewport_viewport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewport/viewport.component */ "./src/app/viewport/viewport.component.ts");
/* harmony import */ var _viewport2_viewport2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewport2/viewport2.component */ "./src/app/viewport2/viewport2.component.ts");
/* harmony import */ var _viewport3_viewport3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewport3/viewport3.component */ "./src/app/viewport3/viewport3.component.ts");







var APP_ROUTE = [
    {
        path: '', redirectTo: 'ce-demo-app', pathMatch: 'full',
    },
    {
        path: 'ce-demo-app', component: _ce_demo_app_ceDemoApp_component__WEBPACK_IMPORTED_MODULE_0__["ceDemoAppComponent"],
    },
    {
        path: 'menu', children: [
            {
                path: 'menu-one', component: _creative_menu1_menu1_component__WEBPACK_IMPORTED_MODULE_1__["MenuOneComponent"],
            },
            {
                path: 'menu-two', component: _creative_menu2_menu2_component__WEBPACK_IMPORTED_MODULE_2__["MenuTwoComponent"],
            },
            {
                path: 'menu-three', component: _creative_menu3_menu3_component__WEBPACK_IMPORTED_MODULE_3__["MenuThreeComponent"],
            },
        ],
    },
    {
        path: 'viewport', children: [
            {
                path: 'viewport-one', component: _viewport_viewport_component__WEBPACK_IMPORTED_MODULE_4__["ViewportComponent"],
            },
            {
                path: 'viewport-two', component: _viewport2_viewport2_component__WEBPACK_IMPORTED_MODULE_5__["ViewportComponent2"],
            },
            {
                path: 'viewport-three', component: _viewport3_viewport3_component__WEBPACK_IMPORTED_MODULE_6__["ViewportComponent3"],
            },
        ],
    }
];


/***/ }),

/***/ "./src/app/ce-demo-app/ceDemoApp.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ce-demo-app/ceDemoApp.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbardemo .navbar-container {\n    position: relative !important;\n    width: 90%;\n  }\n  amexio-viewport-content-body {\n    display: -ms-grid;\n    display: grid;\n     position: relative;\n     justify-content: center;\n      height: 100%;\n     width: 100%; \n   }"

/***/ }),

/***/ "./src/app/ce-demo-app/ceDemoApp.component.html":
/*!******************************************************!*\
  !*** ./src/app/ce-demo-app/ceDemoApp.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-viewport [type]=\"'2'\" [scrollable]=\"true\">\n  <!-- image 1 -->\n  <amexio-viewport-content class=\"view-port-bg-image\" [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/1.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n\n      <amexio-nav [enable-side-nav-position]=\"true\" [enable-more-mode]=\"true\" [title]=\"'Amexio CE Demo App'\"\n        [logo]=\"'assets/images/amexio-logo.png'\">\n\n        <amexio-nav-item position-right *ngFor=\"let menus of amexiotechmenus\" [type]=\"'menu'\" [title]=\"menus.text\"\n          [icon]=\"menus.icon\" [data]=\"menus.submenus\" (onNavItemClick)=\"externalLink($event)\">\n        </amexio-nav-item>\n\n\n      </amexio-nav>\n      <br>\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page2'\">\n        <amexio-grid-item [name]=\"'gridpage2title'\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'white'\">\n            Creative Viewport Demos\n          </amexio-label>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage2view1'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(52,37,39,0.7)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'classic'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Viewort Demo 1\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/demo1.jpg'\">\n              </amexio-image>\n              <p>Life is better when you Dance Because Dance is the hidden language of the soul.\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onViewportDemoFirstClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage2view2'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(52,37,39,0.7)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Viewport Demo 2\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/demo2.jpg'\">\n              </amexio-image>\n              <p>\n                Offers A Unique Selection Of Stylish, Contemporary, And Chic Furniture Online. High Quality Furniture.\n\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onViewportDemoSecondClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage2view3'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(52,37,39,0.7)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Viewport Demo 3\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/demo3.jpg'\">\n              </amexio-image>\n              <p>\n                By the deep sea, or the jungle, and music in its roar;\n                I love not Man the less, but Nature more.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onViewportDemoThreeClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n\n  <!-- image  2 new added -->\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/2.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <!--  Creative Menu Demo -->\n      <br>\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page3'\">\n        <amexio-grid-item [name]=\"'gridpage3title'\">\n          <amexio-label size=\"large-bold\" [font-color]=\"'white'\">\n            Creative Menu Demos\n          </amexio-label>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage3menu1'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(64,28,6,0.6)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Menu Demo 1\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/menu1.jpg'\">\n              </amexio-image>\n              <p>\n                Creative Menu Demo with center alignment and animation effect.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onMenuDemoFirstClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n\n        <amexio-grid-item [name]=\"'gridpage3menu2'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(64,28,6,0.6)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Menu Demo 2\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/menu2.jpg'\">\n              </amexio-image>\n\n              <p>\n                Creative Menu Demo with Right side alignment and animation effect.\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onMenuDemoSecondClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n\n        <amexio-grid-item [name]=\"'gridpage3menu3'\">\n          <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(64,28,6,0.6)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              align=\"start\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Menu Demo 3\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/viewport/menu3.jpg'\">\n              </amexio-image>\n              <p>\n                Creative Menu Demo with left side alignment and animation effect.\n\n              </p>\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onMenuDemoThreeClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'Demo'\"> </amexio-button>\n            </amexio-action-ce>\n\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n  <!-- image 3 -->\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/images/3.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <br>\n\n      <amexio-layout-grid style=\"padding: 0px 10px 0px 10px;\" [layout]=\"'page4'\">\n        <amexio-grid-item [name]=\"'gridpage4demo1'\">\n\n\n          <amexio-card-ce [color]=\"'white'\" [background]=\"'rgba(19,72,80,0.7)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              [border-bottom]=\"true\" [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(218,105,114,0.3)'\">\n              <amexio-label [size]=\"'medium-bold'\">\n                TecMFlix\n              </amexio-label>\n            </amexio-header-ce>\n\n\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/tech.jpg'\">\n              </amexio-image>\n              <p>\n                Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug\n                kingpins of the late 80s in this raw.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onDemoTechMClick()\" [type]=\"'theme-color'\" [tooltip]=\"'BUY'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n\n        <amexio-grid-item [name]=\"'gridpage4demo2'\">\n          <amexio-card-ce [color]=\"'white'\" [background]=\"'rgba(19,72,80,0.7)'\">\n            <amexio-header-ce amexioColorPalette [gradient]=\"true\" [color-palette]=\"'random'\" [height]=\"'35px'\"\n              [border-bottom]=\"true\" [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(218,105,114,0.3)'\">\n              <amexio-label [size]=\"'medium-bold'\">\n                Virtual Scroller Demo\n              </amexio-label>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <amexio-image class=\"homepage-cursor\" [path]=\"'assets/images/virtualDemo.jpg'\">\n              </amexio-image>\n              <p>\n                Amexio virtual scroller displays a small subset of records just enough to fill the viewport and uses the\n                same DOM elements as the user scrolls.\n              </p>\n\n            </amexio-body-ce>\n            <amexio-action-ce align=\"center\" [border-top]=\"true\">\n              <amexio-button [label]=\"'Demo'\" (onClick)=\"onVirtualScrollDemoClick()\" [type]=\"'theme-color'\"\n                [tooltip]=\"'BUY'\">\n              </amexio-button>\n            </amexio-action-ce>\n          </amexio-card-ce>\n        </amexio-grid-item>\n      </amexio-layout-grid>\n\n\n\n    </amexio-viewport-content-body>\n\n  </amexio-viewport-content>\n\n</amexio-viewport>"

/***/ }),

/***/ "./src/app/ce-demo-app/ceDemoApp.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ce-demo-app/ceDemoApp.component.ts ***!
  \****************************************************/
/*! exports provided: ceDemoAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceDemoAppComponent", function() { return ceDemoAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ceDemoAppComponent = /** @class */ (function () {
    function ceDemoAppComponent(http, _gridlayoutService) {
        this.http = http;
        this._gridlayoutService = _gridlayoutService;
        this.DEMO_TECH_M_URL = 'https://cedemo.amexio.org/tecmflix/';
        this.DEMO_FOUR_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-one';
        this.DEMO_FIVE_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-two';
        this.DEMO_SIX_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-three';
        this.DEMO_SEVEN_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-one';
        this.DEMO_EIGHT_URL = 'https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-two';
        this.DEMO_NINE_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-three';
        this.DEMO_VIRTUAL_URL = 'https://cedemo.amexio.org/Virtual-Scroller/#/sc';
        this.createLayouts();
        this._gridlayoutService.createLayout(this.gridDesktopPage2);
        this._gridlayoutService.createLayout(this.gridTabletPage2);
        this._gridlayoutService.createLayout(this.gridMobilePage2);
        this._gridlayoutService.createLayout(this.gridDesktopPage3);
        this._gridlayoutService.createLayout(this.gridTabletPage3);
        this._gridlayoutService.createLayout(this.gridMobilePage3);
        this._gridlayoutService.createLayout(this.gridDesktopPage4);
        this._gridlayoutService.createLayout(this.gridTabletPage4);
        this._gridlayoutService.createLayout(this.gridMobilePage4);
    }
    ceDemoAppComponent.prototype.ngOnInit = function () {
        this.tempData = [
            {
                label: 'API',
                "link": "https://api.amexio.org/"
            },
            {
                label: 'GITHUB',
                "link": "https://github.com/meta-magic/amexio.github.io"
            },
            {
                label: 'NPM STATS',
                "link": "https://www.npmstats.com/"
            },
            {
                label: 'SUPPORT',
                "link": "https://amexio.tech/support"
            },
            {
                label: 'ROAD MAP',
                "link": "https://amexio.tech/roadmap"
            }
        ];
        this.amexiotechmenus = [
            {
                "text": "Products",
                "icon": "fa fa-snowflake-o fa-fw",
                "submenus": [
                    {
                        "text": "Amexio API",
                        "link": "https://amexio.tech/amexio-api"
                    },
                    {
                        "text": "Amexio D3 Charts",
                        "link": " https://amexio.tech/amexio-d3-charts"
                    },
                    {
                        "text": "Amexio Canvas",
                        "link": "https://amexio.tech/amexio-canvas"
                    }, {
                        "text": "Amexio Colors",
                        "link": "https://amexio.tech/amexio-colors"
                    }, {
                        "text": "Amexio Plugins",
                        "link": "https://amexio.tech/amexio-plugins-1"
                    },
                    {
                        "text": "Amexio Demo Apps",
                        "link": "http://demo.amexio.tech/"
                    }
                ]
            },
            {
                "text": "Start Using",
                "icon": "fa fa-television fa-fw",
                "submenus": [
                    {
                        "text": "Roadmap",
                        "link": "https://amexio.tech/roadmap"
                    },
                    {
                        "text": "Support",
                        "link": "https://amexio.tech/support"
                    },
                    {
                        "text": "Pricing",
                        "link": "https://amexio.tech/pricing"
                    },
                    {
                        "text": "Quality-Assurance",
                        "link": "https://amexio.tech/quality-assurance"
                    },
                    {
                        "text": "Downloads",
                        "link": "https://amexio.tech/download"
                    },
                    {
                        "text": "License and Other Docs",
                        "link": "https://amexio.tech/license-and-other-docs-1"
                    },
                    {
                        "text": "Canvas Login (Beta)",
                        "link": "https://canvas.amexio.org/"
                    },
                    {
                        "text": "Subscribe ",
                        "link": "https://canvas.amexio.org/#/user/signup"
                    }
                ]
            },
            {
                "text": "Training",
                "icon": "fa fa-user fa-fw",
                "submenus": [
                    {
                        "text": "Component Example",
                        "link": "http://demo.amexio.tech/"
                    }, {
                        "text": "Amexio Training",
                        "link": "http://metaarivu.com/amexio-training"
                    }
                ]
            },
            {
                "text": "Case Studies",
                "icon": "fa fa-clone fa-fw",
                "submenus": [
                    { "text": "Shopping Portal", "link": "https://sedemo.amexio.org/se/shoppingportal/#/home" },
                    { "text": "US Election Results", "link": "https://sedemo.amexio.org/se/us-election/ " },
                    { "text": "Insurance Portal", "link": "https://sedemo.amexio.org/se/insuranceportal/#/home" },
                    { "text": "Movie Portal", "link": "https://cedemo.amexio.org/tecmflix/#/app" },
                    { "text": "NpmStats", "link": "https://www.npmstats.com/" },
                    { "text": "Creative Demo", "link": "https://eedemo.amexio.org/#/login" }
                ]
            },
            {
                "text": "Engage",
                "submenus": [
                    {
                        "text": "Events",
                        "link": "https://metamagicglobal.com/events"
                    }, {
                        "text": "Forums",
                        "link": "http://forum.metamagicglobal.com/"
                    }, {
                        "text": "Blogs",
                        "link": "http://blog.metamagicglobal.com/"
                    }, {
                        "text": "Node Package Manager",
                        "link": "https://www.npmjs.com/package/amexio-ng-extensions"
                    }, {
                        "text": "GitHub - Source Code",
                        "link": "https://github.com/meta-magic/amexio.github.io"
                    }
                ]
            },
            {
                "text": "About Us",
                "submenus": [
                    {
                        "text": "Contact",
                        "link": "https://metamagicglobal.com/contact"
                    }, {
                        "text": "Company",
                        "link": "http://www.metamagicglobal.com/company"
                    }, {
                        "text": "MetaMagic",
                        "link": "https://www.metamagicglobal.com/"
                    }
                ]
            }
        ];
    };
    ceDemoAppComponent.prototype.externalLink = function (event) {
        if (event.data.node.link)
            //this.document.location.href=event.data.node.link;
            window.open(event.data.node.link, '_blank');
    };
    ceDemoAppComponent.prototype.createLayouts = function () {
        // PAGE 2
        this.gridDesktopPage2 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
            .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view2', 'gridpage2view2', 'gridpage2view3', 'gridpage2view3']);
        this.gridTabletPage2 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
            .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2'])
            .addlayout(['gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3']);
        this.gridMobilePage2 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page2', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
            .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1'])
            .addlayout(['gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2'])
            .addlayout(['gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3']);
        // PAGE 3
        this.gridDesktopPage3 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page3', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
            .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu3', 'gridpage3menu3']);
        this.gridTabletPage3 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page3', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
            .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2'])
            .addlayout(['gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3']);
        this.gridMobilePage3 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page3', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
            .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1'])
            .addlayout(['gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2'])
            .addlayout(['gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3']);
        // PAGE 4
        this.gridDesktopPage4 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page4', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2']);
        this.gridTabletPage4 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page4', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Tablet)
            .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2']);
        this.gridMobilePage4 = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('page4', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Mobile)
            .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1'])
            .addlayout(['gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2']);
    };
    ceDemoAppComponent.prototype.onLoginClick = function (data) {
        this.facebookLoginData = data;
    };
    ceDemoAppComponent.prototype.onMenuClick = function (data) {
        if (data.link) {
            window.open(data.link, '_blank');
        }
    };
    ceDemoAppComponent.prototype.onDemoTechMClick = function () {
        window.open(this.DEMO_TECH_M_URL);
    };
    ceDemoAppComponent.prototype.onViewportDemoFirstClick = function () {
        window.open(this.DEMO_FOUR_URL);
    };
    ceDemoAppComponent.prototype.onViewportDemoSecondClick = function () {
        window.open(this.DEMO_FIVE_URL);
    };
    ceDemoAppComponent.prototype.onViewportDemoThreeClick = function () {
        window.open(this.DEMO_SIX_URL);
    };
    ceDemoAppComponent.prototype.onMenuDemoFirstClick = function () {
        window.open(this.DEMO_SEVEN_URL);
    };
    ceDemoAppComponent.prototype.onMenuDemoSecondClick = function () {
        window.open(this.DEMO_EIGHT_URL);
    };
    ceDemoAppComponent.prototype.onMenuDemoThreeClick = function () {
        window.open(this.DEMO_NINE_URL);
    };
    ceDemoAppComponent.prototype.onVirtualScrollDemoClick = function () {
        window.open(this.DEMO_VIRTUAL_URL);
    };
    ceDemoAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ce-demo-app',
            template: __webpack_require__(/*! ./ceDemoApp.component.html */ "./src/app/ce-demo-app/ceDemoApp.component.html"),
            styles: [__webpack_require__(/*! ./ceDemoApp.component.css */ "./src/app/ce-demo-app/ceDemoApp.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioGridLayoutService"]])
    ], ceDemoAppComponent);
    return ceDemoAppComponent;
}());



/***/ }),

/***/ "./src/app/creative-menu1/menu1.component.css":
/*!****************************************************!*\
  !*** ./src/app/creative-menu1/menu1.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/creative-menu1/menu1.component.html":
/*!*****************************************************!*\
  !*** ./src/app/creative-menu1/menu1.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-viewport [type]=\"'2'\" [scrollable]=\"false\">\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/menu1/3.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <amexio-nav [transparent]=\"true\" [enable-side-nav-position]=\"true\" [title]=\"'Infografic'\"\n        [logo]=\"'assets/menu1/menuImages/img.png'\">\n        <amexio-nav-item position-right [title]=\"'Home'\" [icon]=\"'fa fa-home fa-fw fa-lg'\" [type]=\"'button'\"\n          style=\"cursor: pointer;\">\n        </amexio-nav-item>\n        <amexio-nav-item position-right *ngFor=\"let menus of navmenus\" [type]=\"'menu'\" [title]=\"menus.text\"\n          [icon]=\"menus.icon\" [data]=\"menus.submenus\">\n        </amexio-nav-item>\n        <amexio-nav-item position-right [icon]=\"'fa fa-bell fa-fw fa-lg'\" [type]=\"'button'\" style=\"cursor: pointer;\">\n        </amexio-nav-item>\n      </amexio-nav>\n      <div class=\"rowClass\">\n        <amexio-row>\n\n\n          <amexio-column size=\"12\" [fit]=\"false\">\n            <amexio-menu-ce [menu-positioning]=\"'center'\" [animation-type]=\"2\" [data]=\"tempData\" [size]=\"50\">\n            </amexio-menu-ce>\n          </amexio-column>\n        </amexio-row>\n      </div>\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n</amexio-viewport>"

/***/ }),

/***/ "./src/app/creative-menu1/menu1.component.ts":
/*!***************************************************!*\
  !*** ./src/app/creative-menu1/menu1.component.ts ***!
  \***************************************************/
/*! exports provided: MenuOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOneComponent", function() { return MenuOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuOneComponent = /** @class */ (function () {
    function MenuOneComponent(_gridlayoutService) {
        this._gridlayoutService = _gridlayoutService;
        this.createLayouts();
        // Create the Layouts
        // this._gridlayoutService.createLayout(this.gridDesktop);
    }
    MenuOneComponent.prototype.createLayouts = function () {
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConfig"]('LayoutSample1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConstants"].Desktop)
            .addlayout(["gridmenu1", "gridmenu2", "gridmenu3", "gridlogin"])
            .addlayout(["gridmenu4", "gridmenu5", "gridmenu6", "gridlogin1"]);
        this.navmenus = [{
                "text": "Classes",
                "icon": "fa fa-television fa-fw",
                "submenus": [{
                        "text": "Tutorials",
                    }, {
                        "text": "Weekend Batch",
                    }]
            },
            {
                "text": "Gallery",
                "icon": "fa fa-picture-o",
                "submenus": [{
                        "text": "Archives"
                    }, {
                        "text": "Portfolio"
                    }]
            },
            {
                "text": "About Us",
                "icon": "fa fa-address-book-o fa-fw",
                "submenus": [{
                        "text": "Contact"
                    }, {
                        "text": "Privacy Policies"
                    }]
            }
        ],
            this.tempData = [
                {
                    label: "Home"
                },
                {
                    label: "Features"
                },
                {
                    label: "Explore"
                },
                {
                    label: "Subscription"
                },
                {
                    label: "Template"
                },
                {
                    label: "Support"
                }
            ];
    };
    MenuOneComponent.prototype.onLoginClick = function (data) {
        this.facebookLoginData = data;
    };
    MenuOneComponent.prototype.ngOnInit = function () {
    };
    MenuOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu-one',
            template: __webpack_require__(/*! ./menu1.component.html */ "./src/app/creative-menu1/menu1.component.html"),
            styles: [__webpack_require__(/*! ./menu1.component.css */ "./src/app/creative-menu1/menu1.component.css")]
        }),
        __metadata("design:paramtypes", [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioGridLayoutService"]])
    ], MenuOneComponent);
    return MenuOneComponent;
}());



/***/ }),

/***/ "./src/app/creative-menu2/menu2.component.css":
/*!****************************************************!*\
  !*** ./src/app/creative-menu2/menu2.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/creative-menu2/menu2.component.html":
/*!*****************************************************!*\
  !*** ./src/app/creative-menu2/menu2.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-viewport [type]=\"'2'\" [scrollable]=\"false\">\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/menu1/2.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <amexio-nav [color]=\"'black'\" [transparent]=\"true\" [enable-side-nav-position]=\"true\" [title]=\"'Yatra'\"\n        [logo]=\"'assets/menu1/menuImages/travelling.png'\">\n        <amexio-nav-item position-right [title]=\"'Home'\" [icon]=\"'fa fa-home fa-fw fa-lg'\" [type]=\"'button'\"\n          style=\"cursor: pointer;\">\n        </amexio-nav-item>\n        <amexio-nav-item position-right *ngFor=\"let menus of navmenus\" [type]=\"'menu'\" [title]=\"menus.text\"\n          [icon]=\"menus.icon\" [data]=\"menus.submenus\">\n        </amexio-nav-item>\n      </amexio-nav>\n      <div class=\"rowClass\">\n        <amexio-row>\n\n          <amexio-column size=\"12\" [fit]=\"false\">\n            <amexio-menu-ce [menu-positioning]=\"'right'\" [animation-type]=\"1\" [data]=\"tempData\" [size]=\"50\">\n            </amexio-menu-ce>\n          </amexio-column>\n        </amexio-row>\n      </div>\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n</amexio-viewport>"

/***/ }),

/***/ "./src/app/creative-menu2/menu2.component.ts":
/*!***************************************************!*\
  !*** ./src/app/creative-menu2/menu2.component.ts ***!
  \***************************************************/
/*! exports provided: MenuTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTwoComponent", function() { return MenuTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuTwoComponent = /** @class */ (function () {
    function MenuTwoComponent(_gridlayoutService) {
        this._gridlayoutService = _gridlayoutService;
        this.createLayouts();
        // Create the Layouts
        // this._gridlayoutService.createLayout(this.gridDesktop);
    }
    MenuTwoComponent.prototype.createLayouts = function () {
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConfig"]('LayoutSample1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConstants"].Desktop)
            .addlayout(["gridmenu1", "gridmenu2", "gridmenu3", "gridlogin"])
            .addlayout(["gridmenu4", "gridmenu5", "gridmenu6", "gridlogin1"]);
        this.navmenus = [{
                "text": "Destination",
                "icon": "fa fa-television fa-fw",
                "submenus": [{
                        "text": "Singapore",
                    }, {
                        "text": "Maldives",
                    }, {
                        "text": "Dubai",
                    }]
            },
            {
                "text": "Activities",
                "icon": "fa fa-picture-o",
                "submenus": [{
                        "text": "Photography"
                    }, {
                        "text": "Base Camp"
                    }]
            },
            {
                "text": "About Us",
                "icon": "fa fa-address-book-o fa-fw",
                "submenus": [{
                        "text": "Contact"
                    }, {
                        "text": "Privacy Policies"
                    }]
            }
        ],
            this.tempData = [
                {
                    label: "Home"
                },
                {
                    label: "Hotels"
                },
                {
                    label: "Flights"
                },
                {
                    label: "Discover"
                },
                {
                    label: "Deals"
                },
                {
                    label: "Trips for me"
                },
                {
                    label: "Support"
                }
            ];
    };
    MenuTwoComponent.prototype.onLoginClick = function (data) {
        this.facebookLoginData = data;
    };
    MenuTwoComponent.prototype.ngOnInit = function () {
    };
    MenuTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu-two',
            template: __webpack_require__(/*! ./menu2.component.html */ "./src/app/creative-menu2/menu2.component.html"),
            styles: [__webpack_require__(/*! ./menu2.component.css */ "./src/app/creative-menu2/menu2.component.css")]
        }),
        __metadata("design:paramtypes", [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioGridLayoutService"]])
    ], MenuTwoComponent);
    return MenuTwoComponent;
}());



/***/ }),

/***/ "./src/app/creative-menu3/menu3.component.css":
/*!****************************************************!*\
  !*** ./src/app/creative-menu3/menu3.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/creative-menu3/menu3.component.html":
/*!*****************************************************!*\
  !*** ./src/app/creative-menu3/menu3.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-viewport [type]=\"'2'\">\n  <amexio-viewport-content>\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/menu1/1.jpg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <amexio-nav [transparent]=\"true\" [enable-side-nav-position]=\"true\" [title]=\"'Fernweh'\"\n        [logo]=\"'assets/menu1/menuImages/img.png'\">\n        <amexio-nav-item position-right [title]=\"'Home'\" [icon]=\"'fa fa-home fa-fw fa-lg'\" [type]=\"'button'\"\n          style=\"cursor: pointer;\">\n        </amexio-nav-item>\n        <amexio-nav-item position-right *ngFor=\"let menus of navmenus\" [type]=\"'menu'\" [title]=\"menus.text\"\n          [icon]=\"menus.icon\" [data]=\"menus.submenus\">\n        </amexio-nav-item>\n      </amexio-nav>\n      <div class=\"rowClass\">\n        <amexio-row>\n          <amexio-column size=\"12\" [fit]=\"false\">\n            <amexio-menu-ce [menu-positioning]=\"'left'\" [animation-type]=\"4\" [data]=\"tempData\" [size]=\"50\">\n            </amexio-menu-ce>\n          </amexio-column>\n        </amexio-row>\n\n      </div>\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n</amexio-viewport>"

/***/ }),

/***/ "./src/app/creative-menu3/menu3.component.ts":
/*!***************************************************!*\
  !*** ./src/app/creative-menu3/menu3.component.ts ***!
  \***************************************************/
/*! exports provided: MenuThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuThreeComponent", function() { return MenuThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuThreeComponent = /** @class */ (function () {
    function MenuThreeComponent(_gridlayoutService) {
        this._gridlayoutService = _gridlayoutService;
        this.createLayouts();
        // Create the Layouts
        this._gridlayoutService.createLayout(this.gridDesktop);
    }
    MenuThreeComponent.prototype.createLayouts = function () {
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConfig"]('LayoutSample1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConstants"].Desktop)
            .addlayout(["gridmenu1", "gridmenu2", "gridmenu3", "gridlogin"])
            .addlayout(["gridmenu4", "gridmenu5", "gridmenu6", "gridlogin1"]);
        this.navmenus = [{
                "text": "Destination",
                "icon": "fa fa-television fa-fw",
                "submenus": [{
                        "text": "Singapore",
                    }, {
                        "text": "Maldives",
                    }, {
                        "text": "Dubai",
                    }]
            },
            {
                "text": "Activities",
                "icon": "fa fa-picture-o",
                "submenus": [{
                        "text": "Photography"
                    }, {
                        "text": "Base Camp"
                    }]
            },
            {
                "text": "About Us",
                "icon": "fa fa-address-book-o fa-fw",
                "submenus": [{
                        "text": "Contact"
                    }, {
                        "text": "Privacy Policies"
                    }]
            }
        ],
            this.tempData = [
                {
                    label: "Home"
                },
                {
                    label: "flights"
                },
                {
                    label: "hotels"
                },
                {
                    label: "Discover"
                },
                {
                    label: "Things to do"
                },
                {
                    label: "Vacation Packages"
                },
                {
                    label: "help"
                }
            ];
    };
    MenuThreeComponent.prototype.onLoginClick = function (data) {
        this.facebookLoginData = data;
    };
    MenuThreeComponent.prototype.ngOnInit = function () {
    };
    MenuThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu-three',
            template: __webpack_require__(/*! ./menu3.component.html */ "./src/app/creative-menu3/menu3.component.html"),
            styles: [__webpack_require__(/*! ./menu3.component.css */ "./src/app/creative-menu3/menu3.component.css")]
        }),
        __metadata("design:paramtypes", [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioGridLayoutService"]])
    ], MenuThreeComponent);
    return MenuThreeComponent;
}());



/***/ }),

/***/ "./src/app/viewport/viewport.component.css":
/*!*************************************************!*\
  !*** ./src/app/viewport/viewport.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/viewport/viewport.component.html":
/*!**************************************************!*\
  !*** ./src/app/viewport/viewport.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-viewport [type]=\"'2'\" [scrollable]=\"true\">\n  <amexio-viewport-content [scrollable]=\"false\">\n\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/viewportImages/dance.jpeg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <amexio-nav [transparent]=\"true\" [enable-side-nav-position]=\"true\" [title]=\"'Aerofit Fun and Fitness Classes'\"\n        [logo]=\"'assets/viewportImages/logo1.png'\">\n        <amexio-nav-item position-right [title]=\"'Home'\" [icon]=\"'fa fa-home fa-fw fa-lg'\" [type]=\"'button'\"\n          style=\"cursor: pointer;\">\n        </amexio-nav-item>\n        <amexio-nav-item position-right *ngFor=\"let menus of navmenus\" [type]=\"'menu'\" [title]=\"menus.text\"\n          [icon]=\"menus.icon\" [data]=\"menus.submenus\">\n        </amexio-nav-item>\n        <amexio-nav-item position-right [icon]=\"'fa fa-bell fa-fw fa-lg'\" [type]=\"'button'\" style=\"cursor: pointer;\">\n        </amexio-nav-item>\n      </amexio-nav>\n\n      <div class=\"rowClass\">\n        <amexio-row>\n          <amexio-column size=\"1\" [fit]=\"false\">\n          </amexio-column>\n          <amexio-column size=\"3\" [fit]=\"false\">\n            <amexio-label [font-color]=\"'white'\" [size]=\"'large'\">\n              Life is better when you Dance\n              <p>Because Dance is the hidden language of the soul.</p>\n              <p>Hand in hand, on the edge of the sand,</p>\n              <p>Let's dance by the light of the moon!</p>\n            </amexio-label>\n          </amexio-column>\n        </amexio-row>\n      </div>\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n\n  <amexio-viewport-content>\n    <amexio-viewport-background>\n      <amexio-image [path]=\"'assets/viewportImages/bg5.jpeg'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body [scrollable]=\"true\">\n\n      <amexio-row>\n        <div class=\"rowClass\">\n          <amexio-row>\n            <amexio-column size=\"1\" [fit]=\"false\">\n            </amexio-column>\n            <amexio-column size=\"10\" [fit]=\"false\">\n              <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'transparent'\">\n                <amexio-header-ce [align]=\"'space-between'\">\n                  <amexio-label size=\"medium-bold\">About Us\n                  </amexio-label>\n                  <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\">\n                    <amexio-layout-item>\n                      <amexio-image [icon-class]=\"'fa fa-share-alt'\" [tooltip]=\"'Fontawesome apple'\"></amexio-image>\n                    </amexio-layout-item>\n                    <amexio-layout-item>\n                      <amexio-image [icon-class]=\"'fa fa-heart-o'\" [tooltip]=\"'Fontawesome apple'\"></amexio-image>\n                    </amexio-layout-item>\n                    <amexio-layout-item>\n                      <amexio-image [icon-class]=\"'fa fa-bookmark-o'\" [tooltip]=\"'Fontawesome apple'\"></amexio-image>\n                    </amexio-layout-item>\n                  </amexio-layout-columns>\n                </amexio-header-ce>\n                <amexio-body-ce>\n                  <p>\n                    With an aim to provide quality dance training and making dance available to all, Aerofit dance\n                    classes run throughout the year at multiple locations for students from ages four to eighty four\n                    providing them with training in various dance styles by expert faculty. The classes give them an\n                    opportunity to learn dance, express themselves creatively and perform on stage. Classes are\n                    available for children (4 to 6 years), juniors (7 to 11 years) and adults (12 years onwards). </p>\n                  <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\">\n                    <amexio-layout-item>\n                      <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'320512778592240'\" [type]=\"'facebook'\"\n                        (onLogin)=\"onLoginClick($event)\">\n                      </amexio-login-social>\n                    </amexio-layout-item>\n                    <amexio-layout-item>\n                      <amexio-login-social [style-type]=\"'circle'\"\n                        [api-key]=\"'743009515877-3rfp9u0b2iq95m2o2921kc3hecaamc3e.apps.googleusercontent.com'\"\n                        [type]=\"'google'\" (onLogin)=\"onLoginClick($event)\">\n                      </amexio-login-social>\n                    </amexio-layout-item>\n                    <amexio-layout-item>\n                      <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'81wzvqnx8wtvmg'\" [type]=\"'linkedin'\"\n                        (onLogin)=\"onLoginClick($event)\">\n                      </amexio-login-social>\n                    </amexio-layout-item>\n                  </amexio-layout-columns>\n                </amexio-body-ce>\n              </amexio-card-ce>\n            </amexio-column>\n            <amexio-column size=\"1\" [fit]=\"false\">\n            </amexio-column>\n          </amexio-row>\n        </div>\n      </amexio-row>\n      <amexio-row>\n        <amexio-column size=\"1\" [fit]=\"false\">\n        </amexio-column>\n\n        <amexio-column size=\"10\" [fit]=\"false\">\n          <amexio-card-ce [align]=\"'center'\" [color]=\"'white'\" [background]=\"'transparent'\">\n            <amexio-header-ce [align]=\"'space-between'\">\n              <amexio-label size=\"medium-bold\">Get In Touch\n              </amexio-label>\n              <amexio-layout-columns [orientation]=\"'horizontal'\" [border]=\"false\">\n                <amexio-layout-item>\n                  <amexio-image [icon-class]=\"'fa fa-map-marker'\" [tooltip]=\"'Fontawesome apple'\"></amexio-image>\n                </amexio-layout-item>\n              </amexio-layout-columns>\n            </amexio-header-ce>\n            <amexio-body-ce>\n              <p>\n                AEROFIT FUN & FITNESS 1st floor Nirvana, Green Field Rd, Near Amanora Township Magarpatta, Hadapsar,\n                Pune, Maharashtra -\n                411028 </p>\n              <p>+91 9674125890 / +91 9674522001</p>\n              <p>contact@aerofitdancefitness.org</p>\n            </amexio-body-ce>\n          </amexio-card-ce>\n        </amexio-column>\n\n        <amexio-column size=\"1\" [fit]=\"false\">\n        </amexio-column>\n      </amexio-row>\n\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n</amexio-viewport>"

/***/ }),

/***/ "./src/app/viewport/viewport.component.ts":
/*!************************************************!*\
  !*** ./src/app/viewport/viewport.component.ts ***!
  \************************************************/
/*! exports provided: ViewportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportComponent", function() { return ViewportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewportComponent = /** @class */ (function () {
    function ViewportComponent(_gridlayoutService) {
        this._gridlayoutService = _gridlayoutService;
        this.createLayouts();
        // Create the Layouts
        this._gridlayoutService.createLayout(this.gridDesktop);
    }
    ViewportComponent.prototype.createLayouts = function () {
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConfig"]('LayoutSample1', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["GridConstants"].Desktop)
            .addlayout(["gridmenu1", "gridmenu2", "gridmenu3", "gridlogin"])
            .addlayout(["gridmenu4", "gridmenu5", "gridmenu6", "gridlogin1"]);
        this.navmenus = [{
                "text": "Classes",
                "icon": "fa fa-television fa-fw",
                "submenus": [{
                        "text": "Hip Hop",
                    }, {
                        "text": "Zumba",
                    }, {
                        "text": "Dance Fitness",
                    }, {
                        "text": "Salsa",
                    }]
            },
            {
                "text": "Gallery",
                "icon": "fa fa-picture-o",
                "submenus": [{
                        "text": "Kids Classes"
                    }, {
                        "text": "City Dance Competition"
                    }, {
                        "text": "Zumba Sessions"
                    }]
            },
            {
                "text": "About Us",
                "icon": "fa fa-address-book-o fa-fw",
                "submenus": [{
                        "text": "Contact"
                    }, {
                        "text": "Privacy Policies"
                    }]
            }
        ];
    };
    ViewportComponent.prototype.onLoginClick = function (data) {
        this.facebookLoginData = data;
    };
    ViewportComponent.prototype.ngOnInit = function () {
    };
    ViewportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'viewport-demo1',
            template: __webpack_require__(/*! ./viewport.component.html */ "./src/app/viewport/viewport.component.html"),
            styles: [__webpack_require__(/*! ./viewport.component.css */ "./src/app/viewport/viewport.component.css")]
        }),
        __metadata("design:paramtypes", [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioGridLayoutService"]])
    ], ViewportComponent);
    return ViewportComponent;
}());



/***/ }),

/***/ "./src/app/viewport2/viewport2.component.css":
/*!***************************************************!*\
  !*** ./src/app/viewport2/viewport2.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".localsearch .inputgroup {\n    display: inline-block!important;\n\n    background: white;\n     /* border-bottom: 1px solid rgba(0, 0, 0, 0.42);  */\n    padding-left: 5px;\n\n};\n\n.localsearch .inputgroup ::-webkit-input-placeholder{\n    padding-left: 5px!important;\n}\n\n.localsearch .inputgroup ::-moz-placeholder{\n    padding-left: 5px!important;\n}\n\n.localsearch .inputgroup ::-ms-input-placeholder{\n    padding-left: 5px!important;\n}\n\n.localsearch .inputgroup ::placeholder{\n    padding-left: 5px!important;\n}\n\n.localsearch  .button-default {\n     height: 43px!important;\n     border-radius: 0px!important;\n}\n\n.searchBtn .button-default{\n    border: none!important;\n}\n\n.localsearch  .button-primary{\n     height: 41.5px!important;\n      border-radius: 0px!important;\n      border:none!important;\n      box-shadow: none!important;\n}\n\n.localsearch .input-control{\n        border-bottom: none!important;\n\n\n}\n\n.localsearchtext .input-control {\n    width: 520px!important;\n    padding-left: 5px!important;\n    border-bottom: none!important;\n\n}\n\n.localsearchtext .input-control-feedback{\n    bottom: 2px!important;\n}\n\n"

/***/ }),

/***/ "./src/app/viewport2/viewport2.component.html":
/*!****************************************************!*\
  !*** ./src/app/viewport2/viewport2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-viewport [type]=\"'2'\" [scrollable]=\"true\">\n    <amexio-viewport-content [scrollable]=\"false\">\n        <amexio-viewport-background>\n            <amexio-image [path]=\"'assets/viewportImages/living1.jpg'\"></amexio-image>\n        </amexio-viewport-background>\n        <amexio-viewport-content-body>\n\n            <amexio-nav [transparent]=\"true\" [enable-side-nav-position]=\"true\" [title]=\"'EyePropertyRecord.com'\" [logo]=\"'assets/viewportImages/1.png'\">\n                <amexio-nav-item position-right [title]=\"'Home'\" [icon]=\"'fa fa-home fa-fw fa-lg'\" [type]=\"'button'\" style=\"cursor: pointer;\">\n                </amexio-nav-item>\n                <amexio-nav-item position-right *ngFor=\"let menus of navmenus\" [type]=\"'menu'\" [title]=\"menus.text\" [icon]=\"menus.icon\" [data]=\"menus.submenus\">\n                </amexio-nav-item>\n                <amexio-nav-item position-right [type]=\"'link'\" [icon]=\"'fa fa-user'\" [title]=\"'Login'\">\n                </amexio-nav-item>\n            </amexio-nav>\n            <div>\n                <amexio-row>\n                    <amexio-column size=\"12\" style=\"padding-top:14%\">\n                    </amexio-column>\n                </amexio-row>\n                <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n                    <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n                        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n                            <amexio-layout-item>\n                                <amexio-label size=\"large-bold\" font-color=\"white\">\n                                    What do you wanna buy today?\n                                </amexio-label>\n                            </amexio-layout-item>\n\n                        </amexio-layout-columns>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n                <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'center'\">\n                    <amexio-layout-item [fit]=\"true\">\n                        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n                            <amexio-layout-item>\n                                <amexio-button [label]=\"'Buy'\" [type]=\"'theme-color'\" [tooltip]=\"'toolTip'\" [icon]=\"'icon'\" [disabled]=\"false\" class=\"localsearch\">\n                                </amexio-button>\n                                <amexio-button [label]=\"'Sell'\" [type]=\"'theme-color'\" [tooltip]=\"'toolTip'\" [icon]=\"'icon'\" [disabled]=\"false\" class=\"localsearch\">\n                                </amexio-button>\n                                <div class=\"localsearch\">\n                                    <amexio-row>\n                                        <div class=\"inputClass\">\n                                            <amexio-dropdown style=\"width:400px\" [place-holder]=\"'Choose'\" name=\"category\" [field-label]=\"''\" [data]=\"categories\" [display-field]=\"'name'\"\n                                                [value-field]=\"'id'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n                                            </amexio-dropdown>\n                                        </div>\n                                        <div class=\"inputClass\">\n                                            <amexio-text-input style=\"width:650px\" [field-label]=\"'label'\" name=\"name\" [has-label]=\"false\" [place-holder]=\"'Search'\"\n                                                [icon-feedback]=\"true\" class=\"localsearchtext\">\n                                            </amexio-text-input>\n                                        </div>\n                                        <amexio-button [label]=\"'Search'\" [size]=\"'large'\" [type]=\"'theme-color'\" [tooltip]=\"'toolTip'\" [icon]=\"'icon'\" [disabled]=\"false\"\n                                            [size]=\"'default'\" [loading]=\"false\" [block]=\"false\" [bg-color]=\"'red'\">\n                                        </amexio-button>\n                                    </amexio-row>\n                                </div>\n                            </amexio-layout-item>\n                        </amexio-layout-columns>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n            </div>\n        </amexio-viewport-content-body>\n    </amexio-viewport-content>\n\n    <amexio-viewport-content [scrollable]=\"false\">\n        <amexio-viewport-background>\n            <amexio-image [path]=\"'assets/viewportImages/living2.jpg'\"></amexio-image>\n        </amexio-viewport-background>\n        <amexio-viewport-content-body>\n            <br>\n            <br>\n            <amexio-row>\n                <amexio-column size=\"2\" [fit]=\"false\">\n                </amexio-column>\n                <amexio-column size=\"6\" [fit]=\"false\">\n                    <amexio-label [font-color]=\"'white'\" [size]=\"'large-bold'\">\n                        Top Projects\n                    </amexio-label>\n                    <br>\n                    <amexio-label [font-color]=\"'white'\" [size]=\"'medium-bold'\">\n                        Best developers in Wagholi to explore. </amexio-label>\n                </amexio-column>\n            </amexio-row>\n            <br>\n            <br>\n            <amexio-row>\n                <amexio-column size=\"1\" [fit]=\"false\">\n                </amexio-column>\n                <amexio-column size=\"3\" [fit]=\"false\">\n                    <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(139,69,19,.3)'\">\n                        <amexio-header-ce [background]=\"'linear-gradient(40deg,#ff9e20,#ff6a20)'\" [height]=\"'75px'\" align=\"center\">\n                            <amexio-label [size]=\"'medium-bold'\">\n                                Shapoorji Paloni Residency\n                            </amexio-label>\n\n                        </amexio-header-ce>\n                        <amexio-body-ce>\n                            <amexio-row>\n                                <amexio-column size=\"12\" [fit]=\"false\">\n                                    <amexio-label [font-color]=\"'white'\" [size]=\"'medium-bold'\">\n                                        Special Highlights\n                                    </amexio-label>\n                                </amexio-column>\n                                <amexio-column size=\"12\" [fit]=\"false\">\n                                    <!-- <amexio-chips [data]=\"sampledatachips\" [display-field]=\"'label'\"></amexio-chips> -->\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column size=\"6\" [fit]=\"false\">\n\n                                </amexio-column>\n                            </amexio-row>\n                        </amexio-body-ce>\n                        <amexio-action-ce [align]=\"'left'\">\n                            <amexio-label [size]=\"'small-bold'\" [enable-click]=\"true\">\n                                SNBP School Road, Wagholi\n                            </amexio-label>\n                        </amexio-action-ce>\n                    </amexio-card-ce>\n\n                </amexio-column>\n            </amexio-row>\n        </amexio-viewport-content-body>\n    </amexio-viewport-content>\n\n    <amexio-viewport-content [scrollable]=\"false\">\n        <amexio-viewport-background>\n            <amexio-image [path]=\"'assets/viewportImages/living3.jpg'\"></amexio-image>\n        </amexio-viewport-background>\n        <amexio-viewport-content-body>\n            <br>\n            <br>\n            <amexio-row>\n                <amexio-column size=\"2\" [fit]=\"false\">\n                </amexio-column>\n                <amexio-column size=\"6\" [fit]=\"false\">\n                    <amexio-label [font-color]=\"'white'\" [size]=\"'large-bold'\">\n                        Top Projects\n                    </amexio-label>\n                    <br>\n                    <amexio-label [font-color]=\"'white'\" [size]=\"'medium-bold'\">\n                        Best developers in Hadapsar to explore. </amexio-label>\n                </amexio-column>\n            </amexio-row>\n            <br>\n            <br>\n            <amexio-row>\n                <amexio-column size=\"1\" [fit]=\"false\">\n                </amexio-column>\n                <amexio-column size=\"3\" [fit]=\"false\">\n                    <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(0,0,0,.3)'\">\n                        <amexio-header-ce [background]=\"'linear-gradient(40deg,#ff9e20,#ff6a20)'\" [height]=\"'75px'\" align=\"center\">\n                            <amexio-label [size]=\"'medium-bold'\">\n                                Daffodils Residency\n                            </amexio-label>\n\n                        </amexio-header-ce>\n                        <amexio-body-ce>\n                            <amexio-row>\n                                <amexio-column size=\"12\" [fit]=\"false\">\n                                    <amexio-label [font-color]=\"'white'\" [size]=\"'medium-bold'\">\n                                        Special Highlights\n                                    </amexio-label>\n                                </amexio-column>\n                                <amexio-column size=\"12\" [fit]=\"false\">\n                                    <!-- <amexio-chips [data]=\"sampledatachips1\" [display-field]=\"'label'\"></amexio-chips> -->\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column size=\"6\" [fit]=\"false\">\n\n                                </amexio-column>\n                            </amexio-row>\n                        </amexio-body-ce>\n                        <amexio-action-ce [align]=\"'left'\">\n                            <amexio-label [font-color]=\"'white'\" [size]=\"'small-bold'\" [enable-click]=\"true\">\n                                Magarpatta City, Hadapsar\n                            </amexio-label>\n                        </amexio-action-ce>\n                    </amexio-card-ce>\n\n                </amexio-column>\n            </amexio-row>\n        </amexio-viewport-content-body>\n    </amexio-viewport-content>\n\n    <amexio-viewport-content [scrollable]=\"false\">\n        <amexio-viewport-background>\n            <amexio-image [path]=\"'assets/viewportImages/living4.jpg'\"></amexio-image>\n        </amexio-viewport-background>\n        <amexio-viewport-content-body>\n            <br>\n            <br>\n            <br>\n            <amexio-row>\n                <amexio-column size=\"2\" [fit]=\"false\">\n                </amexio-column>\n                <amexio-column size=\"6\" [fit]=\"false\">\n                    <amexio-label [font-color]=\"'black'\" [size]=\"'large-bold'\">\n                        Top Projects\n                    </amexio-label>\n                    <br>\n                    <amexio-label [font-color]=\"'black'\" [size]=\"'medium-bold'\">\n                        Best developers in Mundhwa to explore. </amexio-label>\n                </amexio-column>\n            </amexio-row>\n            <br>\n            <br>\n            <amexio-row>\n                <amexio-column size=\"1\" [fit]=\"false\">\n\n                </amexio-column>\n                <amexio-column size=\"3\" [fit]=\"false\">\n                    <amexio-card-ce [align]=\"'start'\" [color]=\"'black'\" [background]=\"'rgba(255,255,255,.3)'\">\n                        <amexio-header-ce [background]=\"'linear-gradient(40deg,#ff9e20,#ff6a20)'\" [height]=\"'75px'\" align=\"center\">\n                            <amexio-label [size]=\"'medium-bold'\">\n                                Sudarshan Heritage\n                            </amexio-label>\n\n                        </amexio-header-ce>\n                        <amexio-body-ce>\n                            <amexio-row>\n                                <amexio-column size=\"12\" [fit]=\"false\">\n                                    <amexio-label [font-color]=\"'black'\" [size]=\"'medium-bold'\">\n                                        Special Highlights\n                                    </amexio-label>\n                                </amexio-column>\n                                <amexio-column size=\"12\" [fit]=\"false\">\n                                    <!-- <amexio-chips [data]=\"sampledatachips1\" [display-field]=\"'label'\"></amexio-chips> -->\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column size=\"6\" [fit]=\"false\">\n\n                                </amexio-column>\n                            </amexio-row>\n                        </amexio-body-ce>\n                        <amexio-action-ce [align]=\"'left'\">\n                            <amexio-label [font-color]=\"'black'\" [size]=\"'small-bold'\" [enable-click]=\"true\">\n                                SMP School Road, Mundhwa\n                            </amexio-label>\n                        </amexio-action-ce>\n                    </amexio-card-ce>\n                </amexio-column>\n            </amexio-row>\n        </amexio-viewport-content-body>\n    </amexio-viewport-content>\n</amexio-viewport>"

/***/ }),

/***/ "./src/app/viewport2/viewport2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/viewport2/viewport2.component.ts ***!
  \**************************************************/
/*! exports provided: ViewportComponent2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportComponent2", function() { return ViewportComponent2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewportComponent2 = /** @class */ (function () {
    function ViewportComponent2(_gridlayoutService) {
        this._gridlayoutService = _gridlayoutService;
        this.sampledatachips = [{
                "icon": "fa fa-check-circle",
                "label": "Vitrified Balcony ",
                "color": "#bc8b20",
                "closable": false,
            },
            {
                "icon": "fa fa-check-circle",
                "label": "24*7 Security",
                "closable": false,
                "color": "#bc8b20"
            },
            {
                "icon": "fa fa-check-circle",
                "label": "Parking",
                "closable": false,
                "color": "#bc8b20"
            },
            {
                "icon": "fa fa-check-circle",
                "label": "Close to Mall",
                "closable": false,
                "color": "#bc8b20"
            }];
        this.sampledatachips1 = [{
                "icon": "fa fa-check-circle",
                "label": "Vitrified Balcony ",
                "color": "#bc8b20",
                "closable": false,
            },
            {
                "icon": "fa fa-check-circle",
                "label": "24*7 Security",
                "closable": false,
                "color": "#bc8b20"
            },
            {
                "icon": "fa fa-check-circle",
                "label": "Parking",
                "closable": false,
                "color": "#bc8b20"
            },
            {
                "icon": "fa fa-check-circle",
                "label": "Close to Mall",
                "closable": false,
                "color": "#bc8b20"
            },
            {
                "icon": "fa fa-wifi",
                "label": "wifi",
                "closable": false,
                "color": "#bc8b20"
            }];
        this.categories = [{
                id: 'tv',
                name: 'TV'
            },
            {
                id: 'apartment',
                name: 'Apartment'
            }];
        this.navmenus = this.navmenus = [{
                "text": "Buy",
                "icon": "fa fa-shopping-cart",
                "submenus": [{
                        "text": "Home Buying Guide",
                    }, {
                        "text": "Post your Requirement",
                    }, {
                        "text": "Home Loan",
                    }]
            },
            {
                "text": "Sell",
                "icon": "fa fa-check",
                "submenus": [{
                        "text": "Post Your Property"
                    }, {
                        "text": "Propworth Calculator"
                    }, {
                        "text": "Find an Agent"
                    }]
            },
            {
                "text": "About Us",
                "icon": "fa fa-address-book-o fa-fw",
                "submenus": [{
                        "text": "Contact"
                    }, {
                        "text": "Help"
                    }]
            }
        ];
        // Create the Layouts
        // this._gridlayoutService.createLayout(this.gridDesktop);
    }
    ViewportComponent2.prototype.ngOnInit = function () {
    };
    ViewportComponent2 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'viewport-demo2',
            template: __webpack_require__(/*! ./viewport2.component.html */ "./src/app/viewport2/viewport2.component.html"),
            styles: [__webpack_require__(/*! ./viewport2.component.css */ "./src/app/viewport2/viewport2.component.css")]
        }),
        __metadata("design:paramtypes", [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_1__["AmexioGridLayoutService"]])
    ], ViewportComponent2);
    return ViewportComponent2;
}());



/***/ }),

/***/ "./src/app/viewport3/viewport3.component.css":
/*!***************************************************!*\
  !*** ./src/app/viewport3/viewport3.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".localsearch .inputgroup {\n    display: inline-block!important;\n\n    background: white;\n     /* border-bottom: 1px solid rgba(0, 0, 0, 0.42);  */\n    padding-left: 5px;\n\n};\n\n.localsearch .inputgroup ::-webkit-input-placeholder{\n    padding-left: 5px!important;\n}\n\n.localsearch .inputgroup ::-moz-placeholder{\n    padding-left: 5px!important;\n}\n\n.localsearch .inputgroup ::-ms-input-placeholder{\n    padding-left: 5px!important;\n}\n\n.localsearch .inputgroup ::placeholder{\n    padding-left: 5px!important;\n}\n\n.localsearch  .button-default {\n     height: 43px!important;\n     border-radius: 0px!important;\n}\n\n.searchBtn .button-default{\n    border: none!important;\n}\n\n.localsearch  .button-primary{\n     height: 41.5px!important;\n      border-radius: 0px!important;\n      border:none!important;\n      box-shadow: none!important;\n}\n\n.localsearch .input-control{\n        border-bottom: none!important;\n\n\n}\n\n.localsearchtext .input-control {\n    width: 520px!important;\n    padding-left: 5px!important;\n    border-bottom: none!important;\n\n}\n\n.localsearchtext .input-control-feedback{\n    bottom: 2px!important;\n}\n\n"

/***/ }),

/***/ "./src/app/viewport3/viewport3.component.html":
/*!****************************************************!*\
  !*** ./src/app/viewport3/viewport3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-viewport [type]=\"'2'\" [scrollable]=\"true\">\n    <amexio-viewport-content [scrollable]=\"false\">\n        <amexio-viewport-background>\n            <amexio-video-player path=\"assets/video/video3.mp4\">\n            </amexio-video-player>\n        </amexio-viewport-background>\n        <amexio-viewport-content-body>\n\n            <amexio-nav [transparent]=\"true\" [enable-side-nav-position]=\"true\" [title]=\"'Greenhouse Farms'\" [logo]=\"'assets/viewportImages/farm.png'\">\n                <amexio-nav-item position-right [title]=\"'Home'\" [icon]=\"'fa fa-home fa-fw fa-lg'\" [type]=\"'button'\" style=\"cursor: pointer;\">\n                </amexio-nav-item>\n                <amexio-nav-item position-right *ngFor=\"let menus of navmenus\" [type]=\"'menu'\" [title]=\"menus.text\" [icon]=\"menus.icon\" [data]=\"menus.submenus\">\n                </amexio-nav-item>\n                <amexio-nav-item position-right [type]=\"'link'\" [icon]=\"'fa fa-user'\" [title]=\"'Login'\">\n                </amexio-nav-item>\n            </amexio-nav>\n            <div class=\"rowClass\">\n                <amexio-row>\n                  <amexio-column size=\"1\" [fit]=\"false\">\n                  </amexio-column>\n                  <amexio-column size=\"3\" [fit]=\"false\">\n                      <amexio-label [font-color]=\"'white'\" [size]=\"'medium'\">\n                        There is pleasure in the pathless woods,\n                        <p>There is rapture in the lonely shore,</p>\n                        <p>There is society where none intrudes,</p>\n                        <p>By the deep sea, or the jungle, and music in its roar;</p>\n                        <p>I love not Man the less, but Nature more.</p>\n                        <p>Lord Byron</p>\n                      </amexio-label>\n                  </amexio-column>\n                </amexio-row>\n              </div>\n        </amexio-viewport-content-body>\n    </amexio-viewport-content>\n\n\n    <amexio-viewport-content [scrollable]=\"false\">\n        <amexio-viewport-background>\n            <amexio-image [path]=\"'assets/viewport3/horseriding.jpg'\"></amexio-image>\n        </amexio-viewport-background>\n        <amexio-viewport-content-body>\n            <amexio-row>\n                <amexio-column size=\"12\" style=\"padding-top:10%\">\n                </amexio-column>\n            </amexio-row>\n            <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n                <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n                    <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n                        <amexio-layout-item>\n                            <amexio-row>\n                                <amexio-column size=\"1\" [fit]=\"false\">\n                                </amexio-column>\n                                <amexio-column size=\"4\" [fit]=\"false\">\n                                    <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(139,69,19,.3)'\">\n                                        <amexio-header-ce [background]=\"'linear-gradient(40deg,#748262,#8fa86f)'\" [height]=\"'75px'\" align=\"center\">\n                                            <amexio-badge [absolute]=\"true\" [background]=\"'#e74c3c'\" [color]=\"'white'\" [top]=\"'0px'\" [right]=\"'5%'\">\n                                                <amexio-label>9:05 AM</amexio-label>\n                                            </amexio-badge>\n                                            <amexio-label [size]=\"'large-bold'\">\n                                                Morning Rush </amexio-label>\n                                        </amexio-header-ce>\n                                        <amexio-body-ce>\n                                            <amexio-row>\n                                                <amexio-column size=\"12\" [fit]=\"false\">\n                                                    <amexio-label [font-color]=\"'white'\" [size]=\"'medium-bold'\">\n                                                        As the sun crests the warm red mountains and the summer glow begins to fill the valley below, you realize that this is what life is about. Family, fun and the open space of the West.\n                                                    </amexio-label>\n                                                </amexio-column>\n                                            </amexio-row>\n                                            <amexio-row>\n                                                <amexio-column size=\"6\" [fit]=\"false\">\n                \n                                                </amexio-column>\n                                            </amexio-row>\n                                        </amexio-body-ce>\n                                    </amexio-card-ce>\n                \n                                </amexio-column>\n                            </amexio-row>\n                        </amexio-layout-item>\n\n                    </amexio-layout-columns>\n                </amexio-layout-item>\n            </amexio-layout-columns>\n        </amexio-viewport-content-body>\n    </amexio-viewport-content>\n\n    <amexio-viewport-content [scrollable]=\"false\">\n        <amexio-viewport-background>\n            <amexio-image [path]=\"'assets/viewport3/lunch.jpeg'\"></amexio-image>\n        </amexio-viewport-background>\n        <amexio-viewport-content-body>\n            <amexio-row>\n                <amexio-column size=\"12\" style=\"padding-top:10%\">\n                </amexio-column>\n            </amexio-row>\n            <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n                <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n                    <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n                        <amexio-layout-item>\n                            <amexio-row>\n                                <amexio-column size=\"1\" [fit]=\"false\">\n                                </amexio-column>\n                                <amexio-column size=\"4\" [fit]=\"false\">\n                                    <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(139,69,19,.3)'\">\n                                        <amexio-header-ce [background]=\"'linear-gradient(40deg,#748262,#8fa86f)'\" [height]=\"'75px'\" align=\"center\">\n                                            <amexio-badge [absolute]=\"true\" [background]=\"'#e74c3c'\" [color]=\"'white'\" [top]=\"'0px'\" [right]=\"'5%'\">\n                                                <amexio-label>12:16 PM</amexio-label>\n                                            </amexio-badge>\n                                            <amexio-label [size]=\"'large-bold'\">\n                                                Lunch Commute </amexio-label>\n                                        </amexio-header-ce>\n                                        <amexio-body-ce>\n                                            <amexio-row>\n                                                <amexio-column size=\"12\" [fit]=\"false\">\n                                                    <amexio-label [font-color]=\"'white'\" [size]=\"'medium-bold'\">\n                                                        After an exciting day of riding, hiking, fishing and exploring all the ranch has to offer, nothing is better than a home cooked meal, fresh and creative, to keep you going for the next half of the day.\n                                                    </amexio-label>\n                                                </amexio-column>\n                                            </amexio-row>\n                                            <amexio-row>\n                                                <amexio-column size=\"6\" [fit]=\"false\">\n                \n                                                </amexio-column>\n                                            </amexio-row>\n                                        </amexio-body-ce>\n                                    </amexio-card-ce>\n                \n                                </amexio-column>\n                            </amexio-row>\n                        </amexio-layout-item>\n\n                    </amexio-layout-columns>\n                </amexio-layout-item>\n            </amexio-layout-columns>\n        </amexio-viewport-content-body>\n    </amexio-viewport-content>\n\n    <amexio-viewport-content [scrollable]=\"false\">\n        <amexio-viewport-background>\n            <amexio-image [path]=\"'assets/viewport3/evening.jpg'\"></amexio-image>\n        </amexio-viewport-background>\n        <amexio-viewport-content-body>\n            <amexio-row>\n                <amexio-column size=\"12\" style=\"padding-top:10%\">\n                </amexio-column>\n            </amexio-row>\n            <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n                <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n                    <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n                        <amexio-layout-item>\n                            <amexio-row>\n                                <amexio-column size=\"1\" [fit]=\"false\">\n                                </amexio-column>\n                                <amexio-column size=\"4\" [fit]=\"false\">\n                                    <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(0,0,0,.3)'\">\n                                        <amexio-header-ce [background]=\"'linear-gradient(40deg,#748262,#8fa86f)'\" [height]=\"'75px'\" align=\"center\">\n                                            <amexio-badge [absolute]=\"true\" [background]=\"'#e74c3c'\" [color]=\"'white'\" [top]=\"'0px'\" [right]=\"'5%'\">\n                                                <amexio-label>03:09 PM</amexio-label>\n                                            </amexio-badge>\n                                            <amexio-label [size]=\"'large-bold'\">\n                                                Stand Tall </amexio-label>\n                                        </amexio-header-ce>\n                                        <amexio-body-ce>\n                                            <amexio-row>\n                                                <amexio-column size=\"12\" [fit]=\"false\">\n                                                    <amexio-label [font-color]=\"'white'\" [size]=\"'medium-bold'\">\n                                                        Take advantage of all Red Rock Ranch has to offer by hitting the mountain trails for unforgettable views of the Teton Mountains and the picturesque Gros Ventre valley.\n                                                    </amexio-label>\n                                                </amexio-column>\n                                            </amexio-row>\n                                            <amexio-row>\n                                                <amexio-column size=\"6\" [fit]=\"false\">\n                \n                                                </amexio-column>\n                                            </amexio-row>\n                                        </amexio-body-ce>\n                                    </amexio-card-ce>\n                \n                                </amexio-column>\n                            </amexio-row>\n                        </amexio-layout-item>\n\n                    </amexio-layout-columns>\n                </amexio-layout-item>\n            </amexio-layout-columns>\n        </amexio-viewport-content-body>\n    </amexio-viewport-content>\n\n    <amexio-viewport-content [scrollable]=\"false\">\n        <amexio-viewport-background>\n            <amexio-image [path]=\"'assets/viewport3/camping.jpg'\"></amexio-image>\n        </amexio-viewport-background>\n        <amexio-viewport-content-body>\n            <amexio-row>\n                <amexio-column size=\"12\" style=\"padding-top:10%\">\n                </amexio-column>\n            </amexio-row>\n            <br>\n            <br>\n            <amexio-row>\n                <amexio-column size=\"2\" [fit]=\"false\">\n                </amexio-column>\n            </amexio-row>\n            <br>\n            <br>\n            <amexio-row>\n                <amexio-column size=\"1\" [fit]=\"false\">\n                </amexio-column>\n                <amexio-column size=\"4\" [fit]=\"false\">\n                    <amexio-card-ce [align]=\"'start'\" [color]=\"'white'\" [background]=\"'rgba(0,0,0,.3)'\">\n                        <amexio-header-ce [background]=\"'linear-gradient(40deg,#748262,#8fa86f)'\" [height]=\"'75px'\" align=\"center\">\n                            <amexio-badge [absolute]=\"true\" [background]=\"'#e74c3c'\" [color]=\"'white'\" [top]=\"'0px'\" [right]=\"'5%'\">\n                                <amexio-label>10:15 PM</amexio-label>\n                            </amexio-badge>\n                            <amexio-label [size]=\"'medium-bold'\">\n                                Find Yourself Here...\n                            </amexio-label>\n\n                        </amexio-header-ce>\n                        <amexio-body-ce>\n                            <amexio-row>\n                                <amexio-column size=\"12\" [fit]=\"false\">\n                                        <amexio-label [font-color]=\"'white'\" [size]=\"'medium-bold'\">\n                                                Be it a world class hike, fishing on the streams or riding our gorgeous mountains – kick back and relax in the mountain fresh air as you look up at a sky full of stars.                                            </amexio-label>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column size=\"6\" [fit]=\"false\">\n\n                                </amexio-column>\n                            </amexio-row>\n                        </amexio-body-ce>\n                    </amexio-card-ce>\n\n                </amexio-column>\n            </amexio-row>\n        </amexio-viewport-content-body>\n    </amexio-viewport-content>\n\n</amexio-viewport>"

/***/ }),

/***/ "./src/app/viewport3/viewport3.component.ts":
/*!**************************************************!*\
  !*** ./src/app/viewport3/viewport3.component.ts ***!
  \**************************************************/
/*! exports provided: ViewportComponent3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportComponent3", function() { return ViewportComponent3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewportComponent3 = /** @class */ (function () {
    function ViewportComponent3() {
        this.sampledatachips = [{
                "icon": "fa fa-check-circle",
                "label": "Vitrified Balcony ",
                "color": "#bc8b20",
                "closable": false,
            },
            {
                "icon": "fa fa-check-circle",
                "label": "24*7 Security",
                "closable": false,
                "color": "#bc8b20"
            },
            {
                "icon": "fa fa-check-circle",
                "label": "Parking",
                "closable": false,
                "color": "#bc8b20"
            },
            {
                "icon": "fa fa-check-circle",
                "label": "Close to Mall",
                "closable": false,
                "color": "#bc8b20"
            }];
        this.sampledatachips1 = [{
                "icon": "fa fa-check-circle",
                "label": "Vitrified Balcony ",
                "color": "#bc8b20",
                "closable": false,
            },
            {
                "icon": "fa fa-check-circle",
                "label": "24*7 Security",
                "closable": false,
                "color": "#bc8b20"
            },
            {
                "icon": "fa fa-check-circle",
                "label": "Parking",
                "closable": false,
                "color": "#bc8b20"
            },
            {
                "icon": "fa fa-check-circle",
                "label": "Close to Mall",
                "closable": false,
                "color": "#bc8b20"
            },
            {
                "icon": "fa fa-wifi",
                "label": "wifi",
                "closable": false,
                "color": "#bc8b20"
            }];
        this.categories = [{
                id: 'tv',
                name: 'TV'
            },
            {
                id: 'apartment',
                name: 'Apartment'
            }];
        this.navmenus = this.navmenus = [
            {
                "text": "About",
                "icon": "fa fa-address-book-o fa-fw",
                "submenus": [{
                        "text": "Accommodations"
                    }, {
                        "text": "Dining"
                    }, {
                        "text": "Activities"
                    }]
            },
            {
                "text": "Contact",
                "icon": "fa fa-phone",
                "submenus": [{
                        "text": "Help"
                    }, {
                        "text": "Rates and Reservations"
                    }]
            }
        ];
    }
    ViewportComponent3.prototype.ngOnInit = function () {
    };
    ViewportComponent3 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'viewport-demo3',
            template: __webpack_require__(/*! ./viewport3.component.html */ "./src/app/viewport3/viewport3.component.html"),
            styles: [__webpack_require__(/*! ./viewport3.component.css */ "./src/app/viewport3/viewport3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewportComponent3);
    return ViewportComponent3;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/meta-magic/amexio-ce-demo-app-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map