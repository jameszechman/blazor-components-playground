function D(n, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e);
  }
}
function f(n) {
  return function(t) {
    if (Array.isArray(t)) return h(t);
  }(n) || function(t) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
  }(n) || function(t, i) {
    if (t) {
      if (typeof t == "string") return h(t, i);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
      if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return h(t, i);
    }
  }(n) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function h(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var i = 0, e = new Array(t); i < t; i++) e[i] = n[i];
  return e;
}
var C, g, l, m, A, L = (C = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], g = function() {
  function n(e) {
    var o = e.targetModal, a = e.triggers, r = a === void 0 ? [] : a, c = e.onShow, s = c === void 0 ? function() {
    } : c, d = e.onClose, u = d === void 0 ? function() {
    } : d, v = e.openTrigger, T = v === void 0 ? "data-micromodal-trigger" : v, b = e.closeTrigger, S = b === void 0 ? "data-micromodal-close" : b, y = e.openClass, F = y === void 0 ? "is-open" : y, p = e.disableScroll, O = p !== void 0 && p, w = e.disableFocus, B = w !== void 0 && w, E = e.awaitCloseAnimation, I = E !== void 0 && E, k = e.awaitOpenAnimation, j = k !== void 0 && k, M = e.debugMode, x = M !== void 0 && M;
    (function(K, N) {
      if (!(K instanceof N)) throw new TypeError("Cannot call a class as a function");
    })(this, n), this.modal = typeof o == "string" ? document.getElementById(o) : o, this.config = { debugMode: x, disableScroll: O, openTrigger: T, closeTrigger: S, openClass: F, onShow: s, onClose: u, awaitCloseAnimation: I, awaitOpenAnimation: j, disableFocus: B }, r.length > 0 && this.registerTriggers.apply(this, f(r)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  var t, i;
  return t = n, (i = [{ key: "registerTriggers", value: function() {
    for (var e = this, o = arguments.length, a = new Array(o), r = 0; r < o; r++) a[r] = arguments[r];
    a.filter(Boolean).forEach(function(c) {
      c.addEventListener("click", function(s) {
        return e.showModal(s);
      });
    });
  } }, { key: "showModal", value: function() {
    var e = this, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
      var a = function r() {
        e.modal.removeEventListener("animationend", r, !1), e.setFocusToFirstNode();
      };
      this.modal.addEventListener("animationend", a, !1);
    } else this.setFocusToFirstNode();
    this.config.onShow(this.modal, this.activeElement, o);
  } }, { key: "closeModal", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, o = this.modal;
    if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e), this.config.awaitCloseAnimation) {
      var a = this.config.openClass;
      this.modal.addEventListener("animationend", function r() {
        o.classList.remove(a), o.removeEventListener("animationend", r, !1);
      }, !1);
    } else o.classList.remove(this.config.openClass);
  } }, { key: "closeModalByIdOrElement", value: function(e) {
    this.modal = typeof e == "string" ? document.getElementById(e) : e, this.modal && this.closeModal();
  } }, { key: "scrollBehaviour", value: function(e) {
    if (this.config.disableScroll) {
      var o = document.querySelector("body");
      switch (e) {
        case "enable":
          Object.assign(o.style, { overflow: "" });
          break;
        case "disable":
          Object.assign(o.style, { overflow: "hidden" });
      }
    }
  } }, { key: "addEventListeners", value: function() {
    this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown);
  } }, { key: "removeEventListeners", value: function() {
    this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown);
  } }, { key: "onClick", value: function(e) {
    (e.target.hasAttribute(this.config.closeTrigger) || e.target.parentNode.hasAttribute(this.config.closeTrigger)) && (e.preventDefault(), e.stopPropagation(), this.closeModal(e));
  } }, { key: "onKeydown", value: function(e) {
    e.keyCode === 27 && this.closeModal(e), e.keyCode === 9 && this.retainFocus(e);
  } }, { key: "getFocusableNodes", value: function() {
    var e = this.modal.querySelectorAll(C);
    return Array.apply(void 0, f(e));
  } }, { key: "setFocusToFirstNode", value: function() {
    var e = this;
    if (!this.config.disableFocus) {
      var o = this.getFocusableNodes();
      if (o.length !== 0) {
        var a = o.filter(function(r) {
          return !r.hasAttribute(e.config.closeTrigger);
        });
        a.length > 0 && a[0].focus(), a.length === 0 && o[0].focus();
      }
    }
  } }, { key: "retainFocus", value: function(e) {
    var o = this.getFocusableNodes();
    if (o.length !== 0) if (o = o.filter(function(r) {
      return r.offsetParent !== null;
    }), this.modal.contains(document.activeElement)) {
      var a = o.indexOf(document.activeElement);
      e.shiftKey && a === 0 && (o[o.length - 1].focus(), e.preventDefault()), !e.shiftKey && o.length > 0 && a === o.length - 1 && (o[0].focus(), e.preventDefault());
    } else o[0].focus();
  } }]) && D(t.prototype, i), n;
}(), l = null, m = function(n) {
  if (typeof id == "string" ? !document.getElementById(n) : !n) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(n, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(n, '"></div>')), !1;
}, A = function(n, t) {
  if (function(e) {
    e.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'));
  }(n), !t) return !0;
  for (var i in t) m(i);
  return !0;
}, { init: function(n) {
  var t = Object.assign({}, { openTrigger: "data-micromodal-trigger" }, n), i = f(document.querySelectorAll("[".concat(t.openTrigger, "]"))), e = function(r, c) {
    var s = [];
    return r.forEach(function(d) {
      var u = d.attributes[c].value;
      s[u] === void 0 && (s[u] = []), s[u].push(d);
    }), s;
  }(i, t.openTrigger);
  if (t.debugMode !== !0 || A(i, e) !== !1) for (var o in e) {
    var a = e[o];
    t.targetModal = o, t.triggers = f(a), l = new g(t);
  }
}, show: function(n, t) {
  var i = t || {};
  i.targetModal = n, i.debugMode === !0 && m(n) === !1 || (l && l.removeEventListeners(), (l = new g(i)).showModal());
}, close: function(n) {
  n ? l.closeModalByIdOrElement(n) : l.closeModal();
} });
typeof window < "u" && (window.MicroModal = L);
console.log("Initializing Larsa Blazor JS");
window.LarsaComponents = {
  initMicroModal: function(n = {}) {
    L.init(n), console.log("MicroModal initialized with options:", n);
  }
};
