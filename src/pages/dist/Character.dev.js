"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getHash = _interopRequireDefault(require("../utils/getHash"));

var _getData = _interopRequireDefault(require("../utils/getData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Character = function Character() {
  var id, character, view;
  return regeneratorRuntime.async(function Character$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = (0, _getHash["default"])();
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _getData["default"])(id));

        case 3:
          character = _context.sent;
          view = "\n    <div class=\"Characters__inner\">\n      <article class=\"Characters__card\">\n        <img src=\"".concat(character.image, "\" alt=\"").concat(character.name, "\">\n        <h2>").concat(character.name, "</h2>\n      </article>\n      <article class=\"Characters__card\">\n        <h3>Episodes: <span>").concat(character.episode.length, "</span></h3>\n        <h3>Status: <span>").concat(character.status, "</span></h3>\n        <h3>Species: <span>").concat(character.species, "</span></h3>\n        <h3>Gender: <span>").concat(character.gender, "</span></h3>\n        <h3>Origin: <span>").concat(character.origin.name, "</span></h3>\n        <h3>Last Location: <span>").concat(character.location.name, "</span></h3>\n      </article>\n    </div>\n    <div class=\"center\">\n      <ul class=\"pagination\">\n        <li class=\"\"><a href=\"#/").concat(character.id - 1, "/\"> < </a></li>\n        <li class=\"select\"><a href=\"#/").concat(character.id, "/\">").concat(character.id, "</a></li>\n        <li class=\"\"><a href=\"#/").concat(character.id + 1, "/\"> > </a></li>\n      </ul>\n    </div>\n  ");
          return _context.abrupt("return", view);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = Character;
exports["default"] = _default;