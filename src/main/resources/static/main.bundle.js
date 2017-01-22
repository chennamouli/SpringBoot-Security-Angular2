webpackJsonp([0,3],{

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeroService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.uri = '/heroes';
    }
    HeroService.prototype.getHeroes = function () {
        console.log('Inside getHeroes ...');
        return this.http.get(this.uri + "/list")
            .toPromise()
            .then(function (response) {
            console.log('in getHeroes then: ' + JSON.stringify(response.json(), null, 4));
            return response.json();
        })
            .catch(this.handleError);
    };
    HeroService.prototype.addHero = function (name) {
        console.log('Inside addHero: ' + name);
        return this.http.get(this.uri + "/add/" + name)
            .toPromise()
            .then(function (response) {
            console.log('in addHero then: ' + JSON.stringify(response.json(), null, 4));
            return response.json();
        })
            .catch(this.handleError);
    };
    HeroService.prototype.viewHero = function (id) {
        console.log('Inside viewHero: ' + id);
        return this.http.get(this.uri + "/view/" + id)
            .toPromise()
            .then(function (response) {
            if (response && response.json()) {
                console.log('in viewHero then: ' + JSON.stringify(response.json(), null, 4));
                return response.json();
            }
            else {
                return {};
            }
        })
            .catch(this.handleError);
    };
    HeroService.prototype.deleteHero = function (id) {
        console.log('Inside deleteHero: ' + id);
        return this.http.get(this.uri + "/delete/" + id)
            .toPromise()
            .then(function (response) {
            console.log('in viewHero then: ' + JSON.stringify(response.json(), null, 4));
            return response.json();
        })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred in HeroService: ', error);
        return Promise.reject(error.message || error);
    };
    HeroService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], HeroService);
    return HeroService;
    var _a;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/hero.service.js.map

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.componentName = 'DashboardComponent';
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'dashboard-component',
            template: __webpack_require__(741),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/dashboard.component.js.map

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_hero_service__ = __webpack_require__(243);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeroAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroAddComponent = (function () {
    function HeroAddComponent(heroService) {
        this.heroService = heroService;
    }
    HeroAddComponent.prototype.ngOnInit = function () { };
    HeroAddComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            this.messageType = 'danger';
            this.message = 'Please enter valid hero name';
            return;
        }
        this.heroService.addHero(name)
            .then(function (resp) {
            _this.message = resp['message'] + ' the user "' + name + '"';
            if (resp['status'] == true) {
                _this.messageType = 'success';
            }
            else {
                _this.messageType = 'danger';
            }
            console.log('Is hero added: ' + JSON.stringify(resp));
        });
    };
    HeroAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'add-hero-component',
            template: __webpack_require__(742),
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_hero_service__["a" /* HeroService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_hero_service__["a" /* HeroService */]) === 'function' && _a) || Object])
    ], HeroAddComponent);
    return HeroAddComponent;
    var _a;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/hero-add.component.js.map

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_hero_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeroViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeroViewComponent = (function () {
    function HeroViewComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Inside hero-view component');
        this.route.params
            .switchMap(function (params) { return _this.heroService.viewHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'hero-view-component',
            template: __webpack_require__(743),
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_hero_service__["a" /* HeroService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_hero_service__["a" /* HeroService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === 'function' && _c) || Object])
    ], HeroViewComponent);
    return HeroViewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/hero-view.component.js.map

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_hero_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(375);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroComponent = (function () {
    function HeroComponent(heroService, modalService, router) {
        this.heroService = heroService;
        this.modalService = modalService;
        this.router = router;
    }
    HeroComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Inside HeroComponent ngOnInit...');
        this.heroService
            .getHeroes()
            .then(function (heroes) {
            console.log('inside HeroComponent then...' + heroes);
            _this.heroes = heroes;
        });
        console.log('Heroes: ' + this.heroes);
    };
    HeroComponent.prototype.viewHero = function (hero) {
        console.log('Selected Hero: ' + hero.name);
        this.selectedHero = hero;
        this.router.navigate(['/view/', hero.id]);
    };
    HeroComponent.prototype.deleteHero = function (content, hero) {
        var _this = this;
        console.log('Deleting Hero: ' + hero.name);
        console.log('Deletign content: ' + content);
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    HeroComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HeroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'hero-component',
            template: __webpack_require__(744),
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_hero_service__["a" /* HeroService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_hero_service__["a" /* HeroService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], HeroComponent);
    return HeroComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/hero.component.js.map

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () { console.log('Inside HomeComponent'); };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'home-component',
            template: __webpack_require__(745),
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/home.component.js.map

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: __webpack_require__(747)
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/page-not-found.component.js.map

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = '/heroes/auth';
    }
    AuthService.prototype.getAuthDetails = function () {
        console.log('Inside getAuthDetails ...');
        return this.http.get(this.authUrl)
            .toPromise()
            .then(function (response) {
            console.log('in auth service then: ' + JSON.stringify(response.json(), null, 4));
            return response.json();
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred in AuthService: ', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/auth.service.js.map

/***/ },

/***/ 460:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 460;


/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(581);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/main.js.map

/***/ },

/***/ 579:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_home_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_hero_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_dashboard_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_hero_add_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_hero_view_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_page_not_found_component__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__component_home_component__["a" /* HomeComponent */] },
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_3__component_hero_component__["a" /* HeroComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__component_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_5__component_hero_add_component__["a" /* HeroAddComponent */] },
    { path: 'view/:id', component: __WEBPACK_IMPORTED_MODULE_6__component_hero_view_component__["a" /* HeroViewComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__component_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/app-routing.module.js.map

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(740),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/app.component.js.map

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_home_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_hero_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_dashboard_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_hero_add_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_hero_view_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_nav_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_page_not_found_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__ = __webpack_require__(375);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__component_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__component_hero_component__["a" /* HeroComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_8__component_hero_add_component__["a" /* HeroAddComponent */], __WEBPACK_IMPORTED_MODULE_9__component_hero_view_component__["a" /* HeroViewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_11__component_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/app.module.js.map

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interface_authorization__ = __webpack_require__(583);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = (function () {
    function NavComponent(authService) {
        this.authService = authService;
        this.isCollapsed = false; //for sr-only menu
        this.authorization = new __WEBPACK_IMPORTED_MODULE_2__interface_authorization__["a" /* Authorization */]();
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Inside NavComponent ngOnInit...');
        this.authService
            .getAuthDetails()
            .then(function (auth) {
            console.log('inside auth then...' + auth);
            _this.authorization = auth;
        });
        console.log('Authorization: ' + this.authorization);
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'nav-component',
            template: __webpack_require__(746),
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavComponent);
    return NavComponent;
    var _a;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/nav.component.js.map

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Authorization; });
var Authorization = (function () {
    function Authorization() {
    }
    return Authorization;
}());
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/authorization.js.map

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/environment.js.map

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/workspaces/GitHubRepository/SpringBoot-Security-Angular2/src/main/resources/angularjs/src/polyfills.js.map

/***/ },

/***/ 738:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 739:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 740:
/***/ function(module, exports) {

module.exports = "<nav-component></nav-component>\r\n<div class=\"container-fluid mainContent\">\r\n  <div class=\"row content\">\r\n    <div class=\"column col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"footer\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"text-muted\">&copy;Copyright by Super Heroes, 2017</p>\r\n  </div>\r\n</footer>"

/***/ },

/***/ 741:
/***/ function(module, exports) {

module.exports = "{{componentName}}"

/***/ },

/***/ 742:
/***/ function(module, exports) {

module.exports = "<h2>Add Hero</h2>\r\n<form class=\"form-horizontal col-md-6\">\r\n  <div class=\"form-group\" *ngIf=\"messageType\">\r\n    <ngb-alert [dismissible]=\"false\" [type]='messageType'>\r\n      {{message}}\r\n    </ngb-alert>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-sm-4\" for=\"heroName\">Hero name:</label>\r\n    <div class=\"col-sm-8\">\r\n      <input class=\"form-control\" id=\"heroName\" #heroName placeholder=\"Enter hero name\" maxlength=\"25\"/>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"col-sm-offset-4 col-sm-8\">\r\n      <button class=\"btn btn-default\" (click)=\"add(heroName.value); heroName.value=''\">\r\n    Add\r\n  </button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ },

/***/ 743:
/***/ function(module, exports) {

module.exports = "<h2>Hero View</h2>\r\n<div *ngIf=\"hero\">\r\n<div class=\"col-md-2\" style=\"text-align: right\">Hero Id:</div>\r\n<div class=\"col-md-3\">{{hero.id}}</div>\r\n<br>\r\n<div class=\"col-md-2\" style=\"text-align: right\">Hero Name:</div>\r\n<div class=\"col-md-3\">{{hero.name}}</div>\r\n</div>\r\n<div *ngIf=\"!hero\">\r\n    Please select a hero\r\n</div>\r\n<br>\r\n<button class=\"btn btn-default\" (click)=\"goBack()\">Back to Heroes</button>"

/***/ },

/***/ 744:
/***/ function(module, exports) {

module.exports = "<template ngbModalContainer></template>\r\n<template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Delete Hero</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Are you sure want to delete?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</template>\r\n\r\n<table class=\"table table-hover\" *ngIf=\"heroes && heroes.length > 0\">\r\n    <thead>\r\n        <tr>\r\n            <th>Id</th>\r\n            <th>Name</th>\r\n            <th>Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let hero of heroes\">\r\n            <td>{{hero.id}}</td>\r\n            <td>{{hero.name}}</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\" (click)=\"viewHero(hero)\">\r\n                    View\r\n                </button>\r\n                <button class=\"btn btn-default\" (click)=\"deleteHero(content, hero)\">\r\n                    Delete\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },

/***/ 745:
/***/ function(module, exports) {

module.exports = "<p>Hi, Welcome to 'Heroes of the World'</p>"

/***/ },

/***/ 746:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\"\r\n        type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\" aria-controls=\"myNavbar\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    <a class=\"navbar-brand\" href=\"#\">Heroes of the World</a>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\" [ngbCollapse]=\"isCollapsed\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/home\" *ngIf=\"authorization.hasHomePage\" routerLinkActive=\"active\">Home</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/heroes\" *ngIf=\"authorization.hasHeroesPage\" routerLinkActive=\"active\">Heroes</a></li>\r\n            <li class=\"nav-item\" class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/dashboard\" *ngIf=\"authorization.hasDashboardPage\" routerLinkActive=\"active\">Dashboard</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/add\" *ngIf=\"authorization.hasHeroesPage\" routerLinkActive=\"active\">Add</a></li>\r\n            <!--<li class=\"nav-item\"><a routerLink=\"/view\" *ngIf=\"authorization.hasHeroesPage\" routerLinkActive=\"active\">View</a></li>-->\r\n        </ul>\r\n        <ul class=\"navbar-nav navbar-right\">\r\n            <!-- <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li> -->\r\n            <!-- <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li> -->\r\n            <li class=\"nav-item logout\">\r\n                <a class=\"nav-link\" href=\"/heroes/logout\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a>\r\n                <!--<form action=\"/heroes/logout\"  #loginForm=\"ngForm\" method=\"POST\">\r\n            <input type=\"submit\" value=\"Logout\" class=\"btn-link\" />\r\n          </form>-->\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ },

/***/ 747:
/***/ function(module, exports) {

module.exports = "<h2>Page not found</h2>"

/***/ },

/***/ 771:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(461);


/***/ }

},[771]);
//# sourceMappingURL=main.bundle.map