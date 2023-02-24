{"code":"System.register([\"@beyond-js/kernel@0.1.8/bundle\",\"@beyond-js/kernel@0.1.8/core\",\"@beyond-js/widgets@0.1.3/render\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.8\"],[\"@beyond-js/widgets\",\"0.1.3\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/render', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/@beyond-js/widgets/layout.0.1.3.js\nvar layout_0_1_3_exports = {};\n__export(layout_0_1_3_exports, {\n  __beyond_pkg: () => __beyond_pkg,\n  hmr: () => hmr,\n  ssr: () => ssr\n});\nmodule.exports = __toCommonJS(layout_0_1_3_exports);\n\n// node_modules/@beyond-js/widgets/layout/layout.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.8/bundle\"), 0);\nvar dependency_1 = __toESM(require(\"@beyond-js/widgets@0.1.3/render\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/widgets@0.1.3/layout\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([[\"@beyond-js/widgets/render\", dependency_1]]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./children\", {\n  hash: 1491145116,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    var _render = require2(\"@beyond-js/widgets/render\");\n    var _ssr = require2(\"./ssr\");\n    let manager;\n    customElements.define(\"beyond-layout-children\", class extends HTMLElement {\n      #layout;\n      #active;\n      connectedCallback() {\n        this.attachShadow({\n          mode: \"open\"\n        });\n        const managed = () => {\n          const start = () => this.#start().catch(exc => console.error(exc.stack));\n          manager.initialised ? start() : manager.ready.then(start);\n        };\n        if (manager) return managed();\n        _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener(\"received\", this.#onssr);\n        const promises = [];\n        promises.push(bimport(\"@beyond-js/widgets/routing\"));\n        promises.push(bimport(\"@beyond-js/kernel/core\"));\n        const {\n          specifier\n        } = globalThis.__app_package;\n        promises.push(bimport(`${specifier}/start`));\n        Promise.all(promises).then(([routing]) => {\n          ({\n            manager\n          } = routing);\n          managed();\n        }).catch(exc => console.log(exc.stack));\n      }\n      #container;\n      get container() {\n        if (this.#container !== void 0) return this.#container;\n        const container = (() => {\n          let parent = this;\n          while (true) {\n            const root = parent.getRootNode();\n            if (root === document) return root;\n            parent = root.host;\n            if (_render.widgets.instances.has(parent)) return parent;\n          }\n        })();\n        if (!container) {\n          console.error(`Widget container of beyond-layout-children not found`);\n          return this.#container = null;\n        }\n        return this.#container = container;\n      }\n      #onssr = () => {\n        _ssr.ssr.removeEventListener(\"received\", this.#onssr);\n        const {\n          container\n        } = this;\n        if (container === null) return;\n        const {\n          element,\n          error\n        } = (() => {\n          const {\n            hierarchy\n          } = _ssr.ssr;\n          if (container === document) return {\n            element: hierarchy[0]\n          };\n          const {\n            localName\n          } = container;\n          const index = hierarchy.indexOf(localName);\n          if (index === -1) return {\n            error: `Container widget of beyond-layout-children \"${localName}\" not found in ssr hierarchy`\n          };\n          if (index === hierarchy.length - 1) return {\n            error: `Container widget of beyond-layout-children \"${localName}\" is the page, not a layout`\n          };\n          return {\n            element: hierarchy[index + 1]\n          };\n        })();\n        if (error) {\n          console.error(error, this);\n          return;\n        }\n        this.shadowRoot.appendChild(document.createElement(element));\n      };\n      #render = () => {\n        this.#layout.children.forEach(child => {\n          const {\n            children\n          } = this.shadowRoot;\n          let element = [...children].find(element2 => element2.getAttribute(\"data-child-id\") === child.id);\n          if (!element) {\n            element = document.createElement(child.element);\n            element.setAttribute(\"data-child-id\", child.id);\n            this.shadowRoot.append(element);\n          }\n          const active = this.#layout.active === child;\n          const controller = element.controller;\n          if (active && element !== this.#active) {\n            this.#active = element;\n            const show = () => {\n              element.removeEventListener(\"controller.initialised\", show);\n              if (element !== this.#active) return;\n              const controller2 = element.controller;\n              if (!controller2) {\n                throw new Error(`Controller of element widget \"${child.element}\" is undefined`);\n              }\n              this.#active === element && controller2.show?.();\n            };\n            controller ? controller.show?.() : element.addEventListener(\"controller.initialised\", show);\n          } else if (!element.hidden && !active) {\n            controller?.hide?.();\n          }\n          element.hidden = !active;\n        });\n      };\n      #hydrate() {\n        const {\n          children\n        } = this.shadowRoot;\n        const layout = this.#layout;\n        if (!children.length) return;\n        if (children.length > 1) {\n          console.error(\"Only one child was expected on beyond-layout-children start\", this);\n          return;\n        }\n        children[0].setAttribute(\"data-child-id\", [...layout.children.keys()][0]);\n      }\n      async #start() {\n        _ssr.ssr.removeEventListener(\"received\", this.#onssr);\n        if (this.container === null) return;\n        const done = layout => {\n          this.#layout = layout;\n          this.#hydrate();\n          this.#layout.on(\"change\", this.#render);\n          this.#render();\n        };\n        if (this.container === document) return done(manager.main);\n        const {\n          localName\n        } = this.container;\n        if (localName === manager.main.element) return done(manager.main);\n        if (!manager.layouts.has(localName)) {\n          console.error(`Layout \"${localName}\" not found`, [...manager.layouts], manager);\n          return;\n        }\n        done(manager.layouts.get(localName));\n      }\n    });\n  }\n});\nims.set(\"./ssr\", {\n  hash: 2390596202,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.ssr = void 0;\n    const ssr2 = new class extends EventTarget {\n      #main;\n      get main() {\n        return this.#main;\n      }\n      #page;\n      get page() {\n        return this.#page;\n      }\n      #layouts;\n      get layouts() {\n        return this.#layouts;\n      }\n      #hierarchy = [];\n      get hierarchy() {\n        return this.#hierarchy;\n      }\n      data(main, page) {\n        this.#main = main;\n        this.#page = page.element;\n        this.#layouts = page.parents;\n        main && this.#hierarchy.push(main);\n        page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));\n        this.#hierarchy.push(page.element);\n        const event = new Event(\"received\");\n        this.dispatchEvent(event);\n      }\n    }();\n    exports.ssr = ssr2;\n  }\n});\n__pkg.exports.descriptor = [{\n  \"im\": \"./ssr\",\n  \"from\": \"ssr\",\n  \"name\": \"ssr\"\n}];\nvar ssr;\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {\n  (require2 || prop === \"ssr\") && (ssr = require2 ? require2(\"./ssr\").ssr : value);\n};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0LjAuMS4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9jaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0L19fc291cmNlcy9sYXlvdXQvc3NyLnRzIl0sIm5hbWVzIjpbImxheW91dF8wXzFfM19leHBvcnRzIiwiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJzc3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3JlbmRlciIsInJlcXVpcmUyIiwiX3NzciIsIm1hbmFnZXIiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkhUTUxFbGVtZW50IiwibGF5b3V0IiwiYWN0aXZlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwibWFuYWdlZCIsInN0YXJ0IiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImluaXRpYWxpc2VkIiwicmVhZHkiLCJ0aGVuIiwicGFnZSIsIm9uc3NyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb21pc2VzIiwicHVzaCIsImJpbXBvcnQiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsIlByb21pc2UiLCJhbGwiLCJyb3V0aW5nIiwibG9nIiwiY29udGFpbmVyIiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0Iiwid2lkZ2V0cyIsImluc3RhbmNlcyIsImhhcyIsIiNvbnNzciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiaGllcmFyY2h5IiwibG9jYWxOYW1lIiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciIsIiNyZW5kZXIiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImZpbmQiLCJlbGVtZW50MiIsImdldEF0dHJpYnV0ZSIsImlkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiY29udHJvbGxlciIsInNob3ciLCJjb250cm9sbGVyMiIsIkVycm9yIiwiaGlkZGVuIiwiaGlkZSIsImh5ZHJhdGUiLCIjaHlkcmF0ZSIsImtleXMiLCIjc3RhcnQiLCJkb25lIiwib24iLCJtYWluIiwibGF5b3V0cyIsImdldCIsInNzcjIiLCJFdmVudFRhcmdldCIsImRhdGEiLCJwYXJlbnRzIiwiY29uY2F0IiwiZXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQ0EsSUFBQVEsT0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsSUFBQSxHQUFBRCxRQUFBO0lBSUEsSUFBSUUsT0FBQTtJQUVKQyxjQUFBLENBQWVDLE1BQUEsQ0FBTywwQkFBMEIsY0FBY0MsV0FBQSxDQUFXO01BQ3JFLENBQUFDLE1BQUE7TUFDQSxDQUFBQyxNQUFBO01BRUFDLGtCQUFBLEVBQWlCO1FBQ2IsS0FBS0MsWUFBQSxDQUFhO1VBQUNDLElBQUEsRUFBTTtRQUFNLENBQUM7UUFFaEMsTUFBTUMsT0FBQSxHQUFVQSxDQUFBLEtBQUs7VUFDakIsTUFBTUMsS0FBQSxHQUFRQSxDQUFBLEtBQU0sS0FBSyxDQUFBQSxLQUFBLEVBQU0s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","dependencies":[{"id":"@beyond-js/kernel@0.1.8/bundle","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/kernel@0.1.8/core","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/widgets@0.1.3/render","path":"C:\\Users\\Gabigol\\Documents\\prueba-beyond\\beyond\\node_modules\\@beyond-js\\widgets"}],"warnings":[]}