this["wp"] = this["wp"] || {}; this["wp"]["coreData"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@wordpress/core-data/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/actions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/actions.js ***!
  \*******************************************************************/
/*! exports provided: receiveUserQuery, receiveCurrentUser, addEntities, receiveEntityRecords, receiveCurrentTheme, receiveThemeSupports, receiveEmbedPreview, deleteEntityRecord, editEntityRecord, undo, redo, __unstableCreateUndoLevel, saveEntityRecord, saveEditedEntityRecord, receiveUploadPermissions, receiveUserPermission, receiveAutosaves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveUserQuery", function() { return receiveUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveCurrentUser", function() { return receiveCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntities", function() { return addEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveEntityRecords", function() { return receiveEntityRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveCurrentTheme", function() { return receiveCurrentTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveThemeSupports", function() { return receiveThemeSupports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveEmbedPreview", function() { return receiveEmbedPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEntityRecord", function() { return deleteEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editEntityRecord", function() { return editEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undo", function() { return undo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redo", function() { return redo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__unstableCreateUndoLevel", function() { return __unstableCreateUndoLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveEntityRecord", function() { return saveEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveEditedEntityRecord", function() { return saveEditedEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveUploadPermissions", function() { return receiveUploadPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveUserPermission", function() { return receiveUserPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveAutosaves", function() { return receiveAutosaves; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _queried_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queried-data */ "./node_modules/@wordpress/core-data/build-module/queried-data/index.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");




var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(deleteEntityRecord),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(editEntityRecord),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(undo),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(redo),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(saveEntityRecord),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(saveEditedEntityRecord);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/**
 * Returns an action object used in signalling that authors have been received.
 *
 * @param {string}       queryID Query ID.
 * @param {Array|Object} users   Users received.
 *
 * @return {Object} Action object.
 */

function receiveUserQuery(queryID, users) {
  return {
    type: 'RECEIVE_USER_QUERY',
    users: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["castArray"])(users),
    queryID: queryID
  };
}
/**
 * Returns an action used in signalling that the current user has been received.
 *
 * @param {Object} currentUser Current user object.
 *
 * @return {Object} Action object.
 */

function receiveCurrentUser(currentUser) {
  return {
    type: 'RECEIVE_CURRENT_USER',
    currentUser: currentUser
  };
}
/**
 * Returns an action object used in adding new entities.
 *
 * @param {Array} entities  Entities received.
 *
 * @return {Object} Action object.
 */

function addEntities(entities) {
  return {
    type: 'ADD_ENTITIES',
    entities: entities
  };
}
/**
 * Returns an action object used in signalling that entity records have been received.
 *
 * @param {string}       kind            Kind of the received entity.
 * @param {string}       name            Name of the received entity.
 * @param {Array|Object} records         Records received.
 * @param {?Object}      query           Query Object.
 * @param {?boolean}     invalidateCache Should invalidate query caches
 *
 * @return {Object} Action object.
 */

function receiveEntityRecords(kind, name, records, query) {
  var invalidateCache = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // Auto drafts should not have titles, but some plugins rely on them so we can't filter this
  // on the server.
  if (kind === 'postType') {
    records = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["castArray"])(records).map(function (record) {
      return record.status === 'auto-draft' ? _objectSpread(_objectSpread({}, record), {}, {
        title: ''
      }) : record;
    });
  }

  var action;

  if (query) {
    action = Object(_queried_data__WEBPACK_IMPORTED_MODULE_6__["receiveQueriedItems"])(records, query);
  } else {
    action = Object(_queried_data__WEBPACK_IMPORTED_MODULE_6__["receiveItems"])(records);
  }

  return _objectSpread(_objectSpread({}, action), {}, {
    kind: kind,
    name: name,
    invalidateCache: invalidateCache
  });
}
/**
 * Returns an action object used in signalling that the current theme has been received.
 *
 * @param {Object} currentTheme The current theme.
 *
 * @return {Object} Action object.
 */

function receiveCurrentTheme(currentTheme) {
  return {
    type: 'RECEIVE_CURRENT_THEME',
    currentTheme: currentTheme
  };
}
/**
 * Returns an action object used in signalling that the index has been received.
 *
 * @param {Object} themeSupports Theme support for the current theme.
 *
 * @return {Object} Action object.
 */

function receiveThemeSupports(themeSupports) {
  return {
    type: 'RECEIVE_THEME_SUPPORTS',
    themeSupports: themeSupports
  };
}
/**
 * Returns an action object used in signalling that the preview data for
 * a given URl has been received.
 *
 * @param {string}  url     URL to preview the embed for.
 * @param {*}       preview Preview data.
 *
 * @return {Object} Action object.
 */

function receiveEmbedPreview(url, preview) {
  return {
    type: 'RECEIVE_EMBED_PREVIEW',
    url: url,
    preview: preview
  };
}
/**
 * Action triggered to delete an entity record.
 *
 * @param {string}  kind              Kind of the deleted entity.
 * @param {string}  name              Name of the deleted entity.
 * @param {string}  recordId          Record ID of the deleted entity.
 * @param {?Object} query             Special query parameters for the DELETE API call.
 */

function deleteEntityRecord(kind, name, recordId, query) {
  var entities, entity, error, deletedRecord, path;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function deleteEntityRecord$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_entities__WEBPACK_IMPORTED_MODULE_7__["getKindEntities"])(kind);

        case 2:
          entities = _context.sent;
          entity = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(entities, {
            kind: kind,
            name: name
          });
          deletedRecord = false;

          if (entity) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return");

        case 7:
          _context.next = 9;
          return {
            type: 'DELETE_ENTITY_RECORD_START',
            kind: kind,
            name: name,
            recordId: recordId
          };

        case 9:
          _context.prev = 9;
          path = "".concat(entity.baseURL, "/").concat(recordId);

          if (query) {
            path = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__["addQueryArgs"])(path, query);
          }

          _context.next = 14;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["apiFetch"])({
            path: path,
            method: 'DELETE'
          });

        case 14:
          deletedRecord = _context.sent;
          _context.next = 17;
          return Object(_queried_data__WEBPACK_IMPORTED_MODULE_6__["removeItems"])(kind, name, recordId, true);

        case 17:
          _context.next = 22;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](9);
          error = _context.t0;

        case 22:
          _context.next = 24;
          return {
            type: 'DELETE_ENTITY_RECORD_FINISH',
            kind: kind,
            name: name,
            recordId: recordId,
            error: error
          };

        case 24:
          return _context.abrupt("return", deletedRecord);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[9, 19]]);
}
/**
 * Returns an action object that triggers an
 * edit to an entity record.
 *
 * @param {string} kind     Kind of the edited entity record.
 * @param {string} name     Name of the edited entity record.
 * @param {number} recordId Record ID of the edited entity record.
 * @param {Object} edits    The edits.
 * @param {Object} options  Options for the edit.
 * @param {boolean} options.undoIgnore Whether to ignore the edit in undo history or not.
 *
 * @return {Object} Action object.
 */

function editEntityRecord(kind, name, recordId, edits) {
  var options,
      entity,
      _entity$transientEdit,
      transientEdits,
      _entity$mergedEdits,
      mergedEdits,
      record,
      editedRecord,
      edit,
      _args2 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function editEntityRecord$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          options = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : {};
          _context2.next = 3;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getEntity', kind, name);

        case 3:
          entity = _context2.sent;

          if (entity) {
            _context2.next = 6;
            break;
          }

          throw new Error("The entity being edited (".concat(kind, ", ").concat(name, ") does not have a loaded config."));

        case 6:
          _entity$transientEdit = entity.transientEdits, transientEdits = _entity$transientEdit === void 0 ? {} : _entity$transientEdit, _entity$mergedEdits = entity.mergedEdits, mergedEdits = _entity$mergedEdits === void 0 ? {} : _entity$mergedEdits;
          _context2.next = 9;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getRawEntityRecord', kind, name, recordId);

        case 9:
          record = _context2.sent;
          _context2.next = 12;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getEditedEntityRecord', kind, name, recordId);

        case 12:
          editedRecord = _context2.sent;
          edit = {
            kind: kind,
            name: name,
            recordId: recordId,
            // Clear edits when they are equal to their persisted counterparts
            // so that the property is not considered dirty.
            edits: Object.keys(edits).reduce(function (acc, key) {
              var recordValue = record[key];
              var editedRecordValue = editedRecord[key];
              var value = mergedEdits[key] ? _objectSpread(_objectSpread({}, editedRecordValue), edits[key]) : edits[key];
              acc[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(recordValue, value) ? undefined : value;
              return acc;
            }, {}),
            transientEdits: transientEdits
          };
          return _context2.abrupt("return", _objectSpread(_objectSpread({
            type: 'EDIT_ENTITY_RECORD'
          }, edit), {}, {
            meta: {
              undo: !options.undoIgnore && _objectSpread(_objectSpread({}, edit), {}, {
                // Send the current values for things like the first undo stack entry.
                edits: Object.keys(edits).reduce(function (acc, key) {
                  acc[key] = editedRecord[key];
                  return acc;
                }, {})
              })
            }
          }));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Action triggered to undo the last edit to
 * an entity record, if any.
 */

function undo() {
  var undoEdit;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function undo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getUndoEdit');

        case 2:
          undoEdit = _context3.sent;

          if (undoEdit) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return");

        case 5:
          _context3.next = 7;
          return _objectSpread(_objectSpread({
            type: 'EDIT_ENTITY_RECORD'
          }, undoEdit), {}, {
            meta: {
              isUndo: true
            }
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Action triggered to redo the last undoed
 * edit to an entity record, if any.
 */

function redo() {
  var redoEdit;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function redo$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getRedoEdit');

        case 2:
          redoEdit = _context4.sent;

          if (redoEdit) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt("return");

        case 5:
          _context4.next = 7;
          return _objectSpread(_objectSpread({
            type: 'EDIT_ENTITY_RECORD'
          }, redoEdit), {}, {
            meta: {
              isRedo: true
            }
          });

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Forces the creation of a new undo level.
 *
 * @return {Object} Action object.
 */

function __unstableCreateUndoLevel() {
  return {
    type: 'CREATE_UNDO_LEVEL'
  };
}
/**
 * Action triggered to save an entity record.
 *
 * @param {string}  kind                       Kind of the received entity.
 * @param {string}  name                       Name of the received entity.
 * @param {Object}  record                     Record to be saved.
 * @param {Object}  options                    Saving options.
 * @param {boolean} [options.isAutosave=false] Whether this is an autosave.
 */

function saveEntityRecord(kind, name, record) {
  var _ref,
      _ref$isAutosave,
      isAutosave,
      entities,
      entity,
      entityIdKey,
      recordId,
      _i,
      _Object$entries,
      _Object$entries$_i,
      key,
      value,
      evaluatedValue,
      updatedRecord,
      error,
      persistedEntity,
      currentEdits,
      path,
      persistedRecord,
      currentUser,
      currentUserId,
      autosavePost,
      data,
      newRecord,
      _data,
      _args5 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function saveEntityRecord$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _ref = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : {
            isAutosave: false
          }, _ref$isAutosave = _ref.isAutosave, isAutosave = _ref$isAutosave === void 0 ? false : _ref$isAutosave;
          _context5.next = 3;
          return Object(_entities__WEBPACK_IMPORTED_MODULE_7__["getKindEntities"])(kind);

        case 3:
          entities = _context5.sent;
          entity = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(entities, {
            kind: kind,
            name: name
          });

          if (entity) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return");

        case 7:
          entityIdKey = entity.key || _entities__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_ENTITY_KEY"];
          recordId = record[entityIdKey]; // Evaluate optimized edits.
          // (Function edits that should be evaluated on save to avoid expensive computations on every edit.)

          _i = 0, _Object$entries = Object.entries(record);

        case 10:
          if (!(_i < _Object$entries.length)) {
            _context5.next = 24;
            break;
          }

          _Object$entries$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];

          if (!(typeof value === 'function')) {
            _context5.next = 21;
            break;
          }

          _context5.t0 = value;
          _context5.next = 16;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getEditedEntityRecord', kind, name, recordId);

        case 16:
          _context5.t1 = _context5.sent;
          evaluatedValue = (0, _context5.t0)(_context5.t1);
          _context5.next = 20;
          return editEntityRecord(kind, name, recordId, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, key, evaluatedValue), {
            undoIgnore: true
          });

        case 20:
          record[key] = evaluatedValue;

        case 21:
          _i++;
          _context5.next = 10;
          break;

        case 24:
          _context5.next = 26;
          return {
            type: 'SAVE_ENTITY_RECORD_START',
            kind: kind,
            name: name,
            recordId: recordId,
            isAutosave: isAutosave
          };

        case 26:
          _context5.prev = 26;
          path = "".concat(entity.baseURL).concat(recordId ? '/' + recordId : '');
          _context5.next = 30;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getRawEntityRecord', kind, name, recordId);

        case 30:
          persistedRecord = _context5.sent;

          if (!isAutosave) {
            _context5.next = 55;
            break;
          }

          _context5.next = 34;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getCurrentUser');

        case 34:
          currentUser = _context5.sent;
          currentUserId = currentUser ? currentUser.id : undefined;
          _context5.next = 38;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getAutosave', persistedRecord.type, persistedRecord.id, currentUserId);

        case 38:
          autosavePost = _context5.sent;
          // Autosaves need all expected fields to be present.
          // So we fallback to the previous autosave and then
          // to the actual persisted entity if the edits don't
          // have a value.
          data = _objectSpread(_objectSpread(_objectSpread({}, persistedRecord), autosavePost), record);
          data = Object.keys(data).reduce(function (acc, key) {
            if (['title', 'excerpt', 'content'].includes(key)) {
              // Edits should be the "raw" attribute values.
              acc[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(data[key], 'raw', data[key]);
            }

            return acc;
          }, {
            status: data.status === 'auto-draft' ? 'draft' : data.status
          });
          _context5.next = 43;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["apiFetch"])({
            path: "".concat(path, "/autosaves"),
            method: 'POST',
            data: data
          });

        case 43:
          updatedRecord = _context5.sent;

          if (!(persistedRecord.id === updatedRecord.id)) {
            _context5.next = 51;
            break;
          }

          newRecord = _objectSpread(_objectSpread(_objectSpread({}, persistedRecord), data), updatedRecord);
          newRecord = Object.keys(newRecord).reduce(function (acc, key) {
            // These properties are persisted in autosaves.
            if (['title', 'excerpt', 'content'].includes(key)) {
              // Edits should be the "raw" attribute values.
              acc[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(newRecord[key], 'raw', newRecord[key]);
            } else if (key === 'status') {
              // Status is only persisted in autosaves when going from
              // "auto-draft" to "draft".
              acc[key] = persistedRecord.status === 'auto-draft' && newRecord.status === 'draft' ? newRecord.status : persistedRecord.status;
            } else {
              // These properties are not persisted in autosaves.
              acc[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(persistedRecord[key], 'raw', persistedRecord[key]);
            }

            return acc;
          }, {});
          _context5.next = 49;
          return receiveEntityRecords(kind, name, newRecord, undefined, true);

        case 49:
          _context5.next = 53;
          break;

        case 51:
          _context5.next = 53;
          return receiveAutosaves(persistedRecord.id, updatedRecord);

        case 53:
          _context5.next = 70;
          break;

        case 55:
          // Auto drafts should be converted to drafts on explicit saves and we should not respect their default title,
          // but some plugins break with this behavior so we can't filter it on the server.
          _data = record;

          if (kind === 'postType' && persistedRecord && persistedRecord.status === 'auto-draft') {
            if (!_data.status) {
              _data = _objectSpread(_objectSpread({}, _data), {}, {
                status: 'draft'
              });
            }

            if (!_data.title || _data.title === 'Auto Draft') {
              _data = _objectSpread(_objectSpread({}, _data), {}, {
                title: ''
              });
            }
          } // Get the full local version of the record before the update,
          // to merge it with the edits and then propagate it to subscribers


          _context5.next = 59;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', '__experimentalGetEntityRecordNoResolver', kind, name, recordId);

        case 59:
          persistedEntity = _context5.sent;
          _context5.next = 62;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getEntityRecordEdits', kind, name, recordId);

        case 62:
          currentEdits = _context5.sent;
          _context5.next = 65;
          return receiveEntityRecords(kind, name, _objectSpread(_objectSpread({}, persistedEntity), _data), undefined, true);

        case 65:
          _context5.next = 67;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["apiFetch"])({
            path: path,
            method: recordId ? 'PUT' : 'POST',
            data: _data
          });

        case 67:
          updatedRecord = _context5.sent;
          _context5.next = 70;
          return receiveEntityRecords(kind, name, updatedRecord, undefined, true);

        case 70:
          _context5.next = 91;
          break;

        case 72:
          _context5.prev = 72;
          _context5.t2 = _context5["catch"](26);
          error = _context5.t2; // If we got to the point in the try block where we made an optimistic update,
          // we need to roll it back here.

          if (!(persistedEntity && currentEdits)) {
            _context5.next = 91;
            break;
          }

          _context5.next = 78;
          return receiveEntityRecords(kind, name, persistedEntity, undefined, true);

        case 78:
          _context5.t3 = editEntityRecord;
          _context5.t4 = kind;
          _context5.t5 = name;
          _context5.t6 = recordId;
          _context5.t7 = _objectSpread;
          _context5.t8 = _objectSpread({}, currentEdits);
          _context5.next = 86;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getEntityRecordEdits', kind, name, recordId);

        case 86:
          _context5.t9 = _context5.sent;
          _context5.t10 = (0, _context5.t7)(_context5.t8, _context5.t9);
          _context5.t11 = {
            undoIgnore: true
          };
          _context5.next = 91;
          return (0, _context5.t3)(_context5.t4, _context5.t5, _context5.t6, _context5.t10, _context5.t11);

        case 91:
          _context5.next = 93;
          return {
            type: 'SAVE_ENTITY_RECORD_FINISH',
            kind: kind,
            name: name,
            recordId: recordId,
            error: error,
            isAutosave: isAutosave
          };

        case 93:
          return _context5.abrupt("return", updatedRecord);

        case 94:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[26, 72]]);
}
/**
 * Action triggered to save an entity record's edits.
 *
 * @param {string} kind     Kind of the entity.
 * @param {string} name     Name of the entity.
 * @param {Object} recordId ID of the record.
 * @param {Object} options  Saving options.
 */

function saveEditedEntityRecord(kind, name, recordId, options) {
  var edits, record;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function saveEditedEntityRecord$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'hasEditsForEntityRecord', kind, name, recordId);

        case 2:
          if (_context6.sent) {
            _context6.next = 4;
            break;
          }

          return _context6.abrupt("return");

        case 4:
          _context6.next = 6;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_4__["syncSelect"])('core', 'getEntityRecordNonTransientEdits', kind, name, recordId);

        case 6:
          edits = _context6.sent;
          record = _objectSpread({
            id: recordId
          }, edits);
          return _context6.delegateYield(saveEntityRecord(kind, name, record, options), "t0", 9);

        case 9:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
/**
 * Returns an action object used in signalling that Upload permissions have been received.
 *
 * @param {boolean} hasUploadPermissions Does the user have permission to upload files?
 *
 * @return {Object} Action object.
 */

function receiveUploadPermissions(hasUploadPermissions) {
  return {
    type: 'RECEIVE_USER_PERMISSION',
    key: 'create/media',
    isAllowed: hasUploadPermissions
  };
}
/**
 * Returns an action object used in signalling that the current user has
 * permission to perform an action on a REST resource.
 *
 * @param {string}  key       A key that represents the action and REST resource.
 * @param {boolean} isAllowed Whether or not the user can perform the action.
 *
 * @return {Object} Action object.
 */

function receiveUserPermission(key, isAllowed) {
  return {
    type: 'RECEIVE_USER_PERMISSION',
    key: key,
    isAllowed: isAllowed
  };
}
/**
 * Returns an action object used in signalling that the autosaves for a
 * post have been received.
 *
 * @param {number}       postId    The id of the post that is parent to the autosave.
 * @param {Array|Object} autosaves An array of autosaves or singular autosave object.
 *
 * @return {Object} Action object.
 */

function receiveAutosaves(postId, autosaves) {
  return {
    type: 'RECEIVE_AUTOSAVES',
    postId: postId,
    autosaves: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["castArray"])(autosaves)
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/entities.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/entities.js ***!
  \********************************************************************/
/*! exports provided: DEFAULT_ENTITY_KEY, defaultEntities, kinds, getMethodName, getKindEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ENTITY_KEY", function() { return DEFAULT_ENTITY_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultEntities", function() { return defaultEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kinds", function() { return kinds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMethodName", function() { return getMethodName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKindEntities", function() { return getKindEntities; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/core-data/build-module/actions.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPostTypeEntities),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadTaxonomyEntities),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getKindEntities);

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


var DEFAULT_ENTITY_KEY = 'id';
var defaultEntities = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Base'),
  name: '__unstableBase',
  kind: 'root',
  baseURL: ''
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Site'),
  name: 'site',
  kind: 'root',
  baseURL: '/wp/v2/settings',
  getTitle: function getTitle(record) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(record, ['title'], Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Site Title'));
  }
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Post Type'),
  name: 'postType',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/types'
}, {
  name: 'media',
  kind: 'root',
  baseURL: '/wp/v2/media',
  plural: 'mediaItems',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Media')
}, {
  name: 'taxonomy',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/taxonomies',
  plural: 'taxonomies',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Taxonomy')
}, {
  name: 'sidebar',
  kind: 'root',
  baseURL: '/wp/v2/sidebars',
  plural: 'sidebars',
  transientEdits: {
    blocks: true
  },
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Widget areas')
}, {
  name: 'widget',
  kind: 'root',
  baseURL: '/wp/v2/widgets',
  plural: 'widgets',
  transientEdits: {
    blocks: true
  },
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Widgets')
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('User'),
  name: 'user',
  kind: 'root',
  baseURL: '/wp/v2/users',
  plural: 'users'
}, {
  name: 'comment',
  kind: 'root',
  baseURL: '/wp/v2/comments',
  plural: 'comments',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Comment')
}, {
  name: 'menu',
  kind: 'root',
  baseURL: '/__experimental/menus',
  plural: 'menus',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Menu')
}, {
  name: 'menuItem',
  kind: 'root',
  baseURL: '/__experimental/menu-items',
  plural: 'menuItems',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Menu Item')
}, {
  name: 'menuLocation',
  kind: 'root',
  baseURL: '/__experimental/menu-locations',
  plural: 'menuLocations',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Menu Location'),
  key: 'name'
}];
var kinds = [{
  name: 'postType',
  loadEntities: loadPostTypeEntities
}, {
  name: 'taxonomy',
  loadEntities: loadTaxonomyEntities
}];
/**
 * Returns the list of post type entities.
 *
 * @return {Promise} Entities promise
 */

function loadPostTypeEntities() {
  var postTypes;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPostTypeEntities$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__["apiFetch"])({
            path: '/wp/v2/types?context=edit'
          });

        case 2:
          postTypes = _context.sent;
          return _context.abrupt("return", Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(postTypes, function (postType, name) {
            return {
              kind: 'postType',
              baseURL: '/wp/v2/' + postType.rest_base,
              name: name,
              label: postType.labels.singular_name,
              transientEdits: {
                blocks: true,
                selectionStart: true,
                selectionEnd: true
              },
              mergedEdits: {
                meta: true
              },
              getTitle: function getTitle(record) {
                if (name === 'wp_template_part' || name === 'wp_template') {
                  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["startCase"])(record.slug);
                }

                return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(record, ['title', 'rendered'], record.id);
              }
            };
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Returns the list of the taxonomies entities.
 *
 * @return {Promise} Entities promise
 */


function loadTaxonomyEntities() {
  var taxonomies;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadTaxonomyEntities$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__["apiFetch"])({
            path: '/wp/v2/taxonomies?context=edit'
          });

        case 2:
          taxonomies = _context2.sent;
          return _context2.abrupt("return", Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(taxonomies, function (taxonomy, name) {
            return {
              kind: 'taxonomy',
              baseURL: '/wp/v2/' + taxonomy.rest_base,
              name: name,
              label: taxonomy.labels.singular_name
            };
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Returns the entity's getter method name given its kind and name.
 *
 * @param {string}  kind      Entity kind.
 * @param {string}  name      Entity name.
 * @param {string}  prefix    Function prefix.
 * @param {boolean} usePlural Whether to use the plural form or not.
 *
 * @return {string} Method name
 */


var getMethodName = function getMethodName(kind, name) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  var usePlural = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var entity = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(defaultEntities, {
    kind: kind,
    name: name
  });
  var kindPrefix = kind === 'root' ? '' : Object(lodash__WEBPACK_IMPORTED_MODULE_1__["upperFirst"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["camelCase"])(kind));
  var nameSuffix = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["upperFirst"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["camelCase"])(name)) + (usePlural ? 's' : '');
  var suffix = usePlural && entity.plural ? Object(lodash__WEBPACK_IMPORTED_MODULE_1__["upperFirst"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["camelCase"])(entity.plural)) : nameSuffix;
  return "".concat(prefix).concat(kindPrefix).concat(suffix);
};
/**
 * Loads the kind entities into the store.
 *
 * @param {string} kind  Kind
 *
 * @return {Array} Entities
 */

function getKindEntities(kind) {
  var entities, kindConfig;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getKindEntities$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__["syncSelect"])('core', 'getEntitiesByKind', kind);

        case 2:
          entities = _context3.sent;

          if (!(entities && entities.length !== 0)) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", entities);

        case 5:
          kindConfig = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(kinds, {
            name: kind
          });

          if (kindConfig) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", []);

        case 8:
          _context3.next = 10;
          return kindConfig.loadEntities();

        case 10:
          entities = _context3.sent;
          _context3.next = 13;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["addEntities"])(entities);

        case 13:
          return _context3.abrupt("return", entities);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/entity-provider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/entity-provider.js ***!
  \***************************************************************************/
/*! exports provided: default, useEntityId, useEntityProp, useEntityBlockEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EntityProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEntityId", function() { return useEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEntityProp", function() { return useEntityProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEntityBlockEditor", function() { return useEntityBlockEditor; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var entities = _objectSpread(_objectSpread({}, _entities__WEBPACK_IMPORTED_MODULE_5__["defaultEntities"].reduce(function (acc, entity) {
  if (!acc[entity.kind]) {
    acc[entity.kind] = {};
  }

  acc[entity.kind][entity.name] = {
    context: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createContext"])()
  };
  return acc;
}, {})), _entities__WEBPACK_IMPORTED_MODULE_5__["kinds"].reduce(function (acc, kind) {
  acc[kind.name] = {};
  return acc;
}, {}));

var getEntity = function getEntity(kind, type) {
  if (!entities[kind]) {
    throw new Error("Missing entity config for kind: ".concat(kind, "."));
  }

  if (!entities[kind][type]) {
    entities[kind][type] = {
      context: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createContext"])()
    };
  }

  return entities[kind][type];
};
/**
 * Context provider component for providing
 * an entity for a specific entity type.
 *
 * @param {Object} props          The component's props.
 * @param {string} props.kind     The entity kind.
 * @param {string} props.type     The entity type.
 * @param {number} props.id       The entity ID.
 * @param {*}      props.children The children to wrap.
 *
 * @return {Object} The provided children, wrapped with
 *                   the entity's context provider.
 */


function EntityProvider(_ref) {
  var kind = _ref.kind,
      type = _ref.type,
      id = _ref.id,
      children = _ref.children;
  var Provider = getEntity(kind, type).context.Provider;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Provider, {
    value: id
  }, children);
}
/**
 * Hook that returns the ID for the nearest
 * provided entity of the specified type.
 *
 * @param {string} kind The entity kind.
 * @param {string} type The entity type.
 */

function useEntityId(kind, type) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useContext"])(getEntity(kind, type).context);
}
/**
 * Hook that returns the value and a setter for the
 * specified property of the nearest provided
 * entity of the specified type.
 *
 * @param {string} kind  The entity kind.
 * @param {string} type  The entity type.
 * @param {string} prop  The property name.
 * @param {string} [_id] An entity ID to use instead of the context-provided one.
 *
 * @return {[*, Function]} A tuple where the first item is the
 *                          property value and the second is the
 *                          setter.
 */

function useEntityProp(kind, type, prop, _id) {
  var providerId = useEntityId(kind, type);
  var id = _id !== null && _id !== void 0 ? _id : providerId;

  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])(function (select) {
    var _select = select('core'),
        getEntityRecord = _select.getEntityRecord,
        getEditedEntityRecord = _select.getEditedEntityRecord;

    var entity = getEntityRecord(kind, type, id); // Trigger resolver.

    var editedEntity = getEditedEntityRecord(kind, type, id);
    return entity && editedEntity ? {
      value: editedEntity[prop],
      fullValue: entity[prop]
    } : {};
  }, [kind, type, id, prop]),
      value = _useSelect.value,
      fullValue = _useSelect.fullValue;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])('core'),
      editEntityRecord = _useDispatch.editEntityRecord;

  var setValue = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (newValue) {
    editEntityRecord(kind, type, id, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prop, newValue));
  }, [kind, type, id, prop]);
  return [value, setValue, fullValue];
}
/**
 * Hook that returns block content getters and setters for
 * the nearest provided entity of the specified type.
 *
 * The return value has the shape `[ blocks, onInput, onChange ]`.
 * `onInput` is for block changes that don't create undo levels
 * or dirty the post, non-persistent changes, and `onChange` is for
 * peristent changes. They map directly to the props of a
 * `BlockEditorProvider` and are intended to be used with it,
 * or similar components or hooks.
 *
 * @param {string} kind                            The entity kind.
 * @param {string} type                            The entity type.
 * @param {Object} options
 * @param {Object} [options.initialEdits]          Initial edits object for the entity record.
 * @param {string} [options.blocksProp='blocks']   The name of the entity prop that holds the blocks array.
 * @param {string} [options.contentProp='content'] The name of the entity prop that holds the serialized blocks.
 * @param {string} [options.id]                    An entity ID to use instead of the context-provided one.
 *
 * @return {[WPBlock[], Function, Function]} The block array and setters.
 */

function useEntityBlockEditor(kind, type) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      initialEdits = _ref2.initialEdits,
      _ref2$blocksProp = _ref2.blocksProp,
      blocksProp = _ref2$blocksProp === void 0 ? 'blocks' : _ref2$blocksProp,
      _ref2$contentProp = _ref2.contentProp,
      contentProp = _ref2$contentProp === void 0 ? 'content' : _ref2$contentProp,
      _id = _ref2.id;

  var providerId = useEntityId(kind, type);
  var id = _id !== null && _id !== void 0 ? _id : providerId;

  var _useEntityProp = useEntityProp(kind, type, contentProp, id),
      _useEntityProp2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useEntityProp, 2),
      content = _useEntityProp2[0],
      setContent = _useEntityProp2[1];

  var _useDispatch2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])('core'),
      editEntityRecord = _useDispatch2.editEntityRecord;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (initialEdits) {
      editEntityRecord(kind, type, id, initialEdits, {
        undoIgnore: true
      });
    }
  }, [id]);
  var initialBlocks = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    // Guard against other instances that might have
    // set content to a function already.
    if (content && typeof content !== 'function') {
      var parsedContent = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["parse"])(content);
      return parsedContent.length ? parsedContent : [];
    }

    return [];
  }, [content]);

  var _useEntityProp3 = useEntityProp(kind, type, blocksProp, id),
      _useEntityProp4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useEntityProp3, 2),
      _useEntityProp4$ = _useEntityProp4[0],
      blocks = _useEntityProp4$ === void 0 ? initialBlocks : _useEntityProp4$,
      onInput = _useEntityProp4[1];

  var onChange = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (nextBlocks) {
    onInput(nextBlocks); // Use a function edit to avoid serializing often.

    setContent(function (_ref3) {
      var blocksToSerialize = _ref3.blocks;
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["serialize"])(blocksToSerialize);
    });
  }, [onInput, setContent]);
  return [blocks, onInput, onChange];
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/index.js ***!
  \*****************************************************************/
/*! exports provided: EntityProvider, useEntityId, useEntityProp, useEntityBlockEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/core-data/build-module/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/core-data/build-module/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/core-data/build-module/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers */ "./node_modules/@wordpress/core-data/build-module/resolvers.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _entity_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entity-provider */ "./node_modules/@wordpress/core-data/build-module/entity-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityProvider", function() { return _entity_provider__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEntityId", function() { return _entity_provider__WEBPACK_IMPORTED_MODULE_9__["useEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEntityProp", function() { return _entity_provider__WEBPACK_IMPORTED_MODULE_9__["useEntityProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEntityBlockEditor", function() { return _entity_provider__WEBPACK_IMPORTED_MODULE_9__["useEntityBlockEditor"]; });



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






 // The entity selectors/resolvers and actions are shortcuts to their generic equivalents
// (getEntityRecord, getEntityRecords, updateEntityRecord, updateEntityRecordss)
// Instead of getEntityRecord, the consumer could use more user-frieldly named selector: getPostType, getTaxonomy...
// The "kind" and the "name" of the entity are combined to generate these shortcuts.

var entitySelectors = _entities__WEBPACK_IMPORTED_MODULE_7__["defaultEntities"].reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[Object(_entities__WEBPACK_IMPORTED_MODULE_7__["getMethodName"])(kind, name)] = function (state, key) {
    return _selectors__WEBPACK_IMPORTED_MODULE_4__["getEntityRecord"](state, kind, name, key);
  };

  result[Object(_entities__WEBPACK_IMPORTED_MODULE_7__["getMethodName"])(kind, name, 'get', true)] = function (state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return _selectors__WEBPACK_IMPORTED_MODULE_4__["getEntityRecords"].apply(_selectors__WEBPACK_IMPORTED_MODULE_4__, [state, kind, name].concat(args));
  };

  return result;
}, {});
var entityResolvers = _entities__WEBPACK_IMPORTED_MODULE_7__["defaultEntities"].reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[Object(_entities__WEBPACK_IMPORTED_MODULE_7__["getMethodName"])(kind, name)] = function (key) {
    return _resolvers__WEBPACK_IMPORTED_MODULE_6__["getEntityRecord"](kind, name, key);
  };

  var pluralMethodName = Object(_entities__WEBPACK_IMPORTED_MODULE_7__["getMethodName"])(kind, name, 'get', true);

  result[pluralMethodName] = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _resolvers__WEBPACK_IMPORTED_MODULE_6__["getEntityRecords"].apply(_resolvers__WEBPACK_IMPORTED_MODULE_6__, [kind, name].concat(args));
  };

  result[pluralMethodName].shouldInvalidate = function (action) {
    var _resolvers$getEntityR;

    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return (_resolvers$getEntityR = _resolvers__WEBPACK_IMPORTED_MODULE_6__["getEntityRecords"]).shouldInvalidate.apply(_resolvers$getEntityR, [action, kind, name].concat(args));
  };

  return result;
}, {});
var entityActions = _entities__WEBPACK_IMPORTED_MODULE_7__["defaultEntities"].reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[Object(_entities__WEBPACK_IMPORTED_MODULE_7__["getMethodName"])(kind, name, 'save')] = function (key) {
    return _actions__WEBPACK_IMPORTED_MODULE_5__["saveEntityRecord"](kind, name, key);
  };

  result[Object(_entities__WEBPACK_IMPORTED_MODULE_7__["getMethodName"])(kind, name, 'delete')] = function (key, query) {
    return _actions__WEBPACK_IMPORTED_MODULE_5__["deleteEntityRecord"](kind, name, key, query);
  };

  return result;
}, {});
Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["registerStore"])(_name__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  controls: _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__["controls"],
  actions: _objectSpread(_objectSpread({}, _actions__WEBPACK_IMPORTED_MODULE_5__), entityActions),
  selectors: _objectSpread(_objectSpread({}, _selectors__WEBPACK_IMPORTED_MODULE_4__), entitySelectors),
  resolvers: _objectSpread(_objectSpread({}, _resolvers__WEBPACK_IMPORTED_MODULE_6__), entityResolvers)
});




/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/name.js":
/*!****************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/name.js ***!
  \****************************************************************/
/*! exports provided: REDUCER_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_KEY", function() { return REDUCER_KEY; });
/**
 * The reducer key used by core data in store registration.
 * This is defined in a separate file to avoid cycle-dependency
 *
 * @type {string}
 */
var REDUCER_KEY = 'core';


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/actions.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/actions.js ***!
  \********************************************************************************/
/*! exports provided: receiveItems, removeItems, receiveQueriedItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveItems", function() { return receiveItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItems", function() { return removeItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveQueriedItems", function() { return receiveQueriedItems; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Returns an action object used in signalling that items have been received.
 *
 * @param {Array} items Items received.
 *
 * @return {Object} Action object.
 */

function receiveItems(items) {
  return {
    type: 'RECEIVE_ITEMS',
    items: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["castArray"])(items)
  };
}
/**
 * Returns an action object used in signalling that entity records have been
 * deleted and they need to be removed from entities state.
 *
 * @param {string}       kind             Kind of the removed entities.
 * @param {string}       name             Name of the removed entities.
 * @param {Array|number} records          Record IDs of the removed entities.
 * @param {boolean}      invalidateCache  Controls whether we want to invalidate the cache.
 * @return {Object} Action object.
 */

function removeItems(kind, name, records) {
  var invalidateCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return {
    type: 'REMOVE_ITEMS',
    itemIds: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["castArray"])(records),
    kind: kind,
    name: name,
    invalidateCache: invalidateCache
  };
}
/**
 * Returns an action object used in signalling that queried data has been
 * received.
 *
 * @param {Array}   items Queried items received.
 * @param {?Object} query Optional query object.
 *
 * @return {Object} Action object.
 */

function receiveQueriedItems(items) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread(_objectSpread({}, receiveItems(items)), {}, {
    query: query
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js ***!
  \****************************************************************************************/
/*! exports provided: getQueryParts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParts", function() { return getQueryParts; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * An object of properties describing a specific query.
 *
 * @typedef {Object} WPQueriedDataQueryParts
 *
 * @property {number}      page      The query page (1-based index, default 1).
 * @property {number}      perPage   Items per page for query (default 10).
 * @property {string}      stableKey An encoded stable string of all non-
 *                                   pagination, non-fields query parameters.
 * @property {?(string[])} fields    Target subset of fields to derive from
 *                                   item objects.
 * @property {?(number[])} include   Specific item IDs to include.
 */

/**
 * Given a query object, returns an object of parts, including pagination
 * details (`page` and `perPage`, or default values). All other properties are
 * encoded into a stable (idempotent) `stableKey` value.
 *
 * @param {Object} query Optional query object.
 *
 * @return {WPQueriedDataQueryParts} Query parts.
 */

function getQueryParts(query) {
  /**
   * @type {WPQueriedDataQueryParts}
   */
  var parts = {
    stableKey: '',
    page: 1,
    perPage: 10,
    fields: null,
    include: null
  }; // Ensure stable key by sorting keys. Also more efficient for iterating.

  var keys = Object.keys(query).sort();

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = query[key];

    switch (key) {
      case 'page':
        parts[key] = Number(value);
        break;

      case 'per_page':
        parts.perPage = Number(value);
        break;

      case 'include':
        parts.include = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getNormalizedCommaSeparable"])(value).map(Number);
        break;

      default:
        // While in theory, we could exclude "_fields" from the stableKey
        // because two request with different fields have the same results
        // We're not able to ensure that because the server can decide to omit
        // fields from the response even if we explicitely asked for it.
        // Example: Asking for titles in posts without title support.
        if (key === '_fields') {
          parts.fields = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getNormalizedCommaSeparable"])(value);
        } // While it could be any deterministic string, for simplicity's
        // sake mimic querystring encoding for stable key.
        //
        // TODO: For consistency with PHP implementation, addQueryArgs
        // should accept a key value pair, which may optimize its
        // implementation for our use here, vs. iterating an object
        // with only a single key.


        parts.stableKey += (parts.stableKey ? '&' : '') + Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["addQueryArgs"])('', Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value)).slice(1);
    }
  }

  return parts;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["withWeakMapCache"])(getQueryParts));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/index.js ***!
  \******************************************************************************/
/*! exports provided: receiveItems, removeItems, receiveQueriedItems, getQueriedItems, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/core-data/build-module/queried-data/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveItems", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["receiveItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeItems", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["removeItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveQueriedItems", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["receiveQueriedItems"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueriedItems", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__["getQueriedItems"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js ***!
  \********************************************************************************/
/*! exports provided: getMergedItemIds, itemIsComplete, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMergedItemIds", function() { return getMergedItemIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemIsComplete", function() { return itemIsComplete; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/index.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _get_query_parts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-query-parts */ "./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




/**
 * Returns a merged array of item IDs, given details of the received paginated
 * items. The array is sparse-like with `undefined` entries where holes exist.
 *
 * @param {?Array<number>} itemIds     Original item IDs (default empty array).
 * @param {number[]}       nextItemIds Item IDs to merge.
 * @param {number}         page        Page of items merged.
 * @param {number}         perPage     Number of items per page.
 *
 * @return {number[]} Merged array of item IDs.
 */

function getMergedItemIds(itemIds, nextItemIds, page, perPage) {
  var receivedAllIds = page === 1 && perPage === -1;

  if (receivedAllIds) {
    return nextItemIds;
  }

  var nextItemIdsStartIndex = (page - 1) * perPage; // If later page has already been received, default to the larger known
  // size of the existing array, else calculate as extending the existing.

  var size = Math.max(itemIds.length, nextItemIdsStartIndex + nextItemIds.length); // Preallocate array since size is known.

  var mergedItemIds = new Array(size);

  for (var i = 0; i < size; i++) {
    // Preserve existing item ID except for subset of range of next items.
    var isInNextItemsRange = i >= nextItemIdsStartIndex && i < nextItemIdsStartIndex + nextItemIds.length;
    mergedItemIds[i] = isInNextItemsRange ? nextItemIds[i - nextItemIdsStartIndex] : itemIds[i];
  }

  return mergedItemIds;
}
/**
 * Reducer tracking items state, keyed by ID. Items are assumed to be normal,
 * where identifiers are common across all queries.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

function items() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_ITEMS':
      var key = action.key || _entities__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_ENTITY_KEY"];
      return _objectSpread(_objectSpread({}, state), action.items.reduce(function (accumulator, value) {
        var itemId = value[key];
        accumulator[itemId] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["conservativeMapItem"])(state[itemId], value);
        return accumulator;
      }, {}));

    case 'REMOVE_ITEMS':
      var newState = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(state, action.itemIds);
      return newState;
  }

  return state;
}
/**
 * Reducer tracking item completeness, keyed by ID. A complete item is one for
 * which all fields are known. This is used in supporting `_fields` queries,
 * where not all properties associated with an entity are necessarily returned.
 * In such cases, completeness is used as an indication of whether it would be
 * safe to use queried data for a non-`_fields`-limited request.
 *
 * @param {Object<string,boolean>} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object<string,boolean>} Next state.
 */


function itemIsComplete() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      query = action.query,
      _action$key = action.key,
      key = _action$key === void 0 ? _entities__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_ENTITY_KEY"] : _action$key;

  if (type !== 'RECEIVE_ITEMS') {
    return state;
  } // An item is considered complete if it is received without an associated
  // fields query. Ideally, this would be implemented in such a way where the
  // complete aggregate of all fields would satisfy completeness. Since the
  // fields are not consistent across all entity types, this would require
  // introspection on the REST schema for each entity to know which fields
  // compose a complete item for that entity.


  var isCompleteQuery = !query || !Array.isArray(Object(_get_query_parts__WEBPACK_IMPORTED_MODULE_5__["default"])(query).fields);
  return _objectSpread(_objectSpread({}, state), action.items.reduce(function (result, item) {
    var itemId = item[key]; // Defer to completeness if already assigned. Technically the
    // data may be outdated if receiving items for a field subset.

    result[itemId] = state[itemId] || isCompleteQuery;
    return result;
  }, {}));
}
/**
 * Reducer tracking queries state, keyed by stable query key. Each reducer
 * query object includes `itemIds` and `requestingPageByPerPage`.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

var receiveQueries = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flowRight"])([// Limit to matching action type so we don't attempt to replace action on
// an unhandled action.
Object(_utils__WEBPACK_IMPORTED_MODULE_3__["ifMatchingAction"])(function (action) {
  return 'query' in action;
}), // Inject query parts into action for use both in `onSubKey` and reducer.
Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceAction"])(function (action) {
  // `ifMatchingAction` still passes on initialization, where state is
  // undefined and a query is not assigned. Avoid attempting to parse
  // parts. `onSubKey` will omit by lack of `stableKey`.
  if (action.query) {
    return _objectSpread(_objectSpread({}, action), Object(_get_query_parts__WEBPACK_IMPORTED_MODULE_5__["default"])(action.query));
  }

  return action;
}), // Queries shape is shared, but keyed by query `stableKey` part. Original
// reducer tracks only a single query object.
Object(_utils__WEBPACK_IMPORTED_MODULE_3__["onSubKey"])('stableKey')])(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      page = action.page,
      perPage = action.perPage,
      _action$key2 = action.key,
      key = _action$key2 === void 0 ? _entities__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_ENTITY_KEY"] : _action$key2;

  if (type !== 'RECEIVE_ITEMS') {
    return state;
  }

  return getMergedItemIds(state || [], Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(action.items, key), page, perPage);
});
/**
 * Reducer tracking queries state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

var queries = function queries() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_ITEMS':
      return receiveQueries(state, action);

    case 'REMOVE_ITEMS':
      var newState = _objectSpread({}, state);

      var removedItems = action.itemIds.reduce(function (result, itemId) {
        result[itemId] = true;
        return result;
      }, {});
      Object(lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"])(newState, function (queryItems, key) {
        newState[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(queryItems, function (queryId) {
          return !removedItems[queryId];
        });
      });
      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  items: items,
  itemIsComplete: itemIsComplete,
  queries: queries
}));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js ***!
  \**********************************************************************************/
/*! exports provided: getQueriedItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueriedItems", function() { return getQueriedItems; });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var equivalent_key_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! equivalent-key-map */ "./node_modules/equivalent-key-map/equivalent-key-map.js");
/* harmony import */ var equivalent_key_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(equivalent_key_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _get_query_parts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-query-parts */ "./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Cache of state keys to EquivalentKeyMap where the inner map tracks queries
 * to their resulting items set. WeakMap allows garbage collection on expired
 * state references.
 *
 * @type {WeakMap<Object,EquivalentKeyMap>}
 */

var queriedItemsCacheByState = new WeakMap();
/**
 * Returns items for a given query, or null if the items are not known.
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */

function getQueriedItemsUncached(state, query) {
  var _getQueryParts = Object(_get_query_parts__WEBPACK_IMPORTED_MODULE_3__["default"])(query),
      stableKey = _getQueryParts.stableKey,
      page = _getQueryParts.page,
      perPage = _getQueryParts.perPage,
      include = _getQueryParts.include,
      fields = _getQueryParts.fields;

  var itemIds;

  if (Array.isArray(include) && !stableKey) {
    // If the parsed query yields a set of IDs, but otherwise no filtering,
    // it's safe to consider targeted item IDs as the include set. This
    // doesn't guarantee that those objects have been queried, which is
    // accounted for below in the loop `null` return.
    itemIds = include; // TODO: Avoid storing the empty stable string in reducer, since it
    // can be computed dynamically here always.
  } else if (state.queries[stableKey]) {
    itemIds = state.queries[stableKey];
  }

  if (!itemIds) {
    return null;
  }

  var startOffset = perPage === -1 ? 0 : (page - 1) * perPage;
  var endOffset = perPage === -1 ? itemIds.length : Math.min(startOffset + perPage, itemIds.length);
  var items = [];

  for (var i = startOffset; i < endOffset; i++) {
    var itemId = itemIds[i];

    if (Array.isArray(include) && !include.includes(itemId)) {
      continue;
    }

    if (!state.items.hasOwnProperty(itemId)) {
      return null;
    }

    var item = state.items[itemId];
    var filteredItem = void 0;

    if (Array.isArray(fields)) {
      filteredItem = {};

      for (var f = 0; f < fields.length; f++) {
        var field = fields[f].split('.');
        var value = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(item, field);
        Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(filteredItem, field, value);
      }
    } else {
      // If expecting a complete item, validate that completeness, or
      // otherwise abort.
      if (!state.itemIsComplete[itemId]) {
        return null;
      }

      filteredItem = item;
    }

    items.push(filteredItem);
  }

  return items;
}
/**
 * Returns items for a given query, or null if the items are not known. Caches
 * result both per state (by reference) and per query (by deep equality).
 * The caching approach is intended to be durable to query objects which are
 * deeply but not referentially equal, since otherwise:
 *
 * `getQueriedItems( state, {} ) !== getQueriedItems( state, {} )`
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */


var getQueriedItems = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var queriedItemsCache = queriedItemsCacheByState.get(state);

  if (queriedItemsCache) {
    var queriedItems = queriedItemsCache.get(query);

    if (queriedItems !== undefined) {
      return queriedItems;
    }
  } else {
    queriedItemsCache = new equivalent_key_map__WEBPACK_IMPORTED_MODULE_1___default.a();
    queriedItemsCacheByState.set(state, queriedItemsCache);
  }

  var items = getQueriedItemsUncached(state, query);
  queriedItemsCache.set(query, items);
  return items;
});


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/reducer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/reducer.js ***!
  \*******************************************************************/
/*! exports provided: terms, users, currentUser, taxonomies, currentTheme, themes, themeSupports, entitiesConfig, entities, undo, embedPreviews, userPermissions, autosaves, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "terms", function() { return terms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUser", function() { return currentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxonomies", function() { return taxonomies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentTheme", function() { return currentTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeSupports", function() { return themeSupports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesConfig", function() { return entitiesConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entities", function() { return entities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undo", function() { return undo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embedPreviews", function() { return embedPreviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPermissions", function() { return userPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autosaves", function() { return autosaves; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/index.js");
/* harmony import */ var _queried_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queried-data */ "./node_modules/@wordpress/core-data/build-module/queried-data/index.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




/**
 * Reducer managing terms state. Keyed by taxonomy slug, the value is either
 * undefined (if no request has been made for given taxonomy), null (if a
 * request is in-flight for given taxonomy), or the array of terms for the
 * taxonomy.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function terms() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_TERMS':
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, action.taxonomy, action.terms));
  }

  return state;
}
/**
 * Reducer managing authors state. Keyed by id.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    byId: {},
    queries: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_USER_QUERY':
      return {
        byId: _objectSpread(_objectSpread({}, state.byId), Object(lodash__WEBPACK_IMPORTED_MODULE_3__["keyBy"])(action.users, 'id')),
        queries: _objectSpread(_objectSpread({}, state.queries), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, action.queryID, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(action.users, function (user) {
          return user.id;
        })))
      };
  }

  return state;
}
/**
 * Reducer managing current user state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function currentUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_CURRENT_USER':
      return action.currentUser;
  }

  return state;
}
/**
 * Reducer managing taxonomies.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function taxonomies() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_TAXONOMIES':
      return action.taxonomies;
  }

  return state;
}
/**
 * Reducer managing the current theme.
 *
 * @param {string} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {string} Updated state.
 */

function currentTheme() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_CURRENT_THEME':
      return action.currentTheme.stylesheet;
  }

  return state;
}
/**
 * Reducer managing installed themes.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function themes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_CURRENT_THEME':
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, action.currentTheme.stylesheet, action.currentTheme));
  }

  return state;
}
/**
 * Reducer managing theme supports data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function themeSupports() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_THEME_SUPPORTS':
      return _objectSpread(_objectSpread({}, state), action.themeSupports);
  }

  return state;
}
/**
 * Higher Order Reducer for a given entity config. It supports:
 *
 *  - Fetching
 *  - Editing
 *  - Saving
 *
 * @param {Object} entityConfig  Entity config.
 *
 * @return {Function} Reducer.
 */

function entity(entityConfig) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["flowRight"])([// Limit to matching action type so we don't attempt to replace action on
  // an unhandled action.
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["ifMatchingAction"])(function (action) {
    return action.name && action.kind && action.name === entityConfig.name && action.kind === entityConfig.kind;
  }), // Inject the entity config into the action.
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["replaceAction"])(function (action) {
    return _objectSpread(_objectSpread({}, action), {}, {
      key: entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_ENTITY_KEY"]
    });
  })])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
    queriedData: _queried_data__WEBPACK_IMPORTED_MODULE_7__["reducer"],
    edits: function edits() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'RECEIVE_ITEMS':
          var nextState = _objectSpread({}, state);

          var _iterator = _createForOfIteratorHelper(action.items),
              _step;

          try {
            var _loop = function _loop() {
              var record = _step.value;
              var recordId = record[action.key];
              var edits = nextState[recordId];

              if (!edits) {
                return "continue";
              }

              var nextEdits = Object.keys(edits).reduce(function (acc, key) {
                // If the edited value is still different to the persisted value,
                // keep the edited value in edits.
                if ( // Edits are the "raw" attribute values, but records may have
                // objects with more properties, so we use `get` here for the
                // comparison.
                !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(edits[key], Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(record[key], 'raw', record[key]))) {
                  acc[key] = edits[key];
                }

                return acc;
              }, {});

              if (Object.keys(nextEdits).length) {
                nextState[recordId] = nextEdits;
              } else {
                delete nextState[recordId];
              }
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return nextState;

        case 'EDIT_ENTITY_RECORD':
          var nextEdits = _objectSpread(_objectSpread({}, state[action.recordId]), action.edits);

          Object.keys(nextEdits).forEach(function (key) {
            // Delete cleared edits so that the properties
            // are not considered dirty.
            if (nextEdits[key] === undefined) {
              delete nextEdits[key];
            }
          });
          return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, action.recordId, nextEdits));
      }

      return state;
    },
    saving: function saving() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'SAVE_ENTITY_RECORD_START':
        case 'SAVE_ENTITY_RECORD_FINISH':
          return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, action.recordId, {
            pending: action.type === 'SAVE_ENTITY_RECORD_START',
            error: action.error,
            isAutosave: action.isAutosave
          }));
      }

      return state;
    },
    deleting: function deleting() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'DELETE_ENTITY_RECORD_START':
        case 'DELETE_ENTITY_RECORD_FINISH':
          return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, action.recordId, {
            pending: action.type === 'DELETE_ENTITY_RECORD_START',
            error: action.error
          }));
      }

      return state;
    }
  }));
}
/**
 * Reducer keeping track of the registered entities.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */


function entitiesConfig() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _entities__WEBPACK_IMPORTED_MODULE_8__["defaultEntities"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_ENTITIES':
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(action.entities));
  }

  return state;
}
/**
 * Reducer keeping track of the registered entities config and data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var entities = function entities() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newConfig = entitiesConfig(state.config, action); // Generates a dynamic reducer for the entities

  var entitiesDataReducer = state.reducer;

  if (!entitiesDataReducer || newConfig !== state.config) {
    var entitiesByKind = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(newConfig, 'kind');
    entitiesDataReducer = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])(Object.entries(entitiesByKind).reduce(function (memo, _ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          kind = _ref2[0],
          subEntities = _ref2[1];

      var kindReducer = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])(subEntities.reduce(function (kindMemo, entityConfig) {
        return _objectSpread(_objectSpread({}, kindMemo), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, entityConfig.name, entity(entityConfig)));
      }, {}));
      memo[kind] = kindReducer;
      return memo;
    }, {}));
  }

  var newData = entitiesDataReducer(state.data, action);

  if (newData === state.data && newConfig === state.config && entitiesDataReducer === state.reducer) {
    return state;
  }

  return {
    reducer: entitiesDataReducer,
    data: newData,
    config: newConfig
  };
};
/**
 * Reducer keeping track of entity edit undo history.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var UNDO_INITIAL_STATE = [];
UNDO_INITIAL_STATE.offset = 0;
var lastEditAction;
function undo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : UNDO_INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'EDIT_ENTITY_RECORD':
    case 'CREATE_UNDO_LEVEL':
      var isCreateUndoLevel = action.type === 'CREATE_UNDO_LEVEL';
      var isUndoOrRedo = !isCreateUndoLevel && (action.meta.isUndo || action.meta.isRedo);

      if (isCreateUndoLevel) {
        action = lastEditAction;
      } else if (!isUndoOrRedo) {
        // Don't lose the last edit cache if the new one only has transient edits.
        // Transient edits don't create new levels so updating the cache would make
        // us skip an edit later when creating levels explicitly.
        if (Object.keys(action.edits).some(function (key) {
          return !action.transientEdits[key];
        })) {
          lastEditAction = action;
        } else {
          lastEditAction = _objectSpread(_objectSpread({}, action), {}, {
            edits: _objectSpread(_objectSpread({}, lastEditAction && lastEditAction.edits), action.edits)
          });
        }
      }

      var nextState;

      if (isUndoOrRedo) {
        nextState = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state);
        nextState.offset = state.offset + (action.meta.isUndo ? -1 : 1);

        if (state.flattenedUndo) {
          // The first undo in a sequence of undos might happen while we have
          // flattened undos in state. If this is the case, we want execution
          // to continue as if we were creating an explicit undo level. This
          // will result in an extra undo level being appended with the flattened
          // undo values.
          isCreateUndoLevel = true;
          action = lastEditAction;
        } else {
          return nextState;
        }
      }

      if (!action.meta.undo) {
        return state;
      } // Transient edits don't create an undo level, but are
      // reachable in the next meaningful edit to which they
      // are merged. They are defined in the entity's config.


      if (!isCreateUndoLevel && !Object.keys(action.edits).some(function (key) {
        return !action.transientEdits[key];
      })) {
        nextState = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state);
        nextState.flattenedUndo = _objectSpread(_objectSpread({}, state.flattenedUndo), action.edits);
        nextState.offset = state.offset;
        return nextState;
      } // Clear potential redos, because this only supports linear history.


      nextState = nextState || state.slice(0, state.offset || undefined);
      nextState.offset = nextState.offset || 0;
      nextState.pop();

      if (!isCreateUndoLevel) {
        nextState.push({
          kind: action.meta.undo.kind,
          name: action.meta.undo.name,
          recordId: action.meta.undo.recordId,
          edits: _objectSpread(_objectSpread({}, state.flattenedUndo), action.meta.undo.edits)
        });
      } // When an edit is a function it's an optimization to avoid running some expensive operation.
      // We can't rely on the function references being the same so we opt out of comparing them here.


      var comparisonUndoEdits = Object.values(action.meta.undo.edits).filter(function (edit) {
        return typeof edit !== 'function';
      });
      var comparisonEdits = Object.values(action.edits).filter(function (edit) {
        return typeof edit !== 'function';
      });

      if (!_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_5___default()(comparisonUndoEdits, comparisonEdits)) {
        nextState.push({
          kind: action.kind,
          name: action.name,
          recordId: action.recordId,
          edits: isCreateUndoLevel ? _objectSpread(_objectSpread({}, state.flattenedUndo), action.edits) : action.edits
        });
      }

      return nextState;
  }

  return state;
}
/**
 * Reducer managing embed preview data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function embedPreviews() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_EMBED_PREVIEW':
      var url = action.url,
          preview = action.preview;
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, url, preview));
  }

  return state;
}
/**
 * State which tracks whether the user can perform an action on a REST
 * resource.
 *
 * @param  {Object} state  Current state.
 * @param  {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function userPermissions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_USER_PERMISSION':
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, action.key, action.isAllowed));
  }

  return state;
}
/**
 * Reducer returning autosaves keyed by their parent's post id.
 *
 * @param  {Object} state  Current state.
 * @param  {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function autosaves() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_AUTOSAVES':
      var postId = action.postId,
          autosavesData = action.autosaves;
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, postId, autosavesData));
  }

  return state;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  terms: terms,
  users: users,
  currentTheme: currentTheme,
  currentUser: currentUser,
  taxonomies: taxonomies,
  themes: themes,
  themeSupports: themeSupports,
  entities: entities,
  undo: undo,
  embedPreviews: embedPreviews,
  userPermissions: userPermissions,
  autosaves: autosaves
}));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/resolvers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/resolvers.js ***!
  \*********************************************************************/
/*! exports provided: getAuthors, __unstableGetAuthor, getCurrentUser, getEntityRecord, getRawEntityRecord, getEditedEntityRecord, getEntityRecords, getCurrentTheme, getThemeSupports, getEmbedPreview, hasUploadPermissions, canUser, getAutosaves, getAutosave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthors", function() { return getAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__unstableGetAuthor", function() { return __unstableGetAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityRecord", function() { return getEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRawEntityRecord", function() { return getRawEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditedEntityRecord", function() { return getEditedEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityRecords", function() { return getEntityRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTheme", function() { return getCurrentTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeSupports", function() { return getThemeSupports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmbedPreview", function() { return getEmbedPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasUploadPermissions", function() { return hasUploadPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUser", function() { return canUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutosaves", function() { return getAutosaves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutosave", function() { return getAutosave; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/core-data/build-module/actions.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getAuthors),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(__unstableGetAuthor),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getCurrentUser),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getEntityRecord),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getEntityRecords),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getCurrentTheme),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getThemeSupports),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getEmbedPreview),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(hasUploadPermissions),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(canUser),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getAutosaves),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getAutosave);

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




/**
 * Requests authors from the REST API.
 *
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 */

function getAuthors(query) {
  var path, users;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getAuthors$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          path = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__["addQueryArgs"])('/wp/v2/users/?who=authors&per_page=100', query);
          _context.next = 3;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["apiFetch"])({
            path: path
          });

        case 3:
          users = _context.sent;
          _context.next = 6;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveUserQuery"])(path, users);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Temporary approach to resolving editor access to author queries.
 *
 * @param {number} id The author id.
 */

function __unstableGetAuthor(id) {
  var path, users;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function __unstableGetAuthor$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          path = "/wp/v2/users?who=authors&include=".concat(id);
          _context2.next = 3;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["apiFetch"])({
            path: path
          });

        case 3:
          users = _context2.sent;
          _context2.next = 6;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveUserQuery"])('author', users);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Requests the current user from the REST API.
 */

function getCurrentUser() {
  var currentUser;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getCurrentUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["apiFetch"])({
            path: '/wp/v2/users/me'
          });

        case 2:
          currentUser = _context3.sent;
          _context3.next = 5;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveCurrentUser"])(currentUser);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Requests an entity's record from the REST API.
 *
 * @param {string}           kind  Entity kind.
 * @param {string}           name  Entity name.
 * @param {number|string}    key   Record's key
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 */

function getEntityRecord(kind, name) {
  var key,
      query,
      entities,
      entity,
      path,
      hasRecords,
      record,
      _args4 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getEntityRecord$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          key = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : '';
          query = _args4.length > 3 ? _args4[3] : undefined;
          _context4.next = 4;
          return Object(_entities__WEBPACK_IMPORTED_MODULE_8__["getKindEntities"])(kind);

        case 4:
          entities = _context4.sent;
          entity = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(entities, {
            kind: kind,
            name: name
          });

          if (entity) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return");

        case 8:
          if (query !== undefined && query._fields) {
            // If requesting specific fields, items and query assocation to said
            // records are stored by ID reference. Thus, fields must always include
            // the ID.
            query = _objectSpread(_objectSpread({}, query), {}, {
              _fields: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"])([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedCommaSeparable"])(query._fields) || []), [entity.key || _entities__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_ENTITY_KEY"]])).join()
            });
          } // Disable reason: While true that an early return could leave `path`
          // unused, it's important that path is derived using the query prior to
          // additional query modifications in the condition below, since those
          // modifications are relevant to how the data is tracked in state, and not
          // for how the request is made to the REST API.
          // eslint-disable-next-line @wordpress/no-unused-vars-before-return


          path = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__["addQueryArgs"])(entity.baseURL + '/' + key, _objectSpread(_objectSpread({}, query), {}, {
            context: 'edit'
          }));

          if (!(query !== undefined)) {
            _context4.next = 17;
            break;
          }

          query = _objectSpread(_objectSpread({}, query), {}, {
            include: [key]
          }); // The resolution cache won't consider query as reusable based on the
          // fields, so it's tested here, prior to initiating the REST request,
          // and without causing `getEntityRecords` resolution to occur.

          _context4.next = 14;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["syncSelect"])('core', 'hasEntityRecords', kind, name, query);

        case 14:
          hasRecords = _context4.sent;

          if (!hasRecords) {
            _context4.next = 17;
            break;
          }

          return _context4.abrupt("return");

        case 17:
          _context4.next = 19;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["apiFetch"])({
            path: path
          });

        case 19:
          record = _context4.sent;
          _context4.next = 22;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveEntityRecords"])(kind, name, record, query);

        case 22:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Requests an entity's record from the REST API.
 */

var getRawEntityRecord = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["ifNotResolved"])(getEntityRecord, 'getEntityRecord');
/**
 * Requests an entity's record from the REST API.
 */

var getEditedEntityRecord = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["ifNotResolved"])(getRawEntityRecord, 'getRawEntityRecord');
/**
 * Requests the entity's records from the REST API.
 *
 * @param {string}  kind   Entity kind.
 * @param {string}  name   Entity name.
 * @param {Object?} query  Query Object.
 */

function getEntityRecords(kind, name) {
  var query,
      entities,
      entity,
      path,
      records,
      _args5 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getEntityRecords$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          query = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
          _context5.next = 3;
          return Object(_entities__WEBPACK_IMPORTED_MODULE_8__["getKindEntities"])(kind);

        case 3:
          entities = _context5.sent;
          entity = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(entities, {
            kind: kind,
            name: name
          });

          if (entity) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return");

        case 7:
          if (query._fields) {
            // If requesting specific fields, items and query assocation to said
            // records are stored by ID reference. Thus, fields must always include
            // the ID.
            query = _objectSpread(_objectSpread({}, query), {}, {
              _fields: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"])([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedCommaSeparable"])(query._fields) || []), [entity.key || _entities__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_ENTITY_KEY"]])).join()
            });
          }

          path = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__["addQueryArgs"])(entity.baseURL, _objectSpread(_objectSpread({}, query), {}, {
            context: 'edit'
          }));
          _context5.t0 = Object;
          _context5.next = 12;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["apiFetch"])({
            path: path
          });

        case 12:
          _context5.t1 = _context5.sent;
          records = _context5.t0.values.call(_context5.t0, _context5.t1);

          // If we request fields but the result doesn't contain the fields,
          // explicitely set these fields as "undefined"
          // that way we consider the query "fullfilled".
          if (query._fields) {
            records = records.map(function (record) {
              query._fields.split(',').forEach(function (field) {
                if (!record.hasOwnProperty(field)) {
                  record[field] = undefined;
                }
              });

              return record;
            });
          }

          _context5.next = 17;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveEntityRecords"])(kind, name, records, query);

        case 17:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

getEntityRecords.shouldInvalidate = function (action, kind, name) {
  return (action.type === 'RECEIVE_ITEMS' || action.type === 'REMOVE_ITEMS') && action.invalidateCache && kind === action.kind && name === action.name;
};
/**
 * Requests the current theme.
 */


function getCurrentTheme() {
  var activeThemes;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getCurrentTheme$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["apiFetch"])({
            path: '/wp/v2/themes?status=active'
          });

        case 2:
          activeThemes = _context6.sent;
          _context6.next = 5;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveCurrentTheme"])(activeThemes[0]);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
/**
 * Requests theme supports data from the index.
 */

function getThemeSupports() {
  var activeThemes;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getThemeSupports$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["apiFetch"])({
            path: '/wp/v2/themes?status=active'
          });

        case 2:
          activeThemes = _context7.sent;
          _context7.next = 5;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveThemeSupports"])(activeThemes[0].theme_supports);

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
/**
 * Requests a preview from the from the Embed API.
 *
 * @param {string} url   URL to get the preview for.
 */

function getEmbedPreview(url) {
  var embedProxyResponse;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getEmbedPreview$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["apiFetch"])({
            path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__["addQueryArgs"])('/oembed/1.0/proxy', {
              url: url
            })
          });

        case 3:
          embedProxyResponse = _context8.sent;
          _context8.next = 6;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveEmbedPreview"])(url, embedProxyResponse);

        case 6:
          _context8.next = 12;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          _context8.next = 12;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveEmbedPreview"])(url, false);

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 8]]);
}
/**
 * Requests Upload Permissions from the REST API.
 *
 * @deprecated since 5.0. Callers should use the more generic `canUser()` selector instead of
 *            `hasUploadPermissions()`, e.g. `canUser( 'create', 'media' )`.
 */

function hasUploadPermissions() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function hasUploadPermissions$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_5___default()("select( 'core' ).hasUploadPermissions()", {
            alternative: "select( 'core' ).canUser( 'create', 'media' )"
          });
          return _context9.delegateYield(canUser('create', 'media'), "t0", 2);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}
/**
 * Checks whether the current user can perform the given action on the given
 * REST resource.
 *
 * @param {string}  action   Action to check. One of: 'create', 'read', 'update',
 *                           'delete'.
 * @param {string}  resource REST resource to check, e.g. 'media' or 'posts'.
 * @param {?string} id       ID of the rest resource to check.
 */

function canUser(action, resource, id) {
  var methods, method, path, response, allowHeader, key, isAllowed;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function canUser$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          methods = {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            delete: 'DELETE'
          };
          method = methods[action];

          if (method) {
            _context10.next = 4;
            break;
          }

          throw new Error("'".concat(action, "' is not a valid action."));

        case 4:
          path = id ? "/wp/v2/".concat(resource, "/").concat(id) : "/wp/v2/".concat(resource);
          _context10.prev = 5;
          _context10.next = 8;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["apiFetch"])({
            path: path,
            // Ideally this would always be an OPTIONS request, but unfortunately there's
            // a bug in the REST API which causes the Allow header to not be sent on
            // OPTIONS requests to /posts/:id routes.
            // https://core.trac.wordpress.org/ticket/45753
            method: id ? 'GET' : 'OPTIONS',
            parse: false
          });

        case 8:
          response = _context10.sent;
          _context10.next = 14;
          break;

        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](5);
          return _context10.abrupt("return");

        case 14:
          if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["hasIn"])(response, ['headers', 'get'])) {
            // If the request is fetched using the fetch api, the header can be
            // retrieved using the 'get' method.
            allowHeader = response.headers.get('allow');
          } else {
            // If the request was preloaded server-side and is returned by the
            // preloading middleware, the header will be a simple property.
            allowHeader = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(response, ['headers', 'Allow'], '');
          }

          key = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["compact"])([action, resource, id]).join('/');
          isAllowed = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["includes"])(allowHeader, method);
          _context10.next = 19;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveUserPermission"])(key, isAllowed);

        case 19:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[5, 11]]);
}
/**
 * Request autosave data from the REST API.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */

function getAutosaves(postType, postId) {
  var _yield$select, restBase, autosaves;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getAutosaves$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["select"])('core', 'getPostType', postType);

        case 2:
          _yield$select = _context11.sent;
          restBase = _yield$select.rest_base;
          _context11.next = 6;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["apiFetch"])({
            path: "/wp/v2/".concat(restBase, "/").concat(postId, "/autosaves?context=edit")
          });

        case 6:
          autosaves = _context11.sent;

          if (!(autosaves && autosaves.length)) {
            _context11.next = 10;
            break;
          }

          _context11.next = 10;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_7__["receiveAutosaves"])(postId, autosaves);

        case 10:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}
/**
 * Request autosave data from the REST API.
 *
 * This resolver exists to ensure the underlying autosaves are fetched via
 * `getAutosaves` when a call to the `getAutosave` selector is made.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */

function getAutosave(postType, postId) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getAutosave$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_6__["select"])('core', 'getAutosaves', postType, postId);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/selectors.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/selectors.js ***!
  \*********************************************************************/
/*! exports provided: isRequestingEmbedPreview, getAuthors, __unstableGetAuthor, getCurrentUser, getUserQueryResults, getEntitiesByKind, getEntity, getEntityRecord, __experimentalGetEntityRecordNoResolver, getRawEntityRecord, hasEntityRecords, getEntityRecords, __experimentalGetDirtyEntityRecords, getEntityRecordEdits, getEntityRecordNonTransientEdits, hasEditsForEntityRecord, getEditedEntityRecord, isAutosavingEntityRecord, isSavingEntityRecord, isDeletingEntityRecord, getLastEntitySaveError, getLastEntityDeleteError, getUndoEdit, getRedoEdit, hasUndo, hasRedo, getCurrentTheme, getThemeSupports, getEmbedPreview, isPreviewEmbedFallback, hasUploadPermissions, canUser, getAutosaves, getAutosave, hasFetchedAutosaves, getReferenceByDistinctEdits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequestingEmbedPreview", function() { return isRequestingEmbedPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthors", function() { return getAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__unstableGetAuthor", function() { return __unstableGetAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserQueryResults", function() { return getUserQueryResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntitiesByKind", function() { return getEntitiesByKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return getEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityRecord", function() { return getEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalGetEntityRecordNoResolver", function() { return __experimentalGetEntityRecordNoResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRawEntityRecord", function() { return getRawEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEntityRecords", function() { return hasEntityRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityRecords", function() { return getEntityRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalGetDirtyEntityRecords", function() { return __experimentalGetDirtyEntityRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityRecordEdits", function() { return getEntityRecordEdits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityRecordNonTransientEdits", function() { return getEntityRecordNonTransientEdits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEditsForEntityRecord", function() { return hasEditsForEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditedEntityRecord", function() { return getEditedEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAutosavingEntityRecord", function() { return isAutosavingEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSavingEntityRecord", function() { return isSavingEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeletingEntityRecord", function() { return isDeletingEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastEntitySaveError", function() { return getLastEntitySaveError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastEntityDeleteError", function() { return getLastEntityDeleteError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUndoEdit", function() { return getUndoEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRedoEdit", function() { return getRedoEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasUndo", function() { return hasUndo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasRedo", function() { return hasRedo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTheme", function() { return getCurrentTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeSupports", function() { return getThemeSupports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmbedPreview", function() { return getEmbedPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPreviewEmbedFallback", function() { return isPreviewEmbedFallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasUploadPermissions", function() { return hasUploadPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUser", function() { return canUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutosaves", function() { return getAutosaves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutosave", function() { return getAutosave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFetchedAutosaves", function() { return hasFetchedAutosaves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReferenceByDistinctEdits", function() { return getReferenceByDistinctEdits; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _queried_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queried-data */ "./node_modules/@wordpress/core-data/build-module/queried-data/index.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





/**
 * Returns true if a request is in progress for embed preview data, or false
 * otherwise.
 *
 * @param {Object} state Data state.
 * @param {string} url   URL the preview would be for.
 *
 * @return {boolean} Whether a request is in progress for an embed preview.
 */

var isRequestingEmbedPreview = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["createRegistrySelector"])(function (select) {
  return function (state, url) {
    return select('core/data').isResolving(_name__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'getEmbedPreview', [url]);
  };
});
/**
 * Returns all available authors.
 *
 * @param {Object}           state Data state.
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 * @return {Array} Authors list.
 */

function getAuthors(state, query) {
  var path = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__["addQueryArgs"])('/wp/v2/users/?who=authors&per_page=100', query);
  return getUserQueryResults(state, path);
}
/**
 * Returns all available authors.
 *
 * @param {Object} state Data state.
 * @param {number} id The author id.
 *
 * @return {Array} Authors list.
 */

function __unstableGetAuthor(state, id) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state, ['users', 'byId', id], null);
}
/**
 * Returns the current user.
 *
 * @param {Object} state Data state.
 *
 * @return {Object} Current user object.
 */

function getCurrentUser(state) {
  return state.currentUser;
}
/**
 * Returns all the users returned by a query ID.
 *
 * @param {Object} state   Data state.
 * @param {string} queryID Query ID.
 *
 * @return {Array} Users list.
 */

var getUserQueryResults = Object(rememo__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state, queryID) {
  var queryResults = state.users.queries[queryID];
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(queryResults, function (id) {
    return state.users.byId[id];
  });
}, function (state, queryID) {
  return [state.users.queries[queryID], state.users.byId];
});
/**
 * Returns whether the entities for the give kind are loaded.
 *
 * @param {Object} state   Data state.
 * @param {string} kind  Entity kind.
 *
 * @return {boolean} Whether the entities are loaded
 */

function getEntitiesByKind(state, kind) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["filter"])(state.entities.config, {
    kind: kind
  });
}
/**
 * Returns the entity object given its kind and name.
 *
 * @param {Object} state   Data state.
 * @param {string} kind  Entity kind.
 * @param {string} name  Entity name.
 *
 * @return {Object} Entity
 */

function getEntity(state, kind, name) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(state.entities.config, {
    kind: kind,
    name: name
  });
}
/**
 * Returns the Entity's record object by key. Returns `null` if the value is not
 * yet received, undefined if the value entity is known to not exist, or the
 * entity object if it exists and is received.
 *
 * @param {Object}  state State tree
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {number}  key   Record's key
 * @param {?Object} query Optional query.
 *
 * @return {Object?} Record.
 */

function getEntityRecord(state, kind, name, key, query) {
  var queriedState = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state.entities.data, [kind, name, 'queriedData']);

  if (!queriedState) {
    return undefined;
  }

  if (query === undefined) {
    // If expecting a complete item, validate that completeness.
    if (!queriedState.itemIsComplete[key]) {
      return undefined;
    }

    return queriedState.items[key];
  }

  var item = queriedState.items[key];

  if (item && query._fields) {
    var filteredItem = {};
    var fields = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedCommaSeparable"])(query._fields);

    for (var f = 0; f < fields.length; f++) {
      var field = fields[f].split('.');
      var value = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(item, field);
      Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(filteredItem, field, value);
    }

    return filteredItem;
  }

  return item;
}
/**
 * Returns the Entity's record object by key. Doesn't trigger a resolver nor requests the entity from the API if the entity record isn't available in the local state.
 *
 * @param {Object} state  State tree
 * @param {string} kind   Entity kind.
 * @param {string} name   Entity name.
 * @param {number} key    Record's key
 *
 * @return {Object|null} Record.
 */

function __experimentalGetEntityRecordNoResolver(state, kind, name, key) {
  return getEntityRecord(state, kind, name, key);
}
/**
 * Returns the entity's record object by key,
 * with its attributes mapped to their raw values.
 *
 * @param {Object} state  State tree.
 * @param {string} kind   Entity kind.
 * @param {string} name   Entity name.
 * @param {number} key    Record's key.
 *
 * @return {Object?} Object with the entity's raw attributes.
 */

var getRawEntityRecord = Object(rememo__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state, kind, name, key) {
  var record = getEntityRecord(state, kind, name, key);
  return record && Object.keys(record).reduce(function (accumulator, _key) {
    // Because edits are the "raw" attribute values,
    // we return those from record selectors to make rendering,
    // comparisons, and joins with edits easier.
    accumulator[_key] = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(record[_key], 'raw', record[_key]);
    return accumulator;
  }, {});
}, function (state) {
  return [state.entities.data];
});
/**
 * Returns true if records have been received for the given set of parameters,
 * or false otherwise.
 *
 * @param {Object}  state State tree
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {?Object} query Optional terms query.
 *
 * @return {boolean} Whether entity records have been received.
 */

function hasEntityRecords(state, kind, name, query) {
  return Array.isArray(getEntityRecords(state, kind, name, query));
}
/**
 * Returns the Entity's records.
 *
 * @param {Object}  state State tree
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {?Object} query Optional terms query.
 *
 * @return {?Array} Records.
 */

function getEntityRecords(state, kind, name, query) {
  // Queried data state is prepopulated for all known entities. If this is not
  // assigned for the given parameters, then it is known to not exist. Thus, a
  // return value of an empty array is used instead of `null` (where `null` is
  // otherwise used to represent an unknown state).
  var queriedState = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state.entities.data, [kind, name, 'queriedData']);

  if (!queriedState) {
    return [];
  }

  return Object(_queried_data__WEBPACK_IMPORTED_MODULE_7__["getQueriedItems"])(queriedState, query);
}
/**
 * Returns the  list of dirty entity records.
 *
 * @param {Object} state State tree.
 *
 * @return {[{ title: string, key: string, name: string, kind: string }]} The list of updated records
 */

var __experimentalGetDirtyEntityRecords = Object(rememo__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state) {
  var data = state.entities.data;
  var dirtyRecords = [];
  Object.keys(data).forEach(function (kind) {
    Object.keys(data[kind]).forEach(function (name) {
      var primaryKeys = Object.keys(data[kind][name].edits).filter(function (primaryKey) {
        return hasEditsForEntityRecord(state, kind, name, primaryKey);
      });

      if (primaryKeys.length) {
        var entity = getEntity(state, kind, name);
        primaryKeys.forEach(function (primaryKey) {
          var entityRecord = getEditedEntityRecord(state, kind, name, primaryKey);
          dirtyRecords.push({
            // We avoid using primaryKey because it's transformed into a string
            // when it's used as an object key.
            key: entityRecord[entity.key || _entities__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_ENTITY_KEY"]],
            title: !entity.getTitle ? '' : entity.getTitle(entityRecord),
            name: name,
            kind: kind
          });
        });
      }
    });
  });
  return dirtyRecords;
}, function (state) {
  return [state.entities.data];
});
/**
 * Returns the specified entity record's edits.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's edits.
 */

function getEntityRecordEdits(state, kind, name, recordId) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state.entities.data, [kind, name, 'edits', recordId]);
}
/**
 * Returns the specified entity record's non transient edits.
 *
 * Transient edits don't create an undo level, and
 * are not considered for change detection.
 * They are defined in the entity's config.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's non transient edits.
 */

var getEntityRecordNonTransientEdits = Object(rememo__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state, kind, name, recordId) {
  var _ref = getEntity(state, kind, name) || {},
      transientEdits = _ref.transientEdits;

  var edits = getEntityRecordEdits(state, kind, name, recordId) || {};

  if (!transientEdits) {
    return edits;
  }

  return Object.keys(edits).reduce(function (acc, key) {
    if (!transientEdits[key]) {
      acc[key] = edits[key];
    }

    return acc;
  }, {});
}, function (state) {
  return [state.entities.config, state.entities.data];
});
/**
 * Returns true if the specified entity record has edits,
 * and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record has edits or not.
 */

function hasEditsForEntityRecord(state, kind, name, recordId) {
  return isSavingEntityRecord(state, kind, name, recordId) || Object.keys(getEntityRecordNonTransientEdits(state, kind, name, recordId)).length > 0;
}
/**
 * Returns the specified entity record, merged with its edits.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record, merged with its edits.
 */

var getEditedEntityRecord = Object(rememo__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state, kind, name, recordId) {
  return _objectSpread(_objectSpread({}, getRawEntityRecord(state, kind, name, recordId)), getEntityRecordEdits(state, kind, name, recordId));
}, function (state) {
  return [state.entities.data];
});
/**
 * Returns true if the specified entity record is autosaving, and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is autosaving or not.
 */

function isAutosavingEntityRecord(state, kind, name, recordId) {
  var _get = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state.entities.data, [kind, name, 'saving', recordId], {}),
      pending = _get.pending,
      isAutosave = _get.isAutosave;

  return Boolean(pending && isAutosave);
}
/**
 * Returns true if the specified entity record is saving, and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is saving or not.
 */

function isSavingEntityRecord(state, kind, name, recordId) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state.entities.data, [kind, name, 'saving', recordId, 'pending'], false);
}
/**
 * Returns true if the specified entity record is deleting, and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is deleting or not.
 */

function isDeletingEntityRecord(state, kind, name, recordId) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state.entities.data, [kind, name, 'deleting', recordId, 'pending'], false);
}
/**
 * Returns the specified entity record's last save error.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's save error.
 */

function getLastEntitySaveError(state, kind, name, recordId) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state.entities.data, [kind, name, 'saving', recordId, 'error']);
}
/**
 * Returns the specified entity record's last delete error.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's save error.
 */

function getLastEntityDeleteError(state, kind, name, recordId) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state.entities.data, [kind, name, 'deleting', recordId, 'error']);
}
/**
 * Returns the current undo offset for the
 * entity records edits history. The offset
 * represents how many items from the end
 * of the history stack we are at. 0 is the
 * last edit, -1 is the second last, and so on.
 *
 * @param {Object} state State tree.
 *
 * @return {number} The current undo offset.
 */

function getCurrentUndoOffset(state) {
  return state.undo.offset;
}
/**
 * Returns the previous edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param {Object} state State tree.
 *
 * @return {Object?} The edit.
 */


function getUndoEdit(state) {
  return state.undo[state.undo.length - 2 + getCurrentUndoOffset(state)];
}
/**
 * Returns the next edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param {Object} state State tree.
 *
 * @return {Object?} The edit.
 */

function getRedoEdit(state) {
  return state.undo[state.undo.length + getCurrentUndoOffset(state)];
}
/**
 * Returns true if there is a previous edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param {Object} state State tree.
 *
 * @return {boolean} Whether there is a previous edit or not.
 */

function hasUndo(state) {
  return Boolean(getUndoEdit(state));
}
/**
 * Returns true if there is a next edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param {Object} state State tree.
 *
 * @return {boolean} Whether there is a next edit or not.
 */

function hasRedo(state) {
  return Boolean(getRedoEdit(state));
}
/**
 * Return the current theme.
 *
 * @param {Object} state Data state.
 *
 * @return {Object}      The current theme.
 */

function getCurrentTheme(state) {
  return state.themes[state.currentTheme];
}
/**
 * Return theme supports data in the index.
 *
 * @param {Object} state Data state.
 *
 * @return {*}           Index data.
 */

function getThemeSupports(state) {
  return state.themeSupports;
}
/**
 * Returns the embed preview for the given URL.
 *
 * @param {Object} state    Data state.
 * @param {string} url      Embedded URL.
 *
 * @return {*} Undefined if the preview has not been fetched, otherwise, the preview fetched from the embed preview API.
 */

function getEmbedPreview(state, url) {
  return state.embedPreviews[url];
}
/**
 * Determines if the returned preview is an oEmbed link fallback.
 *
 * WordPress can be configured to return a simple link to a URL if it is not embeddable.
 * We need to be able to determine if a URL is embeddable or not, based on what we
 * get back from the oEmbed preview API.
 *
 * @param {Object} state    Data state.
 * @param {string} url      Embedded URL.
 *
 * @return {boolean} Is the preview for the URL an oEmbed link fallback.
 */

function isPreviewEmbedFallback(state, url) {
  var preview = state.embedPreviews[url];
  var oEmbedLinkCheck = '<a href="' + url + '">' + url + '</a>';

  if (!preview) {
    return false;
  }

  return preview.html === oEmbedLinkCheck;
}
/**
 * Returns whether the current user can upload media.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @deprecated since 5.0. Callers should use the more generic `canUser()` selector instead of
 *             `hasUploadPermissions()`, e.g. `canUser( 'create', 'media' )`.
 *
 * @param {Object} state Data state.
 *
 * @return {boolean} Whether or not the user can upload media. Defaults to `true` if the OPTIONS
 *                   request is being made.
 */

function hasUploadPermissions(state) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()("select( 'core' ).hasUploadPermissions()", {
    alternative: "select( 'core' ).canUser( 'create', 'media' )"
  });
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["defaultTo"])(canUser(state, 'create', 'media'), true);
}
/**
 * Returns whether the current user can perform the given action on the given
 * REST resource.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param {Object}   state            Data state.
 * @param {string}   action           Action to check. One of: 'create', 'read', 'update', 'delete'.
 * @param {string}   resource         REST resource to check, e.g. 'media' or 'posts'.
 * @param {string=}  id               Optional ID of the rest resource to check.
 *
 * @return {boolean|undefined} Whether or not the user can perform the action,
 *                             or `undefined` if the OPTIONS request is still being made.
 */

function canUser(state, action, resource, id) {
  var key = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["compact"])([action, resource, id]).join('/');
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state, ['userPermissions', key]);
}
/**
 * Returns the latest autosaves for the post.
 *
 * May return multiple autosaves since the backend stores one autosave per
 * author for each post.
 *
 * @param {Object} state    State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 *
 * @return {?Array} An array of autosaves for the post, or undefined if there is none.
 */

function getAutosaves(state, postType, postId) {
  return state.autosaves[postId];
}
/**
 * Returns the autosave for the post and author.
 *
 * @param {Object} state    State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 * @param {number} authorId The id of the author.
 *
 * @return {?Object} The autosave for the post and author.
 */

function getAutosave(state, postType, postId, authorId) {
  if (authorId === undefined) {
    return;
  }

  var autosaves = state.autosaves[postId];
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(autosaves, {
    author: authorId
  });
}
/**
 * Returns true if the REST request for autosaves has completed.
 *
 * @param {Object} state State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 *
 * @return {boolean} True if the REST request was completed. False otherwise.
 */

var hasFetchedAutosaves = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["createRegistrySelector"])(function (select) {
  return function (state, postType, postId) {
    return select(_name__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"]).hasFinishedResolution('getAutosaves', [postType, postId]);
  };
});
/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
 *
 * @example
 *
 * ```
 * const hasEditOccurred = (
 *    getReferenceByDistinctEdits( beforeState ) !==
 *    getReferenceByDistinctEdits( afterState )
 * );
 * ```
 *
 * @param {Object} state Editor state.
 *
 * @return {*} A value whose reference will change only when an edit occurs.
 */

var getReferenceByDistinctEdits = Object(rememo__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  return [];
}, function (state) {
  return [state.undo.length, state.undo.offset, state.undo.flattenedUndo];
});


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return conservativeMapItem; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Given the current and next item entity, returns the minimally "modified"
 * result of the next item, preferring value references from the original item
 * if equal. If all values match, the original item is returned.
 *
 * @param {Object} item     Original item.
 * @param {Object} nextItem Next item.
 *
 * @return {Object} Minimally modified merged item.
 */

function conservativeMapItem(item, nextItem) {
  // Return next item in its entirety if there is no original item.
  if (!item) {
    return nextItem;
  }

  var hasChanges = false;
  var result = {};

  for (var key in nextItem) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(item[key], nextItem[key])) {
      result[key] = item[key];
    } else {
      hasChanges = true;
      result[key] = nextItem[key];
    }
  }

  if (!hasChanges) {
    return item;
  } // Only at this point, backfill properties from the original item which
  // weren't explicitly set into the result above. This is an optimization
  // to allow `hasChanges` to return early.


  for (var _key in item) {
    if (!result.hasOwnProperty(_key)) {
      result[_key] = item[_key];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Given a value which can be specified as one or the other of a comma-separated
 * string or an array, returns a value normalized to an array of strings, or
 * null if the value cannot be interpreted as either.
 *
 * @param {string|string[]|*} value
 *
 * @return {?(string[])} Normalized field value.
 */
function getNormalizedCommaSeparable(value) {
  if (typeof value === 'string') {
    return value.split(',');
  } else if (Array.isArray(value)) {
    return value;
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (getNormalizedCommaSeparable);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A higher-order reducer creator which invokes the original reducer only if
 * the dispatching action matches the given predicate, **OR** if state is
 * initializing (undefined).
 *
 * @param {Function} isMatch Function predicate for allowing reducer call.
 *
 * @return {Function} Higher-order reducer.
 */
var ifMatchingAction = function ifMatchingAction(isMatch) {
  return function (reducer) {
    return function (state, action) {
      if (state === undefined || isMatch(action)) {
        return reducer(state, action);
      }

      return state;
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ifMatchingAction);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/if-not-resolved.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/if-not-resolved.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

/**
 * Higher-order function which invokes the given resolver only if it has not
 * already been resolved with the arguments passed to the enhanced function.
 *
 * This only considers resolution state, and notably does not support resolver
 * custom `isFulfilled` behavior.
 *
 * @param {Function} resolver     Original resolver.
 * @param {string}   selectorName Selector name associated with resolver.
 *
 * @return {Function} Enhanced resolver.
 */

var ifNotResolved = function ifNotResolved(resolver, selectorName) {
  return (
    /*#__PURE__*/

    /**
     * @param {...any} args Original resolver arguments.
     */
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function resolveIfNotResolved() {
      var _len,
          args,
          _key,
          hasStartedResolution,
          _args = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resolveIfNotResolved$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args[_key];
              }

              _context.next = 3;
              return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["select"])('core', 'hasStartedResolution', selectorName, args);

            case 3:
              hasStartedResolution = _context.sent;

              if (hasStartedResolution) {
                _context.next = 6;
                break;
              }

              return _context.delegateYield(resolver.apply(void 0, args), "t0", 6);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, resolveIfNotResolved);
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (ifNotResolved);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/index.js ***!
  \***********************************************************************/
/*! exports provided: conservativeMapItem, getNormalizedCommaSeparable, ifMatchingAction, ifNotResolved, onSubKey, replaceAction, withWeakMapCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conservative_map_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conservative-map-item */ "./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "conservativeMapItem", function() { return _conservative_map_item__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _get_normalized_comma_separable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-normalized-comma-separable */ "./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNormalizedCommaSeparable", function() { return _get_normalized_comma_separable__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _if_matching_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./if-matching-action */ "./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ifMatchingAction", function() { return _if_matching_action__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _if_not_resolved__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./if-not-resolved */ "./node_modules/@wordpress/core-data/build-module/utils/if-not-resolved.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ifNotResolved", function() { return _if_not_resolved__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _on_sub_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./on-sub-key */ "./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSubKey", function() { return _on_sub_key__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _replace_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./replace-action */ "./node_modules/@wordpress/core-data/build-module/utils/replace-action.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceAction", function() { return _replace_action__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _with_weak_map_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./with-weak-map-cache */ "./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withWeakMapCache", function() { return _with_weak_map_cache__WEBPACK_IMPORTED_MODULE_6__["default"]; });










/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js ***!
  \****************************************************************************/
/*! exports provided: onSubKey, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSubKey", function() { return onSubKey; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param {string} actionProperty Action property by which to key object.
 *
 * @return {Function} Higher-order reducer.
 */
var onSubKey = function onSubKey(actionProperty) {
  return function (reducer) {
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;
      // Retrieve subkey from action. Do not track if undefined; useful for cases
      // where reducer is scoped by action shape.
      var key = action[actionProperty];

      if (key === undefined) {
        return state;
      } // Avoid updating state if unchanged. Note that this also accounts for a
      // reducer which returns undefined on a key which is not yet tracked.


      var nextKeyState = reducer(state[key], action);

      if (nextKeyState === state[key]) {
        return state;
      }

      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, nextKeyState));
    };
  };
};
/* harmony default export */ __webpack_exports__["default"] = (onSubKey);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/replace-action.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/replace-action.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Higher-order reducer creator which substitutes the action object before
 * passing to the original reducer.
 *
 * @param {Function} replacer Function mapping original action to replacement.
 *
 * @return {Function} Higher-order reducer.
 */
var replaceAction = function replaceAction(replacer) {
  return function (reducer) {
    return function (state, action) {
      return reducer(state, replacer(action));
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (replaceAction);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Given a function, returns an enhanced function which caches the result and
 * tracks in WeakMap. The result is only cached if the original function is
 * passed a valid object-like argument (requirement for WeakMap key).
 *
 * @param {Function} fn Original function.
 *
 * @return {Function} Enhanced caching function.
 */

function withWeakMapCache(fn) {
  var cache = new WeakMap();
  return function (key) {
    var value;

    if (cache.has(key)) {
      value = cache.get(key);
    } else {
      value = fn(key); // Can reach here if key is not valid for WeakMap, since `has`
      // will return false for invalid key. Since `set` will throw,
      // ensure that key is valid before setting into cache.

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isObjectLike"])(key)) {
        cache.set(key, value);
      }
    }

    return value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withWeakMapCache);


/***/ }),

/***/ "./node_modules/equivalent-key-map/equivalent-key-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/equivalent-key-map/equivalent-key-map.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * Given an instance of EquivalentKeyMap, returns its internal value pair tuple
 * for a key, if one exists. The tuple members consist of the last reference
 * value for the key (used in efficient subsequent lookups) and the value
 * assigned for the key at the leaf node.
 *
 * @param {EquivalentKeyMap} instance EquivalentKeyMap instance.
 * @param {*} key                     The key for which to return value pair.
 *
 * @return {?Array} Value pair, if exists.
 */
function getValuePair(instance, key) {
  var _map = instance._map,
      _arrayTreeMap = instance._arrayTreeMap,
      _objectTreeMap = instance._objectTreeMap; // Map keeps a reference to the last object-like key used to set the
  // value, which can be used to shortcut immediately to the value.

  if (_map.has(key)) {
    return _map.get(key);
  } // Sort keys to ensure stable retrieval from tree.


  var properties = Object.keys(key).sort(); // Tree by type to avoid conflicts on numeric object keys, empty value.

  var map = Array.isArray(key) ? _arrayTreeMap : _objectTreeMap;

  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    map = map.get(property);

    if (map === undefined) {
      return;
    }

    var propertyValue = key[property];
    map = map.get(propertyValue);

    if (map === undefined) {
      return;
    }
  }

  var valuePair = map.get('_ekm_value');

  if (!valuePair) {
    return;
  } // If reached, it implies that an object-like key was set with another
  // reference, so delete the reference and replace with the current.


  _map.delete(valuePair[0]);

  valuePair[0] = key;
  map.set('_ekm_value', valuePair);

  _map.set(key, valuePair);

  return valuePair;
}
/**
 * Variant of a Map object which enables lookup by equivalent (deeply equal)
 * object and array keys.
 */


var EquivalentKeyMap =
/*#__PURE__*/
function () {
  /**
   * Constructs a new instance of EquivalentKeyMap.
   *
   * @param {Iterable.<*>} iterable Initial pair of key, value for map.
   */
  function EquivalentKeyMap(iterable) {
    _classCallCheck(this, EquivalentKeyMap);

    this.clear();

    if (iterable instanceof EquivalentKeyMap) {
      // Map#forEach is only means of iterating with support for IE11.
      var iterablePairs = [];
      iterable.forEach(function (value, key) {
        iterablePairs.push([key, value]);
      });
      iterable = iterablePairs;
    }

    if (iterable != null) {
      for (var i = 0; i < iterable.length; i++) {
        this.set(iterable[i][0], iterable[i][1]);
      }
    }
  }
  /**
   * Accessor property returning the number of elements.
   *
   * @return {number} Number of elements.
   */


  _createClass(EquivalentKeyMap, [{
    key: "set",

    /**
     * Add or update an element with a specified key and value.
     *
     * @param {*} key   The key of the element to add.
     * @param {*} value The value of the element to add.
     *
     * @return {EquivalentKeyMap} Map instance.
     */
    value: function set(key, value) {
      // Shortcut non-object-like to set on internal Map.
      if (key === null || _typeof(key) !== 'object') {
        this._map.set(key, value);

        return this;
      } // Sort keys to ensure stable assignment into tree.


      var properties = Object.keys(key).sort();
      var valuePair = [key, value]; // Tree by type to avoid conflicts on numeric object keys, empty value.

      var map = Array.isArray(key) ? this._arrayTreeMap : this._objectTreeMap;

      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];

        if (!map.has(property)) {
          map.set(property, new EquivalentKeyMap());
        }

        map = map.get(property);
        var propertyValue = key[property];

        if (!map.has(propertyValue)) {
          map.set(propertyValue, new EquivalentKeyMap());
        }

        map = map.get(propertyValue);
      } // If an _ekm_value exists, there was already an equivalent key. Before
      // overriding, ensure that the old key reference is removed from map to
      // avoid memory leak of accumulating equivalent keys. This is, in a
      // sense, a poor man's WeakMap, while still enabling iterability.


      var previousValuePair = map.get('_ekm_value');

      if (previousValuePair) {
        this._map.delete(previousValuePair[0]);
      }

      map.set('_ekm_value', valuePair);

      this._map.set(key, valuePair);

      return this;
    }
    /**
     * Returns a specified element.
     *
     * @param {*} key The key of the element to return.
     *
     * @return {?*} The element associated with the specified key or undefined
     *              if the key can't be found.
     */

  }, {
    key: "get",
    value: function get(key) {
      // Shortcut non-object-like to get from internal Map.
      if (key === null || _typeof(key) !== 'object') {
        return this._map.get(key);
      }

      var valuePair = getValuePair(this, key);

      if (valuePair) {
        return valuePair[1];
      }
    }
    /**
     * Returns a boolean indicating whether an element with the specified key
     * exists or not.
     *
     * @param {*} key The key of the element to test for presence.
     *
     * @return {boolean} Whether an element with the specified key exists.
     */

  }, {
    key: "has",
    value: function has(key) {
      if (key === null || _typeof(key) !== 'object') {
        return this._map.has(key);
      } // Test on the _presence_ of the pair, not its value, as even undefined
      // can be a valid member value for a key.


      return getValuePair(this, key) !== undefined;
    }
    /**
     * Removes the specified element.
     *
     * @param {*} key The key of the element to remove.
     *
     * @return {boolean} Returns true if an element existed and has been
     *                   removed, or false if the element does not exist.
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      if (!this.has(key)) {
        return false;
      } // This naive implementation will leave orphaned child trees. A better
      // implementation should traverse and remove orphans.


      this.set(key, undefined);
      return true;
    }
    /**
     * Executes a provided function once per each key/value pair, in insertion
     * order.
     *
     * @param {Function} callback Function to execute for each element.
     * @param {*}        thisArg  Value to use as `this` when executing
     *                            `callback`.
     */

  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _this = this;

      var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

      this._map.forEach(function (value, key) {
        // Unwrap value from object-like value pair.
        if (key !== null && _typeof(key) === 'object') {
          value = value[1];
        }

        callback.call(thisArg, value, key, _this);
      });
    }
    /**
     * Removes all elements.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._map = new Map();
      this._arrayTreeMap = new Map();
      this._objectTreeMap = new Map();
    }
  }, {
    key: "size",
    get: function get() {
      return this._map.size;
    }
  }]);

  return EquivalentKeyMap;
}();

module.exports = EquivalentKeyMap;


/***/ }),

/***/ "./node_modules/rememo/es/rememo.js":
/*!******************************************!*\
  !*** ./node_modules/rememo/es/rememo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ __webpack_exports__["default"] = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/data-controls":
/*!***********************************************!*\
  !*** external {"this":["wp","dataControls"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dataControls"]; }());

/***/ }),

/***/ "@wordpress/deprecated":
/*!*********************************************!*\
  !*** external {"this":["wp","deprecated"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["deprecated"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!*************************************************!*\
  !*** external {"this":["wp","isShallowEqual"]} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["isShallowEqual"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=core-data.js.map