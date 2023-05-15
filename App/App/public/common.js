"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 2943:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-8251f533.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-8e692445.js */ 1559);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 2815);
/* harmony import */ var _index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f8d8aa5a.js */ 9286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;

  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }

    const target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };

  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return (0,_index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ 7481:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }

  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};



/***/ }),

/***/ 5777:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-096cf6fd.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;

  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };

  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };

  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);

    if (!keyboardMode) {
      setFocus([]);
    }
  };

  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter(el => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }

        return false;
      });
      setFocus(toFocus);
    }
  };

  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };

  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);

  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };

  return {
    destroy,
    setFocus
  };
};



/***/ }),

/***/ 5921:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-073a0b65.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CoreDelegate),
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 9259);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    var _a;

    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};

const CoreDelegate = () => {
  let BaseComponent;
  let Reference;

  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      var _a, _b;

      BaseComponent = parentElement;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */

      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */

        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */

        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */

        BaseComponent.appendChild(el);
        yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0) {
        const root = BaseComponent.children[0];

        if (!root.classList.contains('ion-delegate-host')) {
          /**
           * If the root element is not a delegate host, it means
           * that the overlay has not been presented yet and we need
           * to create the containing element with the specified classes.
           */
          const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div'); // Add a class to track if the root element was created by the delegate.

          el.classList.add('ion-delegate-host');
          cssClasses.forEach(c => el.classList.add(c)); // Move each child from the original template to the new parent element.

          el.append(...BaseComponent.children); // Append the new parent element to the original parent element.

          BaseComponent.appendChild(el);
        }
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */


      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */

      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      return BaseComponent;
    });

    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();

  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }

    return Promise.resolve();
  };

  return {
    attachViewToDom,
    removeViewFromDom
  };
};



/***/ }),

/***/ 2815:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-029a46f6.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;

    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },

  available() {
    var _a;

    const win = window;
    const engine = this.getEngine();

    if (!engine) {
      return false;
    }
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */


    if (((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.getPlatform()) === 'web') {
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }

    return true;
  },

  isCordova() {
    return !!window.TapticEngine;
  },

  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },

  impact(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },

  notification(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },

  selection() {
    this.impact({
      style: 'light'
    });
  },

  selectionStart() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },

  selectionChanged() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },

  selectionEnd() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }

};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */

const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */


const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};



/***/ }),

/***/ 3081:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-5d0c8232.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   "a": () => (/* binding */ findIonContent),
/* harmony export */   "b": () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   "c": () => (/* binding */ scrollByPoint),
/* harmony export */   "d": () => (/* binding */ disableContentScrollY),
/* harmony export */   "f": () => (/* binding */ findClosestIonContent),
/* harmony export */   "g": () => (/* binding */ getScrollElement),
/* harmony export */   "i": () => (/* binding */ isIonContent),
/* harmony export */   "p": () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   "r": () => (/* binding */ resetContentScrollY),
/* harmony export */   "s": () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 9259);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-c4b11676.js */ 9273);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */

const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;

const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */


const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,_Users_damian_Sample_Code_iv_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }

    return el;
  });

  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */


const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);

  if (customContentHost) {
    return customContentHost;
  }

  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */


const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */


const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }

  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */


const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }

  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */


const printIonContentErrorMsg = el => {
  return (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */


const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */

    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};

const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};



/***/ }),

/***/ 8953:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-da396832.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowBackSharp),
/* harmony export */   "b": () => (/* binding */ closeCircle),
/* harmony export */   "c": () => (/* binding */ chevronBack),
/* harmony export */   "d": () => (/* binding */ closeSharp),
/* harmony export */   "e": () => (/* binding */ searchSharp),
/* harmony export */   "f": () => (/* binding */ checkmarkOutline),
/* harmony export */   "g": () => (/* binding */ ellipseOutline),
/* harmony export */   "h": () => (/* binding */ caretBackSharp),
/* harmony export */   "i": () => (/* binding */ arrowDown),
/* harmony export */   "j": () => (/* binding */ reorderThreeOutline),
/* harmony export */   "k": () => (/* binding */ reorderTwoSharp),
/* harmony export */   "l": () => (/* binding */ chevronDown),
/* harmony export */   "m": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "n": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "o": () => (/* binding */ chevronForward),
/* harmony export */   "p": () => (/* binding */ caretUpSharp),
/* harmony export */   "q": () => (/* binding */ caretDownSharp),
/* harmony export */   "r": () => (/* binding */ removeOutline),
/* harmony export */   "s": () => (/* binding */ searchOutline),
/* harmony export */   "t": () => (/* binding */ close),
/* harmony export */   "u": () => (/* binding */ menuOutline),
/* harmony export */   "v": () => (/* binding */ menuSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/* Ionicons v6.0.4, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 6524:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-4d5544a0.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_DID_CLOSE": () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   "KEYBOARD_DID_OPEN": () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   "copyVisualViewport": () => (/* binding */ copyVisualViewport),
/* harmony export */   "keyboardDidClose": () => (/* binding */ keyboardDidClose),
/* harmony export */   "keyboardDidOpen": () => (/* binding */ keyboardDidOpen),
/* harmony export */   "keyboardDidResize": () => (/* binding */ keyboardDidResize),
/* harmony export */   "resetKeyboardAssist": () => (/* binding */ resetKeyboardAssist),
/* harmony export */   "setKeyboardClose": () => (/* binding */ setKeyboardClose),
/* harmony export */   "setKeyboardOpen": () => (/* binding */ setKeyboardOpen),
/* harmony export */   "startKeyboardAssist": () => (/* binding */ startKeyboardAssist),
/* harmony export */   "trackViewportChanges": () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */

const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};

const startKeyboardAssist = win => {
  startNativeListeners(win);

  if (!win.visualViewport) {
    return;
  }

  currentVisualViewport = copyVisualViewport(win.visualViewport);

  win.visualViewport.onresize = () => {
    trackViewportChanges(win);

    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */


const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};

const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};

const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */


const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */


const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */


const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */


const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */


const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */


const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */


const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};



/***/ }),

/***/ 3963:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-33ffec25.js */ 2286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */

const createKeyboardController = keyboardChangeCallback => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;

  const init = () => {
    keyboardWillShowHandler = () => {
      keyboardVisible = true;
      if (keyboardChangeCallback) keyboardChangeCallback(true);
    };

    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      if (keyboardChangeCallback) keyboardChangeCallback(false);
    };

    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };

  const destroy = () => {
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };

  const isKeyboardVisible = () => keyboardVisible;

  init();
  return {
    init,
    destroy,
    isKeyboardVisible
  };
};



/***/ }),

/***/ 3844:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${9 - 9 * index}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 4293:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-e1ef2243.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 9259);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 7481);
/* harmony import */ var _index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f8d8aa5a.js */ 9286);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 6379);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  const rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */

  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;

    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }

    return startX <= threshold;
  };

  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };

  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };

  const canStart = detail => {
    return isAtEdge(detail) && canStartHandler();
  };

  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };

  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;

    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }

    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };

  return (0,_index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBaUJILFNBQVMsSUFBSSxDQUFiLEdBQWlCLElBQWpCLEdBQXdCakIsdURBQUssQ0FBQyxDQUFELEVBQUlpQixTQUFKLEVBQWUsTUFBZixDQUE5QyxFQUFzRU0sT0FBdEUsQ0FBWjtFQUNELENBaEJEOztFQWlCQSxPQUFPMVMsaUVBQWEsQ0FBQztJQUNuQkUsRUFEbUI7SUFFbkJxQixXQUFXLEVBQUUsY0FGTTtJQUduQnNSLGVBQWUsRUFBRSxFQUhFO0lBSW5CclIsU0FBUyxFQUFFLEVBSlE7SUFLbkIwUSxRQUxtQjtJQU1uQnpRLE9BQU8sRUFBRTZQLGNBTlU7SUFPbkJ6UCxNQVBtQjtJQVFuQkM7RUFSbUIsQ0FBRCxDQUFwQjtBQVVELENBMUREIiwic291cmNlcyI6WyIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9idXR0b24tYWN0aXZlLTgyNTFmNTMzLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZGlyLWU4Yjc2N2E4LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZm9jdXMtdmlzaWJsZS0wOTZjZjZmZC5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS0wNzNhMGI2NS5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcHRpYy0wMjlhNDZmNi5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTVkMGM4MjMyLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW5kZXgtZGEzOTY4MzIuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9rZXlib2FyZC00ZDU1NDRhMC5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2tleWJvYXJkLWNvbnRyb2xsZXItNzNhZjYyYjIuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9zcGlubmVyLWNvbmZpZ3MtNWQ2YjZmZTcuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9zd2lwZS1iYWNrLWUxZWYyMjQzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBjIGFzIHdyaXRlVGFzayB9IGZyb20gJy4vaW5kZXgtOGU2OTI0NDUuanMnO1xuaW1wb3J0IHsgaCBhcyBoYXB0aWNTZWxlY3Rpb25FbmQsIGEgYXMgaGFwdGljU2VsZWN0aW9uU3RhcnQsIGIgYXMgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCB9IGZyb20gJy4vaGFwdGljLTAyOWE0NmY2LmpzJztcbmltcG9ydCB7IGNyZWF0ZUdlc3R1cmUgfSBmcm9tICcuL2luZGV4LWY4ZDhhYTVhLmpzJztcblxuY29uc3QgY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSA9IChlbCwgaXNCdXR0b24pID0+IHtcbiAgbGV0IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICBsZXQgaW5pdGlhbFRvdWNoZWRCdXR0b247XG4gIGNvbnN0IGFjdGl2YXRlQnV0dG9uQXRQb2ludCA9ICh4LCB5LCBoYXB0aWNGZWVkYmFja0ZuKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICBpZiAoIXRhcmdldCB8fCAhaXNCdXR0b24odGFyZ2V0KSkge1xuICAgICAgY2xlYXJBY3RpdmVCdXR0b24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRhcmdldCAhPT0gY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgIGNsZWFyQWN0aXZlQnV0dG9uKCk7XG4gICAgICBzZXRBY3RpdmVCdXR0b24odGFyZ2V0LCBoYXB0aWNGZWVkYmFja0ZuKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNldEFjdGl2ZUJ1dHRvbiA9IChidXR0b24sIGhhcHRpY0ZlZWRiYWNrRm4pID0+IHtcbiAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbiA9IGJ1dHRvbjtcbiAgICBpZiAoIWluaXRpYWxUb3VjaGVkQnV0dG9uKSB7XG4gICAgICBpbml0aWFsVG91Y2hlZEJ1dHRvbiA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgIH1cbiAgICBjb25zdCBidXR0b25Ub01vZGlmeSA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgIHdyaXRlVGFzaygoKSA9PiBidXR0b25Ub01vZGlmeS5jbGFzc0xpc3QuYWRkKCdpb24tYWN0aXZhdGVkJykpO1xuICAgIGhhcHRpY0ZlZWRiYWNrRm4oKTtcbiAgfTtcbiAgY29uc3QgY2xlYXJBY3RpdmVCdXR0b24gPSAoZGlzcGF0Y2hDbGljayA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VG91Y2hlZEJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBidXR0b25Ub01vZGlmeSA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgIHdyaXRlVGFzaygoKSA9PiBidXR0b25Ub01vZGlmeS5jbGFzc0xpc3QucmVtb3ZlKCdpb24tYWN0aXZhdGVkJykpO1xuICAgIC8qKlxuICAgICAqIENsaWNraW5nIG9uIG9uZSBidXR0b24sIGJ1dCByZWxlYXNpbmcgb24gYW5vdGhlciBidXR0b25cbiAgICAgKiBkb2VzIG5vdCBkaXNwYXRjaCBhIGNsaWNrIGV2ZW50IGluIGJyb3dzZXJzLCBzbyB3ZVxuICAgICAqIG5lZWQgdG8gZG8gaXQgbWFudWFsbHkgaGVyZS4gU29tZSBicm93c2VycyB3aWxsXG4gICAgICogZGlzcGF0Y2ggYSBjbGljayBpZiBjbGlja2luZyBvbiBvbmUgYnV0dG9uLCBkcmFnZ2luZyBvdmVyXG4gICAgICogYW5vdGhlciBidXR0b24sIGFuZCByZWxlYXNpbmcgb24gdGhlIG9yaWdpbmFsIGJ1dHRvbi4gSW4gdGhhdFxuICAgICAqIGNhc2UsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGRvIG5vdCBjYXVzZSBhIGRvdWJsZSBjbGljayB0aGVyZS5cbiAgICAgKi9cbiAgICBpZiAoZGlzcGF0Y2hDbGljayAmJiBpbml0aWFsVG91Y2hlZEJ1dHRvbiAhPT0gY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgIGN1cnJlbnRUb3VjaGVkQnV0dG9uLmNsaWNrKCk7XG4gICAgfVxuICAgIGN1cnJlbnRUb3VjaGVkQnV0dG9uID0gdW5kZWZpbmVkO1xuICB9O1xuICByZXR1cm4gY3JlYXRlR2VzdHVyZSh7XG4gICAgZWwsXG4gICAgZ2VzdHVyZU5hbWU6ICdidXR0b25BY3RpdmVEcmFnJyxcbiAgICB0aHJlc2hvbGQ6IDAsXG4gICAgb25TdGFydDogKGV2KSA9PiBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQoZXYuY3VycmVudFgsIGV2LmN1cnJlbnRZLCBoYXB0aWNTZWxlY3Rpb25TdGFydCksXG4gICAgb25Nb3ZlOiAoZXYpID0+IGFjdGl2YXRlQnV0dG9uQXRQb2ludChldi5jdXJyZW50WCwgZXYuY3VycmVudFksIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQpLFxuICAgIG9uRW5kOiAoKSA9PiB7XG4gICAgICBjbGVhckFjdGl2ZUJ1dHRvbih0cnVlKTtcbiAgICAgIGhhcHRpY1NlbGVjdGlvbkVuZCgpO1xuICAgICAgaW5pdGlhbFRvdWNoZWRCdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVCdXR0b25BY3RpdmVHZXN0dXJlIGFzIGMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBkb2N1bWVudCBvciBob3N0IGVsZW1lbnRcbiAqIGhhcyBhIGBkaXJgIHNldCB0byBgcnRsYC4gVGhlIGhvc3QgdmFsdWUgd2lsbCBhbHdheXNcbiAqIHRha2UgcHJpb3JpdHkgb3ZlciB0aGUgcm9vdCBkb2N1bWVudCB2YWx1ZS5cbiAqL1xuY29uc3QgaXNSVEwgPSAoaG9zdEVsKSA9PiB7XG4gIGlmIChob3N0RWwpIHtcbiAgICBpZiAoaG9zdEVsLmRpciAhPT0gJycpIHtcbiAgICAgIHJldHVybiBob3N0RWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGRvY3VtZW50ID09PSBudWxsIHx8IGRvY3VtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkb2N1bWVudC5kaXIudG9Mb3dlckNhc2UoKSkgPT09ICdydGwnO1xufTtcblxuZXhwb3J0IHsgaXNSVEwgYXMgaSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IElPTl9GT0NVU0VEID0gJ2lvbi1mb2N1c2VkJztcbmNvbnN0IElPTl9GT0NVU0FCTEUgPSAnaW9uLWZvY3VzYWJsZSc7XG5jb25zdCBGT0NVU19LRVlTID0gW1xuICAnVGFiJyxcbiAgJ0Fycm93RG93bicsXG4gICdTcGFjZScsXG4gICdFc2NhcGUnLFxuICAnICcsXG4gICdTaGlmdCcsXG4gICdFbnRlcicsXG4gICdBcnJvd0xlZnQnLFxuICAnQXJyb3dSaWdodCcsXG4gICdBcnJvd1VwJyxcbiAgJ0hvbWUnLFxuICAnRW5kJyxcbl07XG5jb25zdCBzdGFydEZvY3VzVmlzaWJsZSA9IChyb290RWwpID0+IHtcbiAgbGV0IGN1cnJlbnRGb2N1cyA9IFtdO1xuICBsZXQga2V5Ym9hcmRNb2RlID0gdHJ1ZTtcbiAgY29uc3QgcmVmID0gcm9vdEVsID8gcm9vdEVsLnNoYWRvd1Jvb3QgOiBkb2N1bWVudDtcbiAgY29uc3Qgcm9vdCA9IHJvb3RFbCA/IHJvb3RFbCA6IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IHNldEZvY3VzID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgY3VycmVudEZvY3VzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKElPTl9GT0NVU0VEKSk7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoSU9OX0ZPQ1VTRUQpKTtcbiAgICBjdXJyZW50Rm9jdXMgPSBlbGVtZW50cztcbiAgfTtcbiAgY29uc3QgcG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAga2V5Ym9hcmRNb2RlID0gZmFsc2U7XG4gICAgc2V0Rm9jdXMoW10pO1xuICB9O1xuICBjb25zdCBvbktleWRvd24gPSAoZXYpID0+IHtcbiAgICBrZXlib2FyZE1vZGUgPSBGT0NVU19LRVlTLmluY2x1ZGVzKGV2LmtleSk7XG4gICAgaWYgKCFrZXlib2FyZE1vZGUpIHtcbiAgICAgIHNldEZvY3VzKFtdKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uRm9jdXNpbiA9IChldikgPT4ge1xuICAgIGlmIChrZXlib2FyZE1vZGUgJiYgZXYuY29tcG9zZWRQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHRvRm9jdXMgPSBldi5jb21wb3NlZFBhdGgoKS5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKElPTl9GT0NVU0FCTEUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgc2V0Rm9jdXModG9Gb2N1cyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkZvY3Vzb3V0ID0gKCkgPT4ge1xuICAgIGlmIChyZWYuYWN0aXZlRWxlbWVudCA9PT0gcm9vdCkge1xuICAgICAgc2V0Rm9jdXMoW10pO1xuICAgIH1cbiAgfTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXNpbik7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBvaW50ZXJEb3duKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHBvaW50ZXJEb3duKTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcG9pbnRlckRvd24pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwb2ludGVyRG93bik7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZGVzdHJveSxcbiAgICBzZXRGb2N1cyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHN0YXJ0Rm9jdXNWaXNpYmxlIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRPblJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzLTNiMzkwZTQ4LmpzJztcblxuY29uc3QgYXR0YWNoQ29tcG9uZW50ID0gYXN5bmMgKGRlbGVnYXRlLCBjb250YWluZXIsIGNvbXBvbmVudCwgY3NzQ2xhc3NlcywgY29tcG9uZW50UHJvcHMsIGlubGluZSkgPT4ge1xuICB2YXIgX2E7XG4gIGlmIChkZWxlZ2F0ZSkge1xuICAgIHJldHVybiBkZWxlZ2F0ZS5hdHRhY2hWaWV3VG9Eb20oY29udGFpbmVyLCBjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBjc3NDbGFzc2VzKTtcbiAgfVxuICBpZiAoIWlubGluZSAmJiB0eXBlb2YgY29tcG9uZW50ICE9PSAnc3RyaW5nJyAmJiAhKGNvbXBvbmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZnJhbWV3b3JrIGRlbGVnYXRlIGlzIG1pc3NpbmcnKTtcbiAgfVxuICBjb25zdCBlbCA9IHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnID8gKF9hID0gY29udGFpbmVyLm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQ7XG4gIGlmIChjc3NDbGFzc2VzKSB7XG4gICAgY3NzQ2xhc3Nlcy5mb3JFYWNoKChjKSA9PiBlbC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgfVxuICBpZiAoY29tcG9uZW50UHJvcHMpIHtcbiAgICBPYmplY3QuYXNzaWduKGVsLCBjb21wb25lbnRQcm9wcyk7XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGNvbXBvbmVudE9uUmVhZHkoZWwsIHJlc29sdmUpKTtcbiAgcmV0dXJuIGVsO1xufTtcbmNvbnN0IGRldGFjaENvbXBvbmVudCA9IChkZWxlZ2F0ZSwgZWxlbWVudCkgPT4ge1xuICBpZiAoZWxlbWVudCkge1xuICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgcmV0dXJuIGRlbGVnYXRlLnJlbW92ZVZpZXdGcm9tRG9tKGNvbnRhaW5lciwgZWxlbWVudCk7XG4gICAgfVxuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcbmNvbnN0IENvcmVEZWxlZ2F0ZSA9ICgpID0+IHtcbiAgbGV0IEJhc2VDb21wb25lbnQ7XG4gIGxldCBSZWZlcmVuY2U7XG4gIGNvbnN0IGF0dGFjaFZpZXdUb0RvbSA9IGFzeW5jIChwYXJlbnRFbGVtZW50LCB1c2VyQ29tcG9uZW50LCB1c2VyQ29tcG9uZW50UHJvcHMgPSB7fSwgY3NzQ2xhc3NlcyA9IFtdKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBCYXNlQ29tcG9uZW50ID0gcGFyZW50RWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBJZiBwYXNzaW5nIGluIGEgY29tcG9uZW50IHZpYSB0aGUgYGNvbXBvbmVudGAgcHJvcHNcbiAgICAgKiB3ZSBuZWVkIHRvIGFwcGVuZCBpdCBpbnNpZGUgb2Ygb3VyIG92ZXJsYXkgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGlmICh1c2VyQ29tcG9uZW50KSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHBhc3NpbmcgaW4gdGhlIHRhZyBuYW1lLCBjcmVhdGVcbiAgICAgICAqIHRoZSBlbGVtZW50IG90aGVyd2lzZSBqdXN0IGdldCBhIHJlZmVyZW5jZVxuICAgICAgICogdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgICAqL1xuICAgICAgY29uc3QgZWwgPSB0eXBlb2YgdXNlckNvbXBvbmVudCA9PT0gJ3N0cmluZycgPyAoX2EgPSBCYXNlQ29tcG9uZW50Lm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jcmVhdGVFbGVtZW50KHVzZXJDb21wb25lbnQpIDogdXNlckNvbXBvbmVudDtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGFueSBjc3MgY2xhc3NlcyBwYXNzZWQgaW5cbiAgICAgICAqIHZpYSB0aGUgY3NzQ2xhc3NlcyBwcm9wIG9uIHRoZSBvdmVybGF5LlxuICAgICAgICovXG4gICAgICBjc3NDbGFzc2VzLmZvckVhY2goKGMpID0+IGVsLmNsYXNzTGlzdC5hZGQoYykpO1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYW55IHByb3BzIHBhc3NlZCBpblxuICAgICAgICogdmlhIHRoZSBjb21wb25lbnRQcm9wcyBwcm9wIG9uIHRoZSBvdmVybGF5LlxuICAgICAgICovXG4gICAgICBPYmplY3QuYXNzaWduKGVsLCB1c2VyQ29tcG9uZW50UHJvcHMpO1xuICAgICAgLyoqXG4gICAgICAgKiBGaW5hbGx5LCBhcHBlbmQgdGhlIGNvbXBvbmVudFxuICAgICAgICogaW5zaWRlIG9mIHRoZSBvdmVybGF5IGNvbXBvbmVudC5cbiAgICAgICAqL1xuICAgICAgQmFzZUNvbXBvbmVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gY29tcG9uZW50T25SZWFkeShlbCwgcmVzb2x2ZSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChCYXNlQ29tcG9uZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBCYXNlQ29tcG9uZW50LmNoaWxkcmVuWzBdO1xuICAgICAgaWYgKCFyb290LmNsYXNzTGlzdC5jb250YWlucygnaW9uLWRlbGVnYXRlLWhvc3QnKSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhlIHJvb3QgZWxlbWVudCBpcyBub3QgYSBkZWxlZ2F0ZSBob3N0LCBpdCBtZWFuc1xuICAgICAgICAgKiB0aGF0IHRoZSBvdmVybGF5IGhhcyBub3QgYmVlbiBwcmVzZW50ZWQgeWV0IGFuZCB3ZSBuZWVkXG4gICAgICAgICAqIHRvIGNyZWF0ZSB0aGUgY29udGFpbmluZyBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBjbGFzc2VzLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZWwgPSAoX2IgPSBCYXNlQ29tcG9uZW50Lm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gQWRkIGEgY2xhc3MgdG8gdHJhY2sgaWYgdGhlIHJvb3QgZWxlbWVudCB3YXMgY3JlYXRlZCBieSB0aGUgZGVsZWdhdGUuXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2lvbi1kZWxlZ2F0ZS1ob3N0Jyk7XG4gICAgICAgIGNzc0NsYXNzZXMuZm9yRWFjaCgoYykgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgICAgIC8vIE1vdmUgZWFjaCBjaGlsZCBmcm9tIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSB0byB0aGUgbmV3IHBhcmVudCBlbGVtZW50LlxuICAgICAgICBlbC5hcHBlbmQoLi4uQmFzZUNvbXBvbmVudC5jaGlsZHJlbik7XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBhcmVudCBlbGVtZW50IHRvIHRoZSBvcmlnaW5hbCBwYXJlbnQgZWxlbWVudC5cbiAgICAgICAgQmFzZUNvbXBvbmVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcm9vdCBvZiB0aGUgYXBwIGFuZFxuICAgICAqIGFkZCB0aGUgb3ZlcmxheSB0aGVyZS5cbiAgICAgKi9cbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tYXBwJykgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBwbGFjZWhvbGRlciBjb21tZW50IHNvIHRoYXRcbiAgICAgKiB3ZSBjYW4gcmV0dXJuIHRoaXMgY29tcG9uZW50IHRvIHdoZXJlXG4gICAgICogaXQgd2FzIHByZXZpb3VzbHkuXG4gICAgICovXG4gICAgUmVmZXJlbmNlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnaW9uaWMgdGVsZXBvcnQnKTtcbiAgICBCYXNlQ29tcG9uZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFJlZmVyZW5jZSwgQmFzZUNvbXBvbmVudCk7XG4gICAgYXBwLmFwcGVuZENoaWxkKEJhc2VDb21wb25lbnQpO1xuICAgIHJldHVybiBCYXNlQ29tcG9uZW50O1xuICB9O1xuICBjb25zdCByZW1vdmVWaWV3RnJvbURvbSA9ICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY29tcG9uZW50IHRvIHdoZXJlIGl0IHdhcyBwcmV2aW91c2x5IGluIHRoZSBET00uXG4gICAgICovXG4gICAgaWYgKEJhc2VDb21wb25lbnQgJiYgUmVmZXJlbmNlKSB7XG4gICAgICBSZWZlcmVuY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoQmFzZUNvbXBvbmVudCwgUmVmZXJlbmNlKTtcbiAgICAgIFJlZmVyZW5jZS5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuICByZXR1cm4geyBhdHRhY2hWaWV3VG9Eb20sIHJlbW92ZVZpZXdGcm9tRG9tIH07XG59O1xuXG5leHBvcnQgeyBDb3JlRGVsZWdhdGUgYXMgQywgYXR0YWNoQ29tcG9uZW50IGFzIGEsIGRldGFjaENvbXBvbmVudCBhcyBkIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY29uc3QgSGFwdGljRW5naW5lID0ge1xuICBnZXRFbmdpbmUoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcbiAgICByZXR1cm4gd2luLlRhcHRpY0VuZ2luZSB8fCAoKChfYSA9IHdpbi5DYXBhY2l0b3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pc1BsdWdpbkF2YWlsYWJsZSgnSGFwdGljcycpKSAmJiB3aW4uQ2FwYWNpdG9yLlBsdWdpbnMuSGFwdGljcyk7XG4gIH0sXG4gIGF2YWlsYWJsZSgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3Qgd2luID0gd2luZG93O1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV2ZWxvcGVycyBjYW4gbWFudWFsbHkgaW1wb3J0IHRoZVxuICAgICAqIEhhcHRpY3MgcGx1Z2luIGluIHRoZWlyIGFwcCB3aGljaCB3aWxsIGNhdXNlXG4gICAgICogZ2V0RW5naW5lIHRvIHJldHVybiB0aGUgSGFwdGljcyBlbmdpbmUuIEhvd2V2ZXIsXG4gICAgICogdGhlIEhhcHRpY3MgZW5naW5lIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWZcbiAgICAgKiB1c2VkIGluIGEgd2ViIGJyb3dzZXIgdGhhdCBkb2VzIG5vdCBzdXBwb3J0XG4gICAgICogdGhlIFZpYnJhdGUgQVBJLiBUaGlzIGNoZWNrIGF2b2lkcyB0aGF0IGVycm9yXG4gICAgICogaWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgVmlicmF0ZSBBUEkuXG4gICAgICovXG4gICAgaWYgKCgoX2EgPSB3aW4uQ2FwYWNpdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0UGxhdGZvcm0oKSkgPT09ICd3ZWInKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnZpYnJhdGUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGlzQ29yZG92YSgpIHtcbiAgICByZXR1cm4gISF3aW5kb3cuVGFwdGljRW5naW5lO1xuICB9LFxuICBpc0NhcGFjaXRvcigpIHtcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gICAgcmV0dXJuICEhd2luLkNhcGFjaXRvcjtcbiAgfSxcbiAgaW1wYWN0KG9wdGlvbnMpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5pc0NhcGFjaXRvcigpID8gb3B0aW9ucy5zdHlsZS50b1VwcGVyQ2FzZSgpIDogb3B0aW9ucy5zdHlsZTtcbiAgICBlbmdpbmUuaW1wYWN0KHsgc3R5bGUgfSk7XG4gIH0sXG4gIG5vdGlmaWNhdGlvbihvcHRpb25zKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuaXNDYXBhY2l0b3IoKSA/IG9wdGlvbnMuc3R5bGUudG9VcHBlckNhc2UoKSA6IG9wdGlvbnMuc3R5bGU7XG4gICAgZW5naW5lLm5vdGlmaWNhdGlvbih7IHN0eWxlIH0pO1xuICB9LFxuICBzZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5pbXBhY3QoeyBzdHlsZTogJ2xpZ2h0JyB9KTtcbiAgfSxcbiAgc2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0NhcGFjaXRvcigpKSB7XG4gICAgICBlbmdpbmUuc2VsZWN0aW9uU3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk7XG4gICAgfVxuICB9LFxuICBzZWxlY3Rpb25DaGFuZ2VkKCkge1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNDYXBhY2l0b3IoKSkge1xuICAgICAgZW5naW5lLnNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9XG4gIH0sXG4gIHNlbGVjdGlvbkVuZCgpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQ2FwYWNpdG9yKCkpIHtcbiAgICAgIGVuZ2luZS5zZWxlY3Rpb25FbmQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkVuZCgpO1xuICAgIH1cbiAgfSxcbn07XG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgSGFwdGljIFBsdWdpbiBpcyBhdmFpbGFibGVcbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgb3IgZmFsc2UgaWYgdGhlIHBsdWdpbiBpcyBhdmFpbGFibGVcbiAqL1xuY29uc3QgaGFwdGljQXZhaWxhYmxlID0gKCkgPT4ge1xuICByZXR1cm4gSGFwdGljRW5naW5lLmF2YWlsYWJsZSgpO1xufTtcbi8qKlxuICogVHJpZ2dlciBhIHNlbGVjdGlvbiBjaGFuZ2VkIGhhcHRpYyBldmVudC4gR29vZCBmb3Igb25lLXRpbWUgZXZlbnRzXG4gKiAobm90IGZvciBnZXN0dXJlcylcbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uID0gKCkgPT4ge1xuICBoYXB0aWNBdmFpbGFibGUoKSAmJiBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uKCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHRoYXQgYSBnZXN0dXJlIGZvciBhIHNlbGVjdGlvbiBjaGFuZ2UgaXMgc3RhcnRpbmcuXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvblN0YXJ0ID0gKCkgPT4ge1xuICBoYXB0aWNBdmFpbGFibGUoKSAmJiBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uU3RhcnQoKTtcbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIHNlbGVjdGlvbiBjaGFuZ2VkIGR1cmluZyBhIGdlc3R1cmUuXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgPSAoKSA9PiB7XG4gIGhhcHRpY0F2YWlsYWJsZSgpICYmIEhhcHRpY0VuZ2luZS5zZWxlY3Rpb25DaGFuZ2VkKCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlXG4gKiBjYWxsZWQgbGVzdCByZXNvdXJjZXMgYXJlIG5vdCBwcm9wZXJseSByZWN5Y2xlZC5cbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uRW5kID0gKCkgPT4ge1xuICBoYXB0aWNBdmFpbGFibGUoKSAmJiBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uRW5kKCk7XG59O1xuLyoqXG4gKiBVc2UgdGhpcyB0byBpbmRpY2F0ZSBzdWNjZXNzL2ZhaWx1cmUvd2FybmluZyB0byB0aGUgdXNlci5cbiAqIG9wdGlvbnMgc2hvdWxkIGJlIG9mIHRoZSB0eXBlIGB7IHN0eWxlOiAnbGlnaHQnIH1gIChvciBgbWVkaXVtYC9gaGVhdnlgKVxuICovXG5jb25zdCBoYXB0aWNJbXBhY3QgPSAob3B0aW9ucykgPT4ge1xuICBoYXB0aWNBdmFpbGFibGUoKSAmJiBIYXB0aWNFbmdpbmUuaW1wYWN0KG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IHsgaGFwdGljU2VsZWN0aW9uU3RhcnQgYXMgYSwgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCBhcyBiLCBoYXB0aWNTZWxlY3Rpb24gYXMgYywgaGFwdGljSW1wYWN0IGFzIGQsIGhhcHRpY1NlbGVjdGlvbkVuZCBhcyBoIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRPblJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzLTNiMzkwZTQ4LmpzJztcbmltcG9ydCB7IGEgYXMgcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvciB9IGZyb20gJy4vaW5kZXgtYzRiMTE2NzYuanMnO1xuXG5jb25zdCBJT05fQ09OVEVOVF9UQUdfTkFNRSA9ICdJT04tQ09OVEVOVCc7XG5jb25zdCBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SID0gJ2lvbi1jb250ZW50JztcbmNvbnN0IElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SID0gJy5pb24tY29udGVudC1zY3JvbGwtaG9zdCc7XG4vKipcbiAqIFNlbGVjdG9yIHVzZWQgZm9yIGltcGxlbWVudGF0aW9ucyByZWxpYW50IG9uIGA8aW9uLWNvbnRlbnQ+YCBmb3Igc2Nyb2xsIGV2ZW50IGNoYW5nZXMuXG4gKlxuICogRGV2ZWxvcGVycyBzaG91bGQgdXNlIHRoZSBgLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0YCBzZWxlY3RvciB0byB0YXJnZXQgdGhlIGVsZW1lbnQgZW1pdHRpbmdcbiAqIHNjcm9sbCBldmVudHMuIFdpdGggdmlydHVhbCBzY3JvbGwgaW1wbGVtZW50YXRpb25zIHRoaXMgd2lsbCBiZSB0aGUgaG9zdCBlbGVtZW50IGZvclxuICogdGhlIHNjcm9sbCB2aWV3cG9ydC5cbiAqL1xuY29uc3QgSU9OX0NPTlRFTlRfU0VMRUNUT1IgPSBgJHtJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SfSwgJHtJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUn1gO1xuY29uc3QgaXNJb25Db250ZW50ID0gKGVsKSA9PiBlbC50YWdOYW1lID09PSBJT05fQ09OVEVOVF9UQUdfTkFNRTtcbi8qKlxuICogV2FpdHMgZm9yIHRoZSBlbGVtZW50IGhvc3QgZnVsbHkgaW5pdGlhbGl6ZSBiZWZvcmVcbiAqIHJldHVybmluZyB0aGUgaW5uZXIgc2Nyb2xsIGVsZW1lbnQuXG4gKlxuICogRm9yIGBpb24tY29udGVudGAgdGhlIHNjcm9sbCB0YXJnZXQgd2lsbCBiZSB0aGUgcmVzdWx0XG4gKiBvZiB0aGUgYGdldFNjcm9sbEVsZW1lbnRgIGZ1bmN0aW9uLlxuICpcbiAqIEZvciBjdXN0b20gaW1wbGVtZW50YXRpb25zIGl0IHdpbGwgYmUgdGhlIGVsZW1lbnQgaG9zdFxuICogb3IgYSBzZWxlY3RvciB3aXRoaW4gdGhlIGhvc3QsIGlmIHN1cHBsaWVkIHRocm91Z2ggYHNjcm9sbFRhcmdldGAuXG4gKi9cbmNvbnN0IGdldFNjcm9sbEVsZW1lbnQgPSBhc3luYyAoZWwpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChlbCkpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gY29tcG9uZW50T25SZWFkeShlbCwgcmVzb2x2ZSkpO1xuICAgIHJldHVybiBlbC5nZXRTY3JvbGxFbGVtZW50KCk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufTtcbi8qKlxuICogUXVlcmllcyB0aGUgZWxlbWVudCBtYXRjaGluZyB0aGUgc2VsZWN0b3IgZm9yIElvbkNvbnRlbnQuXG4gKiBTZWUgSU9OX0NPTlRFTlRfU0VMRUNUT1IgZm9yIHRoZSBzZWxlY3RvciB1c2VkLlxuICovXG5jb25zdCBmaW5kSW9uQ29udGVudCA9IChlbCkgPT4ge1xuICAvKipcbiAgICogRmlyc3Qgd2UgdHJ5IHRvIHF1ZXJ5IHRoZSBjdXN0b20gc2Nyb2xsIGhvc3Qgc2VsZWN0b3IgaW4gY2FzZXMgd2hlcmVcbiAgICogdGhlIGltcGxlbWVudGF0aW9uIGlzIHVzaW5nIGFuIG91dGVyIGBpb24tY29udGVudGAgd2l0aCBhbiBpbm5lciBjdXN0b21cbiAgICogc2Nyb2xsIGNvbnRhaW5lci5cbiAgICovXG4gIGNvbnN0IGN1c3RvbUNvbnRlbnRIb3N0ID0gZWwucXVlcnlTZWxlY3RvcihJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUik7XG4gIGlmIChjdXN0b21Db250ZW50SG9zdCkge1xuICAgIHJldHVybiBjdXN0b21Db250ZW50SG9zdDtcbiAgfVxuICByZXR1cm4gZWwucXVlcnlTZWxlY3RvcihJT05fQ09OVEVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBRdWVyaWVzIHRoZSBjbG9zZXN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGZvciBJb25Db250ZW50LlxuICovXG5jb25zdCBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgPSAoZWwpID0+IHtcbiAgcmV0dXJuIGVsLmNsb3Nlc3QoSU9OX0NPTlRFTlRfU0VMRUNUT1IpO1xufTtcbi8qKlxuICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBlbGVtZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbFRvVG9wYCB3aXRoIGEgZHVyYXRpb24uXG4gKi9cbmNvbnN0IHNjcm9sbFRvVG9wID0gKGVsLCBkdXJhdGlvbk1zKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoZWwpKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVsO1xuICAgIHJldHVybiBjb250ZW50LnNjcm9sbFRvVG9wKGR1cmF0aW9uTXMpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWwuc2Nyb2xsVG8oe1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJlaGF2aW9yOiBkdXJhdGlvbk1zID4gMCA/ICdzbW9vdGgnIDogJ2F1dG8nLFxuICB9KSk7XG59O1xuLyoqXG4gKiBTY3JvbGxzIGJ5IGEgc3BlY2lmaWVkIFgvWSBkaXN0YW5jZSBpbiB0aGUgY29tcG9uZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbEJ5UG9pbnRgIHdpdGggYSBkdXJhdGlvbi5cbiAqL1xuY29uc3Qgc2Nyb2xsQnlQb2ludCA9IChlbCwgeCwgeSwgZHVyYXRpb25NcykgPT4ge1xuICBpZiAoaXNJb25Db250ZW50KGVsKSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbDtcbiAgICByZXR1cm4gY29udGVudC5zY3JvbGxCeVBvaW50KHgsIHksIGR1cmF0aW9uTXMpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWwuc2Nyb2xsQnkoe1xuICAgIHRvcDogeSxcbiAgICBsZWZ0OiB4LFxuICAgIGJlaGF2aW9yOiBkdXJhdGlvbk1zID4gMCA/ICdzbW9vdGgnIDogJ2F1dG8nLFxuICB9KSk7XG59O1xuLyoqXG4gKiBQcmludHMgYW4gZXJyb3IgaW5mb3JtaW5nIGRldmVsb3BlcnMgdGhhdCBhbiBpbXBsZW1lbnRhdGlvbiByZXF1aXJlcyBhbiBlbGVtZW50IHRvIGJlIHVzZWRcbiAqIHdpdGhpbiBlaXRoZXIgdGhlIGBpb24tY29udGVudGAgc2VsZWN0b3Igb3IgdGhlIGAuaW9uLWNvbnRlbnQtc2Nyb2xsLWhvc3RgIGNsYXNzLlxuICovXG5jb25zdCBwcmludElvbkNvbnRlbnRFcnJvck1zZyA9IChlbCkgPT4ge1xuICByZXR1cm4gcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvcihlbCwgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBTZXZlcmFsIGNvbXBvbmVudHMgaW4gSW9uaWMgbmVlZCB0byBwcmV2ZW50IHNjcm9sbGluZ1xuICogZHVyaW5nIGEgZ2VzdHVyZSAoY2FyZCBtb2RhbCwgcmFuZ2UsIGl0ZW0gc2xpZGluZywgZXRjKS5cbiAqIFVzZSB0aGlzIHV0aWxpdHkgdG8gYWNjb3VudCBmb3IgaW9uLWNvbnRlbnQgYW5kIGN1c3RvbSBjb250ZW50IGhvc3RzLlxuICovXG5jb25zdCBkaXNhYmxlQ29udGVudFNjcm9sbFkgPSAoY29udGVudEVsKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoY29udGVudEVsKSkge1xuICAgIGNvbnN0IGlvbkNvbnRlbnQgPSBjb250ZW50RWw7XG4gICAgY29uc3QgaW5pdGlhbFNjcm9sbFkgPSBpb25Db250ZW50LnNjcm9sbFk7XG4gICAgaW9uQ29udGVudC5zY3JvbGxZID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhpcyBzaG91bGQgYmUgcGFzc2VkIGludG8gcmVzZXRDb250ZW50U2Nyb2xsWVxuICAgICAqIHNvIHRoYXQgd2UgY2FuIHJldmVydCBpb24tY29udGVudCdzIHNjcm9sbFkgdG8gdGhlXG4gICAgICogY29ycmVjdCBzdGF0ZS4gRm9yIGV4YW1wbGUsIGlmIHNjcm9sbFkgPSBmYWxzZVxuICAgICAqIGluaXRpYWxseSwgd2UgZG8gbm90IHdhbnQgdG8gZW5hYmxlIHNjcm9sbGluZ1xuICAgICAqIHdoZW4gd2UgY2FsbCByZXNldENvbnRlbnRTY3JvbGxZLlxuICAgICAqL1xuICAgIHJldHVybiBpbml0aWFsU2Nyb2xsWTtcbiAgfVxuICBlbHNlIHtcbiAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuY29uc3QgcmVzZXRDb250ZW50U2Nyb2xsWSA9IChjb250ZW50RWwsIGluaXRpYWxTY3JvbGxZKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoY29udGVudEVsKSkge1xuICAgIGNvbnRlbnRFbC5zY3JvbGxZID0gaW5pdGlhbFNjcm9sbFk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICB9XG59O1xuXG5leHBvcnQgeyBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SIGFzIEksIGZpbmRJb25Db250ZW50IGFzIGEsIElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SIGFzIGIsIHNjcm9sbEJ5UG9pbnQgYXMgYywgZGlzYWJsZUNvbnRlbnRTY3JvbGxZIGFzIGQsIGZpbmRDbG9zZXN0SW9uQ29udGVudCBhcyBmLCBnZXRTY3JvbGxFbGVtZW50IGFzIGcsIGlzSW9uQ29udGVudCBhcyBpLCBwcmludElvbkNvbnRlbnRFcnJvck1zZyBhcyBwLCByZXNldENvbnRlbnRTY3JvbGxZIGFzIHIsIHNjcm9sbFRvVG9wIGFzIHMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4vKiBJb25pY29ucyB2Ni4wLjQsIEVTIE1vZHVsZXMgKi9cbmNvbnN0IGFycm93QmFja1NoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+QXJyb3cgQmFjazwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3NxdWFyZScgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMjQ0IDQwMEwxMDAgMjU2bDE0NC0xNDRNMTIwIDI1NmgyOTInIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgYXJyb3dEb3duID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+QXJyb3cgRG93bjwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTEyIDI2OGwxNDQgMTQ0IDE0NC0xNDRNMjU2IDM5MlYxMDAnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2FyZXRCYWNrU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DYXJldCBCYWNrPC90aXRsZT48cGF0aCBkPSdNMzY4IDY0TDE0NCAyNTZsMjI0IDE5MlY2NHonLz48L3N2Zz5cIjtcbmNvbnN0IGNhcmV0RG93blNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2FyZXQgRG93bjwvdGl0bGU+PHBhdGggZD0nTTY0IDE0NGwxOTIgMjI0IDE5Mi0yMjRINjR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldFVwU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DYXJldCBVcDwvdGl0bGU+PHBhdGggZD0nTTQ0OCAzNjhMMjU2IDE0NCA2NCAzNjhoMzg0eicvPjwvc3ZnPlwiO1xuY29uc3QgY2hlY2ttYXJrT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNoZWNrbWFyazwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNDE2IDEyOEwxOTIgMzg0bC05Ni05NicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uQmFjayA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNoZXZyb24gQmFjazwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMzI4IDExMkwxODQgMjU2bDE0NCAxNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkRvd24gPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DaGV2cm9uIERvd248L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTExMiAxODRsMTQ0IDE0NCAxNDQtMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25Gb3J3YXJkID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2hldnJvbiBGb3J3YXJkPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xODQgMTEybDE0NCAxNDQtMTQ0IDE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRm9yd2FyZE91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5DaGV2cm9uIEZvcndhcmQ8L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTE4NCAxMTJsMTQ0IDE0NC0xNDQgMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNsb3NlID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+Q2xvc2U8L3RpdGxlPjxwYXRoIGQ9J00yODkuOTQgMjU2bDk1LTk1QTI0IDI0IDAgMDAzNTEgMTI3bC05NSA5NS05NS05NWEyNCAyNCAwIDAwLTM0IDM0bDk1IDk1LTk1IDk1YTI0IDI0IDAgMTAzNCAzNGw5NS05NSA5NSA5NWEyNCAyNCAwIDAwMzQtMzR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjbG9zZUNpcmNsZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNsb3NlIENpcmNsZTwvdGl0bGU+PHBhdGggZD0nTTI1NiA0OEMxNDEuMzEgNDggNDggMTQxLjMxIDQ4IDI1NnM5My4zMSAyMDggMjA4IDIwOCAyMDgtOTMuMzEgMjA4LTIwOFMzNzAuNjkgNDggMjU2IDQ4em03NS4zMSAyNjAuNjlhMTYgMTYgMCAxMS0yMi42MiAyMi42MkwyNTYgMjc4LjYzbC01Mi42OSA1Mi42OGExNiAxNiAwIDAxLTIyLjYyLTIyLjYyTDIzMy4zNyAyNTZsLTUyLjY4LTUyLjY5YTE2IDE2IDAgMDEyMi42Mi0yMi42MkwyNTYgMjMzLjM3bDUyLjY5LTUyLjY4YTE2IDE2IDAgMDEyMi42MiAyMi42MkwyNzguNjMgMjU2eicvPjwvc3ZnPlwiO1xuY29uc3QgY2xvc2VTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPkNsb3NlPC90aXRsZT48cGF0aCBkPSdNNDAwIDE0NS40OUwzNjYuNTEgMTEyIDI1NiAyMjIuNTEgMTQ1LjQ5IDExMiAxMTIgMTQ1LjQ5IDIyMi41MSAyNTYgMTEyIDM2Ni41MSAxNDUuNDkgNDAwIDI1NiAyODkuNDkgMzY2LjUxIDQwMCA0MDAgMzY2LjUxIDI4OS40OSAyNTYgNDAwIDE0NS40OXonLz48L3N2Zz5cIjtcbmNvbnN0IGVsbGlwc2VPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+RWxsaXBzZTwvdGl0bGU+PGNpcmNsZSBjeD0nMjU2JyBjeT0nMjU2JyByPScxOTInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBlbGxpcHNpc0hvcml6b250YWwgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5FbGxpcHNpcyBIb3Jpem9udGFsPC90aXRsZT48Y2lyY2xlIGN4PScyNTYnIGN5PScyNTYnIHI9JzQ4Jy8+PGNpcmNsZSBjeD0nNDE2JyBjeT0nMjU2JyByPSc0OCcvPjxjaXJjbGUgY3g9Jzk2JyBjeT0nMjU2JyByPSc0OCcvPjwvc3ZnPlwiO1xuY29uc3QgbWVudU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTgwIDE2MGgzNTJNODAgMjU2aDM1Mk04MCAzNTJoMzUyJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IG1lbnVTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPk1lbnU8L3RpdGxlPjxwYXRoIGQ9J002NCAzODRoMzg0di00Mi42N0g2NHptMC0xMDYuNjdoMzg0di00Mi42Nkg2NHpNNjQgMTI4djQyLjY3aDM4NFYxMjh6Jy8+PC9zdmc+XCI7XG5jb25zdCByZW1vdmVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+UmVtb3ZlPC90aXRsZT48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J000MDAgMjU2SDExMicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCByZW9yZGVyVGhyZWVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+UmVvcmRlciBUaHJlZTwvdGl0bGU+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNOTYgMjU2aDMyME05NiAxNzZoMzIwTTk2IDMzNmgzMjAnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgcmVvcmRlclR3b1NoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+UmVvcmRlciBUd288L3RpdGxlPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdzcXVhcmUnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDQnIGQ9J00xMTggMzA0aDI3Nk0xMTggMjA4aDI3NicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBzZWFyY2hPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+U2VhcmNoPC90aXRsZT48cGF0aCBkPSdNMjIxLjA5IDY0YTE1Ny4wOSAxNTcuMDkgMCAxMDE1Ny4wOSAxNTcuMDlBMTU3LjEgMTU3LjEgMCAwMDIyMS4wOSA2NHonIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J00zMzguMjkgMzM4LjI5TDQ0OCA0NDgnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3Qgc2VhcmNoU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5TZWFyY2g8L3RpdGxlPjxwYXRoIGQ9J000NjQgNDI4TDMzOS45MiAzMDMuOWExNjAuNDggMTYwLjQ4IDAgMDAzMC43Mi05NC41OEMzNzAuNjQgMTIwLjM3IDI5OC4yNyA0OCAyMDkuMzIgNDhTNDggMTIwLjM3IDQ4IDIwOS4zMnM3Mi4zNyAxNjEuMzIgMTYxLjMyIDE2MS4zMmExNjAuNDggMTYwLjQ4IDAgMDA5NC41OC0zMC43Mkw0MjggNDY0ek0yMDkuMzIgMzE5LjY5YTExMC4zOCAxMTAuMzggMCAxMTExMC4zNy0xMTAuMzcgMTEwLjUgMTEwLjUgMCAwMS0xMTAuMzcgMTEwLjM3eicvPjwvc3ZnPlwiO1xuXG5leHBvcnQgeyBhcnJvd0JhY2tTaGFycCBhcyBhLCBjbG9zZUNpcmNsZSBhcyBiLCBjaGV2cm9uQmFjayBhcyBjLCBjbG9zZVNoYXJwIGFzIGQsIHNlYXJjaFNoYXJwIGFzIGUsIGNoZWNrbWFya091dGxpbmUgYXMgZiwgZWxsaXBzZU91dGxpbmUgYXMgZywgY2FyZXRCYWNrU2hhcnAgYXMgaCwgYXJyb3dEb3duIGFzIGksIHJlb3JkZXJUaHJlZU91dGxpbmUgYXMgaiwgcmVvcmRlclR3b1NoYXJwIGFzIGssIGNoZXZyb25Eb3duIGFzIGwsIGNoZXZyb25Gb3J3YXJkT3V0bGluZSBhcyBtLCBlbGxpcHNpc0hvcml6b250YWwgYXMgbiwgY2hldnJvbkZvcndhcmQgYXMgbywgY2FyZXRVcFNoYXJwIGFzIHAsIGNhcmV0RG93blNoYXJwIGFzIHEsIHJlbW92ZU91dGxpbmUgYXMgciwgc2VhcmNoT3V0bGluZSBhcyBzLCBjbG9zZSBhcyB0LCBtZW51T3V0bGluZSBhcyB1LCBtZW51U2hhcnAgYXMgdiB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IEtFWUJPQVJEX0RJRF9PUEVOID0gJ2lvbktleWJvYXJkRGlkU2hvdyc7XG5jb25zdCBLRVlCT0FSRF9ESURfQ0xPU0UgPSAnaW9uS2V5Ym9hcmREaWRIaWRlJztcbmNvbnN0IEtFWUJPQVJEX1RIUkVTSE9MRCA9IDE1MDtcbmxldCBwcmV2aW91c1Zpc3VhbFZpZXdwb3J0ID0ge307XG5sZXQgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0ge307XG5sZXQga2V5Ym9hcmRPcGVuID0gZmFsc2U7XG4vKipcbiAqIFRoaXMgaXMgb25seSB1c2VkIGZvciB0ZXN0c1xuICovXG5jb25zdCByZXNldEtleWJvYXJkQXNzaXN0ID0gKCkgPT4ge1xuICBwcmV2aW91c1Zpc3VhbFZpZXdwb3J0ID0ge307XG4gIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IHt9O1xuICBrZXlib2FyZE9wZW4gPSBmYWxzZTtcbn07XG5jb25zdCBzdGFydEtleWJvYXJkQXNzaXN0ID0gKHdpbikgPT4ge1xuICBzdGFydE5hdGl2ZUxpc3RlbmVycyh3aW4pO1xuICBpZiAoIXdpbi52aXN1YWxWaWV3cG9ydCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSBjb3B5VmlzdWFsVmlld3BvcnQod2luLnZpc3VhbFZpZXdwb3J0KTtcbiAgd2luLnZpc3VhbFZpZXdwb3J0Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgIHRyYWNrVmlld3BvcnRDaGFuZ2VzKHdpbik7XG4gICAgaWYgKGtleWJvYXJkRGlkT3BlbigpIHx8IGtleWJvYXJkRGlkUmVzaXplKHdpbikpIHtcbiAgICAgIHNldEtleWJvYXJkT3Blbih3aW4pO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXlib2FyZERpZENsb3NlKHdpbikpIHtcbiAgICAgIHNldEtleWJvYXJkQ2xvc2Uod2luKTtcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBMaXN0ZW4gZm9yIGV2ZW50cyBmaXJlZCBieSBuYXRpdmUga2V5Ym9hcmQgcGx1Z2luXG4gKiBpbiBDYXBhY2l0b3IvQ29yZG92YSBzbyBkZXZzIG9ubHkgbmVlZCB0byBsaXN0ZW5cbiAqIGluIG9uZSBwbGFjZS5cbiAqL1xuY29uc3Qgc3RhcnROYXRpdmVMaXN0ZW5lcnMgPSAod2luKSA9PiB7XG4gIHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZERpZFNob3cnLCAoZXYpID0+IHNldEtleWJvYXJkT3Blbih3aW4sIGV2KSk7XG4gIHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZERpZEhpZGUnLCAoKSA9PiBzZXRLZXlib2FyZENsb3NlKHdpbikpO1xufTtcbmNvbnN0IHNldEtleWJvYXJkT3BlbiA9ICh3aW4sIGV2KSA9PiB7XG4gIGZpcmVLZXlib2FyZE9wZW5FdmVudCh3aW4sIGV2KTtcbiAga2V5Ym9hcmRPcGVuID0gdHJ1ZTtcbn07XG5jb25zdCBzZXRLZXlib2FyZENsb3NlID0gKHdpbikgPT4ge1xuICBmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50KHdpbik7XG4gIGtleWJvYXJkT3BlbiA9IGZhbHNlO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBrZXlib2FyZE9wZW5gIGZsYWcgaXMgbm90XG4gKiBzZXQsIHRoZSBwcmV2aW91cyB2aXN1YWwgdmlld3BvcnQgd2lkdGggZXF1YWwgdGhlIGN1cnJlbnRcbiAqIHZpc3VhbCB2aWV3cG9ydCB3aWR0aCwgYW5kIGlmIHRoZSBzY2FsZWQgZGlmZmVyZW5jZVxuICogb2YgdGhlIHByZXZpb3VzIHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgbWludXMgdGhlIGN1cnJlbnRcbiAqIHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIEtFWUJPQVJEX1RIUkVTSE9MRFxuICpcbiAqIFdlIG5lZWQgdG8gYmUgYWJsZSB0byBhY2NvbW1vZGF0ZSB1c2VycyB3aG8gaGF2ZSB6b29taW5nXG4gKiBlbmFibGVkIGluIHRoZWlyIGJyb3dzZXIgKG9yIGhhdmUgem9vbWVkIGluIG1hbnVhbGx5KSB3aGljaFxuICogaXMgd2h5IHdlIHRha2UgaW50byBhY2NvdW50IHRoZSBjdXJyZW50IHZpc3VhbCB2aWV3cG9ydCdzXG4gKiBzY2FsZSB2YWx1ZS5cbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRPcGVuID0gKCkgPT4ge1xuICBjb25zdCBzY2FsZWRIZWlnaHREaWZmZXJlbmNlID0gKHByZXZpb3VzVmlzdWFsVmlld3BvcnQuaGVpZ2h0IC0gY3VycmVudFZpc3VhbFZpZXdwb3J0LmhlaWdodCkgKiBjdXJyZW50VmlzdWFsVmlld3BvcnQuc2NhbGU7XG4gIHJldHVybiAoIWtleWJvYXJkT3BlbiAmJlxuICAgIHByZXZpb3VzVmlzdWFsVmlld3BvcnQud2lkdGggPT09IGN1cnJlbnRWaXN1YWxWaWV3cG9ydC53aWR0aCAmJlxuICAgIHNjYWxlZEhlaWdodERpZmZlcmVuY2UgPiBLRVlCT0FSRF9USFJFU0hPTEQpO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sXG4gKiBidXQgdGhlIGtleWJvYXJkIGRpZCBub3QgY2xvc2VcbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRSZXNpemUgPSAod2luKSA9PiB7XG4gIHJldHVybiBrZXlib2FyZE9wZW4gJiYgIWtleWJvYXJkRGlkQ2xvc2Uod2luKTtcbn07XG4vKipcbiAqIERldGVybWluZSBpZiB0aGUga2V5Ym9hcmQgd2FzIGNsb3NlZFxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBrZXlib2FyZE9wZW5gIGZsYWcgaXMgc2V0IGFuZFxuICogdGhlIGN1cnJlbnQgdmlzdWFsIHZpZXdwb3J0IGhlaWdodCBlcXVhbHMgdGhlXG4gKiBsYXlvdXQgdmlld3BvcnQgaGVpZ2h0LlxuICovXG5jb25zdCBrZXlib2FyZERpZENsb3NlID0gKHdpbikgPT4ge1xuICByZXR1cm4ga2V5Ym9hcmRPcGVuICYmIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5oZWlnaHQgPT09IHdpbi5pbm5lckhlaWdodDtcbn07XG4vKipcbiAqIERpc3BhdGNoIGEga2V5Ym9hcmQgb3BlbiBldmVudFxuICovXG5jb25zdCBmaXJlS2V5Ym9hcmRPcGVuRXZlbnQgPSAod2luLCBuYXRpdmVFdikgPT4ge1xuICBjb25zdCBrZXlib2FyZEhlaWdodCA9IG5hdGl2ZUV2ID8gbmF0aXZlRXYua2V5Ym9hcmRIZWlnaHQgOiB3aW4uaW5uZXJIZWlnaHQgLSBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudChLRVlCT0FSRF9ESURfT1BFTiwge1xuICAgIGRldGFpbDogeyBrZXlib2FyZEhlaWdodCB9LFxuICB9KTtcbiAgd2luLmRpc3BhdGNoRXZlbnQoZXYpO1xufTtcbi8qKlxuICogRGlzcGF0Y2ggYSBrZXlib2FyZCBjbG9zZSBldmVudFxuICovXG5jb25zdCBmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50ID0gKHdpbikgPT4ge1xuICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudChLRVlCT0FSRF9ESURfQ0xPU0UpO1xuICB3aW4uZGlzcGF0Y2hFdmVudChldik7XG59O1xuLyoqXG4gKiBHaXZlbiBhIHdpbmRvdyBvYmplY3QsIGNyZWF0ZSBhIGNvcHkgb2ZcbiAqIHRoZSBjdXJyZW50IHZpc3VhbCBhbmQgbGF5b3V0IHZpZXdwb3J0IHN0YXRlc1xuICogd2hpbGUgYWxzbyBwcmVzZXJ2aW5nIHRoZSBwcmV2aW91cyB2aXN1YWwgYW5kXG4gKiBsYXlvdXQgdmlld3BvcnQgc3RhdGVzXG4gKi9cbmNvbnN0IHRyYWNrVmlld3BvcnRDaGFuZ2VzID0gKHdpbikgPT4ge1xuICBwcmV2aW91c1Zpc3VhbFZpZXdwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFZpc3VhbFZpZXdwb3J0KTtcbiAgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0gY29weVZpc3VhbFZpZXdwb3J0KHdpbi52aXN1YWxWaWV3cG9ydCk7XG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIHRoZSB2aXN1YWwgdmlld3BvcnRcbiAqIGF0IGEgZ2l2ZW4gc3RhdGVcbiAqL1xuY29uc3QgY29weVZpc3VhbFZpZXdwb3J0ID0gKHZpc3VhbFZpZXdwb3J0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IE1hdGgucm91bmQodmlzdWFsVmlld3BvcnQud2lkdGgpLFxuICAgIGhlaWdodDogTWF0aC5yb3VuZCh2aXN1YWxWaWV3cG9ydC5oZWlnaHQpLFxuICAgIG9mZnNldFRvcDogdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wLFxuICAgIG9mZnNldExlZnQ6IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQsXG4gICAgcGFnZVRvcDogdmlzdWFsVmlld3BvcnQucGFnZVRvcCxcbiAgICBwYWdlTGVmdDogdmlzdWFsVmlld3BvcnQucGFnZUxlZnQsXG4gICAgc2NhbGU6IHZpc3VhbFZpZXdwb3J0LnNjYWxlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgS0VZQk9BUkRfRElEX0NMT1NFLCBLRVlCT0FSRF9ESURfT1BFTiwgY29weVZpc3VhbFZpZXdwb3J0LCBrZXlib2FyZERpZENsb3NlLCBrZXlib2FyZERpZE9wZW4sIGtleWJvYXJkRGlkUmVzaXplLCByZXNldEtleWJvYXJkQXNzaXN0LCBzZXRLZXlib2FyZENsb3NlLCBzZXRLZXlib2FyZE9wZW4sIHN0YXJ0S2V5Ym9hcmRBc3Npc3QsIHRyYWNrVmlld3BvcnRDaGFuZ2VzIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3aW4gfSBmcm9tICcuL2luZGV4LTMzZmZlYzI1LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY29udHJvbGxlciB0aGF0IHRyYWNrcyBhbmQgcmVhY3RzIHRvIG9wZW5pbmcgb3IgY2xvc2luZyB0aGUga2V5Ym9hcmQuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUga2V5Ym9hcmQgb3BlbnMgb3IgY2xvc2VzLlxuICovXG5jb25zdCBjcmVhdGVLZXlib2FyZENvbnRyb2xsZXIgPSAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaykgPT4ge1xuICBsZXQga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXI7XG4gIGxldCBrZXlib2FyZFdpbGxIaWRlSGFuZGxlcjtcbiAgbGV0IGtleWJvYXJkVmlzaWJsZTtcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBrZXlib2FyZFdpbGxTaG93SGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGtleWJvYXJkVmlzaWJsZSA9IHRydWU7XG4gICAgICBpZiAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaylcbiAgICAgICAga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayh0cnVlKTtcbiAgICB9O1xuICAgIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAga2V5Ym9hcmRWaXNpYmxlID0gZmFsc2U7XG4gICAgICBpZiAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaylcbiAgICAgICAga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayhmYWxzZSk7XG4gICAgfTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsU2hvdycsIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyKTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsSGlkZScsIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyKTtcbiAgfTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsU2hvdycsIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyKTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsSGlkZScsIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyKTtcbiAgICBrZXlib2FyZFdpbGxTaG93SGFuZGxlciA9IGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyID0gdW5kZWZpbmVkO1xuICB9O1xuICBjb25zdCBpc0tleWJvYXJkVmlzaWJsZSA9ICgpID0+IGtleWJvYXJkVmlzaWJsZTtcbiAgaW5pdCgpO1xuICByZXR1cm4geyBpbml0LCBkZXN0cm95LCBpc0tleWJvYXJkVmlzaWJsZSB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyIGFzIGMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBzcGlubmVycyA9IHtcbiAgYnViYmxlczoge1xuICAgIGR1cjogMTAwMCxcbiAgICBjaXJjbGVzOiA5LFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBNYXRoLlBJICogaW5kZXgpIC8gdG90YWw7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRvcDogYCR7OSAqIE1hdGguc2luKGFuZ2xlKX1weGAsXG4gICAgICAgICAgbGVmdDogYCR7OSAqIE1hdGguY29zKGFuZ2xlKX1weGAsXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBjaXJjbGVzOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGNpcmNsZXM6IDgsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3Qgc3RlcCA9IGluZGV4IC8gdG90YWw7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAke2R1ciAqIHN0ZXAgLSBkdXJ9bXNgO1xuICAgICAgY29uc3QgYW5nbGUgPSAyICogTWF0aC5QSSAqIHN0ZXA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRvcDogYCR7OSAqIE1hdGguc2luKGFuZ2xlKX1weGAsXG4gICAgICAgICAgbGVmdDogYCR7OSAqIE1hdGguY29zKGFuZ2xlKX1weGAsXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBjaXJjdWxhcjoge1xuICAgIGR1cjogMTQwMCxcbiAgICBlbG1EdXJhdGlvbjogdHJ1ZSxcbiAgICBjaXJjbGVzOiAxLFxuICAgIGZuOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiAyMCxcbiAgICAgICAgY3g6IDQ4LFxuICAgICAgICBjeTogNDgsXG4gICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgdmlld0JveDogJzI0IDI0IDQ4IDQ4JyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsMCknLFxuICAgICAgICBzdHlsZToge30sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGNyZXNjZW50OiB7XG4gICAgZHVyOiA3NTAsXG4gICAgY2lyY2xlczogMSxcbiAgICBmbjogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogMjYsXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgZG90czoge1xuICAgIGR1cjogNzUwLFxuICAgIGNpcmNsZXM6IDMsXG4gICAgZm46IChfLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSAtKDExMCAqIGluZGV4KSArICdtcyc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA2LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGxlZnQ6IGAkezkgLSA5ICogaW5kZXh9cHhgLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgbGluZXM6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgbGluZXM6IDgsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkeygzNjAgLyB0b3RhbCkgKiBpbmRleCArIChpbmRleCA8IHRvdGFsIC8gMiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeTE6IDE0LFxuICAgICAgICB5MjogMjYsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICAnbGluZXMtc21hbGwnOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGxpbmVzOiA4LFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHsoMzYwIC8gdG90YWwpICogaW5kZXggKyAoaW5kZXggPCB0b3RhbCAvIDIgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHkxOiAxMixcbiAgICAgICAgeTI6IDIwLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgJ2xpbmVzLXNoYXJwJzoge1xuICAgIGR1cjogMTAwMCxcbiAgICBsaW5lczogMTIsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkezMwICogaW5kZXggKyAoaW5kZXggPCA2ID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5MTogMTcsXG4gICAgICAgIHkyOiAyOSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gICdsaW5lcy1zaGFycC1zbWFsbCc6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgbGluZXM6IDEyLFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHszMCAqIGluZGV4ICsgKGluZGV4IDwgNiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeTE6IDEyLFxuICAgICAgICB5MjogMjAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxufTtcbmNvbnN0IFNQSU5ORVJTID0gc3Bpbm5lcnM7XG5cbmV4cG9ydCB7IFNQSU5ORVJTIGFzIFMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBsIGFzIGNsYW1wIH0gZnJvbSAnLi9oZWxwZXJzLTNiMzkwZTQ4LmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1lOGI3NjdhOC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC1mOGQ4YWE1YS5qcyc7XG5pbXBvcnQgJy4vZ2VzdHVyZS1jb250cm9sbGVyLTE3MDYwYjdjLmpzJztcblxuY29uc3QgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSA9IChlbCwgY2FuU3RhcnRIYW5kbGVyLCBvblN0YXJ0SGFuZGxlciwgb25Nb3ZlSGFuZGxlciwgb25FbmRIYW5kbGVyKSA9PiB7XG4gIGNvbnN0IHdpbiA9IGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IHJ0bCA9IGlzUlRMKGVsKTtcbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIGdlc3R1cmUgaXMgbmVhciB0aGUgZWRnZVxuICAgKiBvZiB0aGUgc2NyZWVuLiBJZiB0cnVlLCB0aGVuIHRoZSBzd2lwZVxuICAgKiB0byBnbyBiYWNrIGdlc3R1cmUgc2hvdWxkIHByb2NlZWQuXG4gICAqL1xuICBjb25zdCBpc0F0RWRnZSA9IChkZXRhaWwpID0+IHtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSA1MDtcbiAgICBjb25zdCB7IHN0YXJ0WCB9ID0gZGV0YWlsO1xuICAgIGlmIChydGwpIHtcbiAgICAgIHJldHVybiBzdGFydFggPj0gd2luLmlubmVyV2lkdGggLSB0aHJlc2hvbGQ7XG4gICAgfVxuICAgIHJldHVybiBzdGFydFggPD0gdGhyZXNob2xkO1xuICB9O1xuICBjb25zdCBnZXREZWx0YVggPSAoZGV0YWlsKSA9PiB7XG4gICAgcmV0dXJuIHJ0bCA/IC1kZXRhaWwuZGVsdGFYIDogZGV0YWlsLmRlbHRhWDtcbiAgfTtcbiAgY29uc3QgZ2V0VmVsb2NpdHlYID0gKGRldGFpbCkgPT4ge1xuICAgIHJldHVybiBydGwgPyAtZGV0YWlsLnZlbG9jaXR5WCA6IGRldGFpbC52ZWxvY2l0eVg7XG4gIH07XG4gIGNvbnN0IGNhblN0YXJ0ID0gKGRldGFpbCkgPT4ge1xuICAgIHJldHVybiBpc0F0RWRnZShkZXRhaWwpICYmIGNhblN0YXJ0SGFuZGxlcigpO1xuICB9O1xuICBjb25zdCBvbk1vdmUgPSAoZGV0YWlsKSA9PiB7XG4gICAgLy8gc2V0IHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvbidzIHByb2dyZXNzXG4gICAgY29uc3QgZGVsdGEgPSBnZXREZWx0YVgoZGV0YWlsKTtcbiAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpbi5pbm5lcldpZHRoO1xuICAgIG9uTW92ZUhhbmRsZXIoc3RlcFZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgb25FbmQgPSAoZGV0YWlsKSA9PiB7XG4gICAgLy8gdGhlIHN3aXBlIGJhY2sgZ2VzdHVyZSBoYXMgZW5kZWRcbiAgICBjb25zdCBkZWx0YSA9IGdldERlbHRhWChkZXRhaWwpO1xuICAgIGNvbnN0IHdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB3aWR0aDtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IGdldFZlbG9jaXR5WChkZXRhaWwpO1xuICAgIGNvbnN0IHogPSB3aWR0aCAvIDIuMDtcbiAgICBjb25zdCBzaG91bGRDb21wbGV0ZSA9IHZlbG9jaXR5ID49IDAgJiYgKHZlbG9jaXR5ID4gMC4yIHx8IGRlbHRhID4geik7XG4gICAgY29uc3QgbWlzc2luZyA9IHNob3VsZENvbXBsZXRlID8gMSAtIHN0ZXBWYWx1ZSA6IHN0ZXBWYWx1ZTtcbiAgICBjb25zdCBtaXNzaW5nRGlzdGFuY2UgPSBtaXNzaW5nICogd2lkdGg7XG4gICAgbGV0IHJlYWxEdXIgPSAwO1xuICAgIGlmIChtaXNzaW5nRGlzdGFuY2UgPiA1KSB7XG4gICAgICBjb25zdCBkdXIgPSBtaXNzaW5nRGlzdGFuY2UgLyBNYXRoLmFicyh2ZWxvY2l0eSk7XG4gICAgICByZWFsRHVyID0gTWF0aC5taW4oZHVyLCA1NDApO1xuICAgIH1cbiAgICBvbkVuZEhhbmRsZXIoc2hvdWxkQ29tcGxldGUsIHN0ZXBWYWx1ZSA8PSAwID8gMC4wMSA6IGNsYW1wKDAsIHN0ZXBWYWx1ZSwgMC45OTk5KSwgcmVhbER1cik7XG4gIH07XG4gIHJldHVybiBjcmVhdGVHZXN0dXJlKHtcbiAgICBlbCxcbiAgICBnZXN0dXJlTmFtZTogJ2dvYmFjay1zd2lwZScsXG4gICAgZ2VzdHVyZVByaW9yaXR5OiA0MCxcbiAgICB0aHJlc2hvbGQ6IDEwLFxuICAgIGNhblN0YXJ0LFxuICAgIG9uU3RhcnQ6IG9uU3RhcnRIYW5kbGVyLFxuICAgIG9uTW92ZSxcbiAgICBvbkVuZCxcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVTd2lwZUJhY2tHZXN0dXJlIH07XG4iXSwibmFtZXMiOlsiYyIsIndyaXRlVGFzayIsImgiLCJoYXB0aWNTZWxlY3Rpb25FbmQiLCJhIiwiaGFwdGljU2VsZWN0aW9uU3RhcnQiLCJiIiwiaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCIsImNyZWF0ZUdlc3R1cmUiLCJjcmVhdGVCdXR0b25BY3RpdmVHZXN0dXJlIiwiZWwiLCJpc0J1dHRvbiIsImN1cnJlbnRUb3VjaGVkQnV0dG9uIiwiaW5pdGlhbFRvdWNoZWRCdXR0b24iLCJhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQiLCJ4IiwieSIsImhhcHRpY0ZlZWRiYWNrRm4iLCJkb2N1bWVudCIsInRhcmdldCIsImVsZW1lbnRGcm9tUG9pbnQiLCJjbGVhckFjdGl2ZUJ1dHRvbiIsInNldEFjdGl2ZUJ1dHRvbiIsImJ1dHRvbiIsImJ1dHRvblRvTW9kaWZ5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGF0Y2hDbGljayIsInJlbW92ZSIsImNsaWNrIiwidW5kZWZpbmVkIiwiZ2VzdHVyZU5hbWUiLCJ0aHJlc2hvbGQiLCJvblN0YXJ0IiwiZXYiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwib25Nb3ZlIiwib25FbmQiLCJpc1JUTCIsImhvc3RFbCIsImRpciIsInRvTG93ZXJDYXNlIiwiaSIsIklPTl9GT0NVU0VEIiwiSU9OX0ZPQ1VTQUJMRSIsIkZPQ1VTX0tFWVMiLCJzdGFydEZvY3VzVmlzaWJsZSIsInJvb3RFbCIsImN1cnJlbnRGb2N1cyIsImtleWJvYXJkTW9kZSIsInJlZiIsInNoYWRvd1Jvb3QiLCJyb290IiwiYm9keSIsInNldEZvY3VzIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwicG9pbnRlckRvd24iLCJvbktleWRvd24iLCJpbmNsdWRlcyIsImtleSIsIm9uRm9jdXNpbiIsImNvbXBvc2VkUGF0aCIsInRvRm9jdXMiLCJmaWx0ZXIiLCJjb250YWlucyIsIm9uRm9jdXNvdXQiLCJhY3RpdmVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29tcG9uZW50T25SZWFkeSIsImF0dGFjaENvbXBvbmVudCIsImRlbGVnYXRlIiwiY29udGFpbmVyIiwiY29tcG9uZW50IiwiY3NzQ2xhc3NlcyIsImNvbXBvbmVudFByb3BzIiwiaW5saW5lIiwiX2EiLCJhdHRhY2hWaWV3VG9Eb20iLCJIVE1MRWxlbWVudCIsIkVycm9yIiwib3duZXJEb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJhcHBlbmRDaGlsZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZGV0YWNoQ29tcG9uZW50IiwiZWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVWaWV3RnJvbURvbSIsIkNvcmVEZWxlZ2F0ZSIsIkJhc2VDb21wb25lbnQiLCJSZWZlcmVuY2UiLCJ1c2VyQ29tcG9uZW50IiwidXNlckNvbXBvbmVudFByb3BzIiwiX2IiLCJjaGlsZHJlbiIsImxlbmd0aCIsImFwcGVuZCIsImFwcCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVDb21tZW50IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIkMiLCJkIiwiSGFwdGljRW5naW5lIiwiZ2V0RW5naW5lIiwid2luIiwid2luZG93IiwiVGFwdGljRW5naW5lIiwiQ2FwYWNpdG9yIiwiaXNQbHVnaW5BdmFpbGFibGUiLCJQbHVnaW5zIiwiSGFwdGljcyIsImF2YWlsYWJsZSIsImVuZ2luZSIsImdldFBsYXRmb3JtIiwibmF2aWdhdG9yIiwidmlicmF0ZSIsImlzQ29yZG92YSIsImlzQ2FwYWNpdG9yIiwiaW1wYWN0Iiwib3B0aW9ucyIsInN0eWxlIiwidG9VcHBlckNhc2UiLCJub3RpZmljYXRpb24iLCJzZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydCIsImdlc3R1cmVTZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkNoYW5nZWQiLCJnZXN0dXJlU2VsZWN0aW9uQ2hhbmdlZCIsInNlbGVjdGlvbkVuZCIsImdlc3R1cmVTZWxlY3Rpb25FbmQiLCJoYXB0aWNBdmFpbGFibGUiLCJoYXB0aWNTZWxlY3Rpb24iLCJoYXB0aWNJbXBhY3QiLCJwcmludFJlcXVpcmVkRWxlbWVudEVycm9yIiwiSU9OX0NPTlRFTlRfVEFHX05BTUUiLCJJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SIiwiSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IiLCJJT05fQ09OVEVOVF9TRUxFQ1RPUiIsImlzSW9uQ29udGVudCIsInRhZ05hbWUiLCJnZXRTY3JvbGxFbGVtZW50IiwiZmluZElvbkNvbnRlbnQiLCJjdXN0b21Db250ZW50SG9zdCIsImZpbmRDbG9zZXN0SW9uQ29udGVudCIsImNsb3Nlc3QiLCJzY3JvbGxUb1RvcCIsImR1cmF0aW9uTXMiLCJjb250ZW50Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJzY3JvbGxCeVBvaW50Iiwic2Nyb2xsQnkiLCJwcmludElvbkNvbnRlbnRFcnJvck1zZyIsImRpc2FibGVDb250ZW50U2Nyb2xsWSIsImNvbnRlbnRFbCIsImlvbkNvbnRlbnQiLCJpbml0aWFsU2Nyb2xsWSIsInNjcm9sbFkiLCJzZXRQcm9wZXJ0eSIsInJlc2V0Q29udGVudFNjcm9sbFkiLCJyZW1vdmVQcm9wZXJ0eSIsIkkiLCJmIiwiZyIsInAiLCJyIiwicyIsImFycm93QmFja1NoYXJwIiwiYXJyb3dEb3duIiwiY2FyZXRCYWNrU2hhcnAiLCJjYXJldERvd25TaGFycCIsImNhcmV0VXBTaGFycCIsImNoZWNrbWFya091dGxpbmUiLCJjaGV2cm9uQmFjayIsImNoZXZyb25Eb3duIiwiY2hldnJvbkZvcndhcmQiLCJjaGV2cm9uRm9yd2FyZE91dGxpbmUiLCJjbG9zZSIsImNsb3NlQ2lyY2xlIiwiY2xvc2VTaGFycCIsImVsbGlwc2VPdXRsaW5lIiwiZWxsaXBzaXNIb3Jpem9udGFsIiwibWVudU91dGxpbmUiLCJtZW51U2hhcnAiLCJyZW1vdmVPdXRsaW5lIiwicmVvcmRlclRocmVlT3V0bGluZSIsInJlb3JkZXJUd29TaGFycCIsInNlYXJjaE91dGxpbmUiLCJzZWFyY2hTaGFycCIsImUiLCJqIiwiayIsImwiLCJtIiwibiIsIm8iLCJxIiwidCIsInUiLCJ2IiwiS0VZQk9BUkRfRElEX09QRU4iLCJLRVlCT0FSRF9ESURfQ0xPU0UiLCJLRVlCT0FSRF9USFJFU0hPTEQiLCJwcmV2aW91c1Zpc3VhbFZpZXdwb3J0IiwiY3VycmVudFZpc3VhbFZpZXdwb3J0Iiwia2V5Ym9hcmRPcGVuIiwicmVzZXRLZXlib2FyZEFzc2lzdCIsInN0YXJ0S2V5Ym9hcmRBc3Npc3QiLCJzdGFydE5hdGl2ZUxpc3RlbmVycyIsInZpc3VhbFZpZXdwb3J0IiwiY29weVZpc3VhbFZpZXdwb3J0Iiwib25yZXNpemUiLCJ0cmFja1ZpZXdwb3J0Q2hhbmdlcyIsImtleWJvYXJkRGlkT3BlbiIsImtleWJvYXJkRGlkUmVzaXplIiwic2V0S2V5Ym9hcmRPcGVuIiwia2V5Ym9hcmREaWRDbG9zZSIsInNldEtleWJvYXJkQ2xvc2UiLCJmaXJlS2V5Ym9hcmRPcGVuRXZlbnQiLCJmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50Iiwic2NhbGVkSGVpZ2h0RGlmZmVyZW5jZSIsImhlaWdodCIsInNjYWxlIiwid2lkdGgiLCJpbm5lckhlaWdodCIsIm5hdGl2ZUV2Iiwia2V5Ym9hcmRIZWlnaHQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJNYXRoIiwicm91bmQiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwicGFnZVRvcCIsInBhZ2VMZWZ0IiwidyIsImNyZWF0ZUtleWJvYXJkQ29udHJvbGxlciIsImtleWJvYXJkQ2hhbmdlQ2FsbGJhY2siLCJrZXlib2FyZFdpbGxTaG93SGFuZGxlciIsImtleWJvYXJkV2lsbEhpZGVIYW5kbGVyIiwia2V5Ym9hcmRWaXNpYmxlIiwiaW5pdCIsImlzS2V5Ym9hcmRWaXNpYmxlIiwic3Bpbm5lcnMiLCJidWJibGVzIiwiZHVyIiwiY2lyY2xlcyIsImZuIiwiaW5kZXgiLCJ0b3RhbCIsImFuaW1hdGlvbkRlbGF5IiwiYW5nbGUiLCJQSSIsInNpbiIsImNvcyIsInN0ZXAiLCJjaXJjdWxhciIsImVsbUR1cmF0aW9uIiwiY3giLCJjeSIsImZpbGwiLCJ2aWV3Qm94IiwidHJhbnNmb3JtIiwiY3Jlc2NlbnQiLCJkb3RzIiwiXyIsImxpbmVzIiwieTEiLCJ5MiIsIlNQSU5ORVJTIiwiUyIsImNsYW1wIiwiY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSIsImNhblN0YXJ0SGFuZGxlciIsIm9uU3RhcnRIYW5kbGVyIiwib25Nb3ZlSGFuZGxlciIsIm9uRW5kSGFuZGxlciIsImRlZmF1bHRWaWV3IiwicnRsIiwiaXNBdEVkZ2UiLCJzdGFydFgiLCJpbm5lcldpZHRoIiwiZ2V0RGVsdGFYIiwiZGVsdGFYIiwiZ2V0VmVsb2NpdHlYIiwidmVsb2NpdHlYIiwiY2FuU3RhcnQiLCJkZWx0YSIsInN0ZXBWYWx1ZSIsInZlbG9jaXR5IiwieiIsInNob3VsZENvbXBsZXRlIiwibWlzc2luZyIsIm1pc3NpbmdEaXN0YW5jZSIsInJlYWxEdXIiLCJhYnMiLCJtaW4iLCJnZXN0dXJlUHJpb3JpdHkiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsNyw4LDksMTBdfQ==