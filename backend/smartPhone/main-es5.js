function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/admin-components/add-customer/add-customer.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/admin-components/add-customer/add-customer.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AddCustomerComponent */

  /***/
  function srcAppAdminComponentsAddCustomerAddCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function () {
      return AddCustomerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _utils_components_input_error_input_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../utils-components/input-error/input-error.component */
    "./src/app/utils-components/input-error/input-error.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddCustomerComponent_mat_card_footer_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-footer", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " * Fullfill the required requests ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AddCustomerComponent =
    /*#__PURE__*/
    function () {
      function AddCustomerComponent() {
        _classCallCheck(this, AddCustomerComponent);
      }

      _createClass(AddCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCustomer",
        value: function addCustomer(form) {
          if (form.invalid) {
            this.isFormInvalid = true;
            return;
          }

          this.isFormInvalid = false;
        }
      }, {
        key: "checkPhoneNumber",
        value: function checkPhoneNumber(form, event) {
          var phone = form.controls[event.target.name];
          console.log(phone);

          if (!phone) {
            return;
          }

          var isnum = /^\d+$/.test(phone.value);
          if (!isnum) phone.setErrors(Object.assign(Object.assign({}, phone.errors), {
            phoneNumber: true
          }));
        }
      }]);

      return AddCustomerComponent;
    }();

    AddCustomerComponent.ɵfac = function AddCustomerComponent_Factory(t) {
      return new (t || AddCustomerComponent)();
    };

    AddCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddCustomerComponent,
      selectors: [["app-add-customer"]],
      decls: 45,
      vars: 11,
      consts: [[3, "submit"], ["addCustomerForm", "ngForm"], ["appearance", "fill"], ["matInput", "", "placeholder", "my name", "type", "text", "name", "firstName", "ngModel", "", "minlength", "2", "maxlength", "24", "required", ""], ["firstNameInput", "ngModel"], [3, "controller", "errors"], ["matInput", "", "placeholder", "my name", "type", "text", "name", "lastName", "ngModel", "", "minlength", "2", "maxlength", "24", "required", ""], ["lastNameInput", "ngModel"], ["matInput", "", "placeholder", "example@gmail.com", "type", "email", "name", "email", "ngModel", "", "required", "", "email", ""], ["emailInput", "ngModel"], ["matInput", "", "placeholder", "052-0000000", "type", "text", "name", "phone1", "maxlength", "24", "ngModel", "", "required", "", 3, "input"], ["phone1Input", "ngModel"], ["matInput", "", "placeholder", "052-0000000", "type", "text", "name", "phone2", "maxlength", "24", "ngModel", "", 3, "input"], ["phone2Input", "ngModel"], ["mat-raised-button", "", "color", "accent"], ["color", "red", "class", "mat-body-2", 4, "ngIf"], ["color", "red", 1, "mat-body-2"]],
      template: function AddCustomerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddCustomerComponent_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.addCustomer(_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Customer info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-input-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-input-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-input-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone Number 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AddCustomerComponent_Template_input_input_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.checkPhoneNumber(_r26, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-input-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Phone Number 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AddCustomerComponent_Template_input_input_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.checkPhoneNumber(_r26, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-input-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Add Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddCustomerComponent_mat_card_footer_44_Template, 2, 0, "mat-card-footer", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r27)("errors", _r27.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r28)("errors", _r28.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r29)("errors", _r29.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r30)("errors", _r30.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r31)("errors", _r31.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFormInvalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _utils_components_input_error_input_error_component__WEBPACK_IMPORTED_MODULE_5__["InputErrorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardFooter"]],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 2rem;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%], mat-card-footer[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin: auto;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n}\r\n\r\nmat-card-footer[_ngcontent-%COMP%] {\r\nmargin-top: 1rem;\r\ncolor: red;\r\nfont-weight: bold;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9hZGQtY3VzdG9tZXIvYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFVBQVU7QUFDVixpQkFBaUI7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25zICwgbWF0LWZvcm0tZmllbGQgLCBtYXQtY2FyZC1mb290ZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxubWF0LWNhcmQtZm9vdGVyIHtcclxubWFyZ2luLXRvcDogMXJlbTtcclxuY29sb3I6IHJlZDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-customer',
          templateUrl: './add-customer.component.html',
          styleUrls: ['./add-customer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/add-device/add-device.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin-components/add-device/add-device.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddDeviceComponent */

  /***/
  function srcAppAdminComponentsAddDeviceAddDeviceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDeviceComponent", function () {
      return AddDeviceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_repair_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/repair.service */
    "./src/app/admin-components/services/repair.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _utils_components_input_error_input_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../utils-components/input-error/input-error.component */
    "./src/app/utils-components/input-error/input-error.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AddDeviceComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comp_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", comp_r16._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comp_r16.name);
      }
    }

    function AddDeviceComponent_mat_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var md_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", md_r17._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](md_r17.model);
      }
    }

    var AddDeviceComponent =
    /*#__PURE__*/
    function () {
      function AddDeviceComponent(repairService, data) {
        _classCallCheck(this, AddDeviceComponent);

        this.repairService = repairService;
        this.data = data;
        this.viewNames = {};
      }

      _createClass(AddDeviceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCompanies();
        }
      }, {
        key: "onSelected",
        value: function onSelected(event) {
          var _this = this;

          console.log(event);
          this.viewNames[event.source.ngControl.name] = event.source.triggerValue;
          if (event.source.ngControl.name === 'company') this.repairService.getDeviceModelByCompanyID(event.value).subscribe(function (devices) {
            _this.devicesModel = devices.devices;
          });
        }
      }, {
        key: "getCompanies",
        value: function getCompanies() {
          var _this2 = this;

          this.repairService.getDeviceCompanies().subscribe(function (res) {
            console.log(res.message);
            _this2.companies = res.companies;
          });
        }
      }, {
        key: "onAddingDevice",
        value: function onAddingDevice(form) {
          if (form.invalid) return;
          var device = {
            device: form.value.device,
            notes: form.value.notes,
            price: form.value.price
          };
          this.data.callback(device, this.viewNames);
        }
      }]);

      return AddDeviceComponent;
    }();

    AddDeviceComponent.ɵfac = function AddDeviceComponent_Factory(t) {
      return new (t || AddDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_repair_service__WEBPACK_IMPORTED_MODULE_2__["RepairService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    AddDeviceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddDeviceComponent,
      selectors: [["app-add-device"]],
      decls: 38,
      vars: 8,
      consts: [[3, "submit"], ["form", "ngForm"], [1, "center"], ["appearance", "fill"], ["required", "", "ngModel", "", "name", "company", 3, "selectionChange"], ["companySelect", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "controller", "errors"], ["required", "", "ngModel", "", "name", "device", 3, "selectionChange"], ["deviceSelect", "ngModel"], ["matInput", "", "placeholder", "Add notes", "rows", "10", "ngModel", "", "name", "notes"], ["matInput", "", "placeholder", "", "type", "number", "name", "price", "ngModel", "", "required", ""], ["priceInput", "ngModel"], ["mat-raised-button", "", "color", "accent"], ["color", "red", 1, "mat-body-2"], [3, "value"]],
      template: function AddDeviceComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddDeviceComponent_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.onAddingDevice(_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New Repair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select Device Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AddDeviceComponent_Template_mat_select_selectionChange_9_listener($event) {
            return ctx.onSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddDeviceComponent_mat_option_11_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-input-error", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select Device Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AddDeviceComponent_Template_mat_select_selectionChange_17_listener($event) {
            return ctx.onSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddDeviceComponent_mat_option_19_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-input-error", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-input-error", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-footer", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " * Fullfill the required requests ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r11)("errors", _r11.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.devicesModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r13)("errors", _r13.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r15)("errors", _r15.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _utils_components_input_error_input_error_component__WEBPACK_IMPORTED_MODULE_8__["InputErrorComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardFooter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      styles: [".center[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 50%;\r\n}\r\n\r\n\r\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9hZGQtZGV2aWNlL2FkZC1kZXZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9hZGQtZGV2aWNlL2FkZC1kZXZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcblxyXG5mb3JtIGRpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddDeviceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-device',
          templateUrl: './add-device.component.html',
          styleUrls: ['./add-device.component.css']
        }]
      }], function () {
        return [{
          type: _services_repair_service__WEBPACK_IMPORTED_MODULE_2__["RepairService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/admin/admin.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin-components/admin/admin.component.ts ***!
    \***********************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminComponentsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/admin-components/services/auth.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/admin-components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(authService) {
        _classCallCheck(this, AdminComponent);

        this.authService = authService;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.autoAuthUser();
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 4,
      vars: 0,
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["main[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n  margin:auto;\r\n  padding-top: 1rem;\r\n}\r\ndiv[_ngcontent-%COMP%]{\r\n  background: url('bg-client.jpg') no-repeat;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  min-width: 100%;\r\n  min-height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDBDQUE0RDtFQUM1RCxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuZGl2e1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JnLWNsaWVudC5qcGcpIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/dashboard/charts/vertical-bars/vertical-bars.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/admin-components/dashboard/charts/vertical-bars/vertical-bars.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: VerticalBarsComponent */

  /***/
  function srcAppAdminComponentsDashboardChartsVerticalBarsVerticalBarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerticalBarsComponent", function () {
      return VerticalBarsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VerticalBarsComponent =
    /*#__PURE__*/
    function () {
      function VerticalBarsComponent() {
        _classCallCheck(this, VerticalBarsComponent);
      }

      _createClass(VerticalBarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerticalBarsComponent;
    }();

    VerticalBarsComponent.ɵfac = function VerticalBarsComponent_Factory(t) {
      return new (t || VerticalBarsComponent)();
    };

    VerticalBarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VerticalBarsComponent,
      selectors: [["app-vertical-bars"]],
      decls: 2,
      vars: 0,
      template: function VerticalBarsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vertical-bars works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvZGFzaGJvYXJkL2NoYXJ0cy92ZXJ0aWNhbC1iYXJzL3ZlcnRpY2FsLWJhcnMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalBarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vertical-bars',
          templateUrl: './vertical-bars.component.html',
          styleUrls: ['./vertical-bars.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/dashboard/customers/customers.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin-components/dashboard/customers/customers.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppAdminComponentsDashboardCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/utils-components/dialog-message/dialog-message.component */
    "./src/app/utils-components/dialog-message/dialog-message.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_utils_components_edit_customer_dialog_edit_customer_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utils-components/edit-customer-dialog/edit-customer-dialog.component */
    "./src/app/utils-components/edit-customer-dialog/edit-customer-dialog.component.ts");
    /* harmony import */


    var src_app_globalServices_customers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/globalServices/customers.service */
    "./src/app/globalServices/customers.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CustomersComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomersComponent_div_18_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0632\u0628\u0627\u0626\u0646 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomersComponent_div_18_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_div_18_tr_19_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

          var customer_r143 = ctx.$implicit;

          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r145.onDeleteCustomer(customer_r143);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u062D\u0630\u0641");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_div_18_tr_19_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

          var customer_r143 = ctx.$implicit;

          var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r147.editCustomer(customer_r143);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u062A\u0639\u062F\u064A\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r143 = ctx.$implicit;
        var i_r144 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r144 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", customer_r143.firstName, " ", customer_r143.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r143.city.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r143.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r143.numOfRequests);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r143.numOfDoneRequests);
      }
    }

    function CustomersComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0627\u0644\u0628\u0644\u062F\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0637\u0644\u0628\u0627\u062A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0637\u0644\u0628\u0627\u062A \u062A\u0645\u062A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomersComponent_div_18_div_17_Template, 3, 0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CustomersComponent_div_18_tr_19_Template, 21, 7, "tr", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r138.customers || ctx_r138.customers.length == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r138.customers);
      }
    }

    function CustomersComponent_a_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_a_29_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149);

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r148.onPage(ctx_r148.page2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r139.page2);
      }
    }

    function CustomersComponent_a_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_a_31_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r150.onPage(ctx_r150.page3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r140.page3);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "page-item disabled": a0
      };
    };

    var CustomersComponent =
    /*#__PURE__*/
    function () {
      function CustomersComponent(customerService, dialog) {
        _classCallCheck(this, CustomersComponent);

        this.customerService = customerService;
        this.dialog = dialog;
        this.page1 = 1;
        this.page2 = null;
        this.page3 = null;
        this.currentPage = 1;
        this.pageSize = 10;
        this.totalCustomers = 0;
        this.isLoading = false;
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'search': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
          });
          this.isLoading = true;
          this.customerService.getCustomers(null, this.currentPage, this.pageSize);
          this.customersSub = this.customerService.getCustomersListener().subscribe(function (res) {
            console.log(res);
            _this3.customers = res.customers;
            _this3.totalCustomers = res.totalCustomers;

            _this3.calPagesNeeded();

            _this3.page1 = _this3.currentPage;
            if (_this3.currentPage + 1 <= _this3.pagesNeeded) _this3.page2 = _this3.currentPage + 1;else _this3.page2 = null;
            if (_this3.currentPage + 2 <= _this3.pagesNeeded) _this3.page3 = _this3.currentPage + 2;else _this3.page3 = null;
            _this3.isLoading = false;
          });
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          this.isLoading = true;
          this.currentPage = this.currentPage - 1;
          this.customerService.getCustomers(this.form.value.search, this.currentPage, this.pageSize);
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.isLoading = true;
          this.currentPage = this.currentPage + 1;
          this.customerService.getCustomers(this.form.value.search, this.currentPage, this.pageSize);
        }
      }, {
        key: "calPagesNeeded",
        value: function calPagesNeeded() {
          var pages = Math.round(this.totalCustomers / this.pageSize);
          console.log(this.totalCustomers, this.pageSize, pages);
          this.pagesNeeded = pages;
        }
      }, {
        key: "onDeleteCustomer",
        value: function onDeleteCustomer(customer) {
          var _this4 = this;

          var confirm = function confirm() {
            _this4.customerService.deleteCustomer(customer);

            _this4.dialog.closeAll();
          };

          this.dialog.open(src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_1__["DialogMessageComponent"], {
            data: {
              buttons: true,
              title: 'حذف زبون',
              message: ' ?' + ' هل أنت متأكد من حذف الزبون ' + customer.firstName + ' ' + customer.lastName,
              confirm: confirm
            }
          });
        }
      }, {
        key: "onGetingCustomers",
        value: function onGetingCustomers() {
          this.isLoading = true;
          this.currentPage = 1;
          this.customerService.getCustomers(this.form.value.search, this.currentPage, this.pageSize);
        }
      }, {
        key: "editCustomer",
        value: function editCustomer(customer) {
          var dialogRef = this.dialog.open(src_app_utils_components_edit_customer_dialog_edit_customer_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EditCustomerDialogComponent"], {
            data: {
              customer: customer
            }
          });
        }
      }, {
        key: "onUpdatingCustomer",
        value: function onUpdatingCustomer(form) {
          console.log(form);
        }
      }, {
        key: "onPage",
        value: function onPage(num) {
          this.isLoading = true;
          this.currentPage = num;
          this.customerService.getCustomers(this.form.value.search, this.currentPage, this.pageSize);
        }
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.ɵfac = function CustomersComponent_Factory(t) {
      return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomersComponent,
      selectors: [["app-customers"]],
      decls: 35,
      vars: 12,
      consts: [[1, "main-container"], [1, "dash-board-header"], [1, "cards-container"], [1, "dashboard-card"], [1, "card-header"], [1, "search-box"], [3, "formGroup"], ["appearance", "fill"], ["formControlName", "search", "matInput", "", 3, "input"], [1, "btn", "btn-success", 3, "click"], ["class", "center-container", 4, "ngIf"], [4, "ngIf"], [1, "spacer"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], [3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", "active"], [1, "page-item"], ["class", "page-link", 3, "click", 4, "ngIf"], [1, "page-item", 3, "ngClass"], [1, "center-container"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "action-buttons"], [1, "btn", "btn-danger", 3, "click"]],
      template: function CustomersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0644\u0632\u0628\u0627\u0626\u0646");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0632\u0628\u0627\u0626\u0646");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 / \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CustomersComponent_Template_input_input_14_listener() {
            return ctx.onGetingCustomers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_Template_button_click_15_listener() {
            return ctx.onGetingCustomers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0628\u062D\u062B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomersComponent_div_17_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomersComponent_div_18_Template, 20, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nav", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_Template_a_click_23_listener() {
            return ctx.prevPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0627\u0644\u0633\u0627\u0628\u0642");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_Template_a_click_26_listener() {
            return ctx.onPage(ctx.page1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CustomersComponent_a_29_Template, 2, 1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CustomersComponent_a_31_Template, 2, 1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_Template_a_click_33_listener() {
            return ctx.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0627\u0644\u062A\u0627\u0644\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.currentPage == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, !ctx.page2 ? true : false));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: [".action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.cards-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.cards-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.cards-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  width: 100%;\r\n}\r\n\r\n.cards-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]{\r\n  width: 50% !important;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9kYXNoYm9hcmQvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUlBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9kYXNoYm9hcmQvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbi1idXR0b25zIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkcy1jb250YWluZXIgLnNlYXJjaC1ib3gge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uY2FyZHMtY29udGFpbmVyIC5zZWFyY2gtYm94IGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi5jYXJkcy1jb250YWluZXIgLnNlYXJjaC1ib3ggbWF0LWZvcm0tZmllbGQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jYXJkcy1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94e1xyXG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLWJveCBmb3Jte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customers',
          templateUrl: './customers.component.html',
          styleUrls: ['./customers.component.css']
        }]
      }], function () {
        return [{
          type: src_app_globalServices_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/dashboard/dashboard/dashboard.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin-components/dashboard/dashboard/dashboard.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAdminComponentsDashboardDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _statics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../statics.service */
    "./src/app/admin-components/dashboard/statics.service.ts");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(staticsService) {
        _classCallCheck(this, DashboardComponent);

        this.staticsService = staticsService; // options

        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'יום';
        this.yAxisLabel = 'כמות';
        this.timeline = true;
        this.staticsRecord = [];
        this.showLegened = true;
        this.colorScheme = {
          domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.cardColor = '#232837';
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.staticsService.getAnalytics();
          this.staticsService.getNumOf();
          this.staticsRecordSub = this.staticsService.getAnalyticsListener().subscribe(function (res) {
            console.log(res);
            _this5.staticsRecord = res;
          });
          this.numOfSub = this.staticsService.getNumOfListener().subscribe(function (res) {
            _this5.single = res;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.numOfSub.unsubscribe();
          this.staticsRecordSub.unsubscribe();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_statics_service__WEBPACK_IMPORTED_MODULE_1__["StaticsService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 26,
      vars: 16,
      consts: [[1, "main-container"], [1, "dash-board-header"], [1, "cards-container"], [1, "dashboard-card"], [1, "card-header"], [1, "card-content"], [1, "chart"], [3, "scheme", "results", "cardColor"], ["legendTitle", "\u05DE\u05D9\u05D3\u05E2", 3, "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "xAxis", "yAxis", "xAxisLabel", "yAxisLabel", "roundDomains", "timeline", "results"], [3, "scheme", "results"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0644\u0631\u0626\u064A\u0633\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngx-charts-number-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0627\u062D\u0635\u0627\u0626\u064A\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngx-charts-line-chart", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u062D\u0635\u0627\u0626\u064A\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ngx-charts-pie-grid", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single)("cardColor", ctx.cardColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("legend", ctx.legend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxis", ctx.xAxis)("yAxis", ctx.yAxis)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("roundDomains", true)("timeline", ctx.timeline)("results", ctx.staticsRecord);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single);
        }
      },
      directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NumberCardComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["PieGridComponent"]],
      styles: ["ngx-charts-number-card[_ngcontent-%COMP%]{\r\n  max-height: 20vh;\r\n}\r\n\r\nngx-charts-pie-grid[_ngcontent-%COMP%] {\r\n  height: 30vh;\r\n}\r\n\r\nngx-charts-line-chart[_ngcontent-%COMP%]{\r\n  min-height: 50vh;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%]{\r\n  padding: 3rem 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7QUFFekI7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5uZ3gtY2hhcnRzLW51bWJlci1jYXJke1xyXG4gIG1heC1oZWlnaHQ6IDIwdmg7XHJcbn1cclxuXHJcbm5neC1jaGFydHMtcGllLWdyaWQge1xyXG4gIGhlaWdodDogMzB2aDtcclxufVxyXG5uZ3gtY2hhcnRzLWxpbmUtY2hhcnR7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIC5kYXNoYm9hcmQtY2FyZCAuY2hhcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4uY2FyZC1jb250ZW50e1xyXG4gIHBhZGRpbmc6IDNyZW0gMDtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _statics_service__WEBPACK_IMPORTED_MODULE_1__["StaticsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/dashboard/info/info.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-components/dashboard/info/info.component.ts ***!
    \*******************************************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppAdminComponentsDashboardInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/globalServices/cities.service */
    "./src/app/globalServices/cities.service.ts");
    /* harmony import */


    var src_app_globalServices_issues_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/globalServices/issues.service */
    "./src/app/globalServices/issues.service.ts");
    /* harmony import */


    var src_app_globalServices_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/globalServices/companies.service */
    "./src/app/globalServices/companies.service.ts");
    /* harmony import */


    var src_app_globalServices_devices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/globalServices/devices.service */
    "./src/app/globalServices/devices.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function InfoComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InfoComponent_mat_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r179 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r179._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r179.name);
      }
    }

    function InfoComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InfoComponent_mat_option_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var issue_r180 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", issue_r180._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r180.name);
      }
    }

    function InfoComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InfoComponent_mat_option_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r181 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r181._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r181.name);
      }
    }

    function InfoComponent_div_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InfoComponent_mat_option_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r182 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r182._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r182.name);
      }
    }

    function InfoComponent_mat_option_92_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var device_r183 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", device_r183._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](device_r183.model);
      }
    }

    var InfoComponent =
    /*#__PURE__*/
    function () {
      function InfoComponent(cityService, issueService, comapnyService, deviceService) {
        _classCallCheck(this, InfoComponent);

        this.cityService = cityService;
        this.issueService = issueService;
        this.comapnyService = comapnyService;
        this.deviceService = deviceService;
        this.isLoading = false;
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.maxDate = new Date();
          this.minDate = new Date('2005');
          this.cityService.getCites();
          this.citiesSub = this.cityService.getCitiesListener().subscribe(function (cities) {
            _this6.cities = cities;
          });
          this.comapnyService.getCompanies();
          this.companiesSub = this.comapnyService.getCompaniesListener().subscribe(function (companies) {
            _this6.companies = companies;
            _this6.devices = null;
          });
          this.issueService.getIssues();
          this.issuesSub = this.issueService.getIssuesListener().subscribe(function (issues) {
            _this6.issues = issues;
          });
          this.deviceService.getDevices();
          this.deviceSub = this.deviceService.getDevicesListener().subscribe(function (devices) {
            _this6.devices = devices;
          });
        }
      }, {
        key: "onAddingCity",
        value: function onAddingCity(form) {
          var _this7 = this;

          var city = form.value.city;
          this.cityService.addCity(city).subscribe(function (res) {
            console.log(res);

            _this7.cityService.getCites();
          });
        }
      }, {
        key: "onAddingIssue",
        value: function onAddingIssue(form) {
          var _this8 = this;

          var issue = form.value.issue;
          this.issueService.addIssue(issue).subscribe(function (res) {
            console.log(res);

            _this8.issueService.getIssues();
          });
        }
      }, {
        key: "onAddingCompany",
        value: function onAddingCompany(form) {
          var _this9 = this;

          console.log(form);
          var company = form.value.company;
          this.comapnyService.addCompany(company).subscribe(function (res) {
            console.log(res);

            _this9.comapnyService.getCompanies();
          });
        }
      }, {
        key: "onAddingDevice",
        value: function onAddingDevice(form) {
          var _this10 = this;

          var _form$value = form.value,
              company = _form$value.company,
              released = _form$value.released,
              model = _form$value.model;
          this.deviceService.addDevice(model, released, company).subscribe(function (res) {
            console.log(res);

            _this10.deviceService.getDevices();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a, _b, _c, _d;

          (_a = this.citiesSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          (_b = this.companiesSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
          (_c = this.deviceSub) === null || _c === void 0 ? void 0 : _c.unsubscribe();
          (_d = this.issuesSub) === null || _d === void 0 ? void 0 : _d.unsubscribe();
        }
      }]);

      return InfoComponent;
    }();

    InfoComponent.ɵfac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_devices_service__WEBPACK_IMPORTED_MODULE_4__["DevicesService"]));
    };

    InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoComponent,
      selectors: [["app-info"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_globalServices_devices_service__WEBPACK_IMPORTED_MODULE_4__["DevicesService"], src_app_globalServices_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"], src_app_globalServices_issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"], src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"]])],
      decls: 93,
      vars: 13,
      consts: [[1, "main-container"], [1, "dash-board-header"], [1, "cards-container"], [1, "dashboard-card"], [1, "card-header"], [1, "card-content"], ["class", "center-container", 4, "ngIf"], [3, "submit"], ["cityForm", "ngForm"], ["appearance", "fill"], ["name", "city", "ngModel", "", "matInput", ""], [1, "btn", "btn-success"], [3, "value", 4, "ngFor", "ngForOf"], ["issueForm", "ngForm"], ["name", "issue", "ngModel", "", "matInput", ""], ["companyForm", "ngForm"], ["name", "company", "ngModel", "", "matInput", ""], ["deviceForm", "ngForm"], ["name", "model", "ngModel", "", "matInput", ""], ["name", "released", "ngModel", "", "matInput", "", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["ngModel", "", "name", "company"], [1, "center-container"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"], [3, "value"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0636\u0627\u0641\u0629 \u0645\u062F\u064A\u0646\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InfoComponent_div_10_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function InfoComponent_Template_form_submit_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184);

            var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return ctx.onAddingCity(_r166);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0627\u0633\u0645 \u0627\u0644\u062F\u064A\u0646\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0623\u0636\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InfoComponent_mat_option_23_Template, 2, 2, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0627\u0636\u0627\u0641\u0629 \u0645\u0634\u0643\u0644\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, InfoComponent_div_29_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 7, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function InfoComponent_Template_form_submit_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184);

            var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx.onAddingIssue(_r169);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0623\u0636\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, InfoComponent_mat_option_42_Template, 2, 2, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0627\u0636\u0627\u0641\u0629 \u0634\u0631\u0643\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, InfoComponent_div_48_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form", 7, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function InfoComponent_Template_form_submit_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184);

            var _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

            return ctx.onAddingCompany(_r172);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0623\u0636\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, InfoComponent_mat_option_61_Template, 2, 2, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u0627\u0636\u0627\u0641\u0629 \u062C\u0647\u0627\u0632");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, InfoComponent_div_67_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "form", 7, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function InfoComponent_Template_form_submit_68_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184);

            var _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69);

            return ctx.onAddingDevice(_r175);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u0627\u0633\u0645 \u0627\u0644\u062C\u0647\u0627\u0632");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Choose a date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "mat-datepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "mat-datepicker", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, InfoComponent_mat_option_85_Template, 2, 2, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u0623\u0636\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, InfoComponent_mat_option_92_Template, 2, 2, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.issues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r176)("min", ctx.minDate)("max", ctx.maxDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.devices);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      styles: [".dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\r\n  text-align: start;\r\n  width: 100%;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  margin-left: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row, column;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9kYXNoYm9hcmQvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1jb21wb25lbnRzL2Rhc2hib2FyZC9pbmZvL2luZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY2FyZCBmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCBmb3JtIG1hdC1mb3JtLWZpZWxkIHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCAuY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIgLmNhcmRzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LCBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.css'],
          providers: [src_app_globalServices_devices_service__WEBPACK_IMPORTED_MODULE_4__["DevicesService"], src_app_globalServices_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"], src_app_globalServices_issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"], src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"]]
        }]
      }], function () {
        return [{
          type: src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"]
        }, {
          type: src_app_globalServices_issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"]
        }, {
          type: src_app_globalServices_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"]
        }, {
          type: src_app_globalServices_devices_service__WEBPACK_IMPORTED_MODULE_4__["DevicesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/dashboard/main-dashboard/main-dashboard.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/admin-components/dashboard/main-dashboard/main-dashboard.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: MainDashboardComponent */

  /***/
  function srcAppAdminComponentsDashboardMainDashboardMainDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function () {
      return MainDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/utils-components/dialog-message/dialog-message.component */
    "./src/app/utils-components/dialog-message/dialog-message.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/admin-components/services/auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var MainDashboardComponent =
    /*#__PURE__*/
    function () {
      function MainDashboardComponent(authService, dialog) {
        _classCallCheck(this, MainDashboardComponent);

        this.authService = authService;
        this.dialog = dialog;
        this.isCollapsed = false;
      }

      _createClass(MainDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authService.getUser();
        }
      }, {
        key: "onLogOut",
        value: function onLogOut() {
          var _this11 = this;

          var ref = this.dialog.open(src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_1__["DialogMessageComponent"], {
            data: {
              buttons: true,
              title: 'יצאה מהמערכת',
              message: 'אתה בטוח לצאת מהמערכת ?'
            }
          });
          ref.afterClosed().subscribe(function (res) {
            if (res) _this11.authService.logout();
          });
        }
      }]);

      return MainDashboardComponent;
    }();

    MainDashboardComponent.ɵfac = function MainDashboardComponent_Factory(t) {
      return new (t || MainDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
    };

    MainDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainDashboardComponent,
      selectors: [["app-main-dashboard"]],
      decls: 57,
      vars: 6,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "nav-header"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "sms", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "info", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "customers", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/admin/requests", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "dashborad-container"], [1, "side-nav"], [1, "nav-inner"], [1, "brand"], ["src", "../../../assets/img/logo-no-title.png", "alt", ""], [1, "user"], ["routerLink", "/admin", "routerLinkActive", "active-link", 3, "routerLinkActiveOptions"], ["routerLink", "sms", "routerLinkActive", "active-link"], ["routerLink", "info", "routerLinkActive", "active-link"], ["routerLink", "customers", "routerLinkActive", "active-link"], ["routerLink", "/admin/requests", "routerLinkActive", "active-link"], [1, "divider-vertical"], [1, "logout"], [3, "click"], [1, "side-content"]],
      template: function MainDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Smart Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05E8\u05D0\u05E9\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05D4\u05D5\u05D3\u05E2\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u05DE\u05D9\u05D3\u05E2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u05D1\u05E7\u05E9\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Smart Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u05E9\u05DC\u05D5\u05DD , ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u05E8\u05D0\u05E9\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u05D4\u05D5\u05D3\u05E2\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u05DE\u05D9\u05D3\u05E2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u05D1\u05E7\u05E9\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainDashboardComponent_Template_h4_click_53_listener() {
            return ctx.onLogOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u05E6\u05D0 ,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      styles: [".dashborad-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row, column;\r\n  width: 100%;\r\n  direction: rtl;\r\n}\r\n\r\n.side-nav[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #2b353e;\r\n  height: 100%;\r\n}\r\n\r\n.nav-inner[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.side-nav[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 3rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.side-nav[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n}\r\n\r\n.side-nav[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin-top: 3rem;\r\n}\r\n\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  padding: 1rem;\r\n  margin-bottom: 5px;\r\n  transition: 0.5s background;\r\n  text-align: center;\r\n}\r\n\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background: #9a9a9a98;\r\n  cursor: pointer;\r\n}\r\n\r\n.divider-vertical[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.user[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\r\n  background: url('online-support.png');\r\n  width: 80px;\r\n  height: 80px;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  border-radius: 100%;\r\n  border: 2px solid #fff;\r\n  padding: 1rem;\r\n}\r\n\r\n.user[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .side-nav[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  margin-top: 10px;\r\n  font-size: 1rem;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: end;\r\n}\r\n\r\n.side-nav[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.side-nav[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  color: #9a9a9a;\r\n}\r\n\r\n.side-content[_ngcontent-%COMP%] {\r\n  flex: 4;\r\n  padding: 1rem;\r\n  padding-top: 3rem;\r\n  width: 100%;\r\n  background: #f2f2f2;\r\n  min-height: 100vh;\r\n}\r\n\r\n.active-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  background: #9a9a9a98;\r\n  color: #fff;\r\n}\r\n\r\n.nav-header[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n  color: green;\r\n}\r\n\r\n@media (max-width: 980px) {\r\n  .side-nav[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9kYXNoYm9hcmQvbWFpbi1kYXNoYm9hcmQvbWFpbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFDQUEwRDtFQUMxRCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1jb21wb25lbnRzL2Rhc2hib2FyZC9tYWluLWRhc2hib2FyZC9tYWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib3JhZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdywgY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG4uc2lkZS1uYXYge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6ICMyYjM1M2U7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubmF2LWlubmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNpZGUtbmF2IC5icmFuZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5zaWRlLW5hdiAuYnJhbmQgaW1nIHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnNpZGUtbmF2IC5icmFuZCBoMSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNpZGUtbmF2IHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuLnNpZGUtbmF2IGxpIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGJhY2tncm91bmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2lkZS1uYXYgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM5YTlhOWE5ODtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kaXZpZGVyLXZlcnRpY2FsIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnVzZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXIgLnVzZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL29ubGluZS1zdXBwb3J0LnBuZyk7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnVzZXIgaDMsXHJcbi5zaWRlLW5hdiBoNCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5sb2dvdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLnNpZGUtbmF2IC5sb2dvdXQgaDQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uc2lkZS1uYXYgLmxvZ291dCBoNDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjOWE5YTlhO1xyXG59XHJcblxyXG4uc2lkZS1jb250ZW50IHtcclxuICBmbGV4OiA0O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmFjdGl2ZS1saW5rIGxpIHtcclxuICBiYWNrZ3JvdW5kOiAjOWE5YTlhOTg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXYtaGVhZGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5hdmJhci1uYXZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLnNpZGUtbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-dashboard',
          templateUrl: './main-dashboard.component.html',
          styleUrls: ['./main-dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/dashboard/requests-list/requests-list.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/admin-components/dashboard/requests-list/requests-list.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: RequestsListComponent */

  /***/
  function srcAppAdminComponentsDashboardRequestsListRequestsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsListComponent", function () {
      return RequestsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/globalServices/requests.service */
    "./src/app/globalServices/requests.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment-timezone */
    "./node_modules/moment-timezone/index.js");
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _utils_components_statusHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../utils-components/statusHandler */
    "./src/app/utils-components/statusHandler.ts");
    /* harmony import */


    var src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/utils-components/dialog-message/dialog-message.component */
    "./src/app/utils-components/dialog-message/dialog-message.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _statics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../statics.service */
    "./src/app/admin-components/dashboard/statics.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function RequestsListComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0637\u0644\u0628\u0627\u062A ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RequestsListComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RequestsListComponent_div_31_mat_expansion_panel_2_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0645");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RequestsListComponent_div_31_mat_expansion_panel_2_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RequestsListComponent_div_31_mat_expansion_panel_2_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0645 \u0627\u0644\u0627\u0644\u063A\u0627\u0621");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RequestsListComponent_div_31_mat_expansion_panel_2_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0645\u0634\u0643\u0644\u0629 \u0627\u062E\u0631\u0649");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r156.otherIssue);
      }
    }

    function RequestsListComponent_div_31_mat_expansion_panel_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0637\u0644\u0628 :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RequestsListComponent_div_31_mat_expansion_panel_2_span_12_Template, 2, 0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RequestsListComponent_div_31_mat_expansion_panel_2_span_13_Template, 2, 0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RequestsListComponent_div_31_mat_expansion_panel_2_span_14_Template, 2, 0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0627\u0644\u0628\u0644\u062F\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0627\u0644\u0645\u0634\u0643\u0644\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RequestsListComponent_div_31_mat_expansion_panel_2_div_26_Template, 5, 1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0646\u0648\u0639 \u0627\u0644\u062C\u0647\u0627\u0632");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0627\u0644\u0634\u0631\u0643\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0645\u0643\u0627\u0646 \u0627\u0644\u062A\u0648\u0627\u062C\u062F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-action-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsListComponent_div_31_mat_expansion_panel_2_Template_a_click_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var request_r156 = ctx.$implicit;

          var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r162.onUpdatingStatus(request_r156);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u062A\u0645");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsListComponent_div_31_mat_expansion_panel_2_Template_button_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var request_r156 = ctx.$implicit;

          var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r164.onDeletingRequest(request_r156);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u062D\u0630\u0641");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r156 = ctx.$implicit;

        var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r156.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r155.statusHandler(request_r156.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r156.status == "DONE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r156.status == "IN-PROGRESS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r156.status == "CANCEL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r156.city.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r156.issue == null ? null : request_r156.issue.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r156.otherIssue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r156.device.model);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r156.company.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r156.whereAbout);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r155.dateFormat(request_r156.createdAt));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r155.fullDateFormat(request_r156.createdAt));
      }
    }

    function RequestsListComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestsListComponent_div_31_mat_expansion_panel_2_Template, 52, 13, "mat-expansion-panel", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r154.requests);
      }
    }

    var RequestsListComponent =
    /*#__PURE__*/
    function () {
      function RequestsListComponent(requestService, dialog, staticsService) {
        _classCallCheck(this, RequestsListComponent);

        this.requestService = requestService;
        this.dialog = dialog;
        this.staticsService = staticsService;
        this.pageSize = 10;
        this.currentPage = 1;
        this.isLoading = false;
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('he');
      }

      _createClass(RequestsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            'filter': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('all'),
            'search': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
          });
          this.isLoading = true;
          this.requestService.getRequests(this.currentPage, this.pageSize);
          this.requestsSub = this.requestService.getRequestsListener().subscribe(function (req) {
            _this12.requests = req.requests;
            _this12.totalRequests = req.max;
            _this12.isLoading = false;
          });
        }
      }, {
        key: "onChangeFilter",
        value: function onChangeFilter(e) {
          var filter = e.value;
          if (filter === 'all') filter = null;
          this.form.updateValueAndValidity();
          this.requestService.getRequests(this.currentPage, this.pageSize, filter);
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          console.log(this.form);
          var filter = this.form.value.filter;
          if (filter === 'all') filter = null;
          this.requestService.getRequests(this.currentPage, this.pageSize, filter, this.form.value.search);
        }
      }, {
        key: "dateFormat",
        value: function dateFormat(date) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(date).fromNow();
        }
      }, {
        key: "fullDateFormat",
        value: function fullDateFormat(date) {
          var timezoneDate = moment_timezone__WEBPACK_IMPORTED_MODULE_3__(date);
          return timezoneDate.tz('Asia/hebron').format('LLLL');
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(pageData) {
          this.isLoading = true;
          this.currentPage = pageData.pageIndex + 1;
          this.staticsService.getNumOf();
          this.requestService.getRequests(this.currentPage, this.pageSize);
        }
      }, {
        key: "onDeletingRequest",
        value: function onDeletingRequest(request) {
          var _this13 = this;

          var confirm = function confirm() {
            _this13.requestService.deleteRequest(request._id, function () {
              _this13.staticsService.getNumOf();
            });

            _this13.dialog.closeAll();
          };

          this.dialog.open(src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_5__["DialogMessageComponent"], {
            data: {
              buttons: true,
              title: 'حذف طلب',
              message: 'هل أنت متأكد من حذف الطلب ؟',
              confirm: confirm
            }
          });
        }
      }, {
        key: "onUpdatingStatus",
        value: function onUpdatingStatus(request) {
          var _this14 = this;

          var updateOps = [{
            name: 'status',
            value: 'DONE'
          }];

          var confirm = function confirm() {
            _this14.requestService.updateReuqest(request._id, updateOps).subscribe(function (res) {
              request.status = 'DONE';
            });

            _this14.dialog.closeAll();
          };

          this.dialog.open(src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_5__["DialogMessageComponent"], {
            data: {
              buttons: true,
              title: 'اتمام طلب',
              message: 'هل أنت متأكد من اتمام الطلب ؟',
              confirm: confirm
            }
          });
        }
      }, {
        key: "statusHandler",
        value: function statusHandler(status) {
          return Object(_utils_components_statusHandler__WEBPACK_IMPORTED_MODULE_4__["statusHandler"])(status);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a, _b;

          (_a = this.numOfSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          (_b = this.requestsSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        }
      }]);

      return RequestsListComponent;
    }();

    RequestsListComponent.ɵfac = function RequestsListComponent_Factory(t) {
      return new (t || RequestsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_statics_service__WEBPACK_IMPORTED_MODULE_8__["StaticsService"]));
    };

    RequestsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RequestsListComponent,
      selectors: [["app-requests-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"]])],
      decls: 34,
      vars: 8,
      consts: [[1, "main-container"], [1, "dash-board-header"], [1, "cards-container"], [1, "dashboard-card"], [1, "card-header"], [3, "formGroup", "submit"], ["appearance", "fill", 3, "hideRequiredMarker", "floatLabel"], ["formControlName", "filter", "value", "all", 3, "selectionChange"], ["value", "all"], ["value", "IN-PROGRESS"], ["value", "DONE"], ["value", "CANCEL"], [1, "search-box"], ["appearance", "fill"], ["formControlName", "search", "matInput", ""], [1, "btn", "btn-success"], ["class", "center-container", 4, "ngIf"], [4, "ngIf"], [1, "spacer"], [3, "length", "pageSize", "page"], [1, "center-container"], [4, "ngFor", "ngForOf"], [1, "expansion-header"], [1, "header"], [1, "status-box"], [1, "status", 3, "ngStyle"], [1, "panel-data"], [1, "panel-info"], ["class", "panel-info", 4, "ngIf"], [1, "panel-date"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
      template: function RequestsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0644\u0631\u0626\u064A\u0633\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0637\u0644\u0628\u0627\u062A\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RequestsListComponent_Template_form_submit_9_listener() {
            return ctx.onSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u062E\u064A\u0627\u0631\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function RequestsListComponent_Template_mat_select_selectionChange_13_listener($event) {
            return ctx.onChangeFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u062A\u0645");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0627\u0644\u063A\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0627\u0644\u0627\u0633\u0645 \\ \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0628\u062D\u062B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RequestsListComponent_div_29_Template, 3, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RequestsListComponent_div_30_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RequestsListComponent_div_31_Template, 3, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-paginator", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function RequestsListComponent_Template_mat_paginator_page_33_listener($event) {
            return ctx.onPageChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideRequiredMarker", false)("floatLabel", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requests && ctx.requests.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.totalRequests)("pageSize", ctx.pageSize);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"]],
      styles: [".main-container[_ngcontent-%COMP%] {\r\n  padding-bottom: 3rem;\r\n}\r\n\r\n\r\n\r\nngx-charts-number-card[_ngcontent-%COMP%] {\r\n  height: 20vh !important;\r\n}\r\n\r\n\r\n\r\nmat-paginator[_ngcontent-%COMP%] {\r\n  direction: ltr;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9kYXNoYm9hcmQvcmVxdWVzdHMtbGlzdC9yZXF1ZXN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7Ozs7QUFJQTtFQUNFLHVCQUF1QjtBQUN6Qjs7OztBQUlBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvZGFzaGJvYXJkL3JlcXVlc3RzLWxpc3QvcmVxdWVzdHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuXHJcblxyXG5uZ3gtY2hhcnRzLW51bWJlci1jYXJkIHtcclxuICBoZWlnaHQ6IDIwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICBkaXJlY3Rpb246IGx0cjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-requests-list',
          templateUrl: './requests-list.component.html',
          styleUrls: ['./requests-list.component.css'],
          providers: [src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"]]
        }]
      }], function () {
        return [{
          type: src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: _statics_service__WEBPACK_IMPORTED_MODULE_8__["StaticsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/dashboard/sms/sms.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/admin-components/dashboard/sms/sms.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SmsComponent */

  /***/
  function srcAppAdminComponentsDashboardSmsSmsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmsComponent", function () {
      return SmsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_globalServices_sms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/globalServices/sms.service */
    "./src/app/globalServices/sms.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    function SmsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SmsComponent_form_11_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u0646\u0641");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SmsComponent_form_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SmsComponent_form_11_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r71.onSendingMessage(_r68);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u0631\u0633\u0644 \u0627\u0644\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0632\u0628\u0627\u0626\u0646");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SmsComponent_form_11_div_6_Template, 4, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0627\u0644\u0631\u0633\u0627\u0644\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0623\u0631\u0633\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r69 == null ? null : _r69.checked));
      }
    }

    var SmsComponent =
    /*#__PURE__*/
    function () {
      function SmsComponent(smsService) {
        _classCallCheck(this, SmsComponent);

        this.smsService = smsService;
        this.isLoading = false;
      }

      _createClass(SmsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSendingMessage",
        value: function onSendingMessage(form) {
          this.smsService.sendMessage(form.value.to, form.value.toAll, form.value.message);
        }
      }]);

      return SmsComponent;
    }();

    SmsComponent.ɵfac = function SmsComponent_Factory(t) {
      return new (t || SmsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_sms_service__WEBPACK_IMPORTED_MODULE_1__["SMSService"]));
    };

    SmsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SmsComponent,
      selectors: [["app-sms"]],
      decls: 13,
      vars: 2,
      consts: [[1, "main-container"], [1, "dash-board-header"], [1, "cards-container"], [1, "dashboard-card"], [1, "card-header"], [1, "cart-content"], ["class", "center-container", 4, "ngIf"], [3, "submit", 4, "ngIf"], [1, "spacer"], [1, "center-container"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"], [3, "submit"], ["form", "ngForm"], [1, "input-container"], ["name", "toAll", "ngModel", ""], ["sendToAll", ""], ["class", "input-container", 4, "ngIf"], ["name", "message", "ngModel", "", "placeholder", "Message here...", "rows", "10"], ["name", "to", "ngModel", "", "placeholder", "052-0000000", "type", "tel"]],
      template: function SmsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0626\u0644 SMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SmsComponent_div_10_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SmsComponent_form_11_Template, 13, 1, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]],
      styles: [".input-container[_ngcontent-%COMP%]{\r\n  margin-top: 1rem;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin-bottom: 5px;\r\n  font-size: .8rem;\r\n  font-weight: 500;\r\n  color: #333;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  border: 1px solid #ccc;\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  font-size: .8rem;\r\n  width: 40%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  border: 0;\r\n  background: #60BB46;\r\n  padding:.5rem 3rem;\r\n  color: #fff;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   .cart-content[_ngcontent-%COMP%]{\r\n  padding: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9kYXNoYm9hcmQvc21zL3Ntcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUdBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvZGFzaGJvYXJkL3Ntcy9zbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4uaW5wdXQtY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIgcHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAuOHJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIGlucHV0LHRleHRhcmVhe1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuXHJcbmJ1dHRvbntcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzYwQkI0NjtcclxuICBwYWRkaW5nOi41cmVtIDNyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIC5jYXJ0LWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sms',
          templateUrl: './sms.component.html',
          styleUrls: ['./sms.component.css']
        }]
      }], function () {
        return [{
          type: src_app_globalServices_sms_service__WEBPACK_IMPORTED_MODULE_1__["SMSService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/dashboard/statics.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin-components/dashboard/statics.service.ts ***!
    \***************************************************************/

  /*! exports provided: StaticsService */

  /***/
  function srcAppAdminComponentsDashboardStaticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticsService", function () {
      return StaticsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BACKEND = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "analytics";

    var StaticsService =
    /*#__PURE__*/
    function () {
      function StaticsService(http) {
        _classCallCheck(this, StaticsService);

        this.http = http;
        this.numOf = [];
        this.numOfSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.analytics = [];
        this.analyticsSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(StaticsService, [{
        key: "getNumOf",
        value: function getNumOf() {
          var _this15 = this;

          this.http.get(BACKEND + '/numOf').subscribe(function (res) {
            _this15.numOf = res;

            _this15.numOfSub.next(_toConsumableArray(_this15.numOf));
          });
        }
      }, {
        key: "getNumOfListener",
        value: function getNumOfListener() {
          return this.numOfSub.asObservable();
        }
      }, {
        key: "getAnalytics",
        value: function getAnalytics() {
          var _this16 = this;

          this.http.get(BACKEND).subscribe(function (res) {
            _this16.analytics = res;

            _this16.analyticsSub.next(_toConsumableArray(_this16.analytics));
          });
        }
      }, {
        key: "getAnalyticsListener",
        value: function getAnalyticsListener() {
          return this.analyticsSub.asObservable();
        }
      }]);

      return StaticsService;
    }();

    StaticsService.ɵfac = function StaticsService_Factory(t) {
      return new (t || StaticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    StaticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StaticsService,
      factory: StaticsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/header/header.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin-components/header/header.component.ts ***!
    \*************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppAdminComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/admin-components/services/auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    function HeaderComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Customer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Repair");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Requests");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function HeaderComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_8_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r216);

          var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r215.onLogOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logut");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.isAuthenticated = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.isAuthenticated = this.authService.getIsAuthenticated();
          this.authService.getIsAuthenticatedListener().subscribe(function (status) {
            _this17.isAuthenticated = status;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a; //Called once, before the instance is destroyed.
          //Add 'implements OnDestroy' to the class.


          (_a = this.authStatusAuthSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
      }, {
        key: "onLogOut",
        value: function onLogOut() {
          this.authService.logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 9,
      vars: 3,
      consts: [["color", "primary"], ["routerLink", "", 1, "brand"], [1, "spacer"], [4, "ngIf"], ["mat-button", "", "routerLink", "login", "routerLinkActive", "mat-accent", 4, "ngIf"], ["mat-button", "", "routerLink", "login", 3, "click", 4, "ngIf"], ["mat-button", "", "routerLink", "/admin", "routerLinkActive", "mat-accent", 3, "routerLinkActiveOptions"], ["mat-button", "", "routerLink", "addCustomer", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "addRepair", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "requests", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "createPost", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "login", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "login", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Smart Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 11, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_a_7_Template, 2, 0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: [".spacer[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n\r\nul[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n\r\nli[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  margin-left: 1.4rem;\r\n}\r\n\r\n\r\n.brand[_ngcontent-%COMP%]{\r\n  color:#fff;\r\n  font-size: 1.4rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5cclxudWx7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5cclxubGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMS40cmVtO1xyXG59XHJcblxyXG5cclxuLmJyYW5ke1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/pick-customer/pick-customer.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/admin-components/pick-customer/pick-customer.component.ts ***!
    \***************************************************************************/

  /*! exports provided: PickCustomerComponent */

  /***/
  function srcAppAdminComponentsPickCustomerPickCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickCustomerComponent", function () {
      return PickCustomerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _globalServices_customers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../globalServices/customers.service */
    "./src/app/globalServices/customers.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function PickCustomerComponent_mat_card_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", customer_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", customer_r8.firstName, " ", customer_r8.lastName, " ");
      }
    }

    function PickCustomerComponent_h4_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Customers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PickCustomerComponent =
    /*#__PURE__*/
    function () {
      function PickCustomerComponent(cutomerService) {
        _classCallCheck(this, PickCustomerComponent);

        this.cutomerService = cutomerService;
      }

      _createClass(PickCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cutomerService.getCustomers();
        }
      }, {
        key: "onSearch",
        value: function onSearch(event) {
          var ref = this.cutomerService.getCustomers(event.value);
        }
      }]);

      return PickCustomerComponent;
    }();

    PickCustomerComponent.ɵfac = function PickCustomerComponent_Factory(t) {
      return new (t || PickCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globalServices_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"]));
    };

    PickCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PickCustomerComponent,
      selectors: [["app-pick-customer"]],
      decls: 13,
      vars: 2,
      consts: [[1, "dialog-container"], ["color", "primary", "mat-dialog-close", ""], ["mat-dialog-title", ""], ["appearance", "fill"], ["matInput", "", "placeholder", "search by name", "type", "text", "name", "search", "maxlength", "24", "ngModel", "", 3, "input"], ["search", ""], [3, "mat-dialog-close", 4, "ngFor", "ngForOf"], ["class", "mat-body-2", 4, "ngIf"], [3, "mat-dialog-close"], [1, "mat-body-2"]],
      template: function PickCustomerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pick Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PickCustomerComponent_Template_input_input_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx.onSearch(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PickCustomerComponent_mat_card_11_Template, 3, 3, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PickCustomerComponent_h4_12_Template, 2, 0, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customers == null || ctx.customers.length == 0);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"]],
      styles: ["div[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin-bottom: 1.4rem;\r\n  cursor: pointer;\r\n  transition: .5 box-shadow ease;\r\n}\r\n\r\n\r\n\r\nmat-card[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n\r\nmat-form-field[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.dialog-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n\r\n}\r\n\r\n\r\n\r\nmat-dialog-actions[_ngcontent-%COMP%]{\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 3;\r\n  float: right;\r\n}\r\n\r\n\r\n\r\nmat-dialog-actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9waWNrLWN1c3RvbWVyL3BpY2stY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7OztBQUlBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7Ozs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxVQUFVO0FBQ1o7Ozs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7OztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjs7OztBQUdBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtFQUNWLFlBQVk7QUFDZDs7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1jb21wb25lbnRzL3BpY2stY3VzdG9tZXIvcGljay1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbm1hdC1jYXJke1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjUgYm94LXNoYWRvdyBlYXNlO1xyXG59XHJcblxyXG5tYXQtY2FyZDpob3ZlcntcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpYWxvZy1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuXHJcbm1hdC1kaWFsb2ctYWN0aW9uc3tcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxubWF0LWRpYWxvZy1hY3Rpb25zIHAge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PickCustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pick-customer',
          templateUrl: './pick-customer.component.html',
          styleUrls: ['./pick-customer.component.css']
        }]
      }], function () {
        return [{
          type: _globalServices_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/repair/add-repair/add-repair.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin-components/repair/add-repair/add-repair.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AddRepairComponent */

  /***/
  function srcAppAdminComponentsRepairAddRepairAddRepairComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRepairComponent", function () {
      return AddRepairComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_admin_components_pick_customer_pick_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/admin-components/pick-customer/pick-customer.component */
    "./src/app/admin-components/pick-customer/pick-customer.component.ts");
    /* harmony import */


    var src_app_admin_components_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/admin-components/add-device/add-device.component */
    "./src/app/admin-components/add-device/add-device.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_admin_components_services_repair_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/admin-components/services/repair.service */
    "./src/app/admin-components/services/repair.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function AddRepairComponent_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function AddRepairComponent_mat_card_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRepairComponent_mat_card_12_Template_p_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var i_r23 = ctx.index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.deleteDevice(i_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var v_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](v_r22.company);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](v_r22.device);
      }
    }

    function AddRepairComponent_mat_card_content_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r21.customer == null ? null : ctx_r21.customer.firstName, " ", ctx_r21.customer == null ? null : ctx_r21.customer.lastName, " ");
      }
    }

    var AddRepairComponent =
    /*#__PURE__*/
    function () {
      function AddRepairComponent(dilaog, repairService) {
        _classCallCheck(this, AddRepairComponent);

        this.dilaog = dilaog;
        this.repairService = repairService;
        this.devices = [];
        this.isLoading = false;
        this.viewsName = [];
      }

      _createClass(AddRepairComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.loadingSub = this.repairService.getIsLoading().subscribe(function (res) {
            _this18.isLoading = res;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          //Called once, before the instance is destroyed.
          //Add 'implements OnDestroy' to the class.
          this.loadingSub.unsubscribe();
        }
      }, {
        key: "pickCustomer",
        value: function pickCustomer() {
          var _this19 = this;

          var ref = this.dilaog.open(src_app_admin_components_pick_customer_pick_customer_component__WEBPACK_IMPORTED_MODULE_1__["PickCustomerComponent"], {
            width: '80%',
            height: '90vh'
          });
          ref.afterClosed().subscribe(function (res) {
            console.log(res);
            _this19.customer = res;
          });
        }
      }, {
        key: "addDevice",
        value: function addDevice() {
          var _this20 = this;

          var callback = function callback(device, viewNames) {
            console.log(device, viewNames);

            _this20.dilaog.closeAll();

            _this20.devices.push(device);

            _this20.viewsName.push(viewNames);
          };

          var ref = this.dilaog.open(src_app_admin_components_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_2__["AddDeviceComponent"], {
            width: '80%',
            height: '90vh',
            data: {
              callback: callback
            }
          });
        }
      }, {
        key: "deleteDevice",
        value: function deleteDevice(index) {
          console.log(index);
          var newArr = this.devices.filter(function (dev, i) {
            return index !== i;
          });
          var newViewsList = this.viewsName.filter(function (v, i) {
            return index !== i;
          });
          this.viewsName = newViewsList;
          this.devices = newArr;
        }
      }, {
        key: "onAddingRepair",
        value: function onAddingRepair() {
          if (this.devices.length == 0) return;
          if (!this.customer) return;
          var repair = {
            customer: this.customer._id,
            devices: this.devices
          };
          console.log(repair);
          this.repairService.addRepair(repair);
        }
      }]);

      return AddRepairComponent;
    }();

    AddRepairComponent.ɵfac = function AddRepairComponent_Factory(t) {
      return new (t || AddRepairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_components_services_repair_service__WEBPACK_IMPORTED_MODULE_4__["RepairService"]));
    };

    AddRepairComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddRepairComponent,
      selectors: [["app-add-repair"]],
      decls: 22,
      vars: 3,
      consts: [[4, "ngIf"], [1, "center"], ["mat-raised-button", "", 3, "click"], [1, "devices-container"], [1, "card-container"], [4, "ngFor", "ngForOf"], ["class", "mat-body-2", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["color", "red", 1, "mat-body-2"], [3, "click"], [1, "card-content"], [1, "mat-body-2"]],
      template: function AddRepairComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddRepairComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New Repair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRepairComponent_Template_button_click_6_listener() {
            return ctx.addDevice();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Device +");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Devices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddRepairComponent_mat_card_12_Template, 8, 2, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRepairComponent_Template_button_click_13_listener() {
            return ctx.pickCustomer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "PICK CUSTOMER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddRepairComponent_mat_card_content_15_Template, 2, 2, "mat-card-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRepairComponent_Template_button_click_18_listener() {
            return ctx.onAddingRepair();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add Repair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-footer", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " * Fullfill the required requests ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewsName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customer);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]],
      styles: [".center[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 50%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.devices-container[_ngcontent-%COMP%] {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.devices-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.devices-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\r\n  padding: 1rem 2rem;\r\n}\r\n\r\n.devices-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  float: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9yZXBhaXIvYWRkLXJlcGFpci9hZGQtcmVwYWlyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvcmVwYWlyL2FkZC1yZXBhaXIvYWRkLXJlcGFpci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5kZXZpY2VzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5kZXZpY2VzLWNvbnRhaW5lciAuY2FyZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmRldmljZXMtY29udGFpbmVyIC5jYXJkLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxufVxyXG5cclxuLmRldmljZXMtY29udGFpbmVyIGRpdiBtYXQtY2FyZCBwe1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRepairComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-repair',
          templateUrl: './add-repair.component.html',
          styleUrls: ['./add-repair.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: src_app_admin_components_services_repair_service__WEBPACK_IMPORTED_MODULE_4__["RepairService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/repair/repair-details/repair-details.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/admin-components/repair/repair-details/repair-details.component.ts ***!
    \************************************************************************************/

  /*! exports provided: RepairDetailsComponent */

  /***/
  function srcAppAdminComponentsRepairRepairDetailsRepairDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepairDetailsComponent", function () {
      return RepairDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RepairDetailsComponent =
    /*#__PURE__*/
    function () {
      function RepairDetailsComponent() {
        _classCallCheck(this, RepairDetailsComponent);
      }

      _createClass(RepairDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RepairDetailsComponent;
    }();

    RepairDetailsComponent.ɵfac = function RepairDetailsComponent_Factory(t) {
      return new (t || RepairDetailsComponent)();
    };

    RepairDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RepairDetailsComponent,
      selectors: [["app-repair-details"]],
      decls: 2,
      vars: 0,
      template: function RepairDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "repair-details works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvcmVwYWlyL3JlcGFpci1kZXRhaWxzL3JlcGFpci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepairDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-repair-details',
          templateUrl: './repair-details.component.html',
          styleUrls: ['./repair-details.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/repair/repair-list/repair-list.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin-components/repair/repair-list/repair-list.component.ts ***!
    \******************************************************************************/

  /*! exports provided: RepairListComponent */

  /***/
  function srcAppAdminComponentsRepairRepairListRepairListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepairListComponent", function () {
      return RepairListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_repair_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/repair.service */
    "./src/app/admin-components/services/repair.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function RepairListComponent_mat_card_1_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IN PROGRESS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RepairListComponent_mat_card_1_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DONE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RepairListComponent_mat_card_1_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CANCELED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background": a0
      };
    };

    function RepairListComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RepairListComponent_mat_card_1_p_4_Template, 2, 0, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RepairListComponent_mat_card_1_p_5_Template, 2, 0, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RepairListComponent_mat_card_1_p_6_Template, 2, 0, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-footer", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var repair_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, repair_r1.status ? "#77D150" : "red"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", repair_r1.status != null && !repair_r1.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", repair_r1.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", repair_r1.status == null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", repair_r1.device.model, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.pipe.transform(repair_r1.createdAt, "short"), " ");
      }
    }

    var RepairListComponent =
    /*#__PURE__*/
    function () {
      function RepairListComponent(repairService) {
        _classCallCheck(this, RepairListComponent);

        this.repairService = repairService;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US'); // Use your own locale
      }

      _createClass(RepairListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.repairs = this.repairService.getRepairs();
        }
      }]);

      return RepairListComponent;
    }();

    RepairListComponent.ɵfac = function RepairListComponent_Factory(t) {
      return new (t || RepairListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_repair_service__WEBPACK_IMPORTED_MODULE_2__["RepairService"]));
    };

    RepairListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RepairListComponent,
      selectors: [["app-repair-list"]],
      decls: 2,
      vars: 1,
      consts: [[1, "repairs-container"], ["routerLink", "details", 4, "ngFor", "ngForOf"], ["routerLink", "details"], [1, "repair-state"], [1, "status", 3, "ngStyle"], ["class", "mat-body-2", 4, "ngIf"], [1, "pad"], [1, "mat-h2"], ["src", "https://www.espir.co.il/images/itempics/MQAG2HB-A.jpg", "alt", ""], [1, "mat-subheading-1"], [1, "mat-body-2"]],
      template: function RepairListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepairListComponent_mat_card_1_Template, 13, 8, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.repairs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardFooter"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  margin-bottom: 10px;\r\n  transition: 0.5s ease transform, z-index;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.repairs-container[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.pad[_ngcontent-%COMP%]{\r\n  padding:1.5rem 5rem;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.2);\r\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);\r\n  z-index: 2;\r\n  transition-delay: 1s;\r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  margin-right: 8px;\r\n  border-radius: 100%;\r\n  width: 1rem;\r\n  height: 1rem;\r\n}\r\n\r\n.repair-state[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.repair-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  height: 150px;\r\n  width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9yZXBhaXIvcmVwYWlyLWxpc3QvcmVwYWlyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0U7OztnQkFHYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQ0FBMkM7RUFDM0MsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9yZXBhaXIvcmVwYWlyLWxpc3QvcmVwYWlyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZSB0cmFuc2Zvcm0sIHotaW5kZXg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ucmVwYWlycy1jb250YWluZXIge1xyXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZHtcclxuICBwYWRkaW5nOjEuNXJlbSA1cmVtO1xyXG59XHJcblxyXG5tYXQtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5yZXBhaXItc3RhdGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmVwYWlyLXN0YXRlIHAge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepairListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-repair-list',
          templateUrl: './repair-list.component.html',
          styleUrls: ['./repair-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_repair_service__WEBPACK_IMPORTED_MODULE_2__["RepairService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/services/auth.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin-components/services/auth.service.ts ***!
    \***********************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAdminComponentsServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'admin/';

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.isAuthenticatedListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoading = false;
      }

      _createClass(AuthService, [{
        key: "getIsAuthenticated",
        value: function getIsAuthenticated() {
          return this.isAuthenticated;
        }
      }, {
        key: "getIsAuthenticatedListener",
        value: function getIsAuthenticatedListener() {
          return this.isAuthenticatedListener;
        }
      }, {
        key: "getIsLoading",
        value: function getIsLoading() {
          return this.isLoading;
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.user;
        }
      }, {
        key: "onSignUp",
        value: function onSignUp(user) {
          var _this21 = this;

          var keepMelogedIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.isLoading = true;
          this.http.post(BACKEND_URL + 'signup', user).subscribe(function (res) {
            _this21.authMethod(res, keepMelogedIn);
          });
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var _this22 = this;

          var keepMelogedIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var authData = {
            username: username,
            password: password
          };
          this.isLoading = true;
          this.http.post(BACKEND_URL + 'login', authData).subscribe(function (res) {
            _this22.authMethod(res, keepMelogedIn);
          }, function (err) {
            _this22.setAuthenticated(false);
          });
        }
      }, {
        key: "setAuthenticated",
        value: function setAuthenticated(state) {
          this.isAuthenticated = state;
          this.isAuthenticatedListener.next(state);
          this.isLoading = false;
        }
      }, {
        key: "authMethod",
        value: function authMethod(res) {
          var keepMelogedIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var token = res.token;
          this.token = token;

          if (token) {
            this.token = token;
            this.setAuthenticated(true);
            var user = res.user;
            var expiresInDuration = res.expiresIn;
            this.setAuthTimer(expiresInDuration);

            if (keepMelogedIn) {
              var now = new Date();
              var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
              this.saveAuthData(token, expirationDate, user);
            }

            this.router.navigate(['/admin']);
          }
        } ///--- Summary ---////
        /// Title : Loging out
        /// Description :
        /// Returning Args :

      }, {
        key: "logout",
        value: function logout() {
          this.setAuthenticated(false);
          this.token = null;
          this.isAuthenticated = false;
          clearTimeout(this.tokenTimer);
          this.clearAuthData();
          this.user = null;
          this.router.navigate(['/admin/login']);
        } ///--- Summary ---////
        /// Title : Auto authenticate the user
        /// Description : Automatically authenticating the user
        /// Returning Args :

      }, {
        key: "autoAuthUser",
        value: function autoAuthUser() {
          var navigateToDashBoard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var authInfo = this.getAuthData();

          if (!authInfo) {
            return;
          }

          var now = new Date();
          var expiresIn = authInfo.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.token = authInfo.token;
            this.user = authInfo.user;
            this.setAuthTimer(expiresIn / 1000);
            this.setAuthenticated(true);
            this.token = authInfo.token;

            if (navigateToDashBoard) {
              this.router.navigate(['/admin']);
            }
          }
        } ///--- Summary ---////
        /// Title : Auth timer for token date
        /// Description : updating the ui based on the token expire date
        /// Returning Args :

      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(duration) {
          var _this23 = this;

          this.tokenTimer = setTimeout(function () {
            _this23.logout();
          }, duration * 1000);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        } ///--- Summary ---////
        /// Title : getting the authintecation data from local storage
        /// Description :
        /// Returning Args :

      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem('admin-token');
          var expirationDate = localStorage.getItem('admin-expirationDate');
          var firstName = localStorage.getItem('admin-firstName');
          var lastName = localStorage.getItem('admin-lastName');
          var id = localStorage.getItem('admin-id');

          if (!token || !expirationDate) {
            return;
          }

          return {
            token: token,
            expirationDate: new Date(expirationDate),
            user: {
              firstName: firstName,
              lastName: lastName,
              _id: id
            }
          };
        } ///--- Summary ---////
        /// Title : Saving to local storage
        /// Description : saving the auth data to local storage
        /// Returning Args :

      }, {
        key: "saveAuthData",
        value: function saveAuthData(token, expirationDate, user) {
          localStorage.setItem('admin-token', token);
          localStorage.setItem('admin-expirationDate', expirationDate.toISOString());
          localStorage.setItem('admin-firstName', user.firstName);
          localStorage.setItem('admin-lastName', user.lastName);
          localStorage.setItem('admin-id', user._id);
        } ///--- Summary ---////
        /// Title : Clear auth data from local storage
        /// Description : clearing the local storage
        /// Returning Args :

      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem('admin-token');
          localStorage.removeItem('admin-expirationDate');
          localStorage.removeItem('admin-firstName');
          localStorage.removeItem('admin-lastName');
          localStorage.removeItem('admin-id');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-components/services/repair.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin-components/services/repair.service.ts ***!
    \*************************************************************/

  /*! exports provided: RepairService */

  /***/
  function srcAppAdminComponentsServicesRepairServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepairService", function () {
      return RepairService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/Customer */
    "./src/app/models/Customer.ts");
    /* harmony import */


    var _models_Device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/Device */
    "./src/app/models/Device.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;

    var RepairService =
    /*#__PURE__*/
    function () {
      function RepairService(http, router) {
        _classCallCheck(this, RepairService);

        this.http = http;
        this.router = router;
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.devicesModels = [{
          _id: '1',
          model: "iPhone X"
        }, {
          _id: '2',
          model: "Galaxy S20"
        }];
      }

      _createClass(RepairService, [{
        key: "getIsLoading",
        value: function getIsLoading() {
          return this.isLoading.asObservable();
        }
      }, {
        key: "getRepairs",
        value: function getRepairs() {
          return [{
            _id: "1",
            notes: "this device needs alot of things",
            price: 500.5,
            problems: ["1", "2", "3"],
            createdAt: new Date(),
            status: true,
            customer: new _models_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](),
            device: new _models_Device__WEBPACK_IMPORTED_MODULE_2__["Device"]()
          }, {
            _id: "2",
            notes: "this device needs alot of things",
            price: 500.5,
            problems: ["1", "2", "3"],
            createdAt: new Date(),
            status: false,
            customer: new _models_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](),
            device: new _models_Device__WEBPACK_IMPORTED_MODULE_2__["Device"]()
          }, {
            _id: "2",
            notes: "this device needs alot of things",
            price: 500.5,
            problems: ["1", "2", "3"],
            createdAt: new Date(),
            status: false,
            customer: new _models_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](),
            device: new _models_Device__WEBPACK_IMPORTED_MODULE_2__["Device"]()
          }, {
            _id: "2",
            notes: "this device needs alot of things",
            price: 500.5,
            problems: ["1", "2", "3"],
            createdAt: new Date(),
            status: false,
            customer: new _models_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](),
            device: new _models_Device__WEBPACK_IMPORTED_MODULE_2__["Device"]()
          }];
        }
      }, {
        key: "getDeviceModelByCompanyID",
        value: function getDeviceModelByCompanyID(id) {
          return this.http.get(BACKEND_URL + 'devices/' + id);
        }
      }, {
        key: "getDeviceCompanies",
        value: function getDeviceCompanies() {
          return this.http.get(BACKEND_URL + "companies");
        }
      }, {
        key: "addRepair",
        value: function addRepair(repair) {
          var _this24 = this;

          this.isLoading.next(true);
          this.http.post(BACKEND_URL + 'repairs', repair).subscribe(function (data) {
            console.log(data);

            _this24.isLoading.next(false);

            _this24.router.navigate(['/admin']);
          });
        }
      }]);

      return RepairService;
    }();

    RepairService.ɵfac = function RepairService_Factory(t) {
      return new (t || RepairService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    RepairService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RepairService,
      factory: RepairService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepairService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _client_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./client/main-page/main-page.component */
    "./src/app/client/main-page/main-page.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _admin_components_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-components/dashboard/dashboard/dashboard.component */
    "./src/app/admin-components/dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _admin_components_dashboard_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin-components/dashboard/main-dashboard/main-dashboard.component */
    "./src/app/admin-components/dashboard/main-dashboard/main-dashboard.component.ts");
    /* harmony import */


    var _admin_components_dashboard_sms_sms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-components/dashboard/sms/sms.component */
    "./src/app/admin-components/dashboard/sms/sms.component.ts");
    /* harmony import */


    var _client_client_main_client_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./client/client-main/client-main.component */
    "./src/app/client/client-main/client-main.component.ts");
    /* harmony import */


    var _client_client_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./client/client-auth.guard */
    "./src/app/client/client-auth.guard.ts");
    /* harmony import */


    var _client_client_dashboard_main_client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./client/client-dashboard-main/client-dashboard/client-dashboard.component */
    "./src/app/client/client-dashboard-main/client-dashboard/client-dashboard.component.ts");
    /* harmony import */


    var _client_client_login_client_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./client/client-login/client-login.component */
    "./src/app/client/client-login/client-login.component.ts");
    /* harmony import */


    var _client_client_signup_client_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./client/client-signup/client-signup.component */
    "./src/app/client/client-signup/client-signup.component.ts");
    /* harmony import */


    var _client_client_dashboard_main_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./client/client-dashboard-main/client-profile/client-profile.component */
    "./src/app/client/client-dashboard-main/client-profile/client-profile.component.ts");
    /* harmony import */


    var _client_client_dashboard_main_client_add_request_client_add_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./client/client-dashboard-main/client-add-request/client-add-request.component */
    "./src/app/client/client-dashboard-main/client-add-request/client-add-request.component.ts");
    /* harmony import */


    var _client_client_dashboard_main_client_dashboard_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./client/client-dashboard-main/client-dashboard-main.component */
    "./src/app/client/client-dashboard-main/client-dashboard-main.component.ts");
    /* harmony import */


    var _admin_components_dashboard_customers_customers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin-components/dashboard/customers/customers.component */
    "./src/app/admin-components/dashboard/customers/customers.component.ts");
    /* harmony import */


    var _admin_components_dashboard_requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin-components/dashboard/requests-list/requests-list.component */
    "./src/app/admin-components/dashboard/requests-list/requests-list.component.ts");
    /* harmony import */


    var _admin_components_dashboard_info_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin-components/dashboard/info/info.component */
    "./src/app/admin-components/dashboard/info/info.component.ts");
    /* harmony import */


    var _client_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./client/forgot-password/forgot-password.component */
    "./src/app/client/forgot-password/forgot-password.component.ts");

    var routes = [{
      path: 'admin',
      children: [{
        path: '',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        component: _admin_components_dashboard_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["MainDashboardComponent"],
        children: [{
          path: '',
          pathMatch: 'full',
          component: _admin_components_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
          canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'sms',
          component: _admin_components_dashboard_sms_sms_component__WEBPACK_IMPORTED_MODULE_7__["SmsComponent"],
          canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'customers',
          component: _admin_components_dashboard_customers_customers_component__WEBPACK_IMPORTED_MODULE_16__["CustomersComponent"],
          canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'requests',
          component: _admin_components_dashboard_requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_17__["RequestsListComponent"],
          canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'info',
          component: _admin_components_dashboard_info_info_component__WEBPACK_IMPORTED_MODULE_18__["InfoComponent"],
          canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }]
      }, {
        path: 'login',
        pathMatch: 'full',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }]
    }, {
      path: '',
      component: _client_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    }, {
      path: 'client',
      component: _client_client_main_client_main_component__WEBPACK_IMPORTED_MODULE_8__["ClientMainComponent"],
      children: [{
        path: '',
        component: _client_client_dashboard_main_client_dashboard_main_component__WEBPACK_IMPORTED_MODULE_15__["ClientDashboardMainComponent"],
        children: [{
          path: '',
          pathMatch: 'full',
          component: _client_client_dashboard_main_client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["ClientDashboardComponent"],
          canActivate: [_client_client_auth_guard__WEBPACK_IMPORTED_MODULE_9__["ClientAuthGuard"]]
        }, {
          path: 'profile',
          component: _client_client_dashboard_main_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_13__["ClientProfileComponent"],
          canActivate: [_client_client_auth_guard__WEBPACK_IMPORTED_MODULE_9__["ClientAuthGuard"]]
        }, {
          path: 'addRequest',
          component: _client_client_dashboard_main_client_add_request_client_add_request_component__WEBPACK_IMPORTED_MODULE_14__["ClientAddRequestComponent"],
          canActivate: [_client_client_auth_guard__WEBPACK_IMPORTED_MODULE_9__["ClientAuthGuard"]]
        }, {
          path: 'editRequest/:requestId',
          component: _client_client_dashboard_main_client_add_request_client_add_request_component__WEBPACK_IMPORTED_MODULE_14__["ClientAddRequestComponent"],
          canActivate: [_client_client_auth_guard__WEBPACK_IMPORTED_MODULE_9__["ClientAuthGuard"]]
        }]
      }, {
        path: 'signup',
        component: _client_client_signup_client_signup_component__WEBPACK_IMPORTED_MODULE_12__["ClientSignupComponent"]
      }, {
        path: 'login',
        component: _client_client_login_client_login_component__WEBPACK_IMPORTED_MODULE_11__["ClientLoginComponent"]
      }, {
        path: 'forgotPassword',
        component: _client_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _client_client_auth_guard__WEBPACK_IMPORTED_MODULE_9__["ClientAuthGuard"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _client_client_auth_guard__WEBPACK_IMPORTED_MODULE_9__["ClientAuthGuard"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _admin_components_repair_repair_list_repair_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-components/repair/repair-list/repair-list.component */
    "./src/app/admin-components/repair/repair-list/repair-list.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _admin_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-components/header/header.component */
    "./src/app/admin-components/header/header.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _admin_components_repair_repair_details_repair_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./admin-components/repair/repair-details/repair-details.component */
    "./src/app/admin-components/repair/repair-details/repair-details.component.ts");
    /* harmony import */


    var _admin_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./admin-components/admin/admin.component */
    "./src/app/admin-components/admin/admin.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _admin_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./admin-components/add-customer/add-customer.component */
    "./src/app/admin-components/add-customer/add-customer.component.ts");
    /* harmony import */


    var _utils_components_input_error_input_error_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./utils-components/input-error/input-error.component */
    "./src/app/utils-components/input-error/input-error.component.ts");
    /* harmony import */


    var _admin_components_repair_add_repair_add_repair_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./admin-components/repair/add-repair/add-repair.component */
    "./src/app/admin-components/repair/add-repair/add-repair.component.ts");
    /* harmony import */


    var _utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./utils-components/dialog-message/dialog-message.component */
    "./src/app/utils-components/dialog-message/dialog-message.component.ts");
    /* harmony import */


    var _admin_components_pick_customer_pick_customer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./admin-components/pick-customer/pick-customer.component */
    "./src/app/admin-components/pick-customer/pick-customer.component.ts");
    /* harmony import */


    var _admin_components_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./admin-components/add-device/add-device.component */
    "./src/app/admin-components/add-device/add-device.component.ts");
    /* harmony import */


    var _client_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./client/main-page/main-page.component */
    "./src/app/client/main-page/main-page.component.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./auth/auth-interceptor */
    "./src/app/auth/auth-interceptor.ts");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _admin_components_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./admin-components/dashboard/dashboard/dashboard.component */
    "./src/app/admin-components/dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _admin_components_dashboard_charts_vertical_bars_vertical_bars_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./admin-components/dashboard/charts/vertical-bars/vertical-bars.component */
    "./src/app/admin-components/dashboard/charts/vertical-bars/vertical-bars.component.ts");
    /* harmony import */


    var _admin_components_dashboard_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./admin-components/dashboard/main-dashboard/main-dashboard.component */
    "./src/app/admin-components/dashboard/main-dashboard/main-dashboard.component.ts");
    /* harmony import */


    var _admin_components_dashboard_sms_sms_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./admin-components/dashboard/sms/sms.component */
    "./src/app/admin-components/dashboard/sms/sms.component.ts");
    /* harmony import */


    var _utils_components_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./utils-components/phone-auth/phone-auth.component */
    "./src/app/utils-components/phone-auth/phone-auth.component.ts");
    /* harmony import */


    var _client_client_main_client_main_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./client/client-main/client-main.component */
    "./src/app/client/client-main/client-main.component.ts");
    /* harmony import */


    var _client_client_phone_auth_client_phone_auth_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./client/client-phone-auth/client-phone-auth.component */
    "./src/app/client/client-phone-auth/client-phone-auth.component.ts");
    /* harmony import */


    var _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./utils-components/normal-input-error/normal-input-error.component */
    "./src/app/utils-components/normal-input-error/normal-input-error.component.ts");
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./error-interceptor */
    "./src/app/error-interceptor.ts");
    /* harmony import */


    var _utils_components_phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./utils-components/phone-auth/phone-auth.service */
    "./src/app/utils-components/phone-auth/phone-auth.service.ts");
    /* harmony import */


    var _client_client_dashboard_main_client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./client/client-dashboard-main/client-dashboard/client-dashboard.component */
    "./src/app/client/client-dashboard-main/client-dashboard/client-dashboard.component.ts");
    /* harmony import */


    var _client_client_login_client_login_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./client/client-login/client-login.component */
    "./src/app/client/client-login/client-login.component.ts");
    /* harmony import */


    var _client_client_signup_client_signup_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./client/client-signup/client-signup.component */
    "./src/app/client/client-signup/client-signup.component.ts");
    /* harmony import */


    var _client_services_client_auth_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./client/services/client-auth.service */
    "./src/app/client/services/client-auth.service.ts");
    /* harmony import */


    var _client_client_dashboard_main_client_add_request_client_add_request_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./client/client-dashboard-main/client-add-request/client-add-request.component */
    "./src/app/client/client-dashboard-main/client-add-request/client-add-request.component.ts");
    /* harmony import */


    var _client_client_dashboard_main_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./client/client-dashboard-main/client-profile/client-profile.component */
    "./src/app/client/client-dashboard-main/client-profile/client-profile.component.ts");
    /* harmony import */


    var _client_client_dashboard_main_client_dashboard_main_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./client/client-dashboard-main/client-dashboard-main.component */
    "./src/app/client/client-dashboard-main/client-dashboard-main.component.ts");
    /* harmony import */


    var _admin_components_dashboard_customers_customers_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./admin-components/dashboard/customers/customers.component */
    "./src/app/admin-components/dashboard/customers/customers.component.ts");
    /* harmony import */


    var _admin_components_dashboard_requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./admin-components/dashboard/requests-list/requests-list.component */
    "./src/app/admin-components/dashboard/requests-list/requests-list.component.ts");
    /* harmony import */


    var _directives_class_directive_directive__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./directives/class-directive.directive */
    "./src/app/directives/class-directive.directive.ts");
    /* harmony import */


    var _utils_components_bootstrap_dialog_bootstrap_dialog_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./utils-components/bootstrap-dialog/bootstrap-dialog.component */
    "./src/app/utils-components/bootstrap-dialog/bootstrap-dialog.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _utils_components_edit_customer_dialog_edit_customer_dialog_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./utils-components/edit-customer-dialog/edit-customer-dialog.component */
    "./src/app/utils-components/edit-customer-dialog/edit-customer-dialog.component.ts");
    /* harmony import */


    var _admin_components_dashboard_info_info_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./admin-components/dashboard/info/info.component */
    "./src/app/admin-components/dashboard/info/info.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _utils_components_edit_phone_dialog_edit_phone_dialog_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! ./utils-components/edit-phone-dialog/edit-phone-dialog.component */
    "./src/app/utils-components/edit-phone-dialog/edit-phone-dialog.component.ts");
    /* harmony import */


    var _client_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! ./client/forgot-password/forgot-password.component */
    "./src/app/client/forgot-password/forgot-password.component.ts");

    var config = {
      url: 'https://smart-phone-baqa.com/api/',
      options: {}
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_38__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_48__["ErrorInterceptor"],
        multi: true
      }, _utils_components_phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_49__["PhoneAuthService"], _client_services_client_auth_service__WEBPACK_IMPORTED_MODULE_53__["ClientAuthService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_39__["NgxChartsModule"], //SocketIoModule.forRoot(config),
      _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_65__["NgbModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_61__["ModalModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_64__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _admin_components_repair_repair_list_repair_list_component__WEBPACK_IMPORTED_MODULE_4__["RepairListComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _admin_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _admin_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_31__["AddCustomerComponent"], _admin_components_repair_repair_details_repair_details_component__WEBPACK_IMPORTED_MODULE_28__["RepairDetailsComponent"], _admin_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_29__["AdminComponent"], _utils_components_input_error_input_error_component__WEBPACK_IMPORTED_MODULE_32__["InputErrorComponent"], _admin_components_repair_add_repair_add_repair_component__WEBPACK_IMPORTED_MODULE_33__["AddRepairComponent"], _utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_34__["DialogMessageComponent"], _admin_components_pick_customer_pick_customer_component__WEBPACK_IMPORTED_MODULE_35__["PickCustomerComponent"], _admin_components_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_36__["AddDeviceComponent"], _client_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_37__["MainPageComponent"], _admin_components_dashboard_requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_58__["RequestsListComponent"], _admin_components_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_40__["DashboardComponent"], _admin_components_dashboard_charts_vertical_bars_vertical_bars_component__WEBPACK_IMPORTED_MODULE_41__["VerticalBarsComponent"], _admin_components_dashboard_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_42__["MainDashboardComponent"], _admin_components_dashboard_sms_sms_component__WEBPACK_IMPORTED_MODULE_43__["SmsComponent"], _utils_components_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_44__["PhoneAuthComponent"], _client_client_main_client_main_component__WEBPACK_IMPORTED_MODULE_45__["ClientMainComponent"], _client_client_phone_auth_client_phone_auth_component__WEBPACK_IMPORTED_MODULE_46__["ClientPhoneAuthComponent"], _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_47__["NormalInputErrorComponent"], _client_client_dashboard_main_client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_50__["ClientDashboardComponent"], _client_client_login_client_login_component__WEBPACK_IMPORTED_MODULE_51__["ClientLoginComponent"], _client_client_signup_client_signup_component__WEBPACK_IMPORTED_MODULE_52__["ClientSignupComponent"], _client_client_dashboard_main_client_add_request_client_add_request_component__WEBPACK_IMPORTED_MODULE_54__["ClientAddRequestComponent"], _client_client_dashboard_main_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_55__["ClientProfileComponent"], _client_client_dashboard_main_client_dashboard_main_component__WEBPACK_IMPORTED_MODULE_56__["ClientDashboardMainComponent"], _admin_components_dashboard_customers_customers_component__WEBPACK_IMPORTED_MODULE_57__["CustomersComponent"], _directives_class_directive_directive__WEBPACK_IMPORTED_MODULE_59__["ClassDirectiveDirective"], _utils_components_bootstrap_dialog_bootstrap_dialog_component__WEBPACK_IMPORTED_MODULE_60__["BootstrapDialogComponent"], _utils_components_edit_customer_dialog_edit_customer_dialog_component__WEBPACK_IMPORTED_MODULE_62__["EditCustomerDialogComponent"], _admin_components_dashboard_info_info_component__WEBPACK_IMPORTED_MODULE_63__["InfoComponent"], _utils_components_edit_phone_dialog_edit_phone_dialog_component__WEBPACK_IMPORTED_MODULE_66__["EditPhoneDialogComponent"], _client_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_67__["ForgotPasswordComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_39__["NgxChartsModule"], //SocketIoModule.forRoot(config),
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_65__["NgbModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_61__["ModalModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_64__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _admin_components_repair_repair_list_repair_list_component__WEBPACK_IMPORTED_MODULE_4__["RepairListComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _admin_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _admin_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_31__["AddCustomerComponent"], _admin_components_repair_repair_details_repair_details_component__WEBPACK_IMPORTED_MODULE_28__["RepairDetailsComponent"], _admin_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_29__["AdminComponent"], _utils_components_input_error_input_error_component__WEBPACK_IMPORTED_MODULE_32__["InputErrorComponent"], _admin_components_repair_add_repair_add_repair_component__WEBPACK_IMPORTED_MODULE_33__["AddRepairComponent"], _utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_34__["DialogMessageComponent"], _admin_components_pick_customer_pick_customer_component__WEBPACK_IMPORTED_MODULE_35__["PickCustomerComponent"], _admin_components_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_36__["AddDeviceComponent"], _client_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_37__["MainPageComponent"], _admin_components_dashboard_requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_58__["RequestsListComponent"], _admin_components_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_40__["DashboardComponent"], _admin_components_dashboard_charts_vertical_bars_vertical_bars_component__WEBPACK_IMPORTED_MODULE_41__["VerticalBarsComponent"], _admin_components_dashboard_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_42__["MainDashboardComponent"], _admin_components_dashboard_sms_sms_component__WEBPACK_IMPORTED_MODULE_43__["SmsComponent"], _utils_components_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_44__["PhoneAuthComponent"], _client_client_main_client_main_component__WEBPACK_IMPORTED_MODULE_45__["ClientMainComponent"], _client_client_phone_auth_client_phone_auth_component__WEBPACK_IMPORTED_MODULE_46__["ClientPhoneAuthComponent"], _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_47__["NormalInputErrorComponent"], _client_client_dashboard_main_client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_50__["ClientDashboardComponent"], _client_client_login_client_login_component__WEBPACK_IMPORTED_MODULE_51__["ClientLoginComponent"], _client_client_signup_client_signup_component__WEBPACK_IMPORTED_MODULE_52__["ClientSignupComponent"], _client_client_dashboard_main_client_add_request_client_add_request_component__WEBPACK_IMPORTED_MODULE_54__["ClientAddRequestComponent"], _client_client_dashboard_main_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_55__["ClientProfileComponent"], _client_client_dashboard_main_client_dashboard_main_component__WEBPACK_IMPORTED_MODULE_56__["ClientDashboardMainComponent"], _admin_components_dashboard_customers_customers_component__WEBPACK_IMPORTED_MODULE_57__["CustomersComponent"], _directives_class_directive_directive__WEBPACK_IMPORTED_MODULE_59__["ClassDirectiveDirective"], _utils_components_bootstrap_dialog_bootstrap_dialog_component__WEBPACK_IMPORTED_MODULE_60__["BootstrapDialogComponent"], _utils_components_edit_customer_dialog_edit_customer_dialog_component__WEBPACK_IMPORTED_MODULE_62__["EditCustomerDialogComponent"], _admin_components_dashboard_info_info_component__WEBPACK_IMPORTED_MODULE_63__["InfoComponent"], _utils_components_edit_phone_dialog_edit_phone_dialog_component__WEBPACK_IMPORTED_MODULE_66__["EditPhoneDialogComponent"], _client_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_67__["ForgotPasswordComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_39__["NgxChartsModule"], //SocketIoModule.forRoot(config),
          _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_65__["NgbModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_61__["ModalModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_64__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_38__["AuthInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_48__["ErrorInterceptor"],
            multi: true
          }, _utils_components_phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_49__["PhoneAuthService"], _client_services_client_auth_service__WEBPACK_IMPORTED_MODULE_53__["ClientAuthService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          entryComponents: [_admin_components_pick_customer_pick_customer_component__WEBPACK_IMPORTED_MODULE_35__["PickCustomerComponent"], _utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_34__["DialogMessageComponent"], _admin_components_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_36__["AddDeviceComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth-interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth-interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../admin-components/services/auth.service */
    "./src/app/admin-components/services/auth.service.ts");
    /* harmony import */


    var _client_services_client_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../client/services/client-auth.service */
    "./src/app/client/services/client-auth.service.ts");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService, clietAuthService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
        this.clietAuthService = clietAuthService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = this.authService.getToken() ? this.authService.getToken() : this.clietAuthService.getToken();
          var authReq = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + token)
          });
          return next.handle(authReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_client_services_client_auth_service__WEBPACK_IMPORTED_MODULE_2__["ClientAuthService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _client_services_client_auth_service__WEBPACK_IMPORTED_MODULE_2__["ClientAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../admin-components/services/auth.service */
    "./src/app/admin-components/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivateChild",
        value: function canActivateChild(childRoute, state) {
          return true;
        }
      }, {
        key: "canActivate",
        value: function canActivate(next, state) {
          this.authService.autoAuthUser();
          var isAuth = this.authService.getIsAuthenticated();

          if (!isAuth) {
            this.router.navigate(['admin/login']);
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/admin-components/services/auth.service */
    "./src/app/admin-components/services/auth.service.ts");
    /* harmony import */


    var _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils-components/normal-input-error/normal-input-error.component */
    "./src/app/utils-components/normal-input-error/normal-input-error.component.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function LoginComponent_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.onLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062F\u062E\u0648\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_spinner_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.isLoading = false;
        this.isAuthenticated = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.authService.autoAuthUser(true);
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            'keepMeLogedIn': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true)
          });
          this.authListenerSubs = this.authService.getIsAuthenticatedListener().subscribe(function (isAuthintecated) {
            _this25.isAuthenticated = isAuthintecated;
            _this25.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a;

          (_a = this.authListenerSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          if (this.form.invalid) {
            return;
          }

          this.isLoading = true;
          this.authService.login(this.form.value.phone, this.form.value.password, this.form.value.keepMeLogedIn);
          this.form.reset();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 22,
      vars: 3,
      consts: [[1, "box", "align"], [1, "login-container"], [1, "form-containe"], [3, "formGroup"], [1, "align-inputs"], [1, "input-container"], ["placeholder", "000-0000000", "formControlName", "phone", "name", "phoneNumber", "type", "tel"], ["placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", "formControlName", "password", "type", "password"], ["formControlName", "keepMeLogedIn"], ["class", "green-button", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "green-button", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-normal-input-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-normal-input-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-checkbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0627\u0628\u0642\u0646\u064A \u0645\u062A\u0635\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_button_20_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_mat_spinner_21_Template, 1, 0, "mat-spinner", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_3__["NormalInputErrorComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]],
      styles: [".box[_ngcontent-%COMP%] {\r\n  min-height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  -webkit-animation: 0.5s moveIn;\r\n          animation: 0.5s moveIn;\r\n}\r\n\r\n.align[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 60%;\r\n  background: #2b353e;\r\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: right;\r\n  background: #60bb46;\r\n  padding: 1rem 1rem 0.5rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n  font-family: \"Cairo\", sans-serif;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .form-containe[_ngcontent-%COMP%] {\r\n  background: #f9f9f9;\r\n  min-height: 50vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .align-inputs[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\r\n  align-self: flex-end;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  align-self: flex-end;\r\n  margin: 0;\r\n}\r\n\r\napp-normal-input-error[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  align-self: flex-start;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #e8f0fe;\r\n  border: 0;\r\n  padding: 8px 10px;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .form-containe[_ngcontent-%COMP%]   .form-links[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .form-containe[_ngcontent-%COMP%]   .form-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  color: #333;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 0.7rem 3rem;\r\n  margin-top: 3rem;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"password\"][_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bold;\r\n  font-size: 1.3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSx5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFuaW1hdGlvbjogMC41cyBtb3ZlSW47XHJcbn1cclxuXHJcbi5hbGlnbiB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5ib3ggLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNjAlO1xyXG4gIGJhY2tncm91bmQ6ICMyYjM1M2U7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciBoZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQ6ICM2MGJiNDY7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtIDAuNXJlbTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciBoZWFkZXIgaDEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmUge1xyXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5hbGlnbi1pbnB1dHMge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIG1hdC1jaGVja2JveCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIGZvcm0gLmlucHV0LWNvbnRhaW5lciBwIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmFwcC1ub3JtYWwtaW5wdXQtZXJyb3Ige1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgZm9ybSAuaW5wdXQtY29udGFpbmVyIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZThmMGZlO1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1jb250YWluZSAuZm9ybS1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmUgLmZvcm0tbGlua3MgcCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIGZvcm0gYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjdyZW0gM3JlbTtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/admin-components/services/auth.service */
    "./src/app/admin-components/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _utils_components_input_error_input_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../utils-components/input-error/input-error.component */
    "./src/app/utils-components/input-error/input-error.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function SignupComponent_mat_card_0_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r48)("errors", _r48.errors);
      }
    }

    function SignupComponent_mat_card_0_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r50)("errors", _r50.errors);
      }
    }

    function SignupComponent_mat_card_0_mat_error_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r52)("errors", _r52.errors);
      }
    }

    function SignupComponent_mat_card_0_mat_error_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r54)("errors", _r54.errors);
      }
    }

    function SignupComponent_mat_card_0_mat_error_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r56)("errors", _r56.errors);
      }
    }

    function SignupComponent_mat_card_0_mat_error_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controller", _r58)("errors", _r58.errors);
      }
    }

    function SignupComponent_mat_card_0_button_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_mat_card_0_mat_spinner_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function SignupComponent_mat_card_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignupComponent_mat_card_0_Template_form_submit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.onSingUp(_r47);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "E-mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignupComponent_mat_card_0_mat_error_8_Template, 2, 2, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignupComponent_mat_card_0_mat_error_14_Template, 2, 2, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignupComponent_mat_card_0_mat_error_20_Template, 2, 2, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Gender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-radio-group", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_mat_card_0_Template_mat_radio_group_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.selectedItem = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-radio-button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Male");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-radio-button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Female");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SignupComponent_mat_card_0_mat_error_30_Template, 2, 2, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SignupComponent_mat_card_0_mat_error_38_Template, 2, 2, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Validate Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SignupComponent_mat_card_0_Template_input_input_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.onValidatePassword(_r47);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, SignupComponent_mat_card_0_mat_error_46_Template, 2, 2, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SignupComponent_mat_card_0_button_47_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, SignupComponent_mat_card_0_mat_spinner_48_Template, 1, 0, "mat-spinner", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r48.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r50.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r52.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.selectedItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r54.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (_r56.value == null ? null : _r56.value.length) + "/16", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r56.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (_r58.value == null ? null : _r58.value.length) + "/16", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r58.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.isLoading);
      }
    }

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(authService) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
        this.isLoading = false;
        this.selectedItem = 'male';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.authStatusAuth = this.authService.getAuthStatusListener().subscribe(
          //   authStatus => {
          //     this.isLoading = false
          //   }
          // )
        }
      }, {
        key: "onValidatePassword",
        value: function onValidatePassword(form) {
          console.log(form.controls);
          var validatePassword = form.controls.validate_password;
          var password = form.controls.password;

          if (validatePassword.value !== password.value) {
            validatePassword.setErrors(Object.assign(Object.assign({}, validatePassword.errors), {
              passwordNotMatch: true
            }));
          }
        }
      }, {
        key: "onSingUp",
        value: function onSingUp(form) {
          this.onValidatePassword(form);

          if (form.invalid) {
            return;
          }

          this.isLoading = true;
          var user = {
            firstName: form.value.firstName,
            lastName: form.value.lastName,
            email: form.value.email,
            password: form.value.password,
            gender: form.value.gender
          };
          this.authService.onSignUp(user);
          form.reset();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a;

          (_a = this.authStatusAuth) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "submit"], ["signupForm", "ngForm"], ["matInput", "", "placeholder", "example@gmail.com", "type", "email", "name", "email", "ngModel", "", "required", "", "email", ""], ["emailInput", "ngModel"], ["matInput", "", "placeholder", "my name", "type", "text", "name", "firstName", "ngModel", "", "required", ""], ["firstNameInput", "ngModel"], ["matInput", "", "placeholder", "my name", "type", "text", "name", "lastName", "ngModel", "", "required", ""], ["lastNameInput", "ngModel"], [1, "center", "container", "wid"], ["name", "gender", "required", "", 1, "center", 3, "ngModel", "ngModelChange"], ["gender", "ngModel"], ["value", "male"], ["value", "female"], ["matInput", "", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", "type", "password", "name", "password", "ngModel", "", "required", "", "maxlength", "16", "minlength", "6"], ["passwordInput", "ngModel"], [1, "input-counter"], ["matInput", "", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", "type", "password", "name", "validate_password", "ngModel", "", "required", "", "maxlength", "16", "minlength", "6", 3, "input"], ["password2Input", "ngModel"], ["mat-raised-button", "", "color", "accent", "type", "submit", 4, "ngIf"], [3, "controller", "errors"], ["mat-raised-button", "", "color", "accent", "type", "submit"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignupComponent_mat_card_0_Template, 49, 11, "mat-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _utils_components_input_error_input_error_component__WEBPACK_IMPORTED_MODULE_8__["InputErrorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]],
      styles: ["form[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin:1rem 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  display: block;\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  margin-top: 4rem;\r\n}\r\n\r\nmat-radio-button[_ngcontent-%COMP%]{\r\n  margin-left: 1rem;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  translate: -50% -50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUdBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjoxcmVtIDA7XHJcbn1cclxuXHJcblxyXG5idXR0b257XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG59XHJcblxyXG5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG5cclxubWF0LWRpdmlkZXJ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJ1dHRvbiAsIG1hdC1mb3JtLWZpZWxkLC5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LXNwaW5uZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2xhdGU6IC01MCUgLTUwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: src_app_admin_components_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client-auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/client/client-auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: ClientAuthGuard */

  /***/
  function srcAppClientClientAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientAuthGuard", function () {
      return ClientAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_client_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/client-auth.service */
    "./src/app/client/services/client-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ClientAuthGuard =
    /*#__PURE__*/
    function () {
      function ClientAuthGuard(clientAuthService, router) {
        _classCallCheck(this, ClientAuthGuard);

        this.clientAuthService = clientAuthService;
        this.router = router;
      }

      _createClass(ClientAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          this.clientAuthService.autoAuthUser();
          var isAuth = this.clientAuthService.getIsAuthenticated();

          if (!isAuth) {
            return this.router.parseUrl('/client/login');
          }

          return true;
        }
      }]);

      return ClientAuthGuard;
    }();

    ClientAuthGuard.ɵfac = function ClientAuthGuard_Factory(t) {
      return new (t || ClientAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_client_auth_service__WEBPACK_IMPORTED_MODULE_1__["ClientAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ClientAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClientAuthGuard,
      factory: ClientAuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_client_auth_service__WEBPACK_IMPORTED_MODULE_1__["ClientAuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client-dashboard-main/client-add-request/client-add-request.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/client/client-dashboard-main/client-add-request/client-add-request.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ClientAddRequestComponent */

  /***/
  function srcAppClientClientDashboardMainClientAddRequestClientAddRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientAddRequestComponent", function () {
      return ClientAddRequestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/globalServices/cities.service */
    "./src/app/globalServices/cities.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_globalServices_companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/globalServices/companies.service */
    "./src/app/globalServices/companies.service.ts");
    /* harmony import */


    var src_app_globalServices_devices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/globalServices/devices.service */
    "./src/app/globalServices/devices.service.ts");
    /* harmony import */


    var src_app_globalServices_issues_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/globalServices/issues.service */
    "./src/app/globalServices/issues.service.ts");
    /* harmony import */


    var src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/globalServices/requests.service */
    "./src/app/globalServices/requests.service.ts");
    /* harmony import */


    var _utils_components_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../utils-components/validators */
    "./src/app/utils-components/validators.ts");
    /* harmony import */


    var _services_client_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/client-info.service */
    "./src/app/client/services/client-info.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_client_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/client-auth.service */
    "./src/app/client/services/client-auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../utils-components/normal-input-error/normal-input-error.component */
    "./src/app/utils-components/normal-input-error/normal-input-error.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function ClientAddRequestComponent_app_normal_input_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 25);
      }

      if (rf & 2) {
        var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r114.form.get("title").errors);
      }
    }

    function ClientAddRequestComponent_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r128 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", company_r128._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r128.name);
      }
    }

    function ClientAddRequestComponent_app_normal_input_error_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 27);
      }

      if (rf & 2) {
        var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r116.form.get("company").errors);
      }
    }

    function ClientAddRequestComponent_option_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var device_r129 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", device_r129._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](device_r129.model);
      }
    }

    function ClientAddRequestComponent_app_normal_input_error_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 28);
      }

      if (rf & 2) {
        var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r118.form.get("device").errors);
      }
    }

    function ClientAddRequestComponent_option_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var issue_r130 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", issue_r130._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r130.name);
      }
    }

    function ClientAddRequestComponent_app_normal_input_error_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 29);
      }

      if (rf & 2) {
        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r120.form.get("issue").errors);
      }
    }

    function ClientAddRequestComponent_div_41_app_normal_input_error_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 32);
      }

      if (rf & 2) {
        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r131.form.get("otherIssue").errors);
      }
    }

    function ClientAddRequestComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0645\u0634\u0643\u0644\u0629 \u0627\u062E\u0631\u0649");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClientAddRequestComponent_div_41_app_normal_input_error_4_Template, 1, 1, "app-normal-input-error", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r121.form.touched && ctx_r121.form.get("otherIssue").touched);
      }
    }

    function ClientAddRequestComponent_option_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r132 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r132._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r132.name);
      }
    }

    function ClientAddRequestComponent_app_normal_input_error_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 33);
      }

      if (rf & 2) {
        var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r123.form.get("city").errors);
      }
    }

    function ClientAddRequestComponent_app_normal_input_error_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 34);
      }

      if (rf & 2) {
        var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r124.form.get("whereAbout").errors);
      }
    }

    function ClientAddRequestComponent_h1_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r125.message);
      }
    }

    function ClientAddRequestComponent_div_56_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0639\u062F\u064A\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientAddRequestComponent_div_56_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0627\u0636\u0641 \u0637\u0644\u0628");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientAddRequestComponent_div_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClientAddRequestComponent_div_56_span_2_Template, 2, 0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClientAddRequestComponent_div_56_span_3_Template, 2, 0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.mode == "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.mode == "add");
      }
    }

    function ClientAddRequestComponent_mat_spinner_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    var ClientAddRequestComponent =
    /*#__PURE__*/
    function () {
      function ClientAddRequestComponent(route, citiesService, comapniesService, requestsService, clientAuthService, issuesService, deviceService) {
        var _this26 = this;

        _classCallCheck(this, ClientAddRequestComponent);

        this.route = route;
        this.citiesService = citiesService;
        this.comapniesService = comapniesService;
        this.requestsService = requestsService;
        this.clientAuthService = clientAuthService;
        this.issuesService = issuesService;
        this.deviceService = deviceService;
        this.isLoading = false;
        this.mode = 'add';
        this.message = null;

        this.issueCheck = function (control) {
          var frObs = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var _a, _b;

            var value = control.value;

            if (((_a = _this26.form) === null || _a === void 0 ? void 0 : _a.get('issue').value) === '1') {
              if (!/^([a-z\u0590-\u05fe\u0621-\u064A]+\s)*[a-z\u0590-\u05fe\u0621-\u064A]+$/.test(value)) {
                observer.next({
                  text: true
                });
              } else if (((_b = value) === null || _b === void 0 ? void 0 : _b.length) === 0 || !value) {
                observer.next({
                  required: true
                });
              } else {
                observer.next(null);
              }
            } else {
              observer.next(null);
            }

            observer.complete();
          });
          return frObs;
        };
      }

      _createClass(ClientAddRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          this.setUpListeners();
        }
      }, {
        key: "setUpListeners",
        value: function setUpListeners() {
          var _this27 = this;

          this.checkIfHasParam();
          this.citiesService.getCites();
          this.citiesSub = this.citiesService.getCitiesListener().subscribe(function (cities) {
            _this27.cities = cities;
          });
          this.comapniesService.getCompanies();
          this.companiesSub = this.comapniesService.getCompaniesListener().subscribe(function (companies) {
            _this27.companies = companies;
            _this27.devices = null;
          });
          this.deviceSub = this.deviceService.getDevicesListener().subscribe(function (devices) {
            if (!_this27.devices) _this27.devices = devices;
          });
          this.issuesService.getIssues();
          this.issuesSub = this.issuesService.getIssuesListener().subscribe(function (issues) {
            _this27.issues = issues;
          });
        }
      }, {
        key: "checkIfHasParam",
        value: function checkIfHasParam() {
          var _this28 = this;

          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('requestId')) {
              _this28.mode = 'edit';
              _this28.requestId = paramMap.get('requestId');
              _this28.isLoading = true;

              _this28.requestsService.getRequestById(_this28.requestId);

              _this28.requestSub = _this28.requestsService.getRequestListener().subscribe(function (res) {
                _this28.deviceService.getDevicesByCompanyId(res.company._id);

                _this28.request = res;

                _this28.resetingForm(res);

                _this28.isLoading = false;
              });
            } else {
              _this28.mode = 'add';
            }
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_8__["textCheck"]]
            }),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('-1', {
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_8__["selectInput"]]
            }),
            device: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('-1', {
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_8__["selectInput"]]
            }),
            issue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('-1', {
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_8__["selectInput"]]
            }),
            otherIssue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              asyncValidators: [this.issueCheck]
            }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('-1', {
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_8__["selectInput"]]
            }),
            whereAbout: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_8__["textCheck"]]
            })
          });
        }
      }, {
        key: "onChangeIssue",
        value: function onChangeIssue() {
          var _a, _b, _c;

          var issue = (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('issue');
          var otherIssue = (_b = this.form) === null || _b === void 0 ? void 0 : _b.get('otherIssue');

          if (((_c = issue) === null || _c === void 0 ? void 0 : _c.value) !== '1') {
            otherIssue.setErrors(null);
          }

          console.log(otherIssue);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a, _b, _c, _d, _e;

          (_a = this.citiesSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          (_b = this.companiesSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
          (_c = this.deviceSub) === null || _c === void 0 ? void 0 : _c.unsubscribe();
          (_d = this.issuesSub) === null || _d === void 0 ? void 0 : _d.unsubscribe();
          (_e = this.requestSub) === null || _e === void 0 ? void 0 : _e.unsubscribe();
          clearTimeout(this.messageTimer);
        }
      }, {
        key: "onSelectCompany",
        value: function onSelectCompany() {
          this.devices = null;
          this.form.get('device').setValue('-1');
          this.deviceService.getDevicesByCompanyId(this.form.get('company').value);
        }
      }, {
        key: "resetingForm",
        value: function resetingForm() {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (!data) {
            this.form.setValue({
              'company': '-1',
              'device': '-1',
              'issue': '-1',
              'city': '-1',
              'title': null,
              'whereAbout': null,
              'otherIssue': null
            });
            return;
          }

          this.form.setValue({
            'title': data.title,
            'company': data.company._id,
            'device': data.device._id,
            'issue': data.issue ? data.issue._id : '1',
            'city': data.city._id,
            'otherIssue': data.otherIssue,
            'whereAbout': data.whereAbout
          });
        }
      }, {
        key: "onAddingRequest",
        value: function onAddingRequest(userId) {
          var _this29 = this;

          var issue = this.form.get('issue').value;
          var request = {
            title: this.form.get('title').value,
            company: this.form.get('company').value,
            device: this.form.get('device').value,
            customer: userId,
            issue: issue === '1' ? null : issue,
            otherIssue: this.form.get('otherIssue').value,
            city: this.form.get('city').value,
            whereAbout: this.form.get('whereAbout').value
          };

          var success = function success() {
            _this29.isLoading = false;
            _this29.message = 'تم قبول طلبك بنجاح';

            _this29.startTimer();

            _this29.form.reset();

            _this29.resetingForm();
          };

          var error = function error() {
            _this29.isLoading = false;
          };

          this.requestsService.addRequest(request, error, success);
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this30 = this;

          this.messageTimer = setTimeout(function () {
            _this30.message = null;
          }, 3000);
        }
      }, {
        key: "onUpdatingRequest",
        value: function onUpdatingRequest() {
          var _this31 = this;

          var _a;

          var updateOps = [];
          var hash = Object.keys(this.form.value).map(function (name) {
            return {
              name: name,
              value: _this31.form.value[name]
            };
          });

          for (var i = 0, k = 0; i < hash.length; i++) {
            if (hash[i].value != this.request[hash[i].name] && hash[i].value != ((_a = this.request[hash[i].name]) === null || _a === void 0 ? void 0 : _a._id)) {
              if (hash[i].name === 'issue' && hash[i].value === '1') {
                hash[i].value = null;
              } else {
                updateOps[k++] = {
                  'name': hash[i].name,
                  'value': hash[i].value
                };
              }
            }
          }

          console.log('update', updateOps);
          if (updateOps.length > 0) this.requestsService.updateReuqest(this.requestId, updateOps).subscribe(function (res) {
            _this31.startTimer();

            _this31.isLoading = false;
            _this31.message = 'تم التعديل بنجاح';

            _this31.requestsService.getRequestById(_this31.requestId);
          });else {
            this.isLoading = false;
            this.startTimer();
            this.message = 'لم تقم بتعديل اي حقل';
          }
        }
      }, {
        key: "onAddingUpdatingRequest",
        value: function onAddingUpdatingRequest() {
          this.form.markAllAsTouched();
          this.form.markAsTouched();

          if (this.form.invalid) {
            console.log(this.form);
            return;
          }

          var userId = this.clientAuthService.getUser()._id;

          if (!userId) return;
          this.isLoading = true;

          if (this.mode === 'edit') {
            this.onUpdatingRequest();
          } else {
            this.onAddingRequest(userId);
          }
        }
      }]);

      return ClientAddRequestComponent;
    }();

    ClientAddRequestComponent.ɵfac = function ClientAddRequestComponent_Factory(t) {
      return new (t || ClientAddRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_7__["RequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_auth_service__WEBPACK_IMPORTED_MODULE_11__["ClientAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_issues_service__WEBPACK_IMPORTED_MODULE_6__["IssuesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"]));
    };

    ClientAddRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientAddRequestComponent,
      selectors: [["app-client-add-request"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"], src_app_globalServices_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"], src_app_globalServices_issues_service__WEBPACK_IMPORTED_MODULE_6__["IssuesService"], src_app_globalServices_devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"], src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_7__["RequestsService"], _services_client_info_service__WEBPACK_IMPORTED_MODULE_9__["ClientInfoService"]])],
      decls: 59,
      vars: 16,
      consts: [[1, "main-container"], [1, "dash-board-header"], [1, "dashboard-card"], [1, "card-header"], [3, "formGroup", "submit"], [1, "input-container"], ["formControlName", "title", "type", "text"], ["name", "title", 3, "errors", 4, "ngIf"], ["formControlName", "company", 3, "change"], ["value", "-1"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "company", 3, "errors", 4, "ngIf"], ["formControlName", "device"], ["name", "device", 3, "errors", 4, "ngIf"], ["formControlName", "issue", 3, "change"], ["value", "1"], ["name", "issue", 3, "errors", 4, "ngIf"], ["class", "input-container", 4, "ngIf"], ["formControlName", "city"], ["name", "city", 3, "errors", 4, "ngIf"], ["formControlName", "whereAbout", "type", "text"], ["name", "where about", 3, "errors", 4, "ngIf"], [4, "ngIf"], ["class", "form-button", 4, "ngIf"], [1, "spinner"], ["name", "title", 3, "errors"], [3, "value"], ["name", "company", 3, "errors"], ["name", "device", 3, "errors"], ["name", "issue", 3, "errors"], ["formControlName", "otherIssue", "rows", "10"], ["name", "other issue", 3, "errors", 4, "ngIf"], ["name", "other issue", 3, "errors"], ["name", "city", 3, "errors"], ["name", "where about", 3, "errors"], [1, "form-button"], [1, "green-button"]],
      template: function ClientAddRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0633\u0645\u0627\u0631\u062A \u0641\u0648\u0646 \u0644\u0639\u0646\u062F\u0643");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0642\u0645 \u0628\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u0644\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ClientAddRequestComponent_Template_form_submit_8_listener() {
            return ctx.onAddingUpdatingRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0637\u0644\u0628");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClientAddRequestComponent_app_normal_input_error_13_Template, 1, 1, "app-normal-input-error", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0646\u0648\u0639 \u0634\u0631\u0643\u0629 \u0627\u0644\u062C\u0647\u0627\u0632");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientAddRequestComponent_Template_select_change_17_listener() {
            return ctx.onSelectCompany();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0634\u0631\u0643\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClientAddRequestComponent_option_20_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ClientAddRequestComponent_app_normal_input_error_21_Template, 1, 1, "app-normal-input-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0646\u0648\u0639 \u0627\u0644\u062C\u0647\u0627\u0632");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u0648\u0639");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ClientAddRequestComponent_option_28_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ClientAddRequestComponent_app_normal_input_error_30_Template, 1, 1, "app-normal-input-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0627\u0644\u0645\u0634\u0643\u0644\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientAddRequestComponent_Template_select_change_34_listener() {
            return ctx.onChangeIssue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0634\u0643\u0644\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ClientAddRequestComponent_option_37_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0645\u0634\u0643\u0644\u0629 \u0627\u062E\u0631\u0649");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ClientAddRequestComponent_app_normal_input_error_40_Template, 1, 1, "app-normal-input-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ClientAddRequestComponent_div_41_Template, 5, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062F\u064A\u0646\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ClientAddRequestComponent_option_48_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ClientAddRequestComponent_app_normal_input_error_49_Template, 1, 1, "app-normal-input-error", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0645\u0643\u0627\u0646 \u0627\u0644\u062A\u0648\u0627\u062C\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ClientAddRequestComponent_app_normal_input_error_54_Template, 1, 1, "app-normal-input-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ClientAddRequestComponent_h1_55_Template, 2, 1, "h1", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ClientAddRequestComponent_div_56_Template, 4, 2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ClientAddRequestComponent_mat_spinner_58_Template, 1, 0, "mat-spinner", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched && ctx.form.get("title").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched && ctx.form.get("company").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.devices);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.form.get("device").updateValueAndValidity(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched && ctx.form.get("device").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.issues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched && ctx.form.get("issue").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("issue").value && ctx.form.get("issue").value == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched && ctx.form.get("city").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched && ctx.form.get("whereAbout").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_13__["NormalInputErrorComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"]],
      styles: [".dash-board-header[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  padding: 2rem 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  margin-bottom: 1rem;\r\n  min-width: 50%;\r\n\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  border: 2px solid #cecece;\r\n  padding: 0 3rem;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-button[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1kYXNoYm9hcmQtbWFpbi9jbGllbnQtYWRkLXJlcXVlc3QvY2xpZW50LWFkZC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjOztBQUVoQjs7QUFFQTs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtZGFzaGJvYXJkLW1haW4vY2xpZW50LWFkZC1yZXF1ZXN0L2NsaWVudC1hZGQtcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2gtYm9hcmQtaGVhZGVye1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgLmNhcmQtaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuXHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgZm9ybSB7XHJcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtaW4td2lkdGg6IDUwJTtcclxuXHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCBmb3JtIC5pbnB1dC1jb250YWluZXIgaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgZm9ybSAuaW5wdXQtY29udGFpbmVyIHNlbGVjdCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NlY2VjZTtcclxuICBwYWRkaW5nOiAwIDNyZW07XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCBmb3JtIC5pbnB1dC1jb250YWluZXIgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgZm9ybSAuZm9ybS1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCAuc3Bpbm5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgLnNwaW5uZXIgbWF0LXNwaW5uZXJ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientAddRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-add-request',
          templateUrl: './client-add-request.component.html',
          styleUrls: ['./client-add-request.component.css'],
          providers: [src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"], src_app_globalServices_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"], src_app_globalServices_issues_service__WEBPACK_IMPORTED_MODULE_6__["IssuesService"], src_app_globalServices_devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"], src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_7__["RequestsService"], _services_client_info_service__WEBPACK_IMPORTED_MODULE_9__["ClientInfoService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"]
        }, {
          type: src_app_globalServices_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"]
        }, {
          type: src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_7__["RequestsService"]
        }, {
          type: _services_client_auth_service__WEBPACK_IMPORTED_MODULE_11__["ClientAuthService"]
        }, {
          type: src_app_globalServices_issues_service__WEBPACK_IMPORTED_MODULE_6__["IssuesService"]
        }, {
          type: src_app_globalServices_devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client-dashboard-main/client-dashboard-main.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/client/client-dashboard-main/client-dashboard-main.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ClientDashboardMainComponent */

  /***/
  function srcAppClientClientDashboardMainClientDashboardMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientDashboardMainComponent", function () {
      return ClientDashboardMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/utils-components/dialog-message/dialog-message.component */
    "./src/app/utils-components/dialog-message/dialog-message.component.ts");
    /* harmony import */


    var _services_client_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/client-auth.service */
    "./src/app/client/services/client-auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var ClientDashboardMainComponent =
    /*#__PURE__*/
    function () {
      function ClientDashboardMainComponent(clietAuthService, dialog) {
        _classCallCheck(this, ClientDashboardMainComponent);

        this.clietAuthService = clietAuthService;
        this.dialog = dialog;
      }

      _createClass(ClientDashboardMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.user = this.clietAuthService.getUser();
          this.userListener = this.clietAuthService.getUserListener().subscribe(function (res) {
            _this32.user = res;
          });
        }
      }, {
        key: "onLogOut",
        value: function onLogOut() {
          var _this33 = this;

          var confirm = function confirm() {
            _this33.clietAuthService.logout();

            _this33.dialog.closeAll();
          };

          this.dialog.open(src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_1__["DialogMessageComponent"], {
            data: {
              buttons: true,
              confirm: confirm,
              message: 'هل أنت متاكد لتسجيل الخروج ؟',
              title: 'تسجيل الخروج'
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userListener.unsubscribe();
        }
      }]);

      return ClientDashboardMainComponent;
    }();

    ClientDashboardMainComponent.ɵfac = function ClientDashboardMainComponent_Factory(t) {
      return new (t || ClientDashboardMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_auth_service__WEBPACK_IMPORTED_MODULE_2__["ClientAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
    };

    ClientDashboardMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientDashboardMainComponent,
      selectors: [["app-client-dashboard-main"]],
      decls: 49,
      vars: 8,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "nav-header"], [1, "user"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLink", "/client", "routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/client/addRequest", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/client/profile", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "nav-item", "nav-link", 3, "click"], [1, "link"], [1, "dashborad-container"], [1, "side-nav"], [1, "nav-inner"], ["routerLink", "/client", "routerLinkActive", "active-link", 3, "routerLinkActiveOptions"], ["routerLink", "/client/addRequest", "routerLinkActive", "active-link"], ["routerLink", "/client/profile", "routerLinkActive", "active-link"], [1, "divider-vertical"], [1, "logout"], [3, "click"], [1, "center-container"]],
      template: function ClientDashboardMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 , ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0627\u0636\u0627\u0641\u0629 \u0637\u0644\u0628");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0645\u0644\u0641 \u0634\u062E\u0635\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDashboardMainComponent_Template_a_click_21_listener() {
            return ctx.onLogOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u062E\u0631\u0648\u062C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 , ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0627\u0636\u0627\u0641\u0629 \u0637\u0644\u0628 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0645\u0644\u0641 \u0634\u062E\u0635\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDashboardMainComponent_Template_h4_click_45_listener() {
            return ctx.onLogOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u062E\u0631\u0648\u062C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.lastName, " ", ctx.user.firstName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.lastName, " ", ctx.user.firstName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      styles: [".dashborad-container[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  direction: rtl !important;\r\n}\r\n\r\n\r\n.dashborad-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%] {\r\n  background: #2b353e;\r\n  flex: 1;\r\n}\r\n\r\n\r\n.nav-inner[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin-top: 3rem;\r\n}\r\n\r\n\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  padding: 1rem;\r\n  margin-bottom: 5px;\r\n  transition: 0.5s background;\r\n\r\n}\r\n\r\n\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background: #9a9a9a98;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.divider-vertical[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n\r\n.user[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n\r\n.user[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .side-nav[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  margin-top: 10px;\r\n  font-size: 1rem;\r\n}\r\n\r\n\r\n.logout[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n\r\n.side-nav[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n}\r\n\r\n\r\n.side-nav[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  color: #9a9a9a;\r\n}\r\n\r\n\r\n.active-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  background: #9a9a9a98;\r\n  color: #fff;\r\n}\r\n\r\n\r\n.dashborad-container[_ngcontent-%COMP%]   .center-container[_ngcontent-%COMP%] {\r\n  flex: 4;\r\n  padding: 1rem;\r\n  padding-top: 3rem;\r\n}\r\n\r\n\r\n.dashborad-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.dashborad-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .notification-container[_ngcontent-%COMP%] {\r\n  height: 50vh;\r\n  width: 70%;\r\n  background: #fff;\r\n}\r\n\r\n\r\n.nav-header[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n.navbar-nav[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n  color: green;\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n  .side-nav[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .user[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  .user[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color: #333;\r\n\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1kYXNoYm9hcmQtbWFpbi9jbGllbnQtZGFzaGJvYXJkLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87QUFDVDs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwyQkFBMkI7O0FBRTdCOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOzs7QUFHQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COzs7QUFJQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7O0FBSUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFdBQVc7O0VBRWI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtZGFzaGJvYXJkLW1haW4vY2xpZW50LWRhc2hib2FyZC1tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmRhc2hib3JhZC1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGRpcmVjdGlvbjogcnRsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZGFzaGJvcmFkLWNvbnRhaW5lciAuc2lkZS1uYXYge1xyXG4gIGJhY2tncm91bmQ6ICMyYjM1M2U7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLm5hdi1pbm5lciB7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaWRlLW5hdiB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbi5zaWRlLW5hdiBsaSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBiYWNrZ3JvdW5kO1xyXG5cclxufVxyXG5cclxuLnNpZGUtbmF2IGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjOWE5YTlhOTg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGl2aWRlci12ZXJ0aWNhbCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyIGgzLFxyXG4uc2lkZS1uYXYgaDQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4ubG9nb3V0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2lkZS1uYXYgLmxvZ291dCBoNCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnNpZGUtbmF2IC5sb2dvdXQgaDQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzlhOWE5YTtcclxufVxyXG4uYWN0aXZlLWxpbmsgbGl7XHJcbiAgYmFja2dyb3VuZDogIzlhOWE5YTk4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLmRhc2hib3JhZC1jb250YWluZXIgLmNlbnRlci1jb250YWluZXIge1xyXG4gIGZsZXg6IDQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxufVxyXG5cclxuXHJcblxyXG4uZGFzaGJvcmFkLWNvbnRhaW5lciAucmlnaHQtY29udGFpbmVyIHtcclxuICBmbGV4OiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uZGFzaGJvcmFkLWNvbnRhaW5lciAucmlnaHQtY29udGFpbmVyIC5ub3RpZmljYXRpb24tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLm5hdi1oZWFkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubmF2YmFyLW5hdntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAuc2lkZS1uYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC51c2Vye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIC51c2VyIGgze1xyXG4gICAgY29sb3I6ICMzMzM7XHJcblxyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientDashboardMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-dashboard-main',
          templateUrl: './client-dashboard-main.component.html',
          styleUrls: ['./client-dashboard-main.component.css']
        }]
      }], function () {
        return [{
          type: _services_client_auth_service__WEBPACK_IMPORTED_MODULE_2__["ClientAuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client-dashboard-main/client-dashboard/client-dashboard.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/client/client-dashboard-main/client-dashboard/client-dashboard.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ClientDashboardComponent */

  /***/
  function srcAppClientClientDashboardMainClientDashboardClientDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientDashboardComponent", function () {
      return ClientDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/globalServices/requests.service */
    "./src/app/globalServices/requests.service.ts");
    /* harmony import */


    var src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/utils-components/dialog-message/dialog-message.component */
    "./src/app/utils-components/dialog-message/dialog-message.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment-timezone */
    "./node_modules/moment-timezone/index.js");
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_utils_components_statusHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/utils-components/statusHandler */
    "./src/app/utils-components/statusHandler.ts");
    /* harmony import */


    var _services_client_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/client-info.service */
    "./src/app/client/services/client-info.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    function ClientDashboardComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0644\u062F\u064A\u0643 \u0637\u0644\u0628\u0627\u062A ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientDashboardComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientDashboardComponent_div_17_mat_expansion_panel_2_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0645");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientDashboardComponent_div_17_mat_expansion_panel_2_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientDashboardComponent_div_17_mat_expansion_panel_2_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0645 \u0627\u0644\u0627\u0644\u063A\u0627\u0621");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientDashboardComponent_div_17_mat_expansion_panel_2_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0645\u0634\u0643\u0644\u0629 \u0627\u062E\u0631\u0649");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r78.otherIssue);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/client/editRequest", a1];
    };

    function ClientDashboardComponent_div_17_mat_expansion_panel_2_mat_action_row_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-action-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062A\u0639\u062F\u064A\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDashboardComponent_div_17_mat_expansion_panel_2_mat_action_row_47_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var request_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r85.onCancelRequest(request_r78);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0627\u0644\u063A\u0627\u0621");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, request_r78._id));
      }
    }

    function ClientDashboardComponent_div_17_mat_expansion_panel_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0637\u0644\u0628 :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClientDashboardComponent_div_17_mat_expansion_panel_2_span_12_Template, 2, 0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClientDashboardComponent_div_17_mat_expansion_panel_2_span_13_Template, 2, 0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientDashboardComponent_div_17_mat_expansion_panel_2_span_14_Template, 2, 0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0627\u0644\u0628\u0644\u062F\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0627\u0644\u0645\u0634\u0643\u0644\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ClientDashboardComponent_div_17_mat_expansion_panel_2_div_26_Template, 5, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0646\u0648\u0639 \u0627\u0644\u062C\u0647\u0627\u0632");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0627\u0644\u0634\u0631\u0643\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0645\u0643\u0627\u0646 \u0627\u0644\u062A\u0648\u0627\u062C\u062F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ClientDashboardComponent_div_17_mat_expansion_panel_2_mat_action_row_47_Template, 5, 3, "mat-action-row", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r78 = ctx.$implicit;

        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r78.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r77.statusHandler(request_r78.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r78.status == "DONE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r78.status == "IN-PROGRESS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r78.status == "CANCEL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r78.city.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r78.issue == null ? null : request_r78.issue.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r78.otherIssue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r78.device.model);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r78.company.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r78.whereAbout);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r77.dateFormat(request_r78.createdAt));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r77.fullDateFormat(request_r78.createdAt));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r78.status !== "DONE");
      }
    }

    function ClientDashboardComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClientDashboardComponent_div_17_mat_expansion_panel_2_Template, 48, 14, "mat-expansion-panel", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r75.requests);
      }
    }

    function ClientDashboardComponent_mat_paginator_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ClientDashboardComponent_mat_paginator_19_Template_mat_paginator_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.onChangedPage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r76.numOfRequests)("pageSize", ctx_r76.requestsPerPage);
      }
    }

    var ClientDashboardComponent =
    /*#__PURE__*/
    function () {
      function ClientDashboardComponent(requestsService, clientInfoService, dialog) {
        _classCallCheck(this, ClientDashboardComponent);

        this.requestsService = requestsService;
        this.clientInfoService = clientInfoService;
        this.dialog = dialog;
        this.isLoading = [];
        this.numOfRequests = 0;
        this.currentPage = 1;
        this.requestsPerPage = 10;
        this.colorScheme = {
          domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.cardColor = '#232837';
        moment__WEBPACK_IMPORTED_MODULE_3__["locale"]('he');
      }

      _createClass(ClientDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.isLoading['requests'] = true;
          this.isLoading['info'] = true;
          this.requestsService.getRequestsByCustomerId(this.currentPage, this.requestsPerPage);
          this.requestsSub = this.requestsService.getRequestsListener().subscribe(function (res) {
            _this34.requests = res.requests;
            _this34.isLoading['requests'] = false;
          });
          this.clientInfoService.getClientRequestsStatics();
          this.staticInfoSub = this.clientInfoService.getClientRequestsStaticsListener().subscribe(function (res) {
            _this34.staticInfo = res;
            _this34.isLoading['info'] = false;
          });
          this.numOfRequestsSub = this.clientInfoService.getPaginationStaticsListener().subscribe(function (res) {
            _this34.numOfRequests = res;
          });
        }
      }, {
        key: "onChangedPage",
        value: function onChangedPage(pageData) {
          this.isLoading['requests'] = true;
          this.currentPage = pageData.pageIndex + 1;
          this.requestsPerPage = pageData.pageSize;
          this.requestsService.getRequestsByCustomerId(this.currentPage, this.requestsPerPage);
        }
      }, {
        key: "statusHandler",
        value: function statusHandler(status) {
          return Object(src_app_utils_components_statusHandler__WEBPACK_IMPORTED_MODULE_5__["statusHandler"])(status);
        }
      }, {
        key: "dateFormat",
        value: function dateFormat(date) {
          return moment__WEBPACK_IMPORTED_MODULE_3__(date).fromNow();
        }
      }, {
        key: "fullDateFormat",
        value: function fullDateFormat(date) {
          var timezoneDate = moment_timezone__WEBPACK_IMPORTED_MODULE_4__(date);
          return timezoneDate.tz('Asia/hebron').format('LLLL');
        }
      }, {
        key: "onCancelRequest",
        value: function onCancelRequest(request) {
          var _this35 = this;

          var confirm = function confirm() {
            var updateOps = [{
              name: 'status',
              value: 'CANCEL'
            }];

            _this35.requestsService.updateReuqest(request._id, updateOps).subscribe(function (res) {
              request.status = 'CANCEL';

              _this35.dialog.closeAll();
            });
          };

          this.dialog.open(src_app_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_2__["DialogMessageComponent"], {
            data: {
              buttons: true,
              title: 'الغاء طلب',
              message: 'هل انت متأكد لالغاء الطلب ؟',
              confirm: confirm
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a, _b, _c;

          (_a = this.staticInfoSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          (_b = this.requestsSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
          (_c = this.numOfRequestsSub) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        }
      }]);

      return ClientDashboardComponent;
    }();

    ClientDashboardComponent.ɵfac = function ClientDashboardComponent_Factory(t) {
      return new (t || ClientDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_info_service__WEBPACK_IMPORTED_MODULE_6__["ClientInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
    };

    ClientDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientDashboardComponent,
      selectors: [["app-client-dashboard"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"]])],
      decls: 20,
      vars: 7,
      consts: [[1, "main-container"], [1, "dash-board-header"], [1, "cards-container"], [1, "dashboard-card"], [1, "card-header"], [1, "chart"], [3, "scheme", "results", "cardColor"], ["class", "center-container", 4, "ngIf"], [4, "ngIf"], [1, "spacer"], [3, "length", "pageSize", "page", 4, "ngIf"], [1, "center-container"], ["multi", "true"], [4, "ngFor", "ngForOf"], [1, "expansion-header"], [1, "header"], [1, "status-box"], [1, "status", 3, "ngStyle"], [1, "panel-data"], [1, "panel-info"], ["class", "panel-info", 4, "ngIf"], [1, "panel-date"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-raised-button", "", "color", "warn", 3, "click"], [3, "length", "pageSize", "page"]],
      template: function ClientDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0644\u0631\u0626\u064A\u0633\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0627\u0645\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-charts-number-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0637\u0644\u0628\u0627\u062A\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ClientDashboardComponent_div_15_Template, 3, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ClientDashboardComponent_div_16_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ClientDashboardComponent_div_17_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientDashboardComponent_mat_paginator_19_Template, 1, 2, "mat-paginator", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.staticInfo)("cardColor", ctx.cardColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requests && ctx.requests.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading["requests"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading["requests"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requests && ctx.requests.length > 0);
        }
      },
      directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["NumberCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"]],
      styles: [".dash-board-header[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin: auto;\r\n  max-height: 20vh !important;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nmat-paginator[_ngcontent-%COMP%] {\r\n  direction: ltr;\r\n}\r\n\r\n@media (max-width: 980px) {\r\n\r\n  .main-container[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]{\r\n    width: 100% !important;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1kYXNoYm9hcmQtbWFpbi9jbGllbnQtZGFzaGJvYXJkL2NsaWVudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxjQUFjO0FBQ2hCOztBQUdBOztFQUVFO0lBQ0Usc0JBQXNCO0VBQ3hCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50L2NsaWVudC1kYXNoYm9hcmQtbWFpbi9jbGllbnQtZGFzaGJvYXJkL2NsaWVudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4uZGFzaC1ib2FyZC1oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCAuY2FyZC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuLm1haW4tY29udGFpbmVyIC5kYXNoYm9hcmQtY2FyZCAuY2hhcnQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDIwdmggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcblxyXG4gIC5tYWluLWNvbnRhaW5lciAuZGFzaGJvYXJkLWNhcmQgLmNoYXJ0e1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-dashboard',
          templateUrl: './client-dashboard.component.html',
          styleUrls: ['./client-dashboard.component.css'],
          providers: [src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"]]
        }]
      }], function () {
        return [{
          type: src_app_globalServices_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"]
        }, {
          type: _services_client_info_service__WEBPACK_IMPORTED_MODULE_6__["ClientInfoService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client-dashboard-main/client-profile/client-profile.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/client/client-dashboard-main/client-profile/client-profile.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ClientProfileComponent */

  /***/
  function srcAppClientClientDashboardMainClientProfileClientProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientProfileComponent", function () {
      return ClientProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/globalServices/cities.service */
    "./src/app/globalServices/cities.service.ts");
    /* harmony import */


    var _services_client_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/client-info.service */
    "./src/app/client/services/client-info.service.ts");
    /* harmony import */


    var src_app_utils_components_edit_phone_dialog_edit_phone_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utils-components/edit-phone-dialog/edit-phone-dialog.component */
    "./src/app/utils-components/edit-phone-dialog/edit-phone-dialog.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _utils_components_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../utils-components/validators */
    "./src/app/utils-components/validators.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _services_client_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/client-auth.service */
    "./src/app/client/services/client-auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../utils-components/normal-input-error/normal-input-error.component */
    "./src/app/utils-components/normal-input-error/normal-input-error.component.ts");

    function ClientProfileComponent_app_normal_input_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 20);
      }

      if (rf & 2) {
        var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r107.form.get("firstName").errors);
      }
    }

    function ClientProfileComponent_app_normal_input_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 21);
      }

      if (rf & 2) {
        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r108.form.get("lastName").errors);
      }
    }

    function ClientProfileComponent_option_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r113 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r113._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r113.name);
      }
    }

    function ClientProfileComponent_app_normal_input_error_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 23);
      }

      if (rf & 2) {
        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r110.form.get("city").errors);
      }
    }

    function ClientProfileComponent_button_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0639\u062F\u064A\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientProfileComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ClientProfileComponent =
    /*#__PURE__*/
    function () {
      function ClientProfileComponent(_snackBar, citiesService, clientAuth, clientInfoService, dialog) {
        _classCallCheck(this, ClientProfileComponent);

        this._snackBar = _snackBar;
        this.citiesService = citiesService;
        this.clientAuth = clientAuth;
        this.clientInfoService = clientInfoService;
        this.dialog = dialog;
        this.isLoading = false;
      }

      _createClass(ClientProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          var _a, _b, _c;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_a = this.customer) === null || _a === void 0 ? void 0 : _a.firstName, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_5__["nameCheck"]]
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_b = this.customer) === null || _b === void 0 ? void 0 : _b.lastName, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_5__["nameCheck"]]
            }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({
              value: (_c = this.customer) === null || _c === void 0 ? void 0 : _c.city,
              disabled: true
            }, {
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_5__["selectInput"]]
            })
          });
          this.citiesService.getCites();
          this.citiesSub = this.citiesService.getCitiesListener().subscribe(function (data) {
            _this36.cities = data;
          });
          this.clientInfoService.getCustomerDetails().subscribe(function (res) {
            _this36.customer = res.customer;

            _this36.form.setValue({
              firstName: _this36.customer.firstName,
              lastName: _this36.customer.lastName,
              city: _this36.customer.city._id
            });

            _this36.form.updateValueAndValidity();
          });
        }
      }, {
        key: "editPhone",
        value: function editPhone() {
          var _this37 = this;

          var ref = this.dialog.open(src_app_utils_components_edit_phone_dialog_edit_phone_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EditPhoneDialogComponent"], {
            panelClass: 'myapp-no-padding-dialog'
          });
          ref.afterClosed().subscribe(function (res) {
            if (res) _this37.customer.phone = res;
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          var _this38 = this;

          var _a;

          if (this.form.invalid) return;
          this.isLoading = true;
          var updateOps = [];
          var hash = Object.keys(this.form.value).map(function (name) {
            return {
              name: name,
              value: _this38.form.value[name]
            };
          });

          for (var i = 0, k = 0; i < hash.length; i++) {
            if (hash[i].value != this.customer[hash[i].name] && hash[i].value != ((_a = this.customer[hash[i].name]) === null || _a === void 0 ? void 0 : _a._id)) {
              updateOps[k++] = {
                'name': hash[i].name,
                'value': hash[i].value
              };
            }
          }

          if (updateOps.length > 0) this.clientInfoService.updateCustomer(updateOps).subscribe(function (res) {
            _this38.clientAuth.updateUserData(res.customer);

            _this38.customer = res.customer;
            _this38.isLoading = false;
          }, function (err) {
            _this38.isLoading = false;
          });else {
            this.openSnackBar('لم تقم بتعديل اي حقل !', null);
            this.isLoading = false;
          }
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this._snackBar.open(message, action, {
            duration: 2000
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.citiesSub.unsubscribe();
        }
      }]);

      return ClientProfileComponent;
    }();

    ClientProfileComponent.ɵfac = function ClientProfileComponent_Factory(t) {
      return new (t || ClientProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_auth_service__WEBPACK_IMPORTED_MODULE_7__["ClientAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_info_service__WEBPACK_IMPORTED_MODULE_2__["ClientInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]));
    };

    ClientProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientProfileComponent,
      selectors: [["app-client-profile"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"], _services_client_info_service__WEBPACK_IMPORTED_MODULE_2__["ClientInfoService"]])],
      decls: 37,
      vars: 8,
      consts: [[1, "main-container"], [1, "dash-board-header"], [1, "center-content-container"], [1, "dashboard-card"], [1, "card-header"], [3, "formGroup", "submit"], [1, "input-container"], ["formControlName", "firstName", "type", "text"], ["name", "firstName", 3, "errors", 4, "ngIf"], ["formControlName", "lastName", "type", "text"], ["name", "lastName", 3, "errors", 4, "ngIf"], [1, "inner-input-container"], ["type", "text", "disabled", "", 3, "value"], [1, "link", 3, "click"], ["formControlName", "city"], ["value", "-1"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "city", 3, "errors", 4, "ngIf"], ["class", "green-button", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], ["name", "firstName", 3, "errors"], ["name", "lastName", 3, "errors"], [3, "value"], ["name", "city", 3, "errors"], [1, "green-button"], [1, "spinner"], ["role", "status", 1, "spinner-border"], [1, "sr-only"]],
      template: function ClientProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0627\u0645\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ClientProfileComponent_Template_form_submit_9_listener() {
            return ctx.onUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0634\u062E\u0635\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientProfileComponent_app_normal_input_error_14_Template, 1, 1, "app-normal-input-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0627\u0644\u0639\u0627\u0626\u0644\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientProfileComponent_app_normal_input_error_19_Template, 1, 1, "app-normal-input-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientProfileComponent_Template_p_click_25_listener() {
            return ctx.editPhone();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u062A\u0639\u062F\u064A\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062F\u064A\u0646\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ClientProfileComponent_option_33_Template, 2, 2, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ClientProfileComponent_app_normal_input_error_34_Template, 1, 1, "app-normal-input-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ClientProfileComponent_button_35_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ClientProfileComponent_div_36_Template, 4, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched && ctx.form.get("firstName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched && ctx.form.get("lastName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer == null ? null : ctx.customer.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched && ctx.form.get("city").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_10__["NormalInputErrorComponent"]],
      styles: [".dash-board-header[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  padding: 1rem;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .inner-input-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .inner-input-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  -webkit-margin-start: 1rem;\r\n          margin-inline-start: 1rem;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]{\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1kYXNoYm9hcmQtbWFpbi9jbGllbnQtcHJvZmlsZS9jbGllbnQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBeUI7VUFBekIseUJBQXlCO0FBQzNCOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50L2NsaWVudC1kYXNoYm9hcmQtbWFpbi9jbGllbnQtcHJvZmlsZS9jbGllbnQtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2gtYm9hcmQtaGVhZGVye1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgLmNhcmQtaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIGZvcm17XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIGZvcm0gLmlucHV0LWNvbnRhaW5lcntcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgZm9ybSAuaW5wdXQtY29udGFpbmVyIHB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgLmlucHV0LWNvbnRhaW5lciAuaW5uZXItaW5wdXQtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgLmlucHV0LWNvbnRhaW5lciAuaW5uZXItaW5wdXQtY29udGFpbmVyIHAge1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFyZW07XHJcbn1cclxuXHJcbi5zcGlubmVye1xyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-profile',
          templateUrl: './client-profile.component.html',
          styleUrls: ['./client-profile.component.css'],
          providers: [src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"], _services_client_info_service__WEBPACK_IMPORTED_MODULE_2__["ClientInfoService"]]
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }, {
          type: src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"]
        }, {
          type: _services_client_auth_service__WEBPACK_IMPORTED_MODULE_7__["ClientAuthService"]
        }, {
          type: _services_client_info_service__WEBPACK_IMPORTED_MODULE_2__["ClientInfoService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client-login/client-login.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/client/client-login/client-login.component.ts ***!
    \***************************************************************/

  /*! exports provided: ClientLoginComponent */

  /***/
  function srcAppClientClientLoginClientLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientLoginComponent", function () {
      return ClientLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _utils_components_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils-components/validators */
    "./src/app/utils-components/validators.ts");
    /* harmony import */


    var _services_client_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/client-auth.service */
    "./src/app/client/services/client-auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../utils-components/normal-input-error/normal-input-error.component */
    "./src/app/utils-components/normal-input-error/normal-input-error.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function ClientLoginComponent_app_normal_input_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 16);
      }

      if (rf & 2) {
        var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r91.form.get("phone").errors);
      }
    }

    function ClientLoginComponent_app_normal_input_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 17);
      }

      if (rf & 2) {
        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r92.form.get("password").errors);
      }
    }

    function ClientLoginComponent_button_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062F\u062E\u0648\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientLoginComponent_mat_spinner_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    var ClientLoginComponent =
    /*#__PURE__*/
    function () {
      function ClientLoginComponent(clientAuthService) {
        _classCallCheck(this, ClientLoginComponent);

        this.clientAuthService = clientAuthService;
        this.isLoading = false;
        this.clientAuthService.autoAuthUser(true);
      }

      _createClass(ClientLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this39 = this;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(24)],
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_2__["phoneNumber"]]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]
            }),
            keepMeLogedIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
          });
          this.clientAuthService.getIsAuthenticatedListener().subscribe(function (isAuth) {
            _this39.isLoading = isAuth;
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          if (this.form.invalid) {
            this.form.markAsTouched();
            return;
          }

          this.isLoading = true;
          this.clientAuthService.login(this.form.get('phone').value, this.form.get('password').value, this.form.get('keepMeLogedIn').value);
        }
      }]);

      return ClientLoginComponent;
    }();

    ClientLoginComponent.ɵfac = function ClientLoginComponent_Factory(t) {
      return new (t || ClientLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_auth_service__WEBPACK_IMPORTED_MODULE_3__["ClientAuthService"]));
    };

    ClientLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientLoginComponent,
      selectors: [["app-client-login"]],
      decls: 29,
      vars: 5,
      consts: [[1, "box", "align"], [1, "login-container"], [1, "form-containe"], [3, "formGroup", "submit"], [1, "align-inputs"], [1, "input-container"], ["placeholder", "000-0000000", "formControlName", "phone", "name", "phoneNumber", "type", "tel"], ["name", "phone number", 3, "errors", 4, "ngIf"], ["placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", "formControlName", "password", "type", "password"], ["name", "password", 3, "errors", 4, "ngIf"], ["formControlName", "keepMeLogedIn"], [1, "form-links"], ["routerLink", "/client/forgotPassword", "routerLinkActive", "router-link-active"], ["routerLink", "/client/signup", "routerLinkActive", "router-link-active"], ["class", "green-button", 4, "ngIf"], [4, "ngIf"], ["name", "phone number", 3, "errors"], ["name", "password", 3, "errors"], [1, "green-button"]],
      template: function ClientLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ClientLoginComponent_Template_form_submit_6_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClientLoginComponent_app_normal_input_error_12_Template, 1, 1, "app-normal-input-error", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ClientLoginComponent_app_normal_input_error_17_Template, 1, 1, "app-normal-input-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-checkbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0627\u0628\u0642\u0646\u064A \u0645\u062A\u0635\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u061F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0627\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ClientLoginComponent_button_27_Template, 2, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ClientLoginComponent_mat_spinner_28_Template, 1, 0, "mat-spinner", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched || ctx.form.get("phone").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.touched || ctx.form.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_7__["NormalInputErrorComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]],
      styles: [".box[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  -webkit-animation: 0.5s moveIn;\r\n          animation: 0.5s moveIn;\r\n}\r\n\r\n.align[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 60%;\r\n  margin-top: 2rem;\r\n  margin-bottom: 4rem;\r\n  min-height: 50vh;\r\n  background: #2b353e;\r\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: right;\r\n  background: #60bb46;\r\n  padding: 1rem 1rem 0.5rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n  font-family: \"Cairo\", sans-serif;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .form-containe[_ngcontent-%COMP%] {\r\n  background: #f9f9f9;\r\n  min-height: 40vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .align-inputs[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\r\n  align-self: flex-end;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  align-self: flex-end;\r\n  margin: 0;\r\n}\r\n\r\napp-normal-input-error[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  align-self: flex-start;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #e8f0fe;\r\n  border: 0;\r\n  padding: 8px 10px;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .form-containe[_ngcontent-%COMP%]   .form-links[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .form-containe[_ngcontent-%COMP%]   .form-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  color: #333;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 0.7rem 3rem;\r\n  margin-top: 3rem;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"password\"][_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bold;\r\n  font-size: 1.3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1sb2dpbi9jbGllbnQtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSx5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtbG9naW4vY2xpZW50LWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbmltYXRpb246IDAuNXMgbW92ZUluO1xyXG59XHJcblxyXG4uYWxpZ24ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYm94IC5sb2dpbi1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBiYWNrZ3JvdW5kOiAjMmIzNTNlO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBiYWNrZ3JvdW5kOiAjNjBiYjQ2O1xyXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgaGVhZGVyIGgxIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lIHtcclxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gIG1pbi1oZWlnaHQ6IDQwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmFsaWduLWlucHV0cyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIGZvcm0gbWF0LWNoZWNrYm94IHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIC5pbnB1dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgZm9ybSAuaW5wdXQtY29udGFpbmVyIHAge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYXBwLW5vcm1hbC1pbnB1dC1lcnJvciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNlOGYwZmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lIC5mb3JtLWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1jb250YWluZSAuZm9ybS1saW5rcyBwIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgZm9ybSBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAzcmVtO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-login',
          templateUrl: './client-login.component.html',
          styleUrls: ['./client-login.component.css']
        }]
      }], function () {
        return [{
          type: _services_client_auth_service__WEBPACK_IMPORTED_MODULE_3__["ClientAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client-main/client-main.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/client/client-main/client-main.component.ts ***!
    \*************************************************************/

  /*! exports provided: ClientMainComponent */

  /***/
  function srcAppClientClientMainClientMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientMainComponent", function () {
      return ClientMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_client_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/client-info.service */
    "./src/app/client/services/client-info.service.ts");
    /* harmony import */


    var _services_client_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/client-auth.service */
    "./src/app/client/services/client-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ClientMainComponent =
    /*#__PURE__*/
    function () {
      function ClientMainComponent(clientAuthService) {
        _classCallCheck(this, ClientMainComponent);

        this.clientAuthService = clientAuthService;
      }

      _createClass(ClientMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientMainComponent;
    }();

    ClientMainComponent.ɵfac = function ClientMainComponent_Factory(t) {
      return new (t || ClientMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_auth_service__WEBPACK_IMPORTED_MODULE_2__["ClientAuthService"]));
    };

    ClientMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientMainComponent,
      selectors: [["app-client-main"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_client_info_service__WEBPACK_IMPORTED_MODULE_1__["ClientInfoService"]])],
      decls: 8,
      vars: 0,
      consts: [["routerLink", "/"], ["src", "../../../assets/img/logo-no-title.png", "alt", ""], [1, "content"]],
      template: function ClientMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Smart Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["nav[_ngcontent-%COMP%]{\r\n  min-height: 10vh;\r\n  background:#2B353E ;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-weight: 600;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 2rem;\r\n  height: 2rem;\r\n  margin-right: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  background: #F2F2F2;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1tYWluL2NsaWVudC1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7OztBQUlBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0FBQ2pCOzs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOzs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jbGllbnQvY2xpZW50LW1haW4vY2xpZW50LW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gIGJhY2tncm91bmQ6IzJCMzUzRSA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5uYXYgaDF7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uYXYgaW1ne1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-main',
          templateUrl: './client-main.component.html',
          styleUrls: ['./client-main.component.css'],
          providers: [_services_client_info_service__WEBPACK_IMPORTED_MODULE_1__["ClientInfoService"]]
        }]
      }], function () {
        return [{
          type: _services_client_auth_service__WEBPACK_IMPORTED_MODULE_2__["ClientAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client-phone-auth/client-phone-auth.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/client/client-phone-auth/client-phone-auth.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ClientPhoneAuthComponent */

  /***/
  function srcAppClientClientPhoneAuthClientPhoneAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientPhoneAuthComponent", function () {
      return ClientPhoneAuthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_components_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils-components/phone-auth/phone-auth.component */
    "./src/app/utils-components/phone-auth/phone-auth.component.ts");

    var ClientPhoneAuthComponent =
    /*#__PURE__*/
    function () {
      function ClientPhoneAuthComponent() {
        _classCallCheck(this, ClientPhoneAuthComponent);
      }

      _createClass(ClientPhoneAuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientPhoneAuthComponent;
    }();

    ClientPhoneAuthComponent.ɵfac = function ClientPhoneAuthComponent_Factory(t) {
      return new (t || ClientPhoneAuthComponent)();
    };

    ClientPhoneAuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientPhoneAuthComponent,
      selectors: [["app-client-phone-auth"]],
      decls: 2,
      vars: 0,
      consts: [[1, "main"], ["nav", "/client/request"]],
      template: function ClientPhoneAuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-phone-auth", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_utils_components_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_1__["PhoneAuthComponent"]],
      styles: [".main[_ngcontent-%COMP%]{\r\n  min-height: 89vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n}\r\n\r\n\r\napp-phone-auth[_ngcontent-%COMP%]{\r\n  flex-basis: 70%;\r\n  transform: translateY(-30%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1waG9uZS1hdXRoL2NsaWVudC1waG9uZS1hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0FBRXJCOzs7QUFHQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jbGllbnQvY2xpZW50LXBob25lLWF1dGgvY2xpZW50LXBob25lLWF1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gIG1pbi1oZWlnaHQ6IDg5dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuXHJcbmFwcC1waG9uZS1hdXRoe1xyXG4gIGZsZXgtYmFzaXM6IDcwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwJSk7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientPhoneAuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-phone-auth',
          templateUrl: './client-phone-auth.component.html',
          styleUrls: ['./client-phone-auth.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client-signup/client-signup.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/client/client-signup/client-signup.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ClientSignupComponent */

  /***/
  function srcAppClientClientSignupClientSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientSignupComponent", function () {
      return ClientSignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/globalServices/cities.service */
    "./src/app/globalServices/cities.service.ts");
    /* harmony import */


    var _utils_components_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils-components/validators */
    "./src/app/utils-components/validators.ts");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var src_app_utils_components_phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/utils-components/phone-auth/phone-auth.service */
    "./src/app/utils-components/phone-auth/phone-auth.service.ts");
    /* harmony import */


    var _services_client_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/client-auth.service */
    "./src/app/client/services/client-auth.service.ts");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _utils_components_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../utils-components/phone-auth/phone-auth.component */
    "./src/app/utils-components/phone-auth/phone-auth.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../utils-components/normal-input-error/normal-input-error.component */
    "./src/app/utils-components/normal-input-error/normal-input-error.component.ts");

    function ClientSignupComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0634\u062E\u0635\u064A\u0629");
      }
    }

    function ClientSignupComponent_app_normal_input_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 30);
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r97.forms["personalInfo"].get("firstName").errors);
      }
    }

    function ClientSignupComponent_app_normal_input_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 31);
      }

      if (rf & 2) {
        var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r98.forms["personalInfo"].get("lastName").errors);
      }
    }

    function ClientSignupComponent_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r105 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r105._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r105.name);
      }
    }

    function ClientSignupComponent_app_normal_input_error_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 33);
      }

      if (rf & 2) {
        var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r100.forms["personalInfo"].get("city").errors);
      }
    }

    function ClientSignupComponent_ng_template_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");
      }
    }

    function ClientSignupComponent_ng_template_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");
      }
    }

    function ClientSignupComponent_app_normal_input_error_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 34);
      }

      if (rf & 2) {
        var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r103.forms["password"].get("password").errors);
      }
    }

    function ClientSignupComponent_app_normal_input_error_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 35);
      }

      if (rf & 2) {
        var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r104.forms["password"].get("verifyPassword").errors);
      }
    }

    var ClientSignupComponent =
    /*#__PURE__*/
    function () {
      function ClientSignupComponent(citiesService, clientAuth, phoneAuthService) {
        _classCallCheck(this, ClientSignupComponent);

        this.citiesService = citiesService;
        this.clientAuth = clientAuth;
        this.phoneAuthService = phoneAuthService;
        this.isLinear = true;
        this.forms = [];
        this.cities = [];
      }

      _createClass(ClientSignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          this.citiesService.getCites();
          this.citiesSub = this.citiesService.getCitiesListener().subscribe(function (cities) {
            _this40.cities = cities;
          });
          this.forms['personalInfo'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)],
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_3__["nameCheck"]]
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]
            }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('-1', {
              asyncValidators: [_utils_components_validators__WEBPACK_IMPORTED_MODULE_3__["selectInput"]]
            }),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('male', {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            })
          });
          this.forms['phoneAuth'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            phoneIsValid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            })
          });
          this.forms['password'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]
            }),
            verifyPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]
            })
          }); // this.forms[1] = new FormGroup({
          // })
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.citiesSub.unsubscribe();
        }
      }, {
        key: "isDone",
        value: function isDone(e, steper) {
          this.forms['phoneAuth'].controls.phoneIsValid.setValue(true);
          steper.next();
        }
      }, {
        key: "checkPasswordMatch",
        value: function checkPasswordMatch() {
          Object(_utils_components_validators__WEBPACK_IMPORTED_MODULE_3__["matchPassword"])(this.forms['password'].controls.password, this.forms['password'].controls.verifyPassword);
          this.forms['password'].controls.verifyPassword.markAsTouched();
        }
      }, {
        key: "onSingUp",
        value: function onSingUp() {
          var _iterator = _createForOfIteratorHelper(this.forms),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var form = _step.value;
              if (form.invalid) return;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var _this$phoneAuthServic = this.phoneAuthService.getPhoneNumberAndCountryCode(),
              phoneNumber = _this$phoneAuthServic.phoneNumber,
              countryCode = _this$phoneAuthServic.countryCode;

          var customer = {
            firstName: this.forms['personalInfo'].get('firstName').value,
            lastName: this.forms['personalInfo'].get('lastName').value,
            city: this.forms['personalInfo'].get('city').value,
            gender: this.forms['personalInfo'].get('gender').value,
            phone: phoneNumber,
            countryCode: countryCode,
            password: this.forms['password'].get('password').value
          };
          this.clientAuth.onSignUp(customer);
        }
      }]);

      return ClientSignupComponent;
    }();

    ClientSignupComponent.ɵfac = function ClientSignupComponent_Factory(t) {
      return new (t || ClientSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_2__["CitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_auth_service__WEBPACK_IMPORTED_MODULE_6__["ClientAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_components_phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_5__["PhoneAuthService"]));
    };

    ClientSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientSignupComponent,
      selectors: [["app-client-signup"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_2__["CitiesService"], src_app_utils_components_phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_5__["PhoneAuthService"], {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["STEPPER_GLOBAL_OPTIONS"],
        useValue: {
          displayDefaultIndicatorType: false
        }
      }])],
      decls: 63,
      vars: 13,
      consts: [[1, "box", "align"], [1, "login-container"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "input-container"], ["formControlName", "firstName", "type", "text"], ["name", "first name", 3, "errors", 4, "ngIf"], ["formControlName", "lastName", "type", "text"], ["name", "last name", 3, "errors", 4, "ngIf"], ["id", "cities", "formControlName", "city"], ["value", "-1"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "city", 3, "errors", 4, "ngIf"], ["formControlName", "gender"], ["value", "male"], ["value", "female"], ["matStepperNext", "", 1, "green-button"], [1, "full-width", 3, "formGroup"], [3, "isDone"], ["placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", "type", "password", "formControlName", "password"], ["name", "password", 3, "errors", 4, "ngIf"], ["placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", "type", "password", "formControlName", "verifyPassword", 3, "change"], ["name", "verify-password", 3, "errors", 4, "ngIf"], [1, "green-button", 3, "click"], ["mat-button", "", 3, "click"], [1, "has-account"], ["routerLink", "/client/login", 1, "link"], ["name", "first name", 3, "errors"], ["name", "last name", 3, "errors"], [3, "value"], ["name", "city", 3, "errors"], ["name", "password", 3, "errors"], ["name", "verify-password", 3, "errors"]],
      template: function ClientSignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u062A\u0633\u062C\u064A\u0644 \u0645\u0633\u062A\u062E\u062F\u0645");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-horizontal-stepper", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientSignupComponent_ng_template_9_Template, 1, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0634\u062E\u0635\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientSignupComponent_app_normal_input_error_14_Template, 1, 1, "app-normal-input-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0627\u0644\u0639\u0627\u0626\u0644\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientSignupComponent_app_normal_input_error_19_Template, 1, 1, "app-normal-input-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062F\u064A\u0646\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ClientSignupComponent_option_26_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ClientSignupComponent_app_normal_input_error_27_Template, 1, 1, "app-normal-input-error", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-radio-group", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-radio-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0630\u0643\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-radio-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0627\u0646\u062B\u0649");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0627\u0644\u062A\u0627\u0644\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-step", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ClientSignupComponent_ng_template_38_Template, 1, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-phone-auth", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isDone", function ClientSignupComponent_Template_app_phone_auth_isDone_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

            var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.isDone($event, _r95);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-step", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ClientSignupComponent_ng_template_42_Template, 1, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ClientSignupComponent_app_normal_input_error_47_Template, 1, 1, "app-normal-input-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientSignupComponent_Template_input_change_51_listener() {
            return ctx.checkPasswordMatch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ClientSignupComponent_app_normal_input_error_52_Template, 1, 1, "app-normal-input-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientSignupComponent_Template_button_click_54_listener() {
            return ctx.onSingUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u062A\u0633\u062C\u064A\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientSignupComponent_Template_button_click_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

            var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return _r95.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0627\u0639\u0627\u062F\u0647");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u062A\u0645\u0644\u0643 \u062D\u0633\u0627\u0628 \u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0647\u0646\u0627");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.forms["personalInfo"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forms["personalInfo"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forms["personalInfo"].get("firstName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forms["personalInfo"].get("lastName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forms["personalInfo"].get("city").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.forms["phoneAuth"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forms["phoneAuth"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.forms["password"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forms["password"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forms["password"].get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forms["password"].get("verifyPassword").touched);
        }
      },
      directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperNext"], _utils_components_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_10__["PhoneAuthComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_13__["NormalInputErrorComponent"]],
      styles: [".box[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  direction: rtl;\r\n  -webkit-animation: .5s moveIn;\r\n          animation: .5s moveIn;\r\n}\r\n\r\n\r\n\r\n.align[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n.box[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 60%;\r\n  margin: 2rem 0;\r\n  background: #f9f9f9;\r\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  text-align: start;\r\n  background: #60BB46;\r\n  min-height: 10vh;\r\n  padding:1rem 1rem .5rem;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n  font-family: \"Cairo\", sans-serif;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   .stepper[_ngcontent-%COMP%]{\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   .stepper[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{\r\n  border-radius: 100%;\r\n  background:#60BB46;\r\n  padding: .5rem 1rem;\r\n  color: #fff;\r\n  font-size: 1rem;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   .stepper[_ngcontent-%COMP%]   .step.selected[_ngcontent-%COMP%]{\r\n  background: rgb(116, 224, 86);\r\n  border: 2px solid #333;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   .stepper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{\r\n  height: 2px;\r\n  width: 10vw;\r\n  background: #333;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  padding-top: 2rem;\r\n  min-height: 40vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 50%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\napp-normal-input-error[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  align-self: flex-start;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex: 1;\r\n  padding-top: 0 !important;\r\n  flex-basis: 100;\r\n  background: green;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  align-self: flex-start;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n  align-self: flex-start;\r\n  border: 2px solid #cecece;\r\n  padding: 0 3rem;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  background: rgb(231, 231, 231);\r\n  border: 0;\r\n  padding:8px 10px;\r\n}\r\n\r\n\r\n\r\nmat-radio-group[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\nmat-radio-button[_ngcontent-%COMP%]{\r\n  margin-left: 1rem;\r\n}\r\n\r\n\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  padding: .7rem  3rem;\r\n  margin-top: 3rem;\r\n  cursor: pointer;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n\r\n\r\ninput[type=\"password\"][_ngcontent-%COMP%]  {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bold;\r\n  font-size: 1.3rem;\r\n  direction: ltr;\r\n}\r\n\r\n\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n\r\n\r\n\r\n.phone-number[_ngcontent-%COMP%]{\r\n  margin-top: 1rem;\r\n}\r\n\r\n\r\n\r\n.has-account[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  width: 100%;\r\n  padding: 1rem;\r\n}\r\n\r\n\r\n\r\n@media (max-width:980px){\r\n  .login-container[_ngcontent-%COMP%]{\r\n    width: 100% !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1zaWdudXAvY2xpZW50LXNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOzs7O0FBSUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOzs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOzs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOzs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7QUFDakI7Ozs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7Ozs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOzs7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOzs7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7OztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7Ozs7QUFJQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7Ozs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7Ozs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7OztBQUdBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOzs7O0FBSUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7O0FBR0E7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7Ozs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7Ozs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7OztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7QUFDZjs7OztBQUdBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtc2lnbnVwL2NsaWVudC1zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbiAgYW5pbWF0aW9uOiAuNXMgbW92ZUluO1xyXG59XHJcblxyXG5cclxuXHJcbi5hbGlnbiB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5ib3ggLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1jb250YWluZXIgaGVhZGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGJhY2tncm91bmQ6ICM2MEJCNDY7XHJcbiAgbWluLWhlaWdodDogMTB2aDtcclxuICBwYWRkaW5nOjFyZW0gMXJlbSAuNXJlbTtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1jb250YWluZXIgaGVhZGVyIGgxe1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLnN0ZXBwZXJ7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAuc3RlcHBlciAuc3RlcHtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IzYwQkI0NjtcclxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAuc3RlcHBlciAuc3RlcC5zZWxlY3RlZHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTE2LCAyMjQsIDg2KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5zdGVwcGVyIC5saW5le1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbn1cclxuXHJcblxyXG4ubG9naW4tY29udGFpbmVyIGZvcm17XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgbWluLWhlaWdodDogNDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubG9naW4tY29udGFpbmVyIGZvcm0gLmlucHV0LWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbmFwcC1ub3JtYWwtaW5wdXQtZXJyb3Ige1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAuZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtYmFzaXM6IDEwMDtcclxuICBiYWNrZ3JvdW5kOiBncmVlbjtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1jb250YWluZXIgZm9ybSAuaW5wdXQtY29udGFpbmVyIHB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIC5pbnB1dC1jb250YWluZXIgc2VsZWN0e1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NlY2VjZTtcclxuICBwYWRkaW5nOiAwIDNyZW07XHJcbn1cclxuXHJcblxyXG4ubG9naW4tY29udGFpbmVyIGZvcm0gLmlucHV0LWNvbnRhaW5lciBpbnB1dHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCAyMzEsIDIzMSk7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6OHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxubWF0LXJhZGlvLWdyb3Vwe1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbntcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1jb250YWluZXIgZm9ybSBidXR0b257XHJcbiAgcGFkZGluZzogLjdyZW0gIDNyZW07XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdICB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuLnBob25lLW51bWJlcntcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLmhhcy1hY2NvdW50e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6OTgwcHgpe1xyXG4gIC5sb2dpbi1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientSignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-signup',
          templateUrl: './client-signup.component.html',
          styleUrls: ['./client-signup.component.css'],
          providers: [src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_2__["CitiesService"], src_app_utils_components_phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_5__["PhoneAuthService"], {
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["STEPPER_GLOBAL_OPTIONS"],
            useValue: {
              displayDefaultIndicatorType: false
            }
          }]
        }]
      }], function () {
        return [{
          type: src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_2__["CitiesService"]
        }, {
          type: _services_client_auth_service__WEBPACK_IMPORTED_MODULE_6__["ClientAuthService"]
        }, {
          type: src_app_utils_components_phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_5__["PhoneAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/forgot-password/forgot-password.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/client/forgot-password/forgot-password.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppClientForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_globalServices_forgot_password_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/globalServices/forgot-password.service */
    "./src/app/globalServices/forgot-password.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../utils-components/normal-input-error/normal-input-error.component */
    "./src/app/utils-components/normal-input-error/normal-input-error.component.ts");

    function ForgotPasswordComponent_div_1_app_normal_input_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 13);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", _r189.errors);
      }
    }

    function ForgotPasswordComponent_div_1_button_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0627\u0631\u0633\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_1_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPasswordComponent_div_1_Template_form_submit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r193.sendForgotPasswordRequest(_r188);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForgotPasswordComponent_div_1_app_normal_input_error_13_Template, 1, 1, "app-normal-input-error", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ForgotPasswordComponent_div_1_button_14_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ForgotPasswordComponent_div_1_div_15_Template, 3, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r189.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r185.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r185.isLoading);
      }
    }

    function ForgotPasswordComponent_div_2_app_normal_input_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 22);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", _r196.errors);
      }
    }

    function ForgotPasswordComponent_div_2_button_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0623\u0643\u064A\u062F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_2_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPasswordComponent_div_2_Template_div_submit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r201);

          var _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r200.onVerify(_r195);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0633\u064A\u062A\u0645 \u0627\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u064A \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0630\u064A \u0627\u062F\u062E\u0644\u062A\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_2_Template_p_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r201);

          var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r202.sendCodeAgain();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0631\u0633\u0644 \u0645\u0631\u0629 \u0627\u062E\u0631\u0649");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", null, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ForgotPasswordComponent_div_2_app_normal_input_error_17_Template, 1, 1, "app-normal-input-error", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotPasswordComponent_div_2_button_18_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgotPasswordComponent_div_2_div_19_Template, 3, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r196.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r186.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r186.isLoading);
      }
    }

    function ForgotPasswordComponent_div_3_app_normal_input_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 29);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", _r204.errors);
      }
    }

    function ForgotPasswordComponent_div_3_app_normal_input_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 30);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", _r206.errors);
      }
    }

    function ForgotPasswordComponent_div_3_button_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0639\u062F\u064A\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_3_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPasswordComponent_div_3_Template_form_submit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211);

          var _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r210.onChangePassword(_r203);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForgotPasswordComponent_div_3_app_normal_input_error_13_Template, 1, 1, "app-normal-input-error", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgotPasswordComponent_div_3_app_normal_input_error_19_Template, 1, 1, "app-normal-input-error", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ForgotPasswordComponent_div_3_button_20_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ForgotPasswordComponent_div_3_div_21_Template, 3, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r204.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r206.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r187.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r187.isLoading);
      }
    }

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(forgotPasswordService, router) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.forgotPasswordService = forgotPasswordService;
        this.router = router;
        this.isLoading = false;
        this.step = 1;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendForgotPasswordRequest",
        value: function sendForgotPasswordRequest(form) {
          var _this41 = this;

          if (form.invalid) return;
          this.isLoading = true;
          this.forgotPasswordService.addForgotPasswordRequest(form.value.phone, function () {
            _this41.step++;
            _this41.isLoading = false;
          });
        }
      }, {
        key: "sendCodeAgain",
        value: function sendCodeAgain() {
          this.forgotPasswordService.sendMessageAgain();
        }
      }, {
        key: "onVerify",
        value: function onVerify(form) {
          var _this42 = this;

          if (form.invalid) return;
          this.isLoading = true;
          this.forgotPasswordService.verifyRequest(form.value.code, function () {
            _this42.step++;
            _this42.isLoading = false;
          });
        }
      }, {
        key: "onChangePassword",
        value: function onChangePassword(form) {
          var _this43 = this;

          if (form.value.password !== form.value.confirmPassword) {
            form.controls.confirmPassword.setErrors({
              passwordNotMatch: true
            });
          }

          if (form.invalid) return;
          this.isLoading = true;
          if (form.invalid) return;
          this.forgotPasswordService.changePassword(form.value.password, function () {
            _this43.isLoading = false;

            _this43.router.navigate(['/client/login']);
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_forgot_password_service__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_globalServices_forgot_password_service__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordService"]])],
      decls: 4,
      vars: 3,
      consts: [[1, "box", "align"], ["class", "login-container", 4, "ngIf"], [1, "login-container"], [1, "form-containe"], [3, "submit"], ["form", "ngForm"], [1, "align-inputs"], [1, "input-container"], ["ngModel", "", "name", "phone", "required", "", "placeholder", "000-0000000", "type", "tel"], ["phone", "ngModel"], ["name", "phone number", 3, "errors", 4, "ngIf"], ["class", "green-button", 4, "ngIf"], ["class", "spinner-border text-success", "role", "status", 4, "ngIf"], ["name", "phone number", 3, "errors"], [1, "green-button"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"], [1, "form-containe", 3, "submit"], [1, "link", 3, "click"], ["required", "", "ngModel", "", "name", "code", "placeholder", "", "type", "tel"], ["code", "ngModel"], ["name", "code", 3, "errors", 4, "ngIf"], ["name", "code", 3, "errors"], ["ngModel", "", "name", "password", "required", "", "placeholder", "", "type", "password"], ["password", "ngModel"], ["name", "password", 3, "errors", 4, "ngIf"], ["ngModel", "", "name", "confirmPassword", "required", "", "NgModel", "", "placeholder", "", "type", "password"], ["confirmPassword", "ngModel"], ["name", "confirm-password", 3, "errors", 4, "ngIf"], ["name", "password", 3, "errors"], ["name", "confirm-password", 3, "errors"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_div_1_Template, 16, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_div_2_Template, 20, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotPasswordComponent_div_3_Template, 22, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == 3);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _utils_components_normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_5__["NormalInputErrorComponent"]],
      styles: [".box[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  -webkit-animation: 0.5s moveIn;\r\n          animation: 0.5s moveIn;\r\n}\r\n\r\n.align[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 60%;\r\n  margin-top: 2rem;\r\n  margin-bottom: 4rem;\r\n  background: #2b353e;\r\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: right;\r\n  background: #60bb46;\r\n  padding: 1rem 1rem 0.5rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n  font-family: \"Cairo\", sans-serif;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .form-containe[_ngcontent-%COMP%] {\r\n  background: #f9f9f9;\r\n  min-height: 40vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .align-inputs[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\r\n  align-self: flex-end;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  align-self: flex-end;\r\n  margin: 0;\r\n}\r\n\r\napp-normal-input-error[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  align-self: flex-start;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #e8f0fe;\r\n  border: 0;\r\n  padding: 8px 10px;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .form-containe[_ngcontent-%COMP%]   .form-links[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   .form-containe[_ngcontent-%COMP%]   .form-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  color: #333;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 0.7rem 3rem;\r\n  margin-top: 3rem;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"password\"][_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bold;\r\n  font-size: 1.3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50L2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFuaW1hdGlvbjogMC41cyBtb3ZlSW47XHJcbn1cclxuXHJcbi5hbGlnbiB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5ib3ggLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICBiYWNrZ3JvdW5kOiAjMmIzNTNlO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBiYWNrZ3JvdW5kOiAjNjBiYjQ2O1xyXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgaGVhZGVyIGgxIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lIHtcclxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gIG1pbi1oZWlnaHQ6IDQwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmFsaWduLWlucHV0cyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIGZvcm0gbWF0LWNoZWNrYm94IHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIC5pbnB1dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgZm9ybSAuaW5wdXQtY29udGFpbmVyIHAge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYXBwLW5vcm1hbC1pbnB1dC1lcnJvciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNlOGYwZmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lIC5mb3JtLWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1jb250YWluZSAuZm9ybS1saW5rcyBwIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgZm9ybSBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAzcmVtO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.css'],
          providers: [src_app_globalServices_forgot_password_service__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordService"]]
        }]
      }], function () {
        return [{
          type: src_app_globalServices_forgot_password_service__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/main-page/main-page.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/client/main-page/main-page.component.ts ***!
    \*********************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppClientMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils-components/dialog-message/dialog-message.component */
    "./src/app/utils-components/dialog-message/dialog-message.component.ts");
    /* harmony import */


    var _utils_components_jqueryUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils-components/jqueryUtils */
    "./src/app/utils-components/jqueryUtils.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainPageComponent =
    /*#__PURE__*/
    function () {
      function MainPageComponent(dilaog) {
        _classCallCheck(this, MainPageComponent);

        this.dilaog = dilaog;
        this.show = true;
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showContactInfo",
        value: function showContactInfo() {
          var _this44 = this;

          var confirm = function confirm() {
            _this44.dilaog.closeAll();
          };

          this.dilaog.open(_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_2__["DialogMessageComponent"], {
            data: {
              buttons: false,
              title: 'معلومات التواصل',
              message: ' עומר חוסין : 0522784070 |  טארק חוסין:  0525145565',
              confirm: confirm
            }
          });
        }
      }, {
        key: "smoothScrolling",
        value: function smoothScrolling(element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var video, isInView;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    video = document.getElementById('video');
                    isInView = Object(_utils_components_jqueryUtils__WEBPACK_IMPORTED_MODULE_3__["isScrolledIntoView"])(video);

                    if (isInView && video.muted) {
                      video.controls = true;
                      video.muted = false;
                      video.currentTime = 0;
                      jquery__WEBPACK_IMPORTED_MODULE_4__('#video').animate({
                        volume: 1
                      }, 500);
                    } else if (!isInView && !video.muted) {
                      jquery__WEBPACK_IMPORTED_MODULE_4__('#video').animate({
                        volume: 0
                      }, 500);
                      video.controls = false;
                      video.muted = true;
                    }

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-main-page"]],
      hostBindings: function MainPageComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function MainPageComponent_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      decls: 105,
      vars: 1,
      consts: [[1, "main-page-container"], ["id", "header", 1, "header", "fadeIn"], ["header", ""], [1, "main-box", "fadeOut"], [1, "brand-logo"], [1, "main-body"], ["mat-raised-button", "", "routerLink", "client", "color", "accent"], [1, "dash-container"], [1, "dash"], [1, "scroll-btn", 3, "click"], [1, "scroll-bar"], ["id", "about-us", 1, "section-2"], ["aboutUs", ""], [1, "social-icons"], ["href", "https://www.facebook.com/smart.phone.baqa.new/?eid=ARDr6ApK4jSINdF5A09_JJyRLjMOuJ5tNm0LBH1xtvoiP005R5IcyVBkOg_LcYLivB62G_gx9q79kWqM", "target", "blanck"], ["src", "/assets/img/facebook-2.png", "alt", ""], ["href", "https://www.instagram.com/smart_phonebaqa/", "target", "blanck"], ["src", "/assets/img/instagram-2.png", "alt", ""], [3, "click"], ["src", "/assets/img/whatsapp.png", "alt", ""], [1, "group"], [1, "main"], [1, "title"], [1, "logo"], [1, "container"], [1, "card-showcase"], [1, "face", "face1"], [1, "content"], ["src", "assets/img/online-support.png", "alt", ""], [1, "face", "face2"], ["href", "#"], [1, "card-showcase", "move-up"], ["src", "assets/img/repair.png", "alt", ""], ["src", "assets/img/delivery-truck.png", "alt", ""], [1, "video-container"], ["id", "video", "autoplay", "", "loop", "", 3, "muted"], ["src", "../../../assets/videos/smart-phone.mp4", "type", "video/mp4"], [1, "navigate-back", 3, "click"], [1, "footer-container"], [1, "box"], ["src", "./assets/img/location.png", "alt", ""], ["src", "./assets/img/email.png", "alt", ""], ["src", "./assets/img/phone.png", "alt", ""], [1, "footer-social"], [1, "box-social"], ["src", "./assets/img/facebook.png", "alt", ""], ["src", "./assets/img/instagram.png", "alt", ""]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0633\u0645\u0627\u0631\u062A \u0641\u0648\u0646 \u0628\u0627\u0642\u0629 \u0627\u0644\u063A\u0631\u0628\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0644\u0627\u0636\u0627\u0641\u0629 \u0637\u0644\u0628");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0627\u0636\u063A\u0637 \u0647\u0646\u0627");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainPageComponent_Template_div_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

            var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

            return ctx.smoothScrolling(_r40);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_28_listener() {
            return ctx.showContactInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0627\u0647\u0644\u0627 \u0648\u0633\u0647\u0644\u0627 \u0628\u0643\u0645 \u0641\u064A \u0633\u0645\u0627\u0631\u062A \u0641\u0648\u0646");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u0647\u0648\u0646 \u062A\u0641\u0643\u0631\u0634 \u0645\u0631\u062A\u064A\u0646");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u0641\u064A \u0633\u0645\u0627\u0631\u062A \u0641\u0648\u0646 \u0646\u0648\u0641\u0631 \u0644\u0643\u0645");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u062E\u062F\u0645\u0629 \u0645\u0633\u0627\u0639\u062F\u0629 \u0645\u062D\u0648\u0633\u0628\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u0646\u0642\u062F\u0645 \u062E\u062F\u0645\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629 \u0639\u0646 \u0637\u0631\u064A\u0642 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0648 \u0632\u064A\u0627\u0631\u0629 \u0645\u0631\u0643\u0632\u0646\u0627 \u0641\u064A \u0628\u0627\u0642\u0629 \u0627\u0644\u063A\u0631\u0628\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\u062A\u0635\u0644\u064A\u062D \u0633\u0631\u064A\u0639 \u0648\u0645\u0647\u0646\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u062A\u0635\u0644\u064A\u062D \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u062C\u0647\u0632\u0629 \u0648\u0627\u0644\u062D\u0648\u0627\u0633\u064A\u0628 \u0639\u0644\u0649 \u064A\u062F \u0627\u0644\u062A\u0642\u0646\u064A \u0639\u0645\u0631 \u062D\u0633\u064A\u0646 \u0635\u0627\u062D\u0628 \u0627\u0644\u062E\u0628\u0631\u0629 \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0641\u064A \u0627\u0644\u0645\u062C\u0627\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u0633\u0645\u0627\u0631\u062A \u0641\u0648\u0646 \u0644\u0639\u0646\u062F\u0643");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u062E\u062F\u0645\u0629 \u0633\u0645\u0627\u0631\u062A \u0641\u0648\u0646 \u0644\u0639\u0646\u062F\u0643 \u0644\u0644\u062A\u0633\u0647\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0632\u0628\u0627\u0626\u0646 \u0648\u0641\u064A \u0638\u0644 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0642\u0627\u0626\u0645 \u0646\u0639\u0645\u0644 \u0639\u0644\u0649 \u062A\u0642\u062F\u064A\u0645 \u062E\u062F\u0645\u0627\u062A\u0646\u0627 \u0627\u0644\u0649 \u0628\u064A\u062A \u0627\u0644\u0632\u0628\u0648\u0646 \u0643\u0644 \u0645\u0627 \u0639\u0644\u064A\u0643 \u0641\u0639\u0644\u0629 \u0627\u0645\u0627 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0645\u0628\u0627\u0634\u0631\u0629 \u0644 0522784070 \u0627\u0648 \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0637\u0644\u0628 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "video", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "source", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainPageComponent_Template_div_click_81_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

            var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.smoothScrolling(_r39);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u0628\u0627\u0642\u0629 \u0627\u0644\u063A\u0631\u0628\u064A\u0629 - \u0627\u0644\u0634\u0627\u0631\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "smart-phone-baqa@hotmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "052-2784070");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "\u0633\u0645\u0627\u0631\u062A \u0641\u0648\u0646 \u0628\u0627\u0642\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "smart-phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("muted", true);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
      styles: [".header[_ngcontent-%COMP%] {\r\n  min-height: 100%;\r\n  width: 100%;\r\n  background: linear-gradient(\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.8),\r\n      rgba(0, 0, 0, 8)\r\n    ),\r\n    url('client-bg.png');\r\n  background-position: top center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  color: #fff;\r\n  overflow: hidden;\r\n}\r\n\r\n.main-box[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row, column;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  -webkit-animation: .5s moveInfromRight;\r\n          animation: .5s moveInfromRight;\r\n}\r\n\r\n.main-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 4vh;\r\n}\r\n\r\n.main-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  float: right;\r\n  font-size: 3vh;\r\n  color: #f9f9f9;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  font-family: \"Cairo\", sans-serif;\r\n  line-height: 2.4rem;\r\n}\r\n\r\n.main-box[_ngcontent-%COMP%]   .main-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 1.8rem;\r\n  font-weight: bold;\r\n  transition: 0.5s ease;\r\n}\r\n\r\n.main-box[_ngcontent-%COMP%]   .main-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: rgba(255, 214, 64, 0.774);\r\n  color: #fff;\r\n}\r\n\r\n.brand-logo[_ngcontent-%COMP%] {\r\n  background: url('logo-no-title.png');\r\n  background-position: center center;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  height: 200px;\r\n  width: 200px;\r\n  z-index: 3;\r\n  margin-right: 4rem;\r\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.7);\r\n  border-radius: 30px;\r\n}\r\n\r\n.main-body[_ngcontent-%COMP%] {\r\n  flex-basis: 30%;\r\n}\r\n\r\n.scroll-btn[_ngcontent-%COMP%] {\r\n  bottom: 1rem;\r\n  left: 50%;\r\n  position: absolute;\r\n  transform: translateX(-50%);\r\n  border: 2px solid #fff;\r\n  padding: 10px 10px 20px;\r\n  border-radius: 30px;\r\n  z-index: 3;\r\n  cursor: pointer;\r\n  \r\n}\r\n\r\n.scroll-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  border: 2px solid #fff;\r\n  font-size: 10px;\r\n  border-radius: 30px;\r\n}\r\n\r\n.scroll-bar[_ngcontent-%COMP%] {\r\n  -webkit-animation: mover 1s infinite alternate;\r\n          animation: mover 1s infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes mover {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  0% {\r\n    transform: translateY(10px);\r\n  }\r\n}\r\n\r\n@keyframes mover {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  0% {\r\n    transform: translateY(10px);\r\n  }\r\n}\r\n\r\n.dash[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 2px;\r\n  background: #fff;\r\n  border-radius: 32px;\r\n  margin-bottom: 1rem;\r\n  display: none;\r\n}\r\n\r\n.dash-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 50%;\r\n  -webkit-animation: 10s a1 infinite;\r\n          animation: 10s a1 infinite;\r\n}\r\n\r\n@-webkit-keyframes a1 {\r\n  0% {\r\n    right: 0;\r\n  }\r\n\r\n  50% {\r\n    right: 50%;\r\n    transform: scaleX(10);\r\n  }\r\n\r\n  100% {\r\n    right: 150%;\r\n    transform: scaleX(30);\r\n  }\r\n}\r\n\r\n@keyframes a1 {\r\n  0% {\r\n    right: 0;\r\n  }\r\n\r\n  50% {\r\n    right: 50%;\r\n    transform: scaleX(10);\r\n  }\r\n\r\n  100% {\r\n    right: 150%;\r\n    transform: scaleX(30);\r\n  }\r\n}\r\n\r\n.section-2[_ngcontent-%COMP%] {\r\n  background: #f9f9f9;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  padding:2rem 0\r\n}\r\n\r\n.section-2[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  margin: 0 auto;\r\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, .7);\r\n  border-radius: 12px;\r\n}\r\n\r\n.section-2[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  margin: auto;\r\n}\r\n\r\n.group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 70%;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n  color: #333;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  background: url('logo-no-title.png') no-repeat;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-size: contain;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row, column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.group[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 5vh;\r\n}\r\n\r\n.move-up[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row, column;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 2.5rem 0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  height: 200px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background: #60bb46;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1;\r\n  transform: translateY(100px);\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%] {\r\n  transform: translateY(0);\r\n  background: #64e441;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  opacity: 0.9;\r\n  transition: 0.5s;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 10px 0 0;\r\n  padding: 0;\r\n  color: #fff;\r\n  text-align: center;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\r\n  transform: translateY(-100px);\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]:hover   .face.face2[_ngcontent-%COMP%] {\r\n  transform: translateY(0);\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #333;\r\n  text-align: right;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin: 15px 0 0;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: #333;\r\n  font-weight: 900;\r\n  padding: 5px;\r\n  border: 1px solid #333;\r\n  display: none; \r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .card-showcase[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: #333;\r\n  color: #fff;\r\n}\r\n\r\n.navigate-back[_ngcontent-%COMP%]{\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  width: 50px;\r\n  height: 50px;\r\n  bottom: 0;\r\n  left: 95%;\r\n  background: url('up-arrow.png') no-repeat;\r\n  background-size: cover;\r\n  z-index: 3;\r\n  margin-bottom: 8px;\r\n  box-shadow: 5px 5px 10px rgba(0, 0, 0,.6);\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.social-icons[_ngcontent-%COMP%] {\r\n  top: 20%;\r\n  left: 0;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  z-index: 1;\r\n  width: 80px;\r\n}\r\n\r\n.social-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.social-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 40px;\r\n  list-style-type: none;\r\n  padding-left: 12px;\r\n  padding-top: 6px;\r\n  margin-top: 5px;\r\n  color: #fff;\r\n  background: #333;\r\n  transition: 0.5s ease;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.social-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  padding-left: 30px;\r\n  width: 80px;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #60bb46;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.footer-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row, column;\r\n  width: 60%;\r\n  height: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #333;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   .box-image[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-size: contain;\r\n  background-position: center center;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 12px;\r\n  font-size: 1rem;\r\n}\r\n\r\n.footer-social[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  margin: 1rem 1rem;\r\n}\r\n\r\n.box-social[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100%;\r\n  margin-left: 1.5rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.box-social[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main-box[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 80%;\r\n    margin: auto;\r\n  }\r\n  .brand-logo[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    margin-top: 10vh;\r\n    margin-bottom: 1rem;\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%] {\r\n    background-position: 20% 50%;\r\n  }\r\n\r\n  .footer-container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .footer-social[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n  .move-up[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n  .main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n  .main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    line-height: 3rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWDs7Ozs7d0JBSzBDO0VBQzFDLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQ0FBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBd0Q7RUFDeEQsa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQVBBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUdBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUlBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtFQUN2QjtBQUNGOztBQWRBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1g7QUFDRjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFJQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBS0E7RUFDRSw4Q0FBZ0U7RUFDaEUsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDBDQUEwQztFQUMxQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYSxFQUFFLDhCQUE4QjtBQUMvQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFNBQVM7RUFDVCx5Q0FBNkQ7RUFDN0Qsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBLHVEQUF1RDs7QUFFdkQ7RUFDRSxRQUFRO0VBQ1IsT0FBTztFQUNQLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBUUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7RUFDZDtFQUNBO0lBQ0UsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTs7SUFFRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC44KSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCA4KVxyXG4gICAgKSxcclxuICAgIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvY2xpZW50LWJnLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWFpbi1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdywgY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYW5pbWF0aW9uOiAuNXMgbW92ZUluZnJvbVJpZ2h0O1xyXG59XHJcblxyXG4ubWFpbi1ib3ggaDEge1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG59XHJcblxyXG4ubWFpbi1ib3ggaDMge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDN2aDtcclxuICBjb2xvcjogI2Y5ZjlmOTtcclxufVxyXG5cclxuaDEsXHJcbmgzIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbn1cclxuXHJcbi5tYWluLWJveCAubWFpbi1ib2R5IGEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxufVxyXG5cclxuLm1haW4tYm94IC5tYWluLWJvZHkgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIxNCwgNjQsIDAuNzc0KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJyYW5kLWxvZ28ge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9nby1uby10aXRsZS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICB6LWluZGV4OiAzO1xyXG4gIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5tYWluLWJvZHkge1xyXG4gIGZsZXgtYmFzaXM6IDMwJTtcclxufVxyXG5cclxuLnNjcm9sbC1idG4ge1xyXG4gIGJvdHRvbTogMXJlbTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgei1pbmRleDogMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogICAtLS0tLS1zY3JvbGwtLS0tICAgKi9cclxufVxyXG5cclxuLnNjcm9sbC1iYXIgc3BhbiB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLnNjcm9sbC1iYXIge1xyXG4gIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uZGFzaCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRhc2gtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgYW5pbWF0aW9uOiAxMHMgYTEgaW5maW5pdGU7XHJcbn1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyBhMSB7XHJcbiAgMCUge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEwKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgcmlnaHQ6IDE1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgzMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi0yIHtcclxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzoycmVtIDBcclxufVxyXG5cclxuXHJcbi5zZWN0aW9uLTIgdmlkZW97XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLTIgLnZpZGVvLWNvbnRhaW5lcntcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG4uZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmxvZ28ge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2xvZ28tbm8tdGl0bGUucG5nKSBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5tYWluIC50aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LCBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyb3VwIC5tYWluIGgxIHtcclxuICBmb250LXNpemU6IDV2aDtcclxufVxyXG5cclxuLm1vdmUtdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3csIGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMi41cmVtIDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQtc2hvd2Nhc2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZC1zaG93Y2FzZSAuZmFjZSB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZC1zaG93Y2FzZSAuZmFjZS5mYWNlMSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICM2MGJiNDY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZC1zaG93Y2FzZTpob3ZlciAuZmFjZS5mYWNlMSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIGJhY2tncm91bmQ6ICM2NGU0NDE7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQtc2hvd2Nhc2UgLmZhY2UuZmFjZTEgLmNvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkLXNob3djYXNlOmhvdmVyIC5mYWNlLmZhY2UxIC5jb250ZW50IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkLXNob3djYXNlIC5mYWNlLmZhY2UxIC5jb250ZW50IGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZC1zaG93Y2FzZSAuZmFjZS5mYWNlMSAuY29udGVudCBoMyB7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkLXNob3djYXNlIC5mYWNlLmZhY2UyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZC1zaG93Y2FzZTpob3ZlciAuZmFjZS5mYWNlMiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkLXNob3djYXNlIC5mYWNlLmZhY2UyIC5jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jb250YWluZXIgLmNhcmQtc2hvd2Nhc2UgLmZhY2UuZmFjZTIgLmNvbnRlbnQgYSB7XHJcbiAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogLS0tLSBSZWFkIE1vcmUgQnV0dG9uLS0tLS0qL1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkLXNob3djYXNlIC5mYWNlLmZhY2UyIC5jb250ZW50IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZpZ2F0ZS1iYWNre1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA5NSU7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3VwLWFycm93LnBuZycpIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsLjYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLVNvY2lhbCBJY29ucyAgQ1NTLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnNvY2lhbC1pY29ucyB7XHJcbiAgdG9wOiAyMCU7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgdWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgdWwgbGkge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyB1bCBsaTpob3ZlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjNjBiYjQ2O1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxufVxyXG5cclxuLmZvb3Rlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdywgY29sdW1uO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmJveCAuYm94LWltYWdlIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3ggaW1nIHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmJveCBwIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1zb2NpYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xyXG59XHJcblxyXG4uYm94LXNvY2lhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtc29jaWFsIHAge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWFpbi1ib3gge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5icmFuZC1sb2dvIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAlIDUwJTtcclxuICB9XHJcblxyXG4gIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLXNvY2lhbCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLm1vdmUtdXAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAubWFpbiAudGl0bGUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLm1haW4gLnRpdGxlIGgxLFxyXG4gIC5tYWluIGgxIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-main-page',
          templateUrl: './main-page.component.html',
          styleUrls: ['./main-page.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, {
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/client/services/client-auth.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/client/services/client-auth.service.ts ***!
    \********************************************************/

  /*! exports provided: ClientAuthService */

  /***/
  function srcAppClientServicesClientAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientAuthService", function () {
      return ClientAuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'customers/';

    var ClientAuthService =
    /*#__PURE__*/
    function () {
      function ClientAuthService(http, router) {
        _classCallCheck(this, ClientAuthService);

        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.isAuthenticatedListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoading = false;
        this.userListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(ClientAuthService, [{
        key: "getIsAuthenticated",
        value: function getIsAuthenticated() {
          return this.isAuthenticated;
        }
      }, {
        key: "getIsAuthenticatedListener",
        value: function getIsAuthenticatedListener() {
          return this.isAuthenticatedListener;
        }
      }, {
        key: "getIsLoading",
        value: function getIsLoading() {
          return this.isLoading;
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.user;
        }
      }, {
        key: "getUserListener",
        value: function getUserListener() {
          return this.userListener.asObservable();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('clientService died');
        }
      }, {
        key: "onSignUp",
        value: function onSignUp(customer) {
          var _this45 = this;

          this.isLoading = true;
          this.http.post(BACKEND_URL + 'signup', customer).subscribe(function (res) {
            console.log('signup success', res);

            _this45.authMethod(res);

            _this45.router.navigate(['/client']);
          }, function (err) {
            _this45.setAuthenticated(false);
          });
        }
      }, {
        key: "login",
        value: function login(phoneNumber, password) {
          var _this46 = this;

          var keepMelogedIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var authData = {
            phone: phoneNumber,
            password: password
          };
          this.isLoading = true;
          this.http.post(BACKEND_URL + 'login', authData).subscribe(function (res) {
            _this46.authMethod(res, keepMelogedIn);

            _this46.router.navigate(['/client']);
          }, function (err) {
            _this46.setAuthenticated(false);
          });
        }
      }, {
        key: "setAuthenticated",
        value: function setAuthenticated(state) {
          this.isAuthenticated = state;
          this.isAuthenticatedListener.next(state);
          this.isLoading = false;
        }
      }, {
        key: "authMethod",
        value: function authMethod(res) {
          var keepMelogedIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var token = res.token;
          this.token = token;

          if (token) {
            this.token = token;
            this.setAuthenticated(true);
            var user = res.user;
            this.user = user;
            this.userListener.next(this.user);
            var expiresInDuration = res.expiresIn;
            this.setAuthTimer(expiresInDuration);

            if (keepMelogedIn) {
              var now = new Date();
              var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
              this.saveAuthData(token, expirationDate, user);
            }
          }
        } ///--- Summary ---////
        /// Title : Loging out
        /// Description :
        /// Returning Args :

      }, {
        key: "logout",
        value: function logout() {
          this.setAuthenticated(false);
          this.token = null;
          this.isAuthenticated = false;
          clearTimeout(this.tokenTimer);
          this.clearAuthData();
          this.user = null;
          this.router.navigate(['/client/login']);
        } ///--- Summary ---////
        /// Title : Auto authenticate the user
        /// Description : Automatically authenticating the user
        /// Returning Args :

      }, {
        key: "autoAuthUser",
        value: function autoAuthUser() {
          var navigateToDashBoard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var authInfo = this.getAuthData();

          if (!authInfo) {
            return;
          }

          var now = new Date();
          var expiresIn = authInfo.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.token = authInfo.token;
            this.user = authInfo.user;
            this.userListener.next(this.user);
            this.setAuthTimer(expiresIn / 1000);
            this.setAuthenticated(true);

            if (navigateToDashBoard) {
              this.router.navigate(['/client']);
            }
          }
        } ///--- Summary ---////
        /// Title : Auth timer for token date
        /// Description : updating the ui based on the token expire date
        /// Returning Args :

      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(duration) {
          var _this47 = this;

          this.tokenTimer = setTimeout(function () {
            _this47.logout();
          }, duration * 1000);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        } ///--- Summary ---////
        /// Title : getting the authintecation data from local storage
        /// Description :
        /// Returning Args :

      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem('client-token');
          var expirationDate = localStorage.getItem('client-expirationDate');
          var firstName = localStorage.getItem('client-firstName');
          var lastName = localStorage.getItem('client-lastName');
          var id = localStorage.getItem('client-id');

          if (!token || !expirationDate || !id || !firstName || !lastName) {
            return;
          }

          return {
            token: token,
            expirationDate: new Date(expirationDate),
            user: {
              firstName: firstName,
              lastName: lastName,
              _id: id
            }
          };
        }
      }, {
        key: "updateUserData",
        value: function updateUserData(customer) {
          console.log(customer);
          localStorage.setItem('client-firstName', customer.firstName);
          localStorage.setItem('client-lastName', customer.lastName);
          var authInfo = this.getAuthData();
          this.user = authInfo.user;
          this.userListener.next(this.user);
        } ///--- Summary ---////
        /// Title : Saving to local storage
        /// Description : saving the auth data to local storage
        /// Returning Args :

      }, {
        key: "saveAuthData",
        value: function saveAuthData(token, expirationDate, user) {
          localStorage.setItem('client-token', token);
          localStorage.setItem('client-expirationDate', expirationDate.toISOString());
          localStorage.setItem('client-firstName', user.firstName);
          localStorage.setItem('client-lastName', user.lastName);
          localStorage.setItem('client-id', user._id);
        } ///--- Summary ---////
        /// Title : Clear auth data from local storage
        /// Description : clearing the local storage
        /// Returning Args :

      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem('client-token');
          localStorage.removeItem('client-expirationDate');
          localStorage.removeItem('client-firstName');
          localStorage.removeItem('client-lastName');
          localStorage.removeItem('client-id');
        }
      }]);

      return ClientAuthService;
    }();

    ClientAuthService.ɵfac = function ClientAuthService_Factory(t) {
      return new (t || ClientAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ClientAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClientAuthService,
      factory: ClientAuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/services/client-info.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/client/services/client-info.service.ts ***!
    \********************************************************/

  /*! exports provided: ClientInfoService */

  /***/
  function srcAppClientServicesClientInfoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientInfoService", function () {
      return ClientInfoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _client_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./client-auth.service */
    "./src/app/client/services/client-auth.service.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'customers/';

    var ClientInfoService =
    /*#__PURE__*/
    function () {
      function ClientInfoService(http, clientAuthService) {
        _classCallCheck(this, ClientInfoService);

        this.http = http;
        this.clientAuthService = clientAuthService;
        this.requestsStaticsListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.paginationStaticsListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ClientInfoService, [{
        key: "getPaginationStaticsListener",
        value: function getPaginationStaticsListener() {
          return this.paginationStaticsListener.asObservable();
        }
      }, {
        key: "getStatistics",
        value: function getStatistics() {
          return this.requestsStatics;
        }
      }, {
        key: "getClientRequestsStaticsListener",
        value: function getClientRequestsStaticsListener() {
          return this.requestsStaticsListener.asObservable();
        }
      }, {
        key: "getClientRequestsStatics",
        value: function getClientRequestsStatics() {
          var _this48 = this;

          this.http.get(BACKEND_URL + 'getRequestsStatics/' + this.clientAuthService.getUser()._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return {
              data: Object.keys(res.data).map(function (name) {
                var newName;

                if (name == 'numOfRequests') {
                  newName = 'الطلبات';
                } else if (name == 'numOfDoneRequests') {
                  newName = 'طلبات تمت';
                }

                return {
                  name: newName,
                  value: res.data[name]
                };
              }),
              numOfRequests: res.data.numOfRequests,
              numOfDoneRequests: res.data.numOfDoneRequests,
              message: res.message
            };
          })).subscribe(function (res) {
            _this48.requestsStatics = res.data;

            _this48.requestsStaticsListener.next(_toConsumableArray(_this48.requestsStatics));

            _this48.numOfRequests = res.numOfRequests;

            _this48.paginationStaticsListener.next(_this48.numOfRequests);
          });
        }
      }, {
        key: "getCustomerDetails",
        value: function getCustomerDetails() {
          return this.http.get(BACKEND_URL + this.clientAuthService.getUser()._id);
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(updateOps) {
          return this.http.patch(BACKEND_URL + this.clientAuthService.getUser()._id, updateOps);
        }
      }]);

      return ClientInfoService;
    }();

    ClientInfoService.ɵfac = function ClientInfoService_Factory(t) {
      return new (t || ClientInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_client_auth_service__WEBPACK_IMPORTED_MODULE_5__["ClientAuthService"]));
    };

    ClientInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClientInfoService,
      factory: ClientInfoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _client_auth_service__WEBPACK_IMPORTED_MODULE_5__["ClientAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/class-directive.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/directives/class-directive.directive.ts ***!
    \*********************************************************/

  /*! exports provided: ClassDirectiveDirective */

  /***/
  function srcAppDirectivesClassDirectiveDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassDirectiveDirective", function () {
      return ClassDirectiveDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClassDirectiveDirective =
    /*#__PURE__*/
    function () {
      function ClassDirectiveDirective(element) {
        _classCallCheck(this, ClassDirectiveDirective);

        this.element = element;
      }

      _createClass(ClassDirectiveDirective, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          var elementOffsetTop = document.getElementById('toReach').offsetTop;

          if (elementOffsetTop <= window.pageYOffset) {
            this.element.nativeElement.classList.add(this.myClassToAdd);
          } else {
            this.element.nativeElement.classList.remove(this.myClassToAdd);
          }
        }
      }]);

      return ClassDirectiveDirective;
    }();

    ClassDirectiveDirective.ɵfac = function ClassDirectiveDirective_Factory(t) {
      return new (t || ClassDirectiveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ClassDirectiveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClassDirectiveDirective,
      selectors: [["", "addAttributeOn", ""]],
      hostBindings: function ClassDirectiveDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ClassDirectiveDirective_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        myClassToAdd: "myClassToAdd",
        elementIdToReach: ["addAttributeOn", "elementIdToReach"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassDirectiveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[addAttributeOn]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        myClassToAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        elementIdToReach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['addAttributeOn']
        }],
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', []]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/error-interceptor.ts":
  /*!**************************************!*\
    !*** ./src/app/error-interceptor.ts ***!
    \**************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utils-components/dialog-message/dialog-message.component */
    "./src/app/utils-components/dialog-message/dialog-message.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(dialog) {
        _classCallCheck(this, ErrorInterceptor);

        this.dialog = dialog;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this49 = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            console.log(error);
            var errorMsg = "قم بفحص اتصال الانترنت !";

            if (error.error.message) {
              errorMsg = error.error.message;
            }

            console.log(_this49.dialog.openDialogs);
            if (_this49.dialog.openDialogs.length < 2) _this49.dialog.open(_utils_components_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_3__["DialogMessageComponent"], {
              data: {
                title: 'خطاء',
                message: errorMsg
              }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/globalServices/cities.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/globalServices/cities.service.ts ***!
    \**************************************************/

  /*! exports provided: CitiesService */

  /***/
  function srcAppGlobalServicesCitiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesService", function () {
      return CitiesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'cities/';

    var CitiesService =
    /*#__PURE__*/
    function () {
      function CitiesService(http) {
        _classCallCheck(this, CitiesService);

        this.http = http;
        this.citiesListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(CitiesService, [{
        key: "getCitiesListener",
        value: function getCitiesListener() {
          return this.citiesListener.asObservable();
        }
      }, {
        key: "getCites",
        value: function getCites() {
          var _this50 = this;

          this.http.get(BACKEND_URL).subscribe(function (res) {
            _this50.cities = res.cities;

            _this50.citiesListener.next(_toConsumableArray(_this50.cities));
          });
        }
      }, {
        key: "addCity",
        value: function addCity(name) {
          return this.http.post(BACKEND_URL, {
            name: name
          });
        }
      }]);

      return CitiesService;
    }();

    CitiesService.ɵfac = function CitiesService_Factory(t) {
      return new (t || CitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CitiesService,
      factory: CitiesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitiesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/globalServices/companies.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/globalServices/companies.service.ts ***!
    \*****************************************************/

  /*! exports provided: CompaniesService */

  /***/
  function srcAppGlobalServicesCompaniesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniesService", function () {
      return CompaniesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'companies/';

    var CompaniesService =
    /*#__PURE__*/
    function () {
      function CompaniesService(http) {
        _classCallCheck(this, CompaniesService);

        this.http = http;
        this.companiesListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(CompaniesService, [{
        key: "getCompaniesListener",
        value: function getCompaniesListener() {
          return this.companiesListener.asObservable();
        }
      }, {
        key: "getCompanies",
        value: function getCompanies() {
          var _this51 = this;

          this.http.get(BACKEND_URL).subscribe(function (res) {
            _this51.companies = res.companies;

            _this51.companiesListener.next(_toConsumableArray(_this51.companies));
          });
        }
      }, {
        key: "addCompany",
        value: function addCompany(name) {
          return this.http.post(BACKEND_URL, {
            name: name
          });
        }
      }]);

      return CompaniesService;
    }();

    CompaniesService.ɵfac = function CompaniesService_Factory(t) {
      return new (t || CompaniesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CompaniesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CompaniesService,
      factory: CompaniesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/globalServices/customers.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/globalServices/customers.service.ts ***!
    \*****************************************************/

  /*! exports provided: CustomersService */

  /***/
  function srcAppGlobalServicesCustomersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersService", function () {
      return CustomersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'customers/';

    var CustomersService =
    /*#__PURE__*/
    function () {
      function CustomersService(http) {
        _classCallCheck(this, CustomersService);

        this.http = http;
        this.customersListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(CustomersService, [{
        key: "getCustomersListener",
        value: function getCustomersListener() {
          return this.customersListener.asObservable();
        }
      }, {
        key: "getCustomers",
        value: function getCustomers() {
          var _this52 = this;

          var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var pagesize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
          var queryParams = "?page=".concat(page, "&pagesize=").concat(pagesize);
          this.http.post(BACKEND_URL + 'search' + queryParams, {
            search: search
          }).subscribe(function (data) {
            _this52.totalCustomers = data.totalCustomers;
            _this52.customers = data.customers;

            _this52.customersListener.next({
              customers: _toConsumableArray(_this52.customers),
              totalCustomers: _this52.totalCustomers
            });
          });
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(customer) {
          var _this53 = this;

          this.http["delete"](BACKEND_URL + customer._id).subscribe(function (res) {
            console.log('deleted customer', res);

            var index = _this53.customers.indexOf(customer);

            console.log(index);

            _this53.customers.splice(index, 1);

            _this53.customersListener.next({
              customers: _toConsumableArray(_this53.customers),
              totalCustomers: _this53.totalCustomers
            });
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(customer, updateOps) {
          var _this54 = this;

          this.http.patch(BACKEND_URL + customer._id, updateOps).subscribe(function (res) {
            //console.log(this.customers);
            var index = _this54.customers.indexOf(customer);

            if (index !== -1) {
              console.log(res.customer);
              console.log(index);
              _this54.customers[index] = res.customer;

              _this54.customersListener.next({
                customers: _toConsumableArray(_this54.customers),
                totalCustomers: _this54.totalCustomers
              });
            }
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return CustomersService;
    }();

    CustomersService.ɵfac = function CustomersService_Factory(t) {
      return new (t || CustomersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CustomersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomersService,
      factory: CustomersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/globalServices/devices.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/globalServices/devices.service.ts ***!
    \***************************************************/

  /*! exports provided: DevicesService */

  /***/
  function srcAppGlobalServicesDevicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevicesService", function () {
      return DevicesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'devices/';

    var DevicesService =
    /*#__PURE__*/
    function () {
      function DevicesService(http) {
        _classCallCheck(this, DevicesService);

        this.http = http;
        this.devicesListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(DevicesService, [{
        key: "getDevicesListener",
        value: function getDevicesListener() {
          return this.devicesListener.asObservable();
        }
      }, {
        key: "getDevices",
        value: function getDevices() {
          var _this55 = this;

          this.http.get(BACKEND_URL).subscribe(function (res) {
            _this55.devices = res.devices;

            _this55.devicesListener.next(_toConsumableArray(_this55.devices));
          });
        }
      }, {
        key: "getDevicesByCompanyId",
        value: function getDevicesByCompanyId(companyId) {
          var _this56 = this;

          this.http.get(BACKEND_URL + companyId).subscribe(function (res) {
            _this56.devices = res.devices;

            _this56.devicesListener.next(_toConsumableArray(_this56.devices));
          });
        }
      }, {
        key: "addDevice",
        value: function addDevice(model, released, company) {
          return this.http.post(BACKEND_URL, {
            model: model,
            released: released,
            company: company
          });
        }
      }]);

      return DevicesService;
    }();

    DevicesService.ɵfac = function DevicesService_Factory(t) {
      return new (t || DevicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    DevicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DevicesService,
      factory: DevicesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/globalServices/forgot-password.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/globalServices/forgot-password.service.ts ***!
    \***********************************************************/

  /*! exports provided: ForgotPasswordService */

  /***/
  function srcAppGlobalServicesForgotPasswordServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordService", function () {
      return ForgotPasswordService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'forgotPassword/';

    var ForgotPasswordService =
    /*#__PURE__*/
    function () {
      function ForgotPasswordService(http) {
        _classCallCheck(this, ForgotPasswordService);

        this.http = http;
      }

      _createClass(ForgotPasswordService, [{
        key: "sendMessageAgain",
        value: function sendMessageAgain() {
          this.http.post(BACKEND_URL + 'again', {
            forgotPasswordId: this.forgotPasswordId
          }).subscribe(function (res) {});
        }
      }, {
        key: "addForgotPasswordRequest",
        value: function addForgotPasswordRequest(phone, callback) {
          var _this57 = this;

          this.phone = phone;
          this.http.post(BACKEND_URL, {
            phone: phone
          }).subscribe(function (res) {
            _this57.code = res.code;
            _this57.forgotPasswordId = res.forgotPasswordId;
            callback();
          });
        }
      }, {
        key: "verifyRequest",
        value: function verifyRequest(code, callback) {
          this.http.post(BACKEND_URL + 'verify', {
            code: code,
            forgotPasswordId: this.forgotPasswordId
          }).subscribe(function (res) {
            callback();
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword(password, callback) {
          this.http.patch(BACKEND_URL, {
            password: password,
            phone: this.phone,
            forgotPasswordId: this.forgotPasswordId
          }).subscribe(function (res) {
            callback();
          });
        }
      }]);

      return ForgotPasswordService;
    }();

    ForgotPasswordService.ɵfac = function ForgotPasswordService_Factory(t) {
      return new (t || ForgotPasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ForgotPasswordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ForgotPasswordService,
      factory: ForgotPasswordService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/globalServices/issues.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/globalServices/issues.service.ts ***!
    \**************************************************/

  /*! exports provided: IssuesService */

  /***/
  function srcAppGlobalServicesIssuesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IssuesService", function () {
      return IssuesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'issues/';

    var IssuesService =
    /*#__PURE__*/
    function () {
      function IssuesService(http) {
        _classCallCheck(this, IssuesService);

        this.http = http;
        this.issuesListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(IssuesService, [{
        key: "getIssuesListener",
        value: function getIssuesListener() {
          return this.issuesListener.asObservable();
        }
      }, {
        key: "getIssues",
        value: function getIssues() {
          var _this58 = this;

          this.http.get(BACKEND_URL).subscribe(function (res) {
            _this58.issues = res.issues;

            _this58.issuesListener.next(_toConsumableArray(_this58.issues));
          });
        }
      }, {
        key: "addIssue",
        value: function addIssue(name) {
          return this.http.post(BACKEND_URL, {
            name: name
          });
        }
      }]);

      return IssuesService;
    }();

    IssuesService.ɵfac = function IssuesService_Factory(t) {
      return new (t || IssuesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    IssuesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IssuesService,
      factory: IssuesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssuesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/globalServices/requests.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/globalServices/requests.service.ts ***!
    \****************************************************/

  /*! exports provided: RequestsService */

  /***/
  function srcAppGlobalServicesRequestsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsService", function () {
      return RequestsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _client_services_client_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../client/services/client-auth.service */
    "./src/app/client/services/client-auth.service.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'requests/';

    var RequestsService =
    /*#__PURE__*/
    function () {
      function RequestsService(http, clientAuthService) {
        _classCallCheck(this, RequestsService);

        this.http = http;
        this.clientAuthService = clientAuthService;
        this.requests = [];
        this.requestsListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.requestListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(RequestsService, [{
        key: "getRequestsListener",
        value: function getRequestsListener() {
          return this.requestsListener.asObservable();
        }
      }, {
        key: "getRequestListener",
        value: function getRequestListener() {
          return this.requestListener.asObservable();
        }
      }, {
        key: "getRequests",
        value: function getRequests() {
          var _this59 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var pagesize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var search = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          var queryParams = "?page=".concat(page, "&pagesize=").concat(pagesize);
          this.http.post(BACKEND_URL + queryParams, {
            search: search,
            filter: filter
          }).subscribe(function (res) {
            _this59.requests = res.requests;
            _this59.max = res.max;

            _this59.requestsListener.next({
              requests: _toConsumableArray(_this59.requests),
              max: res.max
            });
          });
        }
      }, {
        key: "getRequestsByCustomerId",
        value: function getRequestsByCustomerId() {
          var _this60 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var pagesize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

          var customerId = this.clientAuthService.getUser()._id;

          var queryParams = "requestsByCustomerId?page=".concat(page, "&pagesize=").concat(pagesize, "&customerId=").concat(customerId);
          this.http.get(BACKEND_URL + queryParams).subscribe(function (res) {
            _this60.requests = res.requests;

            _this60.requestsListener.next({
              requests: _toConsumableArray(_this60.requests),
              max: null
            });
          });
        }
      }, {
        key: "getRequestById",
        value: function getRequestById(requestId) {
          var _this61 = this;

          var userId = this.clientAuthService.getUser()._id;

          var queryParams = "getRequest?customerId=".concat(userId, "&requestId=").concat(requestId);
          this.http.get(BACKEND_URL + 'getRequest/' + queryParams).subscribe(function (res) {
            _this61.request = res.request;

            _this61.requestListener.next(Object.assign({}, _this61.request));
          });
        }
      }, {
        key: "addRequest",
        value: function addRequest(request, error, success) {
          var _this62 = this;

          this.http.post(BACKEND_URL, request).subscribe(function (res) {
            _this62.requests.push(res.request);

            _this62.requestsListener.next({
              requests: _toConsumableArray(_this62.requests),
              max: _this62.max + 1
            });

            success();
          }, function (err) {
            error();
          });
        }
      }, {
        key: "updateReuqest",
        value: function updateReuqest(requestId, updateOp) {
          return this.http.patch(BACKEND_URL + requestId, updateOp);
        }
      }, {
        key: "deleteRequest",
        value: function deleteRequest(requestId, success) {
          var _this63 = this;

          this.http["delete"](BACKEND_URL + requestId).subscribe(function (res) {
            var newArray = _this63.requests.filter(function (req) {
              return req._id !== requestId;
            });

            _this63.requests = newArray;

            _this63.requestsListener.next({
              requests: _toConsumableArray(_this63.requests),
              max: _this63.max - 1
            });

            success();
          });
        }
      }]);

      return RequestsService;
    }();

    RequestsService.ɵfac = function RequestsService_Factory(t) {
      return new (t || RequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_client_services_client_auth_service__WEBPACK_IMPORTED_MODULE_4__["ClientAuthService"]));
    };

    RequestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RequestsService,
      factory: RequestsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _client_services_client_auth_service__WEBPACK_IMPORTED_MODULE_4__["ClientAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/globalServices/sms.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/globalServices/sms.service.ts ***!
    \***********************************************/

  /*! exports provided: SMSService */

  /***/
  function srcAppGlobalServicesSmsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SMSService", function () {
      return SMSService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'sms/';

    var SMSService =
    /*#__PURE__*/
    function () {
      function SMSService(http) {
        _classCallCheck(this, SMSService);

        this.http = http;
      }

      _createClass(SMSService, [{
        key: "sendMessage",
        value: function sendMessage(to, toAll, message) {
          this.http.post(BACKEND_URL, {
            to: to,
            toAll: toAll,
            message: message
          }).subscribe(function (res) {
            console.log(res);
          });
        }
      }]);

      return SMSService;
    }();

    SMSService.ɵfac = function SMSService_Factory(t) {
      return new (t || SMSService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    SMSService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SMSService,
      factory: SMSService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SMSService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/Customer.ts":
  /*!************************************!*\
    !*** ./src/app/models/Customer.ts ***!
    \************************************/

  /*! exports provided: Customer */

  /***/
  function srcAppModelsCustomerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Customer", function () {
      return Customer;
    });

    var Customer = function Customer() {
      _classCallCheck(this, Customer);
    };
    /***/

  },

  /***/
  "./src/app/models/Device.ts":
  /*!**********************************!*\
    !*** ./src/app/models/Device.ts ***!
    \**********************************/

  /*! exports provided: Device */

  /***/
  function srcAppModelsDeviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return Device;
    });

    var Device = function Device() {
      _classCallCheck(this, Device);

      this.model = "iPhone X";
      this.released = new Date();
      this._id = "1";
    };
    /***/

  },

  /***/
  "./src/app/utils-components/bootstrap-dialog/bootstrap-dialog.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/utils-components/bootstrap-dialog/bootstrap-dialog.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: BootstrapDialogComponent */

  /***/
  function srcAppUtilsComponentsBootstrapDialogBootstrapDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootstrapDialogComponent", function () {
      return BootstrapDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../phone-auth/phone-auth.component */
    "./src/app/utils-components/phone-auth/phone-auth.component.ts");

    var BootstrapDialogComponent =
    /*#__PURE__*/
    function () {
      function BootstrapDialogComponent() {
        _classCallCheck(this, BootstrapDialogComponent);
      }

      _createClass(BootstrapDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BootstrapDialogComponent;
    }();

    BootstrapDialogComponent.ɵfac = function BootstrapDialogComponent_Factory(t) {
      return new (t || BootstrapDialogComponent)();
    };

    BootstrapDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BootstrapDialogComponent,
      selectors: [["app-bootstrap-dialog"]],
      decls: 17,
      vars: 0,
      consts: [["data-toggle", "modal", "data-target", "#exampleModalLong", 1, "link"], ["id", "exampleModalLong", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLongTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"]],
      template: function BootstrapDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062A\u0639\u062F\u064A\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u062A\u0639\u062F\u064A\u0644 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-phone-auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_1__["PhoneAuthComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxzLWNvbXBvbmVudHMvYm9vdHN0cmFwLWRpYWxvZy9ib290c3RyYXAtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bootstrap-dialog',
          templateUrl: './bootstrap-dialog.component.html',
          styleUrls: ['./bootstrap-dialog.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils-components/dialog-message/dialog-message.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/utils-components/dialog-message/dialog-message.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DialogMessageComponent */

  /***/
  function srcAppUtilsComponentsDialogMessageDialogMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogMessageComponent", function () {
      return DialogMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function DialogMessageComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message !");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DialogMessageComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogMessageComponent_div_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.onCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u063A\u0627\u0621");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogMessageComponent_div_7_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.onConfirm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u062A\u0623\u0643\u064A\u062F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DialogMessageComponent =
    /*#__PURE__*/
    function () {
      function DialogMessageComponent(dialogRef, data) {
        _classCallCheck(this, DialogMessageComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onConfirm",
        value: function onConfirm() {
          if (this.data.confirm) this.data.confirm();
          this.dialogRef.close(true);
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          if (this.data.cancel) this.data.cancel();
        }
      }]);

      return DialogMessageComponent;
    }();

    DialogMessageComponent.ɵfac = function DialogMessageComponent_Factory(t) {
      return new (t || DialogMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogMessageComponent,
      selectors: [["app-dialog-message"]],
      decls: 8,
      vars: 4,
      consts: [[1, "dialog-container"], [1, "content"], ["mat-dialog-title", ""], [4, "ngIf"], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "warn", "mat-dialog-close", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function DialogMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DialogMessageComponent_span_4_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DialogMessageComponent_div_7_Template, 5, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.buttons);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: \"Cairo\";\r\n\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  padding: 1rem;\r\n  font-size: 1rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.dialog-container[_ngcontent-%COMP%]{\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMtY29tcG9uZW50cy9kaWFsb2ctbWVzc2FnZS9kaWFsb2ctbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9COztBQUV0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUdBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMtY29tcG9uZW50cy9kaWFsb2ctbWVzc2FnZS9kaWFsb2ctbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQgaDEsLmNvbnRlbnQgcHtcclxuICBmb250LWZhbWlseTogXCJDYWlyb1wiO1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQgcHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLmRpYWxvZy1jb250YWluZXJ7XHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-message',
          templateUrl: './dialog-message.component.html',
          styleUrls: ['./dialog-message.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils-components/edit-customer-dialog/edit-customer-dialog.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/utils-components/edit-customer-dialog/edit-customer-dialog.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: EditCustomerDialogComponent */

  /***/
  function srcAppUtilsComponentsEditCustomerDialogEditCustomerDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCustomerDialogComponent", function () {
      return EditCustomerDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/globalServices/cities.service */
    "./src/app/globalServices/cities.service.ts");
    /* harmony import */


    var src_app_globalServices_customers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/globalServices/customers.service */
    "./src/app/globalServices/customers.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function EditCustomerDialogComponent_mat_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r136 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r136._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r136.name);
      }
    }

    var EditCustomerDialogComponent =
    /*#__PURE__*/
    function () {
      function EditCustomerDialogComponent(data, citiesService, customerService, dialogRef) {
        _classCallCheck(this, EditCustomerDialogComponent);

        this.data = data;
        this.citiesService = citiesService;
        this.customerService = customerService;
        this.dialogRef = dialogRef;
      }

      _createClass(EditCustomerDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this64 = this;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.customer.firstName),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.customer.lastName),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.customer.city._id),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.customer.phone)
          });
          this.citiesService.getCites();
          this.citiesSub = this.citiesService.getCitiesListener().subscribe(function (res) {
            _this64.cities = res;

            _this64.form.get('city').setValue(_this64.data.customer.city._id);
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          var _this65 = this;

          var _a;

          var updateOps = [];
          var hash = Object.keys(this.form.value).map(function (name) {
            return {
              name: name,
              value: _this65.form.value[name]
            };
          });

          for (var i = 0, k = 0; i < hash.length; i++) {
            if (hash[i].value != this.data.customer[hash[i].name] && hash[i].value != ((_a = this.data.customer[hash[i].name]) === null || _a === void 0 ? void 0 : _a._id)) {
              updateOps[k++] = {
                'name': hash[i].name,
                'value': hash[i].value
              };
            }
          }

          this.customerService.updateCustomer(this.data.customer, updateOps);
          this.dialogRef.close();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.citiesSub.unsubscribe();
        }
      }]);

      return EditCustomerDialogComponent;
    }();

    EditCustomerDialogComponent.ɵfac = function EditCustomerDialogComponent_Factory(t) {
      return new (t || EditCustomerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_3__["CitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globalServices_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    EditCustomerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditCustomerDialogComponent,
      selectors: [["app-edit-customer-dialog"]],
      decls: 28,
      vars: 4,
      consts: [[1, "dialog-container"], ["mat-dialog-title", ""], [1, "mat-typography"], [1, "card", 3, "formGroup"], ["appearance", "fill"], ["formControlName", "firstName", "matInput", ""], ["formControlName", "lastName", "matInput", ""], ["formControlName", "phone", "matInput", ""], ["appearance", "fill", 3, "hideRequiredMarker", "floatLabel"], ["formControlName", "city"], ["value", "-1"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-stroked-button", "", "mat-dialog-close", "", "color", "warn"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 1, "white", 3, "click"], [3, "value"]],
      template: function EditCustomerDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062A\u0639\u062F\u064A\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0632\u0628\u0648\u0646");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0634\u062E\u0635\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0627\u0644\u0639\u0627\u0626\u0644\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0627\u0644\u0647\u0627\u062A\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062F\u064A\u0646\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditCustomerDialogComponent_mat_option_21_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-dialog-actions", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0627\u0644\u063A\u0627\u0621");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCustomerDialogComponent_Template_button_click_26_listener() {
            return ctx.onUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u062A\u0639\u062F\u064A\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideRequiredMarker", false)("floatLabel", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".dialog-container[_ngcontent-%COMP%]{\r\n  min-width: 50vw;\r\n  min-height: 50vh;\r\n  direction: rtl;\r\n}\r\n\r\nmat-dialog-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  padding: 1rem;\r\n}\r\n\r\nmat-dialog-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{\r\n  width: 60%;\r\n  text-align: right;\r\n}\r\n\r\nbutton.white[_ngcontent-%COMP%]{\r\n  color: #fff !important;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMtY29tcG9uZW50cy9lZGl0LWN1c3RvbWVyLWRpYWxvZy9lZGl0LWN1c3RvbWVyLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFHQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7O0FBRXhCIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMtY29tcG9uZW50cy9lZGl0LWN1c3RvbWVyLWRpYWxvZy9lZGl0LWN1c3RvbWVyLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXJ7XHJcbiAgbWluLXdpZHRoOiA1MHZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCBmb3Jte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50IGZvcm0gbWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDYwJTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuYnV0dG9uLndoaXRle1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCustomerDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-customer-dialog',
          templateUrl: './edit-customer-dialog.component.html',
          styleUrls: ['./edit-customer-dialog.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: src_app_globalServices_cities_service__WEBPACK_IMPORTED_MODULE_3__["CitiesService"]
        }, {
          type: src_app_globalServices_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils-components/edit-phone-dialog/edit-phone-dialog.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/utils-components/edit-phone-dialog/edit-phone-dialog.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: EditPhoneDialogComponent */

  /***/
  function srcAppUtilsComponentsEditPhoneDialogEditPhoneDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPhoneDialogComponent", function () {
      return EditPhoneDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../phone-auth/phone-auth.service */
    "./src/app/utils-components/phone-auth/phone-auth.service.ts");
    /* harmony import */


    var src_app_client_services_client_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/client/services/client-info.service */
    "./src/app/client/services/client-info.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../phone-auth/phone-auth.component */
    "./src/app/utils-components/phone-auth/phone-auth.component.ts");

    var EditPhoneDialogComponent =
    /*#__PURE__*/
    function () {
      function EditPhoneDialogComponent(clientService, dialogRef) {
        _classCallCheck(this, EditPhoneDialogComponent);

        this.clientService = clientService;
        this.dialogRef = dialogRef;
      }

      _createClass(EditPhoneDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChangePhoneNumber",
        value: function onChangePhoneNumber(e) {
          var _this66 = this;

          console.log(e);
          var updateOps = [{
            name: 'phone',
            value: e
          }];
          this.clientService.updateCustomer(updateOps).subscribe(function (res) {
            console.log(res);

            _this66.dialogRef.close(e);
          });
        }
      }]);

      return EditPhoneDialogComponent;
    }();

    EditPhoneDialogComponent.ɵfac = function EditPhoneDialogComponent_Factory(t) {
      return new (t || EditPhoneDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_client_services_client_info_service__WEBPACK_IMPORTED_MODULE_2__["ClientInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]));
    };

    EditPhoneDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditPhoneDialogComponent,
      selectors: [["app-edit-phone-dialog"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_1__["PhoneAuthService"], src_app_client_services_client_info_service__WEBPACK_IMPORTED_MODULE_2__["ClientInfoService"]])],
      decls: 2,
      vars: 0,
      consts: [[3, "phoneNumber"]],
      template: function EditPhoneDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-phone-auth", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("phoneNumber", function EditPhoneDialogComponent_Template_app_phone_auth_phoneNumber_1_listener($event) {
            return ctx.onChangePhoneNumber($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_4__["PhoneAuthComponent"]],
      styles: ["div[_ngcontent-%COMP%]{\r\n  width: 50vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMtY29tcG9uZW50cy9lZGl0LXBob25lLWRpYWxvZy9lZGl0LXBob25lLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMtY29tcG9uZW50cy9lZGl0LXBob25lLWRpYWxvZy9lZGl0LXBob25lLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG59XHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPhoneDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-phone-dialog',
          templateUrl: './edit-phone-dialog.component.html',
          styleUrls: ['./edit-phone-dialog.component.css'],
          providers: [_phone_auth_phone_auth_service__WEBPACK_IMPORTED_MODULE_1__["PhoneAuthService"], src_app_client_services_client_info_service__WEBPACK_IMPORTED_MODULE_2__["ClientInfoService"]]
        }]
      }], function () {
        return [{
          type: src_app_client_services_client_info_service__WEBPACK_IMPORTED_MODULE_2__["ClientInfoService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils-components/input-error/input-error.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/utils-components/input-error/input-error.component.ts ***!
    \***********************************************************************/

  /*! exports provided: InputErrorComponent */

  /***/
  function srcAppUtilsComponentsInputErrorInputErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputErrorComponent", function () {
      return InputErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    function InputErrorComponent_mat_error_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "this field is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InputErrorComponent_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "please enter a valid email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InputErrorComponent_mat_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r219.controller.name, " must be at least ", ctx_r219.controller.errors.minlength.requiredLength, " charachters");
      }
    }

    function InputErrorComponent_mat_error_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r220.controller.name, " must be no longer than ", ctx_r220.controller.errors.maxlength.requiredLength, " charachters");
      }
    }

    function InputErrorComponent_mat_error_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "passwords dosent ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InputErrorComponent_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "enter a valid phone ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var InputErrorComponent =
    /*#__PURE__*/
    function () {
      function InputErrorComponent() {
        _classCallCheck(this, InputErrorComponent);
      }

      _createClass(InputErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getError",
        value: function getError() {
          if (!this.errors) return;

          if (this.errors['required']) {
            return 'required';
          }

          if (this.errors['email']) {
            return 'email';
          }

          if (this.errors['email']) {
            return 'email';
          }

          if (this.errors['minlength']) {
            return 'minlength';
          }

          if (this.errors['maxlength']) {
            return 'maxlength';
          }

          if (this.errors['phoneNumber']) {
            return 'phoneNumber';
          }

          if (this.errors['passwordNotMatch']) {
            return 'passwordNotMatch';
          }
        }
      }]);

      return InputErrorComponent;
    }();

    InputErrorComponent.ɵfac = function InputErrorComponent_Factory(t) {
      return new (t || InputErrorComponent)();
    };

    InputErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputErrorComponent,
      selectors: [["app-input-error"]],
      inputs: {
        errors: "errors",
        controller: "controller"
      },
      decls: 6,
      vars: 6,
      consts: [[4, "ngIf"]],
      template: function InputErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputErrorComponent_mat_error_0_Template, 4, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputErrorComponent_mat_error_1_Template, 2, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputErrorComponent_mat_error_2_Template, 2, 2, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputErrorComponent_mat_error_3_Template, 2, 2, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputErrorComponent_mat_error_4_Template, 4, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputErrorComponent_mat_error_5_Template, 4, 0, "mat-error", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getError() === "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getError() === "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getError() === "minlength");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getError() === "maxlength");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getError() === "passwordNotMatch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getError() === "phoneNumber");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxzLWNvbXBvbmVudHMvaW5wdXQtZXJyb3IvaW5wdXQtZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input-error',
          templateUrl: './input-error.component.html',
          styleUrls: ['./input-error.component.css']
        }]
      }], function () {
        return [];
      }, {
        errors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        controller: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/utils-components/jqueryUtils.ts":
  /*!*************************************************!*\
    !*** ./src/app/utils-components/jqueryUtils.ts ***!
    \*************************************************/

  /*! exports provided: isScrolledIntoView, fadeIn */

  /***/
  function srcAppUtilsComponentsJqueryUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isScrolledIntoView", function () {
      return isScrolledIntoView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeIn", function () {
      return fadeIn;
    });
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

    var isScrolledIntoView = function isScrolledIntoView(elem) {
      var docViewTop = jquery__WEBPACK_IMPORTED_MODULE_0__(window).scrollTop();
      var docViewBottom = docViewTop + jquery__WEBPACK_IMPORTED_MODULE_0__(window).height();
      var elemTop = jquery__WEBPACK_IMPORTED_MODULE_0__(elem).offset().top;
      var elemBottom = elemTop + jquery__WEBPACK_IMPORTED_MODULE_0__(elem).height();
      return elemBottom <= docViewBottom && elemTop >= docViewTop;
    };

    var fadeIn = function fadeIn() {//   $(window).scroll(function () {
      //     var mypos = $(window).scrollTop();
      //     $(".fadeIn").each(function () {
      //         if (mypos > $(this).offset().top - 150) {
      //             $(this).css('opacity', 1);
      //         };
      //     });
      // });
    };
    /***/

  },

  /***/
  "./src/app/utils-components/normal-input-error/normal-input-error.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/utils-components/normal-input-error/normal-input-error.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: NormalInputErrorComponent */

  /***/
  function srcAppUtilsComponentsNormalInputErrorNormalInputErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NormalInputErrorComponent", function () {
      return NormalInputErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NormalInputErrorComponent_p_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r243.name, " is ");
      }
    }

    function NormalInputErrorComponent_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "please enter a valid email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalInputErrorComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r245.name, " must be at least ", ctx_r245.errors.minlength.requiredLength, " charachters");
      }
    }

    function NormalInputErrorComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r246.name, " must be no longer than ", ctx_r246.errors.maxlength.requiredLength, " charachters");
      }
    }

    function NormalInputErrorComponent_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "phone number not valid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalInputErrorComponent_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "name must contain letters only");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalInputErrorComponent_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords not match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NormalInputErrorComponent_p_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r250.name, " must contain letters and spaces only");
      }
    }

    var NormalInputErrorComponent =
    /*#__PURE__*/
    function () {
      function NormalInputErrorComponent() {
        _classCallCheck(this, NormalInputErrorComponent);
      }

      _createClass(NormalInputErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NormalInputErrorComponent;
    }();

    NormalInputErrorComponent.ɵfac = function NormalInputErrorComponent_Factory(t) {
      return new (t || NormalInputErrorComponent)();
    };

    NormalInputErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NormalInputErrorComponent,
      selectors: [["app-normal-input-error"]],
      inputs: {
        errors: "errors",
        name: "name"
      },
      decls: 8,
      vars: 8,
      consts: [[4, "ngIf"]],
      template: function NormalInputErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NormalInputErrorComponent_p_0_Template, 4, 1, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NormalInputErrorComponent_p_1_Template, 2, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NormalInputErrorComponent_p_2_Template, 2, 2, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NormalInputErrorComponent_p_3_Template, 2, 2, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NormalInputErrorComponent_p_4_Template, 2, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NormalInputErrorComponent_p_5_Template, 2, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NormalInputErrorComponent_p_6_Template, 2, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NormalInputErrorComponent_p_7_Template, 2, 1, "p", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors && ctx.errors["required"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors && ctx.errors["email"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors && ctx.errors["minlength"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors && ctx.errors["maxlength"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors && ctx.errors["phoneNumber"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors && ctx.errors["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors && ctx.errors["passwordNotMatch"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors && ctx.errors["text"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["p[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  color: red;\r\n  padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMtY29tcG9uZW50cy9ub3JtYWwtaW5wdXQtZXJyb3Ivbm9ybWFsLWlucHV0LWVycm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC91dGlscy1jb21wb25lbnRzL25vcm1hbC1pbnB1dC1lcnJvci9ub3JtYWwtaW5wdXQtZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5we1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NormalInputErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-normal-input-error',
          templateUrl: './normal-input-error.component.html',
          styleUrls: ['./normal-input-error.component.css']
        }]
      }], function () {
        return [];
      }, {
        errors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/utils-components/phone-auth/phone-auth.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/utils-components/phone-auth/phone-auth.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PhoneAuthComponent */

  /***/
  function srcAppUtilsComponentsPhoneAuthPhoneAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneAuthComponent", function () {
      return PhoneAuthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../validators */
    "./src/app/utils-components/validators.ts");
    /* harmony import */


    var _phone_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./phone-auth.service */
    "./src/app/utils-components/phone-auth/phone-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../normal-input-error/normal-input-error.component */
    "./src/app/utils-components/normal-input-error/normal-input-error.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function PhoneAuthComponent_div_1_app_normal_input_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-normal-input-error", 12);
      }

      if (rf & 2) {
        var ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r225.formNumberValidate.get("phoneNumber").errors);
      }
    }

    function PhoneAuthComponent_div_1_mat_spinner_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 13);
      }
    }

    function PhoneAuthComponent_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0631\u0633\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PhoneAuthComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PhoneAuthComponent_div_1_Template_form_submit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r229);

          var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r228.onSendingSMS();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PhoneAuthComponent_div_1_app_normal_input_error_9_Template, 1, 1, "app-normal-input-error", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PhoneAuthComponent_div_1_mat_spinner_10_Template, 1, 0, "mat-spinner", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PhoneAuthComponent_div_1_div_11_Template, 3, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r223.formNumberValidate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r223.formNumberValidate.get("phoneNumber").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r223.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r223.isLoading);
      }
    }

    function PhoneAuthComponent_div_2_form_6_td_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PhoneAuthComponent_div_2_form_6_td_2_Template_input_keyup_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r238);

          var num_r235 = ctx.$implicit;

          var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r237.nextFocus(num_r235 + 1, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var num_r235 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "input" + num_r235)("formControlName", "input" + num_r235);
      }
    }

    function PhoneAuthComponent_div_2_form_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhoneAuthComponent_div_2_form_6_td_2_Template, 2, 2, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0644\u0627\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0645\u0631\u0629 \u0627\u062E\u0631\u0649 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhoneAuthComponent_div_2_form_6_Template_span_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240);

          var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r239.onSendingSMS(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0627\u0636\u063A\u0637 \u0647\u0646\u0627 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r230.formNumberVerify);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r230.numberArr);
      }
    }

    function PhoneAuthComponent_div_2_p_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0630\u064A \u0627\u062F\u062E\u0644\u062A\u0629 \u062E\u0627\u0637\u0626 \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0627\u062E\u0631\u0649");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PhoneAuthComponent_div_2_p_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0645 \u0627\u0644\u062A\u0648\u062B\u064A\u0642");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PhoneAuthComponent_div_2_mat_spinner_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 13);
      }
    }

    function PhoneAuthComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u062F\u062E\u0644 \u0627\u0644\u0643\u0648\u062F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0633\u062A\u0635\u0644\u0643 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0649 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0630\u064A \u0627\u062F\u062E\u0644\u062A\u0629 \u0639\u0644\u064A\u0643 \u0627\u062F\u062E\u0627\u0644 \u0627\u0644\u0643\u0648\u062F \u0627\u0644\u0645\u0631\u0641\u0642 \u0641\u064A \u0627\u0644\u0631\u0633\u0627\u0644\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PhoneAuthComponent_div_2_form_6_Template, 7, 2, "form", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PhoneAuthComponent_div_2_p_7_Template, 2, 0, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PhoneAuthComponent_div_2_p_8_Template, 2, 0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhoneAuthComponent_div_2_Template_p_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r242);

          var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r241.resetForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0644\u0644\u0627\u0639\u0627\u062F\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PhoneAuthComponent_div_2_mat_spinner_11_Template, 1, 0, "mat-spinner", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r224.authSuccess);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r224.authError);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r224.authSuccess);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r224.isLoading);
      }
    }

    var PhoneAuthComponent =
    /*#__PURE__*/
    function () {
      function PhoneAuthComponent(phoneService, router) {
        _classCallCheck(this, PhoneAuthComponent);

        this.phoneService = phoneService;
        this.router = router;
        this.isDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.phoneNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = false;
        this.authError = false;
        this.authSuccess = false;
        this.step = 1;
        this.numberOfDigits = 5;
        this.numberArr = [];

        for (var i = 0; i < this.numberOfDigits; i++) {
          this.numberArr[i] = i + 1;
        }
      }

      _createClass(PhoneAuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this67 = this;

          this.setUpForms();
          this.isVerifiedSub = this.phoneService.getIsVierifiedListener().subscribe(function (isVerified) {
            _this67.isLoading = false;
            _this67.authSuccess = isVerified;

            if (!isVerified) {
              _this67.formNumberVerify.reset();

              document.getElementById('input1').focus();
              _this67.isLoading = false;
              _this67.authError = true;
            }

            if (isVerified) {
              if (_this67.nav) _this67.router.navigate([_this67.nav]);else {
                _this67.isDone.emit(true);

                _this67.phoneNumber.emit(_this67.phoneService.getPhoneNumberAndCountryCode().phoneNumber);
              }
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isVerifiedSub.unsubscribe();
        }
      }, {
        key: "setUpForms",
        value: function setUpForms() {
          this.formNumberValidate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // 'countryCode': new FormControl('-1', {
            //   asyncValidators: [selectInput]
            // }),
            'phoneNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              asyncValidators: [_validators__WEBPACK_IMPORTED_MODULE_2__["phoneNumber"]]
            })
          });
          this.formNumberVerify = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'input1': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'input2': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'input3': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'input4': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'input5': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(controler) {
          controler.markAsTouched();
        }
      }, {
        key: "nextFocus",
        value: function nextFocus(num, event) {
          if (num <= this.numberOfDigits) {
            this.authError = false;

            if (num > 2 && event.code === 'Backspace') {
              var element = document.getElementById('input' + (num - 2));
              element.focus();
              element.setSelectionRange(0, element.value.length);
              return;
            } else if (event.code !== 'Backspace') {
              var parent = document.getElementById('input' + (num - 1));

              if (parent.value !== '') {
                var _element = document.getElementById('input' + num);

                _element.focus();
              }
            }
          } else {
            if (!this.phoneService.getPhoneAuthId()) {
              if (event.code === 'Backspace') {
                var _element2 = document.getElementById('input' + (num - 2));

                _element2.setSelectionRange(0, _element2.value.length);

                _element2.focus();
              }

              return;
            }

            this.isLoading = true;
            var code = '';

            for (var i = 1; i <= 5; i++) {
              code += this.formNumberVerify.value['input' + i];
            }

            this.phoneService.verifyPhone(code, this.phoneService.getPhoneAuthId());
          }
        }
      }, {
        key: "onSendingSMS",
        value: function onSendingSMS() {
          var _this68 = this;

          var isResend = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          console.log(this.formNumberValidate.controls);

          if (this.formNumberValidate.invalid) {
            this.formNumberValidate.markAllAsTouched();
            return;
          }

          var _this$formNumberValid = this.formNumberValidate.value,
              phoneNumber = _this$formNumberValid.phoneNumber,
              countryCode = _this$formNumberValid.countryCode;
          this.isLoading = true;

          var error = function error() {
            _this68.authError = false;
            _this68.authSuccess = false;
            _this68.isLoading = false;
          };

          this.phoneService.sendSMS(countryCode, phoneNumber, function () {
            if (!isResend) _this68.step++;
            _this68.isLoading = false;
          }, error);
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.formNumberValidate.reset();
          this.formNumberVerify.reset();
          this.step = 1;
          this.authSuccess = false;
          this.isLoading = false;
          this.phoneService.reset();
        }
      }]);

      return PhoneAuthComponent;
    }();

    PhoneAuthComponent.ɵfac = function PhoneAuthComponent_Factory(t) {
      return new (t || PhoneAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_phone_auth_service__WEBPACK_IMPORTED_MODULE_3__["PhoneAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    PhoneAuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhoneAuthComponent,
      selectors: [["app-phone-auth"]],
      inputs: {
        nav: "nav"
      },
      outputs: {
        isDone: "isDone",
        phoneNumber: "phoneNumber"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "box-container"], ["class", "phone-number-container box", 4, "ngIf"], ["class", "verify-container box", 4, "ngIf"], [1, "phone-number-container", "box"], [1, "box-header"], [3, "formGroup", "submit"], [1, "one-line"], ["matInput", "", "name", "phone number", "formControlName", "phoneNumber", "maxlength", "20", "placeholder", "052-0000000", "type", "text"], [1, "errors"], ["name", "phone number", 3, "errors", 4, "ngIf"], ["color", "accent", 4, "ngIf"], ["class", "button", 4, "ngIf"], ["name", "phone number", 3, "errors"], ["color", "accent"], [1, "button"], [1, "verify-container", "box"], [3, "formGroup", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "success", 4, "ngIf"], [1, "success", "click", 3, "click"], [3, "formGroup"], [4, "ngFor", "ngForOf"], [1, "click", 3, "click"], ["type", "text", "placeholder", "\u25CF", "size", "1", "maxlength", "1", 3, "id", "formControlName", "keyup"], [1, "error"], [1, "success"]],
      template: function PhoneAuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhoneAuthComponent_div_1_Template, 12, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhoneAuthComponent_div_2_Template, 12, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == 2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _normal_input_error_normal_input_error_component__WEBPACK_IMPORTED_MODULE_7__["NormalInputErrorComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["input[type=\"text\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  padding: 1rem 0.5rem;\r\n  border: 0;\r\n  margin: 0;\r\n  background: #f9f9f9;\r\n  border-bottom: 2px solid #ccc;\r\n  font-size: 1.4rem;\r\n  font-weight: 500;\r\n  color: #333;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  text-align: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-family: \"Cairo\", sans-serif;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n  min-height: 50vh;\r\n  background: #2b353e;\r\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.7);\r\n  direction: ltr;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\r\n  color: red;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]{\r\n  color:#60BB46;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.phone-number-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.one-line[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.one-line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n\r\n}\r\n\r\n.verify-container[_ngcontent-%COMP%], .phone-number-container[_ngcontent-%COMP%] {\r\n  padding-bottom: 3rem;\r\n}\r\n\r\n.verify-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.box-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  text-align: end;\r\n}\r\n\r\n.box-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-weight: 500;\r\n  font-size: 1rem;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Cairo\", sans-serif;\r\n}\r\n\r\n.verify-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .phone-number-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  align-self: flex-end;\r\n  color: #fff;\r\n  text-align: end;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.verify-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], .phone-number-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.verify-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.verify-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.verify-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .phone-number-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  align-self: flex-end;\r\n}\r\n\r\n.verify-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .phone-number-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: #60bb46;\r\n  padding: 0.5rem 3rem;\r\n  color: #fff;\r\n  margin-top: 2rem;\r\n  cursor: pointer;\r\n  transition: 0.3s background;\r\n}\r\n\r\n.verify-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .phone-number-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: rgba(95, 187, 70, 0.575);\r\n}\r\n\r\n.errors[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  color: red;\r\n  align-self: flex-start;\r\n}\r\n\r\n.app-normal-input-error[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.click[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  color: #60BB46;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMtY29tcG9uZW50cy9waG9uZS1hdXRoL3Bob25lLWF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxvQkFBb0I7RUFDcEIsU0FBUztFQUNULFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLFdBQVc7O0FBRWI7O0FBU0E7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC91dGlscy1jb21wb25lbnRzL3Bob25lLWF1dGgvcGhvbmUtYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbnNlbGVjdCB7XHJcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBiYWNrZ3JvdW5kOiAjMmIzNTNlO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbn1cclxuXHJcbi5ib3ggLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4uYm94IC5zdWNjZXNze1xyXG4gIGNvbG9yOiM2MEJCNDY7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi5waG9uZS1udW1iZXItY29udGFpbmVyIC5pbm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vbmUtbGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuLm9uZS1saW5lIGlucHV0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi52ZXJpZnktY29udGFpbmVyLFxyXG4ucGhvbmUtbnVtYmVyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi52ZXJpZnktY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJveC1oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4uYm94LWhlYWRlciBoMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnZlcmlmeS1jb250YWluZXIgcCxcclxuLnBob25lLW51bWJlci1jb250YWluZXIgcCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi52ZXJpZnktY29udGFpbmVyIGZvcm0sXHJcbi5waG9uZS1udW1iZXItY29udGFpbmVyIGZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLnZlcmlmeS1jb250YWluZXIgZm9ybSB0ciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udmVyaWZ5LWNvbnRhaW5lciBmb3JtIHRyIGlucHV0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udmVyaWZ5LWNvbnRhaW5lciBmb3JtIC5idXR0b24sXHJcbi5waG9uZS1udW1iZXItY29udGFpbmVyIGZvcm0gLmJ1dHRvbiB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi52ZXJpZnktY29udGFpbmVyIGZvcm0gYnV0dG9uLFxyXG4ucGhvbmUtbnVtYmVyLWNvbnRhaW5lciBmb3JtIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM2MGJiNDY7XHJcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBiYWNrZ3JvdW5kO1xyXG59XHJcblxyXG4udmVyaWZ5LWNvbnRhaW5lciBmb3JtIGJ1dHRvbjpob3ZlcixcclxuLnBob25lLW51bWJlci1jb250YWluZXIgZm9ybSBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoOTUsIDE4NywgNzAsIDAuNTc1KTtcclxufVxyXG5cclxuLmVycm9ycyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBjb2xvcjogcmVkO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5hcHAtbm9ybWFsLWlucHV0LWVycm9yIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNsaWNre1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNjBCQjQ2O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneAuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-phone-auth',
          templateUrl: './phone-auth.component.html',
          styleUrls: ['./phone-auth.component.css']
        }]
      }], function () {
        return [{
          type: _phone_auth_service__WEBPACK_IMPORTED_MODULE_3__["PhoneAuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        isDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        phoneNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/utils-components/phone-auth/phone-auth.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/utils-components/phone-auth/phone-auth.service.ts ***!
    \*******************************************************************/

  /*! exports provided: PhoneAuthService */

  /***/
  function srcAppUtilsComponentsPhoneAuthPhoneAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneAuthService", function () {
      return PhoneAuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;

    var PhoneAuthService =
    /*#__PURE__*/
    function () {
      function PhoneAuthService(http) {
        _classCallCheck(this, PhoneAuthService);

        this.http = http;
        this.isVerified = false;
        this.isVerifiedListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(PhoneAuthService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('phone service destroied');
        }
      }, {
        key: "getPhoneAuthId",
        value: function getPhoneAuthId() {
          return this.phoneAuthId;
        }
      }, {
        key: "getPhoneNumberAndCountryCode",
        value: function getPhoneNumberAndCountryCode() {
          return {
            phoneNumber: this.authPhoneNumber,
            countryCode: this.authCountryCode
          };
        }
      }, {
        key: "getIsVerified",
        value: function getIsVerified() {
          return this.isVerified;
        }
      }, {
        key: "getIsVierifiedListener",
        value: function getIsVierifiedListener() {
          return this.isVerifiedListener.asObservable();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.phoneAuthId = null;
          this.isVerified = false;
          this.isVerifiedListener.next(false);
        }
      }, {
        key: "sendSMS",
        value: function sendSMS(countryCode, phoneNumber) {
          var _this69 = this;

          var success = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var error = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          this.isLoading.next(true);
          this.authPhoneNumber = phoneNumber;
          this.authCountryCode = countryCode;
          this.http.post(BASE_URL + 'phoneAuth', {
            countryCode: countryCode,
            phoneNumber: phoneNumber
          }).subscribe(function (res) {
            _this69.phoneAuthId = res._id;
            success();
          }, function (err) {
            error(err);
          });
        }
      }, {
        key: "verifyPhone",
        value: function verifyPhone(code, _id) {
          var _this70 = this;

          this.http.post(BASE_URL + 'phoneAuth/verifyNumber', {
            code: code,
            _id: _id
          }).subscribe(function (res) {
            _this70.isVerified = true;

            _this70.isVerifiedListener.next(true);

            console.log(res);
          }, function (err) {
            console.log(err);
            _this70.isVerified = false;

            _this70.isVerifiedListener.next(_this70.isVerified);
          });
        }
      }]);

      return PhoneAuthService;
    }();

    PhoneAuthService.ɵfac = function PhoneAuthService_Factory(t) {
      return new (t || PhoneAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    PhoneAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PhoneAuthService,
      factory: PhoneAuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils-components/statusHandler.ts":
  /*!***************************************************!*\
    !*** ./src/app/utils-components/statusHandler.ts ***!
    \***************************************************/

  /*! exports provided: statusHandler */

  /***/
  function srcAppUtilsComponentsStatusHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "statusHandler", function () {
      return statusHandler;
    });

    var statusHandler = function statusHandler(status) {
      var color;

      switch (status) {
        case 'DONE':
          color = '#60bb46';
          break;

        case 'CANCEL':
          color = '#F60D0E';
          break;

        case 'IN-PROGRESS':
          color = '#F86300';
          break;
      }

      return {
        'background': color
      };
    };
    /***/

  },

  /***/
  "./src/app/utils-components/validators.ts":
  /*!************************************************!*\
    !*** ./src/app/utils-components/validators.ts ***!
    \************************************************/

  /*! exports provided: selectInput, nameCheck, textCheck, matchPassword, phoneNumber */

  /***/
  function srcAppUtilsComponentsValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectInput", function () {
      return selectInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nameCheck", function () {
      return nameCheck;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "textCheck", function () {
      return textCheck;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matchPassword", function () {
      return matchPassword;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "phoneNumber", function () {
      return phoneNumber;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var selectInput = function selectInput(control) {
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        if (control.value === '-1') {
          observer.next({
            required: true
          });
        } else {
          observer.next(null);
        }

        observer.complete();
      });
      return frObs;
    };

    var nameCheck = function nameCheck(control) {
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        var value = control.value;

        if (/^[a-z\u0590-\u05fe\u0621-\u064A]+$/.test(value)) {
          observer.next(null);
        } else {
          observer.next({
            name: true
          });
        }

        observer.complete();
      });
      return frObs;
    };

    var textCheck = function textCheck(control) {
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        var value = control.value;

        if (/^([a-z\u0590-\u05fe\u0621-\u064A]+\s)*[a-z\u0590-\u05fe\u0621-\u064A]+$/.test(value)) {
          observer.next(null);
        } else {
          observer.next({
            text: true
          });
        }

        observer.complete();
      });
      return frObs;
    };

    var matchPassword = function matchPassword(passwordControl, verifyControl) {
      var password = passwordControl.value;
      var verifyPassword = verifyControl.value;

      if (password !== verifyPassword) {
        verifyControl.setErrors(Object.assign(Object.assign({}, verifyControl.errors), {
          passwordNotMatch: true
        }));
      }
    };

    var phoneNumber = function phoneNumber(control) {
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        var value = control.value;
        var flag = true;

        if (!value || !value && value.length === 0) {
          observer.next({
            required: true
          });
          flag = false;
        } else if (value.length < 9) {
          observer.next({
            minlength: {
              requiredLength: 9
            }
          });
          flag = false;
        } else {
          for (var i = 0; i < value.length && flag; i++) {
            if (value[i] > '9' || value[i] < '0') {
              observer.next({
                phoneNumber: true
              });
              flag = false;
            }
          }
        }

        if (flag) {
          observer.next(null);
        }

        observer.complete();
      });
      return frObs;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:3000/api/',
      url: 'http://localhost:3000/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\6arek\Desktop\smartPhone\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map