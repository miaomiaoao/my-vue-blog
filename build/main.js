require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '首页',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', '~assets/icon/iconfont.css', 'element-ui/lib/theme-chalk/index.css', 'mavon-editor/dist/css/index.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['~/plugins/element-ui', '~/plugins/mavon-editor', '~/plugins/chart'],
    /*
     ** Run ESLINT on save
     */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },

  plugins: ['~/plugins/element-ui', {
    src: '~/plugins/chart',
    ssr: false
  },
  // '~/plugins/chart',
  {
    src: '~/plugins/mavon-editor',
    ssr: false
  }]
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_vscode_my_vue_blog_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_vscode_my_vue_blog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_vscode_my_vue_blog_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


// import UserModel from '../dbs/model/user'

var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a({
  prefix: '/user'
});

router.post('/signup', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_vscode_my_vue_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var result;
    return __WEBPACK_IMPORTED_MODULE_0_D_vscode_my_vue_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('xxxx');
            console.log(ctx.request.body);
            result = {};
            // let [username, password] = [ctx.request.body.username, ctx.request.body.password]
            // const user = await UserModel.findOne({username: username}).exec()
            // if (user) {
            //   result = {
            //     code: '999',
            //     msg: '用户已存在'
            //   }
            // } else {
            //   const usermodel = new UserModel({
            //     username: username,
            //     password: password
            //   })
            //   await usermodel.save((err) => {
            //     if (err) {
            //       console.log(err)
            //     } else {
            //       result = {
            //         code: '000',
            //         msg: '保存成功'
            //       }
            //     }
            //   })
            // }

            ctx.body = {
              result: result
            };

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ exports["a"] = router;

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_vscode_my_vue_blog_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_vscode_my_vue_blog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_vscode_my_vue_blog_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interface_user__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_bodyparser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_bodyparser__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_vscode_my_vue_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0_D_vscode_my_vue_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 5000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(1);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);
            // 数据库的连接

            __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });

            // Build in development

            if (!config.dev) {
              _context.next = 11;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context.next = 11;
            return builder.build();

          case 11:
            app.use(__WEBPACK_IMPORTED_MODULE_5_koa_bodyparser___default()({
              extendTypes: ['json', 'form', 'text']
            }));
            app.use(__WEBPACK_IMPORTED_MODULE_4__interface_user__["a" /* default */].routes()).use(__WEBPACK_IMPORTED_MODULE_4__interface_user__["a" /* default */].allowedMethods());
            app.use(function (ctx) {
              ctx.status = 200;
              ctx.respond = false; // Mark request as handled for Koa
              ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
              nuxt.render(ctx.req, ctx.res);
            });

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map