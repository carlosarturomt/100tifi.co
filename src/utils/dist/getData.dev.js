"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API = 'https://rickandmortyapi.com/api/character/';

var getData = function getData(id) {
  var apiURL, response, data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apiURL = id ? "".concat(API).concat(id) : API;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(apiURL));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          console.log('Fetch Error', _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
};

var _default = getData;
exports["default"] = _default;