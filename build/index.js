/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/card/index.js":
/*!**********************************!*\
  !*** ./src/blocks/card/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Card Block
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.blockEditor.RichText;
registerBlockType('demo/card', {
  title: __('Card', 'demo'),
  description: __('Display a card with heading and description', 'demo'),
  category: 'widgets',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: '.demo-card__title'
    },
    description: {
      type: 'string',
      source: 'html',
      selector: '.demo-card__content'
    }
  },
  supports: {
    className: false
  },
  edit: function edit(props) {
    // Destructure props and attributes.
    var _props$attributes = props.attributes,
        title = _props$attributes.title,
        description = _props$attributes.description,
        setAttributes = props.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "demo-card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "demo-card__inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      allowedFormats: [],
      className: "demo-card__title",
      multiline: false,
      onChange: function onChange(value) {
        return setAttributes({
          title: value
        });
      },
      placeholder: "Add card title",
      tagName: "h2",
      value: title
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      allowedFormats: [],
      className: "demo-card__content",
      multiline: 'p',
      onChange: function onChange(value) {
        return setAttributes({
          description: value
        });
      },
      placeholder: "Add card content",
      tagName: "div",
      value: description
    })));
  },
  save: function save(props) {
    // Destructure attributes.
    var _props$attributes2 = props.attributes,
        title = _props$attributes2.title,
        description = _props$attributes2.description;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "demo-card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "demo-card__inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "demo-card__title",
      dangerouslySetInnerHTML: {
        __html: title
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "demo-card__content",
      dangerouslySetInnerHTML: {
        __html: description
      }
    })));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_quote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/quote */ "./src/styles/quote/index.js");
/* harmony import */ var _styles_quote__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_quote__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variations_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variations/buttons */ "./src/variations/buttons/index.js");
/* harmony import */ var _variations_buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variations_buttons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/card */ "./src/blocks/card/index.js");




/***/ }),

/***/ "./src/styles/quote/index.js":
/*!***********************************!*\
  !*** ./src/styles/quote/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockStyle = wp.blocks.registerBlockStyle;
registerBlockStyle('core/quote', {
  name: 'fancy-quote',
  label: 'Fancy Quote'
});

/***/ }),

/***/ "./src/variations/buttons/index.js":
/*!*****************************************!*\
  !*** ./src/variations/buttons/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockVariation = wp.blocks.registerBlockVariation;
registerBlockVariation('core/buttons', [{
  name: 'wide',
  title: 'Wide Buttons',
  attributes: {
    className: 'is-wide'
  }
}, {
  name: 'full',
  title: 'Full Buttons',
  attributes: {
    className: 'is-full'
  }
}]);

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map