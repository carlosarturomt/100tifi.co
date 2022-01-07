"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var resolveRoutes = function resolveRoutes(route) {
  if (route != 'about') {
    if (route === '/') {
      return route;
    } else if (route.length <= 3) {
      return '/:id';
    } else if (route.includes('page')) {
      return '/:pages';
    }
  }

  return "/".concat(route);
};

var _default = resolveRoutes;
exports["default"] = _default;