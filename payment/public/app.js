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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Plugin/Preset files are not allowed to export objects, only functions.\\n    at createDescriptor (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/config-descriptors.js:158:11)\\n    at /Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/config-descriptors.js:101:12\\n    at Array.map (<anonymous>)\\n    at createDescriptors (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/config-descriptors.js:100:27)\\n    at createPresetDescriptors (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/config-descriptors.js:92:10)\\n    at /Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/config-descriptors.js:78:14\\n    at cachedFunction (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/caching.js:40:17)\\n    at presets (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/config-descriptors.js:23:68)\\n    at mergeChainOpts (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/config-chain.js:294:68)\\n    at /Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/config-chain.js:247:7\\n    at buildRootChain (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/config-chain.js:64:27)\\n    at loadConfig (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/config/index.js:50:53)\\n    at transformSync (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/transform-sync.js:13:36)\\n    at Object.transform (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/@babel/core/lib/transform.js:20:65)\\n    at transpile (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/babel-loader/lib/index.js:50:20)\\n    at Object.module.exports (/Users/clinkleadmin/Documents/HR90/FrontEndCap/hakuza/payment/node_modules/babel-loader/lib/index.js:175:20)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);