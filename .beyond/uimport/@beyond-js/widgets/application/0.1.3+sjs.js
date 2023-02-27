{"code":"System.register([\"@beyond-js/kernel@0.1.8/bundle\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.8\"],[\"@beyond-js/widgets\",\"0.1.3\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/@beyond-js/widgets/application.0.1.3.js\nvar application_0_1_3_exports = {};\n__export(application_0_1_3_exports, {\n  __beyond_pkg: () => __beyond_pkg,\n  hmr: () => hmr\n});\nmodule.exports = __toCommonJS(application_0_1_3_exports);\n\n// node_modules/@beyond-js/widgets/application/application.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.8/bundle\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/widgets@0.1.3/application\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./startup\", {\n  hash: 3577862121,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    function createLayout(config) {\n      const {\n        layout\n      } = config;\n      const element = document.createElement(layout ? layout : \"beyond-layout-children\");\n      document.body.append(element);\n    }\n    function startup() {\n      const promises = [];\n      const {\n        specifier\n      } = globalThis.__app_package;\n      promises.push(bimport(`${specifier}/config`));\n      promises.push(bimport(`${specifier}/start`));\n      promises.push(bimport(\"@beyond-js/kernel/core\"));\n      promises.push(bimport(\"@beyond-js/kernel/routing\"));\n      promises.push(bimport(\"@beyond-js/widgets/routing\"));\n      promises.push(bimport(\"@beyond-js/widgets/layout\"));\n      Promise.all(promises).then(([{\n        default: config\n      }]) => createLayout(config)).catch(exc => console.log(exc.stack));\n    }\n    (() => {\n      if (!globalThis.__ssr_fetch) {\n        startup();\n        return;\n      }\n      window.__ssr_fetch.then(ssr => {\n        if (!ssr.json || ssr.json.errors?.length) {\n          console.error(\"Error getting ssr data:\", ssr.json.errors);\n          startup();\n          return;\n        }\n        const promises = [];\n        const {\n          specifier\n        } = globalThis.__app_package;\n        promises.push(bimport(`${specifier}/config`));\n        promises.push(bimport(`${specifier}/start`));\n        promises.push(bimport(\"@beyond-js/widgets/render\"));\n        promises.push(bimport(\"@beyond-js/widgets/layout\"));\n        Promise.all(promises).then(([{\n          default: config\n        },, render, layout]) => {\n          const specs = new Map(ssr.json.widgets.specs);\n          render.widgets.register([...specs.values()]);\n          const instances = ssr.json.widgets.instances;\n          const prerender = render.prerender;\n          instances.forEach(instance => prerender.ssr.push(instance));\n          const lssr = layout.ssr;\n          lssr.data(ssr.json.main, ssr.json.page);\n          createLayout(config);\n        }).catch(exc => console.log(exc.stack));\n      });\n    })();\n  }\n});\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvYXBwbGljYXRpb24uMC4xLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2FwcGxpY2F0aW9uL19fc291cmNlcy9hcHBsaWNhdGlvbi9zdGFydHVwLnRzIl0sIm5hbWVzIjpbImFwcGxpY2F0aW9uXzBfMV8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJjcmVhdGVMYXlvdXQiLCJjb25maWciLCJsYXlvdXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZCIsInN0YXJ0dXAiLCJwcm9taXNlcyIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwicHVzaCIsImJpbXBvcnQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImRlZmF1bHQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsIl9fc3NyX2ZldGNoIiwid2luZG93Iiwic3NyIiwianNvbiIsImVycm9ycyIsImxlbmd0aCIsImVycm9yIiwicmVuZGVyIiwic3BlY3MiLCJNYXAiLCJ3aWRnZXRzIiwicmVnaXN0ZXIiLCJ2YWx1ZXMiLCJpbnN0YW5jZXMiLCJwcmVyZW5kZXIiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJsc3NyIiwiZGF0YSIsIm1haW4iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQTtBQUFBQyxRQUFBLENBQUFELHlCQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS0EsU0FBU08sYUFBYUMsTUFBQSxFQUFXO01BQzdCLE1BQU07UUFBQ0M7TUFBTSxJQUFJRCxNQUFBO01BQ2pCLE1BQU1FLE9BQUEsR0FBVUMsUUFBQSxDQUFTQyxhQUFBLENBQWNILE1BQUEsR0FBU0EsTUFBQSxHQUFTLHdCQUF3QjtNQUNqRkUsUUFBQSxDQUFTRSxJQUFBLENBQUtDLE1BQUEsQ0FBT0osT0FBTztJQUNoQztJQUVBLFNBQVNLLFFBQUEsRUFBTztNQUNaLE1BQU1DLFFBQUEsR0FBMkI7TUFFakMsTUFBTTtRQUFDQztNQUFTLElBQVVDLFVBQUEsQ0FBWUMsYUFBQTtNQUN0Q0gsUUFBQSxDQUFTSSxJQUFBLENBQUtDLE9BQUEsQ0FBUSxHQUFHSixTQUFBLFNBQWtCLENBQUM7TUFDNUNELFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsR0FBR0osU0FBQSxRQUFpQixDQUFDO01BRTNDRCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLHdCQUF3QixDQUFDO01BQy9DTCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDJCQUEyQixDQUFDO01BQ2xETCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDRCQUE0QixDQUFDO01BQ25ETCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDJCQUEyQixDQUFDO01BRWxEQyxPQUFBLENBQVFDLEdBQUEsQ0FBSVAsUUFBUSxFQUNmUSxJQUFBLENBQUssQ0FBQyxDQUFDO1FBQUNDLE9BQUEsRUFBU2pCO01BQU0sQ0FBQyxNQUFNRCxZQUFBLENBQWFDLE1BQU0sQ0FBQyxFQUNsRGtCLEtBQUEsQ0FBTUMsR0FBQSxJQUFPQyxPQUFBLENBQVFDLEdBQUEsQ0FBSUYsR0FBQSxDQUFJRyxLQUFLLENBQUM7SUFDNUM7SUFFQSxDQUFDLE1BQUs7TUFDRixJQUFJLENBQU9aLFVBQUEsQ0FBWWEsV0FBQSxFQUFhO1FBQ2hDaEIsT0FBQSxFQUFPO1FBQ1A7O01BTUVpQixNQUFBLENBQVFELFdBQUEsQ0FBWVAsSUFBQSxDQUFNUyxHQUFBLElBQVk7UUFDeEMsSUFBSSxDQUFDQSxHQUFBLENBQUlDLElBQUEsSUFBUUQsR0FBQSxDQUFJQyxJQUFBLENBQUtDLE1BQUEsRUFBUUMsTUFBQSxFQUFRO1VBQ3RDUixPQUFBLENBQVFTLEtBQUEsQ0FBTSwyQkFBMkJKLEdBQUEsQ0FBSUMsSUFBQSxDQUFLQyxNQUFNO1VBQ3hEcEIsT0FBQSxFQUFPO1VBQ1A7O1FBR0osTUFBTUMsUUFBQSxHQUEyQjtRQUVqQyxNQUFNO1VBQUNDO1FBQVMsSUFBVUMsVUFBQSxDQUFZQyxhQUFBO1FBQ3RDSCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLEdBQUdKLFNBQUEsU0FBa0IsQ0FBQztRQUM1Q0QsUUFBQSxDQUFTSSxJQUFBLENBQUtDLE9BQUEsQ0FBUSxHQUFHSixTQUFBLFFBQWlCLENBQUM7UUFFM0NELFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsMkJBQTJCLENBQUM7UUFDbERMLFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsMkJBQTJCLENBQUM7UUFFbERDLE9BQUEsQ0FBUUMsR0FBQSxDQUFJUCxRQUFRLEVBQUVRLElBQUEsQ0FBSyxDQUFDLENBQUM7VUFBQ0MsT0FBQSxFQUFTakI7UUFBTSxJQUFLOEIsTUFBQSxFQUFRN0IsTUFBTSxNQUFLO1VBRWpFLE1BQU04QixLQUFBLEdBQVEsSUFBSUMsR0FBQSxDQUFJUCxHQUFBLENBQUlDLElBQUEsQ0FBS08sT0FBQSxDQUFRRixLQUFLO1VBQzVDRCxNQUFBLENBQU9HLE9BQUEsQ0FBUUMsUUFBQSxDQUFTLENBQUMsR0FBR0gsS0FBQSxDQUFNSSxNQUFBLEVBQVEsQ0FBQztVQUczQyxNQUFNQyxTQUFBLEdBQVlYLEdBQUEsQ0FBSUMsSUFBQSxDQUFLTyxPQUFBLENBQVFHLFNBQUE7VUFDbkMsTUFBTUMsU0FBQSxHQUFzQlAsTUFBQSxDQUFPTyxTQUFBO1VBQ25DRCxTQUFBLENBQVVFLE9BQUEsQ0FBU0MsUUFBQSxJQUFrQkYsU0FBQSxDQUFVWixHQUFBLENBQUliLElBQUEsQ0FBSzJCLFFBQVEsQ0FBQztVQUdqRSxNQUFNQyxJQUFBLEdBQWlCdkMsTUFBQSxDQUFPd0IsR0FBQTtVQUM5QmUsSUFBQSxDQUFLQyxJQUFBLENBQUtoQixHQUFBLENBQUlDLElBQUEsQ0FBS2dCLElBQUEsRUFBTWpCLEdBQUEsQ0FBSUMsSUFBQSxDQUFLaUIsSUFBSTtVQUN0QzVDLFlBQUEsQ0FBYUMsTUFBTTtRQUN2QixDQUFDLEVBQUVrQixLQUFBLENBQU1DLEdBQUEsSUFBT0MsT0FBQSxDQUFRQyxHQUFBLENBQUlGLEdBQUEsQ0FBSUcsS0FBSyxDQUFDO01BQzFDLENBQUM7SUFDTCxJQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvc2hvcC9vdXQifQ==","dependencies":[{"id":"@beyond-js/kernel@0.1.8/bundle","path":"E:\\workspace\\activities\\shop\\node_modules\\@beyond-js\\kernel"}],"warnings":[]}