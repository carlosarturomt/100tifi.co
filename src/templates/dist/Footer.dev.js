"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("../utils/getData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = function Footer() {
  var data, ancles, i, a, view;
  return regeneratorRuntime.async(function Footer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _getData["default"])());

        case 2:
          data = _context.sent;
          ancles = [];

          for (i = 1; i <= data.info.pages; i++) {
            ancles.push(i);
          }

          a = 0;
          view = "\n  <p class=\"center\" style=\"padding-top:50px;\">Pagination</p>\n  <ul class=\"paginationFlex\">\n    ".concat(ancles.map(function () {
            return "\n       <li class=\"\"><a href=\"#/?page=".concat(++a, "/\">").concat(a, "</a</li>\n      ");
          }).join(''), "\n  </ul>\n  ");
          return _context.abrupt("return", view);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = Footer;
exports["default"] = _default;