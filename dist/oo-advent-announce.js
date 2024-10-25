"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OOAdventAnnounce = void 0;
var _react = _interopRequireDefault(require("react"));
var _common = _interopRequireDefault(require("./locales/ar/common.json"));
var _common2 = _interopRequireDefault(require("./locales/cs/common.json"));
var _common3 = _interopRequireDefault(require("./locales/de/common.json"));
var _common4 = _interopRequireDefault(require("./locales/el/common.json"));
var _common5 = _interopRequireDefault(require("./locales/en/common.json"));
var _common6 = _interopRequireDefault(require("./locales/es/common.json"));
var _common7 = _interopRequireDefault(require("./locales/fr/common.json"));
var _common8 = _interopRequireDefault(require("./locales/hi/common.json"));
var _common9 = _interopRequireDefault(require("./locales/hy/common.json"));
var _common10 = _interopRequireDefault(require("./locales/it/common.json"));
var _common11 = _interopRequireDefault(require("./locales/ja/common.json"));
var _common12 = _interopRequireDefault(require("./locales/pt/common.json"));
var _common13 = _interopRequireDefault(require("./locales/ru/common.json"));
var _common14 = _interopRequireDefault(require("./locales/sr/common.json"));
var _common15 = _interopRequireDefault(require("./locales/zh/common.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var OOAdventAnnounce = exports.OOAdventAnnounce = function OOAdventAnnounce(_ref) {
  var locale = _ref.locale;
  var currentLocale = locale || "en";
  var translations = {
    ar: _common["default"],
    cs: _common2["default"],
    de: _common3["default"],
    el: _common4["default"],
    en: _common5["default"],
    es: _common6["default"],
    fr: _common7["default"],
    hi: _common8["default"],
    hy: _common9["default"],
    it: _common10["default"],
    ja: _common11["default"],
    pt: _common12["default"],
    ru: _common13["default"],
    sr: _common14["default"],
    zh: _common15["default"]
  };
  var translation = function translation(key) {
    return translations[currentLocale === "zh-hans" ? "zh" : currentLocale === "pt-br" ? "pt" : currentLocale][key] || translations.en[key];
  };
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: "oo-advent-announce ".concat(currentLocale),
    href: translation("AdventAnnounceLink")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "oo-advent-announce-text"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "test2 2 2"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "oo-advent-announce-text-desktop",
    dangerouslySetInnerHTML: {
      __html: translation("AdventAnnounceDesktop")
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "oo-advent-announce-text-mobile",
    dangerouslySetInnerHTML: {
      __html: translation("AdventAnnounceMobile")
    }
  })));
};