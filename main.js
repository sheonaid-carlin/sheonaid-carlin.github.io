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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"navigation\">\n    <app-navigation [menuStatus]=\"true\" (navigated)=\"onNavigated($event)\"></app-navigation>\n  </div>\n  <div class=\"navigation-mobile\">\n    <app-navigation [menuStatus]=\"false\" (navigated)=\"onNavigated($event)\" (menuToggled)=\"onMenuToggle($event)\"></app-navigation>\n  </div>\n  <div *ngIf=\"!isMenuOpen\" class=\"content\">\n    <div class=\"component\" *ngIf=\"lbresearch\">\n      <app-lbresearch></app-lbresearch>\n    </div>\n    <div class=\"component\" *ngIf=\"edinburgh\">\n      <app-edinburgh></app-edinburgh>\n    </div>\n    <div class=\"component\" *ngIf=\"paris\">\n      <app-paris></app-paris>\n    </div>\n    <div class=\"component\" *ngIf=\"blog\">\n      <app-blog></app-blog>\n    </div>\n    <div class=\"component\" *ngIf=\"contact\">\n      <app-contact></app-contact>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  height: 100vh;\n}\n.navigation {\n  width: 200px;\n}\n.content {\n  width: 100%;\n}\n.component {\n  height: 100%;\n}\n.navigation-mobile {\n  display: none;\n  width: 100%;\n}\n.navigation {\n  display: block;\n}\n@media only screen and (max-width: 800px) {\n  .container {\n    flex-direction: column;\n  }\n  .navigation-mobile {\n    display: block;\n  }\n  .navigation {\n    display: none;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .container {\n    height: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbG9yaWFuL0RvY3VtZW50cy9uZy9zaGVvbmFpZC13ZWJzaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtDQ0NEO0FERUQ7RUFDRSxhQUFBO0NDQUQ7QURHRDtFQUNFLFlBQUE7Q0NERDtBRElEO0VBQ0UsYUFBQTtDQ0ZEO0FES0Q7RUFDRSxjQUFBO0VBQ0EsWUFBQTtDQ0hEO0FES0Q7RUFDRSxlQUFBO0NDSEQ7QURNRDtFQUNFO0lBQ0UsdUJBQUE7R0NKRDtFRE1EO0lBQ0UsZUFBQTtHQ0pEO0VETUQ7SUFDRSxjQUFBO0dDSkQ7Q0FDRjtBRE9EO0VBQ0U7SUFDRSxhQUFBO0dDTEQ7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbXBvbmVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubmF2aWdhdGlvbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29tcG9uZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5uYXZpZ2F0aW9uLW1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.lbresearch = true;
        this.edinburgh = false;
        this.paris = false;
        this.blog = false;
        this.contact = false;
        this.isMenuOpen = false;
    }
    AppComponent.prototype.onMenuToggle = function (isMenuOpen) {
        this.isMenuOpen = isMenuOpen;
    };
    AppComponent.prototype.onNavigated = function (entry) {
        switch (entry) {
            case "lbresearch":
                this.lbresearch = true;
                this.edinburgh = false;
                this.paris = false;
                this.blog = false;
                this.contact = false;
                break;
            case "edinburgh":
                this.lbresearch = false;
                this.edinburgh = true;
                this.paris = false;
                this.blog = false;
                this.contact = false;
                break;
            case "paris":
                this.lbresearch = false;
                this.edinburgh = false;
                this.paris = true;
                this.blog = false;
                this.contact = false;
                break;
            case "contact":
                this.lbresearch = false;
                this.edinburgh = false;
                this.paris = false;
                this.blog = false;
                this.contact = true;
                break;
            case "blog":
                this.lbresearch = false;
                this.edinburgh = false;
                this.paris = false;
                this.blog = true;
                this.contact = false;
                break;
            default:
                this.lbresearch = true;
                this.edinburgh = false;
                this.paris = false;
                this.blog = false;
                this.contact = false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _lbresearch_lbresearch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lbresearch/lbresearch.component */ "./src/app/lbresearch/lbresearch.component.ts");
/* harmony import */ var _edinburgh_edinburgh_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edinburgh/edinburgh.component */ "./src/app/edinburgh/edinburgh.component.ts");
/* harmony import */ var _paris_paris_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paris/paris.component */ "./src/app/paris/paris.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _lbresearch_lbresearch_component__WEBPACK_IMPORTED_MODULE_7__["LbresearchComponent"],
                _edinburgh_edinburgh_component__WEBPACK_IMPORTED_MODULE_8__["EdinburghComponent"],
                _paris_paris_component__WEBPACK_IMPORTED_MODULE_9__["ParisComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img id=\"container-background\" src=\"assets/pictures/blog_background.jpg\" alt=\"\">\n  <div class=\"content\">\n    <div class=\"blogEntry\">\n      <span>LOREM IPSUM</span><br>\n      <div class=\"blog-image\">\n        <img src=\"assets/pictures/blog_entry1.jpg\" alt=\"\">\n      </div>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </div>\n    <div class=\"blogEntry\">\n      <span>LOREM IPSUM</span><br>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </div>\n    <div class=\"blogEntry\">\n      <span>LOREM IPSUM</span><br>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </div>\n    <div class=\"blogEntry\">\n      <span>LOREM IPSUM</span><br>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.less":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  display: flex;\n  height: 100%;\n}\n#container-background {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n}\n.container:before {\n  content: \"\";\n  z-index: 1;\n  top: 0;\n  left: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));\n}\n.content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: scroll;\n}\n.blogEntry {\n  font-weight: 100;\n  color: white;\n  background: #000000a1;\n  max-width: 80%;\n  padding: 20px;\n  margin: 20px;\n}\n.blogEntry span {\n  font-size: 20px;\n  border-bottom: 1px solid white;\n  padding: 5px;\n  margin: 5px;\n  display: block;\n}\n.blog-image {\n  float: right;\n  border: 2px solid white;\n  padding: 10px;\n  margin: 10px;\n}\n.blog-image img {\n  width: 200px;\n}\n@media only screen and (max-width: 800px) {\n  .container {\n    min-height: 100vh;\n  }\n  .container:before {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbG9yaWFuL0RvY3VtZW50cy9uZy9zaGVvbmFpZC13ZWJzaXRlL3NyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0NDQ0Q7QURFRDtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7Q0NBRDtBREdEO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1RUFBQTtDQ0REO0FESUQ7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0NDRkQ7QURLRDtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0NDSEQ7QURLQztFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7Q0NISDtBRE9EO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7Q0NMRDtBRE9DO0VBQ0UsYUFBQTtDQ0xIO0FEU0Q7RUFDRTtJQUNFLGtCQUFBO0dDUEQ7RURVRDtJQUNFLGNBQUE7R0NSRDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jY29udGFpbmVyLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5ibG9nRW50cnkge1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcblxuICAmIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5ibG9nLWltYWdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuXG4gICYgaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC5jb250YWluZXI6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jY29udGFpbmVyLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xufVxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5ibG9nRW50cnkge1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5ibG9nRW50cnkgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5ibG9nLWltYWdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmJsb2ctaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuY29udGFpbmVyOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.less */ "./src/app/blog/blog.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img id=\"container-background\" src=\"assets/pictures/contact_background.jpg\" alt=\"paris background picture\">\n  <div class=\"content\">\n    <div class=\"headline\">\n      CONTACT\n    </div>\n    <div class=\"contact-form\">\n      <div class=\"name\">\n        Name: <span>Sheonaid Carlin</span>\n      </div>\n      <div class=\"address\">\n        Address:  <span>Westminster, London SW1A 0AA, UK</span>\n      </div>\n      <div class=\"phonenumber\">\n        Phonenumber: <span>+44 123 123456789</span>\n      </div>\n      <div class=\"email\">\n        E-Mail: <span>lorem@ipsum.com</span>\n      </div>\n      <div class=\"socialmedia\">\n        <div class=\"twitter\">\n          <a href=\"https://www.twitter.com/\" target=\"_blank\"><i class=\"fab fa-twitter\"></i> Twitter</a>\n        </div>\n        <div class=\"facebook\">\n          <a href=\"https://www.facebook.com/\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i> Facebook</a>\n        </div>\n        <div class=\"instagram\">\n          <a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"fab fa-instagram\"></i> Instagram</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.less":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-weight: 100;\n}\n#container-background {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n}\n.container:before {\n  content: \"\";\n  z-index: 1;\n  top: 0;\n  left: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));\n}\n.content {\n  z-index: 2;\n  max-width: 700px;\n  max-height: 500px;\n  width: 100%;\n  background: white;\n  padding: 20px;\n  box-shadow: 5px 5px 20px 0px #212121;\n}\n.headline {\n  font-size: 40px;\n  border-bottom: 1px solid black;\n  margin-bottom: 25px;\n  text-align: right;\n}\n.socialmedia {\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid black;\n  margin-top: 25px;\n  padding-top: 10px;\n}\n.socialmedia div {\n  padding-right: 10px;\n  cursor: pointer;\n}\n.socialmedia div a {\n  color: black;\n  text-decoration: none;\n  display: block;\n  padding-top: 5px;\n}\n.socialmedia div a:hover {\n  color: #e34a3b;\n}\n.name,\n.address,\n.phonenumber,\n.email {\n  font-weight: 400;\n}\n.name span,\n.address span,\n.phonenumber span,\n.email span {\n  font-weight: 100;\n  font-size: 20px;\n}\n@media only screen and (max-width: 800px) {\n  .container {\n    min-height: 100vh;\n  }\n  .container:before {\n    display: none;\n  }\n  .content {\n    max-height: unset;\n    box-shadow: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbG9yaWFuL0RvY3VtZW50cy9uZy9zaGVvbmFpZC13ZWJzaXRlL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0NDQ0Q7QURFRDtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7Q0NBRDtBREdEO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1RUFBQTtDQ0REO0FESUQ7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtDQ0ZEO0FES0Q7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtDQ0hEO0FETUQ7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7Q0NKRDtBRE1DO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtDQ0pIO0FERUM7RUFLSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7Q0NKTDtBRE1LO0VBQ0UsZUFBQTtDQ0pQO0FEV0Q7Ozs7RUFJRSxpQkFBQTtDQ1REO0FEV0M7Ozs7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0NDTkw7QURVRDtFQUNFO0lBQ0Usa0JBQUE7R0NSRDtFRFdEO0lBQ0UsY0FBQTtHQ1REO0VEWUQ7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0dDVkQ7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbiNjb250YWluZXItYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cblxuLmNvbnRlbnQge1xuICB6LWluZGV4OiAyO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICMyMTIxMjE7XG59XG5cbi5oZWFkbGluZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNvY2lhbG1lZGlhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAmIGRpdiB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZTM0YTNiO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbi5uYW1lLFxuLmFkZHJlc3MsXG4ucGhvbmVudW1iZXIsXG4uZW1haWwge1xuICBmb250LXdlaWdodDogNDAwO1xuXG4gICYgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuICAuY29udGFpbmVyOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuI2NvbnRhaW5lci1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cbi5jb250ZW50IHtcbiAgei1pbmRleDogMjtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCAjMjEyMTIxO1xufVxuLmhlYWRsaW5lIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnNvY2lhbG1lZGlhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5zb2NpYWxtZWRpYSBkaXYge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc29jaWFsbWVkaWEgZGl2IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uc29jaWFsbWVkaWEgZGl2IGE6aG92ZXIge1xuICBjb2xvcjogI2UzNGEzYjtcbn1cbi5uYW1lLFxuLmFkZHJlc3MsXG4ucGhvbmVudW1iZXIsXG4uZW1haWwge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm5hbWUgc3Bhbixcbi5hZGRyZXNzIHNwYW4sXG4ucGhvbmVudW1iZXIgc3Bhbixcbi5lbWFpbCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuY29udGFpbmVyOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogdW5zZXQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.less */ "./src/app/contact/contact.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/edinburgh/edinburgh.component.html":
/*!****************************************************!*\
  !*** ./src/app/edinburgh/edinburgh.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img id=\"container-background\" src=\"assets/pictures/edinburgh_background.jpg\" alt=\"paris background picture\">\n  <div class=\"content\">\n    <div class=\"headline\">\n      EDINBURGH\n    </div>\n    <div class=\"text\">\n      <div class=\"article\">\n        <span class=\"sub-headline\">LOREM IPSUM</span>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edinburgh/edinburgh.component.less":
/*!****************************************************!*\
  !*** ./src/app/edinburgh/edinburgh.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  font-family: 'Playfair Display', serif;\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%;\n  font-weight: 100;\n}\n#container-background {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n}\n.container:before {\n  content: \"\";\n  z-index: 1;\n  top: 0;\n  left: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));\n}\n.content {\n  z-index: 2;\n  max-width: 700px;\n  max-height: 500px;\n  width: 100%;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);\n  padding: 20px;\n}\n.headline {\n  font-size: 40px;\n  border-bottom: 1px solid black;\n  margin-bottom: 25px;\n  text-align: right;\n}\n.sub-headline {\n  font-size: 20px;\n  display: block;\n  padding-bottom: 7px;\n}\n.text {\n  font-family: 'Cormorant', serif;\n  display: flex;\n}\n.article {\n  font-size: 15px;\n  padding-left: 20px;\n  text-align: justify;\n}\n@media only screen and (max-width: 800px) {\n  .container {\n    min-height: 100vh;\n  }\n  .article {\n    padding: 0;\n  }\n  .content {\n    max-height: unset;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbG9yaWFuL0RvY3VtZW50cy9uZy9zaGVvbmFpZC13ZWJzaXRlL3NyYy9hcHAvZWRpbmJ1cmdoL2VkaW5idXJnaC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvZWRpbmJ1cmdoL2VkaW5idXJnaC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtDQ0NEO0FERUQ7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0NDQUQ7QURHRDtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUVBQUE7Q0NERDtBRElEO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUVBQUE7RUFDQSxjQUFBO0NDRkQ7QURLRDtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0NDSEQ7QURNRDtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0NDSkQ7QURPRDtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtDQ0xEO0FEUUQ7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7Q0NORDtBRFNEO0VBQ0U7SUFDRSxrQkFBQTtHQ1BEO0VEVUQ7SUFDRSxXQUFBO0dDUkQ7RURXRDtJQUNFLGtCQUFBO0dDVEQ7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2VkaW5idXJnaC9lZGluYnVyZ2guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4jY29udGFpbmVyLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG59XG5cbi5jb250ZW50IHtcbiAgei1pbmRleDogMjtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkpOztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmhlYWRsaW5lIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc3ViLWhlYWRsaW5lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cblxuLnRleHQge1xuICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCcsIHNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYXJ0aWNsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLmFydGljbGUge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogdW5zZXQ7XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4jY29udGFpbmVyLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xufVxuLmNvbnRlbnQge1xuICB6LWluZGV4OiAyO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgI2ZmZmZmZik7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uaGVhZGxpbmUge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc3ViLWhlYWRsaW5lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cbi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQnLCBzZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hcnRpY2xlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5hcnRpY2xlIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/edinburgh/edinburgh.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edinburgh/edinburgh.component.ts ***!
  \**************************************************/
/*! exports provided: EdinburghComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdinburghComponent", function() { return EdinburghComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EdinburghComponent = /** @class */ (function () {
    function EdinburghComponent() {
    }
    EdinburghComponent.prototype.ngOnInit = function () {
    };
    EdinburghComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edinburgh',
            template: __webpack_require__(/*! ./edinburgh.component.html */ "./src/app/edinburgh/edinburgh.component.html"),
            styles: [__webpack_require__(/*! ./edinburgh.component.less */ "./src/app/edinburgh/edinburgh.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EdinburghComponent);
    return EdinburghComponent;
}());



/***/ }),

/***/ "./src/app/lbresearch/lbresearch.component.html":
/*!******************************************************!*\
  !*** ./src/app/lbresearch/lbresearch.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img id=\"container-background\" src=\"assets/pictures/books_background.jpg\" alt=\"background\">\n  <div class=\"content\">\n    <div class=\"headline\">\n      LB RESEARCH\n    </div>\n    <div class=\"text\">\n      <div class=\"article\">\n        <span class=\"sub-headline\">{{displayed_headline}}</span>\n        <div class=\"sub-text\">\n        <img class=\"sub-pic\" src=\"{{displayed_picture}}\" alt=\"\">\n          {{displayed_text}}\n          <a href=\"https://globalcompetitionreview.com/article/1178395/eu-accuses-four-banks-in-bond-trading-probe\" target=\"_blank\" class=\"link\">Read more!</a>\n        </div>\n        <span class=\"sub-date\">{{displayed_author_date}}</span>\n      </div>\n      <div class=\"list\">\n        <div class=\"list-headline\">\n          More Articles:\n        </div>\n        <div (click)=\"articleClicked('first')\" class=\"read-more-headline\">\n          Lorem Ipsum\n        </div>\n        <div (click)=\"articleClicked('second')\" class=\"read-more-headline\">\n          Consectetur adipisicing elit\n        </div>\n        <div (click)=\"articleClicked('third')\" class=\"read-more-headline\">\n          Sed do eiusmod\n        </div>\n        <div (click)=\"articleClicked('fourth')\" class=\"read-more-headline\">\n          Dolor sit amet\n        </div>\n        <div (click)=\"articleClicked('fifth')\" class=\"read-more-headline\">\n          Incididunt ut labore et dolore\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/lbresearch/lbresearch.component.less":
/*!******************************************************!*\
  !*** ./src/app/lbresearch/lbresearch.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-weight: 100;\n}\n#container-background {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n}\n.container:before {\n  content: \"\";\n  z-index: 1;\n  top: 0;\n  left: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));\n}\n.content {\n  z-index: 2;\n  max-width: 80%;\n  max-height: 100%;\n  min-height: 65%;\n  width: 100%;\n  background: white;\n  padding: 20px;\n  box-shadow: 5px 5px 20px 0px #212121;\n}\n.headline {\n  font-size: 40px;\n  border-bottom: 1px solid black;\n  margin-bottom: 25px;\n  text-align: right;\n}\n.sub-headline {\n  font-family: 'Cormorant', serif;\n  font-size: 25px;\n  display: block;\n  padding-bottom: 7px;\n  font-weight: 600;\n}\n.text {\n  display: flex;\n}\n.sub-text {\n  font-family: 'Cormorant', serif;\n}\n.sub-date {\n  font-size: 12px;\n  font-weight: 600;\n  color: #595959;\n  font-style: italic;\n}\n.sub-pic {\n  float: right;\n  width: 300px;\n  margin: 10px;\n  border: 2px solid black;\n}\n.article {\n  padding-left: 20px;\n  text-align: justify;\n}\n.link {\n  text-decoration: none;\n  color: #e34a3b;\n}\n.link:hover {\n  font-weight: 400;\n  text-decoration: underline;\n}\n.list {\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  margin-left: 25px;\n  min-width: 100px;\n  border-right: 0;\n  border-bottom: 0;\n}\n.list-headline {\n  font-size: 20px;\n  font-weight: 100;\n  padding-bottom: 10px;\n}\n.read-more-link {\n  display: none;\n}\n.read-more-headline {\n  font-family: 'Cormorant', serif;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n.read-more-headline:hover {\n  color: #e34a3b;\n}\n#active {\n  color: #e34a3b;\n  text-decoration: underline;\n}\n@media only screen and (max-width: 800px) {\n  .content {\n    min-width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    padding: 0;\n    box-shadow: none;\n  }\n  .headline {\n    font-size: 25px;\n    padding-left: 20px;\n    max-width: 170px;\n    text-align: left;\n    padding-top: 15px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .text {\n    flex-direction: column;\n  }\n  .list {\n    margin: 15px;\n  }\n  .sub-text {\n    padding-right: 20px;\n  }\n  .sub-pic {\n    width: 100%;\n    margin: 0;\n    margin-bottom: 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbG9yaWFuL0RvY3VtZW50cy9uZy9zaGVvbmFpZC13ZWJzaXRlL3NyYy9hcHAvbGJyZXNlYXJjaC9sYnJlc2VhcmNoLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYnJlc2VhcmNoL2xicmVzZWFyY2guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0NDQ0Q7QURFRDtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7Q0NBRDtBREdEO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1RUFBQTtDQ0REO0FESUQ7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7Q0NGRDtBREtEO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7Q0NIRDtBRE1EO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0NDSkQ7QURPRDtFQUNFLGNBQUE7Q0NMRDtBRFFEO0VBQ0ksZ0NBQUE7Q0NOSDtBRFNEO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtDQ1BIO0FEVUQ7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtDQ1JIO0FEV0Q7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0NDVEQ7QURZRDtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtDQ1ZEO0FEWUM7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0NDVkg7QURjRDtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0NDWkg7QURlRDtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtDQ2JIO0FEZ0JEO0VBQ0UsY0FBQTtDQ2REO0FEaUJEO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0NDZkg7QURpQkc7RUFDRSxlQUFBO0NDZkw7QURtQkQ7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7Q0NqQkQ7QURvQkQ7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0dDbEJEO0VEcUJEO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtHQ25CRDtDQUNGO0FEc0JEO0VBQ0U7SUFDRSx1QkFBQTtHQ3BCRDtFRHNCRDtJQUVFLGFBQUE7R0NyQkQ7RUR1QkQ7SUFDRSxvQkFBQTtHQ3JCRDtFRHVCRDtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7R0NyQkQ7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2xicmVzZWFyY2gvbGJyZXNlYXJjaC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbiNjb250YWluZXItYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cblxuLmNvbnRlbnQge1xuICB6LWluZGV4OiAyO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNjUlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAwcHggIzIxMjEyMTtcbn1cblxuLmhlYWRsaW5lIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc3ViLWhlYWRsaW5lIHtcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQnLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3ViLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50Jywgc2VyaWY7XG59XG5cbi5zdWItZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM1OTU5NTk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc3ViLXBpYyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5hcnRpY2xlIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNlMzRhM2I7XG5cbiAgJjpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4ubGlzdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLmxpc3QtaGVhZGxpbmUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucmVhZC1tb3JlLWxpbmsge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmVhZC1tb3JlLWhlYWRsaW5lIHtcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCcsIHNlcmlmO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNlMzRhM2I7XG4gICAgfVxufVxuXG4jYWN0aXZlIHtcbiAgY29sb3I6ICNlMzRhM2I7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIC5oZWFkbGluZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAudGV4dCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubGlzdCB7XG5cbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbiAgLnN1Yi10ZXh0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5zdWItcGljIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbiNjb250YWluZXItYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG59XG4uY29udGVudCB7XG4gIHotaW5kZXg6IDI7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiA2NSU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCAjMjEyMTIxO1xufVxuLmhlYWRsaW5lIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnN1Yi1oZWFkbGluZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50Jywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc3ViLXRleHQge1xuICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCcsIHNlcmlmO1xufVxuLnN1Yi1kYXRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnN1Yi1waWMge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cbi5hcnRpY2xlIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZTM0YTNiO1xufVxuLmxpbms6aG92ZXIge1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5saXN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4ubGlzdC1oZWFkbGluZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ucmVhZC1tb3JlLWxpbmsge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJlYWQtbW9yZS1oZWFkbGluZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50Jywgc2VyaWY7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVhZC1tb3JlLWhlYWRsaW5lOmhvdmVyIHtcbiAgY29sb3I6ICNlMzRhM2I7XG59XG4jYWN0aXZlIHtcbiAgY29sb3I6ICNlMzRhM2I7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGVudCB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLmhlYWRsaW5lIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1heC13aWR0aDogMTcwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAudGV4dCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubGlzdCB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIC5zdWItdGV4dCB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuICAuc3ViLXBpYyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/lbresearch/lbresearch.component.ts":
/*!****************************************************!*\
  !*** ./src/app/lbresearch/lbresearch.component.ts ***!
  \****************************************************/
/*! exports provided: LbresearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LbresearchComponent", function() { return LbresearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LbresearchComponent = /** @class */ (function () {
    function LbresearchComponent() {
        this.article_headline_1 = "LOREM IPSUM";
        this.article_text_1 = "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci...";
        this.article_picture_1 = "assets/pictures/lbresearch_article2.jpg";
        this.article_author_date_1 = "Sheonaid Carlin - 15.11.2018";
        this.article_headline_2 = "ROMEO AND JULIET";
        this.article_text_2 = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventured piteous overthrows Do with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which, but their children's end, nought could remove, Is now the two hours' traffic of our stage; The which if you with patient ears attend, What here shall miss, our toil shall strive to mend...";
        this.article_picture_2 = "assets/pictures/lbresearch_article4.jpg";
        this.article_author_date_2 = "William Shakespeare - 26.04.1564";
        this.article_headline_3 = "A TALE OF TWO CITIES";
        this.article_text_3 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way - in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
        this.article_picture_3 = "assets/pictures/lbresearch_article3.jpg";
        this.article_author_date_3 = "Charles Dickens - 07.02.1812";
        this.article_headline_4 = "IT";
        this.article_text_4 = "The terror, which would not end for another twenty-eight years - if it ever did end - began, so far as I know or can tell, with a boat made from a sheet of newspaper floating down a gutter swollen with rain...";
        this.article_picture_4 = "assets/pictures/lbresearch_article1.jpg";
        this.article_author_date_4 = "Stephen King - 21.09.1974";
        this.article_headline_5 = "HARRY POTTER";
        this.article_text_5 = "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense. Mr. Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man with hardly any neck, although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere...";
        this.article_picture_5 = "assets/pictures/lbresearch_article5.jpg";
        this.article_author_date_5 = "Joanne K. Rowling - 31.06.1965";
    }
    LbresearchComponent.prototype.ngOnInit = function () {
        this.displayed_text = this.article_text_1;
        this.displayed_picture = this.article_picture_1;
        this.displayed_author_date = this.article_author_date_1;
        this.displayed_headline = this.article_headline_1;
    };
    LbresearchComponent.prototype.articleClicked = function (article) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        switch (article) {
            case "first":
                this.displayed_text = this.article_text_1;
                this.displayed_picture = this.article_picture_1;
                this.displayed_author_date = this.article_author_date_1;
                this.displayed_headline = this.article_headline_1;
                break;
            case "second":
                this.displayed_text = this.article_text_2;
                this.displayed_picture = this.article_picture_2;
                this.displayed_author_date = this.article_author_date_2;
                this.displayed_headline = this.article_headline_2;
                break;
            case "third":
                this.displayed_text = this.article_text_3;
                this.displayed_picture = this.article_picture_3;
                this.displayed_author_date = this.article_author_date_3;
                this.displayed_headline = this.article_headline_3;
                break;
            case "fourth":
                this.displayed_text = this.article_text_4;
                this.displayed_picture = this.article_picture_4;
                this.displayed_author_date = this.article_author_date_4;
                this.displayed_headline = this.article_headline_4;
                break;
            case "fifth":
                this.displayed_text = this.article_text_5;
                this.displayed_picture = this.article_picture_5;
                this.displayed_author_date = this.article_author_date_5;
                this.displayed_headline = this.article_headline_5;
                break;
            default:
                this.displayed_text = this.article_text_1;
                this.displayed_picture = this.article_picture_1;
                this.displayed_author_date = this.article_author_date_1;
                this.displayed_headline = this.article_headline_1;
        }
    };
    LbresearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lbresearch',
            template: __webpack_require__(/*! ./lbresearch.component.html */ "./src/app/lbresearch/lbresearch.component.html"),
            styles: [__webpack_require__(/*! ./lbresearch.component.less */ "./src/app/lbresearch/lbresearch.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LbresearchComponent);
    return LbresearchComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n    <div class=\"logo-name\">\n      <div class=\"firstname\">\n        Sheonaid\n      </div>\n      <div class=\"secondname\">\n        Carlin\n      </div>\n      <div (click)=\"toggleMenu()\" class=\"menu\">\n        Menu\n      </div>\n    </div>\n    <div [ngClass]=\"{ 'closedMenu': !isMenuOpen }\" class=\"nav-list\">\n      <div class=\"portfolio\">\n        <div class=\"portfolio-entry\" (click)=\"navigationClicked('lbresearch')\">\n          <span [ngClass]=\"{ 'active': lbresearchIsOpen }\" class=\"portfolio-title\">Law Business Research</span>\n          <div [@openClose]=\"lbresearchIsOpen ? 'open' : 'closed'\" class=\"info\">\n            <span>01.10.2018 - Today</span>\n            <span>JOURNALIST</span>\n            <span>RESEARCHER</span>\n            <span>EDITOR</span>\n          </div>\n        </div>\n        <div class=\"portfolio-entry\" (click)=\"navigationClicked('edinburgh')\">\n          <span [ngClass]=\"{ 'active': edinburghIsOpen }\" class=\"portfolio-title\">Edinburgh</span>\n          <div [@openClose]=\"edinburghIsOpen ? 'open' : 'closed'\" class=\"info\">\n            <span>01.10.2015 - 01.08.2018</span>\n            <span>Master Student</span>\n            <span>France / English</span>\n          </div>\n        </div>\n        <div class=\"portfolio-entry\" (click)=\"navigationClicked('paris')\">\n          <span [ngClass]=\"{ 'active': parisIsOpen }\" class=\"portfolio-title\">Paris</span>\n          <div [@openClose]=\"parisIsOpen ? 'open' : 'closed'\" class=\"info\">\n            <span>01.01.2017 - 01.01.2018</span>\n            <span>Year Abroad</span>\n            <span>Exchange Student</span>\n          </div>\n        </div>\n        <div class=\"portfolio-entry\" (click)=\"navigationClicked('blog')\">\n          <span [ngClass]=\"{ 'active': blogIsOpen }\" class=\"portfolio-title\">Blog</span>\n          <div [@openClose]=\"blogIsOpen ? 'open' : 'closed'\" class=\"info\">\n            <span>01.01.2019 - Today</span>\n            <span>Self-Published Content</span>\n          </div>\n        </div>\n        <div [ngClass]=\"{ 'active': contactIsOpen }\" class=\"portfolio-entry\" (click)=\"navigationClicked('contact')\">\n          <span class=\"portfolio-title\">Contact Me</span>\n        </div>\n      </div>\n      <div class=\"tos\">\n        <div class=\"twitter\">\n          <a href=\"https://www.twitter.com/\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n        </div>\n        <div class=\"facebook\">\n          <a href=\"https://www.facebook.com/\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a>\n        </div>\n        <div class=\"instagram\">\n          <a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a>\n        </div>\n        <div class=\"impressum\">\n          Impressum\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.less":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.logo-name {\n  width: 100%;\n  text-align: right;\n  font-weight: 100;\n  font-size: 2rem;\n  border-bottom: 1px solid black;\n}\n.portfolio {\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n  height: 100%;\n  justify-content: center;\n}\n.portfolio .portfolio-entry {\n  height: 100%;\n}\n.portfolio .portfolio-entry .portfolio-title {\n  cursor: pointer;\n  font-weight: 100;\n  font-size: 18px;\n  padding-top: 25px;\n  display: block;\n}\n.portfolio .portfolio-entry .info {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  cursor: pointer;\n}\n.portfolio .portfolio-entry .info span {\n  display: block;\n  font-size: 14px;\n  font-weight: 100;\n}\n.portfolio .portfolio-entry:hover .portfolio-title {\n  text-decoration: underline;\n  color: #e34a3b;\n}\n.tos {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.tos div {\n  cursor: pointer;\n  font-weight: 100;\n  padding-left: 25px;\n}\n.tos div:hover {\n  color: #e34a3b;\n}\n.tos div a {\n  color: black;\n}\n.tos div a:hover {\n  color: #e34a3b;\n}\n.active {\n  color: #e34a3b;\n}\n.nav-list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.menu {\n  display: none;\n  position: absolute;\n  top: 62px;\n  left: 20px;\n  font-size: 1.5rem;\n  color: #e34a3b;\n  cursor: pointer;\n}\n@media only screen and (max-width: 800px) {\n  .closedMenu {\n    display: none;\n  }\n  .menu {\n    display: block;\n  }\n  .logo-name {\n    font-size: 2.5rem;\n  }\n  .portfolio {\n    text-align: center;\n  }\n  .portfolio .portfolio-entry .portfolio-title {\n    font-size: 25px;\n  }\n  .tos {\n    margin-top: 50px;\n    justify-content: center;\n  }\n  .info {\n    right: 0 !important;\n    opacity: 1 !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbG9yaWFuL0RvY3VtZW50cy9uZy9zaGVvbmFpZC13ZWJzaXRlL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0NDQ0Q7QURFRDtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtDQ0FEO0FER0Q7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtDQ0REO0FESkQ7RUFRSSxhQUFBO0NDREg7QURQRDtFQVdNLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtDQ0RMO0FESUc7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtDQ0ZMO0FESUs7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtDQ0ZQO0FETUs7RUFDSSwyQkFBQTtFQUNBLGVBQUE7Q0NKVDtBRFVEO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7Q0NSRDtBREtEO0VBS00sZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0NDUEw7QURTSztFQUNJLGVBQUE7Q0NQVDtBREhEO0VBY1EsYUFBQTtDQ1JQO0FEVU87RUFDSSxlQUFBO0NDUlg7QURlRDtFQUNFLGVBQUE7Q0NiRDtBRGdCRDtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtDQ2REO0FEaUJEO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtDQ2ZIO0FEa0JEO0VBRUU7SUFDRSxjQUFBO0dDakJEO0VEb0JEO0lBQ0UsZUFBQTtHQ2xCRDtFRHFCRDtJQUNFLGtCQUFBO0dDbkJEO0VEc0JEO0lBQ0UsbUJBQUE7R0NwQkQ7RURzQkc7SUFDRSxnQkFBQTtHQ3BCTDtFRHlCRDtJQUNFLGlCQUFBO0lBQ0Esd0JBQUE7R0N2QkQ7RUQwQkQ7SUFDRSxvQkFBQTtJQUNBLHNCQUFBO0dDeEJEO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ28tbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wb3J0Zm9saW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAucG9ydGZvbGlvLWVudHJ5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAucG9ydGZvbGlvLXRpdGxlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYgLmluZm8ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICYgLnBvcnRmb2xpby10aXRsZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgY29sb3I6ICNlMzRhM2I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50b3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpdiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2UzNGEzYjtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZTM0YTNiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogI2UzNGEzYjtcbn1cblxuLm5hdi1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYycHg7XG4gICAgbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogI2UzNGEzYjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcblxuICAuY2xvc2VkTWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5sb2dvLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG5cbiAgLnBvcnRmb2xpbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5wb3J0Zm9saW8tZW50cnkge1xuICAgICAgJiAucG9ydGZvbGlvLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50b3Mge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuaW5mbyB7XG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIi5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxvZ28tbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG4ucG9ydGZvbGlvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8tZW50cnkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8tZW50cnkgLnBvcnRmb2xpby10aXRsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8tZW50cnkgLmluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1lbnRyeSAuaW5mbyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1lbnRyeTpob3ZlciAucG9ydGZvbGlvLXRpdGxlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjZTM0YTNiO1xufVxuLnRvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9zIGRpdiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuLnRvcyBkaXY6aG92ZXIge1xuICBjb2xvcjogI2UzNGEzYjtcbn1cbi50b3MgZGl2IGEge1xuICBjb2xvcjogYmxhY2s7XG59XG4udG9zIGRpdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNlMzRhM2I7XG59XG4uYWN0aXZlIHtcbiAgY29sb3I6ICNlMzRhM2I7XG59XG4ubmF2LWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYycHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2UzNGEzYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY2xvc2VkTWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmxvZ28tbmFtZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLnBvcnRmb2xpbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wb3J0Zm9saW8gLnBvcnRmb2xpby1lbnRyeSAucG9ydGZvbGlvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgLnRvcyB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuaW5mbyB7XG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.lbresearchIsOpen = true;
        this.edinburghIsOpen = false;
        this.parisIsOpen = false;
        this.blogIsOpen = false;
        this.contactIsOpen = false;
        this.isMenuOpen = false;
        this.navigated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.menuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.isMenuOpen = this.menuStatus;
        this.menuToggled.emit(this.isMenuOpen);
    };
    NavigationComponent.prototype.toggleMenu = function () {
        this.isMenuOpen = !this.isMenuOpen;
        this.menuToggled.emit(this.isMenuOpen);
    };
    NavigationComponent.prototype.navigationClicked = function (entry) {
        this.isMenuOpen = false;
        this.navigated.emit(entry);
        this.menuToggled.emit(this.isMenuOpen);
        switch (entry) {
            case "lbresearch":
                this.lbresearchIsOpen = true;
                this.edinburghIsOpen = false;
                this.parisIsOpen = false;
                this.blogIsOpen = false;
                this.contactIsOpen = false;
                break;
            case "edinburgh":
                this.lbresearchIsOpen = false;
                this.edinburghIsOpen = true;
                this.parisIsOpen = false;
                this.blogIsOpen = false;
                this.contactIsOpen = false;
                break;
            case "paris":
                this.lbresearchIsOpen = false;
                this.edinburghIsOpen = false;
                this.parisIsOpen = true;
                this.blogIsOpen = false;
                this.contactIsOpen = false;
                break;
            case "blog":
                this.lbresearchIsOpen = false;
                this.edinburghIsOpen = false;
                this.parisIsOpen = false;
                this.blogIsOpen = true;
                this.contactIsOpen = false;
                break;
            case "contact":
                this.lbresearchIsOpen = false;
                this.edinburghIsOpen = false;
                this.parisIsOpen = false;
                this.blogIsOpen = false;
                this.contactIsOpen = true;
                break;
            default:
                this.lbresearchIsOpen = true;
                this.edinburghIsOpen = false;
                this.parisIsOpen = false;
                this.blogIsOpen = false;
                this.contactIsOpen = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "navigated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "menuToggled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NavigationComponent.prototype, "menuStatus", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        right: '0',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        right: '200px',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')
                    ]),
                ]),
            ],
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.less */ "./src/app/navigation/navigation.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/paris/paris.component.html":
/*!********************************************!*\
  !*** ./src/app/paris/paris.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img id=\"container-background\" src=\"assets/pictures/paris_background.jpg\" alt=\"paris background picture\">\n  <div class=\"content\">\n    <div class=\"headline\">\n      PARIS\n    </div>\n    <div class=\"text\">\n      <div class=\"article\">\n        <span class=\"sub-headline\">LOREM IPSUM</span>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paris/paris.component.less":
/*!********************************************!*\
  !*** ./src/app/paris/paris.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  font-family: 'Playfair Display', serif;\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%;\n  font-weight: 100;\n}\n#container-background {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n.container:before {\n  content: \"\";\n  z-index: 1;\n  top: 0;\n  left: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));\n}\n.content {\n  z-index: 2;\n  max-width: 700px;\n  max-height: 500px;\n  width: 100%;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);\n  padding: 20px;\n}\n.headline {\n  font-size: 40px;\n  border-bottom: 1px solid black;\n  margin-bottom: 25px;\n  text-align: right;\n}\n.sub-headline {\n  font-size: 20px;\n  display: block;\n  padding-bottom: 7px;\n}\n.text {\n  font-family: 'Cormorant', serif;\n  display: flex;\n}\n.article {\n  font-size: 15px;\n  padding-left: 20px;\n  text-align: justify;\n}\n@media only screen and (max-width: 800px) {\n  .container {\n    min-height: 100vh;\n  }\n  .article {\n    padding: 0;\n  }\n  .content {\n    max-height: unset;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbG9yaWFuL0RvY3VtZW50cy9uZy9zaGVvbmFpZC13ZWJzaXRlL3NyYy9hcHAvcGFyaXMvcGFyaXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhcmlzL3BhcmlzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0NDQ0Q7QURFRDtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0NDQUQ7QURHRDtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUVBQUE7Q0NERDtBRElEO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUVBQUE7RUFDQSxjQUFBO0NDRkQ7QURLRDtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0NDSEQ7QURNRDtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0NDSkQ7QURPRDtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtDQ0xEO0FEUUQ7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7Q0NORDtBRFNEO0VBQ0U7SUFDRSxrQkFBQTtHQ1BEO0VEVUQ7SUFDRSxXQUFBO0dDUkQ7RURXRDtJQUNFLGtCQUFBO0dDVEQ7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL3BhcmlzL3BhcmlzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuI2NvbnRhaW5lci1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG5cbi5jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG59XG5cbi5jb250ZW50IHtcbiAgei1pbmRleDogMjtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaGVhZGxpbmUge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zdWItaGVhZGxpbmUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50Jywgc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hcnRpY2xlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuICAuYXJ0aWNsZSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbiNjb250YWluZXItYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLmNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cbi5jb250ZW50IHtcbiAgei1pbmRleDogMjtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksICNmZmZmZmYpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmhlYWRsaW5lIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnN1Yi1oZWFkbGluZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG4udGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50Jywgc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYXJ0aWNsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuYXJ0aWNsZSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogdW5zZXQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/paris/paris.component.ts":
/*!******************************************!*\
  !*** ./src/app/paris/paris.component.ts ***!
  \******************************************/
/*! exports provided: ParisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParisComponent", function() { return ParisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParisComponent = /** @class */ (function () {
    function ParisComponent() {
    }
    ParisComponent.prototype.ngOnInit = function () {
    };
    ParisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paris',
            template: __webpack_require__(/*! ./paris.component.html */ "./src/app/paris/paris.component.html"),
            styles: [__webpack_require__(/*! ./paris.component.less */ "./src/app/paris/paris.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParisComponent);
    return ParisComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/florian/Documents/ng/sheonaid-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map