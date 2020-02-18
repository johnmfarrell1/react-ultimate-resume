"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeveloperProfile = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _theme = require("../utils/styles/theme/theme");

var _banner = require("./banner/banner");

var _cards = require("./cards/cards");

var _profile_styles = require("./profile_styles");

var _en = _interopRequireDefault(require("../i18n/en.json"));

var _fr = _interopRequireDefault(require("../i18n/fr.json"));

var _technologies_reducer = require("../store/technologies/technologies_reducer");

var _contexts = require("../utils/context/contexts");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var messages = {
  en: _en.default,
  fr: _fr.default
};
var useStyles = (0, _reactJss.createUseStyles)(_profile_styles.styles);
var DEFAULT_OPTIONS = Object.freeze({
  locale: 'en'
});
var DEFAULT_OBJECT = {};

var DEFAULT_FUNCTION = function DEFAULT_FUNCTION() {};

var DeveloperProfileComponent = function DeveloperProfileComponent(_ref) {
  var _options$customizatio;

  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? DEFAULT_OBJECT : _ref$data,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? DEFAULT_OBJECT : _ref$options,
      _ref$onEdit = _ref.onEdit,
      onEditProps = _ref$onEdit === void 0 ? DEFAULT_FUNCTION : _ref$onEdit,
      _ref$onCustomizationC = _ref.onCustomizationChanged,
      onCustomizationChanged = _ref$onCustomizationC === void 0 ? DEFAULT_FUNCTION : _ref$onCustomizationC,
      _ref$isEditing = _ref.isEditing,
      isEditing = _ref$isEditing === void 0 ? false : _ref$isEditing,
      _ref$onFilesUpload = _ref.onFilesUpload,
      onFilesUpload = _ref$onFilesUpload === void 0 ?
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", // eslint-disable-next-line no-undef
            fetch('https://api.thecatapi.com/v1/images/search', {
              headers: {}
            }).then(function (res) {
              return res.json();
            }).then(function (results) {
              var _results$;

              return results === null || results === void 0 ? void 0 : (_results$ = results[0]) === null || _results$ === void 0 ? void 0 : _results$.url;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })) : _ref$onFilesUpload,
      ActionButtons = _ref.ActionButtons,
      BeforeCards = _ref.BeforeCards;
  var apiKeys = options.apiKeys,
      endpoints = options.endpoints;
  var classes = useStyles(_profile_styles.styles);
  var onEdit = (0, _react.useCallback)(function (newData) {
    if (typeof onEditProps === 'function') {
      onEditProps(newData);
    }
  }, []);
  var store = {
    technologies: (0, _react.useReducer)(_technologies_reducer.technologiesReducer, _technologies_reducer.technologiesInitialState)
  };
  var context = (0, _react.useMemo)(function () {
    return {
      data: data,
      isEditing: isEditing,
      onEdit: onEdit,
      onCustomizationChanged: onCustomizationChanged,
      onFilesUpload: onFilesUpload,
      apiKeys: {
        giphy: apiKeys === null || apiKeys === void 0 ? void 0 : apiKeys.giphy
      },
      store: store,
      endpoints: {
        devicons: endpoints === null || endpoints === void 0 ? void 0 : endpoints.devicons
      }
    };
  }, [endpoints, apiKeys, data, onEdit, store]);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_contexts.DeveloperProfileContext.Provider, {
    value: context
  }, _react.default.createElement(_banner.Banner, {
    customizationOptions: options.customization
  }, ActionButtons), BeforeCards, _react.default.createElement(_cards.Cards, {
    cardsOrder: (_options$customizatio = options.customization) === null || _options$customizatio === void 0 ? void 0 : _options$customizatio.cardsOrder
  })));
};

var WithProvidersDeveloperProfile = function WithProvidersDeveloperProfile(_ref3) {
  var data = _ref3.data,
      onEdit = _ref3.onEdit,
      onCustomizationChanged = _ref3.onCustomizationChanged,
      _ref3$options = _ref3.options,
      options = _ref3$options === void 0 ? {} : _ref3$options,
      ActionButtons = _ref3.ActionButtons,
      BeforeCards = _ref3.BeforeCards,
      isEditing = _ref3.isEditing;

  var _useMemo = (0, _react.useMemo)(function () {
    return _objectSpread({}, DEFAULT_OPTIONS, {}, options);
  }, [options]),
      locale = _useMemo.locale,
      customization = _useMemo.customization;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      builtTheme = _useState2[0],
      setBuiltTheme = _useState2[1];

  (0, _react.useEffect)(function () {
    var asyncBuild =
    /*#__PURE__*/
    function () {
      var _ref4 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var built;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _theme.buildTheme)(customization === null || customization === void 0 ? void 0 : customization.theme);

              case 2:
                built = _context2.sent;
                console.log('🎨 Built theme:', built);
                setBuiltTheme(built);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function asyncBuild() {
        return _ref4.apply(this, arguments);
      };
    }();

    asyncBuild();
  }, [JSON.stringify(options)]);

  if (!builtTheme) {
    return null;
  }

  return _react.default.createElement(_reactJss.ThemeProvider, {
    theme: builtTheme
  }, _react.default.createElement(_reactIntl.IntlProvider, {
    locale: locale,
    messages: messages[locale] || messages.en,
    defaultLocale: locale
  }, _react.default.createElement(DeveloperProfileComponent, {
    isEditing: isEditing,
    data: data,
    onEdit: onEdit,
    onCustomizationChanged: onCustomizationChanged,
    options: options,
    ActionButtons: ActionButtons,
    BeforeCards: BeforeCards
  })));
};

var DeveloperProfile = WithProvidersDeveloperProfile;
exports.DeveloperProfile = DeveloperProfile;