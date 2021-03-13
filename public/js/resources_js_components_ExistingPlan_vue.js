(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ExistingPlan_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Existing',
  data: function data() {
    return {
      loading: false,
      //empInfo: {},
      dialog: true,
      constructionCode: '',
      planNumber: '',
      requestNumber: '',
      planNumbers: [],
      // the value of this is to be fetch in database using axios
      requestNos: [],
      //['4', '3', '2', '1'],
      houseType: [{
        houseType: 'i-smile'
      }],
      houseTypes: ['i-smile'],
      showName: false
    };
  },
  watch: {
    loading: function loading(val) {
      var _this = this;

      if (!val) return;
      setTimeout(function () {
        return _this.$router.push('GaibuList')["catch"](function () {});
      }, 2500);
    }
  },
  mounted: function mounted() {
    document.getElementById("maskEdit").addEventListener("keyup", this.getplannumber);
    this.selButton(); //catch the error when user is trying to access the route without logging in
    // if(this.$store.state.isLogged === true){
    //   this.dialog = true
    // }else{
    //   this.$router.push({ name: "Login" }); //push to login route if not logged
    // }

    this.isDrawerHidden(false);
  },
  methods: {
    selButton: function selButton() {
      _app__WEBPACK_IMPORTED_MODULE_0__.bus.$emit('changeIt', '');
    },
    isDrawerHidden: function isDrawerHidden(bool) {
      _app__WEBPACK_IMPORTED_MODULE_0__.bus.$emit('hideDrawer', bool);
    },
    checkPlanDetails: function checkPlanDetails() {
      var _this2 = this;

      this.$ShiyoushoData.clearSelectedInJSON();

      if (this.constructionCode !== '' && this.planNumber !== '' && this.houseType !== '') {
        axios.get("".concat(window.location.origin, "/api/getAllUploadedTextures/").concat(this.constructionCode).concat(this.planNumber).concat(this.requestNumber).concat(this.houseType)).then(function (res) {
          res.data.forEach(function (element) {
            _this2.$ShiyoushoData.setSelected(element.rowIndex, element.Kind, element.Material, element, element.colorCount);
          });
        });
        this.loading = true;
        this.dialog = false;
        this.$store.commit('changeConstructionCode', this.constructionCode);
        this.$store.commit('changePlanNumber', this.planNumber);
        this.$store.commit('changeRequestNumber', this.requestNumber);
        this.$store.commit('changeHouseType', this.houseType);
      } else {
        alert('Please complete the plan details');
      }
    },
    getplannumber: function getplannumber() {
      var _this3 = this;

      if (this.constructionCode.length == '12') {
        var url = "api/getplannumber/".concat(this.constructionCode);
        axios.get(url).then(function (res) {
          _this3.planNumbers = res.data;
        })["catch"](function (err) {
          console.log(err);
        });
      } else {//
      }
    },
    getrequestnumber: function getrequestnumber() {
      var _this4 = this;

      var url = "api/getrequestnumber/".concat(this.constructionCode, "/").concat(this.planNumber);
      axios.get(url).then(function (res) {
        _this4.requestNos = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    gethousetype: function gethousetype() {
      var _this5 = this;

      var url = "api/gethousetype/".concat(this.constructionCode, "/").concat(this.planNumber, "/").concat(this.requestNumber);
      axios.get(url).then(function (res) {
        _this5.houseTypes = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.input[data-v-1cb7bd82]{\n  border: 1px solid gray;\n  border-radius: 4px;\n  font-size: 15px;\n  height: 55px;\n  width: 100%;\n}\n.arial[data-v-1cb7bd82]{\n  font-family: Arial, Helvetica, sans-serif;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExistingPlan_vue_vue_type_style_index_0_id_1cb7bd82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExistingPlan_vue_vue_type_style_index_0_id_1cb7bd82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExistingPlan_vue_vue_type_style_index_0_id_1cb7bd82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/ExistingPlan.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ExistingPlan.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExistingPlan_vue_vue_type_template_id_1cb7bd82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExistingPlan.vue?vue&type=template&id=1cb7bd82&scoped=true& */ "./resources/js/components/ExistingPlan.vue?vue&type=template&id=1cb7bd82&scoped=true&");
/* harmony import */ var _ExistingPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExistingPlan.vue?vue&type=script&lang=js& */ "./resources/js/components/ExistingPlan.vue?vue&type=script&lang=js&");
/* harmony import */ var _ExistingPlan_vue_vue_type_style_index_0_id_1cb7bd82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css& */ "./resources/js/components/ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ExistingPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ExistingPlan_vue_vue_type_template_id_1cb7bd82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExistingPlan_vue_vue_type_template_id_1cb7bd82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1cb7bd82",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExistingPlan.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExistingPlan.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ExistingPlan.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExistingPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExistingPlan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExistingPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExistingPlan_vue_vue_type_style_index_0_id_1cb7bd82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=style&index=0&id=1cb7bd82&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/ExistingPlan.vue?vue&type=template&id=1cb7bd82&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ExistingPlan.vue?vue&type=template&id=1cb7bd82&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExistingPlan_vue_vue_type_template_id_1cb7bd82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExistingPlan_vue_vue_type_template_id_1cb7bd82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExistingPlan_vue_vue_type_template_id_1cb7bd82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExistingPlan.vue?vue&type=template&id=1cb7bd82&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=template&id=1cb7bd82&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=template&id=1cb7bd82&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ExistingPlan.vue?vue&type=template&id=1cb7bd82&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "400" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            { staticClass: "elevation-6" },
            [
              _c(
                "v-toolbar",
                { attrs: { color: "primary", dark: "", flat: "" } },
                [
                  _c("v-toolbar-title", { staticClass: "arial" }, [
                    _vm._v("Revision Plan")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "pt-4" },
                [
                  _c(
                    "div",
                    { staticClass: "pb-7" },
                    [
                      _c("the-mask", {
                        staticClass: "input pl-2",
                        attrs: {
                          id: "maskEdit",
                          name: "constructionCode",
                          placeholder: "お客様コード",
                          mask: "XXXXXXX-####",
                          type: "text",
                          masked: ""
                        },
                        model: {
                          value: _vm.constructionCode,
                          callback: function($$v) {
                            _vm.constructionCode = $$v
                          },
                          expression: "constructionCode"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      name: "planNumber",
                      items: _vm.planNumbers,
                      "item-text": "plan_no",
                      "item-value": "plan_no",
                      label: "図面番号",
                      outlined: ""
                    },
                    on: { change: _vm.getrequestnumber },
                    model: {
                      value: _vm.planNumber,
                      callback: function($$v) {
                        _vm.planNumber = $$v
                      },
                      expression: "planNumber"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      name: "requestNumber",
                      items: _vm.requestNos,
                      "item-text": "shio_no",
                      "item-value": "shio_no",
                      label: "仕様書番号",
                      outlined: ""
                    },
                    on: { change: _vm.gethousetype },
                    model: {
                      value: _vm.requestNumber,
                      callback: function($$v) {
                        _vm.requestNumber = $$v
                      },
                      expression: "requestNumber"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      name: "houseType",
                      items: _vm.houseTypes,
                      "item-text": "house_type",
                      "item-value": "house_type",
                      label: "家タイプ",
                      outlined: ""
                    },
                    model: {
                      value: _vm.houseType,
                      callback: function($$v) {
                        _vm.houseType = $$v
                      },
                      expression: "houseType"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.checkPlanDetails()
                        }
                      }
                    },
                    [_vm._v("新規登録")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                          _vm.$router.push("menu").catch(function() {})
                        }
                      }
                    },
                    [_vm._v("Close")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "hide-overlay": "", persistent: "", width: "350" },
          model: {
            value: _vm.loading,
            callback: function($$v) {
              _vm.loading = $$v
            },
            expression: "loading"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { color: "primary", dark: "" } },
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Loading...")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-progress-linear", {
                    staticClass: "mb-0",
                    attrs: { indeterminate: "", color: "white" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);