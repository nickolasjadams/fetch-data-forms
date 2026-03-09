"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * FetchDataForms.js
 *
 * Instantly turn html form elements into asynchronous fetch forms by adding an attribute.
 * 
 * @author Nick Adams
 * @see {@link https://github.com/nickolasjadams/fetch-data-forms|Repository}
 * @license MIT
 * @version 1.0.0
 */
var FetchDataForms = /*#__PURE__*/function () {
  function FetchDataForms(options) {
    _classCallCheck(this, FetchDataForms);
    this.selector = "form[data-fetch]";
    this.submitDisabledDuration = 1500;
    this.recaptcha = {
      version: "v3"
    };
    this.onDone = "";
    this.onFail = "";
    this.onAlways = "";
    this.onBeforeSend = "";
    if (options) {
      if (options.selector) {
        this.selector = options.selector;
      }
      if (options.submitDisabledDuration) {
        this.submitDisabledDuration = options.submitDisabledDuration;
      }
      if (options.recaptcha) {
        this.recaptcha = _objectSpread(_objectSpread({}, this.recaptcha), options.recaptcha);
        if (parseInt(this.recaptcha.version)) {
          this.recaptcha.version = "v" + this.recaptcha.version;
        } else {
          this.recaptcha.version = this.recaptcha.version.toLowerCase();
        }
        if (this.recaptcha.version !== "v3") {
          console.warn("Only reCAPTCHA v3 is supported at this time.");
        }
        if (!this.recaptcha.siteKey) {
          console.warn("reCAPTCHA siteKey must be set.");
        }
      }
    }
    this.forms = document.querySelectorAll(this.selector);
    this.addFormEventListeners();
  }
  return _createClass(FetchDataForms, [{
    key: "addFormEventListeners",
    value: function addFormEventListeners() {
      var _this = this;
      this.forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          var form, data, submitter;
          // console.log(data);
          var _this$prepFormData = _this.prepFormData(this, e);
          var _this$prepFormData2 = _slicedToArray(_this$prepFormData, 3);
          form = _this$prepFormData2[0];
          data = _this$prepFormData2[1];
          submitter = _this$prepFormData2[2];
          if (form.dataset['fetchRecaptcha'] === '') {
            if (typeof window['grecaptcha'] === "undefined") {
              console.warn("reCAPTCHA objects couldn't be found. Have the scripts been loaded?");
            } else {
              window['grecaptcha'].ready(function () {
                window['grecaptcha'].execute(_this.recaptcha.siteKey, {
                  action: 'submit'
                }).then(function (token) {
                  // populate the hidden input if it exists
                  var recaptchaInput = form.querySelector("[name='recaptcha_token']");
                  if (recaptchaInput) recaptchaInput.value = token;

                  // also put it in the data object
                  data.set('recaptcha_token', token);
                  _this.sendXhrRequest(form, data, submitter);
                });
              });
            }
          } else {
            _this.sendXhrRequest(form, data, submitter);
          }
        }, false);
      });
    }
  }, {
    key: "prepFormData",
    value: function prepFormData(form, submissionEvent) {
      this.onDone = window[form.getAttribute('data-fetch-done')];
      this.onFail = window[form.getAttribute('data-fetch-fail')];
      this.onAlways = window[form.getAttribute('data-fetch-always')];
      this.onBeforeSend = window[form.getAttribute('data-fetch-before-send')];
      var submitter = submissionEvent.submitter;
      var formData = new FormData(form, submitter);
      if (submitter) {
        submitter.disabled = "disabled";
      }
      var data = {};
      var _iterator = _createForOfIteratorHelper(formData),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];
          var formElements = document.querySelectorAll("[name='" + key + "']");
          if (formElements.length > 1) {
            // multiple elements with the same 'name' attribute
            var isSubmissionElement = formElements[0].tagName === "INPUT" && formElements[0].type === "submit" || formElements[0].tagName === "BUTTON" && formElements[0].type !== "button";
            var isRadioElement = formElements[0].tagName === "INPUT" && formElements[0].type === "radio";
            if (isSubmissionElement) {
              // Make scalar because only one element can submit the form
              data[key] = formData.get(key);
            } else if (isRadioElement) {
              // Make scalar because only one item is selected
              data[key] = formData.get(key);
            } else {
              // Make an array because this is assumed to be checkboxes
              data[key] = formData.getAll(key);
            }
          } else {
            var isMultipleSelect = formElements[0].tagName === "SELECT" && formElements[0].attributes["multiple"];
            var isMultipleFiles = formElements[0].tagName === "INPUT" && formElements[0].type === "file" && formElements[0].attributes["multiple"];
            if (isMultipleSelect || isMultipleFiles) {
              // Make an array because multiple values are assumed available
              data[key] = formData.getAll(key);
            } else {
              data[key] = formData.get(key);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var rData = new FormData();
      Object.entries(data).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        // arrays
        if (Array.isArray(value)) {
          // console.log("An array was submitted with this request.")
          value.forEach(function (item) {
            rData.append(key, item);
            // console.log(item);
          });
        } else {
          // everything else
          rData.append(key, value);
          // console.log(value);
        }

        // this.printFormData(rData);
      });
      return [form, rData, submitter];
    }
  }, {
    key: "sendXhrRequest",
    value: function sendXhrRequest(form, data, submitter) {
      var _this = this;
      // console.table(data);

      var fetchOptions = {
        method: form.method
      };
      if (form.method.toUpperCase() === "GET") {
        var params = new URLSearchParams();
        var _iterator2 = _createForOfIteratorHelper(data.entries()),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var pair = _step2.value;
            params.append(pair[0], pair[1]);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        form.action += (form.action.includes('?') ? '&' : '?') + params.toString();
      } else {
        // POST
        fetchOptions.body = data;
      }
      if (submitter) {
        setTimeout(function () {
          submitter.removeAttribute("disabled");
        }, _this.submitDisabledDuration);
        if (typeof _this.onBeforeSend === "function") _this.onBeforeSend();
      }
      fetch(form.action, fetchOptions).then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
          var responseData, _responseData$respons, id, errors, _responseData$respons2, _errors;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!response.ok) {
                  _context.next = 14;
                  break;
                }
                _context.next = 3;
                return response.json();
              case 3:
                responseData = _context.sent;
                form.reset();
                document.querySelectorAll("[data-fetch-errors]").forEach(function (element) {
                  element.innerHTML = "";
                });
                if (typeof _this.onDone === "function") _this.onDone(responseData);
                if (form.id) {
                  id = form.id.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase();
                  form.dispatchEvent(new CustomEvent(id + "-submit", {
                    detail: responseData
                  }));
                }
                errors = responseData.errors || ((_responseData$respons = responseData.responseJSON) === null || _responseData$respons === void 0 ? void 0 : _responseData$respons.errors);
                form.querySelectorAll("[data-fetch-errors]").forEach(function (errorElement) {
                  errorElement.innerHTML = "";
                });
                if (errors) {
                  Object.entries(errors).forEach(function (_ref4) {
                    var _ref5 = _slicedToArray(_ref4, 2),
                      key = _ref5[0],
                      value = _ref5[1];
                    var messages = value['messages'];
                    var errorElement = form.querySelector("[data-fetch-errors=\"".concat(key, "\"]"));
                    if (errorElement) {
                      messages.forEach(function (message) {
                        errorElement.insertAdjacentHTML("afterbegin", "<div>".concat(message, "</div>"));
                      });
                    }
                  });
                }
                if (typeof _this.onFail === "function") _this.onFail(responseData);
                _context.next = 21;
                break;
              case 14:
                _context.next = 16;
                return response.json();
              case 16:
                responseData = _context.sent;
                _errors = responseData.errors || ((_responseData$respons2 = responseData.responseJSON) === null || _responseData$respons2 === void 0 ? void 0 : _responseData$respons2.errors);
                form.querySelectorAll("[data-fetch-errors]").forEach(function (errorElement) {
                  errorElement.innerHTML = "";
                });
                if (_errors) {
                  Object.entries(_errors).forEach(function (_ref6) {
                    var _ref7 = _slicedToArray(_ref6, 2),
                      key = _ref7[0],
                      value = _ref7[1];
                    var messages = value['messages'];
                    var errorElement = form.querySelector("[data-fetch-errors=\"".concat(key, "\"]"));
                    if (errorElement) {
                      messages.forEach(function (message) {
                        errorElement.insertAdjacentHTML("afterbegin", "<div>".concat(message, "</div>"));
                      });
                    }
                  });
                }
                if (typeof _this.onFail === "function") _this.onFail(responseData);
              case 21:
                return _context.abrupt("return", responseData);
              case 22:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }()).then(function (data) {
        // console.log(data);
        if (typeof _this.onAlways === "function") _this.onAlways(data);
      }).catch(function (error) {
        if (typeof _this.onFail === "function") _this.onFail(error);
      });
    }
  }, {
    key: "printFormData",
    value: function printFormData(formData) {
      var _iterator3 = _createForOfIteratorHelper(formData.entries()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var pair = _step3.value;
          if (_typeof(pair[1]) === "object") {
            console.log(pair[0]);
            console.log(pair[1]);
            console.log(JSON.stringify(pair[1], null, 4));
          } else {
            console.log(pair[0] + ', ' + pair[1]);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);
}();
