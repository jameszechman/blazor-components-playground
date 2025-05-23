function D(o, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(o, e.key, e);
  }
}
function f(o) {
  return function(t) {
    if (Array.isArray(t)) return g(t);
  }(o) || function(t) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
  }(o) || function(t, i) {
    if (t) {
      if (typeof t == "string") return g(t, i);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
      if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return g(t, i);
    }
  }(o) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function g(o, t) {
  (t == null || t > o.length) && (t = o.length);
  for (var i = 0, e = new Array(t); i < t; i++) e[i] = o[i];
  return e;
}
var A, v, l, m, L, h = (A = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], v = function() {
  function o(e) {
    var n = e.targetModal, a = e.triggers, r = a === void 0 ? [] : a, c = e.onShow, s = c === void 0 ? function() {
    } : c, d = e.onClose, u = d === void 0 ? function() {
    } : d, y = e.openTrigger, S = y === void 0 ? "data-micromodal-trigger" : y, b = e.closeTrigger, T = b === void 0 ? "data-micromodal-close" : b, p = e.openClass, O = p === void 0 ? "is-open" : p, w = e.disableScroll, F = w !== void 0 && w, E = e.disableFocus, B = E !== void 0 && E, k = e.awaitCloseAnimation, I = k !== void 0 && k, M = e.awaitOpenAnimation, j = M !== void 0 && M, C = e.debugMode, x = C !== void 0 && C;
    (function(K, N) {
      if (!(K instanceof N)) throw new TypeError("Cannot call a class as a function");
    })(this, o), this.modal = typeof n == "string" ? document.getElementById(n) : n, this.config = { debugMode: x, disableScroll: F, openTrigger: S, closeTrigger: T, openClass: O, onShow: s, onClose: u, awaitCloseAnimation: I, awaitOpenAnimation: j, disableFocus: B }, r.length > 0 && this.registerTriggers.apply(this, f(r)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  var t, i;
  return t = o, (i = [{ key: "registerTriggers", value: function() {
    for (var e = this, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    a.filter(Boolean).forEach(function(c) {
      c.addEventListener("click", function(s) {
        return e.showModal(s);
      });
    });
  } }, { key: "showModal", value: function() {
    var e = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
      var a = function r() {
        e.modal.removeEventListener("animationend", r, !1), e.setFocusToFirstNode();
      };
      this.modal.addEventListener("animationend", a, !1);
    } else this.setFocusToFirstNode();
    this.config.onShow(this.modal, this.activeElement, n);
  } }, { key: "closeModal", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = this.modal;
    if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e), this.config.awaitCloseAnimation) {
      var a = this.config.openClass;
      this.modal.addEventListener("animationend", function r() {
        n.classList.remove(a), n.removeEventListener("animationend", r, !1);
      }, !1);
    } else n.classList.remove(this.config.openClass);
  } }, { key: "closeModalByIdOrElement", value: function(e) {
    this.modal = typeof e == "string" ? document.getElementById(e) : e, this.modal && this.closeModal();
  } }, { key: "scrollBehaviour", value: function(e) {
    if (this.config.disableScroll) {
      var n = document.querySelector("body");
      switch (e) {
        case "enable":
          Object.assign(n.style, { overflow: "" });
          break;
        case "disable":
          Object.assign(n.style, { overflow: "hidden" });
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
    var e = this.modal.querySelectorAll(A);
    return Array.apply(void 0, f(e));
  } }, { key: "setFocusToFirstNode", value: function() {
    var e = this;
    if (!this.config.disableFocus) {
      var n = this.getFocusableNodes();
      if (n.length !== 0) {
        var a = n.filter(function(r) {
          return !r.hasAttribute(e.config.closeTrigger);
        });
        a.length > 0 && a[0].focus(), a.length === 0 && n[0].focus();
      }
    }
  } }, { key: "retainFocus", value: function(e) {
    var n = this.getFocusableNodes();
    if (n.length !== 0) if (n = n.filter(function(r) {
      return r.offsetParent !== null;
    }), this.modal.contains(document.activeElement)) {
      var a = n.indexOf(document.activeElement);
      e.shiftKey && a === 0 && (n[n.length - 1].focus(), e.preventDefault()), !e.shiftKey && n.length > 0 && a === n.length - 1 && (n[0].focus(), e.preventDefault());
    } else n[0].focus();
  } }]) && D(t.prototype, i), o;
}(), l = null, m = function(o) {
  if (typeof id == "string" ? !document.getElementById(o) : !o) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(o, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(o, '"></div>')), !1;
}, L = function(o, t) {
  if (function(e) {
    e.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'));
  }(o), !t) return !0;
  for (var i in t) m(i);
  return !0;
}, { init: function(o) {
  var t = Object.assign({}, { openTrigger: "data-micromodal-trigger" }, o), i = f(document.querySelectorAll("[".concat(t.openTrigger, "]"))), e = function(r, c) {
    var s = [];
    return r.forEach(function(d) {
      var u = d.attributes[c].value;
      s[u] === void 0 && (s[u] = []), s[u].push(d);
    }), s;
  }(i, t.openTrigger);
  if (t.debugMode !== !0 || L(i, e) !== !1) for (var n in e) {
    var a = e[n];
    t.targetModal = n, t.triggers = f(a), l = new v(t);
  }
}, show: function(o, t) {
  var i = t || {};
  i.targetModal = o, i.debugMode === !0 && m(o) === !1 || (l && l.removeEventListeners(), (l = new v(i)).showModal());
}, close: function(o) {
  o ? l.closeModalByIdOrElement(o) : l.closeModal();
} });
typeof window < "u" && (window.MicroModal = h);
console.log("Initializing Larsa Blazor JS");
window.LarsaComponents = {
  initMicroModal: function(o = {}) {
    h.init(o);
  },
  openModal: function(o, t, i = {}) {
    h.show(o, {
      ...i,
      onShow: () => {
        t.invokeMethodAsync("HandleOnOpen");
      },
      onClose: () => {
        t.invokeMethodAsync("HandleOnClose");
      }
    });
  },
  closeModal: function(o, t) {
    h.close(o);
  }
};
