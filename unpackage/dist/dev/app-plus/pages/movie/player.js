"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/main.js?{"page":"pages%2Fmovie%2Fplayer"} ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_movie_player_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/movie/player.nvue?mpType=page */ 9);

        
        
        
        _pages_movie_player_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_movie_player_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/movie/player'
        _pages_movie_player_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_movie_player_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","_id":"@dcloudio/uni-stat@2.0.0-v3-24020191018001","_inBundle":false,"_integrity":"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"^2.0.0-alpha-24420191128001","saveSpec":null,"fetchSpec":"^2.0.0-alpha-24420191128001"},"_requiredBy":["/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz","_shasum":"6ef04326cc0b945726413eebe442ab8f47c7536c","_spec":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-v3-24020191018001"};

/***/ }),
/* 4 */
/*!**********************************************************!*\
  !*** /Users/lixi/Space/电影模板/pages.json?{"type":"style"} ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 5 */
/*!*********************************************************!*\
  !*** /Users/lixi/Space/电影模板/pages.json?{"type":"stat"} ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__903B2CE"});

/***/ }),
/* 6 */
/*!**********************************************************!*\
  !*** /Users/lixi/Space/电影模板/main.js?{"type":"appStyle"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 7 */
/*!**********************************************************************!*\
  !*** /Users/lixi/Space/电影模板/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 8);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!/Users/lixi/Space/电影模板/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 9 */
/*!******************************************************************!*\
  !*** /Users/lixi/Space/电影模板/pages/movie/player.nvue?mpType=page ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_nvue_vue_type_template_id_2b989023_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.nvue?vue&type=template&id=2b989023&mpType=page */ 10);
/* harmony import */ var _player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.nvue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 31);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./player.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 62).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./player.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 62).default)
          }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _player_nvue_vue_type_template_id_2b989023_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _player_nvue_vue_type_template_id_2b989023_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "a20f0d18"
  
)

injectStyles.call(component)
component.options.__file = "Users/lixi/Space/电影模板/pages/movie/player.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/*!************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/pages/movie/player.nvue?vue&type=template&id=2b989023&mpType=page ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_template_id_2b989023_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./player.nvue?vue&type=template&id=2b989023&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_template_id_2b989023_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_template_id_2b989023_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 11 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/pages/movie/player.nvue?vue&type=template&id=2b989023&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c("div", { staticClass: ["detail"] }, [
        _c(
          "div",
          { staticClass: ["detail-head"] },
          [
            _c("chunlei-video", {
              ref: "video",
              staticClass: ["detail-video"],
              attrs: {
                isBack: true,
                autoplay: true,
                orientation: true,
                srcList: _vm.palyerUrl,
                initialTime: _vm.playerInitialTime
              }
            })
          ],
          1
        ),
        _c(
          "div",
          { staticStyle: { marginTop: "20px" } },
          [
            _c("uni-notice-bar", {
              attrs: {
                showIcon: "true",
                single: "true",
                text:
                  "播放失败或缓慢请在下方切换播放源,若不能播放,可向管理员反馈"
              }
            })
          ],
          1
        ),
        _c("div", { staticClass: ["detail-add"] }, [
          _c("div", { staticClass: ["detail-add-head"] }, [
            _c(
              "div",
              { staticClass: ["detail-add-head-item1"] },
              [
                _c("u-image", {
                  staticClass: ["detail-add-head-item1-img"],
                  attrs: { src: "/static/sysicon/dong.png" }
                })
              ],
              1
            ),
            _c("div", { staticClass: ["detail-add-head-item2"] }, [
              _c("u-text", [_vm._v("\n\t\t\t\t片源选择\n\t\t\t")])
            ])
          ]),
          _c(
            "div",
            { staticClass: ["detail-add-main"] },
            _vm._l(_vm.vodList, function(item, index) {
              return _c(
                "div",
                {
                  key: index,
                  class: [
                    "detail-add-main-button",
                    item.active ? "active" : ""
                  ],
                  on: {
                    click: function($event) {
                      _vm.setActive(item)
                    }
                  }
                },
                [_c("u-text", [_vm._v(_vm._s(item.addres))])]
              )
            }),
            0
          )
        ]),
        _c("div", { staticClass: ["detail-add"] }, [
          _c("div", { staticClass: ["detail-add-head"] }, [
            _c(
              "div",
              { staticClass: ["detail-add-head-item1"] },
              [
                _c("u-image", {
                  staticClass: ["detail-add-head-item1-img"],
                  attrs: { src: "/static/sysicon/dong.png" }
                })
              ],
              1
            ),
            _c("div", { staticClass: ["detail-add-head-item2"] }, [
              _c("u-text", [_vm._v("\n\t\t\t\t选集播放\n\t\t\t")])
            ])
          ]),
          _c(
            "div",
            { staticClass: ["detail-add-main"] },
            _vm._l(_vm.urlList.urlList, function(item, index) {
              return _c(
                "div",
                {
                  key: index,
                  class: [
                    "detail-add-main-button1",
                    item.active ? "active" : ""
                  ],
                  on: {
                    click: function($event) {
                      _vm.getPlayerUrl(_vm.urlList.addres, item)
                    }
                  }
                },
                [_c("u-text", [_vm._v(_vm._s(item.title))])]
              )
            }),
            0
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!******************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/pages/movie/player.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./player.nvue?vue&type=script&lang=js&mpType=page */ 13);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/pages/movie/player.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 15));














































var _index = _interopRequireDefault(__webpack_require__(/*! @/mixins/index.js */ 18));
var _uniNoticeBar = _interopRequireDefault(__webpack_require__(/*! @/components/uni-notice-bar/uni-notice-bar.vue */ 19));
var _chunleiVideo = _interopRequireDefault(__webpack_require__(/*! @/components/chunlei-video/chunlei-video.nvue */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  mixins: [_index.default],
  components: {
    uniNoticeBar: _uniNoticeBar.default,
    chunleiVideo: _chunleiVideo.default },


  data: function data() {
    return {
      vodInfo: {},
      vodList: [],
      palyerUrl: 'https://cn1.download05.com/hls/20190910/dc7992f5d9b95d26ef8d2726acd71675/1568085844/index.m3u8',
      urlList: [],
      history: false,
      historyJIndu: {
        currentTime: 0,
        duration: 0 },

      historyData: [],
      playerInitialTime: 0 };

  },
  onLoad: function onLoad(option) {
    // this.videoContext = uni.createVideoContext('myVideo')
    this.getVodInfo(option.id);
    if (option.history) {
      console.log(__f__('历史数据:', option, " at pages/movie/player.nvue:77"));
      this.history = true;
      this.historyData = JSON.parse(decodeURIComponent(option.history));
    } else {
      this.history = false;
    }
  },
  methods: {

    //初始化获取历史记录
    setHistoryData: function setHistoryData() {
      var historyData = this.historyData;
      console.log(__f__('播放地址：', historyData, " at pages/movie/player.nvue:89"));
      this.vodList = this.vodList.map(function (item) {
        item.active = false;
        if (historyData.activeAddress == item.addres) item.active = true;
        return item;
      });
      this.urlList = this.vodList.filter(function (item) {return item.active;})[0] || {};
      this.urlList.urlList = this.urlList.urlList.map(function (item) {
        item.active = false;
        if (historyData.activeTitle == item.title) item.active = true;
        return item;
      });
      this.palyerUrl = this.historyData.activeUrl;

      // this.videoContext.seek(historyData.currentTime||0)
      this.playerInitialTime = historyData.currentTime || 0;
      // this.videoContext.play()

    },
    //启动播放
    videoPlay: function videoPlay() {
      this.endPlayer();
    },
    //启动错误
    videoError: function videoError(e) {
      console.log(__f__('Error:', e, " at pages/movie/player.nvue:114"));
    },
    //启动暂停
    videoPause: function videoPause(e) {
      console.log(__f__('Pause:', e, " at pages/movie/player.nvue:118"));
    },
    //播放时间进度
    videoTimeupdate: function videoTimeupdate(event) {
      this.historyJIndu = event.detail;
      this.buildData(this.historyJIndu);
    },
    showMenu: function showMenu(data) {
      var reg = /m3u8/;
      return reg.test(data.addres);
    },
    //点击播放
    getPlayerUrl: function () {var _getPlayerUrl = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(add, data) {var obj, url;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                obj = {
                  type: add,
                  url: data.url };_context.next = 3;return (

                  this.getRealPalyeUrl(obj));case 3:url = _context.sent;
                console.log(__f__(11, url, " at pages/movie/player.nvue:136"));
                this.palyerUrl = url;
                this.endPlayer();case 7:case "end":return _context.stop();}}}, _callee, this);}));function getPlayerUrl(_x, _x2) {return _getPlayerUrl.apply(this, arguments);}return getPlayerUrl;}(),

    //播放同步按钮和历史记录
    endPlayer: function endPlayer() {
      this.buildData();
      // this.videoContext.play()
    },
    buildData: function buildData(params) {var _this = this;
      var data = {};
      this.urlList.urlList = this.urlList.urlList.map(function (item) {
        item.active = false;
        if (_this.palyerUrl == item.url) {
          item.active = true;
          data = item;
        }
        return item;
      });var _this$vodInfo =








      this.vodInfo,vod_id = _this$vodInfo.vod_id,vod_pic = _this$vodInfo.vod_pic,vod_name = _this$vodInfo.vod_name,vod_director = _this$vodInfo.vod_director,vod_actor = _this$vodInfo.vod_actor,vod_year = _this$vodInfo.vod_year,vod_score = _this$vodInfo.vod_score;
      var obj2 = {
        activeAddress: this.urlList.addres,
        activeTitle: data.title,
        activeUrl: data.url,
        vod_id: vod_id,
        vod_pic: vod_pic,
        vod_name: vod_name,
        vod_director: vod_director,
        vod_actor: vod_actor,
        vod_year: vod_year,
        vod_score: vod_score,
        currentTime: 0,
        duration: 0 };


      if (params) {
        obj2.currentTime = params.currentTime;
        obj2.duration = params.duration;
      }
      this.setSync(obj2);
    },
    //同步历史记录
    setSync: function setSync(data) {
      var playerHistory = uni.getStorageSync('player:history');
      if (!playerHistory) playerHistory = [];
      for (var i = 0; i < playerHistory.length; i++) {
        if (playerHistory[i].vod_id === data.vod_id) {
          playerHistory.splice(i, 1);
          break;
        }
      }
      playerHistory.unshift(data);
      uni.setStorage({
        key: 'player:history',
        data: playerHistory,
        success: function success() {
          console.log(__f__('player 缓存成功', " at pages/movie/player.nvue:200"));
        } });

    },
    //获取基本信息
    getVodInfo: function () {var _getVodInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {var res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  this.$http.post('movie/dyController/getVodInfo', {
                    id: id }));case 2:res = _context2.sent;

                if (res.data && res.data.success) {
                  this.vodInfo = res.data.result[0];
                  uni.setNavigationBarTitle({
                    title: this.vodInfo.vod_name });

                  this.vodList = this.setVodList(this.vodInfo);
                  this.urlList = this.vodList.filter(function (item) {return item.active;})[0] || {};
                  console.log(__f__('urlList', this.urlList, " at pages/movie/player.nvue:216"));
                  this.palyerUrl = this.urlList.urlList[0].url;
                  if (this.history) this.setHistoryData();
                } else {
                  console.log(__f__("请求错误", " at pages/movie/player.nvue:220"));
                }case 4:case "end":return _context2.stop();}}}, _callee2, this);}));function getVodInfo(_x3) {return _getVodInfo.apply(this, arguments);}return getVodInfo;}(),

    //设置选中状态
    setActive: function setActive(data) {
      this.vodList = this.vodList.map(function (item) {
        item.active = false;
        if (data.addres == item.addres) item.active = true;
        return item;
      });
      this.urlList = this.vodList.filter(function (item) {return item.active;})[0] || {};
    },
    toPlayer: function toPlayer() {
      uni.navigateTo({
        url: '/pages/movie/player' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 14 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v);

    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  return msg;
}

/***/ }),
/* 15 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 16);


/***/ }),
/* 16 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 17);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 17 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 18 */
/*!**********************************************!*\
  !*** /Users/lixi/Space/电影模板/mixins/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default = {
  methods: {

    /**
              * @description  设置背景颜色
              * @param {Object} data 数据源
              */
    setStyleImg: function setStyleImg(data) {
      var img = data.vod_pic;
      if (img.indexOf('http') != -1) {} else {
        img = this.$config.serveIp + '/' + data.vod_pic;
      }
      return {
        backgroundImage: "url(".concat(img, ")") };

    },


    /**
        * @description  设置图片
        * @param {Object} data 数据源
        */
    setImg: function setImg(data) {
      var img = data.vod_pic;
      if (img) {
        if (img.indexOf('http') != -1) {} else {
          img = this.$config.serveIp + '/' + data.vod_pic;
        }
        console.log(__f__(img, " at mixins/index.js:29"));
        return img;
      } else {
        '/static/item.jpg';
      }


    },


    /**
        *@description  节点点击事件（电影、电视剧、动漫）
        * @param {Object} data 数据源
        */
    setClick: function setClick(data) {
      uni.navigateTo({
        url: "/pages/movie/player?id=".concat(data.vod_id) });

    },
    setClickPlayer: function setClickPlayer(data) {
      uni.navigateTo({
        url: "/pages/movie/player?id=".concat(data.vod_id) });

    },
    /**
        * @description  解析url数据格式
        * @param {Object} data 设置数据源
        */
    setVodList: function setVodList(data) {
      var palyForm = data.vod_play_from.split('$$$');
      var playUrl = data.vod_play_url.split('$$$');
      var palyList = [];
      palyForm.forEach(function (item, index) {
        var obj = {
          addres: item,
          urlList: [],
          active: index == 0 ? true : false };

        var list2 = playUrl[index].split('#');

        list2.forEach(function (item2) {
          var obj2 = {
            title: item2.split('$')[0],
            url: item2.split('$')[1] };

          obj.urlList.push(obj2);
        });

        palyList.push(obj);
      });
      palyList = palyList.filter(function (item) {
        var reg = /m3u8/;
        return reg.test(item.addres);
      });
      console.log(__f__(palyList, " at mixins/index.js:83"));
      return palyList;
    },

    /**
        * 获取真实播放地址
        * @param {Object} data
        */
    getRealPalyeUrl: function () {var _getRealPalyeUrl = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(data) {var reg;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                reg = /m3u8/;if (!
                reg.test(data.type)) {_context.next = 5;break;}return _context.abrupt("return",
                data.url);case 5:_context.t0 =

                data.type;_context.next = _context.t0 ===
                "yjyun" ? 8 : 12;break;case 8:_context.next = 10;return (
                  this.getYY(data.url));case 10:return _context.abrupt("return", _context.sent);case 12:


                uni.showToast({
                  title: '暂不支持解析，请联系管理员',
                  duration: 2000 });return _context.abrupt("return",

                '');case 15:case "end":return _context.stop();}}}, _callee, this);}));function getRealPalyeUrl(_x) {return _getRealPalyeUrl.apply(this, arguments);}return getRealPalyeUrl;}(),





    getYY: function () {var _getYY = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(url) {var param, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                param = {
                  url: url };

                uni.showLoading({
                  title: '解析中' });_context2.next = 4;return (

                  this.$http.post('movie/dyController/getRealUrl', param));case 4:res = _context2.sent;if (!(
                res.data && res.data.success)) {_context2.next = 10;break;}
                uni.hideLoading();return _context2.abrupt("return",
                res.data.result.url);case 10:

                console.log(__f__("请求错误", " at mixins/index.js:123"));
                uni.hideLoading();
                uni.showToast({
                  title: '解析失败，请重试',
                  duration: 2000 });case 13:case "end":return _context2.stop();}}}, _callee2, this);}));function getYY(_x2) {return _getYY.apply(this, arguments);}return getYY;}(),




    conver: function conver(limit) {
      var size = "";
      if (limit < 0.1 * 1024) {//如果小于0.1KB转化成B  
        size = limit.toFixed(2) + "B";
      } else if (limit < 0.1 * 1024 * 1024) {//如果小于0.1MB转化成KB  
        size = (limit / 1024).toFixed(2) + "KB";
      } else if (limit < 0.1 * 1024 * 1024 * 1024) {//如果小于0.1GB转化成MB  
        size = (limit / (1024 * 1024)).toFixed(2) + "MB";
      } else {//其他转化成GB  
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
      }

      var sizestr = size + "";
      var len = sizestr.indexOf("\.");
      var dec = sizestr.substr(len + 1, 2);
      if (dec == "00") {//当小数点后为00时 去掉小数部分  
        return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
      }
      return sizestr;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 19 */
/*!***************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/uni-notice-bar/uni-notice-bar.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_notice_bar_vue_vue_type_template_id_d6174c14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-notice-bar.vue?vue&type=template&id=d6174c14& */ 20);
/* harmony import */ var _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-notice-bar.vue?vue&type=script&lang=js& */ 22);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 31);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-notice-bar.vue?vue&type=style&index=0&lang=css& */ 32).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./uni-notice-bar.vue?vue&type=style&index=0&lang=css& */ 32).default)
          }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_notice_bar_vue_vue_type_template_id_d6174c14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_notice_bar_vue_vue_type_template_id_d6174c14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "285c6a0b"
  
)

injectStyles.call(component)
component.options.__file = "Users/lixi/Space/电影模板/components/uni-notice-bar/uni-notice-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/*!**********************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/uni-notice-bar/uni-notice-bar.vue?vue&type=template&id=d6174c14& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_template_id_d6174c14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-notice-bar.vue?vue&type=template&id=d6174c14& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_template_id_d6174c14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_template_id_d6174c14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 21 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!/Users/lixi/Space/电影模板/components/uni-notice-bar/uni-notice-bar.vue?vue&type=template&id=d6174c14& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "view",
        {
          staticClass: ["uni-noticebar"],
          style: { backgroundColor: _vm.backgroundColor, color: _vm.color },
          on: { click: _vm.onClick }
        },
        [
          _vm.showClose === "true" || _vm.showClose === true
            ? _c(
                "view",
                { staticClass: ["uni-noticebar__close"] },
                [_c("uni-icon", { attrs: { icon: "shanchu", size: "12" } })],
                1
              )
            : _vm._e(),
          _c(
            "view",
            {
              staticClass: ["uni-noticebar__content"],
              class: {
                "uni-noticebar--flex":
                  _vm.scrollable || _vm.single || _vm.moreText
              }
            },
            [
              _vm.showIcon === "true" || _vm.showIcon === true
                ? _c(
                    "view",
                    {
                      staticClass: ["uni-noticebar__content-icon"],
                      style: {
                        backgroundColor: _vm.backgroundColor,
                        color: _vm.color
                      }
                    },
                    [
                      _c("uni-icon", {
                        attrs: {
                          color: _vm.color,
                          icon: "xiaoxitongzhi",
                          size: "14"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _c(
                "view",
                {
                  staticClass: ["uni-noticebar__content-text"],
                  class: {
                    "uni-noticebar--scrollable": _vm.scrollable,
                    "uni-noticebar--single":
                      !_vm.scrollable && (_vm.single || _vm.moreText)
                  }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["uni-noticebar__content-inner"],
                      style: {
                        animation: _vm.animation,
                        "-webkit-animation": _vm.animation
                      },
                      attrs: { id: _vm.elId }
                    },
                    [_c("u-text", [_vm._v(_vm._s(_vm.text))])]
                  )
                ]
              ),
              _vm.showGetMore === "true" || _vm.showGetMore === true
                ? _c(
                    "view",
                    {
                      staticClass: ["uni-noticebar__content-more"],
                      style: { width: _vm.moreText ? "180upx" : "20px" },
                      on: { click: _vm.clickMore }
                    },
                    [
                      _vm.moreText
                        ? _c(
                            "view",
                            {
                              staticClass: ["uni-noticebar__content-more-text"]
                            },
                            [_c("u-text", [_vm._v(_vm._s(_vm.moreText))])]
                          )
                        : _vm._e(),
                      _c("uni-icon", { attrs: { icon: "next", size: "14" } })
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 22 */
/*!****************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/uni-notice-bar/uni-notice-bar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-notice-bar.vue?vue&type=script&lang=js& */ 23);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!/Users/lixi/Space/电影模板/components/uni-notice-bar/uni-notice-bar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




















var _index = _interopRequireDefault(__webpack_require__(/*! ../base-icon/index.vue */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { name: 'UniNoticeBar', components: { uniIcon: _index.default }, props: { text: { type: String, default: '' }, moreText: { type: String, default: '' }, backgroundColor: { type: String, default: '#fffbe8' }, speed: { // 默认1s滚动100px
      type: [String, Number],
      default: 100 },

    color: {
      type: String,
      default: '#de8c17' },

    single: {
      // 是否单行
      type: [String, Boolean],
      default: false },

    scrollable: {
      // 是否滚动，添加后控制单行效果取消
      type: [String, Boolean],
      default: false },

    showIcon: {
      // 是否显示左侧icon
      type: [String, Boolean],
      default: false },

    showGetMore: {
      // 是否显示右侧查看更多
      type: [String, Boolean],
      default: false },

    showClose: {
      // 是否显示左侧关闭按钮
      type: [String, Boolean],
      default: false } },


  data: function data() {
    var elId = "Uni_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    return {
      elId: elId,
      show: true,
      animation: '' };

  },
  watch: {
    text: function text(newValue, oldValue) {var _this = this;
      this.$nextTick(function () {
        setTimeout(_this.setAnimation, 200);
      });
    } },







  onReady: function onReady() {
    this.setAnimation();
  },

  methods: {
    clickMore: function clickMore() {
      this.$emit('getmore');
    },
    onClick: function onClick(e) {
      var clientX = e.touches ? e.touches[0] ? e.touches[0].clientX : e.changedTouches[0].clientX : e.detail.clientX;
      if (uni.upx2px(48) + 12 > clientX && String(this.showClose) === 'true') {
        this.show = false;
        this.$emit('close');
      }
      this.$emit('click');
    },
    setAnimation: function setAnimation() {var _this2 = this;
      if (this.scrollable === false || this.scrollable === 'false') {
        return;
      }












      uni.createSelectorQuery().
      in(this).
      select("#".concat(this.elId)).
      boundingClientRect().
      exec(function (ret) {
        _this2.animation = "notice ".concat(ret[0].width / _this2.speed, "s linear infinite both");
      });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 24 */
/*!*************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/base-icon/index.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d8dd0142___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d8dd0142& */ 25);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 27);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 31);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ 29).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ 29).default)
          }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d8dd0142___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d8dd0142___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "52302834"
  
)

injectStyles.call(component)
component.options.__file = "Users/lixi/Space/电影模板/components/base-icon/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 25 */
/*!********************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/base-icon/index.vue?vue&type=template&id=d8dd0142& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_template_id_d8dd0142___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./index.vue?vue&type=template&id=d8dd0142& */ 26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_template_id_d8dd0142___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_template_id_d8dd0142___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 26 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!/Users/lixi/Space/电影模板/components/base-icon/index.vue?vue&type=template&id=d8dd0142& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", {
    class: ["iconfont ", "icon-" + _vm.icon],
    style: { color: _vm.color, "font-size": _vm.fontsize },
    on: { click: _vm._onClick }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 27 */
/*!**************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/base-icon/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./index.vue?vue&type=script&lang=js& */ 28);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!/Users/lixi/Space/电影模板/components/base-icon/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
var _default =
{
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      default: 'zuixinlianzai' },

    fontsize: {
      type: String,
      default: '16px' },

    color: {
      type: String,
      default: '#ffb90f' } },


  methods: {
    _onClick: function _onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),
/* 29 */
/*!**********************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/base-icon/index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ 30);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 30 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!/Users/lixi/Space/电影模板/components/base-icon/index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "iconfont",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url(/static/iconfont/iconfont) format('embedded-opentype'),\n\t\t\n\t\turl('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),\n\t\turl(/static/iconfont/iconfont.woff) format('woff'),\n\t\turl(/static/iconfont/iconfont.ttf) format('truetype'),\n\t\t\n\t\turl(/static/iconfont/iconfont.svg) format('svg')"
    }
  ],
  "iconfont": {
    "fontFamily": "iconfont",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "lineHeight": 1,
    "display": "inline-block",
    "textDecoration": "none",
    "WebkitFontSmoothing": "antialiased"
  },
  "icon-dianshiju1": {
    "content:before": "\"\\e606\""
  },
  "icon-dianying1": {
    "content:before": "\"\\e608\""
  },
  "icon-zongyi": {
    "content:before": "\"\\e631\""
  },
  "icon-xiaoyouxi": {
    "content:before": "\"\\e638\""
  },
  "icon-kanbagua": {
    "content:before": "\"\\e639\""
  },
  "icon-wanyouxi": {
    "content:before": "\"\\e63d\""
  },
  "icon-shouye": {
    "content:before": "\"\\e63e\""
  },
  "icon-dongman": {
    "content:before": "\"\\e680\""
  },
  "icon-yule1": {
    "content:before": "\"\\e681\""
  },
  "icon-next": {
    "content:before": "\"\\e682\""
  },
  "icon-pre": {
    "content:before": "\"\\e683\""
  },
  "icon-ssuo": {
    "content:before": "\"\\e684\""
  },
  "icon-xla": {
    "content:before": "\"\\e685\""
  },
  "icon-add": {
    "content:before": "\"\\e686\""
  },
  "icon-icon": {
    "content:before": "\"\\e600\""
  },
  "icon-iconfuzhi": {
    "content:before": "\"\\e601\""
  },
  "icon-icon22fuzhi": {
    "content:before": "\"\\e603\""
  },
  "icon-xiaoxi": {
    "content:before": "\"\\e604\""
  },
  "icon-xiaoxitixing": {
    "content:before": "\"\\e605\""
  },
  "icon-dianpu": {
    "content:before": "\"\\e607\""
  },
  "icon-saoyisao": {
    "content:before": "\"\\e609\""
  },
  "icon-bangzhuyufankui": {
    "content:before": "\"\\e60d\""
  },
  "icon-shanchu": {
    "content:before": "\"\\e611\""
  },
  "icon-shoucangxihuan": {
    "content:before": "\"\\e612\""
  },
  "icon-shoucang": {
    "content:before": "\"\\e613\""
  },
  "icon-sousuo1": {
    "content:before": "\"\\e614\""
  },
  "icon-fenxiang": {
    "content:before": "\"\\e615\""
  },
  "icon-dingweidizhigpsditu": {
    "content:before": "\"\\e617\""
  },
  "icon-shouji": {
    "content:before": "\"\\e61a\""
  },
  "icon-shubiao": {
    "content:before": "\"\\e61d\""
  },
  "icon-youxiyouxiji": {
    "content:before": "\"\\e61e\""
  },
  "icon-pcduandiannao": {
    "content:before": "\"\\e61f\""
  },
  "icon-luyin": {
    "content:before": "\"\\e621\""
  },
  "icon-fasong": {
    "content:before": "\"\\e624\""
  },
  "icon-shuben": {
    "content:before": "\"\\e625\""
  },
  "icon-mima": {
    "content:before": "\"\\e627\""
  },
  "icon-xiangjisheying": {
    "content:before": "\"\\e62a\""
  },
  "icon-luxiang": {
    "content:before": "\"\\e62c\""
  },
  "icon-tupian": {
    "content:before": "\"\\e62d\""
  },
  "icon-yinle": {
    "content:before": "\"\\e62e\""
  },
  "icon-baitianmoshimingliangmoshi": {
    "content:before": "\"\\e632\""
  },
  "icon-yejianmoshi": {
    "content:before": "\"\\e633\""
  },
  "icon-liaotian": {
    "content:before": "\"\\e637\""
  },
  "icon-dengpaoyejianmoshi": {
    "content:before": "\"\\e641\""
  },
  "icon-gouwudai": {
    "content:before": "\"\\e642\""
  },
  "icon-jiagebiaoqian": {
    "content:before": "\"\\e643\""
  },
  "icon-luyinyuyin": {
    "content:before": "\"\\e644\""
  },
  "icon-xiaoxitongzhi": {
    "content:before": "\"\\e648\""
  },
  "icon-zhifuqianbao": {
    "content:before": "\"\\e64a\""
  },
  "icon-zhuanjiguangpan": {
    "content:before": "\"\\e64b\""
  },
  "icon-zuanshi": {
    "content:before": "\"\\e64c\""
  },
  "icon-shiyanhuaxue": {
    "content:before": "\"\\e653\""
  },
  "icon-weixian": {
    "content:before": "\"\\e654\""
  },
  "icon-xiuxiankafeiyule": {
    "content:before": "\"\\e655\""
  },
  "icon-xuegao": {
    "content:before": "\"\\e656\""
  },
  "icon-yundonglanqiu": {
    "content:before": "\"\\e657\""
  },
  "icon-yundongzuqiu": {
    "content:before": "\"\\e658\""
  },
  "icon-chaping": {
    "content:before": "\"\\e65c\""
  },
  "icon-dianchidianliang": {
    "content:before": "\"\\e65d\""
  },
  "icon-fenxiang1": {
    "content:before": "\"\\e65e\""
  },
  "icon-huizhanghuiyuan": {
    "content:before": "\"\\e65f\""
  },
  "icon-lanya": {
    "content:before": "\"\\e660\""
  },
  "icon-lianjie": {
    "content:before": "\"\\e661\""
  },
  "icon-shangchuan": {
    "content:before": "\"\\e662\""
  },
  "icon-xiazai": {
    "content:before": "\"\\e663\""
  },
  "icon-xinhaowifi": {
    "content:before": "\"\\e664\""
  },
  "icon-bianjituijian": {
    "content:before": "\"\\e6d5\""
  },
  "icon-dianshiju": {
    "content:before": "\"\\e6d6\""
  },
  "icon-dong": {
    "content:before": "\"\\e6d7\""
  },
  "icon-dianying": {
    "content:before": "\"\\e6d8\""
  },
  "icon-guanggao": {
    "content:before": "\"\\e6d9\""
  },
  "icon-chun": {
    "content:before": "\"\\e6da\""
  },
  "icon-fanjutuijian": {
    "content:before": "\"\\e6dc\""
  },
  "icon-guochandonghuatuijian": {
    "content:before": "\"\\e6dd\""
  },
  "icon-shenghuo": {
    "content:before": "\"\\e6de\""
  },
  "icon-shishang": {
    "content:before": "\"\\e6df\""
  },
  "icon-suoyin": {
    "content:before": "\"\\e6e2\""
  },
  "icon-wodezhuifan": {
    "content:before": "\"\\e6e3\""
  },
  "icon-wanjietuijian": {
    "content:before": "\"\\e6e5\""
  },
  "icon-youxi": {
    "content:before": "\"\\e6e6\""
  },
  "icon-zhibo": {
    "content:before": "\"\\e6e7\""
  },
  "icon-yule": {
    "content:before": "\"\\e6e8\""
  },
  "icon-zuixinlianzai": {
    "content:before": "\"\\e6e9\""
  }
}

/***/ }),
/* 31 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 32 */
/*!************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/uni-notice-bar/uni-notice-bar.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-notice-bar.vue?vue&type=style&index=0&lang=css& */ 33);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!/Users/lixi/Space/电影模板/components/uni-notice-bar/uni-notice-bar.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-noticebar": {
    "paddingTop": "12rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "12rpx",
    "paddingLeft": "24rpx",
    "fontSize": "24rpx",
    "lineHeight": 1.5,
    "marginBottom": "20rpx",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "uni-noticebar__close": {
    "color": "#999999",
    "marginRight": "24rpx",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "uni-noticebar__content": {
    "flex": 1,
    "overflow": "hidden"
  },
  "uni-noticebar__content-icon": {
    "display": "inline-block",
    "zIndex": 1,
    "paddingRight": "12rpx"
  },
  "uni-noticebar__content-more": {
    "width": "180rpx",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "center",
    "wordBreak": "keep-all",
    "marginLeft": "10rpx",
    "color": "#999999"
  },
  "uni-noticebar__content-more-text": {
    "fontSize": "24rpx",
    "whiteSpace": "nowrap"
  },
  "uni-noticebar__content-text": {
    "wordBreak": "break-all",
    "lineHeight": 1.5,
    "display": "inline"
  },
  "uni-noticebar__content-inner": {
    "fontSize": "24rpx",
    "display": "inline"
  }
}

/***/ }),
/* 34 */
/*!**************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunlei-video.nvue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunlei_video_nvue_vue_type_template_id_73dac4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=template&id=73dac4c6&scoped=true& */ 35);
/* harmony import */ var _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=script&lang=js& */ 37);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 31);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=73dac4c6&scoped=true&lang=scss& */ 60).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=73dac4c6&scoped=true&lang=scss& */ 60).default)
          }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chunlei_video_nvue_vue_type_template_id_73dac4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chunlei_video_nvue_vue_type_template_id_73dac4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "73dac4c6",
  "5ae8cd17"
  
)

injectStyles.call(component)
component.options.__file = "Users/lixi/Space/电影模板/components/chunlei-video/chunlei-video.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 35 */
/*!*********************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=73dac4c6&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_template_id_73dac4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunlei-video.nvue?vue&type=template&id=73dac4c6&scoped=true& */ 36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_template_id_73dac4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_template_id_73dac4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 36 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=73dac4c6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["video-box"] },
    [
      _c(
        "u-video",
        {
          ref: "chunleiVideo",
          staticClass: ["video"],
          attrs: {
            controls: false,
            showCenterPlayBtn: false,
            showFullscreenBtn: false,
            showProgress: false,
            objectFit: _vm.objectFit,
            src: _vm.src,
            loop: _vm.loop,
            enableProgressGesture: false,
            id: "chunleiVideo"
          },
          on: {
            fullscreenchange: _vm.changeScreen,
            timeupdate: _vm.timeupdate,
            ended: _vm.ended,
            waiting: _vm.waiting,
            play: _vm.playing
          }
        },
        [
          _c(
            "u-scalable",
            {
              staticStyle: {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0"
              }
            },
            [
              !_vm.fullScreen
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["video-view"],
                      style: { width: "750rpx", height: "200px" }
                    },
                    [
                      _c("div", {
                        staticClass: ["move-view"],
                        style: { height: "200px", width: "750rpx" },
                        on: {
                          touchend: _vm.videoTouchEnd,
                          touchmove: _vm.videoTouchMove,
                          touchstart: _vm.videoTouchStart
                        }
                      }),
                      !_vm.play
                        ? _c("div", { staticClass: ["stop"] }, [
                            _c("u-text", { staticClass: ["ios-title"] }, [
                              _vm._v("已暂停")
                            ])
                          ])
                        : _vm._e(),
                      _vm.poster != "" && _vm.playFirst
                        ? _c("u-image", {
                            staticClass: ["video-view"],
                            style: { width: "750rpx", height: "200px" },
                            attrs: { src: _vm.poster }
                          })
                        : _vm._e(),
                      !_vm.rateView
                        ? _c(
                            "div",
                            {
                              staticClass: ["rate-view"],
                              on: { click: function($event) {} }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["ios-title"],
                                  on: {
                                    click: function($event) {
                                      _vm.rateView = true
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.rate) + "x")]
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm.showControls && _vm.isBack
                        ? _c(
                            "div",
                            {
                              staticClass: ["controls-view-top"],
                              on: { click: function($event) {} }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: ["btnBox"],
                                  on: { click: _vm.back }
                                },
                                [
                                  _c("u-text", { staticClass: ["ios-icon"] }, [
                                    _vm._v("")
                                  ])
                                ]
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm.showControls
                        ? _c(
                            "div",
                            {
                              staticClass: ["controls-view"],
                              on: { click: function($event) {} }
                            },
                            [
                              _vm.play
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.videoPlay }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { staticClass: ["ios-icon"] },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              !_vm.play
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.videoPlay }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { staticClass: ["ios-icon"] },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _c("u-text", { staticClass: ["sm-title"] }, [
                                _vm._v(
                                  _vm._s(_vm.currentDuration) +
                                    "/" +
                                    _vm._s(_vm.lastDuration)
                                )
                              ]),
                              _c("chunLei-slider", {
                                style: { width: _vm.sliderWidth + "px" },
                                attrs: {
                                  max: _vm.duration,
                                  value: _vm.current,
                                  screenLeft: _vm.duration >= 3600 ? 150 : 120,
                                  width: _vm.sliderWidth,
                                  backgroundColor: _vm.color,
                                  blockColor: _vm.color
                                },
                                on: { change: _vm.changeCurrent }
                              }),
                              _vm.showFullscreenBtn
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.tapFullScreen }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { staticClass: ["ios-icon"] },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm.touchType == "current"
                        ? _c("div", { staticClass: ["current-view", "flex"] }, [
                            _c("div", { staticClass: ["current-top"] }, [
                              _c("u-text", { staticClass: ["ios-title"] }, [
                                _vm._v(
                                  _vm._s(_vm.touchCurrentDuration) +
                                    "/" +
                                    _vm._s(_vm.lastDuration)
                                )
                              ])
                            ]),
                            _c("div", { staticClass: ["current-bottom"] }, [
                              _c("div", {
                                staticClass: ["current-progress"],
                                style: {
                                  width:
                                    (_vm.touchCurrent / _vm.duration) * 260 +
                                    "rpx"
                                }
                              })
                            ])
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              _vm.rateView && !_vm.fullScreen
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["rate", "flex"],
                      on: { click: function($event) {} }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: ["rate", "flex"],
                          style: { paddingTop: "40px" },
                          on: {
                            click: function($event) {
                              _vm.rateView = false
                            }
                          }
                        },
                        [
                          _c("u-text", { staticClass: ["ios-title"] }, [
                            _vm._v("倍速播放")
                          ]),
                          _c("div", { staticClass: ["rate-list", "flex"] }, [
                            _c(
                              "u-text",
                              {
                                staticClass: ["ios-title", "marginRight"],
                                class: 0.5 == _vm.rate ? "solid-bottom" : "",
                                style: {
                                  color: 0.5 == _vm.rate ? _vm.color : "#fff",
                                  borderBottomColor:
                                    0.5 == _vm.rate ? _vm.color : "#fff"
                                },
                                on: {
                                  click: function(args) {
                                    return _vm.tapRate(args, 0.5)
                                  }
                                }
                              },
                              [_vm._v("0.5x")]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["ios-title", "marginRight"],
                                class: 0.8 == _vm.rate ? "solid-bottom" : "",
                                style: {
                                  color: 0.8 == _vm.rate ? _vm.color : "#fff",
                                  borderBottomColor:
                                    0.8 == _vm.rate ? _vm.color : "#fff"
                                },
                                on: {
                                  click: function(args) {
                                    return _vm.tapRate(args, 0.8)
                                  }
                                }
                              },
                              [_vm._v("0.8x")]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["ios-title", "marginRight"],
                                class: 1.0 == _vm.rate ? "solid-bottom" : "",
                                style: {
                                  color: 1.0 == _vm.rate ? _vm.color : "#fff",
                                  borderBottomColor:
                                    1.0 == _vm.rate ? _vm.color : "#fff"
                                },
                                on: {
                                  click: function(args) {
                                    return _vm.tapRate(args, 1.0)
                                  }
                                }
                              },
                              [_vm._v("1.0x")]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["ios-title", "marginRight"],
                                class: 1.25 == _vm.rate ? "solid-bottom" : "",
                                style: {
                                  color: 1.25 == _vm.rate ? _vm.color : "#fff",
                                  borderBottomColor:
                                    1.25 == _vm.rate ? _vm.color : "#fff"
                                },
                                on: {
                                  click: function(args) {
                                    return _vm.tapRate(args, 1.25)
                                  }
                                }
                              },
                              [_vm._v("1.25x")]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["ios-title", "marginRight"],
                                class: 1.5 == _vm.rate ? "solid-bottom" : "",
                                style: {
                                  color: 1.5 == _vm.rate ? _vm.color : "#fff",
                                  borderBottomColor:
                                    1.5 == _vm.rate ? _vm.color : "#fff"
                                },
                                on: {
                                  click: function(args) {
                                    return _vm.tapRate(args, 1.5)
                                  }
                                }
                              },
                              [_vm._v("1.5x")]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["video-view"],
                      style: {
                        width: _vm.fullControlsWidth + "px",
                        height: _vm.fullControlsHeigt + "px"
                      }
                    },
                    [
                      _vm.danmuView
                        ? _c(
                            "div",
                            {
                              staticClass: ["danmu-view"],
                              style: { width: _vm.fullControlsWidth + "px" }
                            },
                            [
                              _c("chunLei-danmu", {
                                ref: "danmu",
                                attrs: {
                                  danmuList: _vm.danmuList,
                                  width: _vm.fullControlsWidth,
                                  platform: _vm.platform,
                                  current: _vm.current
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _c("div", {
                        staticClass: ["move-view"],
                        style: {
                          width: _vm.fullControlsWidth + "px",
                          height: _vm.fullControlsHeigt + "px"
                        },
                        on: {
                          touchend: _vm.videoTouchEnd,
                          touchmove: _vm.videoTouchMove,
                          touchstart: _vm.videoTouchStart
                        }
                      }),
                      !_vm.play
                        ? _c("div", { staticClass: ["stop"] }, [
                            _c("u-text", { class: _vm.platform + "-title" }, [
                              _vm._v("已暂停")
                            ])
                          ])
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen && _vm.showControls && !_vm.lock
                ? _c(
                    "cover-view",
                    {
                      ref: "controlsTop",
                      staticClass: ["controls-top"],
                      style: { width: _vm.fullControlsWidth + "px" },
                      on: { click: function($event) {} }
                    },
                    [
                      _c("div", { staticClass: ["top-left"] }, [
                        _c(
                          "div",
                          {
                            staticClass: ["btnBox"],
                            on: { click: _vm.tapFullScreen }
                          },
                          [
                            _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          ]
                        ),
                        _c("u-text", { class: _vm.platform + "-title" }, [
                          _vm._v(_vm._s(_vm.title))
                        ])
                      ]),
                      _c("div", { staticClass: ["top-right"] }, [
                        _vm.danmuView && _vm.danmuList.length != 0
                          ? _c(
                              "div",
                              {
                                staticClass: ["btnBox"],
                                on: {
                                  click: function($event) {
                                    _vm.danmuView = false
                                  }
                                }
                              },
                              [
                                _c(
                                  "u-text",
                                  {
                                    class: _vm.platform + "-icon",
                                    style: { color: _vm.color }
                                  },
                                  [_vm._v("")]
                                )
                              ]
                            )
                          : _vm._e(),
                        !_vm.danmuView && _vm.danmuList.length != 0
                          ? _c(
                              "div",
                              {
                                staticClass: ["btnBox"],
                                on: {
                                  click: function($event) {
                                    _vm.danmuView = true
                                  }
                                }
                              },
                              [
                                _c(
                                  "u-text",
                                  {
                                    class: _vm.platform + "-icon",
                                    staticStyle: { color: "#FFF" }
                                  },
                                  [_vm._v("")]
                                )
                              ]
                            )
                          : _vm._e(),
                        _c(
                          "div",
                          {
                            staticClass: ["btnBox", "marginRight"],
                            on: { click: _vm.clickMoreView }
                          },
                          [
                            _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          ]
                        ),
                        _c("div", { staticClass: ["power-view"] }, [
                          _c("div", { staticClass: ["power-box"] }, [
                            _c("div", { staticClass: ["power-header"] }),
                            _c("div", { staticClass: ["power-body"] }, [
                              _c("div", {
                                staticClass: ["power-level"],
                                style: {
                                  width: 16 * _vm.level + "px",
                                  backgroundColor: "#fff"
                                }
                              })
                            ])
                          ]),
                          _c("u-text", { class: _vm.platform + "-sm-title" }, [
                            _vm._v(_vm._s(_vm.nowTime))
                          ])
                        ])
                      ])
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen &&
              (_vm.rateView || _vm.srcView || _vm.moreView || _vm.episodeView)
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["set-view"],
                      style: {
                        width: _vm.fullControlsWidth + "px",
                        height: _vm.fullControlsHeigt + "px"
                      }
                    },
                    [
                      _vm.rateView
                        ? _c(
                            "div",
                            {
                              staticClass: ["rate-set"],
                              style: {
                                width: _vm.fullControlsWidth + "px",
                                height: _vm.fullControlsHeigt + "px"
                              },
                              on: { click: _vm.clickRateView }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  class: _vm.platform + "-big-title",
                                  style: { marginBottom: "40px" }
                                },
                                [_vm._v("播放速度")]
                              ),
                              _c("div", { staticClass: ["set-bottom"] }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: ["setBox"],
                                    class:
                                      0.5 == _vm.rate ? "solid-bottom" : "",
                                    style: {
                                      borderBottomColor:
                                        0.5 == _vm.rate ? _vm.color : "#fff"
                                    },
                                    on: {
                                      click: function(args) {
                                        return _vm.tapRate(args, 0.5)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        class: _vm.platform + "-big-title",
                                        style: {
                                          color:
                                            0.5 == _vm.rate ? _vm.color : "#fff"
                                        }
                                      },
                                      [_vm._v("0.5x")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: ["setBox"],
                                    class:
                                      0.8 == _vm.rate ? "solid-bottom" : "",
                                    style: {
                                      borderBottomColor:
                                        0.8 == _vm.rate ? _vm.color : "#fff"
                                    },
                                    on: {
                                      click: function(args) {
                                        return _vm.tapRate(args, 0.8)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        class: _vm.platform + "-big-title",
                                        style: {
                                          color:
                                            0.8 == _vm.rate ? _vm.color : "#fff"
                                        }
                                      },
                                      [_vm._v("0.8x")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: ["setBox"],
                                    class:
                                      1.0 == _vm.rate ? "solid-bottom" : "",
                                    style: {
                                      borderBottomColor:
                                        1.0 == _vm.rate ? _vm.color : "#fff"
                                    },
                                    on: {
                                      click: function(args) {
                                        return _vm.tapRate(args, 1)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        class: _vm.platform + "-big-title",
                                        style: {
                                          color:
                                            1.0 == _vm.rate ? _vm.color : "#fff"
                                        }
                                      },
                                      [_vm._v("1.0x")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: ["setBox"],
                                    class:
                                      1.25 == _vm.rate ? "solid-bottom" : "",
                                    style: {
                                      borderBottomColor:
                                        1.25 == _vm.rate ? _vm.color : "#fff"
                                    },
                                    on: {
                                      click: function(args) {
                                        return _vm.tapRate(args, 1.25)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        class: _vm.platform + "-big-title",
                                        style: {
                                          color:
                                            1.25 == _vm.rate
                                              ? _vm.color
                                              : "#fff"
                                        }
                                      },
                                      [_vm._v("1.25x")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: ["setBox"],
                                    class:
                                      1.5 == _vm.rate ? "solid-bottom" : "",
                                    style: {
                                      borderBottomColor:
                                        1.5 == _vm.rate ? _vm.color : "#fff"
                                    },
                                    on: {
                                      click: function(args) {
                                        return _vm.tapRate(args, 1.5)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        class: _vm.platform + "-big-title",
                                        style: {
                                          color:
                                            1.5 == _vm.rate ? _vm.color : "#fff"
                                        }
                                      },
                                      [_vm._v("1.5x")]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm.srcView
                        ? _c(
                            "div",
                            {
                              staticClass: ["rate-set"],
                              style: {
                                width: _vm.fullControlsWidth + "px",
                                height: _vm.fullControlsHeigt + "px"
                              },
                              on: { click: _vm.clickSrcView }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  class: _vm.platform + "-big-title",
                                  style: { marginBottom: "40px" }
                                },
                                [_vm._v(_vm._s(_vm.srcTitle))]
                              ),
                              _c(
                                "div",
                                { staticClass: ["set-bottom"] },
                                _vm._l(_vm.srcList, function(item, index) {
                                  return _c(
                                    "div",
                                    {
                                      key: index,
                                      staticClass: ["setBox"],
                                      class:
                                        _vm.srcTitle == item.title
                                          ? "solid-bottom"
                                          : "",
                                      style: {
                                        borderBottomColor:
                                          _vm.srcTitle == item.title
                                            ? _vm.color
                                            : "#fff"
                                      },
                                      on: {
                                        click: function(args) {
                                          return _vm.tapSrc(args, item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          class: _vm.platform + "-big-title",
                                          style: {
                                            color:
                                              _vm.srcTitle == item.title
                                                ? _vm.color
                                                : "#fff"
                                          }
                                        },
                                        [_vm._v(_vm._s(item.title))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm.moreView
                        ? _c(
                            "div",
                            {
                              staticClass: ["more-set"],
                              style: {
                                width: _vm.fullControlsWidth + "px",
                                height: _vm.fullControlsHeigt + "px"
                              },
                              on: { click: _vm.clickMoreView }
                            },
                            [
                              _c("div", { staticClass: ["more-row"] }, [
                                !_vm.loop
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: ["more-box"],
                                        on: { click: _vm.clickLoop }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-big-icon",
                                            staticStyle: { color: "#FFF" }
                                          },
                                          [_vm._v("")]
                                        ),
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-title",
                                            staticStyle: { color: "#FFF" }
                                          },
                                          [_vm._v("循环播放")]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm.loop
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: ["more-box"],
                                        on: { click: _vm.clickLoop }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-big-icon",
                                            style: { color: _vm.color }
                                          },
                                          [_vm._v("")]
                                        ),
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-title",
                                            style: { color: _vm.color }
                                          },
                                          [_vm._v("取消循环")]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                !_vm.full
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: ["more-box"],
                                        on: { click: _vm.clickFull }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-big-icon",
                                            staticStyle: { color: "#FFF" }
                                          },
                                          [_vm._v("")]
                                        ),
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-title",
                                            staticStyle: { color: "#FFF" }
                                          },
                                          [_vm._v("撑满全屏")]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm.full
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: ["more-box"],
                                        on: { click: _vm.clickFull }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-big-icon",
                                            style: { color: _vm.color }
                                          },
                                          [_vm._v("")]
                                        ),
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-title",
                                            style: { color: _vm.color }
                                          },
                                          [_vm._v("恢复不撑满")]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                !_vm.audioFlag && _vm.audio != ""
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: ["more-box"],
                                        on: { click: _vm.clickAudio }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-big-icon",
                                            staticStyle: { color: "#FFF" }
                                          },
                                          [_vm._v("")]
                                        ),
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-title",
                                            staticStyle: { color: "#FFF" }
                                          },
                                          [_vm._v("后台音频播放")]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm.audioFlag && _vm.audio != ""
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: ["more-box"],
                                        on: {
                                          click: function($event) {
                                            _vm.audioFlag = false
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-big-icon",
                                            style: { color: _vm.color }
                                          },
                                          [_vm._v("")]
                                        ),
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-title",
                                            style: { color: _vm.color }
                                          },
                                          [_vm._v("后台音频播放")]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                !_vm.download && _vm.downloadBtn
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: ["more-box"],
                                        on: { click: _vm.clickDownload }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-big-icon",
                                            staticStyle: { color: "#FFF" }
                                          },
                                          [_vm._v("")]
                                        ),
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-title",
                                            staticStyle: { color: "#FFF" }
                                          },
                                          [_vm._v("下载")]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm.download && _vm.downloadBtn
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: ["more-box"],
                                        on: { click: _vm.clickDownload }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-big-icon",
                                            style: { color: _vm.color }
                                          },
                                          [_vm._v("")]
                                        ),
                                        _c(
                                          "u-text",
                                          {
                                            class: _vm.platform + "-title",
                                            style: { color: _vm.color }
                                          },
                                          [_vm._v("下载中")]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _c("div", { staticClass: ["more-tap"] }),
                              _c(
                                "div",
                                { staticClass: ["more-row"] },
                                [
                                  _c("div", { staticClass: ["more-box"] }, [
                                    _c(
                                      "u-text",
                                      { class: _vm.platform + "-title" },
                                      [_vm._v("播放速度")]
                                    )
                                  ]),
                                  _c(
                                    "scroll-view",
                                    {
                                      staticClass: ["scroll-view"],
                                      style: {
                                        width:
                                          _vm.fullControlsWidth - 320 + "px"
                                      },
                                      attrs: {
                                        scrollX: "true",
                                        scrollLeft: 1.5 == _vm.rate ? 200 : 0
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: ["more-box"],
                                          on: {
                                            click: function(args) {
                                              return _vm.tapRate(args, 0.5)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "`${platform}-title`"
                                              ],
                                              class:
                                                0.5 == _vm.rate
                                                  ? "solid-bottom"
                                                  : "",
                                              style: {
                                                color:
                                                  0.5 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff",
                                                borderBottomColor:
                                                  0.5 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v("0.5x")]
                                          )
                                        ]
                                      ),
                                      _c(
                                        "div",
                                        {
                                          staticClass: ["more-box"],
                                          on: {
                                            click: function(args) {
                                              return _vm.tapRate(args, 0.8)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "`${platform}-title`"
                                              ],
                                              class:
                                                0.8 == _vm.rate
                                                  ? "solid-bottom"
                                                  : "",
                                              style: {
                                                color:
                                                  0.8 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff",
                                                borderBottomColor:
                                                  0.8 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v("0.8x")]
                                          )
                                        ]
                                      ),
                                      _c(
                                        "div",
                                        {
                                          staticClass: ["more-box"],
                                          on: {
                                            click: function(args) {
                                              return _vm.tapRate(args, 1)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "`${platform}-title`"
                                              ],
                                              class:
                                                1.0 == _vm.rate
                                                  ? "solid-bottom"
                                                  : "",
                                              style: {
                                                color:
                                                  1.0 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff",
                                                borderBottomColor:
                                                  1.0 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v("1.0x")]
                                          )
                                        ]
                                      ),
                                      _c(
                                        "div",
                                        {
                                          staticClass: ["more-box"],
                                          on: {
                                            click: function(args) {
                                              return _vm.tapRate(args, 1.25)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "`${platform}-title`"
                                              ],
                                              class:
                                                1.25 == _vm.rate
                                                  ? "solid-bottom"
                                                  : "",
                                              style: {
                                                color:
                                                  1.25 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff",
                                                borderBottomColor:
                                                  1.25 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v("1.25x")]
                                          )
                                        ]
                                      ),
                                      _c(
                                        "div",
                                        {
                                          staticClass: ["more-box"],
                                          on: {
                                            click: function(args) {
                                              return _vm.tapRate(args, 1.5)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "`${platform}-title`"
                                              ],
                                              class:
                                                1.5 == _vm.rate
                                                  ? "solid-bottom"
                                                  : "",
                                              style: {
                                                color:
                                                  1.5 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff",
                                                borderBottomColor:
                                                  1.5 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v("1.5x")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm.episodeView
                        ? _c(
                            "div",
                            {
                              staticClass: ["episode-set"],
                              style: {
                                width: _vm.fullControlsWidth + "px",
                                height: _vm.fullControlsHeigt + "px"
                              },
                              on: { click: _vm.clickEpisodeView }
                            },
                            [
                              _c(
                                "scroll-view",
                                {
                                  staticClass: ["scroll-view"],
                                  style: {
                                    width: _vm.fullControlsWidth - 200 + "px",
                                    height: _vm.fullControlsHeigt - 40 + "px"
                                  },
                                  attrs: { scrollX: true }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: ["episode-scroll"],
                                      style: {
                                        height:
                                          _vm.fullControlsHeigt - 40 + "px",
                                        width: (75 * _vm.episode) / 4 + "px"
                                      }
                                    },
                                    _vm._l(_vm.episode, function(count) {
                                      return _c(
                                        "div",
                                        {
                                          key: count,
                                          staticClass: ["epiBox"],
                                          class:
                                            count == _vm.index
                                              ? "solid-bottom"
                                              : "",
                                          style: {
                                            borderBottomColor:
                                              count == _vm.index
                                                ? _vm.color
                                                : "#fff"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.clickEpisode(count)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-title",
                                              style: {
                                                color:
                                                  count == _vm.index
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v(_vm._s(count))]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen && _vm.touchType == "current"
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["fullCurrent-current"],
                      style: { left: _vm.fullControlsWidth / 2 - 75 + "px" }
                    },
                    [
                      _c("div", { staticClass: ["fullCurrent-top"] }, [
                        _c("u-text", { class: _vm.platform + "-title" }, [
                          _vm._v(
                            _vm._s(_vm.touchCurrentDuration) +
                              "/" +
                              _vm._s(_vm.lastDuration)
                          )
                        ])
                      ]),
                      _c("div", { staticClass: ["fullCurrent-bottom"] }, [
                        _c("div", {
                          staticClass: ["current-progress"],
                          style: {
                            width:
                              (_vm.touchCurrent / _vm.duration) * 110 + "px"
                          }
                        })
                      ])
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen &&
              _vm.touchType == "volume" &&
              _vm.platform == "android"
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["fullCurrent-view"],
                      style: { left: _vm.fullControlsWidth / 2 - 75 + "px" }
                    },
                    [
                      _c("div", { staticClass: ["marginRight"] }, [
                        _vm.touchVolume == 0
                          ? _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          : _vm._e(),
                        _vm.touchVolume > 0 && _vm.touchVolume < 0.33
                          ? _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          : _vm._e(),
                        _vm.touchVolume >= 0.33 && _vm.touchVolume < 0.66
                          ? _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          : _vm._e(),
                        _vm.touchVolume >= 0.66 && _vm.touchVolume <= 1
                          ? _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          : _vm._e()
                      ]),
                      _c("div", { staticClass: ["fullCurrent-volume"] }, [
                        _c("div", { staticClass: ["fullCurrent-volume-left"] }),
                        _c("div", {
                          staticClass: ["fullCurrent-volume-right"]
                        }),
                        _c("div", {
                          staticClass: ["fullCurrent-progress"],
                          style: { width: 150 - _vm.touchVolume * 150 + "px" }
                        })
                      ])
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen &&
              _vm.touchType == "bright" &&
              _vm.platform == "android"
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["fullCurrent-view"],
                      style: { left: _vm.fullControlsWidth / 2 - 75 + "px" }
                    },
                    [
                      _c("chunLei-moon", {
                        attrs: { percentage: _vm.touchBright }
                      }),
                      _c("div", { staticClass: ["fullCurrent-bright"] }, [
                        _c("div", { staticClass: ["fullCurrent-bright-left"] }),
                        _c("div", {
                          staticClass: ["fullCurrent-bright-right"]
                        }),
                        _c("div", {
                          staticClass: ["fullCurrent-progress"],
                          style: { width: 150 - _vm.touchBright * 150 + "px" }
                        })
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm.fullScreen && _vm.showControls && !_vm.lock
                ? _c(
                    "cover-view",
                    {
                      ref: "controlsBtm",
                      staticClass: ["fullControls-view"],
                      style: { width: _vm.fullControlsWidth + "px" },
                      on: { click: function($event) {} }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: ["fullControls-top"],
                          style: { width: _vm.fullControlsWidth + "px" }
                        },
                        [
                          _c("u-text", { class: _vm.platform + "-title" }, [
                            _vm._v(_vm._s(_vm.currentDuration))
                          ]),
                          _c("u-text", { class: _vm.platform + "-title" }, [
                            _vm._v(_vm._s(_vm.lastDuration))
                          ])
                        ]
                      ),
                      _c(
                        "div",
                        { staticClass: ["fullControls-center"] },
                        [
                          _c("chunLei-slider", {
                            style: { width: _vm.fullControlsWidth - 40 + "px" },
                            attrs: {
                              max: _vm.duration,
                              iosDirection:
                                _vm.platform != "ios" ? 1 : -_vm.direction / 90,
                              value: _vm.current,
                              screenLeft: 40,
                              width: _vm.fullControlsWidth - 40,
                              ratio: _vm.platform == "ios" ? 1 : _vm.ratio,
                              direction:
                                _vm.platform != "ios" ? "screenX" : "screenY",
                              backgroundColor: _vm.color,
                              blockColor: _vm.color
                            },
                            on: { change: _vm.changeCurrent }
                          })
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: ["fullControls-bottom"],
                          style: { width: _vm.fullControlsWidth + "px" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: ["fullControls-bottom-left"] },
                            [
                              _vm.play
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.videoPlay }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { class: _vm.platform + "-icon" },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              !_vm.play
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.videoPlay }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { class: _vm.platform + "-icon" },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              !(_vm.episode == 0 || _vm.episode == _vm.index)
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.playNext }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { class: _vm.platform + "-icon" },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _c(
                            "div",
                            { staticClass: ["fullControls-bottom-right"] },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: ["marginRight"],
                                  on: { click: _vm.clickRateView }
                                },
                                [
                                  _c(
                                    "u-text",
                                    { class: _vm.platform + "-title" },
                                    [_vm._v(_vm._s(_vm.rate) + "x")]
                                  )
                                ]
                              ),
                              _vm.srcTitle != ""
                                ? _c("div", { staticClass: ["marginRight"] })
                                : _vm._e(),
                              _vm.srcTitle != ""
                                ? _c(
                                    "div",
                                    {
                                      class: _vm.platform + "-title-box",
                                      on: { click: _vm.clickSrcView }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { class: _vm.platform + "-srcTitle" },
                                        [_vm._v(_vm._s(_vm.srcTitle))]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm.episode != 0
                                ? _c("div", { staticClass: ["marginRight"] })
                                : _vm._e(),
                              _vm.episode != 0
                                ? _c(
                                    "u-text",
                                    {
                                      class: _vm.platform + "-title",
                                      staticStyle: { marginLeft: "20rpx" },
                                      on: { click: _vm.clickEpisodeView }
                                    },
                                    [_vm._v("选集")]
                                  )
                                : _vm._e()
                            ]
                          )
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen && _vm.showControls
                ? _c(
                    "cover-view",
                    {
                      class: _vm.platform + "-lock",
                      style: { top: _vm.fullControlsHeigt / 2 - 30 + "px" },
                      on: { click: _vm.clickLock }
                    },
                    [
                      !_vm.lock
                        ? _c("u-text", { class: _vm.platform + "-icon" }, [
                            _vm._v("")
                          ])
                        : _vm._e(),
                      _vm.lock
                        ? _c("u-text", { class: _vm.platform + "-icon" }, [
                            _vm._v("")
                          ])
                        : _vm._e()
                    ]
                  )
                : _vm._e()
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



/***/ }),
/* 37 */
/*!***************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunlei-video.nvue?vue&type=script&lang=js& */ 38);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, plus) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 15));



















































































































































































































































var _chunLeiSlider = _interopRequireDefault(__webpack_require__(/*! ./chunLei-slider/chunLei-slider.nvue */ 39));

var _chunLeiDanmu = _interopRequireDefault(__webpack_require__(/*! ./chunLei-danmu/chunLei-danmu.nvue */ 46));

var _chunLeiMoon = _interopRequireDefault(__webpack_require__(/*! ./chunLei-moon/chunLei-moon.nvue */ 53));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}


var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');var _default2 =


{
  components: {
    chunLeiSlider: _chunLeiSlider.default,
    chunLeiMoon: _chunLeiMoon.default,

    chunLeiDanmu: _chunLeiDanmu.default },


  props: {
    srcList: { //要播放视频的资源地址
      type: [Array, String],
      default: '' },

    title: { //视频标题
      type: String,
      default: '' },

    gDuration: { //大概总时长
      type: Number,
      default: 0 },

    episode: { //集数
      type: Number,
      default: 0 },

    currentSen: { //进度条灵敏度
      type: Number,
      default: 4 },

    index: { //当前集数
      type: Number,
      default: 1 },

    danmuList: { //弹幕
      type: Array,
      default: function _default() {return [];} },

    initialTime: { //指定视频初始播放位置，单位为秒（s）。
      type: Number,
      default: 0 },

    color: { //主题颜色
      type: String,
      default: '#FF6022' },

    downloadBtn: { //下载按钮
      type: Boolean,
      default: false },

    download: { //下载状态
      type: Boolean,
      default: false },

    audio: { //音频
      type: String,
      default: '' },

    orientation: { //全屏下屏幕旋转
      type: Boolean,
      default: false },

    autoplay: { //自动播放
      type: Boolean,
      default: false },

    showFullscreenBtn: { //是否显示全屏按钮	
      type: Boolean,
      default: true },

    poster: { //视频封面的图片
      type: String,
      default: '' },

    isBack: { //小屏返回
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      src: '',
      srcTitle: '', //高清标签
      duration: 0, //精确总时长
      controls: false,
      videoCtx: '', //视频上下文
      current: 0, //video进度
      play: false, //播放状态
      loop: false, //循环
      fullScreen: false, //全屏状态
      direction: -90, //全屏方向
      objectFit: 'contain',
      fullControlsWidth: '', //全屏宽
      fullControlsHeigt: 0, //全屏高
      showControls: true, //显示控制
      oldValue: {}, //触摸开始 进度，音量，亮度
      nowTime: '', //当前时间
      lock: false, //锁屏
      oldTouces: {},
      touchType: null, //滑动类型
      platform: '', //系统
      rate: '1.0',
      rateView: false, //倍速
      srcView: false, //切换
      moreView: false, //更多
      danmuView: true, //弹幕
      episodeView: false, //选集
      full: false, //撑满全屏
      playFirst: true, //第一次播放
      rateList: ['0.5', '0.8', '1.0', '1.25', '1.5'], //倍数
      dblCount: 0, //双击计数
      touchCurrent: 0,
      touchBright: 0,
      touchVolume: 0,
      ratio: 1, //滚动条比例系数
      level: 1, //电量

      audioFlag: false, //后台音频
      innerAudioContext: null //音频上下文
    };
  },
  beforeCreate: function beforeCreate() {

    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "texticons",
      'src': "url('../../static/chunlei-video/text-icon.ttf')" });


  },
  created: function created() {var _this = this;
    this.fullControlsWidth = uni.getSystemInfoSync().screenHeight;
    this.fullControlsHeigt = uni.getSystemInfoSync().screenWidth;
    this.ratio = this.fullControlsWidth / this.fullControlsHeigt;

    uni.getSystemInfo({
      success: function success(e) {
        _this.platform = e.platform;
        _this.changDirection();
      } });


  },
  mounted: function () {var _mounted = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              this.getLevel();
              this.videoCtx = uni.createVideoContext("chunleiVideo", this);case 2:case "end":return _context.stop();}}}, _callee, this);}));function mounted() {return _mounted.apply(this, arguments);}return mounted;}(),

  methods: {
    back: function back() {
      uni.navigateBack({
        delta: 1 });

    },
    changSrc: function () {var _changSrc = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  this.promise(100));case 2:
                this.playFirst = false;
                this.videoCtx.play();
                this.play = true;if (!(

                this.platform == 'ios')) {_context2.next = 8;break;}_context2.next = 8;return this.promise(1500);case 8:
                this.videoCtx.seek(this.initialTime);

                this.videoCtx.playbackRate(this.rate * 1);
                if (typeof this.$refs.danmu != 'undefined') this.$refs.danmu.cleanDanmu();case 11:case "end":return _context2.stop();}}}, _callee2, this);}));function changSrc() {return _changSrc.apply(this, arguments);}return changSrc;}(),

    changDirection: function changDirection() {var _this2 = this;

      if (this.orientation) {
        plus.orientation.watchOrientation(function (o) {
          if (_this2.platform == 'android') {
            if (o.gamma > 40) {
              _this2.direction = 90;
            } else if (o.gamma < -40) {
              _this2.direction = -90;
            }
          } else {

            if (o.alpha > 40) {
              _this2.direction = -90;
            } else if (o.alpha < -40) {
              _this2.direction = 90;
            }
          }
        }, function () {}, { frequency: 1000 });
      }

    },
    pageShow: function () {var _pageShow = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                //显示暂停
                if (this.audio != '') this.innerAudioContext.pause();_context3.next = 3;return (
                  this.promise());case 3:if (!
                this.play) {_context3.next = 8;break;}if (!(
                this.platform == 'ios')) {_context3.next = 7;break;}_context3.next = 7;return this.promise(1000);case 7:

                this.videoCtx.seek(this.current);case 8:case "end":return _context3.stop();}}}, _callee3, this);}));function pageShow() {return _pageShow.apply(this, arguments);}return pageShow;}(),


    pageHide: function () {var _pageHide = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var _this3 = this;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                this.videoCtx.exitFullScreen();
                this.videoCtx.pause();_context4.next = 4;return (
                  this.promise());case 4:
                //显示播放
                if (this.audio != '' && this.play && this.audioFlag) {
                  this.innerAudioContext.seek(this.current);
                  this.innerAudioContext.onTimeUpdate(function () {
                    _this3.current = _this3.innerAudioContext.currentTime;
                  });
                  this.innerAudioContext.play();
                }case 5:case "end":return _context4.stop();}}}, _callee4, this);}));function pageHide() {return _pageHide.apply(this, arguments);}return pageHide;}(),

    promise: function promise() {var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, time);
      });
      return promise;
    },
    timeupdate: function timeupdate(event) {

      this.duration = event.detail.duration;

      this.current = event.detail.currentTime;

    },
    ended: function ended() {
      if (!this.loop) {
        //下一集
        if (this.episode != 0 && this.index < this.episode) {
          this.playNext();
        } else {
          this.play = false;
        }
      }

    },
    waiting: function waiting() {

    },
    playing: function playing() {

    },
    //拖动滑块
    changeCurrent: function changeCurrent(e) {
      this.current = e.detail.value;
      this.videoCtx.seek(this.current);
    },
    seek: function () {var _seek = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(time) {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:

                this.current = time;
                this.videoCtx.seek(this.current);case 2:case "end":return _context5.stop();}}}, _callee5, this);}));function seek(_x) {return _seek.apply(this, arguments);}return seek;}(),

    //获取视频当前进度
    getCurrent: function getCurrent() {
      return Math.floor(this.current);
    },
    clickFull: function clickFull(e) {
      e.stopPropagation();
      if (this.full) {
        this.objectFit = 'contain';
      } else {
        this.objectFit = 'fill';
      }
      this.full = !this.full;
      this.clickMoreView();
    },
    clickDownload: function clickDownload(e) {
      e.stopPropagation();
      if (this.download) {
        uni.showToast({ title: '暂停下载', icon: 'none' });
      } else {
        uni.showToast({ title: '开始下载', icon: 'none' });
      }
      var event = {
        idx: this.index,
        src: this.src };

      this.$emit('clickDownload', event);
      this.clickMoreView();
    },
    clickLoop: function clickLoop(e) {
      e.stopPropagation();
      this.loop = !this.loop;
      this.clickMoreView();
    },
    //倍速播放
    tapRate: function tapRate(e, rate) {
      e.stopPropagation();
      this.videoCtx.playbackRate(rate * 1);
      this.rate = rate;
      if (this.fullScreen) {
        this.clickRateView();
      } else {
        this.rateView = !this.rateView;
      }
    },
    //切换高清
    tapSrc: function () {var _tapSrc = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(e, item) {var current;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                e.stopPropagation();
                current = this.current;if (!(
                this.src == item.src)) {_context6.next = 5;break;}_context6.next = 17;break;case 5:


                this.src = item.src;
                this.srcTitle = item.title;_context6.next = 9;return (
                  this.promise());case 9:
                this.videoCtx = uni.createVideoContext("chunleiVideo", this);

                // await this.promise()
                this.play = true;
                this.videoCtx.play();if (!(
                this.platform == 'ios')) {_context6.next = 15;break;}_context6.next = 15;return this.promise(1000);case 15:
                this.videoCtx.seek(this.current);
                this.videoCtx.playbackRate(this.rate * 1);case 17:

                this.clickSrcView();case 18:case "end":return _context6.stop();}}}, _callee6, this);}));function tapSrc(_x2, _x3) {return _tapSrc.apply(this, arguments);}return tapSrc;}(),

    //暂停
    pause: function pause() {
      this.videoCtx.pause();
      this.play = false;
    },
    videoPlay: function () {var _videoPlay = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:if (
                this.play) {_context7.next = 13;break;}_context7.next = 3;return (
                  this.promise(100));case 3:
                this.videoCtx.play();if (!

                this.playFirst) {_context7.next = 10;break;}if (!(
                this.platform == 'ios')) {_context7.next = 8;break;}_context7.next = 8;return this.promise(1000);case 8:

                this.videoCtx.seek(this.initialTime);
                this.playFirst = false;case 10:

                if (this.current >= this.duration) this.current = 0;_context7.next = 14;break;case 13:

                this.videoCtx.pause();case 14:

                this.play = !this.play;case 15:case "end":return _context7.stop();}}}, _callee7, this);}));function videoPlay() {return _videoPlay.apply(this, arguments);}return videoPlay;}(),

    tapFullScreen: function tapFullScreen() {
      this.showControls = false;
      if (!this.fullScreen) {
        this.videoCtx.requestFullScreen({ direction: this.direction });
      } else {
        this.videoCtx.exitFullScreen();
      }
    },
    clickVideo: function () {var _clickVideo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                this.showControls = !this.showControls;case 1:case "end":return _context8.stop();}}}, _callee8, this);}));function clickVideo() {return _clickVideo.apply(this, arguments);}return clickVideo;}(),

    clickRateView: function () {var _clickRateView = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
                this.showControls = !this.showControls;
                if (this.moreView) {
                  this.moreView = false;

                } else {
                  this.rateView = !this.rateView;
                }case 2:case "end":return _context9.stop();}}}, _callee9, this);}));function clickRateView() {return _clickRateView.apply(this, arguments);}return clickRateView;}(),

    clickAudio: function () {var _clickAudio = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(e) {return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:
                e.stopPropagation();
                this.showControls = !this.showControls;
                this.audioFlag = true;
                this.moreView = false;
                uni.showToast({ title: '开启后台音频播放', icon: 'none' });case 5:case "end":return _context10.stop();}}}, _callee10, this);}));function clickAudio(_x4) {return _clickAudio.apply(this, arguments);}return clickAudio;}(),

    //切换srctitle
    clickSrcView: function () {var _clickSrcView = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:if (!(
                this.srcList.length == 1)) {_context11.next = 2;break;}return _context11.abrupt("return");case 2:
                this.showControls = !this.showControls;
                this.srcView = !this.srcView;case 4:case "end":return _context11.stop();}}}, _callee11, this);}));function clickSrcView() {return _clickSrcView.apply(this, arguments);}return clickSrcView;}(),

    //选集
    clickEpisodeView: function () {var _clickEpisodeView = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12(e) {return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:
                e.stopPropagation();

                this.showControls = !this.showControls;
                this.episodeView = !this.episodeView;case 3:case "end":return _context12.stop();}}}, _callee12, this);}));function clickEpisodeView(_x5) {return _clickEpisodeView.apply(this, arguments);}return clickEpisodeView;}(),

    //跳到指定集数
    clickEpisode: function clickEpisode(count) {
      this.$emit('playEpi', count);
    },
    clickMoreView: function () {var _clickMoreView = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:
                this.showControls = !this.showControls;
                this.moreView = !this.moreView;case 2:case "end":return _context13.stop();}}}, _callee13, this);}));function clickMoreView() {return _clickMoreView.apply(this, arguments);}return clickMoreView;}(),

    //下一集
    playNext: function playNext() {
      this.play = false;
      this.$emit('playEpi', this.index + 1);
    },
    clickLock: function clickLock(e) {
      e.stopPropagation();
      this.lock = !this.lock;
    },
    animateControls: function animateControls(distance, el) {
      animation.transition(el, {
        styles: {
          transform: "translate(0px, ".concat(distance, "px)") },

        duration: 150, //ms
        timingFunction: 'ease-in-out',
        delay: 0 //ms
      }, function () {

      });

    },
    // 触摸开始
    videoTouchStart: function videoTouchStart(e) {var _this4 = this;

      this.oldTouces = e.changedTouches[0];
      // 触摸开始的值
      this.oldValue = {
        current: this.current };


      this.oldValue = _objectSpread({},
      this.oldValue, {
        volume: plus.device.getVolume() });




      uni.getScreenBrightness({
        success: function success(res) {
          _this4.oldValue = _objectSpread({},
          _this4.oldValue, {
            bright: res.value });

        } });


    },
    // 计算方向
    videoTouchMove: function videoTouchMove(e) {
      if (this.lock) return;var

      oldTouces = this.oldTouces,oldValue = this.oldValue,touchType = this.touchType;
      var newTouces = e.changedTouches[0];

      if (!this.touchType) {
        //进度控制
        this.touchType = Math.abs(newTouces.pageX - oldTouces.pageX) > 20 ? 'current' : null;
        //全屏下支持音量和亮度

        if (this.fullScreen && !this.touchType && this.platform == 'android') {

          this.touchType = Math.abs(newTouces.pageY - oldTouces.pageY) > 20 && newTouces.pageX <= 200 ? 'bright' : this.touchType;

          this.touchType = Math.abs(newTouces.pageY - oldTouces.pageY) > 20 && newTouces.pageX > 200 ? 'volume' : this.touchType;

        }
        if (this.fullScreen && this.platform == 'ios') {
          this.touchType = Math.abs(newTouces.pageX - oldTouces.pageX) > 20 ? 'bright' : null;

          if (!this.touchType) {
            this.touchType = Math.abs(newTouces.pageY - oldTouces.pageY) > 20 ? 'current' : this.touchType;
          }

        }

      } else if (this.touchType == 'volume' && this.platform == 'android') {
        this.touchVolume = (oldTouces.pageY - newTouces.pageY) / 200 * 1 * 2 + this.oldValue[touchType];
        this.touchVolume = this.touchVolume > 1 ? 1 : this.touchVolume;
        this.touchVolume = this.touchVolume < 0 ? 0 : this.touchVolume;
        //相等时重置oldTouces
        if (this.touchVolume == this.oldValue[touchType]) this.oldTouces = newTouces;
      } else if (this.touchType == 'bright' && this.platform == 'android') {
        this.touchBright = (oldTouces.pageY - newTouces.pageY) / 200 * 1 * 2 + this.oldValue[touchType];
        this.touchBright = this.touchBright > 1 ? 1 : this.touchBright;
        this.touchBright = this.touchBright < 0 ? 0 : this.touchBright;
        //相等时重置oldTouces
        if (this.touchBright == this.oldValue[touchType]) this.oldTouces = newTouces;
      } else if (this.touchType == 'current') {

        this.touchCurrent = (newTouces.pageX - oldTouces.pageX) * this.duration / 250 / this.currentSen + this.oldValue[touchType] * 1;
        if (this.platform == 'ios' && this.fullScreen) {
          this.touchCurrent = this.direction / -90 * (newTouces.pageY - oldTouces.pageY) * this.duration / 250 / this.currentSen + this.oldValue[touchType] * 1;
        }

        this.touchCurrent = this.touchCurrent > this.duration ? this.duration : this.touchCurrent;
        this.touchCurrent = this.touchCurrent < 0 ? 0 : this.touchCurrent;
        //相等时重置oldTouces
        if (this.touchCurrent == this.oldValue[touchType]) this.oldTouces = newTouces;
      }

    },
    // 结束触摸
    videoTouchEnd: function videoTouchEnd(e) {var _this5 = this;
      if (this.touchType == 'current') {
        this.current = this.touchCurrent;
        this.videoCtx.seek(this.current);
      } else if (this.touchType == 'bright' && this.platform == 'android') {
        // plus.screen.setBrightness(this.touchBright.toFixed(2))
        // if(this.play) this.videoCtx.play();

        uni.setScreenBrightness({
          value: this.touchBright.toFixed(2),
          success: function success() {
            setTimeout(function () {
              if (_this5.play) _this5.videoCtx.play();
            }, 100);

          } });


      } else if (this.touchType == 'volume' && this.platform == 'android') {
        plus.device.setVolume(this.touchVolume.toFixed(2));
      } else if (!this.touchType) {
        if (this.dblCount == 1 || this.dblCount == 0) this.dblCount++;

        if (this.dblCount == 1) {
          setTimeout(function () {
            //单击
            if (_this5.dblCount == 1) _this5.clickVideo();
            //双击
            if (_this5.dblCount == 2) _this5.videoPlay();
            _this5.dblCount = 0;
          }, 250);
        }
      }

      this.touchType = null;

    },
    changeScreen: function changeScreen() {

      this.showControls = false;
      this.rateView = false;
      this.moreView = false;
      this.srcView = false;
      this.fullScreen = !this.fullScreen;
      this.$emit('fullscreenchange', this.fullScreen);
    },
    getLevel: function getLevel() {var _this6 = this;
      var promise = new Promise(function (resolve, reject) {

        if (_this6.platform == 'android') {
          //注意，安卓需要配置下manifest.json文件，打开后，进入模块权限配置，在右侧的Android权限设置里勾选上android.permission.BATTERY_STATS
          var main = plus.android.runtimeMainActivity();
          var Intent = plus.android.importClass('android.content.Intent');
          var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {
            onReceive: function onReceive(context, intent) {
              var action = intent.getAction();
              if (action == Intent.ACTION_BATTERY_CHANGED) {
                var level = intent.getIntExtra("level", 0); //电量  
                var voltage = intent.getIntExtra("voltage", 0); //电池电压  
                var temperature = intent.getIntExtra("temperature", 0); //电池温度  
                resolve(level / 100);
              }
            } });

          var IntentFilter = plus.android.importClass('android.content.IntentFilter');
          var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
          main.registerReceiver(recevier, filter);
        } else if (_this6.platform == 'ios') {
          var UIDevice = plus.ios.import("UIDevice");
          var dev = UIDevice.currentDevice();
          if (!dev.isBatteryMonitoringEnabled()) {
            dev.setBatteryMonitoringEnabled(true);
          }
          var level = dev.batteryLevel();

          resolve(level);
        }








      });
      promise.then(function (res) {
        _this6.level = res;
      });




    },
    formatSeconds: function formatSeconds(a, type) {
      var hh = parseInt(a / 3600);
      var mm = parseInt((a - hh * 3600) / 60);
      if (mm < 10) mm = "0" + mm;
      var ss = parseInt((a - hh * 3600) % 60);
      if (ss < 10) ss = "0" + ss;
      if (hh < 10) hh = hh == '0' ? '' : "0".concat(hh, ":");
      var length = hh + mm + ":" + ss;
      if (a >= 0) {
        return length;
      } else {
        return "00:00";
      }
    },
    getNowTime: function getNowTime() {
      var now = new Date();
      var hh = now.getHours(); //时
      if (hh < 10) hh = "0" + hh;
      var mm = now.getMinutes(); //分
      if (mm < 10) mm = "0" + mm;
      return "".concat(hh, ":").concat(mm);
    } },

  watch: {
    gDuration: {
      immediate: true,
      handler: function handler(newVal, oldVal) {

        this.duration = newVal;
      } },

    audio: {
      immediate: true,
      handler: function () {var _handler = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(newVal, oldVal) {return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:if (!(
                  newVal != '')) {_context14.next = 9;break;}_context14.next = 3;return (
                    this.promise());case 3:
                  this.innerAudioContext = uni.createInnerAudioContext();

                  this.innerAudioContext.src = newVal;
                  this.innerAudioContext.onPlay();
                  this.innerAudioContext.onPause();_context14.next = 10;break;case 9:

                  this.innerAudioContext = null;case 10:case "end":return _context14.stop();}}}, _callee14, this);}));function handler(_x6, _x7) {return _handler.apply(this, arguments);}return handler;}() },




    index: {
      handler: function () {var _handler2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(newVal, oldVal) {return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:_context15.next = 2;return (

                    this.changSrc());case 2:case "end":return _context15.stop();}}}, _callee15, this);}));function handler(_x8, _x9) {return _handler2.apply(this, arguments);}return handler;}() },



    srcList: {
      immediate: true,
      handler: function () {var _handler3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(newVal, oldVal) {return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:
                  if (typeof newVal == 'string') {
                    this.src = newVal;
                  } else {
                    this.src = newVal[0].src;
                    this.srcTitle = newVal[0].title;
                  }if (!(
                  this.playFirst && this.autoplay)) {_context16.next = 4;break;}_context16.next = 4;return this.changSrc();case 4:case "end":return _context16.stop();}}}, _callee16, this);}));function handler(_x10, _x11) {return _handler3.apply(this, arguments);}return handler;}() },


    showControls: {
      immediate: true,
      handler: function () {var _handler4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(newVal) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:if (!(

                  newVal && this.fullScreen)) {_context17.next = 7;break;}
                  this.nowTime = this.getNowTime();
                  this.getLevel();_context17.next = 5;return (
                    this.promise());case 5:
                  this.animateControls(0, this.$refs.controlsTop);
                  this.animateControls(0, this.$refs.controlsBtm);case 7:case "end":return _context17.stop();}}}, _callee17, this);}));function handler(_x12) {return _handler4.apply(this, arguments);}return handler;}() },



    direction: function () {var _direction = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(newVal) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:if (!(
                this.fullScreen && !this.lock)) {_context18.next = 5;break;}
                this.videoCtx.exitFullScreen();_context18.next = 4;return (
                  this.promise(1000));case 4:
                this.videoCtx.requestFullScreen({ direction: newVal });case 5:case "end":return _context18.stop();}}}, _callee18, this);}));function direction(_x13) {return _direction.apply(this, arguments);}return direction;}() },




  computed: {
    lastDuration: function lastDuration() {
      return this.formatSeconds(this.duration);
    },
    currentDuration: function currentDuration() {
      return this.formatSeconds(this.current);
    },
    touchCurrentDuration: function touchCurrentDuration() {
      return this.formatSeconds(this.touchCurrent);
    },
    //小屏时进度条长度
    sliderWidth: function sliderWidth() {
      if (this.duration >= 3600) {
        return this.fullControlsHeigt - 190;
      } else {
        return this.fullControlsHeigt - 160;
      }
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"]))

/***/ }),
/* 39 */
/*!******************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-slider/chunLei-slider.nvue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunLei_slider_nvue_vue_type_template_id_767eeb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=template&id=767eeb92&scoped=true& */ 40);
/* harmony import */ var _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=script&lang=js& */ 42);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 31);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=767eeb92&lang=scss&scoped=true& */ 44).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=767eeb92&lang=scss&scoped=true& */ 44).default)
          }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chunLei_slider_nvue_vue_type_template_id_767eeb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chunLei_slider_nvue_vue_type_template_id_767eeb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "767eeb92",
  "b7045ef0"
  
)

injectStyles.call(component)
component.options.__file = "Users/lixi/Space/电影模板/components/chunlei-video/chunLei-slider/chunLei-slider.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 40 */
/*!*************************************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=767eeb92&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_template_id_767eeb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunLei-slider.nvue?vue&type=template&id=767eeb92&scoped=true& */ 41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_template_id_767eeb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_template_id_767eeb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 41 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=767eeb92&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "slider",
      staticClass: ["slider", "flex"],
      style: { width: _vm.width + "px" },
      attrs: { id: "slider" }
    },
    [
      _c(
        "div",
        {
          staticClass: ["slider-left", "flex"],
          style: { width: _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch }
        },
        [
          _c("div", {
            staticClass: ["left"],
            style: { backgroundColor: _vm.backgroundColor }
          })
        ]
      ),
      _c(
        "div",
        {
          staticClass: ["slider-right", "flex"],
          style: { width: _vm.currentWidth - _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch }
        },
        [_c("div", { staticClass: ["right"] })]
      ),
      _c(
        "div",
        {
          staticClass: ["block", "flex"],
          style: {
            backgroundColor: _vm.touch ? _vm.blockOuterColor : "rgba(0,0,0,0)",
            left: _vm.leftWidth + "px"
          },
          on: { click: function($event) {} }
        },
        [
          _c(
            "div",
            {
              staticClass: ["block-inner", "flex"],
              style: { backgroundColor: _vm.blockBackgroundColor },
              on: {
                touchmove: _vm.blockTouchMove,
                touchend: _vm.blockTouchEnd,
                touchstart: _vm.blockTouchStart
              }
            },
            [
              _c("div", {
                staticClass: ["block-inner-inner"],
                style: { backgroundColor: _vm.blockColor }
              })
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 42 */
/*!*******************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunLei-slider.nvue?vue&type=script&lang=js& */ 43);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  props: {
    min: {
      type: Number,
      default: 0 },

    max: {
      type: Number,
      default: 0 },

    value: {
      type: Number,
      default: 0 },

    width: {
      type: Number,
      default: 0 },

    ratio: {
      type: Number,
      default: 1 },

    direction: {
      type: String,
      default: 'screenX' },

    backgroundColor: { //滑块右侧背景条的颜色
      type: String,
      default: '#e9e9e9' },

    blockColor: { //滑块颜色
      type: String,
      default: '#ffffff' },

    screenLeft: { //slider距离左边距离
      type: Number,
      default: 0 },

    iosDirection: {
      type: Number,
      default: 1 } },


  data: function data() {
    return {
      oldToucesX: 0,
      leftWidth: 0,
      oldLeftWidth: 0,
      touch: false };

  },
  mounted: function mounted() {


  },
  methods: {
    sliderTouch: function sliderTouch(e) {
      var touches = e.changedTouches[0];
      this.leftWidth = touches[this.direction] * this.ratio - this.screenLeft;
      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;
      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;
      this.blockTouchEnd();

    },
    // 触摸开始
    blockTouchStart: function blockTouchStart(e) {
      this.touch = true;
      this.oldLeftWidth = this.leftWidth;
      this.oldToucesX = e.changedTouches[0][this.direction];
    },
    // 计算方向
    blockTouchMove: function blockTouchMove(e) {
      var newToucesX;

      newToucesX = e.changedTouches[0][this.direction];
      this.leftWidth = this.iosDirection * (newToucesX - this.oldToucesX) * this.ratio + this.oldLeftWidth;
      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;
      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;

    },
    // 结束触摸
    blockTouchEnd: function blockTouchEnd(e) {
      var current = this.leftWidth / this.currentWidth * this.max;
      var event = { detail: { value: current } };
      this.$emit('change', event);
      this.touch = false;
    },
    colorRgb: function colorRgb(string, opacity) {
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      var sColor = string.toLowerCase();
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          var sColorNew = "#";
          for (var i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "rgba(" + sColorChange.join(",") + ",".concat(opacity) + ")";
      } else {
        return sColor;
      }
    } },

  computed: {
    blockOuterColor: function blockOuterColor() {
      return this.colorRgb(this.blockColor, 0.4);
    },
    blockBackgroundColor: function blockBackgroundColor() {
      return this.colorRgb(this.blockColor, 0.5);
    },
    currentWidth: function currentWidth() {
      return this.width - 40;
    } },

  watch: {
    value: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (this.touch) return;

        this.leftWidth = newVal / this.max * this.currentWidth;
        this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;
      } } } };exports.default = _default;

/***/ }),
/* 44 */
/*!****************************************************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=767eeb92&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_style_index_0_id_767eeb92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--10-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunLei-slider.nvue?vue&type=style&index=0&id=767eeb92&lang=scss&scoped=true& */ 45);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_style_index_0_id_767eeb92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_style_index_0_id_767eeb92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_style_index_0_id_767eeb92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_style_index_0_id_767eeb92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_slider_nvue_vue_type_style_index_0_id_767eeb92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=767eeb92&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "position": "relative",
    "flexDirection": "row",
    "height": "40",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "slider-left": {
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "left": {
    "flex": 1,
    "height": "3"
  },
  "slider-right": {
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "right": {
    "height": "3",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "flex": 1
  },
  "block": {
    "position": "absolute",
    "height": "40",
    "width": "40",
    "borderRadius": "20",
    "justifyContent": "center",
    "alignItems": "center",
    "zIndex": 999999
  },
  "block-inner": {
    "height": "20",
    "width": "20",
    "borderRadius": "10",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "block-inner-inner": {
    "height": "10",
    "width": "10",
    "borderRadius": "5"
  }
}

/***/ }),
/* 46 */
/*!****************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunLei_danmu_nvue_vue_type_template_id_3f9fe1f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=template&id=3f9fe1f9& */ 47);
/* harmony import */ var _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=script&lang=js& */ 49);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 31);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 51).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 51).default)
          }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chunLei_danmu_nvue_vue_type_template_id_3f9fe1f9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chunLei_danmu_nvue_vue_type_template_id_3f9fe1f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "0026eeec"
  
)

injectStyles.call(component)
component.options.__file = "Users/lixi/Space/电影模板/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 47 */
/*!***********************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=template&id=3f9fe1f9& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_template_id_3f9fe1f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunLei-danmu.nvue?vue&type=template&id=3f9fe1f9& */ 48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_template_id_3f9fe1f9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_template_id_3f9fe1f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 48 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=template&id=3f9fe1f9& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: ["danmu"], style: { width: _vm.width + "px" } },
    [
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList1, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList2, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList3, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList4, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 49 */
/*!*****************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunLei-danmu.nvue?vue&type=script&lang=js& */ 50);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 50 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
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

var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');var _default2 =
{
  props: {
    width: {
      type: Number,
      default: 0 },

    danmuList: { //弹幕
      type: [Array],
      default: function _default() {return [];} },

    platform: {
      type: String,
      default: 'android' },

    current: {
      type: Number,
      default: 0 } },


  data: function data() {
    return {
      danmuList1: [],
      danmuList2: [],
      danmuList3: [],
      danmuList4: [] };

  },
  methods: {
    promise: function promise() {
      var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, 100);
      });
      return promise;
    },
    cleanDanmu: function cleanDanmu() {
      this.danmuList1 = [];
      this.danmuList2 = [];
      this.danmuList3 = [];
      this.danmuList4 = [];
    },
    randomRange: function randomRange(min, max) {// min最小值，max最大值
      return Math.floor(Math.random() * (max - min)) + min;
    },
    animationText: function animationText(id, distance, fn) {
      var el;
      var elList = this.$refs.move;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
        for (var _iterator = elList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var item = _step.value;
          if (item.attr.id == id) {
            el = item;
          }

        }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
      animation.transition(el, {
        styles: {
          transform: "translate( ".concat(distance, "px, 0px)") },

        duration: 20000, //ms
        timingFunction: 'ease',
        delay: 0 //ms
      }, function () {
        fn();
      });

    } },

  watch: {
    danmuList: {
      immediate: true,
      handler: function handler(newVal, oldVal) {

        for (var key in newVal) {
          newVal[key]._id = key;
        }
      } },

    current: {
      handler: function () {var _handler = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(newVal, oldVal) {var _this = this;var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _loop, _iterator2, _step2;return _regenerator.default.wrap(function _callee$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(


                  Math.abs(newVal - oldVal) >= 0.24)) {_context2.next = 26;break;}_iteratorNormalCompletion2 = true;_didIteratorError2 = false;_iteratorError2 = undefined;_context2.prev = 4;_loop = /*#__PURE__*/_regenerator.default.mark(function _loop() {var item, num;return _regenerator.default.wrap(function _loop$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            item = _step2.value;if (!(
                            item.time > Math.floor(newVal * 1) && item.time <= Math.floor(newVal * 1 + 0.25))) {_context.next = 7;break;}
                            num = _this.randomRange(1, 5);
                            _this["danmuList".concat(num)].push(item);_context.next = 6;return (
                              _this.promise());case 6:

                            //开始动画
                            _this.animationText(item._id, -_this.width * 2, function () {
                              var index;
                              //删除动画后的text
                              for (var key in _this["danmuList".concat(num)]) {
                                if (_this["danmuList".concat(num)][key]._id == item._id) {
                                  index = key;
                                }
                              }
                              _this["danmuList".concat(num)].splice(index, 1);
                            });case 7:case "end":return _context.stop();}}}, _loop, this);});_iterator2 = this.danmuList[Symbol.iterator]();case 7:if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {_context2.next = 12;break;}return _context2.delegateYield(_loop(), "t0", 9);case 9:_iteratorNormalCompletion2 = true;_context2.next = 7;break;case 12:_context2.next = 18;break;case 14:_context2.prev = 14;_context2.t1 = _context2["catch"](4);_didIteratorError2 = true;_iteratorError2 = _context2.t1;case 18:_context2.prev = 18;_context2.prev = 19;if (!_iteratorNormalCompletion2 && _iterator2.return != null) {_iterator2.return();}case 21:_context2.prev = 21;if (!_didIteratorError2) {_context2.next = 24;break;}throw _iteratorError2;case 24:return _context2.finish(21);case 25:return _context2.finish(18);case 26:case "end":return _context2.stop();}}}, _callee, this, [[4, 14, 18, 26], [19,, 21, 25]]);}));function handler(_x, _x2) {return _handler.apply(this, arguments);}return handler;}() } } };exports.default = _default2;

/***/ }),
/* 51 */
/*!*************************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 52);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 52 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "danmu": {
    "height": "160",
    "flexDirection": "column"
  },
  "danmu-row": {
    "position": "relative",
    "height": "40",
    "flexDirection": "row"
  },
  "moveDiv": {
    "position": "absolute",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "android-title": {
    "fontSize": "12"
  },
  "img": {
    "width": "30",
    "height": "30",
    "marginLeft": "10",
    "borderRadius": "15"
  },
  "ios-title": {
    "fontSize": "24"
  }
}

/***/ }),
/* 53 */
/*!**************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-moon/chunLei-moon.nvue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunLei_moon_nvue_vue_type_template_id_253bdd77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-moon.nvue?vue&type=template&id=253bdd77& */ 54);
/* harmony import */ var _chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-moon.nvue?vue&type=script&lang=js& */ 56);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 31);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-moon.nvue?vue&type=style&index=0&lang=css& */ 58).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-moon.nvue?vue&type=style&index=0&lang=css& */ 58).default)
          }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chunLei_moon_nvue_vue_type_template_id_253bdd77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chunLei_moon_nvue_vue_type_template_id_253bdd77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "76f2f448"
  
)

injectStyles.call(component)
component.options.__file = "Users/lixi/Space/电影模板/components/chunlei-video/chunLei-moon/chunLei-moon.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 54 */
/*!*********************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=template&id=253bdd77& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_template_id_253bdd77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunLei-moon.nvue?vue&type=template&id=253bdd77& */ 55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_template_id_253bdd77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_template_id_253bdd77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 55 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=template&id=253bdd77& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: ["moon-box"] }, [
    _c("div", {
      staticClass: ["light", "light1"],
      style: { opacity: _vm.light1 }
    }),
    _c("div", {
      staticClass: ["light", "light2"],
      style: { opacity: _vm.light2 }
    }),
    _c("div", {
      staticClass: ["light", "light3"],
      style: { opacity: _vm.light3 }
    }),
    _c("div", {
      staticClass: ["light", "light4"],
      style: { opacity: _vm.light4 }
    }),
    _c("div", {
      staticClass: ["light", "light5"],
      style: { opacity: _vm.light5 }
    }),
    _c("div", {
      staticClass: ["light", "light6"],
      style: { opacity: _vm.light6 }
    }),
    _c("div", {
      staticClass: ["light", "light7"],
      style: { opacity: _vm.light7 }
    }),
    _c("div", {
      staticClass: ["light", "light8"],
      style: { opacity: _vm.light8 }
    }),
    _c("div", {
      staticClass: ["light", "light9"],
      style: { opacity: _vm.light9 }
    }),
    _c("div", {
      staticClass: ["light", "light10"],
      style: { opacity: _vm.light10 }
    }),
    _c("div", {
      staticClass: ["light", "light11"],
      style: { opacity: _vm.light11 }
    }),
    _c("div", {
      staticClass: ["light", "light12"],
      style: { opacity: _vm.light12 }
    }),
    _c("div", { staticClass: ["moon"] }, [
      _c(
        "div",
        {
          staticClass: ["move-box"],
          style: {
            transform: "rotate(" + (225 - 270 * _vm.percentage) + "deg)"
          }
        },
        [
          _c("div", {
            staticClass: ["move-moon"],
            style: { right: -16 + (1 - _vm.percentage) * 14 + "px" }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 56 */
/*!***************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunLei-moon.nvue?vue&type=script&lang=js& */ 57);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  props: {
    percentage: {
      type: Number,
      default: 1 } },


  data: function data() {
    return {};


  },
  methods: {
    getOpacity: function getOpacity(percentage, nub) {
      var opacity;
      if (percentage < 13 / 12 - nub / 12 && percentage > 1 - nub / 12) {
        opacity = '0.5';
      } else if (percentage <= 1 - nub / 12) {
        opacity = '0';
      } else {
        opacity = '1';
      }
      return opacity;
    } },

  computed: {
    light1: function light1() {
      return this.getOpacity(this.percentage, 1);
    },
    light2: function light2() {
      return this.getOpacity(this.percentage, 2);
    },
    light3: function light3() {
      return this.getOpacity(this.percentage, 3);
    },
    light4: function light4() {
      return this.getOpacity(this.percentage, 4);
    },
    light5: function light5() {
      return this.getOpacity(this.percentage, 5);
    },
    light6: function light6() {
      return this.getOpacity(this.percentage, 6);
    },
    light7: function light7() {
      return this.getOpacity(this.percentage, 7);
    },
    light8: function light8() {
      return this.getOpacity(this.percentage, 8);
    },
    light9: function light9() {
      return this.getOpacity(this.percentage, 9);
    },
    light10: function light10() {
      return this.getOpacity(this.percentage, 10);
    },
    light11: function light11() {
      return this.getOpacity(this.percentage, 11);
    },
    light12: function light12() {
      return this.getOpacity(this.percentage, 12);
    } } };exports.default = _default;

/***/ }),
/* 58 */
/*!***********************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunLei-moon.nvue?vue&type=style&index=0&lang=css& */ 59);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "moon-box": {
    "position": "relative",
    "width": "40",
    "height": "40"
  },
  "moon": {
    "width": "16",
    "height": "16",
    "borderRadius": "8",
    "position": "absolute",
    "top": "10",
    "left": "10",
    "backgroundColor": "#ffffff"
  },
  "move-box": {
    "position": "relative",
    "width": "16",
    "height": "16",
    "borderRadius": "8"
  },
  "move-moon": {
    "position": "relative",
    "width": "16",
    "height": "16",
    "top": 0,
    "borderRadius": "8",
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  "light": {
    "position": "absolute",
    "borderRadius": "0.8",
    "height": "3",
    "width": "2",
    "top": "4",
    "left": "18",
    "transformOrigin": "0px 7.5px",
    "backgroundColor": "#FFFFFF"
  },
  "light2": {
    "transform": "rotate(30deg)"
  },
  "light3": {
    "transform": "rotate(60deg)"
  },
  "light4": {
    "transform": "rotate(90deg)"
  },
  "light5": {
    "transform": "rotate(120deg)"
  },
  "light6": {
    "transform": "rotate(150deg)"
  },
  "light7": {
    "transform": "rotate(180deg)"
  },
  "light8": {
    "transform": "rotate(210deg)"
  },
  "light9": {
    "transform": "rotate(240deg)"
  },
  "light10": {
    "transform": "rotate(270deg)"
  },
  "light11": {
    "transform": "rotate(300deg)"
  },
  "light12": {
    "transform": "rotate(330deg)"
  }
}

/***/ }),
/* 60 */
/*!************************************************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=73dac4c6&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_style_index_0_id_73dac4c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--10-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./chunlei-video.nvue?vue&type=style&index=0&id=73dac4c6&scoped=true&lang=scss& */ 61);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_style_index_0_id_73dac4c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_style_index_0_id_73dac4c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_style_index_0_id_73dac4c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_style_index_0_id_73dac4c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_chunlei_video_nvue_vue_type_style_index_0_id_73dac4c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 61 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=73dac4c6&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "android-lock": {
    "position": "absolute",
    "left": "40",
    "width": "30",
    "height": "30",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "borderRadius": 50
  },
  "android-icon": {
    "fontSize": "9",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "android-title": {
    "fontSize": "9",
    "color": "#ffffff"
  },
  "android-title-box": {
    "alignItems": "center",
    "textAlign": "center",
    "borderWidth": "2",
    "borderColor": "#ffffff",
    "borderStyle": "solid",
    "paddingTop": "2",
    "paddingRight": "2",
    "paddingBottom": "2",
    "paddingLeft": "2"
  },
  "android-srcTitle": {
    "fontSize": "6",
    "color": "#ffffff"
  },
  "android-sm-title": {
    "fontSize": "4",
    "color": "#ffffff"
  },
  "android-big-title": {
    "fontSize": "14",
    "color": "#ffffff"
  },
  "android-big-icon": {
    "fontSize": "26",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "ios-icon": {
    "fontSize": "18",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "ios-title": {
    "fontSize": "18",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "ios-lock": {
    "position": "absolute",
    "left": "40",
    "width": "40",
    "height": "40",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "borderRadius": 50,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "ios-title-box": {
    "alignItems": "center",
    "textAlign": "center",
    "borderWidth": "2",
    "borderColor": "#ffffff",
    "borderStyle": "solid",
    "paddingTop": "2",
    "paddingRight": "2",
    "paddingBottom": "2",
    "paddingLeft": "2"
  },
  "ios-srcTitle": {
    "fontSize": "12",
    "color": "#ffffff"
  },
  "ios-sm-title": {
    "fontSize": "6",
    "color": "#ffffff"
  },
  "ios-big-title": {
    "fontSize": "28",
    "color": "#ffffff"
  },
  "ios-big-icon": {
    "fontSize": "52",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "video-box": {
    "height": "200"
  },
  "marginRight": {
    "marginRight": "10"
  },
  "btnBox": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "video": {
    "flex": 1,
    "width": "750rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "video-view": {
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "zIndex": 999
  },
  "sm-title": {
    "fontSize": "12",
    "color": "#ffffff"
  },
  "set-view": {
    "position": "absolute",
    "top": 0,
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  "danmu-view": {
    "position": "absolute",
    "top": 0,
    "height": "160"
  },
  "rate-set": {
    "flexDirection": "column",
    "paddingTop": "40",
    "paddingRight": "80",
    "paddingBottom": "40",
    "paddingLeft": "80",
    "justifyContent": "flex-end",
    "backgroundColor": "rgba(0,0,0,0.6)"
  },
  "power-view": {
    "alignItems": "center"
  },
  "power-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "power-header": {
    "height": "4",
    "width": "2",
    "backgroundColor": "#ffffff"
  },
  "power-body": {
    "height": "9",
    "width": "20",
    "borderWidth": "1",
    "borderColor": "#ffffff",
    "paddingTop": "1",
    "paddingRight": "1",
    "paddingBottom": "1",
    "paddingLeft": "1",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  "power-level": {
    "height": "5"
  },
  "scroll-view": {
    "flexDirection": "row"
  },
  "more-set": {
    "flexDirection": "column",
    "paddingTop": "40",
    "paddingRight": "100",
    "paddingBottom": "40",
    "paddingLeft": "100"
  },
  "episode-set": {
    "flexDirection": "column",
    "paddingTop": "40",
    "paddingRight": "100",
    "paddingBottom": "40",
    "paddingLeft": "100",
    "flexWrap": "wrap"
  },
  "episode-scroll": {
    "flexDirection": "column",
    "flexWrap": "wrap"
  },
  "epiBox": {
    "height": "50",
    "width": "50",
    "marginRight": "20",
    "marginBottom": "20",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.6)"
  },
  "more-row": {
    "flexDirection": "row",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20"
  },
  "more-tap": {
    "height": "1",
    "opacity": 0.6,
    "backgroundColor": "#70A0A0"
  },
  "more-box": {
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "height": "100",
    "width": "120",
    "marginRight": "20"
  },
  "set-bottom": {
    "flexDirection": "row"
  },
  "setBox": {
    "height": "100",
    "width": "100",
    "marginRight": "20",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(94,162,162,0.2)"
  },
  "solid-bottom": {
    "borderBottomWidth": "2"
  },
  "controls-top": {
    "position": "absolute",
    "backgroundImage": "linear-gradient(to top, transparent, rgba(0, 0, 0, 0.8))",
    "height": "40",
    "transform": "translateY(-40px)",
    "top": 0,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "40",
    "paddingBottom": 0,
    "paddingLeft": "30"
  },
  "top-left": {
    "flexDirection": "row",
    "alignItems": "center",
    "fontSize": "12",
    "color": "#ffffff"
  },
  "top-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "fontSize": "12",
    "color": "#ffffff"
  },
  "stop": {
    "position": "absolute",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "backgroundColor": "rgba(0,0,0,0.6)",
    "borderRadius": "2"
  },
  "rate": {
    "position": "absolute",
    "top": "0",
    "width": "750rpx",
    "height": "160",
    "flexDirection": "column",
    "zIndex": 101
  },
  "rate-view": {
    "position": "absolute",
    "height": "20",
    "top": "90",
    "right": 0,
    "zIndex": 90
  },
  "current-view": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "width": "300rpx",
    "height": "80",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": "5",
    "position": "absolute",
    "top": "30",
    "left": "225rpx"
  },
  "fullCurrent-view": {
    "backgroundColor": "rgba(0,0,0,0.4)",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": "5",
    "width": "220",
    "height": "40",
    "top": "50",
    "position": "absolute"
  },
  "fullCurrent-current": {
    "backgroundColor": "rgba(0,0,0,0.4)",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": "5",
    "width": "150",
    "height": "80",
    "top": "60",
    "position": "absolute"
  },
  "fullControls-bottom-left": {
    "flexDirection": "row"
  },
  "fullCurrent-bottom": {
    "width": "110",
    "backgroundColor": "rgba(255,255,255,0.3)",
    "marginTop": "15",
    "height": "5",
    "overflow": "hidden"
  },
  "fullCurrent-volume": {
    "width": "150",
    "height": "5",
    "overflow": "hidden",
    "justifyContent": "space-between",
    "alignItems": "center",
    "flexDirection": "row",
    "position": "relative"
  },
  "fullCurrent-volume-left": {
    "width": "75",
    "backgroundImage": "linear-gradient(to right, #BAFFFD, #71FCBA)",
    "height": "5"
  },
  "fullCurrent-volume-right": {
    "width": "75",
    "backgroundImage": "linear-gradient(to right, #71FCBA, #E35313)",
    "height": "5"
  },
  "fullCurrent-bright": {
    "width": "150",
    "height": "5",
    "overflow": "hidden",
    "justifyContent": "space-between",
    "alignItems": "center",
    "flexDirection": "row",
    "position": "relative"
  },
  "fullCurrent-bright-left": {
    "width": "75",
    "backgroundImage": "linear-gradient(to right, #01B6FF, #FFF159)",
    "height": "5"
  },
  "fullCurrent-bright-right": {
    "width": "75",
    "backgroundImage": "linear-gradient(to right, #FFF159, #FFFFFF)",
    "height": "5"
  },
  "fullCurrent-progress": {
    "position": "absolute",
    "right": 0,
    "backgroundColor": "#000000",
    "height": "5"
  },
  "current-bottom": {
    "width": "260rpx",
    "backgroundColor": "rgba(255,255,255,0.3)",
    "marginTop": "15",
    "height": "5",
    "overflow": "hidden"
  },
  "current-progress": {
    "backgroundColor": "rgba(255,255,255,0.7)",
    "height": "5"
  },
  "rate-list": {
    "paddingTop": "20",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "fullRate-view": {
    "flexDirection": "row"
  },
  "controls-view": {
    "width": "750rpx",
    "height": "40",
    "position": "absolute",
    "backgroundImage": "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
    "bottom": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10"
  },
  "controls-view-top": {
    "width": "750rpx",
    "height": "40",
    "position": "absolute",
    "top": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10"
  },
  "fullControls-view": {
    "backgroundImage": "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
    "height": "120",
    "transform": "translateY(120px)",
    "position": "absolute",
    "bottom": 0,
    "zIndex": 99999,
    "flexDirection": "column",
    "alignItems": "center"
  },
  "fullControls-top": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": "20",
    "flex": 1,
    "paddingTop": 0,
    "paddingRight": "40",
    "paddingBottom": 0,
    "paddingLeft": "40",
    "alignItems": "center"
  },
  "fullControls-center": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "40"
  },
  "fullControls-bottom": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "40",
    "paddingTop": 0,
    "paddingRight": "40",
    "paddingBottom": 0,
    "paddingLeft": "30"
  },
  "fullControls-bottom-right": {
    "flexDirection": "row"
  },
  "video-slider": {
    "zIndex": 100,
    "flex": 1
  }
}

/***/ }),
/* 62 */
/*!***************************************************************************************************!*\
  !*** /Users/lixi/Space/电影模板/pages/movie/player.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--10-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./player.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 63);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_player_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/lixi/Space/电影模板/pages/movie/player.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "active": {
    "color": "#ffffff",
    "boxShadow": "0 2px 6px rgba(228, 63, 66, 0.2)"
  },
  "detail": {
    "backgroundColor": "#f5f5f5"
  },
  "detail-head": {
    "position": "relative",
    "width": 100,
    "height": "400rpx",
    "backgroundColor": "#ffffff"
  },
  "detail-video": {
    "width": 100,
    "height": 100
  },
  "detail-add": {
    "marginTop": "30rpx",
    "marginRight": 0,
    "marginBottom": "30rpx",
    "marginLeft": 0,
    "paddingBottom": "20rpx",
    "backgroundColor": "#FFFFFF"
  },
  "detail-add-head": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "fontSize": "30rpx",
    "height": "50rpx",
    "lineHeight": "50rpx"
  },
  "detail-add-head-item1": {
    "width": "60rpx"
  },
  "detail-add-head-item1-img": {
    "width": 100,
    "height": 100
  },
  "detail-add-head-item2": {
    "paddingLeft": "10rpx",
    "flex": 1
  },
  "detail-add-main": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "detail-add-main-button": {
    "width": "150rpx",
    "marginTop": 0,
    "marginRight": "10rpx",
    "marginBottom": 0,
    "marginLeft": "10rpx",
    "textAlign": "center",
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "fontSize": "30rpx",
    "borderRadius": "40rpx",
    "color": "#666666",
    "backgroundColor": "#f4f4f4"
  },
  "detail-add-main-button1": {
    "color": "#333333",
    "width": 30,
    "height": "50rpx",
    "lineHeight": "50rpx",
    "backgroundColor": "#f4f4f4",
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "textAlign": "center",
    "fontSize": "30rpx",
    "fontWeight": "bold",
    "borderRadius": "10rpx",
    "overflow": "hidden",
    "textOverflow": "ellipsis"
  }
}

/***/ })
/******/ ]);