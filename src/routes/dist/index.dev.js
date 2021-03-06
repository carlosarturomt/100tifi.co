"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Header = _interopRequireDefault(require("../templates/Header"));

var _Home = _interopRequireDefault(require("../pages/Home"));

var _Footer = _interopRequireDefault(require("../templates/Footer"));

var _Character = _interopRequireDefault(require("../pages/Character"));

var _Error = _interopRequireDefault(require("../pages/Error404"));

var _getHash = _interopRequireDefault(require("../utils/getHash"));

var _resolveRoutes = _interopRequireDefault(require("../utils/resolveRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = {
  "/": _Home["default"],
  "/:id": _Character["default"],
  "/Contact": "Contact",
  "/:pages": _Home["default"]
};

var router = function router() {
  var header, content, footer, hash, route, render;
  return regeneratorRuntime.async(function router$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          header = null || document.getElementById("header");
          content = null || document.getElementById("content");
          footer = null || document.getElementById("footer");
          hash = (0, _getHash["default"])();
          _context.next = 6;
          return regeneratorRuntime.awrap((0, _resolveRoutes["default"])(hash));

        case 6:
          route = _context.sent;
          render = routes[route] ? routes[route] : _Error["default"];
          _context.next = 10;
          return regeneratorRuntime.awrap((0, _Header["default"])());

        case 10:
          header.innerHTML = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(render());

        case 13:
          content.innerHTML = _context.sent;
          _context.next = 16;
          return regeneratorRuntime.awrap((0, _Footer["default"])());

        case 16:
          footer.innerHTML = _context.sent;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = router;
exports["default"] = _default;