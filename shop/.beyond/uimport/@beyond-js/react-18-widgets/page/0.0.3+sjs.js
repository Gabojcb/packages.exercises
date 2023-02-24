{"code":"System.register([\"@beyond-js/kernel@0.1.8/bundle\",\"react@18.2.0\",\"scheduler@0.23.0\",\"react-dom@18.2.0\",\"react-dom@18.2.0/client\",\"@beyond-js/kernel@0.1.8/core\",\"@beyond-js/widgets@0.1.3/render\",\"@beyond-js/kernel@0.1.8/styles\",\"@beyond-js/widgets@0.1.3/controller\",\"@beyond-js/react-18-widgets@0.0.3/base\",\"@beyond-js/kernel@0.1.8/routing\",\"@beyond-js/widgets@0.1.3/routing\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.8\"],[\"react\",\"18.2.0\"],[\"scheduler\",\"0.23.0\"],[\"react-dom\",\"18.2.0\"],[\"@beyond-js/widgets\",\"0.1.3\"],[\"@beyond-js/react-18-widgets\",\"0.0.3\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/controller', dep), dep => dependencies.set('@beyond-js/react-18-widgets@0.0.3/base', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/routing', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/routing', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/@beyond-js/react-18-widgets/page.0.0.3.js\nvar page_0_0_3_exports = {};\n__export(page_0_0_3_exports, {\n  PageReactWidgetController: () => PageReactWidgetController,\n  __beyond_pkg: () => __beyond_pkg,\n  hmr: () => hmr\n});\nmodule.exports = __toCommonJS(page_0_0_3_exports);\n\n// node_modules/@beyond-js/react-18-widgets/page/page.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.8/bundle\"), 0);\nvar dependency_1 = __toESM(require(\"@beyond-js/react-18-widgets@0.0.3/base\"), 0);\nvar dependency_2 = __toESM(require(\"@beyond-js/widgets@0.1.3/routing\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/react-18-widgets@0.0.3/page\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([[\"@beyond-js/react-18-widgets/base\", dependency_1], [\"@beyond-js/widgets/routing\", dependency_2]]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./page\", {\n  hash: 2113815253,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.PageReactWidgetController = void 0;\n    var _base = require2(\"@beyond-js/react-18-widgets/base\");\n    var _routing = require2(\"@beyond-js/widgets/routing\");\n    class PageReactWidgetController2 extends _base.ReactWidgetController {\n      #uri;\n      get uri() {\n        return this.#uri;\n      }\n      mount() {\n        return super.mount({\n          uri: this.#uri\n        });\n      }\n      async initialise() {\n        this.#uri = new _routing.PageURI({\n          widget: this.widget\n        });\n        await super.initialise();\n      }\n    }\n    exports.PageReactWidgetController = PageReactWidgetController2;\n  }\n});\n__pkg.exports.descriptor = [{\n  \"im\": \"./page\",\n  \"from\": \"PageReactWidgetController\",\n  \"name\": \"PageReactWidgetController\"\n}];\nvar PageReactWidgetController;\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {\n  (require2 || prop === \"PageReactWidgetController\") && (PageReactWidgetController = require2 ? require2(\"./page\").PageReactWidgetController : value);\n};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvcGFnZS4wLjAuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvcGFnZS9fX3NvdXJjZXMvcGFnZS9wYWdlLnRzIl0sIm5hbWVzIjpbInBhZ2VfMF8wXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfYmFzZSIsInJlcXVpcmUyIiwiX3JvdXRpbmciLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyMiIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInVyaSIsIm1vdW50IiwiaW5pdGlhbGlzZSIsIlBhZ2VVUkkiLCJ3aWRnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFRLEtBQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLFFBQUEsR0FBQUQsUUFBQTtJQUVpQixNQUNGRSwwQkFBQSxTQUFrQ0gsS0FBQSxDQUFBSSxxQkFBQSxDQUFxQjtNQUNsRSxDQUFBQyxHQUFBO01BQ0EsSUFBSUEsSUFBQSxFQUFHO1FBQ0gsT0FBTyxLQUFLLENBQUFBLEdBQUE7TUFDaEI7TUFFQUMsTUFBQSxFQUFLO1FBQ0QsT0FBTyxNQUFNQSxLQUFBLENBQU07VUFBQ0QsR0FBQSxFQUFLLEtBQUssQ0FBQUE7UUFBSSxDQUFDO01BQ3ZDO01BRUEsTUFBTUUsV0FBQSxFQUFVO1FBQ1osS0FBSyxDQUFBRixHQUFBLEdBQU8sSUFBSUgsUUFBQSxDQUFBTSxPQUFBLENBQVE7VUFBQ0MsTUFBQSxFQUFhLEtBQUtBO1FBQU0sQ0FBQztRQUNsRCxNQUFNLE1BQU1GLFVBQUEsRUFBVTtNQUMxQjs7SUFDSFQsT0FBQSxDQUFBSix5QkFBQSxHQUFBUywwQkFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2JleW9uZC9vdXQifQ==","dependencies":[{"id":"@beyond-js/kernel@0.1.8/bundle","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\kernel"},{"id":"react@18.2.0","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\react"},{"id":"scheduler@0.23.0","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\scheduler"},{"id":"react-dom@18.2.0","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\react-dom"},{"id":"react-dom@18.2.0/client","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\react-dom"},{"id":"@beyond-js/kernel@0.1.8/core","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.3/render","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\widgets"},{"id":"@beyond-js/kernel@0.1.8/styles","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.3/controller","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\widgets"},{"id":"@beyond-js/react-18-widgets@0.0.3/base","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\react-18-widgets"},{"id":"@beyond-js/kernel@0.1.8/routing","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.3/routing","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\widgets"}],"warnings":[]}