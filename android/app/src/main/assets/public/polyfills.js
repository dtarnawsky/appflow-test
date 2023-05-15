(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["polyfills"],{

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zone_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zone-flags */ 8270);
/* harmony import */ var _zone_flags__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zone_flags__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ 3484);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 8270:
/*!***************************!*\
  !*** ./src/zone-flags.ts ***!
  \***************************/
/***/ (() => {

/**
 * Prevents Angular change detection from
 * running with certain Web Component callbacks
 */
// eslint-disable-next-line no-underscore-dangle
window.__Zone_disable_customElements = true;


/***/ }),

/***/ 3484:
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * @license Angular v14.2.0-next.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */


(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function () {
  'use strict';
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  (function (global) {
    var performance = global['performance'];

    function mark(name) {
      performance && performance['mark'] && performance['mark'](name);
    }

    function performanceMeasure(name, label) {
      performance && performance['measure'] && performance['measure'](name, label);
    }

    mark('Zone'); // Initialize before it's accessed below.
    // __Zone_symbol_prefix global can be used to override the default zone
    // symbol prefix with a custom one if needed.

    var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

    function __symbol__(name) {
      return symbolPrefix + name;
    }

    var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

    if (global['Zone']) {
      // if global['Zone'] already exists (maybe zone.js was already loaded or
      // some other lib also registered a global object named Zone), we may need
      // to throw an error, but sometimes user may not want this error.
      // For example,
      // we have two web pages, page1 includes zone.js, page2 doesn't.
      // and the 1st time user load page1 and page2, everything work fine,
      // but when user load page2 again, error occurs because global['Zone'] already exists.
      // so we add a flag to let user choose whether to throw this error or not.
      // By default, if existing Zone is from zone.js, we will not throw the error.
      if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
        throw new Error('Zone already loaded.');
      } else {
        return global['Zone'];
      }
    }

    var Zone =
    /** @class */
    function () {
      function Zone(parent, zoneSpec) {
        this._parent = parent;
        this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
        this._properties = zoneSpec && zoneSpec.properties || {};
        this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
      }

      Zone.assertZonePatched = function () {
        if (global['Promise'] !== patches['ZoneAwarePromise']) {
          throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
        }
      };

      Object.defineProperty(Zone, "root", {
        get: function () {
          var zone = Zone.current;

          while (zone.parent) {
            zone = zone.parent;
          }

          return zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Zone, "current", {
        get: function () {
          return _currentZoneFrame.zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Zone, "currentTask", {
        get: function () {
          return _currentTask;
        },
        enumerable: false,
        configurable: true
      }); // tslint:disable-next-line:require-internal-with-underscore

      Zone.__load_patch = function (name, fn, ignoreDuplicate) {
        if (ignoreDuplicate === void 0) {
          ignoreDuplicate = false;
        }

        if (patches.hasOwnProperty(name)) {
          // `checkDuplicate` option is defined from global variable
          // so it works for all modules.
          // `ignoreDuplicate` can work for the specified module
          if (!ignoreDuplicate && checkDuplicate) {
            throw Error('Already loaded patch: ' + name);
          }
        } else if (!global['__Zone_disable_' + name]) {
          var perfName = 'Zone:' + name;
          mark(perfName);
          patches[name] = fn(global, Zone, _api);
          performanceMeasure(perfName, perfName);
        }
      };

      Object.defineProperty(Zone.prototype, "parent", {
        get: function () {
          return this._parent;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Zone.prototype, "name", {
        get: function () {
          return this._name;
        },
        enumerable: false,
        configurable: true
      });

      Zone.prototype.get = function (key) {
        var zone = this.getZoneWith(key);
        if (zone) return zone._properties[key];
      };

      Zone.prototype.getZoneWith = function (key) {
        var current = this;

        while (current) {
          if (current._properties.hasOwnProperty(key)) {
            return current;
          }

          current = current._parent;
        }

        return null;
      };

      Zone.prototype.fork = function (zoneSpec) {
        if (!zoneSpec) throw new Error('ZoneSpec required!');
        return this._zoneDelegate.fork(this, zoneSpec);
      };

      Zone.prototype.wrap = function (callback, source) {
        if (typeof callback !== 'function') {
          throw new Error('Expecting function got: ' + callback);
        }

        var _callback = this._zoneDelegate.intercept(this, callback, source);

        var zone = this;
        return function () {
          return zone.runGuarded(_callback, this, arguments, source);
        };
      };

      Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };

      Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
        if (applyThis === void 0) {
          applyThis = null;
        }

        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          try {
            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };

      Zone.prototype.runTask = function (task, applyThis, applyArgs) {
        if (task.zone != this) {
          throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
        } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
        // will run in notScheduled(canceled) state, we should not try to
        // run such kind of task but just return


        if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
          return;
        }

        var reEntryGuard = task.state != running;
        reEntryGuard && task._transitionTo(running, scheduled);
        task.runCount++;
        var previousTask = _currentTask;
        _currentTask = task;
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          if (task.type == macroTask && task.data && !task.data.isPeriodic) {
            task.cancelFn = undefined;
          }

          try {
            return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          // if the task's state is notScheduled or unknown, then it has already been cancelled
          // we should not reset the state to scheduled
          if (task.state !== notScheduled && task.state !== unknown) {
            if (task.type == eventTask || task.data && task.data.isPeriodic) {
              reEntryGuard && task._transitionTo(scheduled, running);
            } else {
              task.runCount = 0;

              this._updateTaskCount(task, -1);

              reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
            }
          }

          _currentZoneFrame = _currentZoneFrame.parent;
          _currentTask = previousTask;
        }
      };

      Zone.prototype.scheduleTask = function (task) {
        if (task.zone && task.zone !== this) {
          // check if the task was rescheduled, the newZone
          // should not be the children of the original zone
          var newZone = this;

          while (newZone) {
            if (newZone === task.zone) {
              throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
            }

            newZone = newZone.parent;
          }
        }

        task._transitionTo(scheduling, notScheduled);

        var zoneDelegates = [];
        task._zoneDelegates = zoneDelegates;
        task._zone = this;

        try {
          task = this._zoneDelegate.scheduleTask(this, task);
        } catch (err) {
          // should set task's state to unknown when scheduleTask throw error
          // because the err may from reschedule, so the fromState maybe notScheduled
          task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        if (task._zoneDelegates === zoneDelegates) {
          // we have to check because internally the delegate can reschedule the task.
          this._updateTaskCount(task, 1);
        }

        if (task.state == scheduling) {
          task._transitionTo(scheduled, scheduling);
        }

        return task;
      };

      Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
      };

      Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
      };

      Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
      };

      Zone.prototype.cancelTask = function (task) {
        if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

        task._transitionTo(canceling, scheduled, running);

        try {
          this._zoneDelegate.cancelTask(this, task);
        } catch (err) {
          // if error occurs when cancelTask, transit the state to unknown
          task._transitionTo(unknown, canceling);

          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        this._updateTaskCount(task, -1);

        task._transitionTo(notScheduled, canceling);

        task.runCount = 0;
        return task;
      };

      Zone.prototype._updateTaskCount = function (task, count) {
        var zoneDelegates = task._zoneDelegates;

        if (count == -1) {
          task._zoneDelegates = null;
        }

        for (var i = 0; i < zoneDelegates.length; i++) {
          zoneDelegates[i]._updateTaskCount(task.type, count);
        }
      };

      return Zone;
    }(); // tslint:disable-next-line:require-internal-with-underscore


    Zone.__symbol__ = __symbol__;
    var DELEGATE_ZS = {
      name: '',
      onHasTask: function (delegate, _, target, hasTaskState) {
        return delegate.hasTask(target, hasTaskState);
      },
      onScheduleTask: function (delegate, _, target, task) {
        return delegate.scheduleTask(target, task);
      },
      onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
        return delegate.invokeTask(target, task, applyThis, applyArgs);
      },
      onCancelTask: function (delegate, _, target, task) {
        return delegate.cancelTask(target, task);
      }
    };

    var _ZoneDelegate =
    /** @class */
    function () {
      function _ZoneDelegate(zone, parentDelegate, zoneSpec) {
        this._taskCounts = {
          'microTask': 0,
          'macroTask': 0,
          'eventTask': 0
        };
        this.zone = zone;
        this._parentDelegate = parentDelegate;
        this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
        this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
        this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
        this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
        this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
        this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
        this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
        this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
        this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
        this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
        this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
        this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
        this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
        this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
        this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
        this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
        this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
        this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
        this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
        this._hasTaskZS = null;
        this._hasTaskDlgt = null;
        this._hasTaskDlgtOwner = null;
        this._hasTaskCurrZone = null;
        var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
        var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

        if (zoneSpecHasTask || parentHasTask) {
          // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
          // a case all task related interceptors must go through this ZD. We can't short circuit it.
          this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
          this._hasTaskDlgt = parentDelegate;
          this._hasTaskDlgtOwner = this;
          this._hasTaskCurrZone = zone;

          if (!zoneSpec.onScheduleTask) {
            this._scheduleTaskZS = DELEGATE_ZS;
            this._scheduleTaskDlgt = parentDelegate;
            this._scheduleTaskCurrZone = this.zone;
          }

          if (!zoneSpec.onInvokeTask) {
            this._invokeTaskZS = DELEGATE_ZS;
            this._invokeTaskDlgt = parentDelegate;
            this._invokeTaskCurrZone = this.zone;
          }

          if (!zoneSpec.onCancelTask) {
            this._cancelTaskZS = DELEGATE_ZS;
            this._cancelTaskDlgt = parentDelegate;
            this._cancelTaskCurrZone = this.zone;
          }
        }
      }

      _ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
      };

      _ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
      };

      _ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
      };

      _ZoneDelegate.prototype.handleError = function (targetZone, error) {
        return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
      };

      _ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
        var returnTask = task;

        if (this._scheduleTaskZS) {
          if (this._hasTaskZS) {
            returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
          } // clang-format off


          returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

          if (!returnTask) returnTask = task;
        } else {
          if (task.scheduleFn) {
            task.scheduleFn(task);
          } else if (task.type == microTask) {
            scheduleMicroTask(task);
          } else {
            throw new Error('Task is missing scheduleFn.');
          }
        }

        return returnTask;
      };

      _ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
      };

      _ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
        var value;

        if (this._cancelTaskZS) {
          value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
        } else {
          if (!task.cancelFn) {
            throw Error('Task is not cancelable');
          }

          value = task.cancelFn(task);
        }

        return value;
      };

      _ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
        // hasTask should not throw error so other ZoneDelegate
        // can still trigger hasTask callback
        try {
          this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
        } catch (err) {
          this.handleError(targetZone, err);
        }
      }; // tslint:disable-next-line:require-internal-with-underscore


      _ZoneDelegate.prototype._updateTaskCount = function (type, count) {
        var counts = this._taskCounts;
        var prev = counts[type];
        var next = counts[type] = prev + count;

        if (next < 0) {
          throw new Error('More tasks executed then were scheduled.');
        }

        if (prev == 0 || next == 0) {
          var isEmpty = {
            microTask: counts['microTask'] > 0,
            macroTask: counts['macroTask'] > 0,
            eventTask: counts['eventTask'] > 0,
            change: type
          };
          this.hasTask(this.zone, isEmpty);
        }
      };

      return _ZoneDelegate;
    }();

    var ZoneTask =
    /** @class */
    function () {
      function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
        // tslint:disable-next-line:require-internal-with-underscore
        this._zone = null;
        this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

        this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

        this._state = 'notScheduled';
        this.type = type;
        this.source = source;
        this.data = options;
        this.scheduleFn = scheduleFn;
        this.cancelFn = cancelFn;

        if (!callback) {
          throw new Error('callback is not defined');
        }

        this.callback = callback;
        var self = this; // TODO: @JiaLiPassion options should have interface

        if (type === eventTask && options && options.useG) {
          this.invoke = ZoneTask.invokeTask;
        } else {
          this.invoke = function () {
            return ZoneTask.invokeTask.call(global, self, this, arguments);
          };
        }
      }

      ZoneTask.invokeTask = function (task, target, args) {
        if (!task) {
          task = this;
        }

        _numberOfNestedTaskFrames++;

        try {
          task.runCount++;
          return task.zone.runTask(task, target, args);
        } finally {
          if (_numberOfNestedTaskFrames == 1) {
            drainMicroTaskQueue();
          }

          _numberOfNestedTaskFrames--;
        }
      };

      Object.defineProperty(ZoneTask.prototype, "zone", {
        get: function () {
          return this._zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ZoneTask.prototype, "state", {
        get: function () {
          return this._state;
        },
        enumerable: false,
        configurable: true
      });

      ZoneTask.prototype.cancelScheduleRequest = function () {
        this._transitionTo(notScheduled, scheduling);
      }; // tslint:disable-next-line:require-internal-with-underscore


      ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
        if (this._state === fromState1 || this._state === fromState2) {
          this._state = toState;

          if (toState == notScheduled) {
            this._zoneDelegates = null;
          }
        } else {
          throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
        }
      };

      ZoneTask.prototype.toString = function () {
        if (this.data && typeof this.data.handleId !== 'undefined') {
          return this.data.handleId.toString();
        } else {
          return Object.prototype.toString.call(this);
        }
      }; // add toJSON method to prevent cyclic error when
      // call JSON.stringify(zoneTask)


      ZoneTask.prototype.toJSON = function () {
        return {
          type: this.type,
          state: this.state,
          source: this.source,
          zone: this.zone.name,
          runCount: this.runCount
        };
      };

      return ZoneTask;
    }(); //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    var symbolSetTimeout = __symbol__('setTimeout');

    var symbolPromise = __symbol__('Promise');

    var symbolThen = __symbol__('then');

    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;

    function nativeScheduleMicroTask(func) {
      if (!nativeMicroTaskQueuePromise) {
        if (global[symbolPromise]) {
          nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
        }
      }

      if (nativeMicroTaskQueuePromise) {
        var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

        if (!nativeThen) {
          // native Promise is not patchable, we need to use `then` directly
          // issue 1078
          nativeThen = nativeMicroTaskQueuePromise['then'];
        }

        nativeThen.call(nativeMicroTaskQueuePromise, func);
      } else {
        global[symbolSetTimeout](func, 0);
      }
    }

    function scheduleMicroTask(task) {
      // if we are not running in any task, and there has not been anything scheduled
      // we must bootstrap the initial task creation by manually scheduling the drain
      if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
        // We are not running in Task, so we need to kickstart the microtask queue.
        nativeScheduleMicroTask(drainMicroTaskQueue);
      }

      task && _microTaskQueue.push(task);
    }

    function drainMicroTaskQueue() {
      if (!_isDrainingMicrotaskQueue) {
        _isDrainingMicrotaskQueue = true;

        while (_microTaskQueue.length) {
          var queue = _microTaskQueue;
          _microTaskQueue = [];

          for (var i = 0; i < queue.length; i++) {
            var task = queue[i];

            try {
              task.zone.runTask(task, null, null);
            } catch (error) {
              _api.onUnhandledError(error);
            }
          }
        }

        _api.microtaskDrainDone();

        _isDrainingMicrotaskQueue = false;
      }
    } //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    var NO_ZONE = {
      name: 'NO ZONE'
    };
    var notScheduled = 'notScheduled',
        scheduling = 'scheduling',
        scheduled = 'scheduled',
        running = 'running',
        canceling = 'canceling',
        unknown = 'unknown';
    var microTask = 'microTask',
        macroTask = 'macroTask',
        eventTask = 'eventTask';
    var patches = {};
    var _api = {
      symbol: __symbol__,
      currentZoneFrame: function () {
        return _currentZoneFrame;
      },
      onUnhandledError: noop,
      microtaskDrainDone: noop,
      scheduleMicroTask: scheduleMicroTask,
      showUncaughtError: function () {
        return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
      },
      patchEventTarget: function () {
        return [];
      },
      patchOnProperties: noop,
      patchMethod: function () {
        return noop;
      },
      bindArguments: function () {
        return [];
      },
      patchThen: function () {
        return noop;
      },
      patchMacroTask: function () {
        return noop;
      },
      patchEventPrototype: function () {
        return noop;
      },
      isIEOrEdge: function () {
        return false;
      },
      getGlobalObjects: function () {
        return undefined;
      },
      ObjectDefineProperty: function () {
        return noop;
      },
      ObjectGetOwnPropertyDescriptor: function () {
        return undefined;
      },
      ObjectCreate: function () {
        return undefined;
      },
      ArraySlice: function () {
        return [];
      },
      patchClass: function () {
        return noop;
      },
      wrapWithCurrentZone: function () {
        return noop;
      },
      filterProperties: function () {
        return [];
      },
      attachOriginToPatched: function () {
        return noop;
      },
      _redefineProperty: function () {
        return noop;
      },
      patchCallbacks: function () {
        return noop;
      },
      nativeScheduleMicroTask: nativeScheduleMicroTask
    };
    var _currentZoneFrame = {
      parent: null,
      zone: new Zone(null, null)
    };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;

    function noop() {}

    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
  })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  /**
   * Suppress closure compiler errors about unknown 'Zone' variable
   * @fileoverview
   * @suppress {undefinedVars,globalThis,missingRequire}
   */
  /// <reference types="node"/>
  // issue #989, to reduce bundle size, use short name

  /** Object.getOwnPropertyDescriptor */


  var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  /** Object.defineProperty */

  var ObjectDefineProperty = Object.defineProperty;
  /** Object.getPrototypeOf */

  var ObjectGetPrototypeOf = Object.getPrototypeOf;
  /** Object.create */

  var ObjectCreate = Object.create;
  /** Array.prototype.slice */

  var ArraySlice = Array.prototype.slice;
  /** addEventListener string const */

  var ADD_EVENT_LISTENER_STR = 'addEventListener';
  /** removeEventListener string const */

  var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
  /** zoneSymbol addEventListener */

  var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
  /** zoneSymbol removeEventListener */


  var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
  /** true string const */


  var TRUE_STR = 'true';
  /** false string const */

  var FALSE_STR = 'false';
  /** Zone symbol prefix string const. */

  var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

  function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
  }

  function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
  }

  var zoneSymbol$1 = Zone.__symbol__;
  var isWindowExists = typeof window !== 'undefined';
  var internalWindow = isWindowExists ? window : undefined;

  var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

  var REMOVE_ATTRIBUTE = 'removeAttribute';

  function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
      if (typeof args[i] === 'function') {
        args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
      }
    }

    return args;
  }

  function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];

    var _loop_1 = function (i) {
      var name_1 = fnNames[i];
      var delegate = prototype[name_1];

      if (delegate) {
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);

        if (!isPropertyWritable(prototypeDesc)) {
          return "continue";
        }

        prototype[name_1] = function (delegate) {
          var patched = function () {
            return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
          };

          attachOriginToPatched(patched, delegate);
          return patched;
        }(delegate);
      }
    };

    for (var i = 0; i < fnNames.length; i++) {
      _loop_1(i);
    }
  }

  function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
      return true;
    }

    if (propertyDesc.writable === false) {
      return false;
    }

    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
  }

  var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.

  var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
  var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
  // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.

  var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
  var zoneSymbolEventNames$1 = {};

  var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;

    if (!event) {
      return;
    }

    var eventNameSymbol = zoneSymbolEventNames$1[event.type];

    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol$1('ON_PROPERTY' + event.type);
    }

    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;

    if (isBrowser && target === internalWindow && event.type === 'error') {
      // window.onerror have different signature
      // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
      // and onerror callback will prevent default when callback return true
      var errorEvent = event;
      result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

      if (result === true) {
        event.preventDefault();
      }
    } else {
      result = listener && listener.apply(this, arguments);

      if (result != undefined && !result) {
        event.preventDefault();
      }
    }

    return result;
  };

  function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

    if (!desc && prototype) {
      // when patch window object, use prototype to check prop exist or not
      var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

      if (prototypeDesc) {
        desc = {
          enumerable: true,
          configurable: true
        };
      }
    } // if the descriptor not exists or is not configurable
    // just return


    if (!desc || !desc.configurable) {
      return;
    }

    var onPropPatchedSymbol = zoneSymbol$1('on' + prop + 'patched');

    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
      return;
    } // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified


    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set; // slice(2) cuz 'onclick' -> 'click', etc

    var eventName = prop.slice(2);
    var eventNameSymbol = zoneSymbolEventNames$1[eventName];

    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol$1('ON_PROPERTY' + eventName);
    }

    desc.set = function (newValue) {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;

      if (!target && obj === _global) {
        target = _global;
      }

      if (!target) {
        return;
      }

      var previousValue = target[eventNameSymbol];

      if (typeof previousValue === 'function') {
        target.removeEventListener(eventName, wrapFn);
      } // issue #978, when onload handler was added before loading zone.js
      // we should remove it with originalDescSet


      originalDescSet && originalDescSet.call(target, null);
      target[eventNameSymbol] = newValue;

      if (typeof newValue === 'function') {
        target.addEventListener(eventName, wrapFn, false);
      }
    }; // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null


    desc.get = function () {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;

      if (!target && obj === _global) {
        target = _global;
      }

      if (!target) {
        return null;
      }

      var listener = target[eventNameSymbol];

      if (listener) {
        return listener;
      } else if (originalDescGet) {
        // result will be null when use inline event attribute,
        // such as <button onclick="func();">OK</button>
        // because the onclick function is internal raw uncompiled handler
        // the onclick will be evaluated when first time event was triggered or
        // the property is accessed, https://github.com/angular/zone.js/issues/525
        // so we should use original native get to retrieve the handler
        var value = originalDescGet.call(this);

        if (value) {
          desc.set.call(this, value);

          if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
            target.removeAttribute(prop);
          }

          return value;
        }
      }

      return null;
    };

    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
  }

  function patchOnProperties(obj, properties, prototype) {
    if (properties) {
      for (var i = 0; i < properties.length; i++) {
        patchProperty(obj, 'on' + properties[i], prototype);
      }
    } else {
      var onProperties = [];

      for (var prop in obj) {
        if (prop.slice(0, 2) == 'on') {
          onProperties.push(prop);
        }
      }

      for (var j = 0; j < onProperties.length; j++) {
        patchProperty(obj, onProperties[j], prototype);
      }
    }
  }

  var originalInstanceKey = zoneSymbol$1('originalInstance'); // wrap some native API on `window`

  function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass) return; // keep original class in global

    _global[zoneSymbol$1(className)] = OriginalClass;

    _global[className] = function () {
      var a = bindArguments(arguments, className);

      switch (a.length) {
        case 0:
          this[originalInstanceKey] = new OriginalClass();
          break;

        case 1:
          this[originalInstanceKey] = new OriginalClass(a[0]);
          break;

        case 2:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
          break;

        case 3:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
          break;

        case 4:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
          break;

        default:
          throw new Error('Arg list too long.');
      }
    }; // attach original delegate to patched function


    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () {});
    var prop;

    for (prop in instance) {
      // https://bugs.webkit.org/show_bug.cgi?id=44721
      if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

      (function (prop) {
        if (typeof instance[prop] === 'function') {
          _global[className].prototype[prop] = function () {
            return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
          };
        } else {
          ObjectDefineProperty(_global[className].prototype, prop, {
            set: function (fn) {
              if (typeof fn === 'function') {
                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                // use it in Function.prototype.toString to return
                // the native one.

                attachOriginToPatched(this[originalInstanceKey][prop], fn);
              } else {
                this[originalInstanceKey][prop] = fn;
              }
            },
            get: function () {
              return this[originalInstanceKey][prop];
            }
          });
        }
      })(prop);
    }

    for (prop in OriginalClass) {
      if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
        _global[className][prop] = OriginalClass[prop];
      }
    }
  }

  function patchMethod(target, name, patchFn) {
    var proto = target;

    while (proto && !proto.hasOwnProperty(name)) {
      proto = ObjectGetPrototypeOf(proto);
    }

    if (!proto && target[name]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = target;
    }

    var delegateName = zoneSymbol$1(name);
    var delegate = null;

    if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
      delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
      // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

      var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

      if (isPropertyWritable(desc)) {
        var patchDelegate_1 = patchFn(delegate, delegateName, name);

        proto[name] = function () {
          return patchDelegate_1(this, arguments);
        };

        attachOriginToPatched(proto[name], delegate);
      }
    }

    return delegate;
  } // TODO: @JiaLiPassion, support cancel task later if necessary


  function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;

    function scheduleTask(task) {
      var data = task.data;

      data.args[data.cbIdx] = function () {
        task.invoke.apply(this, arguments);
      };

      setNative.apply(data.target, data.args);
      return task;
    }

    setNative = patchMethod(obj, funcName, function (delegate) {
      return function (self, args) {
        var meta = metaCreator(self, args);

        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
          return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        } else {
          // cause an error by calling it directly.
          return delegate.apply(self, args);
        }
      };
    });
  }

  function attachOriginToPatched(patched, original) {
    patched[zoneSymbol$1('OriginalDelegate')] = original;
  }

  var isDetectedIEOrEdge = false;
  var ieOrEdge = false;

  function isIE() {
    try {
      var ua = internalWindow.navigator.userAgent;

      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
        return true;
      }
    } catch (error) {}

    return false;
  }

  function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
      return ieOrEdge;
    }

    isDetectedIEOrEdge = true;

    try {
      var ua = internalWindow.navigator.userAgent;

      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
        ieOrEdge = true;
      }
    } catch (error) {}

    return ieOrEdge;
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;

    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        var className = obj.constructor && obj.constructor.name;
        return (className ? className : '') + ': ' + JSON.stringify(obj);
      }

      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }

    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

    var symbolPromise = __symbol__('Promise');

    var symbolThen = __symbol__('then');

    var creationTrace = '__creationTrace__';

    api.onUnhandledError = function (e) {
      if (api.showUncaughtError()) {
        var rejection = e && e.rejection;

        if (rejection) {
          console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
        } else {
          console.error(e);
        }
      }
    };

    api.microtaskDrainDone = function () {
      var _loop_2 = function () {
        var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

        try {
          uncaughtPromiseError.zone.runGuarded(function () {
            if (uncaughtPromiseError.throwOriginal) {
              throw uncaughtPromiseError.rejection;
            }

            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      };

      while (_uncaughtPromiseErrors.length) {
        _loop_2();
      }
    };

    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);

      try {
        var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

        if (typeof handler === 'function') {
          handler.call(this, e);
        }
      } catch (err) {}
    }

    function isThenable(value) {
      return value && value.then;
    }

    function forwardResolution(value) {
      return value;
    }

    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }

    var symbolState = __symbol__('state');

    var symbolValue = __symbol__('value');

    var symbolFinally = __symbol__('finally');

    var symbolParentPromiseValue = __symbol__('parentPromiseValue');

    var symbolParentPromiseState = __symbol__('parentPromiseState');

    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;

    function makeResolver(promise, state) {
      return function (v) {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        } // Do not return value or you will break the Promise spec.

      };
    }

    var once = function () {
      var wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function () {
          if (wasCalled) {
            return;
          }

          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };

    var TYPE_ERROR = 'Promise resolved with itself';

    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


    function resolvePromise(promise, state, value) {
      var onceWrapper = once();

      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }

      if (promise[symbolState] === UNRESOLVED) {
        // should only get value.then once based on promise spec.
        var then = null;

        try {
          if (typeof value === 'object' || typeof value === 'function') {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(function () {
            resolvePromise(promise, false, err);
          })();
          return promise;
        } // if (value instanceof ZoneAwarePromise) {


        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === 'function') {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          var queue = promise[symbolValue];
          promise[symbolValue] = value;

          if (promise[symbolFinally] === symbolFinally) {
            // the promise is generated by Promise.prototype.finally
            if (state === RESOLVED) {
              // the state is resolved, should ignore the value
              // and use parent promise value
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          } // record task information in value when error occurs, so we can
          // do some additional work such as render longStackTrace


          if (state === REJECTED && value instanceof Error) {
            // check if longStackTraceZone is here
            var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

            if (trace) {
              // only keep the long stack trace into error when in longStackTraceZone
              ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }

          for (var i = 0; i < queue.length;) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }

          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            var uncaughtPromiseError = value;

            try {
              // Here we throws a new Error to print more readable error log
              // and if the value is not an error, zone.js builds an `Error`
              // Object here to attach the stack information.
              throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
            } catch (err) {
              uncaughtPromiseError = err;
            }

            if (isDisableWrappingUncaughtPromiseRejection) {
              // If disable wrapping uncaught promise reject
              // use the value instead of wrapping it.
              uncaughtPromiseError.throwOriginal = true;
            }

            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone.current;
            uncaughtPromiseError.task = Zone.currentTask;

            _uncaughtPromiseErrors.push(uncaughtPromiseError);

            api.scheduleMicroTask(); // to make sure that it is running
          }
        }
      } // Resolving an already resolved promise is a noop.


      return promise;
    }

    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        // if the promise is rejected no catch status
        // and queue.length > 0, means there is a error handler
        // here to handle the rejected promise, we should trigger
        // windows.rejectionhandled eventHandler or nodejs rejectionHandled
        // eventHandler
        try {
          var handler = Zone[REJECTION_HANDLED_HANDLER];

          if (handler && typeof handler === 'function') {
            handler.call(this, {
              rejection: promise[symbolValue],
              promise: promise
            });
          }
        } catch (err) {}

        promise[symbolState] = REJECTED;

        for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }

    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      var promiseState = promise[symbolState];
      var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, function () {
        try {
          var parentPromiseValue = promise[symbolValue];
          var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

          if (isFinallyPromise) {
            // if the promise is generated from finally call, keep parent promise's state and value
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          } // should not pass value to finally callback


          var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          // if error occurs, should always return this error
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }

    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

    var noop = function () {};

    var AggregateError = global.AggregateError;

    var ZoneAwarePromise =
    /** @class */
    function () {
      function ZoneAwarePromise(executor) {
        var promise = this;

        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error('Must be an instanceof Promise.');
        }

        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = []; // queue;

        try {
          var onceWrapper = once();
          executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }

      ZoneAwarePromise.toString = function () {
        return ZONE_AWARE_PROMISE_TO_STRING;
      };

      ZoneAwarePromise.resolve = function (value) {
        return resolvePromise(new this(null), RESOLVED, value);
      };

      ZoneAwarePromise.reject = function (error) {
        return resolvePromise(new this(null), REJECTED, error);
      };

      ZoneAwarePromise.any = function (values) {
        if (!values || typeof values[Symbol.iterator] !== 'function') {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }

        var promises = [];
        var count = 0;

        try {
          for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var v = values_1[_i];
            count++;
            promises.push(ZoneAwarePromise.resolve(v));
          }
        } catch (err) {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }

        if (count === 0) {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }

        var finished = false;
        var errors = [];
        return new ZoneAwarePromise(function (resolve, reject) {
          for (var i = 0; i < promises.length; i++) {
            promises[i].then(function (v) {
              if (finished) {
                return;
              }

              finished = true;
              resolve(v);
            }, function (err) {
              errors.push(err);
              count--;

              if (count === 0) {
                finished = true;
                reject(new AggregateError(errors, 'All promises were rejected'));
              }
            });
          }
        });
      };

      ;

      ZoneAwarePromise.race = function (values) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        });

        function onResolve(value) {
          resolve(value);
        }

        function onReject(error) {
          reject(error);
        }

        for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
          var value = values_2[_i];

          if (!isThenable(value)) {
            value = this.resolve(value);
          }

          value.then(onResolve, onReject);
        }

        return promise;
      };

      ZoneAwarePromise.all = function (values) {
        return ZoneAwarePromise.allWithCallback(values);
      };

      ZoneAwarePromise.allSettled = function (values) {
        var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: function (value) {
            return {
              status: 'fulfilled',
              value: value
            };
          },
          errorCallback: function (err) {
            return {
              status: 'rejected',
              reason: err
            };
          }
        });
      };

      ZoneAwarePromise.allWithCallback = function (values, callback) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

        var unresolvedCount = 2;
        var valueIndex = 0;
        var resolvedValues = [];

        var _loop_3 = function (value) {
          if (!isThenable(value)) {
            value = this_1.resolve(value);
          }

          var curValueIndex = valueIndex;

          try {
            value.then(function (value) {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
              unresolvedCount--;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, function (err) {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;

                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }

          unresolvedCount++;
          valueIndex++;
        };

        var this_1 = this;

        for (var _i = 0, values_3 = values; _i < values_3.length; _i++) {
          var value = values_3[_i];

          _loop_3(value);
        } // Make the unresolvedCount zero-based again.


        unresolvedCount -= 2;

        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }

        return promise;
      };

      Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
        get: function () {
          return 'Promise';
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ZoneAwarePromise.prototype, Symbol.species, {
        get: function () {
          return ZoneAwarePromise;
        },
        enumerable: false,
        configurable: true
      });

      ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
        var _a; // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
        // may be an object without a prototype (created through `Object.create(null)`); thus
        // `this.constructor` will be undefined. One of the use cases is SystemJS creating
        // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
        // object and copies promise properties into that object (within the `getOrCreateLoad`
        // function). The zone.js then checks if the resolved value has the `then` method and invokes
        // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
        // properties of undefined (reading 'Symbol(Symbol.species)')`.


        var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = this.constructor || ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }

        return chainPromise;
      };

      ZoneAwarePromise.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
      };

      ZoneAwarePromise.prototype.finally = function (onFinally) {
        var _a; // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.


        var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }

        return chainPromise;
      };

      return ZoneAwarePromise;
    }(); // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.


    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    global['Promise'] = ZoneAwarePromise;

    var symbolThenPatched = __symbol__('thenPatched');

    function patchThen(Ctor) {
      var proto = Ctor.prototype;
      var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

      if (prop && (prop.writable === false || !prop.configurable)) {
        // check Ctor.prototype.then propertyDescriptor is writable or not
        // in meteor env, writable is false, we should ignore such case
        return;
      }

      var originalThen = proto.then; // Keep a reference to the original method.

      proto[symbolThen] = originalThen;

      Ctor.prototype.then = function (onResolve, onReject) {
        var _this = this;

        var wrapped = new ZoneAwarePromise(function (resolve, reject) {
          originalThen.call(_this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };

      Ctor[symbolThenPatched] = true;
    }

    api.patchThen = patchThen;

    function zoneify(fn) {
      return function (self, args) {
        var resultPromise = fn.apply(self, args);

        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }

        var ctor = resultPromise.constructor;

        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }

        return resultPromise;
      };
    }

    if (NativePromise) {
      patchThen(NativePromise);
      patchMethod(global, 'fetch', function (delegate) {
        return zoneify(delegate);
      });
    } // This is not part of public API, but it is useful for tests, so we expose it.


    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  // override Function.prototype.toString to make zone.js patched function
  // look like native function


  Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol$1('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol$1('Promise');
    var ERROR_SYMBOL = zoneSymbol$1('Error');

    var newFunctionToString = function toString() {
      if (typeof this === 'function') {
        var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

        if (originalDelegate) {
          if (typeof originalDelegate === 'function') {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }

        if (this === Promise) {
          var nativePromise = global[PROMISE_SYMBOL];

          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }

        if (this === Error) {
          var nativeError = global[ERROR_SYMBOL];

          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }

      return originalFunctionToString.call(this);
    };

    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';

    Object.prototype.toString = function () {
      if (typeof Promise === 'function' && this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }

      return originalObjectToString.call(this);
    };
  });
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var passiveSupported = false;

  if (typeof window !== 'undefined') {
    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function () {
          passiveSupported = true;
        }
      }); // Note: We pass the `options` object as the event handler too. This is not compatible with the
      // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
      // without an actual handler.

      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (err) {
      passiveSupported = false;
    }
  } // an identifier to tell ZoneTask do not create a new invoke closure


  var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
  };
  var zoneSymbolEventNames = {};
  var globalSources = {};
  var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
  var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol$1('propagationStopped');

  function prepareEventNames(eventName, eventNameToString) {
    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }

  function patchEventTarget(_global, api, apis, patchOptions) {
    var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol$1(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

    var invokeTask = function (task, target, event) {
      // for better performance, check isRemoved which is set
      // by removeEventListener
      if (task.isRemoved) {
        return;
      }

      var delegate = task.callback;

      if (typeof delegate === 'object' && delegate.handleEvent) {
        // create the bind version of handleEvent when invoke
        task.callback = function (event) {
          return delegate.handleEvent(event);
        };

        task.originalDelegate = delegate;
      } // invoke static task.invoke
      // need to try/catch error here, otherwise, the error in one event listener
      // will break the executions of the other event listeners. Also error will
      // not remove the event listener when `once` options is true.


      var error;

      try {
        task.invoke(task, target, [event]);
      } catch (err) {
        error = err;
      }

      var options = task.options;

      if (options && typeof options === 'object' && options.once) {
        // if options.once is true, after invoke once remove listener here
        // only browser need to do this, nodejs eventEmitter will cal removeListener
        // inside EventEmitter.once
        var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
        target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
      }

      return error;
    };

    function globalCallback(context, event, isCapture) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      } // event.target is needed for Samsung TV and SourceBuffer
      // || global is needed https://github.com/angular/zone.js/issues/190


      var target = context || event.target || _global;
      var tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];

      if (tasks) {
        var errors = []; // invoke all tasks which attached to current target with given event.type and capture = false
        // for performance concern, if task.length === 1, just invoke

        if (tasks.length === 1) {
          var err = invokeTask(tasks[0], target, event);
          err && errors.push(err);
        } else {
          // https://github.com/angular/zone.js/issues/836
          // copy the tasks array before invoke, to avoid
          // the callback will remove itself or other listener
          var copyTasks = tasks.slice();

          for (var i = 0; i < copyTasks.length; i++) {
            if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
              break;
            }

            var err = invokeTask(copyTasks[i], target, event);
            err && errors.push(err);
          }
        } // Since there is only one error, we don't need to schedule microTask
        // to throw the error.


        if (errors.length === 1) {
          throw errors[0];
        } else {
          var _loop_4 = function (i) {
            var err = errors[i];
            api.nativeScheduleMicroTask(function () {
              throw err;
            });
          };

          for (var i = 0; i < errors.length; i++) {
            _loop_4(i);
          }
        }
      }
    } // global shared zoneAwareCallback to handle all event callback with capture = false


    var globalZoneAwareCallback = function (event) {
      return globalCallback(this, event, false);
    }; // global shared zoneAwareCallback to handle all event callback with capture = true


    var globalZoneAwareCaptureCallback = function (event) {
      return globalCallback(this, event, true);
    };

    function patchEventTargetMethods(obj, patchOptions) {
      if (!obj) {
        return false;
      }

      var useGlobalCallback = true;

      if (patchOptions && patchOptions.useG !== undefined) {
        useGlobalCallback = patchOptions.useG;
      }

      var validateHandler = patchOptions && patchOptions.vh;
      var checkDuplicate = true;

      if (patchOptions && patchOptions.chkDup !== undefined) {
        checkDuplicate = patchOptions.chkDup;
      }

      var returnTarget = false;

      if (patchOptions && patchOptions.rt !== undefined) {
        returnTarget = patchOptions.rt;
      }

      var proto = obj;

      while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
        proto = ObjectGetPrototypeOf(proto);
      }

      if (!proto && obj[ADD_EVENT_LISTENER]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = obj;
      }

      if (!proto) {
        return false;
      }

      if (proto[zoneSymbolAddEventListener]) {
        return false;
      }

      var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
      // so we do not need to create a new object just for pass some data

      var taskData = {};
      var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
      var nativeRemoveEventListener = proto[zoneSymbol$1(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
      var nativeListeners = proto[zoneSymbol$1(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
      var nativeRemoveAllListeners = proto[zoneSymbol$1(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
      var nativePrependEventListener;

      if (patchOptions && patchOptions.prepend) {
        nativePrependEventListener = proto[zoneSymbol$1(patchOptions.prepend)] = proto[patchOptions.prepend];
      }
      /**
       * This util function will build an option object with passive option
       * to handle all possible input from the user.
       */


      function buildEventListenerOptions(options, passive) {
        if (!passiveSupported && typeof options === 'object' && options) {
          // doesn't support passive but user want to pass an object as options.
          // this will not work on some old browser, so we just pass a boolean
          // as useCapture parameter
          return !!options.capture;
        }

        if (!passiveSupported || !passive) {
          return options;
        }

        if (typeof options === 'boolean') {
          return {
            capture: options,
            passive: true
          };
        }

        if (!options) {
          return {
            passive: true
          };
        }

        if (typeof options === 'object' && options.passive !== false) {
          return Object.assign(Object.assign({}, options), {
            passive: true
          });
        }

        return options;
      }

      var customScheduleGlobal = function (task) {
        // if there is already a task for the eventName + capture,
        // just return, because we use the shared globalZoneAwareCallback here.
        if (taskData.isExisting) {
          return;
        }

        return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
      };

      var customCancelGlobal = function (task) {
        // if task is not marked as isRemoved, this call is directly
        // from Zone.prototype.cancelTask, we should remove the task
        // from tasksList of target first
        if (!task.isRemoved) {
          var symbolEventNames = zoneSymbolEventNames[task.eventName];
          var symbolEventName = void 0;

          if (symbolEventNames) {
            symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
          }

          var existingTasks = symbolEventName && task.target[symbolEventName];

          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];

              if (existingTask === task) {
                existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                task.isRemoved = true;

                if (existingTasks.length === 0) {
                  // all tasks for the eventName + capture have gone,
                  // remove globalZoneAwareCallback and remove the task cache from target
                  task.allRemoved = true;
                  task.target[symbolEventName] = null;
                }

                break;
              }
            }
          }
        } // if all tasks for the eventName + capture have gone,
        // we will really remove the global event callback,
        // if not, return


        if (!task.allRemoved) {
          return;
        }

        return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
      };

      var customScheduleNonGlobal = function (task) {
        return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };

      var customSchedulePrepend = function (task) {
        return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };

      var customCancelNonGlobal = function (task) {
        return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
      };

      var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
      var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

      var compareTaskCallbackVsDelegate = function (task, delegate) {
        var typeOfDelegate = typeof delegate;
        return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
      };

      var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
      var unpatchedEvents = Zone[zoneSymbol$1('UNPATCHED_EVENTS')];

      var passiveEvents = _global[zoneSymbol$1('PASSIVE_EVENTS')];

      var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
        if (returnTarget === void 0) {
          returnTarget = false;
        }

        if (prepend === void 0) {
          prepend = false;
        }

        return function () {
          var target = this || _global;
          var eventName = arguments[0];

          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }

          var delegate = arguments[1];

          if (!delegate) {
            return nativeListener.apply(this, arguments);
          }

          if (isNode && eventName === 'uncaughtException') {
            // don't patch uncaughtException of nodejs to prevent endless loop
            return nativeListener.apply(this, arguments);
          } // don't create the bind delegate function for handleEvent
          // case here to improve addEventListener performance
          // we will create the bind delegate when invoke


          var isHandleEvent = false;

          if (typeof delegate !== 'function') {
            if (!delegate.handleEvent) {
              return nativeListener.apply(this, arguments);
            }

            isHandleEvent = true;
          }

          if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
            return;
          }

          var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
          var options = buildEventListenerOptions(arguments[2], passive);

          if (unpatchedEvents) {
            // check unpatched list
            for (var i = 0; i < unpatchedEvents.length; i++) {
              if (eventName === unpatchedEvents[i]) {
                if (passive) {
                  return nativeListener.call(target, eventName, delegate, options);
                } else {
                  return nativeListener.apply(this, arguments);
                }
              }
            }
          }

          var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
          var once = options && typeof options === 'object' ? options.once : false;
          var zone = Zone.current;
          var symbolEventNames = zoneSymbolEventNames[eventName];

          if (!symbolEventNames) {
            prepareEventNames(eventName, eventNameToString);
            symbolEventNames = zoneSymbolEventNames[eventName];
          }

          var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          var existingTasks = target[symbolEventName];
          var isExisting = false;

          if (existingTasks) {
            // already have task registered
            isExisting = true;

            if (checkDuplicate) {
              for (var i = 0; i < existingTasks.length; i++) {
                if (compare(existingTasks[i], delegate)) {
                  // same callback, same capture, same event name, just return
                  return;
                }
              }
            }
          } else {
            existingTasks = target[symbolEventName] = [];
          }

          var source;
          var constructorName = target.constructor['name'];
          var targetSource = globalSources[constructorName];

          if (targetSource) {
            source = targetSource[eventName];
          }

          if (!source) {
            source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
          } // do not create a new object as task.data to pass those things
          // just use the global shared one


          taskData.options = options;

          if (once) {
            // if addEventListener with once options, we don't pass it to
            // native addEventListener, instead we keep the once setting
            // and handle ourselves.
            taskData.options.once = false;
          }

          taskData.target = target;
          taskData.capture = capture;
          taskData.eventName = eventName;
          taskData.isExisting = isExisting;
          var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

          if (data) {
            data.taskData = taskData;
          }

          var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
          // issue, https://github.com/angular/angular/issues/20442

          taskData.target = null; // need to clear up taskData because it is a global object

          if (data) {
            data.taskData = null;
          } // have to save those information to task in case
          // application may call task.zone.cancelTask() directly


          if (once) {
            options.once = true;
          }

          if (!(!passiveSupported && typeof task.options === 'boolean')) {
            // if not support passive, and we pass an option object
            // to addEventListener, we should save the options to task
            task.options = options;
          }

          task.target = target;
          task.capture = capture;
          task.eventName = eventName;

          if (isHandleEvent) {
            // save original delegate for compare to check duplicate
            task.originalDelegate = delegate;
          }

          if (!prepend) {
            existingTasks.push(task);
          } else {
            existingTasks.unshift(task);
          }

          if (returnTarget) {
            return target;
          }
        };
      };

      proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

      if (nativePrependEventListener) {
        proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
      }

      proto[REMOVE_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var options = arguments[2];
        var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        var delegate = arguments[1];

        if (!delegate) {
          return nativeRemoveEventListener.apply(this, arguments);
        }

        if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
          return;
        }

        var symbolEventNames = zoneSymbolEventNames[eventName];
        var symbolEventName;

        if (symbolEventNames) {
          symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        }

        var existingTasks = symbolEventName && target[symbolEventName];

        if (existingTasks) {
          for (var i = 0; i < existingTasks.length; i++) {
            var existingTask = existingTasks[i];

            if (compare(existingTask, delegate)) {
              existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

              existingTask.isRemoved = true;

              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                existingTask.allRemoved = true;
                target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                // such as target.onclick = function() {}, so we need to clear this internal
                // property too if all delegates all removed

                if (typeof eventName === 'string') {
                  var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                  target[onPropertySymbol] = null;
                }
              }

              existingTask.zone.cancelTask(existingTask);

              if (returnTarget) {
                return target;
              }

              return;
            }
          }
        } // issue 930, didn't find the event name or callback
        // from zone kept existingTasks, the callback maybe
        // added outside of zone, we need to call native removeEventListener
        // to try to remove it.


        return nativeRemoveEventListener.apply(this, arguments);
      };

      proto[LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var listeners = [];
        var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

        for (var i = 0; i < tasks.length; i++) {
          var task = tasks[i];
          var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
          listeners.push(delegate);
        }

        return listeners;
      };

      proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (!eventName) {
          var keys = Object.keys(target);

          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
            // used for monitoring the removeListener call,
            // so just keep removeListener eventListener until
            // all other eventListeners are removed

            if (evtName && evtName !== 'removeListener') {
              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
            }
          } // remove removeListener listener finally


          this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
        } else {
          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }

          var symbolEventNames = zoneSymbolEventNames[eventName];

          if (symbolEventNames) {
            var symbolEventName = symbolEventNames[FALSE_STR];
            var symbolCaptureEventName = symbolEventNames[TRUE_STR];
            var tasks = target[symbolEventName];
            var captureTasks = target[symbolCaptureEventName];

            if (tasks) {
              var removeTasks = tasks.slice();

              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }

            if (captureTasks) {
              var removeTasks = captureTasks.slice();

              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }
          }
        }

        if (returnTarget) {
          return this;
        }
      }; // for native toString patch


      attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
      attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

      if (nativeRemoveAllListeners) {
        attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
      }

      if (nativeListeners) {
        attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
      }

      return true;
    }

    var results = [];

    for (var i = 0; i < apis.length; i++) {
      results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }

    return results;
  }

  function findEventTasks(target, eventName) {
    if (!eventName) {
      var foundTasks = [];

      for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];

        if (evtName && (!eventName || evtName === eventName)) {
          var tasks = target[prop];

          if (tasks) {
            for (var i = 0; i < tasks.length; i++) {
              foundTasks.push(tasks[i]);
            }
          }
        }
      }

      return foundTasks;
    }

    var symbolEventName = zoneSymbolEventNames[eventName];

    if (!symbolEventName) {
      prepareEventNames(eventName);
      symbolEventName = zoneSymbolEventNames[eventName];
    }

    var captureFalseTasks = target[symbolEventName[FALSE_STR]];
    var captureTrueTasks = target[symbolEventName[TRUE_STR]];

    if (!captureFalseTasks) {
      return captureTrueTasks ? captureTrueTasks.slice() : [];
    } else {
      return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
    }
  }

  function patchEventPrototype(global, api) {
    var Event = global['Event'];

    if (Event && Event.prototype) {
      api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
        return function (self, args) {
          self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
          // in case in some hybrid application, some part of
          // application will be controlled by zone, some are not

          delegate && delegate.apply(self, args);
        };
      });
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);

    if (target[symbol]) {
      return;
    }

    var nativeDelegate = target[symbol] = target[method];

    target[method] = function (name, opts, options) {
      if (opts && opts.prototype) {
        callbacks.forEach(function (callback) {
          var source = "".concat(targetName, ".").concat(method, "::") + callback;
          var prototype = opts.prototype; // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
          // `customElements.define`. We explicitly wrap the patching code into try-catch since
          // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
          // make those properties non-writable. This means that patching callback will throw an error
          // `cannot assign to read-only property`. See this code as an example:
          // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
          // We don't want to stop the application rendering if we couldn't patch some
          // callback, e.g. `attributeChangedCallback`.

          try {
            if (prototype.hasOwnProperty(callback)) {
              var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

              if (descriptor && descriptor.value) {
                descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                api._redefineProperty(opts.prototype, callback, descriptor);
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } catch (_a) {// Note: we leave the catch block empty since there's no way to handle the error related
            // to non-writable property.
          }
        });
      }

      return nativeDelegate.call(target, name, opts, options);
    };

    api.attachOriginToPatched(target[method], nativeDelegate);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
      return onProperties;
    }

    var tip = ignoreProperties.filter(function (ip) {
      return ip.target === target;
    });

    if (!tip || tip.length === 0) {
      return onProperties;
    }

    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) {
      return targetIgnoreProperties.indexOf(op) === -1;
    });
  }

  function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
      return;
    }

    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
  }
  /**
   * Get all event name properties which the event name startsWith `on`
   * from the target object itself, inherited properties are not considered.
   */


  function getOnEventNames(target) {
    return Object.getOwnPropertyNames(target).filter(function (name) {
      return name.startsWith('on') && name.length > 2;
    }).map(function (name) {
      return name.substring(2);
    });
  }

  function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
      return;
    }

    if (Zone[api.symbol('patchEvents')]) {
      // events are already been patched by legacy patch.
      return;
    }

    var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

    var patchTargets = [];

    if (isBrowser) {
      var internalWindow_1 = window;
      patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
      var ignoreErrorProperties = isIE() ? [{
        target: internalWindow_1,
        ignoreProperties: ['error']
      }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
      // so we need to pass WindowPrototype to check onProp exist or not

      patchFilteredProperties(internalWindow_1, getOnEventNames(internalWindow_1), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow_1));
    }

    patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);

    for (var i = 0; i < patchTargets.length; i++) {
      var target = _global[patchTargets[i]];
      target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('util', function (global, Zone, api) {
    // Collect native event names by looking at properties
    // on the global namespace, e.g. 'onclick'.
    var eventNames = getOnEventNames(global);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.

    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

    if (global[SYMBOL_UNPATCHED_EVENTS]) {
      global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }

    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }

    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;

    api.getGlobalObjects = function () {
      return {
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
      };
    };
  });
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  /*
   * This is necessary for Chrome and Chrome mobile, to enable
   * things like redefining `createdCallback` on an element.
   */


  var zoneSymbol;

  var _defineProperty;

  var _getOwnPropertyDescriptor;

  var _create;

  var unconfigurablesKey;

  function propertyPatch() {
    zoneSymbol = Zone.__symbol__;
    _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
    _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;
    _create = Object.create;
    unconfigurablesKey = zoneSymbol('unconfigurables');

    Object.defineProperty = function (obj, prop, desc) {
      if (isUnconfigurable(obj, prop)) {
        throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
      }

      var originalConfigurableFlag = desc.configurable;

      if (prop !== 'prototype') {
        desc = rewriteDescriptor(obj, prop, desc);
      }

      return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };

    Object.defineProperties = function (obj, props) {
      Object.keys(props).forEach(function (prop) {
        Object.defineProperty(obj, prop, props[prop]);
      });

      for (var _i = 0, _b = Object.getOwnPropertySymbols(props); _i < _b.length; _i++) {
        var sym = _b[_i];
        var desc = Object.getOwnPropertyDescriptor(props, sym); // Since `Object.getOwnPropertySymbols` returns *all* symbols,
        // including non-enumerable ones, retrieve property descriptor and check
        // enumerability there. Proceed with the rewrite only when a property is
        // enumerable to make the logic consistent with the way regular
        // properties are retrieved (via `Object.keys`, which respects
        // `enumerable: false` flag). More information:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#retrieval

        if (desc === null || desc === void 0 ? void 0 : desc.enumerable) {
          Object.defineProperty(obj, sym, props[sym]);
        }
      }

      return obj;
    };

    Object.create = function (proto, propertiesObject) {
      if (typeof propertiesObject === 'object' && !Object.isFrozen(propertiesObject)) {
        Object.keys(propertiesObject).forEach(function (prop) {
          propertiesObject[prop] = rewriteDescriptor(proto, prop, propertiesObject[prop]);
        });
      }

      return _create(proto, propertiesObject);
    };

    Object.getOwnPropertyDescriptor = function (obj, prop) {
      var desc = _getOwnPropertyDescriptor(obj, prop);

      if (desc && isUnconfigurable(obj, prop)) {
        desc.configurable = false;
      }

      return desc;
    };
  }

  function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
  }

  function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
  }

  function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
      desc.configurable = true;
    }

    if (!desc.configurable) {
      // issue-927, if the obj is frozen, don't try to set the desc to obj
      if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
        _defineProperty(obj, unconfigurablesKey, {
          writable: true,
          value: {}
        });
      }

      if (obj[unconfigurablesKey]) {
        obj[unconfigurablesKey][prop] = true;
      }
    }

    return desc;
  }

  function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
      return _defineProperty(obj, prop, desc);
    } catch (error) {
      if (desc.configurable) {
        // In case of errors, when the configurable flag was likely set by rewriteDescriptor(),
        // let's retry with the original flag value
        if (typeof originalConfigurableFlag == 'undefined') {
          delete desc.configurable;
        } else {
          desc.configurable = originalConfigurableFlag;
        }

        try {
          return _defineProperty(obj, prop, desc);
        } catch (error) {
          var swallowError = false;

          if (prop === 'createdCallback' || prop === 'attachedCallback' || prop === 'detachedCallback' || prop === 'attributeChangedCallback') {
            // We only swallow the error in registerElement patch
            // this is the work around since some applications
            // fail if we throw the error
            swallowError = true;
          }

          if (!swallowError) {
            throw error;
          } // TODO: @JiaLiPassion, Some application such as `registerElement` patch
          // still need to swallow the error, in the future after these applications
          // are updated, the following logic can be removed.


          var descJson = null;

          try {
            descJson = JSON.stringify(desc);
          } catch (error) {
            descJson = desc.toString();
          }

          console.log("Attempting to configure '".concat(prop, "' with descriptor '").concat(descJson, "' on object '").concat(obj, "' and got error, giving up: ").concat(error));
        }
      } else {
        throw error;
      }
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function eventTargetLegacyPatch(_global, api) {
    var _b = api.getGlobalObjects(),
        eventNames = _b.eventNames,
        globalSources = _b.globalSources,
        zoneSymbolEventNames = _b.zoneSymbolEventNames,
        TRUE_STR = _b.TRUE_STR,
        FALSE_STR = _b.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _b.ZONE_SYMBOL_PREFIX;

    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'.split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');

    if (isWtf) {
      // Workaround for: https://github.com/google/tracing-framework/issues/555
      apis = WTF_ISSUE_555_ARRAY.map(function (v) {
        return 'HTML' + v + 'Element';
      }).concat(NO_EVENT_TARGET);
    } else if (_global[EVENT_TARGET]) {
      apis.push(EVENT_TARGET);
    } else {
      // Note: EventTarget is not available in all browsers,
      // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
      apis = NO_EVENT_TARGET;
    }

    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    var pointerEventsMap = {
      'MSPointerCancel': 'pointercancel',
      'MSPointerDown': 'pointerdown',
      'MSPointerEnter': 'pointerenter',
      'MSPointerHover': 'pointerhover',
      'MSPointerLeave': 'pointerleave',
      'MSPointerMove': 'pointermove',
      'MSPointerOut': 'pointerout',
      'MSPointerOver': 'pointerover',
      'MSPointerUp': 'pointerup'
    }; //  predefine all __zone_symbol__ + eventName + true/false string

    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    } //  predefine all task.source string


    for (var i = 0; i < WTF_ISSUE_555_ARRAY.length; i++) {
      var target = WTF_ISSUE_555_ARRAY[i];
      var targets = globalSources[target] = {};

      for (var j = 0; j < eventNames.length; j++) {
        var eventName = eventNames[j];
        targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
      }
    }

    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
      if (!isDisableIECheck && ieOrEdge) {
        if (isEnableCrossContextCheck) {
          try {
            var testString = delegate.toString();

            if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
              nativeDelegate.apply(target, args);
              return false;
            }
          } catch (error) {
            nativeDelegate.apply(target, args);
            return false;
          }
        } else {
          var testString = delegate.toString();

          if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
            nativeDelegate.apply(target, args);
            return false;
          }
        }
      } else if (isEnableCrossContextCheck) {
        try {
          delegate.toString();
        } catch (error) {
          nativeDelegate.apply(target, args);
          return false;
        }
      }

      return true;
    };

    var apiTypes = [];

    for (var i = 0; i < apis.length; i++) {
      var type = _global[apis[i]];
      apiTypes.push(type && type.prototype);
    } // vh is validateHandler to check event handler
    // is valid or not(for security check)


    api.patchEventTarget(_global, api, apiTypes, {
      vh: checkIEAndCrossContext,
      transferEventName: function (eventName) {
        var pointerEventName = pointerEventsMap[eventName];
        return pointerEventName || eventName;
      }
    });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  // we have to patch the instance since the proto is non-configurable


  function apply(api, _global) {
    var _b = api.getGlobalObjects(),
        ADD_EVENT_LISTENER_STR = _b.ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR = _b.REMOVE_EVENT_LISTENER_STR;

    var WS = _global.WebSocket; // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched

    if (!_global.EventTarget) {
      api.patchEventTarget(_global, api, [WS.prototype]);
    }

    _global.WebSocket = function (x, y) {
      var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
      var proxySocket;
      var proxySocketProto; // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance

      var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');

      if (onmessageDesc && onmessageDesc.configurable === false) {
        proxySocket = api.ObjectCreate(socket); // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
        // but proxySocket not, so we will keep socket as prototype and pass it to
        // patchOnProperties method

        proxySocketProto = socket;
        [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
          proxySocket[propName] = function () {
            var args = api.ArraySlice.call(arguments);

            if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
              var eventName = args.length > 0 ? args[0] : undefined;

              if (eventName) {
                var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);

                socket[propertySymbol] = proxySocket[propertySymbol];
              }
            }

            return socket[propName].apply(socket, args);
          };
        });
      } else {
        // we can patch the real socket
        proxySocket = socket;
      }

      api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
      return proxySocket;
    };

    var globalWebSocket = _global['WebSocket'];

    for (var prop in WS) {
      globalWebSocket[prop] = WS[prop];
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function propertyDescriptorLegacyPatch(api, _global) {
    var _b = api.getGlobalObjects(),
        isNode = _b.isNode,
        isMix = _b.isMix;

    if (isNode && !isMix) {
      return;
    }

    if (!canPatchViaPropertyDescriptor(api, _global)) {
      var supportsWebSocket = typeof WebSocket !== 'undefined'; // Safari, Android browsers (Jelly Bean)

      patchViaCapturingAllTheEvents(api);
      api.patchClass('XMLHttpRequest');

      if (supportsWebSocket) {
        apply(api, _global);
      }

      Zone[api.symbol('patchEvents')] = true;
    }
  }

  function canPatchViaPropertyDescriptor(api, _global) {
    var _b = api.getGlobalObjects(),
        isBrowser = _b.isBrowser,
        isMix = _b.isMix;

    if ((isBrowser || isMix) && !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
      // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
      // IDL interface attributes are not configurable
      var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
      if (desc && !desc.configurable) return false; // try to use onclick to detect whether we can patch via propertyDescriptor
      // because XMLHttpRequest is not available in service worker

      if (desc) {
        api.ObjectDefineProperty(Element.prototype, 'onclick', {
          enumerable: true,
          configurable: true,
          get: function () {
            return true;
          }
        });
        var div = document.createElement('div');
        var result = !!div.onclick;
        api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
        return result;
      }
    }

    var XMLHttpRequest = _global['XMLHttpRequest'];

    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return false;
    }

    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE); // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one

    if (xhrDesc) {
      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
        enumerable: true,
        configurable: true,
        get: function () {
          return true;
        }
      });
      var req = new XMLHttpRequest();
      var result = !!req.onreadystatechange; // restore original desc

      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
      return result;
    } else {
      var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
        enumerable: true,
        configurable: true,
        get: function () {
          return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
        },
        set: function (value) {
          this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
        }
      });
      var req = new XMLHttpRequest();

      var detectFunc = function () {};

      req.onreadystatechange = detectFunc;
      var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
      req.onreadystatechange = null;
      return result;
    }
  }

  var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
  var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
  var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
  var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
  var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
  var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
  var formEventNames = ['autocomplete', 'autocompleteerror'];
  var detailEventNames = ['toggle'];

  var eventNames = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], globalEventHandlersEventNames, true), webglEventNames, true), formEventNames, true), detailEventNames, true), documentEventNames, true), windowEventNames, true), htmlElementEventNames, true), ieElementEventNames, true); // Whenever any eventListener fires, we check the eventListener target and all parents
  // for `onwhatever` properties and replace them with zone-bound functions
  // - Chrome (for now)


  function patchViaCapturingAllTheEvents(api) {
    var unboundKey = api.symbol('unbound');

    var _loop_5 = function (i) {
      var property = eventNames[i];
      var onproperty = 'on' + property;
      self.addEventListener(property, function (event) {
        var elt = event.target,
            bound,
            source;

        if (elt) {
          source = elt.constructor['name'] + '.' + onproperty;
        } else {
          source = 'unknown.' + onproperty;
        }

        while (elt) {
          if (elt[onproperty] && !elt[onproperty][unboundKey]) {
            bound = api.wrapWithCurrentZone(elt[onproperty], source);
            bound[unboundKey] = elt[onproperty];
            elt[onproperty] = bound;
          }

          elt = elt.parentElement;
        }
      }, true);
    };

    for (var i = 0; i < eventNames.length; i++) {
      _loop_5(i);
    }
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function registerElementPatch(_global, api) {
    var _b = api.getGlobalObjects(),
        isBrowser = _b.isBrowser,
        isMix = _b.isMix;

    if (!isBrowser && !isMix || !('registerElement' in _global.document)) {
      return;
    }

    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  (function (_global) {
    var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';

    function __symbol__(name) {
      return symbolPrefix + name;
    }

    _global[__symbol__('legacyPatch')] = function () {
      var Zone = _global['Zone'];

      Zone.__load_patch('defineProperty', function (global, Zone, api) {
        api._redefineProperty = _redefineProperty;
        propertyPatch();
      });

      Zone.__load_patch('registerElement', function (global, Zone, api) {
        registerElementPatch(global, api);
      });

      Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
        eventTargetLegacyPatch(global, api);
        propertyDescriptorLegacyPatch(api, global);
      });
    };
  })(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var taskSymbol = zoneSymbol$1('zoneTask');

  function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};

    function scheduleTask(task) {
      var data = task.data;

      data.args[0] = function () {
        return task.invoke.apply(this, arguments);
      };

      data.handleId = setNative.apply(window, data.args);
      return task;
    }

    function clearTask(task) {
      return clearNative.call(window, task.data.handleId);
    }

    setNative = patchMethod(window, setName, function (delegate) {
      return function (self, args) {
        if (typeof args[0] === 'function') {
          var options_1 = {
            isPeriodic: nameSuffix === 'Interval',
            delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
            args: args
          };
          var callback_1 = args[0];

          args[0] = function timer() {
            try {
              return callback_1.apply(this, arguments);
            } finally {
              // issue-934, task will be cancelled
              // even it is a periodic task such as
              // setInterval
              // https://github.com/angular/angular/issues/40387
              // Cleanup tasksByHandleId should be handled before scheduleTask
              // Since some zoneSpec may intercept and doesn't trigger
              // scheduleFn(scheduleTask) provided here.
              if (!options_1.isPeriodic) {
                if (typeof options_1.handleId === 'number') {
                  // in non-nodejs env, we remove timerId
                  // from local cache
                  delete tasksByHandleId[options_1.handleId];
                } else if (options_1.handleId) {
                  // Node returns complex objects as handleIds
                  // we remove task reference from timer object
                  options_1.handleId[taskSymbol] = null;
                }
              }
            }
          };

          var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options_1, scheduleTask, clearTask);

          if (!task) {
            return task;
          } // Node.js must additionally support the ref and unref functions.


          var handle = task.data.handleId;

          if (typeof handle === 'number') {
            // for non nodejs env, we save handleId: task
            // mapping in local cache for clearTimeout
            tasksByHandleId[handle] = task;
          } else if (handle) {
            // for nodejs env, we save task
            // reference in timerId Object for clearTimeout
            handle[taskSymbol] = task;
          } // check whether handle is null, because some polyfill or browser
          // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


          if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
            task.ref = handle.ref.bind(handle);
            task.unref = handle.unref.bind(handle);
          }

          if (typeof handle === 'number' || handle) {
            return handle;
          }

          return task;
        } else {
          // cause an error by calling it directly.
          return delegate.apply(window, args);
        }
      };
    });
    clearNative = patchMethod(window, cancelName, function (delegate) {
      return function (self, args) {
        var id = args[0];
        var task;

        if (typeof id === 'number') {
          // non nodejs env.
          task = tasksByHandleId[id];
        } else {
          // nodejs env.
          task = id && id[taskSymbol]; // other environments.

          if (!task) {
            task = id;
          }
        }

        if (task && typeof task.type === 'string') {
          if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
            if (typeof id === 'number') {
              delete tasksByHandleId[id];
            } else if (id) {
              id[taskSymbol] = null;
            } // Do not cancel already canceled functions


            task.zone.cancelTask(task);
          }
        } else {
          // cause an error by calling it directly.
          delegate.apply(window, args);
        }
      };
    });
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function patchCustomElements(_global, api) {
    var _b = api.getGlobalObjects(),
        isBrowser = _b.isBrowser,
        isMix = _b.isMix;

    if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
      return;
    }

    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
      // EventTarget is already patched.
      return;
    }

    var _b = api.getGlobalObjects(),
        eventNames = _b.eventNames,
        zoneSymbolEventNames = _b.zoneSymbolEventNames,
        TRUE_STR = _b.TRUE_STR,
        FALSE_STR = _b.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _b.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }

    var EVENT_TARGET = _global['EventTarget'];

    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
      return;
    }

    api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
  }

  function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
  }
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];

    if (legacyPatch) {
      legacyPatch();
    }
  });

  Zone.__load_patch('queueMicrotask', function (global, Zone, api) {
    api.patchMethod(global, 'queueMicrotask', function (delegate) {
      return function (self, args) {
        Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
      };
    });
  });

  Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
  });

  Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
  });

  Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];

    for (var i = 0; i < blockingMethods.length; i++) {
      var name_2 = blockingMethods[i];
      patchMethod(global, name_2, function (delegate, symbol, name) {
        return function (s, args) {
          return Zone.current.run(delegate, global, args, name);
        };
      });
    }
  });

  Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent(global, api);
    eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
    }
  });

  Zone.__load_patch('MutationObserver', function (global, Zone, api) {
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
  });

  Zone.__load_patch('IntersectionObserver', function (global, Zone, api) {
    patchClass('IntersectionObserver');
  });

  Zone.__load_patch('FileReader', function (global, Zone, api) {
    patchClass('FileReader');
  });

  Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
  });

  Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
  });

  Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol$1('xhrTask');
    var XHR_SYNC = zoneSymbol$1('xhrSync');
    var XHR_LISTENER = zoneSymbol$1('xhrListener');
    var XHR_SCHEDULED = zoneSymbol$1('xhrScheduled');
    var XHR_URL = zoneSymbol$1('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol$1('xhrErrorBeforeScheduled');

    function patchXHR(window) {
      var XMLHttpRequest = window['XMLHttpRequest'];

      if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return;
      }

      var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

      function findPendingTask(target) {
        return target[XHR_TASK];
      }

      var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

      if (!oriAddListener) {
        var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget_1) {
          var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }

      var READY_STATE_CHANGE = 'readystatechange';
      var SCHEDULED = 'scheduled';

      function scheduleTask(task) {
        var data = task.data;
        var target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

        var listener = target[XHR_LISTENER];

        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }

        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }

        var newListener = target[XHR_LISTENER] = function () {
          if (target.readyState === target.DONE) {
            // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
            // readyState=4 multiple times, so we need to check task state here
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              // check whether the xhr has registered onload listener
              // if that is the case, the task should invoke after all
              // onload listeners finish.
              // Also if the request failed without response (status = 0), the load event handler
              // will not be triggered, in that case, we should also invoke the placeholder callback
              // to close the XMLHttpRequest::send macroTask.
              // https://github.com/angular/angular/issues/38795
              var loadTasks = target[Zone.__symbol__('loadfalse')];

              if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                var oriInvoke_1 = task.invoke;

                task.invoke = function () {
                  // need to load the tasks again, because in other
                  // load listener, they may remove themselves
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  for (var i = 0; i < loadTasks.length; i++) {
                    if (loadTasks[i] === task) {
                      loadTasks.splice(i, 1);
                    }
                  }

                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke_1.call(task);
                  }
                };

                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              // error occurs when xhr.send()
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };

        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        var storedTask = target[XHR_TASK];

        if (!storedTask) {
          target[XHR_TASK] = task;
        }

        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }

      function placeholderCallback() {}

      function clearTask(task) {
        var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
        // to prevent it from firing. So instead, we store info for the event listener.

        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }

      var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
        return function (self, args) {
          self[XHR_SYNC] = args[2] == false;
          self[XHR_URL] = args[1];
          return openNative.apply(self, args);
        };
      });
      var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
      var fetchTaskAborting = zoneSymbol$1('fetchTaskAborting');
      var fetchTaskScheduling = zoneSymbol$1('fetchTaskScheduling');
      var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
        return function (self, args) {
          if (Zone.current[fetchTaskScheduling] === true) {
            // a fetch is scheduling, so we are using xhr to polyfill fetch
            // and because we already schedule macroTask for fetch, we should
            // not schedule a macroTask for xhr again
            return sendNative.apply(self, args);
          }

          if (self[XHR_SYNC]) {
            // if the XHR is sync there is no task to schedule, just execute the code.
            return sendNative.apply(self, args);
          } else {
            var options = {
              target: self,
              url: self[XHR_URL],
              isPeriodic: false,
              args: args,
              aborted: false
            };
            var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);

            if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
              // xhr request throw error when send
              // we should invoke task instead of leaving a scheduled
              // pending macroTask
              task.invoke();
            }
          }
        };
      });
      var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
        return function (self, args) {
          var task = findPendingTask(self);

          if (task && typeof task.type == 'string') {
            // If the XHR has already completed, do nothing.
            // If the XHR has already been aborted, do nothing.
            // Fix #569, call abort multiple times before done will cause
            // macroTask task count be negative number
            if (task.cancelFn == null || task.data && task.data.aborted) {
              return;
            }

            task.zone.cancelTask(task);
          } else if (Zone.current[fetchTaskAborting] === true) {
            // the abort is called from fetch polyfill, we need to call native abort of XHR.
            return abortNative.apply(self, args);
          } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
          // task
          // to cancel. Do nothing.

        };
      });
    }
  });

  Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
      patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
  });

  Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
      return function (e) {
        var eventTasks = findEventTasks(global, evtName);
        eventTasks.forEach(function (eventTask) {
          // windows has added unhandledrejection event listener
          // trigger the event listener
          var PromiseRejectionEvent = global['PromiseRejectionEvent'];

          if (PromiseRejectionEvent) {
            var evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }

    if (global['PromiseRejectionEvent']) {
      Zone[zoneSymbol$1('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
      Zone[zoneSymbol$1('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(7435));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0lxYywyQkFBMkIsQ0FBQyxvQkFBRCxDQUQvQjtNQUVBMW9CLElBQUksQ0FBQ3FNLFlBQVksQ0FBQyx5QkFBRCxDQUFiLENBQUosR0FDSXFjLDJCQUEyQixDQUFDLGtCQUFELENBRC9CO0lBRUg7RUFDSixDQXRCRDtBQXVCSCxDQTU4R0QiLCJzb3VyY2VzIjpbIi4vc3JjL3BvbHlmaWxscy50cyIsIi4vc3JjL3pvbmUtZmxhZ3MudHMiLCIuL25vZGVfbW9kdWxlcy96b25lLmpzL2Rpc3Qvem9uZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgYW5kIGlzIGxvYWRlZCBiZWZvcmUgdGhlIGFwcC5cbiAqIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXG4gKlxuICogVGhpcyBmaWxlIGlzIGRpdmlkZWQgaW50byAyIHNlY3Rpb25zOlxuICogICAxLiBCcm93c2VyIHBvbHlmaWxscy4gVGhlc2UgYXJlIGFwcGxpZWQgYmVmb3JlIGxvYWRpbmcgWm9uZUpTIGFuZCBhcmUgc29ydGVkIGJ5IGJyb3dzZXJzLlxuICogICAyLiBBcHBsaWNhdGlvbiBpbXBvcnRzLiBGaWxlcyBpbXBvcnRlZCBhZnRlciBab25lSlMgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGJlZm9yZSB5b3VyIG1haW5cbiAqICAgICAgZmlsZS5cbiAqXG4gKiBUaGUgY3VycmVudCBzZXR1cCBpcyBmb3Igc28tY2FsbGVkIFwiZXZlcmdyZWVuXCIgYnJvd3NlcnM7IHRoZSBsYXN0IHZlcnNpb25zIG9mIGJyb3dzZXJzIHRoYXRcbiAqIGF1dG9tYXRpY2FsbHkgdXBkYXRlIHRoZW1zZWx2ZXMuIFRoaXMgaW5jbHVkZXMgU2FmYXJpID49IDEwLCBDaHJvbWUgPj0gNTUgKGluY2x1ZGluZyBPcGVyYSksXG4gKiBFZGdlID49IDEzIG9uIHRoZSBkZXNrdG9wLCBhbmQgaU9TIDEwIGFuZCBDaHJvbWUgb24gbW9iaWxlLlxuICpcbiAqIExlYXJuIG1vcmUgaW4gaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Jyb3dzZXItc3VwcG9ydFxuICovXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEJST1dTRVIgUE9MWUZJTExTXG4gKi9cblxuLyoqXG4gKiBCeSBkZWZhdWx0LCB6b25lLmpzIHdpbGwgcGF0Y2ggYWxsIHBvc3NpYmxlIG1hY3JvVGFzayBhbmQgRG9tRXZlbnRzXG4gKiB1c2VyIGNhbiBkaXNhYmxlIHBhcnRzIG9mIG1hY3JvVGFzay9Eb21FdmVudHMgcGF0Y2ggYnkgc2V0dGluZyBmb2xsb3dpbmcgZmxhZ3NcbiAqIGJlY2F1c2UgdGhvc2UgZmxhZ3MgbmVlZCB0byBiZSBzZXQgYmVmb3JlIGB6b25lLmpzYCBiZWluZyBsb2FkZWQsIGFuZCB3ZWJwYWNrXG4gKiB3aWxsIHB1dCBpbXBvcnQgaW4gdGhlIHRvcCBvZiBidW5kbGUsIHNvIHVzZXIgbmVlZCB0byBjcmVhdGUgYSBzZXBhcmF0ZSBmaWxlXG4gKiBpbiB0aGlzIGRpcmVjdG9yeSAoZm9yIGV4YW1wbGU6IHpvbmUtZmxhZ3MudHMpLCBhbmQgcHV0IHRoZSBmb2xsb3dpbmcgZmxhZ3NcbiAqIGludG8gdGhhdCBmaWxlLCBhbmQgdGhlbiBhZGQgdGhlIGZvbGxvd2luZyBjb2RlIGJlZm9yZSBpbXBvcnRpbmcgem9uZS5qcy5cbiAqIGltcG9ydCAnLi96b25lLWZsYWdzJztcbiAqXG4gKiBUaGUgZmxhZ3MgYWxsb3dlZCBpbiB6b25lLWZsYWdzLnRzIGFyZSBsaXN0ZWQgaGVyZS5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIGZsYWdzIHdpbGwgd29yayBmb3IgYWxsIGJyb3dzZXJzLlxuICpcbiAqICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZGlzYWJsZV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0cnVlOyAvLyBkaXNhYmxlIHBhdGNoIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICogKHdpbmRvdyBhcyBhbnkpLl9fWm9uZV9kaXNhYmxlX29uX3Byb3BlcnR5ID0gdHJ1ZTsgLy8gZGlzYWJsZSBwYXRjaCBvblByb3BlcnR5IHN1Y2ggYXMgb25jbGlja1xuICogKHdpbmRvdyBhcyBhbnkpLl9fem9uZV9zeW1ib2xfX1VOUEFUQ0hFRF9FVkVOVFMgPSBbJ3Njcm9sbCcsICdtb3VzZW1vdmUnXTsgLy8gZGlzYWJsZSBwYXRjaCBzcGVjaWZpZWQgZXZlbnROYW1lc1xuICpcbiAqICBpbiBJRS9FZGdlIGRldmVsb3BlciB0b29scywgdGhlIGFkZEV2ZW50TGlzdGVuZXIgd2lsbCBhbHNvIGJlIHdyYXBwZWQgYnkgem9uZS5qc1xuICogIHdpdGggdGhlIGZvbGxvd2luZyBmbGFnLCBpdCB3aWxsIGJ5cGFzcyBgem9uZS5qc2AgcGF0Y2ggZm9yIElFL0VkZ2VcbiAqXG4gKiAgKHdpbmRvdyBhcyBhbnkpLl9fWm9uZV9lbmFibGVfY3Jvc3NfY29udGV4dF9jaGVjayA9IHRydWU7XG4gKlxuICovXG5cbmltcG9ydCAnLi96b25lLWZsYWdzJztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogWm9uZSBKUyBpcyByZXF1aXJlZCBieSBkZWZhdWx0IGZvciBBbmd1bGFyIGl0c2VsZi5cbiAqL1xuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEFQUExJQ0FUSU9OIElNUE9SVFNcbiAqL1xuIiwiLyoqXG4gKiBQcmV2ZW50cyBBbmd1bGFyIGNoYW5nZSBkZXRlY3Rpb24gZnJvbVxuICogcnVubmluZyB3aXRoIGNlcnRhaW4gV2ViIENvbXBvbmVudCBjYWxsYmFja3NcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4od2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfY3VzdG9tRWxlbWVudHMgPSB0cnVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHYxNC4yLjAtbmV4dC4wXG4gKiAoYykgMjAxMC0yMDIyIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgICAgICBmYWN0b3J5KCk7XG59KSgoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAoKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIHBlcmZvcm1hbmNlID0gZ2xvYmFsWydwZXJmb3JtYW5jZSddO1xuICAgICAgICBmdW5jdGlvbiBtYXJrKG5hbWUpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlWydtYXJrJ10gJiYgcGVyZm9ybWFuY2VbJ21hcmsnXShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwZXJmb3JtYW5jZU1lYXN1cmUobmFtZSwgbGFiZWwpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlWydtZWFzdXJlJ10gJiYgcGVyZm9ybWFuY2VbJ21lYXN1cmUnXShuYW1lLCBsYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgbWFyaygnWm9uZScpO1xuICAgICAgICAvLyBJbml0aWFsaXplIGJlZm9yZSBpdCdzIGFjY2Vzc2VkIGJlbG93LlxuICAgICAgICAvLyBfX1pvbmVfc3ltYm9sX3ByZWZpeCBnbG9iYWwgY2FuIGJlIHVzZWQgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgem9uZVxuICAgICAgICAvLyBzeW1ib2wgcHJlZml4IHdpdGggYSBjdXN0b20gb25lIGlmIG5lZWRlZC5cbiAgICAgICAgdmFyIHN5bWJvbFByZWZpeCA9IGdsb2JhbFsnX19ab25lX3N5bWJvbF9wcmVmaXgnXSB8fCAnX196b25lX3N5bWJvbF9fJztcbiAgICAgICAgZnVuY3Rpb24gX19zeW1ib2xfXyhuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sUHJlZml4ICsgbmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2hlY2tEdXBsaWNhdGUgPSBnbG9iYWxbX19zeW1ib2xfXygnZm9yY2VEdXBsaWNhdGVab25lQ2hlY2snKV0gPT09IHRydWU7XG4gICAgICAgIGlmIChnbG9iYWxbJ1pvbmUnXSkge1xuICAgICAgICAgICAgLy8gaWYgZ2xvYmFsWydab25lJ10gYWxyZWFkeSBleGlzdHMgKG1heWJlIHpvbmUuanMgd2FzIGFscmVhZHkgbG9hZGVkIG9yXG4gICAgICAgICAgICAvLyBzb21lIG90aGVyIGxpYiBhbHNvIHJlZ2lzdGVyZWQgYSBnbG9iYWwgb2JqZWN0IG5hbWVkIFpvbmUpLCB3ZSBtYXkgbmVlZFxuICAgICAgICAgICAgLy8gdG8gdGhyb3cgYW4gZXJyb3IsIGJ1dCBzb21ldGltZXMgdXNlciBtYXkgbm90IHdhbnQgdGhpcyBlcnJvci5cbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLFxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0d28gd2ViIHBhZ2VzLCBwYWdlMSBpbmNsdWRlcyB6b25lLmpzLCBwYWdlMiBkb2Vzbid0LlxuICAgICAgICAgICAgLy8gYW5kIHRoZSAxc3QgdGltZSB1c2VyIGxvYWQgcGFnZTEgYW5kIHBhZ2UyLCBldmVyeXRoaW5nIHdvcmsgZmluZSxcbiAgICAgICAgICAgIC8vIGJ1dCB3aGVuIHVzZXIgbG9hZCBwYWdlMiBhZ2FpbiwgZXJyb3Igb2NjdXJzIGJlY2F1c2UgZ2xvYmFsWydab25lJ10gYWxyZWFkeSBleGlzdHMuXG4gICAgICAgICAgICAvLyBzbyB3ZSBhZGQgYSBmbGFnIHRvIGxldCB1c2VyIGNob29zZSB3aGV0aGVyIHRvIHRocm93IHRoaXMgZXJyb3Igb3Igbm90LlxuICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCwgaWYgZXhpc3RpbmcgWm9uZSBpcyBmcm9tIHpvbmUuanMsIHdlIHdpbGwgbm90IHRocm93IHRoZSBlcnJvci5cbiAgICAgICAgICAgIGlmIChjaGVja0R1cGxpY2F0ZSB8fCB0eXBlb2YgZ2xvYmFsWydab25lJ10uX19zeW1ib2xfXyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZSBhbHJlYWR5IGxvYWRlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBnbG9iYWxbJ1pvbmUnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgWm9uZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIFpvbmUocGFyZW50LCB6b25lU3BlYykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gem9uZVNwZWMgPyB6b25lU3BlYy5uYW1lIHx8ICd1bm5hbWVkJyA6ICc8cm9vdD4nO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSB6b25lU3BlYyAmJiB6b25lU3BlYy5wcm9wZXJ0aWVzIHx8IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZSA9XG4gICAgICAgICAgICAgICAgICAgIG5ldyBfWm9uZURlbGVnYXRlKHRoaXMsIHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQuX3pvbmVEZWxlZ2F0ZSwgem9uZVNwZWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWm9uZS5hc3NlcnRab25lUGF0Y2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsWydQcm9taXNlJ10gIT09IHBhdGNoZXNbJ1pvbmVBd2FyZVByb21pc2UnXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUuanMgaGFzIGRldGVjdGVkIHRoYXQgWm9uZUF3YXJlUHJvbWlzZSBgKHdpbmRvd3xnbG9iYWwpLlByb21pc2VgICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2hhcyBiZWVuIG92ZXJ3cml0dGVuLlxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ01vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgYSBQcm9taXNlIHBvbHlmaWxsIGhhcyBiZWVuIGxvYWRlZCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhZnRlciBab25lLmpzIChQb2x5ZmlsbGluZyBQcm9taXNlIGFwaSBpcyBub3QgbmVjZXNzYXJ5IHdoZW4gem9uZS5qcyBpcyBsb2FkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0lmIHlvdSBtdXN0IGxvYWQgb25lLCBkbyBzbyBiZWZvcmUgbG9hZGluZyB6b25lLmpzLiknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwicm9vdFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoem9uZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvbmUgPSB6b25lLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gem9uZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZSwgXCJjdXJyZW50XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jdXJyZW50Wm9uZUZyYW1lLnpvbmU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwiY3VycmVudFRhc2tcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRUYXNrO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgWm9uZS5fX2xvYWRfcGF0Y2ggPSBmdW5jdGlvbiAobmFtZSwgZm4sIGlnbm9yZUR1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChpZ25vcmVEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBpZ25vcmVEdXBsaWNhdGUgPSBmYWxzZTsgfVxuICAgICAgICAgICAgICAgIGlmIChwYXRjaGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGBjaGVja0R1cGxpY2F0ZWAgb3B0aW9uIGlzIGRlZmluZWQgZnJvbSBnbG9iYWwgdmFyaWFibGVcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gaXQgd29ya3MgZm9yIGFsbCBtb2R1bGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBgaWdub3JlRHVwbGljYXRlYCBjYW4gd29yayBmb3IgdGhlIHNwZWNpZmllZCBtb2R1bGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVEdXBsaWNhdGUgJiYgY2hlY2tEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdBbHJlYWR5IGxvYWRlZCBwYXRjaDogJyArIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFnbG9iYWxbJ19fWm9uZV9kaXNhYmxlXycgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGVyZk5hbWUgPSAnWm9uZTonICsgbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyayhwZXJmTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoZXNbbmFtZV0gPSBmbihnbG9iYWwsIFpvbmUsIF9hcGkpO1xuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZU1lYXN1cmUocGVyZk5hbWUsIHBlcmZOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUucHJvdG90eXBlLCBcInBhcmVudFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUucHJvdG90eXBlLCBcIm5hbWVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmUgPSB0aGlzLmdldFpvbmVXaXRoKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKHpvbmUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB6b25lLl9wcm9wZXJ0aWVzW2tleV07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuZ2V0Wm9uZVdpdGggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Ll9wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Ll9wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLmZvcmsgPSBmdW5jdGlvbiAoem9uZVNwZWMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmVTcGVjIHJlcXVpcmVkIScpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuZm9yayh0aGlzLCB6b25lU3BlYyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGluZyBmdW5jdGlvbiBnb3Q6ICcgKyBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBfY2FsbGJhY2sgPSB0aGlzLl96b25lRGVsZWdhdGUuaW50ZXJjZXB0KHRoaXMsIGNhbGxiYWNrLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIHZhciB6b25lID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gem9uZS5ydW5HdWFyZGVkKF9jYWxsYmFjaywgdGhpcywgYXJndW1lbnRzLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7IHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsIHpvbmU6IHRoaXMgfTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZSh0aGlzLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUucnVuR3VhcmRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmIChhcHBseVRoaXMgPT09IHZvaWQgMCkgeyBhcHBseVRoaXMgPSBudWxsOyB9XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7IHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsIHpvbmU6IHRoaXMgfTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2UodGhpcywgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLnJ1blRhc2sgPSBmdW5jdGlvbiAodGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay56b25lICE9IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHRhc2sgY2FuIG9ubHkgYmUgcnVuIGluIHRoZSB6b25lIG9mIGNyZWF0aW9uISAoQ3JlYXRpb246ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2suem9uZSB8fCBOT19aT05FKS5uYW1lICsgJzsgRXhlY3V0aW9uOiAnICsgdGhpcy5uYW1lICsgJyknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvNzc4LCBzb21ldGltZXMgZXZlbnRUYXNrXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBydW4gaW4gbm90U2NoZWR1bGVkKGNhbmNlbGVkKSBzdGF0ZSwgd2Ugc2hvdWxkIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgICAvLyBydW4gc3VjaCBraW5kIG9mIHRhc2sgYnV0IGp1c3QgcmV0dXJuXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suc3RhdGUgPT09IG5vdFNjaGVkdWxlZCAmJiAodGFzay50eXBlID09PSBldmVudFRhc2sgfHwgdGFzay50eXBlID09PSBtYWNyb1Rhc2spKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlRW50cnlHdWFyZCA9IHRhc2suc3RhdGUgIT0gcnVubmluZztcbiAgICAgICAgICAgICAgICByZUVudHJ5R3VhcmQgJiYgdGFzay5fdHJhbnNpdGlvblRvKHJ1bm5pbmcsIHNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgdGFzay5ydW5Db3VudCsrO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c1Rhc2sgPSBfY3VycmVudFRhc2s7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gdGFzaztcbiAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBfY3VycmVudFpvbmVGcmFtZSwgem9uZTogdGhpcyB9O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnR5cGUgPT0gbWFjcm9UYXNrICYmIHRhc2suZGF0YSAmJiAhdGFzay5kYXRhLmlzUGVyaW9kaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suY2FuY2VsRm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlVGFzayh0aGlzLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fem9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRoaXMsIGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdGFzaydzIHN0YXRlIGlzIG5vdFNjaGVkdWxlZCBvciB1bmtub3duLCB0aGVuIGl0IGhhcyBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBub3QgcmVzZXQgdGhlIHN0YXRlIHRvIHNjaGVkdWxlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSAhPT0gbm90U2NoZWR1bGVkICYmIHRhc2suc3RhdGUgIT09IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnR5cGUgPT0gZXZlbnRUYXNrIHx8ICh0YXNrLmRhdGEgJiYgdGFzay5kYXRhLmlzUGVyaW9kaWMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmIHRhc2suX3RyYW5zaXRpb25UbyhzY2hlZHVsZWQsIHJ1bm5pbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5ydW5Db3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHRhc2ssIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5R3VhcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgcnVubmluZywgbm90U2NoZWR1bGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gcHJldmlvdXNUYXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZVRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnpvbmUgJiYgdGFzay56b25lICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSB0YXNrIHdhcyByZXNjaGVkdWxlZCwgdGhlIG5ld1pvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBiZSB0aGUgY2hpbGRyZW4gb2YgdGhlIG9yaWdpbmFsIHpvbmVcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1pvbmUgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobmV3Wm9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1pvbmUgPT09IHRhc2suem9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiY2FuIG5vdCByZXNjaGVkdWxlIHRhc2sgdG8gXCIuY29uY2F0KHRoaXMubmFtZSwgXCIgd2hpY2ggaXMgZGVzY2VuZGFudHMgb2YgdGhlIG9yaWdpbmFsIHpvbmUgXCIpLmNvbmNhdCh0YXNrLnpvbmUubmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Wm9uZSA9IG5ld1pvbmUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhzY2hlZHVsaW5nLCBub3RTY2hlZHVsZWQpO1xuICAgICAgICAgICAgICAgIHZhciB6b25lRGVsZWdhdGVzID0gW107XG4gICAgICAgICAgICAgICAgdGFzay5fem9uZURlbGVnYXRlcyA9IHpvbmVEZWxlZ2F0ZXM7XG4gICAgICAgICAgICAgICAgdGFzay5fem9uZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGFzayA9IHRoaXMuX3pvbmVEZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGhpcywgdGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIHNldCB0YXNrJ3Mgc3RhdGUgdG8gdW5rbm93biB3aGVuIHNjaGVkdWxlVGFzayB0aHJvdyBlcnJvclxuICAgICAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHRoZSBlcnIgbWF5IGZyb20gcmVzY2hlZHVsZSwgc28gdGhlIGZyb21TdGF0ZSBtYXliZSBub3RTY2hlZHVsZWRcbiAgICAgICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHVua25vd24sIHNjaGVkdWxpbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEBKaWFMaVBhc3Npb24sIHNob3VsZCB3ZSBjaGVjayB0aGUgcmVzdWx0IGZyb20gaGFuZGxlRXJyb3I/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXNrLl96b25lRGVsZWdhdGVzID09PSB6b25lRGVsZWdhdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gY2hlY2sgYmVjYXVzZSBpbnRlcm5hbGx5IHRoZSBkZWxlZ2F0ZSBjYW4gcmVzY2hlZHVsZSB0aGUgdGFzay5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHRhc2ssIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSA9PSBzY2hlZHVsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhzY2hlZHVsZWQsIHNjaGVkdWxpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2sobWljcm9UYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgdW5kZWZpbmVkKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuc2NoZWR1bGVNYWNyb1Rhc2sgPSBmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2sobWFjcm9UYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuc2NoZWR1bGVFdmVudFRhc2sgPSBmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2soZXZlbnRUYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuY2FuY2VsVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdGFzayBjYW4gb25seSBiZSBjYW5jZWxsZWQgaW4gdGhlIHpvbmUgb2YgY3JlYXRpb24hIChDcmVhdGlvbjogJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGFzay56b25lIHx8IE5PX1pPTkUpLm5hbWUgKyAnOyBFeGVjdXRpb246ICcgKyB0aGlzLm5hbWUgKyAnKScpO1xuICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhjYW5jZWxpbmcsIHNjaGVkdWxlZCwgcnVubmluZyk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlLmNhbmNlbFRhc2sodGhpcywgdGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgZXJyb3Igb2NjdXJzIHdoZW4gY2FuY2VsVGFzaywgdHJhbnNpdCB0aGUgc3RhdGUgdG8gdW5rbm93blxuICAgICAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8odW5rbm93biwgY2FuY2VsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRoaXMsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHRhc2ssIC0xKTtcbiAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8obm90U2NoZWR1bGVkLCBjYW5jZWxpbmcpO1xuICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLl91cGRhdGVUYXNrQ291bnQgPSBmdW5jdGlvbiAodGFzaywgY291bnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgem9uZURlbGVnYXRlcyA9IHRhc2suX3pvbmVEZWxlZ2F0ZXM7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHpvbmVEZWxlZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgem9uZURlbGVnYXRlc1tpXS5fdXBkYXRlVGFza0NvdW50KHRhc2sudHlwZSwgY291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gWm9uZTtcbiAgICAgICAgfSgpKTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgIFpvbmUuX19zeW1ib2xfXyA9IF9fc3ltYm9sX187XG4gICAgICAgIHZhciBERUxFR0FURV9aUyA9IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgb25IYXNUYXNrOiBmdW5jdGlvbiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgaGFzVGFza1N0YXRlKSB7IHJldHVybiBkZWxlZ2F0ZS5oYXNUYXNrKHRhcmdldCwgaGFzVGFza1N0YXRlKTsgfSxcbiAgICAgICAgICAgIG9uU2NoZWR1bGVUYXNrOiBmdW5jdGlvbiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaykgeyByZXR1cm4gZGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRhcmdldCwgdGFzayk7IH0sXG4gICAgICAgICAgICBvbkludm9rZVRhc2s6IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykgeyByZXR1cm4gZGVsZWdhdGUuaW52b2tlVGFzayh0YXJnZXQsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKTsgfSxcbiAgICAgICAgICAgIG9uQ2FuY2VsVGFzazogZnVuY3Rpb24gKGRlbGVnYXRlLCBfLCB0YXJnZXQsIHRhc2spIHsgcmV0dXJuIGRlbGVnYXRlLmNhbmNlbFRhc2sodGFyZ2V0LCB0YXNrKTsgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgX1pvbmVEZWxlZ2F0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9ab25lRGVsZWdhdGUoem9uZSwgcGFyZW50RGVsZWdhdGUsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFza0NvdW50cyA9IHsgJ21pY3JvVGFzayc6IDAsICdtYWNyb1Rhc2snOiAwLCAnZXZlbnRUYXNrJzogMCB9O1xuICAgICAgICAgICAgICAgIHRoaXMuem9uZSA9IHpvbmU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50RGVsZWdhdGUgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMgJiYgem9uZVNwZWMub25Gb3JrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya1pTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JrRGxndCA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkZvcmsgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrRGxndCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9ya0N1cnJab25lID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrQ3VyclpvbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdFpTID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW50ZXJjZXB0ID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW50ZXJjZXB0WlMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdERsZ3QgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHREbGd0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHRDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRDdXJyWm9uZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VaUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlRGxndCA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZURsZ3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZUN1cnJab25lID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZUN1cnJab25lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9oYW5kbGVFcnJvclpTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvckRsZ3QgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yRGxndCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yQ3VyclpvbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza1pTID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrWlMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0RsZ3QgPSB6b25lU3BlYyAmJlxuICAgICAgICAgICAgICAgICAgICAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2tEbGd0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vblNjaGVkdWxlVGFzayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza1pTID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2taUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlVGFza0RsZ3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlVGFza0N1cnJab25lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fY2FuY2VsVGFza1pTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrRGxndCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrQ3VyclpvbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tDdXJyWm9uZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmVTcGVjSGFzVGFzayA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uSGFzVGFzaztcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50SGFzVGFzayA9IHBhcmVudERlbGVnYXRlICYmIHBhcmVudERlbGVnYXRlLl9oYXNUYXNrWlM7XG4gICAgICAgICAgICAgICAgaWYgKHpvbmVTcGVjSGFzVGFzayB8fCBwYXJlbnRIYXNUYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gcmVwb3J0IGhhc1Rhc2ssIHRoYW4gdGhpcyBaUyBuZWVkcyB0byBkbyByZWYgY291bnRpbmcgb24gdGFza3MuIEluIHN1Y2hcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBjYXNlIGFsbCB0YXNrIHJlbGF0ZWQgaW50ZXJjZXB0b3JzIG11c3QgZ28gdGhyb3VnaCB0aGlzIFpELiBXZSBjYW4ndCBzaG9ydCBjaXJjdWl0IGl0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMgPSB6b25lU3BlY0hhc1Rhc2sgPyB6b25lU3BlYyA6IERFTEVHQVRFX1pTO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndE93bmVyID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza0N1cnJab25lID0gem9uZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vblNjaGVkdWxlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghem9uZVNwZWMub25JbnZva2VUYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrQ3VyclpvbmUgPSB0aGlzLnpvbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vbkNhbmNlbFRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tDdXJyWm9uZSA9IHRoaXMuem9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9ab25lRGVsZWdhdGUucHJvdG90eXBlLmZvcmsgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgem9uZVNwZWMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ya1pTID8gdGhpcy5fZm9ya1pTLm9uRm9yayh0aGlzLl9mb3JrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB6b25lU3BlYykgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgWm9uZSh0YXJnZXRab25lLCB6b25lU3BlYyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX1pvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGNhbGxiYWNrLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJjZXB0WlMgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHRaUy5vbkludGVyY2VwdCh0aGlzLl9pbnRlcmNlcHREbGd0LCB0aGlzLl9pbnRlcmNlcHRDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkgOlxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfWm9uZURlbGVnYXRlLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlWlMgPyB0aGlzLl9pbnZva2VaUy5vbkludm9rZSh0aGlzLl9pbnZva2VEbGd0LCB0aGlzLl9pbnZva2VDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIDpcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9ab25lRGVsZWdhdGUucHJvdG90eXBlLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yWlMgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTLm9uSGFuZGxlRXJyb3IodGhpcy5faGFuZGxlRXJyb3JEbGd0LCB0aGlzLl9oYW5kbGVFcnJvckN1cnJab25lLCB0YXJnZXRab25lLCBlcnJvcikgOlxuICAgICAgICAgICAgICAgICAgICB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9ab25lRGVsZWdhdGUucHJvdG90eXBlLnNjaGVkdWxlVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB0YXNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblRhc2sgPSB0YXNrO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY2hlZHVsZVRhc2taUykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzVGFza1pTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5UYXNrLl96b25lRGVsZWdhdGVzLnB1c2godGhpcy5faGFzVGFza0RsZ3RPd25lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gY2xhbmctZm9ybWF0IG9mZlxuICAgICAgICAgICAgICAgICAgICByZXR1cm5UYXNrID0gdGhpcy5fc2NoZWR1bGVUYXNrWlMub25TY2hlZHVsZVRhc2sodGhpcy5fc2NoZWR1bGVUYXNrRGxndCwgdGhpcy5fc2NoZWR1bGVUYXNrQ3VyclpvbmUsIHRhcmdldFpvbmUsIHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGFuZy1mb3JtYXQgb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXR1cm5UYXNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzayA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5zY2hlZHVsZUZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnNjaGVkdWxlRm4odGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGFzay50eXBlID09IG1pY3JvVGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVNaWNyb1Rhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rhc2sgaXMgbWlzc2luZyBzY2hlZHVsZUZuLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5UYXNrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9ab25lRGVsZWdhdGUucHJvdG90eXBlLmludm9rZVRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlVGFza1pTID8gdGhpcy5faW52b2tlVGFza1pTLm9uSW52b2tlVGFzayh0aGlzLl9pbnZva2VUYXNrRGxndCwgdGhpcy5faW52b2tlVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykgOlxuICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbGxiYWNrLmFwcGx5KGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfWm9uZURlbGVnYXRlLnByb3RvdHlwZS5jYW5jZWxUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2spIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhbmNlbFRhc2taUykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX2NhbmNlbFRhc2taUy5vbkNhbmNlbFRhc2sodGhpcy5fY2FuY2VsVGFza0RsZ3QsIHRoaXMuX2NhbmNlbFRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhc2suY2FuY2VsRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdUYXNrIGlzIG5vdCBjYW5jZWxhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0YXNrLmNhbmNlbEZuKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX1pvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFzVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBpc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgLy8gaGFzVGFzayBzaG91bGQgbm90IHRocm93IGVycm9yIHNvIG90aGVyIFpvbmVEZWxlZ2F0ZVxuICAgICAgICAgICAgICAgIC8vIGNhbiBzdGlsbCB0cmlnZ2VyIGhhc1Rhc2sgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUy5vbkhhc1Rhc2sodGhpcy5faGFzVGFza0RsZ3QsIHRoaXMuX2hhc1Rhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgaXNFbXB0eSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcih0YXJnZXRab25lLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgICAgIF9ab25lRGVsZWdhdGUucHJvdG90eXBlLl91cGRhdGVUYXNrQ291bnQgPSBmdW5jdGlvbiAodHlwZSwgY291bnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY291bnRzID0gdGhpcy5fdGFza0NvdW50cztcbiAgICAgICAgICAgICAgICB2YXIgcHJldiA9IGNvdW50c1t0eXBlXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGNvdW50c1t0eXBlXSA9IHByZXYgKyBjb3VudDtcbiAgICAgICAgICAgICAgICBpZiAobmV4dCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb3JlIHRhc2tzIGV4ZWN1dGVkIHRoZW4gd2VyZSBzY2hlZHVsZWQuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2ID09IDAgfHwgbmV4dCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWljcm9UYXNrOiBjb3VudHNbJ21pY3JvVGFzayddID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hY3JvVGFzazogY291bnRzWydtYWNyb1Rhc2snXSA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhc2s6IGNvdW50c1snZXZlbnRUYXNrJ10gPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiB0eXBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzVGFzayh0aGlzLnpvbmUsIGlzRW1wdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gX1pvbmVEZWxlZ2F0ZTtcbiAgICAgICAgfSgpKTtcbiAgICAgICAgdmFyIFpvbmVUYXNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gWm9uZVRhc2sodHlwZSwgc291cmNlLCBjYWxsYmFjaywgb3B0aW9ucywgc2NoZWR1bGVGbiwgY2FuY2VsRm4pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9ICdub3RTY2hlZHVsZWQnO1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlRm4gPSBzY2hlZHVsZUZuO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsRm4gPSBjYW5jZWxGbjtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBASmlhTGlQYXNzaW9uIG9wdGlvbnMgc2hvdWxkIGhhdmUgaW50ZXJmYWNlXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IGV2ZW50VGFzayAmJiBvcHRpb25zICYmIG9wdGlvbnMudXNlRykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludm9rZSA9IFpvbmVUYXNrLmludm9rZVRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBab25lVGFzay5pbnZva2VUYXNrLmNhbGwoZ2xvYmFsLCBzZWxmLCB0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFpvbmVUYXNrLmludm9rZVRhc2sgPSBmdW5jdGlvbiAodGFzaywgdGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzKys7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5ydW5Db3VudCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay56b25lLnJ1blRhc2sodGFzaywgdGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWluTWljcm9UYXNrUXVldWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lVGFzay5wcm90b3R5cGUsIFwiem9uZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lVGFzay5wcm90b3R5cGUsIFwic3RhdGVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLmNhbmNlbFNjaGVkdWxlUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uVG8obm90U2NoZWR1bGVkLCBzY2hlZHVsaW5nKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgICAgIFpvbmVUYXNrLnByb3RvdHlwZS5fdHJhbnNpdGlvblRvID0gZnVuY3Rpb24gKHRvU3RhdGUsIGZyb21TdGF0ZTEsIGZyb21TdGF0ZTIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IGZyb21TdGF0ZTEgfHwgdGhpcy5fc3RhdGUgPT09IGZyb21TdGF0ZTIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9TdGF0ZSA9PSBub3RTY2hlZHVsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQodGhpcy50eXBlLCBcIiAnXCIpLmNvbmNhdCh0aGlzLnNvdXJjZSwgXCInOiBjYW4gbm90IHRyYW5zaXRpb24gdG8gJ1wiKS5jb25jYXQodG9TdGF0ZSwgXCInLCBleHBlY3Rpbmcgc3RhdGUgJ1wiKS5jb25jYXQoZnJvbVN0YXRlMSwgXCInXCIpLmNvbmNhdChmcm9tU3RhdGUyID8gJyBvciBcXCcnICsgZnJvbVN0YXRlMiArICdcXCcnIDogJycsIFwiLCB3YXMgJ1wiKS5jb25jYXQodGhpcy5fc3RhdGUsIFwiJy5cIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lVGFzay5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0eXBlb2YgdGhpcy5kYXRhLmhhbmRsZUlkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhbmRsZUlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBhZGQgdG9KU09OIG1ldGhvZCB0byBwcmV2ZW50IGN5Y2xpYyBlcnJvciB3aGVuXG4gICAgICAgICAgICAvLyBjYWxsIEpTT04uc3RyaW5naWZ5KHpvbmVUYXNrKVxuICAgICAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgICAgICAgICAgICAgICB6b25lOiB0aGlzLnpvbmUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcnVuQ291bnQ6IHRoaXMucnVuQ291bnRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBab25lVGFzaztcbiAgICAgICAgfSgpKTtcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLy8gIE1JQ1JPVEFTSyBRVUVVRVxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIHZhciBzeW1ib2xTZXRUaW1lb3V0ID0gX19zeW1ib2xfXygnc2V0VGltZW91dCcpO1xuICAgICAgICB2YXIgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICAgICAgdmFyIHN5bWJvbFRoZW4gPSBfX3N5bWJvbF9fKCd0aGVuJyk7XG4gICAgICAgIHZhciBfbWljcm9UYXNrUXVldWUgPSBbXTtcbiAgICAgICAgdmFyIF9pc0RyYWluaW5nTWljcm90YXNrUXVldWUgPSBmYWxzZTtcbiAgICAgICAgdmFyIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZTtcbiAgICAgICAgZnVuY3Rpb24gbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soZnVuYykge1xuICAgICAgICAgICAgaWYgKCFuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsW3N5bWJvbFByb21pc2VdKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSA9IGdsb2JhbFtzeW1ib2xQcm9taXNlXS5yZXNvbHZlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmF0aXZlVGhlbiA9IG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZVtzeW1ib2xUaGVuXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5hdGl2ZVRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmF0aXZlIFByb21pc2UgaXMgbm90IHBhdGNoYWJsZSwgd2UgbmVlZCB0byB1c2UgYHRoZW5gIGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgICAgIC8vIGlzc3VlIDEwNzhcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlVGhlbiA9IG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZVsndGhlbiddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuYXRpdmVUaGVuLmNhbGwobmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlLCBmdW5jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdsb2JhbFtzeW1ib2xTZXRUaW1lb3V0XShmdW5jLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbm90IHJ1bm5pbmcgaW4gYW55IHRhc2ssIGFuZCB0aGVyZSBoYXMgbm90IGJlZW4gYW55dGhpbmcgc2NoZWR1bGVkXG4gICAgICAgICAgICAvLyB3ZSBtdXN0IGJvb3RzdHJhcCB0aGUgaW5pdGlhbCB0YXNrIGNyZWF0aW9uIGJ5IG1hbnVhbGx5IHNjaGVkdWxpbmcgdGhlIGRyYWluXG4gICAgICAgICAgICBpZiAoX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9PT0gMCAmJiBfbWljcm9UYXNrUXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIG5vdCBydW5uaW5nIGluIFRhc2ssIHNvIHdlIG5lZWQgdG8ga2lja3N0YXJ0IHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gICAgICAgICAgICAgICAgbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soZHJhaW5NaWNyb1Rhc2tRdWV1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrICYmIF9taWNyb1Rhc2tRdWV1ZS5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRyYWluTWljcm9UYXNrUXVldWUoKSB7XG4gICAgICAgICAgICBpZiAoIV9pc0RyYWluaW5nTWljcm90YXNrUXVldWUpIHtcbiAgICAgICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoX21pY3JvVGFza1F1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcXVldWUgPSBfbWljcm9UYXNrUXVldWU7XG4gICAgICAgICAgICAgICAgICAgIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHF1ZXVlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hcGkub25VbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2FwaS5taWNyb3Rhc2tEcmFpbkRvbmUoKTtcbiAgICAgICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLy8gIEJPT1RTVFJBUFxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIHZhciBOT19aT05FID0geyBuYW1lOiAnTk8gWk9ORScgfTtcbiAgICAgICAgdmFyIG5vdFNjaGVkdWxlZCA9ICdub3RTY2hlZHVsZWQnLCBzY2hlZHVsaW5nID0gJ3NjaGVkdWxpbmcnLCBzY2hlZHVsZWQgPSAnc2NoZWR1bGVkJywgcnVubmluZyA9ICdydW5uaW5nJywgY2FuY2VsaW5nID0gJ2NhbmNlbGluZycsIHVua25vd24gPSAndW5rbm93bic7XG4gICAgICAgIHZhciBtaWNyb1Rhc2sgPSAnbWljcm9UYXNrJywgbWFjcm9UYXNrID0gJ21hY3JvVGFzaycsIGV2ZW50VGFzayA9ICdldmVudFRhc2snO1xuICAgICAgICB2YXIgcGF0Y2hlcyA9IHt9O1xuICAgICAgICB2YXIgX2FwaSA9IHtcbiAgICAgICAgICAgIHN5bWJvbDogX19zeW1ib2xfXyxcbiAgICAgICAgICAgIGN1cnJlbnRab25lRnJhbWU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9jdXJyZW50Wm9uZUZyYW1lOyB9LFxuICAgICAgICAgICAgb25VbmhhbmRsZWRFcnJvcjogbm9vcCxcbiAgICAgICAgICAgIG1pY3JvdGFza0RyYWluRG9uZTogbm9vcCxcbiAgICAgICAgICAgIHNjaGVkdWxlTWljcm9UYXNrOiBzY2hlZHVsZU1pY3JvVGFzayxcbiAgICAgICAgICAgIHNob3dVbmNhdWdodEVycm9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhWm9uZVtfX3N5bWJvbF9fKCdpZ25vcmVDb25zb2xlRXJyb3JVbmNhdWdodEVycm9yJyldOyB9LFxuICAgICAgICAgICAgcGF0Y2hFdmVudFRhcmdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllczogbm9vcCxcbiAgICAgICAgICAgIHBhdGNoTWV0aG9kOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgYmluZEFyZ3VtZW50czogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgICAgICBwYXRjaFRoZW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBwYXRjaE1hY3JvVGFzazogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIHBhdGNoRXZlbnRQcm90b3R5cGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBpc0lFT3JFZGdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGdldEdsb2JhbE9iamVjdHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICBPYmplY3RDcmVhdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIEFycmF5U2xpY2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgcGF0Y2hDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIHdyYXBXaXRoQ3VycmVudFpvbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBmaWx0ZXJQcm9wZXJ0aWVzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIF9yZWRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgcGF0Y2hDYWxsYmFja3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBuYXRpdmVTY2hlZHVsZU1pY3JvVGFzazogbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2tcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IG51bGwsIHpvbmU6IG5ldyBab25lKG51bGwsIG51bGwpIH07XG4gICAgICAgIHZhciBfY3VycmVudFRhc2sgPSBudWxsO1xuICAgICAgICB2YXIgX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIG5vb3AoKSB7IH1cbiAgICAgICAgcGVyZm9ybWFuY2VNZWFzdXJlKCdab25lJywgJ1pvbmUnKTtcbiAgICAgICAgcmV0dXJuIGdsb2JhbFsnWm9uZSddID0gWm9uZTtcbiAgICB9KSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIHx8IGdsb2JhbCk7XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogU3VwcHJlc3MgY2xvc3VyZSBjb21waWxlciBlcnJvcnMgYWJvdXQgdW5rbm93biAnWm9uZScgdmFyaWFibGVcbiAgICAgKiBAZmlsZW92ZXJ2aWV3XG4gICAgICogQHN1cHByZXNzIHt1bmRlZmluZWRWYXJzLGdsb2JhbFRoaXMsbWlzc2luZ1JlcXVpcmV9XG4gICAgICovXG4gICAgLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJub2RlXCIvPlxuICAgIC8vIGlzc3VlICM5ODksIHRvIHJlZHVjZSBidW5kbGUgc2l6ZSwgdXNlIHNob3J0IG5hbWVcbiAgICAvKiogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAqL1xuICAgIHZhciBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgIC8qKiBPYmplY3QuZGVmaW5lUHJvcGVydHkgKi9cbiAgICB2YXIgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgLyoqIE9iamVjdC5nZXRQcm90b3R5cGVPZiAqL1xuICAgIHZhciBPYmplY3RHZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgICAvKiogT2JqZWN0LmNyZWF0ZSAqL1xuICAgIHZhciBPYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuICAgIC8qKiBBcnJheS5wcm90b3R5cGUuc2xpY2UgKi9cbiAgICB2YXIgQXJyYXlTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiAgICAvKiogYWRkRXZlbnRMaXN0ZW5lciBzdHJpbmcgY29uc3QgKi9cbiAgICB2YXIgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiA9ICdhZGRFdmVudExpc3RlbmVyJztcbiAgICAvKiogcmVtb3ZlRXZlbnRMaXN0ZW5lciBzdHJpbmcgY29uc3QgKi9cbiAgICB2YXIgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiA9ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICAvKiogem9uZVN5bWJvbCBhZGRFdmVudExpc3RlbmVyICovXG4gICAgdmFyIFpPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUiA9IFpvbmUuX19zeW1ib2xfXyhBRERfRVZFTlRfTElTVEVORVJfU1RSKTtcbiAgICAvKiogem9uZVN5bWJvbCByZW1vdmVFdmVudExpc3RlbmVyICovXG4gICAgdmFyIFpPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUiA9IFpvbmUuX19zeW1ib2xfXyhSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSKTtcbiAgICAvKiogdHJ1ZSBzdHJpbmcgY29uc3QgKi9cbiAgICB2YXIgVFJVRV9TVFIgPSAndHJ1ZSc7XG4gICAgLyoqIGZhbHNlIHN0cmluZyBjb25zdCAqL1xuICAgIHZhciBGQUxTRV9TVFIgPSAnZmFsc2UnO1xuICAgIC8qKiBab25lIHN5bWJvbCBwcmVmaXggc3RyaW5nIGNvbnN0LiAqL1xuICAgIHZhciBaT05FX1NZTUJPTF9QUkVGSVggPSBab25lLl9fc3ltYm9sX18oJycpO1xuICAgIGZ1bmN0aW9uIHdyYXBXaXRoQ3VycmVudFpvbmUoY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gWm9uZS5jdXJyZW50LndyYXAoY2FsbGJhY2ssIHNvdXJjZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgcmV0dXJuIFpvbmUuY3VycmVudC5zY2hlZHVsZU1hY3JvVGFzayhzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKTtcbiAgICB9XG4gICAgdmFyIHpvbmVTeW1ib2wkMSA9IFpvbmUuX19zeW1ib2xfXztcbiAgICB2YXIgaXNXaW5kb3dFeGlzdHMgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgICB2YXIgaW50ZXJuYWxXaW5kb3cgPSBpc1dpbmRvd0V4aXN0cyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgICB2YXIgX2dsb2JhbCA9IGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbDtcbiAgICB2YXIgUkVNT1ZFX0FUVFJJQlVURSA9ICdyZW1vdmVBdHRyaWJ1dGUnO1xuICAgIGZ1bmN0aW9uIGJpbmRBcmd1bWVudHMoYXJncywgc291cmNlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBhcmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhcmdzW2ldID0gd3JhcFdpdGhDdXJyZW50Wm9uZShhcmdzW2ldLCBzb3VyY2UgKyAnXycgKyBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hQcm90b3R5cGUocHJvdG90eXBlLCBmbk5hbWVzKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBwcm90b3R5cGUuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IGZuTmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBwcm90b3R5cGVbbmFtZV8xXTtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm90b3R5cGVEZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgbmFtZV8xKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUHJvcGVydHlXcml0YWJsZShwcm90b3R5cGVEZXNjKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm90b3R5cGVbbmFtZV8xXSA9IChmdW5jdGlvbiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkodGhpcywgYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIHNvdXJjZSArICcuJyArIG5hbWVfMSkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocGF0Y2hlZCwgZGVsZWdhdGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0Y2hlZDtcbiAgICAgICAgICAgICAgICB9KShkZWxlZ2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm5OYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc1Byb3BlcnR5V3JpdGFibGUocHJvcGVydHlEZXNjKSB7XG4gICAgICAgIGlmICghcHJvcGVydHlEZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHlEZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKHR5cGVvZiBwcm9wZXJ0eURlc2MuZ2V0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwcm9wZXJ0eURlc2Muc2V0ID09PSAndW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHZhciBpc1dlYldvcmtlciA9ICh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSk7XG4gICAgLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4gICAgLy8gdGhpcyBjb2RlLlxuICAgIHZhciBpc05vZGUgPSAoISgnbncnIGluIF9nbG9iYWwpICYmIHR5cGVvZiBfZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcbiAgICB2YXIgaXNCcm93c2VyID0gIWlzTm9kZSAmJiAhaXNXZWJXb3JrZXIgJiYgISEoaXNXaW5kb3dFeGlzdHMgJiYgaW50ZXJuYWxXaW5kb3dbJ0hUTUxFbGVtZW50J10pO1xuICAgIC8vIHdlIGFyZSBpbiBlbGVjdHJvbiBvZiBudywgc28gd2UgYXJlIGJvdGggYnJvd3NlciBhbmQgbm9kZWpzXG4gICAgLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4gICAgLy8gdGhpcyBjb2RlLlxuICAgIHZhciBpc01peCA9IHR5cGVvZiBfZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nICYmICFpc1dlYldvcmtlciAmJlxuICAgICAgICAhIShpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG4gICAgdmFyIHpvbmVTeW1ib2xFdmVudE5hbWVzJDEgPSB7fTtcbiAgICB2YXIgd3JhcEZuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzkxMSwgaW4gSUUsIHNvbWV0aW1lc1xuICAgICAgICAvLyBldmVudCB3aWxsIGJlIHVuZGVmaW5lZCwgc28gd2UgbmVlZCB0byB1c2Ugd2luZG93LmV2ZW50XG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgX2dsb2JhbC5ldmVudDtcbiAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50LnR5cGVdO1xuICAgICAgICBpZiAoIWV2ZW50TmFtZVN5bWJvbCkge1xuICAgICAgICAgICAgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudC50eXBlXSA9IHpvbmVTeW1ib2wkMSgnT05fUFJPUEVSVFknICsgZXZlbnQudHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICBpZiAoaXNCcm93c2VyICYmIHRhcmdldCA9PT0gaW50ZXJuYWxXaW5kb3cgJiYgZXZlbnQudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgLy8gd2luZG93Lm9uZXJyb3IgaGF2ZSBkaWZmZXJlbnQgc2lnbmF0dXJlXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvR2xvYmFsRXZlbnRIYW5kbGVycy9vbmVycm9yI3dpbmRvdy5vbmVycm9yXG4gICAgICAgICAgICAvLyBhbmQgb25lcnJvciBjYWxsYmFjayB3aWxsIHByZXZlbnQgZGVmYXVsdCB3aGVuIGNhbGxiYWNrIHJldHVybiB0cnVlXG4gICAgICAgICAgICB2YXIgZXJyb3JFdmVudCA9IGV2ZW50O1xuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIgJiZcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGVycm9yRXZlbnQubWVzc2FnZSwgZXJyb3JFdmVudC5maWxlbmFtZSwgZXJyb3JFdmVudC5saW5lbm8sIGVycm9yRXZlbnQuY29sbm8sIGVycm9yRXZlbnQuZXJyb3IpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lciAmJiBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSB1bmRlZmluZWQgJiYgIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHBhdGNoUHJvcGVydHkob2JqLCBwcm9wLCBwcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICAgICAgaWYgKCFkZXNjICYmIHByb3RvdHlwZSkge1xuICAgICAgICAgICAgLy8gd2hlbiBwYXRjaCB3aW5kb3cgb2JqZWN0LCB1c2UgcHJvdG90eXBlIHRvIGNoZWNrIHByb3AgZXhpc3Qgb3Igbm90XG4gICAgICAgICAgICB2YXIgcHJvdG90eXBlRGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIHByb3ApO1xuICAgICAgICAgICAgaWYgKHByb3RvdHlwZURlc2MpIHtcbiAgICAgICAgICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgZGVzY3JpcHRvciBub3QgZXhpc3RzIG9yIGlzIG5vdCBjb25maWd1cmFibGVcbiAgICAgICAgLy8ganVzdCByZXR1cm5cbiAgICAgICAgaWYgKCFkZXNjIHx8ICFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvblByb3BQYXRjaGVkU3ltYm9sID0gem9uZVN5bWJvbCQxKCdvbicgKyBwcm9wICsgJ3BhdGNoZWQnKTtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShvblByb3BQYXRjaGVkU3ltYm9sKSAmJiBvYmpbb25Qcm9wUGF0Y2hlZFN5bWJvbF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBIHByb3BlcnR5IGRlc2NyaXB0b3IgY2Fubm90IGhhdmUgZ2V0dGVyL3NldHRlciBhbmQgYmUgd3JpdGFibGVcbiAgICAgICAgLy8gZGVsZXRpbmcgdGhlIHdyaXRhYmxlIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIGF2b2lkcyB0aGlzIGVycm9yOlxuICAgICAgICAvL1xuICAgICAgICAvLyBUeXBlRXJyb3I6IHByb3BlcnR5IGRlc2NyaXB0b3JzIG11c3Qgbm90IHNwZWNpZnkgYSB2YWx1ZSBvciBiZSB3cml0YWJsZSB3aGVuIGFcbiAgICAgICAgLy8gZ2V0dGVyIG9yIHNldHRlciBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgICAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgICAgIGRlbGV0ZSBkZXNjLnZhbHVlO1xuICAgICAgICB2YXIgb3JpZ2luYWxEZXNjR2V0ID0gZGVzYy5nZXQ7XG4gICAgICAgIHZhciBvcmlnaW5hbERlc2NTZXQgPSBkZXNjLnNldDtcbiAgICAgICAgLy8gc2xpY2UoMikgY3V6ICdvbmNsaWNrJyAtPiAnY2xpY2snLCBldGNcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IHByb3Auc2xpY2UoMik7XG4gICAgICAgIHZhciBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV07XG4gICAgICAgIGlmICghZXZlbnROYW1lU3ltYm9sKSB7XG4gICAgICAgICAgICBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV0gPSB6b25lU3ltYm9sJDEoJ09OX1BST1BFUlRZJyArIGV2ZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzYy5zZXQgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIC8vIGluIHNvbWUgb2Ygd2luZG93cydzIG9ucHJvcGVydHkgY2FsbGJhY2ssIHRoaXMgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGl0XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghdGFyZ2V0ICYmIG9iaiA9PT0gX2dsb2JhbCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IF9nbG9iYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHdyYXBGbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpc3N1ZSAjOTc4LCB3aGVuIG9ubG9hZCBoYW5kbGVyIHdhcyBhZGRlZCBiZWZvcmUgbG9hZGluZyB6b25lLmpzXG4gICAgICAgICAgICAvLyB3ZSBzaG91bGQgcmVtb3ZlIGl0IHdpdGggb3JpZ2luYWxEZXNjU2V0XG4gICAgICAgICAgICBvcmlnaW5hbERlc2NTZXQgJiYgb3JpZ2luYWxEZXNjU2V0LmNhbGwodGFyZ2V0LCBudWxsKTtcbiAgICAgICAgICAgIHRhcmdldFtldmVudE5hbWVTeW1ib2xdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwRm4sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGhlIGdldHRlciB3b3VsZCByZXR1cm4gdW5kZWZpbmVkIGZvciB1bmFzc2lnbmVkIHByb3BlcnRpZXMgYnV0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGFuXG4gICAgICAgIC8vIHVuYXNzaWduZWQgcHJvcGVydHkgaXMgbnVsbFxuICAgICAgICBkZXNjLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGluIHNvbWUgb2Ygd2luZG93cydzIG9ucHJvcGVydHkgY2FsbGJhY2ssIHRoaXMgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGl0XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghdGFyZ2V0ICYmIG9iaiA9PT0gX2dsb2JhbCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IF9nbG9iYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF07XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcmlnaW5hbERlc2NHZXQpIHtcbiAgICAgICAgICAgICAgICAvLyByZXN1bHQgd2lsbCBiZSBudWxsIHdoZW4gdXNlIGlubGluZSBldmVudCBhdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgLy8gc3VjaCBhcyA8YnV0dG9uIG9uY2xpY2s9XCJmdW5jKCk7XCI+T0s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHRoZSBvbmNsaWNrIGZ1bmN0aW9uIGlzIGludGVybmFsIHJhdyB1bmNvbXBpbGVkIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAvLyB0aGUgb25jbGljayB3aWxsIGJlIGV2YWx1YXRlZCB3aGVuIGZpcnN0IHRpbWUgZXZlbnQgd2FzIHRyaWdnZXJlZCBvclxuICAgICAgICAgICAgICAgIC8vIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZCwgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvNTI1XG4gICAgICAgICAgICAgICAgLy8gc28gd2Ugc2hvdWxkIHVzZSBvcmlnaW5hbCBuYXRpdmUgZ2V0IHRvIHJldHJpZXZlIHRoZSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gb3JpZ2luYWxEZXNjR2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2Muc2V0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtSRU1PVkVfQVRUUklCVVRFXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGNoT25Qcm9wZXJ0aWVzKG9iaiwgcHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXRjaFByb3BlcnR5KG9iaiwgJ29uJyArIHByb3BlcnRpZXNbaV0sIHByb3RvdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgb25Qcm9wZXJ0aWVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wLnNsaWNlKDAsIDIpID09ICdvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Qcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvblByb3BlcnRpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwYXRjaFByb3BlcnR5KG9iaiwgb25Qcm9wZXJ0aWVzW2pdLCBwcm90b3R5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBvcmlnaW5hbEluc3RhbmNlS2V5ID0gem9uZVN5bWJvbCQxKCdvcmlnaW5hbEluc3RhbmNlJyk7XG4gICAgLy8gd3JhcCBzb21lIG5hdGl2ZSBBUEkgb24gYHdpbmRvd2BcbiAgICBmdW5jdGlvbiBwYXRjaENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgT3JpZ2luYWxDbGFzcyA9IF9nbG9iYWxbY2xhc3NOYW1lXTtcbiAgICAgICAgaWYgKCFPcmlnaW5hbENsYXNzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBrZWVwIG9yaWdpbmFsIGNsYXNzIGluIGdsb2JhbFxuICAgICAgICBfZ2xvYmFsW3pvbmVTeW1ib2wkMShjbGFzc05hbWUpXSA9IE9yaWdpbmFsQ2xhc3M7XG4gICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhID0gYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSwgYVszXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXJnIGxpc3QgdG9vIGxvbmcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGF0dGFjaCBvcmlnaW5hbCBkZWxlZ2F0ZSB0byBwYXRjaGVkIGZ1bmN0aW9uXG4gICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChfZ2xvYmFsW2NsYXNzTmFtZV0sIE9yaWdpbmFsQ2xhc3MpO1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgT3JpZ2luYWxDbGFzcyhmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICB2YXIgcHJvcDtcbiAgICAgICAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDQ3MjFcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT09ICdYTUxIdHRwUmVxdWVzdCcgJiYgcHJvcCA9PT0gJ3Jlc3BvbnNlQmxvYicpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXS5hcHBseSh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoX2dsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSB3cmFwV2l0aEN1cnJlbnRab25lKGZuLCBjbGFzc05hbWUgKyAnLicgKyBwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBjYWxsYmFjayBpbiB3cmFwcGVkIGZ1bmN0aW9uIHNvIHdlIGNhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2UgaXQgaW4gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nIHRvIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmF0aXZlIG9uZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0sIGZuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSBmbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0ocHJvcCkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAocHJvcCBpbiBPcmlnaW5hbENsYXNzKSB7XG4gICAgICAgICAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScgJiYgT3JpZ2luYWxDbGFzcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXVtwcm9wXSA9IE9yaWdpbmFsQ2xhc3NbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hNZXRob2QodGFyZ2V0LCBuYW1lLCBwYXRjaEZuKSB7XG4gICAgICAgIHZhciBwcm90byA9IHRhcmdldDtcbiAgICAgICAgd2hpbGUgKHByb3RvICYmICFwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcHJvdG8gPSBPYmplY3RHZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm90byAmJiB0YXJnZXRbbmFtZV0pIHtcbiAgICAgICAgICAgIC8vIHNvbWVob3cgd2UgZGlkIG5vdCBmaW5kIGl0LCBidXQgd2UgY2FuIHNlZSBpdC4gVGhpcyBoYXBwZW5zIG9uIElFIGZvciBXaW5kb3cgcHJvcGVydGllcy5cbiAgICAgICAgICAgIHByb3RvID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWxlZ2F0ZU5hbWUgPSB6b25lU3ltYm9sJDEobmFtZSk7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIGlmIChwcm90byAmJiAoIShkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0pIHx8ICFwcm90by5oYXNPd25Qcm9wZXJ0eShkZWxlZ2F0ZU5hbWUpKSkge1xuICAgICAgICAgICAgZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdID0gcHJvdG9bbmFtZV07XG4gICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHByb3RvW25hbWVdIGlzIHdyaXRhYmxlXG4gICAgICAgICAgICAvLyBzb21lIHByb3BlcnR5IGlzIHJlYWRvbmx5IGluIHNhZmFyaSwgc3VjaCBhcyBIdG1sQ2FudmFzRWxlbWVudC5wcm90b3R5cGUudG9CbG9iXG4gICAgICAgICAgICB2YXIgZGVzYyA9IHByb3RvICYmIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgbmFtZSk7XG4gICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVdyaXRhYmxlKGRlc2MpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGNoRGVsZWdhdGVfMSA9IHBhdGNoRm4oZGVsZWdhdGUsIGRlbGVnYXRlTmFtZSwgbmFtZSk7XG4gICAgICAgICAgICAgICAgcHJvdG9bbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXRjaERlbGVnYXRlXzEodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tuYW1lXSwgZGVsZWdhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZTtcbiAgICB9XG4gICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc3VwcG9ydCBjYW5jZWwgdGFzayBsYXRlciBpZiBuZWNlc3NhcnlcbiAgICBmdW5jdGlvbiBwYXRjaE1hY3JvVGFzayhvYmosIGZ1bmNOYW1lLCBtZXRhQ3JlYXRvcikge1xuICAgICAgICB2YXIgc2V0TmF0aXZlID0gbnVsbDtcbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgZGF0YS5hcmdzW2RhdGEuY2JJZHhdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TmF0aXZlID0gcGF0Y2hNZXRob2Qob2JqLCBmdW5jTmFtZSwgZnVuY3Rpb24gKGRlbGVnYXRlKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgdmFyIG1ldGEgPSBtZXRhQ3JlYXRvcihzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChtZXRhLmNiSWR4ID49IDAgJiYgdHlwZW9mIGFyZ3NbbWV0YS5jYklkeF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUobWV0YS5uYW1lLCBhcmdzW21ldGEuY2JJZHhdLCBtZXRhLCBzY2hlZHVsZVRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocGF0Y2hlZCwgb3JpZ2luYWwpIHtcbiAgICAgICAgcGF0Y2hlZFt6b25lU3ltYm9sJDEoJ09yaWdpbmFsRGVsZWdhdGUnKV0gPSBvcmlnaW5hbDtcbiAgICB9XG4gICAgdmFyIGlzRGV0ZWN0ZWRJRU9yRWRnZSA9IGZhbHNlO1xuICAgIHZhciBpZU9yRWRnZSA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGlzSUUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdWEgPSBpbnRlcm5hbFdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgICAgaWYgKHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0lFT3JFZGdlKCkge1xuICAgICAgICBpZiAoaXNEZXRlY3RlZElFT3JFZGdlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWVPckVkZ2U7XG4gICAgICAgIH1cbiAgICAgICAgaXNEZXRlY3RlZElFT3JFZGdlID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1YSA9IGludGVybmFsV2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgICAgICBpZiAodWEuaW5kZXhPZignTVNJRSAnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignRWRnZS8nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZU9yRWRnZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGllT3JFZGdlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBab25lLl9fbG9hZF9wYXRjaCgnWm9uZUF3YXJlUHJvbWlzZScsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICB2YXIgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICAgICAgdmFyIE9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgICAgICBmdW5jdGlvbiByZWFkYWJsZU9iamVjdFRvU3RyaW5nKG9iaikge1xuICAgICAgICAgICAgaWYgKG9iaiAmJiBvYmoudG9TdHJpbmcgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiAoY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycpICsgJzogJyArIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqID8gb2JqLnRvU3RyaW5nKCkgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX19zeW1ib2xfXyA9IGFwaS5zeW1ib2w7XG4gICAgICAgIHZhciBfdW5jYXVnaHRQcm9taXNlRXJyb3JzID0gW107XG4gICAgICAgIHZhciBpc0Rpc2FibGVXcmFwcGluZ1VuY2F1Z2h0UHJvbWlzZVJlamVjdGlvbiA9IGdsb2JhbFtfX3N5bWJvbF9fKCdESVNBQkxFX1dSQVBQSU5HX1VOQ0FVR0hUX1BST01JU0VfUkVKRUNUSU9OJyldID09PSB0cnVlO1xuICAgICAgICB2YXIgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICAgICAgdmFyIHN5bWJvbFRoZW4gPSBfX3N5bWJvbF9fKCd0aGVuJyk7XG4gICAgICAgIHZhciBjcmVhdGlvblRyYWNlID0gJ19fY3JlYXRpb25UcmFjZV9fJztcbiAgICAgICAgYXBpLm9uVW5oYW5kbGVkRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGFwaS5zaG93VW5jYXVnaHRFcnJvcigpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlamVjdGlvbiA9IGUgJiYgZS5yZWplY3Rpb247XG4gICAgICAgICAgICAgICAgaWYgKHJlamVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgUHJvbWlzZSByZWplY3Rpb246JywgcmVqZWN0aW9uIGluc3RhbmNlb2YgRXJyb3IgPyByZWplY3Rpb24ubWVzc2FnZSA6IHJlamVjdGlvbiwgJzsgWm9uZTonLCBlLnpvbmUubmFtZSwgJzsgVGFzazonLCBlLnRhc2sgJiYgZS50YXNrLnNvdXJjZSwgJzsgVmFsdWU6JywgcmVqZWN0aW9uLCByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5zdGFjayA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYXBpLm1pY3JvdGFza0RyYWluRG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB1bmNhdWdodFByb21pc2VFcnJvciA9IF91bmNhdWdodFByb21pc2VFcnJvcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci56b25lLnJ1bkd1YXJkZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVuY2F1Z2h0UHJvbWlzZUVycm9yLnRocm93T3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvci5yZWplY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24oZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aGlsZSAoX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBfbG9vcF8yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBVTkhBTkRMRURfUFJPTUlTRV9SRUpFQ1RJT05fSEFORExFUl9TWU1CT0wgPSBfX3N5bWJvbF9fKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24oZSkge1xuICAgICAgICAgICAgYXBpLm9uVW5oYW5kbGVkRXJyb3IoZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gWm9uZVtVTkhBTkRMRURfUFJPTUlTRV9SRUpFQ1RJT05fSEFORExFUl9TWU1CT0xdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzVGhlbmFibGUodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50aGVuO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZvcndhcmRSZXNvbHV0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZm9yd2FyZFJlamVjdGlvbihyZWplY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlLnJlamVjdChyZWplY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzeW1ib2xTdGF0ZSA9IF9fc3ltYm9sX18oJ3N0YXRlJyk7XG4gICAgICAgIHZhciBzeW1ib2xWYWx1ZSA9IF9fc3ltYm9sX18oJ3ZhbHVlJyk7XG4gICAgICAgIHZhciBzeW1ib2xGaW5hbGx5ID0gX19zeW1ib2xfXygnZmluYWxseScpO1xuICAgICAgICB2YXIgc3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVZhbHVlJyk7XG4gICAgICAgIHZhciBzeW1ib2xQYXJlbnRQcm9taXNlU3RhdGUgPSBfX3N5bWJvbF9fKCdwYXJlbnRQcm9taXNlU3RhdGUnKTtcbiAgICAgICAgdmFyIHNvdXJjZSA9ICdQcm9taXNlLnRoZW4nO1xuICAgICAgICB2YXIgVU5SRVNPTFZFRCA9IG51bGw7XG4gICAgICAgIHZhciBSRVNPTFZFRCA9IHRydWU7XG4gICAgICAgIHZhciBSRUpFQ1RFRCA9IGZhbHNlO1xuICAgICAgICB2YXIgUkVKRUNURURfTk9fQ0FUQ0ggPSAwO1xuICAgICAgICBmdW5jdGlvbiBtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90IHJldHVybiB2YWx1ZSBvciB5b3Ugd2lsbCBicmVhayB0aGUgUHJvbWlzZSBzcGVjLlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb25jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3YXNDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKHdyYXBwZWRGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXNDYWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3YXNDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVkRnVuY3Rpb24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIFRZUEVfRVJST1IgPSAnUHJvbWlzZSByZXNvbHZlZCB3aXRoIGl0c2VsZic7XG4gICAgICAgIHZhciBDVVJSRU5UX1RBU0tfVFJBQ0VfU1lNQk9MID0gX19zeW1ib2xfXygnY3VycmVudFRhc2tUcmFjZScpO1xuICAgICAgICAvLyBQcm9taXNlIFJlc29sdXRpb25cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgc3RhdGUsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgb25jZVdyYXBwZXIgPSBvbmNlKCk7XG4gICAgICAgICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFRZUEVfRVJST1IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb21pc2Vbc3ltYm9sU3RhdGVdID09PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIG9ubHkgZ2V0IHZhbHVlLnRoZW4gb25jZSBiYXNlZCBvbiBwcm9taXNlIHNwZWMuXG4gICAgICAgICAgICAgICAgdmFyIHRoZW4gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbiA9IHZhbHVlICYmIHZhbHVlLnRoZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBvbmNlV3JhcHBlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHZhbHVlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSAmJlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShzeW1ib2xTdGF0ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoc3ltYm9sVmFsdWUpICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW3N5bWJvbFN0YXRlXSAhPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHZhbHVlW3N5bWJvbFN0YXRlXSwgdmFsdWVbc3ltYm9sVmFsdWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBzdGF0ZSkpLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgZmFsc2UpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25jZVdyYXBwZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9taXNlW3N5bWJvbEZpbmFsbHldID09PSBzeW1ib2xGaW5hbGx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcHJvbWlzZSBpcyBnZW5lcmF0ZWQgYnkgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBSRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdGF0ZSBpcyByZXNvbHZlZCwgc2hvdWxkIGlnbm9yZSB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdXNlIHBhcmVudCBwcm9taXNlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBwcm9taXNlW3N5bWJvbFBhcmVudFByb21pc2VTdGF0ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSBwcm9taXNlW3N5bWJvbFBhcmVudFByb21pc2VWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjb3JkIHRhc2sgaW5mb3JtYXRpb24gaW4gdmFsdWUgd2hlbiBlcnJvciBvY2N1cnMsIHNvIHdlIGNhblxuICAgICAgICAgICAgICAgICAgICAvLyBkbyBzb21lIGFkZGl0aW9uYWwgd29yayBzdWNoIGFzIHJlbmRlciBsb25nU3RhY2tUcmFjZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IFJFSkVDVEVEICYmIHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGxvbmdTdGFja1RyYWNlWm9uZSBpcyBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhY2UgPSBab25lLmN1cnJlbnRUYXNrICYmIFpvbmUuY3VycmVudFRhc2suZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpvbmUuY3VycmVudFRhc2suZGF0YVtjcmVhdGlvblRyYWNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkga2VlcCB0aGUgbG9uZyBzdGFjayB0cmFjZSBpbnRvIGVycm9yIHdoZW4gaW4gbG9uZ1N0YWNrVHJhY2Vab25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkodmFsdWUsIENVUlJFTlRfVEFTS19UUkFDRV9TWU1CT0wsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB0cmFjZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHF1ZXVlW2krK10sIHF1ZXVlW2krK10sIHF1ZXVlW2krK10sIHF1ZXVlW2krK10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT0gMCAmJiBzdGF0ZSA9PSBSRUpFQ1RFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBSRUpFQ1RFRF9OT19DQVRDSDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bmNhdWdodFByb21pc2VFcnJvciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIZXJlIHdlIHRocm93cyBhIG5ldyBFcnJvciB0byBwcmludCBtb3JlIHJlYWRhYmxlIGVycm9yIGxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBpZiB0aGUgdmFsdWUgaXMgbm90IGFuIGVycm9yLCB6b25lLmpzIGJ1aWxkcyBhbiBgRXJyb3JgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0IGhlcmUgdG8gYXR0YWNoIHRoZSBzdGFjayBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2F1Z2h0IChpbiBwcm9taXNlKTogJyArIHJlYWRhYmxlT2JqZWN0VG9TdHJpbmcodmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlICYmIHZhbHVlLnN0YWNrID8gJ1xcbicgKyB2YWx1ZS5zdGFjayA6ICcnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEaXNhYmxlV3JhcHBpbmdVbmNhdWdodFByb21pc2VSZWplY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBkaXNhYmxlIHdyYXBwaW5nIHVuY2F1Z2h0IHByb21pc2UgcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHRoZSB2YWx1ZSBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnRocm93T3JpZ2luYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IucmVqZWN0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci50YXNrID0gWm9uZS5jdXJyZW50VGFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIF91bmNhdWdodFByb21pc2VFcnJvcnMucHVzaCh1bmNhdWdodFByb21pc2VFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkuc2NoZWR1bGVNaWNyb1Rhc2soKTsgLy8gdG8gbWFrZSBzdXJlIHRoYXQgaXQgaXMgcnVubmluZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzb2x2aW5nIGFuIGFscmVhZHkgcmVzb2x2ZWQgcHJvbWlzZSBpcyBhIG5vb3AuXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgUkVKRUNUSU9OX0hBTkRMRURfSEFORExFUiA9IF9fc3ltYm9sX18oJ3JlamVjdGlvbkhhbmRsZWRIYW5kbGVyJyk7XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyUmVqZWN0ZWROb0NhdGNoKHByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gUkVKRUNURURfTk9fQ0FUQ0gpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCBubyBjYXRjaCBzdGF0dXNcbiAgICAgICAgICAgICAgICAvLyBhbmQgcXVldWUubGVuZ3RoID4gMCwgbWVhbnMgdGhlcmUgaXMgYSBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICAgICAgLy8gaGVyZSB0byBoYW5kbGUgdGhlIHJlamVjdGVkIHByb21pc2UsIHdlIHNob3VsZCB0cmlnZ2VyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93cy5yZWplY3Rpb25oYW5kbGVkIGV2ZW50SGFuZGxlciBvciBub2RlanMgcmVqZWN0aW9uSGFuZGxlZFxuICAgICAgICAgICAgICAgIC8vIGV2ZW50SGFuZGxlclxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gWm9uZVtSRUpFQ1RJT05fSEFORExFRF9IQU5ETEVSXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB7IHJlamVjdGlvbjogcHJvbWlzZVtzeW1ib2xWYWx1ZV0sIHByb21pc2U6IHByb21pc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSA9PT0gX3VuY2F1Z2h0UHJvbWlzZUVycm9yc1tpXS5wcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVJlc29sdmVPclJlamVjdChwcm9taXNlLCB6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKTtcbiAgICAgICAgICAgIHZhciBwcm9taXNlU3RhdGUgPSBwcm9taXNlW3N5bWJvbFN0YXRlXTtcbiAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHByb21pc2VTdGF0ZSA/XG4gICAgICAgICAgICAgICAgKHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJykgPyBvbkZ1bGZpbGxlZCA6IGZvcndhcmRSZXNvbHV0aW9uIDpcbiAgICAgICAgICAgICAgICAodHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpID8gb25SZWplY3RlZCA6XG4gICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWplY3Rpb247XG4gICAgICAgICAgICB6b25lLnNjaGVkdWxlTWljcm9UYXNrKHNvdXJjZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRQcm9taXNlVmFsdWUgPSBwcm9taXNlW3N5bWJvbFZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRmluYWxseVByb21pc2UgPSAhIWNoYWluUHJvbWlzZSAmJiBzeW1ib2xGaW5hbGx5ID09PSBjaGFpblByb21pc2Vbc3ltYm9sRmluYWxseV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0ZpbmFsbHlQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJvbWlzZSBpcyBnZW5lcmF0ZWQgZnJvbSBmaW5hbGx5IGNhbGwsIGtlZXAgcGFyZW50IHByb21pc2UncyBzdGF0ZSBhbmQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdID0gcGFyZW50UHJvbWlzZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5Qcm9taXNlW3N5bWJvbFBhcmVudFByb21pc2VTdGF0ZV0gPSBwcm9taXNlU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBwYXNzIHZhbHVlIHRvIGZpbmFsbHkgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gem9uZS5ydW4oZGVsZWdhdGUsIHVuZGVmaW5lZCwgaXNGaW5hbGx5UHJvbWlzZSAmJiBkZWxlZ2F0ZSAhPT0gZm9yd2FyZFJlamVjdGlvbiAmJiBkZWxlZ2F0ZSAhPT0gZm9yd2FyZFJlc29sdXRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgW10gOlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BhcmVudFByb21pc2VWYWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShjaGFpblByb21pc2UsIHRydWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGVycm9yIG9jY3Vycywgc2hvdWxkIGFsd2F5cyByZXR1cm4gdGhpcyBlcnJvclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShjaGFpblByb21pc2UsIGZhbHNlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgY2hhaW5Qcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgWk9ORV9BV0FSRV9QUk9NSVNFX1RPX1NUUklORyA9ICdmdW5jdGlvbiBab25lQXdhcmVQcm9taXNlKCkgeyBbbmF0aXZlIGNvZGVdIH0nO1xuICAgICAgICB2YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgdmFyIEFnZ3JlZ2F0ZUVycm9yID0gZ2xvYmFsLkFnZ3JlZ2F0ZUVycm9yO1xuICAgICAgICB2YXIgWm9uZUF3YXJlUHJvbWlzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIFpvbmVBd2FyZVByb21pc2UoZXhlY3V0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKCEocHJvbWlzZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBiZSBhbiBpbnN0YW5jZW9mIFByb21pc2UuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gVU5SRVNPTFZFRDtcbiAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IFtdOyAvLyBxdWV1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb25jZVdyYXBwZXIgPSBvbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWN1dG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRvcihvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgUkVTT0xWRUQpKSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIFJFSkVDVEVEKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBaT05FX0FXQVJFX1BST01JU0VfVE9fU1RSSU5HO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZShuZXcgdGhpcyhudWxsKSwgUkVTT0xWRUQsIHZhbHVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZShuZXcgdGhpcyhudWxsKSwgUkVKRUNURUQsIGVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLmFueSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlcyB8fCB0eXBlb2YgdmFsdWVzW1N5bWJvbC5pdGVyYXRvcl0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihbXSwgJ0FsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzEgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHZhbHVlc18xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZSh2KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvbmVBd2FyZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlc1tpXS50aGVuKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQWdncmVnYXRlRXJyb3IoZXJyb3JzLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgICAgICAgICAgdmFyIHJlamVjdDtcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKGZ1bmN0aW9uIChyZXMsIHJlaikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25SZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvblJlamVjdChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbHVlc18yID0gdmFsdWVzOyBfaSA8IHZhbHVlc18yLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNfMltfaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZS5hbGxXaXRoQ2FsbGJhY2sodmFsdWVzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbFNldHRsZWQgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIFAgPSB0aGlzICYmIHRoaXMucHJvdG90eXBlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSA/IHRoaXMgOiBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBQLmFsbFdpdGhDYWxsYmFjayh2YWx1ZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbkNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICh7IHN0YXR1czogJ2Z1bGZpbGxlZCcsIHZhbHVlOiB2YWx1ZSB9KTsgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogZnVuY3Rpb24gKGVycikgeyByZXR1cm4gKHsgc3RhdHVzOiAncmVqZWN0ZWQnLCByZWFzb246IGVyciB9KTsgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UuYWxsV2l0aENhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHVlcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB2YXIgcmVqZWN0O1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBTdGFydCBhdCAyIHRvIHByZXZlbnQgcHJlbWF0dXJlbHkgcmVzb2x2aW5nIGlmIC50aGVuIGlzIGNhbGxlZCBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgICAgICB2YXIgdW5yZXNvbHZlZENvdW50ID0gMjtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIHJlc29sdmVkVmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wXzMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzXzEucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1clZhbHVlSW5kZXggPSB2YWx1ZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tjdXJWYWx1ZUluZGV4XSA9IGNhbGxiYWNrID8gY2FsbGJhY2sudGhlbkNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tjdXJWYWx1ZUluZGV4XSA9IGNhbGxiYWNrLmVycm9yQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKHRoZW5FcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGVuRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bnJlc29sdmVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVJbmRleCsrO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNfMSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWx1ZXNfMyA9IHZhbHVlczsgX2kgPCB2YWx1ZXNfMy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzXzNbX2ldO1xuICAgICAgICAgICAgICAgICAgICBfbG9vcF8zKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTWFrZSB0aGUgdW5yZXNvbHZlZENvdW50IHplcm8tYmFzZWQgYWdhaW4uXG4gICAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50IC09IDI7XG4gICAgICAgICAgICAgICAgaWYgKHVucmVzb2x2ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdQcm9taXNlJztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgLy8gV2UgbXVzdCByZWFkIGBTeW1ib2wuc3BlY2llc2Agc2FmZWx5IGJlY2F1c2UgYHRoaXNgIG1heSBiZSBhbnl0aGluZy4gRm9yIGluc3RhbmNlLCBgdGhpc2BcbiAgICAgICAgICAgICAgICAvLyBtYXkgYmUgYW4gb2JqZWN0IHdpdGhvdXQgYSBwcm90b3R5cGUgKGNyZWF0ZWQgdGhyb3VnaCBgT2JqZWN0LmNyZWF0ZShudWxsKWApOyB0aHVzXG4gICAgICAgICAgICAgICAgLy8gYHRoaXMuY29uc3RydWN0b3JgIHdpbGwgYmUgdW5kZWZpbmVkLiBPbmUgb2YgdGhlIHVzZSBjYXNlcyBpcyBTeXN0ZW1KUyBjcmVhdGluZ1xuICAgICAgICAgICAgICAgIC8vIHByb3RvdHlwZS1sZXNzIG9iamVjdHMgKG1vZHVsZXMpIHZpYSBgT2JqZWN0LmNyZWF0ZShudWxsKWAuIFRoZSBTeXN0ZW1KUyBjcmVhdGVzIGFuIGVtcHR5XG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0IGFuZCBjb3BpZXMgcHJvbWlzZSBwcm9wZXJ0aWVzIGludG8gdGhhdCBvYmplY3QgKHdpdGhpbiB0aGUgYGdldE9yQ3JlYXRlTG9hZGBcbiAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbikuIFRoZSB6b25lLmpzIHRoZW4gY2hlY2tzIGlmIHRoZSByZXNvbHZlZCB2YWx1ZSBoYXMgdGhlIGB0aGVuYCBtZXRob2QgYW5kIGludm9rZXNcbiAgICAgICAgICAgICAgICAvLyBpdCB3aXRoIHRoZSBgdmFsdWVgIGNvbnRleHQuIE90aGVyd2lzZSwgdGhpcyB3aWxsIHRocm93IGFuIGVycm9yOiBgVHlwZUVycm9yOiBDYW5ub3QgcmVhZFxuICAgICAgICAgICAgICAgIC8vIHByb3BlcnRpZXMgb2YgdW5kZWZpbmVkIChyZWFkaW5nICdTeW1ib2woU3ltYm9sLnNwZWNpZXMpJylgLlxuICAgICAgICAgICAgICAgIHZhciBDID0gKF9hID0gdGhpcy5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW1N5bWJvbC5zcGVjaWVzXTtcbiAgICAgICAgICAgICAgICBpZiAoIUMgfHwgdHlwZW9mIEMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgQyA9IHRoaXMuY29uc3RydWN0b3IgfHwgWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNoYWluUHJvbWlzZSA9IG5ldyBDKG5vb3ApO1xuICAgICAgICAgICAgICAgIHZhciB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc3ltYm9sVmFsdWVdLnB1c2goem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdCh0aGlzLCB6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAvLyBTZWUgY29tbWVudCBvbiB0aGUgY2FsbCB0byBgdGhlbmAgYWJvdXQgd2h5IHRoZWUgYFN5bWJvbC5zcGVjaWVzYCBpcyBzYWZlbHkgYWNjZXNzZWQuXG4gICAgICAgICAgICAgICAgdmFyIEMgPSAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbU3ltYm9sLnNwZWNpZXNdO1xuICAgICAgICAgICAgICAgIGlmICghQyB8fCB0eXBlb2YgQyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBDID0gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNoYWluUHJvbWlzZSA9IG5ldyBDKG5vb3ApO1xuICAgICAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xGaW5hbGx5XSA9IHN5bWJvbEZpbmFsbHk7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbc3ltYm9sU3RhdGVdID09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tzeW1ib2xWYWx1ZV0ucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRmluYWxseSwgb25GaW5hbGx5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GaW5hbGx5LCBvbkZpbmFsbHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhaW5Qcm9taXNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICB9KCkpO1xuICAgICAgICAvLyBQcm90ZWN0IGFnYWluc3QgYWdncmVzc2l2ZSBvcHRpbWl6ZXJzIGRyb3BwaW5nIHNlZW1pbmdseSB1bnVzZWQgcHJvcGVydGllcy5cbiAgICAgICAgLy8gRS5nLiBDbG9zdXJlIENvbXBpbGVyIGluIGFkdmFuY2VkIG1vZGUuXG4gICAgICAgIFpvbmVBd2FyZVByb21pc2VbJ3Jlc29sdmUnXSA9IFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZVsncmVqZWN0J10gPSBab25lQXdhcmVQcm9taXNlLnJlamVjdDtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZVsncmFjZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yYWNlO1xuICAgICAgICBab25lQXdhcmVQcm9taXNlWydhbGwnXSA9IFpvbmVBd2FyZVByb21pc2UuYWxsO1xuICAgICAgICB2YXIgTmF0aXZlUHJvbWlzZSA9IGdsb2JhbFtzeW1ib2xQcm9taXNlXSA9IGdsb2JhbFsnUHJvbWlzZSddO1xuICAgICAgICBnbG9iYWxbJ1Byb21pc2UnXSA9IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgIHZhciBzeW1ib2xUaGVuUGF0Y2hlZCA9IF9fc3ltYm9sX18oJ3RoZW5QYXRjaGVkJyk7XG4gICAgICAgIGZ1bmN0aW9uIHBhdGNoVGhlbihDdG9yKSB7XG4gICAgICAgICAgICB2YXIgcHJvdG8gPSBDdG9yLnByb3RvdHlwZTtcbiAgICAgICAgICAgIHZhciBwcm9wID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCAndGhlbicpO1xuICAgICAgICAgICAgaWYgKHByb3AgJiYgKHByb3Aud3JpdGFibGUgPT09IGZhbHNlIHx8ICFwcm9wLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBDdG9yLnByb3RvdHlwZS50aGVuIHByb3BlcnR5RGVzY3JpcHRvciBpcyB3cml0YWJsZSBvciBub3RcbiAgICAgICAgICAgICAgICAvLyBpbiBtZXRlb3IgZW52LCB3cml0YWJsZSBpcyBmYWxzZSwgd2Ugc2hvdWxkIGlnbm9yZSBzdWNoIGNhc2VcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxUaGVuID0gcHJvdG8udGhlbjtcbiAgICAgICAgICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAgICAgIHByb3RvW3N5bWJvbFRoZW5dID0gb3JpZ2luYWxUaGVuO1xuICAgICAgICAgICAgQ3Rvci5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvblJlc29sdmUsIG9uUmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZCA9IG5ldyBab25lQXdhcmVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxUaGVuLmNhbGwoX3RoaXMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWQudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYXBpLnBhdGNoVGhlbiA9IHBhdGNoVGhlbjtcbiAgICAgICAgZnVuY3Rpb24gem9uZWlmeShmbikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdFByb21pc2UgPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0UHJvbWlzZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjdG9yID0gcmVzdWx0UHJvbWlzZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICBpZiAoIWN0b3Jbc3ltYm9sVGhlblBhdGNoZWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoVGhlbihjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgICAgICBwYXRjaFRoZW4oTmF0aXZlUHJvbWlzZSk7XG4gICAgICAgICAgICBwYXRjaE1ldGhvZChnbG9iYWwsICdmZXRjaCcsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gem9uZWlmeShkZWxlZ2F0ZSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoaXMgaXMgbm90IHBhcnQgb2YgcHVibGljIEFQSSwgYnV0IGl0IGlzIHVzZWZ1bCBmb3IgdGVzdHMsIHNvIHdlIGV4cG9zZSBpdC5cbiAgICAgICAgUHJvbWlzZVtab25lLl9fc3ltYm9sX18oJ3VuY2F1Z2h0UHJvbWlzZUVycm9ycycpXSA9IF91bmNhdWdodFByb21pc2VFcnJvcnM7XG4gICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIC8vIG92ZXJyaWRlIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyB0byBtYWtlIHpvbmUuanMgcGF0Y2hlZCBmdW5jdGlvblxuICAgIC8vIGxvb2sgbGlrZSBuYXRpdmUgZnVuY3Rpb25cbiAgICBab25lLl9fbG9hZF9wYXRjaCgndG9TdHJpbmcnLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgIC8vIHBhdGNoIEZ1bmMucHJvdG90eXBlLnRvU3RyaW5nIHRvIGxldCB0aGVtIGxvb2sgbGlrZSBuYXRpdmVcbiAgICAgICAgdmFyIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbiAgICAgICAgdmFyIE9SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTCA9IHpvbmVTeW1ib2wkMSgnT3JpZ2luYWxEZWxlZ2F0ZScpO1xuICAgICAgICB2YXIgUFJPTUlTRV9TWU1CT0wgPSB6b25lU3ltYm9sJDEoJ1Byb21pc2UnKTtcbiAgICAgICAgdmFyIEVSUk9SX1NZTUJPTCA9IHpvbmVTeW1ib2wkMSgnRXJyb3InKTtcbiAgICAgICAgdmFyIG5ld0Z1bmN0aW9uVG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbERlbGVnYXRlID0gdGhpc1tPUklHSU5BTF9ERUxFR0FURV9TWU1CT0xdO1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbERlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxEZWxlZ2F0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKG9yaWdpbmFsRGVsZWdhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvcmlnaW5hbERlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcyA9PT0gUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmF0aXZlUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFX1NZTUJPTF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYXRpdmVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwobmF0aXZlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMgPT09IEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYXRpdmVFcnJvciA9IGdsb2JhbFtFUlJPUl9TWU1CT0xdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmF0aXZlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChuYXRpdmVFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIG5ld0Z1bmN0aW9uVG9TdHJpbmdbT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MXSA9IG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZztcbiAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbmV3RnVuY3Rpb25Ub1N0cmluZztcbiAgICAgICAgLy8gcGF0Y2ggT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyB0byBsZXQgdGhlbSBsb29rIGxpa2UgbmF0aXZlXG4gICAgICAgIHZhciBvcmlnaW5hbE9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICAgICAgdmFyIFBST01JU0VfT0JKRUNUX1RPX1NUUklORyA9ICdbb2JqZWN0IFByb21pc2VdJztcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQUk9NSVNFX09CSkVDVF9UT19TVFJJTkc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RUb1N0cmluZy5jYWxsKHRoaXMpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gTm90ZTogV2UgcGFzcyB0aGUgYG9wdGlvbnNgIG9iamVjdCBhcyB0aGUgZXZlbnQgaGFuZGxlciB0b28uIFRoaXMgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGVcbiAgICAgICAgICAgIC8vIHNpZ25hdHVyZSBvZiBgYWRkRXZlbnRMaXN0ZW5lcmAgb3IgYHJlbW92ZUV2ZW50TGlzdGVuZXJgIGJ1dCBlbmFibGVzIHVzIHRvIHJlbW92ZSB0aGUgaGFuZGxlclxuICAgICAgICAgICAgLy8gd2l0aG91dCBhbiBhY3R1YWwgaGFuZGxlci5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhbiBpZGVudGlmaWVyIHRvIHRlbGwgWm9uZVRhc2sgZG8gbm90IGNyZWF0ZSBhIG5ldyBpbnZva2UgY2xvc3VyZVxuICAgIHZhciBPUFRJTUlaRURfWk9ORV9FVkVOVF9UQVNLX0RBVEEgPSB7XG4gICAgICAgIHVzZUc6IHRydWVcbiAgICB9O1xuICAgIHZhciB6b25lU3ltYm9sRXZlbnROYW1lcyA9IHt9O1xuICAgIHZhciBnbG9iYWxTb3VyY2VzID0ge307XG4gICAgdmFyIEVWRU5UX05BTUVfU1lNQk9MX1JFR1ggPSBuZXcgUmVnRXhwKCdeJyArIFpPTkVfU1lNQk9MX1BSRUZJWCArICcoXFxcXHcrKSh0cnVlfGZhbHNlKSQnKTtcbiAgICB2YXIgSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTCA9IHpvbmVTeW1ib2wkMSgncHJvcGFnYXRpb25TdG9wcGVkJyk7XG4gICAgZnVuY3Rpb24gcHJlcGFyZUV2ZW50TmFtZXMoZXZlbnROYW1lLCBldmVudE5hbWVUb1N0cmluZykge1xuICAgICAgICB2YXIgZmFsc2VFdmVudE5hbWUgPSAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKSArIEZBTFNFX1NUUjtcbiAgICAgICAgdmFyIHRydWVFdmVudE5hbWUgPSAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKSArIFRSVUVfU1RSO1xuICAgICAgICB2YXIgc3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgZmFsc2VFdmVudE5hbWU7XG4gICAgICAgIHZhciBzeW1ib2xDYXB0dXJlID0gWk9ORV9TWU1CT0xfUFJFRklYICsgdHJ1ZUV2ZW50TmFtZTtcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHt9O1xuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW0ZBTFNFX1NUUl0gPSBzeW1ib2w7XG4gICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bVFJVRV9TVFJdID0gc3ltYm9sQ2FwdHVyZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGksIGFwaXMsIHBhdGNoT3B0aW9ucykge1xuICAgICAgICB2YXIgQUREX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuYWRkKSB8fCBBRERfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgICAgICB2YXIgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucm0pIHx8IFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFI7XG4gICAgICAgIHZhciBMSVNURU5FUlNfRVZFTlRfTElTVEVORVIgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5saXN0ZW5lcnMpIHx8ICdldmVudExpc3RlbmVycyc7XG4gICAgICAgIHZhciBSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJtQWxsKSB8fCAncmVtb3ZlQWxsTGlzdGVuZXJzJztcbiAgICAgICAgdmFyIHpvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyID0gem9uZVN5bWJvbCQxKEFERF9FVkVOVF9MSVNURU5FUik7XG4gICAgICAgIHZhciBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFID0gJy4nICsgQUREX0VWRU5UX0xJU1RFTkVSICsgJzonO1xuICAgICAgICB2YXIgUFJFUEVORF9FVkVOVF9MSVNURU5FUiA9ICdwcmVwZW5kTGlzdGVuZXInO1xuICAgICAgICB2YXIgUFJFUEVORF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgPSAnLicgKyBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSICsgJzonO1xuICAgICAgICB2YXIgaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXNrLCB0YXJnZXQsIGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLCBjaGVjayBpc1JlbW92ZWQgd2hpY2ggaXMgc2V0XG4gICAgICAgICAgICAvLyBieSByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgICAgICBpZiAodGFzay5pc1JlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWxlZ2F0ZSA9PT0gJ29iamVjdCcgJiYgZGVsZWdhdGUuaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGJpbmQgdmVyc2lvbiBvZiBoYW5kbGVFdmVudCB3aGVuIGludm9rZVxuICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIGRlbGVnYXRlLmhhbmRsZUV2ZW50KGV2ZW50KTsgfTtcbiAgICAgICAgICAgICAgICB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGludm9rZSBzdGF0aWMgdGFzay5pbnZva2VcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJ5L2NhdGNoIGVycm9yIGhlcmUsIG90aGVyd2lzZSwgdGhlIGVycm9yIGluIG9uZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgLy8gd2lsbCBicmVhayB0aGUgZXhlY3V0aW9ucyBvZiB0aGUgb3RoZXIgZXZlbnQgbGlzdGVuZXJzLiBBbHNvIGVycm9yIHdpbGxcbiAgICAgICAgICAgIC8vIG5vdCByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gYG9uY2VgIG9wdGlvbnMgaXMgdHJ1ZS5cbiAgICAgICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFzay5pbnZva2UodGFzaywgdGFyZ2V0LCBbZXZlbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gdGFzay5vcHRpb25zO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMub25jZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIG9wdGlvbnMub25jZSBpcyB0cnVlLCBhZnRlciBpbnZva2Ugb25jZSByZW1vdmUgbGlzdGVuZXIgaGVyZVxuICAgICAgICAgICAgICAgIC8vIG9ubHkgYnJvd3NlciBuZWVkIHRvIGRvIHRoaXMsIG5vZGVqcyBldmVudEVtaXR0ZXIgd2lsbCBjYWwgcmVtb3ZlTGlzdGVuZXJcbiAgICAgICAgICAgICAgICAvLyBpbnNpZGUgRXZlbnRFbWl0dGVyLm9uY2VcbiAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGVfMSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W1JFTU9WRV9FVkVOVF9MSVNURU5FUl0uY2FsbCh0YXJnZXQsIGV2ZW50LnR5cGUsIGRlbGVnYXRlXzEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBnbG9iYWxDYWxsYmFjayhjb250ZXh0LCBldmVudCwgaXNDYXB0dXJlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgICAgICAgICAgIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgX2dsb2JhbC5ldmVudDtcbiAgICAgICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBldmVudC50YXJnZXQgaXMgbmVlZGVkIGZvciBTYW1zdW5nIFRWIGFuZCBTb3VyY2VCdWZmZXJcbiAgICAgICAgICAgIC8vIHx8IGdsb2JhbCBpcyBuZWVkZWQgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gY29udGV4dCB8fCBldmVudC50YXJnZXQgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFt6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudC50eXBlXVtpc0NhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl1dO1xuICAgICAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGludm9rZSBhbGwgdGFza3Mgd2hpY2ggYXR0YWNoZWQgdG8gY3VycmVudCB0YXJnZXQgd2l0aCBnaXZlbiBldmVudC50eXBlIGFuZCBjYXB0dXJlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAvLyBmb3IgcGVyZm9ybWFuY2UgY29uY2VybiwgaWYgdGFzay5sZW5ndGggPT09IDEsIGp1c3QgaW52b2tlXG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gaW52b2tlVGFzayh0YXNrc1swXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGVyciAmJiBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvODM2XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcHkgdGhlIHRhc2tzIGFycmF5IGJlZm9yZSBpbnZva2UsIHRvIGF2b2lkXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjYWxsYmFjayB3aWxsIHJlbW92ZSBpdHNlbGYgb3Igb3RoZXIgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvcHlUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29weVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnRbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBpbnZva2VUYXNrKGNvcHlUYXNrc1tpXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgJiYgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGVyZSBpcyBvbmx5IG9uZSBlcnJvciwgd2UgZG9uJ3QgbmVlZCB0byBzY2hlZHVsZSBtaWNyb1Rhc2tcbiAgICAgICAgICAgICAgICAvLyB0byB0aHJvdyB0aGUgZXJyb3IuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3JzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9sb29wXzQgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IGVycm9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5uYXRpdmVTY2hlZHVsZU1pY3JvVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF80KGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGdsb2JhbCBzaGFyZWQgem9uZUF3YXJlQ2FsbGJhY2sgdG8gaGFuZGxlIGFsbCBldmVudCBjYWxsYmFjayB3aXRoIGNhcHR1cmUgPSBmYWxzZVxuICAgICAgICB2YXIgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxDYWxsYmFjayh0aGlzLCBldmVudCwgZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBnbG9iYWwgc2hhcmVkIHpvbmVBd2FyZUNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgZXZlbnQgY2FsbGJhY2sgd2l0aCBjYXB0dXJlID0gdHJ1ZVxuICAgICAgICB2YXIgZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsQ2FsbGJhY2sodGhpcywgZXZlbnQsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhvYmosIHBhdGNoT3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdXNlR2xvYmFsQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudXNlRyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdXNlR2xvYmFsQ2FsbGJhY2sgPSBwYXRjaE9wdGlvbnMudXNlRztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWxpZGF0ZUhhbmRsZXIgPSBwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnZoO1xuICAgICAgICAgICAgdmFyIGNoZWNrRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmNoa0R1cCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tEdXBsaWNhdGUgPSBwYXRjaE9wdGlvbnMuY2hrRHVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJldHVyblRhcmdldCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRhcmdldCA9IHBhdGNoT3B0aW9ucy5ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm90byA9IG9iajtcbiAgICAgICAgICAgIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkoQUREX0VWRU5UX0xJU1RFTkVSKSkge1xuICAgICAgICAgICAgICAgIHByb3RvID0gT2JqZWN0R2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwcm90byAmJiBvYmpbQUREX0VWRU5UX0xJU1RFTkVSXSkge1xuICAgICAgICAgICAgICAgIC8vIHNvbWVob3cgd2UgZGlkIG5vdCBmaW5kIGl0LCBidXQgd2UgY2FuIHNlZSBpdC4gVGhpcyBoYXBwZW5zIG9uIElFIGZvciBXaW5kb3cgcHJvcGVydGllcy5cbiAgICAgICAgICAgICAgICBwcm90byA9IG9iajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcHJvdG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvdG9bem9uZVN5bWJvbEFkZEV2ZW50TGlzdGVuZXJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZVRvU3RyaW5nID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5ldmVudE5hbWVUb1N0cmluZztcbiAgICAgICAgICAgIC8vIGEgc2hhcmVkIGdsb2JhbCB0YXNrRGF0YSB0byBwYXNzIGRhdGEgZm9yIHNjaGVkdWxlRXZlbnRUYXNrXG4gICAgICAgICAgICAvLyBzbyB3ZSBkbyBub3QgbmVlZCB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IGp1c3QgZm9yIHBhc3Mgc29tZSBkYXRhXG4gICAgICAgICAgICB2YXIgdGFza0RhdGEgPSB7fTtcbiAgICAgICAgICAgIHZhciBuYXRpdmVBZGRFdmVudExpc3RlbmVyID0gcHJvdG9bem9uZVN5bWJvbEFkZEV2ZW50TGlzdGVuZXJdID0gcHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIHZhciBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyID0gcHJvdG9bem9uZVN5bWJvbCQxKFJFTU9WRV9FVkVOVF9MSVNURU5FUildID1cbiAgICAgICAgICAgICAgICBwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgdmFyIG5hdGl2ZUxpc3RlbmVycyA9IHByb3RvW3pvbmVTeW1ib2wkMShMSVNURU5FUlNfRVZFTlRfTElTVEVORVIpXSA9XG4gICAgICAgICAgICAgICAgcHJvdG9bTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIHZhciBuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMgPSBwcm90b1t6b25lU3ltYm9sJDEoUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVIpXSA9XG4gICAgICAgICAgICAgICAgcHJvdG9bUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgdmFyIG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyO1xuICAgICAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucHJlcGVuZCkge1xuICAgICAgICAgICAgICAgIG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyID0gcHJvdG9bem9uZVN5bWJvbCQxKHBhdGNoT3B0aW9ucy5wcmVwZW5kKV0gPVxuICAgICAgICAgICAgICAgICAgICBwcm90b1twYXRjaE9wdGlvbnMucHJlcGVuZF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoaXMgdXRpbCBmdW5jdGlvbiB3aWxsIGJ1aWxkIGFuIG9wdGlvbiBvYmplY3Qgd2l0aCBwYXNzaXZlIG9wdGlvblxuICAgICAgICAgICAgICogdG8gaGFuZGxlIGFsbCBwb3NzaWJsZSBpbnB1dCBmcm9tIHRoZSB1c2VyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBidWlsZEV2ZW50TGlzdGVuZXJPcHRpb25zKG9wdGlvbnMsIHBhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBhc3NpdmVTdXBwb3J0ZWQgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lc24ndCBzdXBwb3J0IHBhc3NpdmUgYnV0IHVzZXIgd2FudCB0byBwYXNzIGFuIG9iamVjdCBhcyBvcHRpb25zLlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgbm90IHdvcmsgb24gc29tZSBvbGQgYnJvd3Nlciwgc28gd2UganVzdCBwYXNzIGEgYm9vbGVhblxuICAgICAgICAgICAgICAgICAgICAvLyBhcyB1c2VDYXB0dXJlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFvcHRpb25zLmNhcHR1cmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcGFzc2l2ZVN1cHBvcnRlZCB8fCAhcGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY2FwdHVyZTogb3B0aW9ucywgcGFzc2l2ZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcGFzc2l2ZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMucGFzc2l2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3VzdG9tU2NoZWR1bGVHbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGFscmVhZHkgYSB0YXNrIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSxcbiAgICAgICAgICAgICAgICAvLyBqdXN0IHJldHVybiwgYmVjYXVzZSB3ZSB1c2UgdGhlIHNoYXJlZCBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBoZXJlLlxuICAgICAgICAgICAgICAgIGlmICh0YXNrRGF0YS5pc0V4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrRGF0YS50YXJnZXQsIHRhc2tEYXRhLmV2ZW50TmFtZSwgdGFza0RhdGEuY2FwdHVyZSA/IGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA6IGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY3VzdG9tQ2FuY2VsR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0YXNrIGlzIG5vdCBtYXJrZWQgYXMgaXNSZW1vdmVkLCB0aGlzIGNhbGwgaXMgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAvLyBmcm9tIFpvbmUucHJvdG90eXBlLmNhbmNlbFRhc2ssIHdlIHNob3VsZCByZW1vdmUgdGhlIHRhc2tcbiAgICAgICAgICAgICAgICAvLyBmcm9tIHRhc2tzTGlzdCBvZiB0YXJnZXQgZmlyc3RcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2suaXNSZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbdGFzay5ldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sRXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1t0YXNrLmNhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nVGFza3MgPSBzeW1ib2xFdmVudE5hbWUgJiYgdGFzay50YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2sgPSBleGlzdGluZ1Rhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBpc1JlbW92ZWQgdG8gZGF0YSBmb3IgZmFzdGVyIGludm9rZVRhc2sgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIGFuZCByZW1vdmUgdGhlIHRhc2sgY2FjaGUgZnJvbSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suYWxsUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgYWxsIHRhc2tzIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSBoYXZlIGdvbmUsXG4gICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCByZWFsbHkgcmVtb3ZlIHRoZSBnbG9iYWwgZXZlbnQgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgLy8gaWYgbm90LCByZXR1cm5cbiAgICAgICAgICAgICAgICBpZiAoIXRhc2suYWxsUmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGFzay50YXJnZXQsIHRhc2suZXZlbnROYW1lLCB0YXNrLmNhcHR1cmUgPyBnbG9iYWxab25lQXdhcmVDYXB0dXJlQ2FsbGJhY2sgOiBnbG9iYWxab25lQXdhcmVDYWxsYmFjaywgdGFzay5vcHRpb25zKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY3VzdG9tU2NoZWR1bGVOb25HbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVBZGRFdmVudExpc3RlbmVyLmNhbGwodGFza0RhdGEudGFyZ2V0LCB0YXNrRGF0YS5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY3VzdG9tU2NoZWR1bGVQcmVwZW5kID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrRGF0YS50YXJnZXQsIHRhc2tEYXRhLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjdXN0b21DYW5jZWxOb25HbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGFzay50YXJnZXQsIHRhc2suZXZlbnROYW1lLCB0YXNrLmludm9rZSwgdGFzay5vcHRpb25zKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY3VzdG9tU2NoZWR1bGUgPSB1c2VHbG9iYWxDYWxsYmFjayA/IGN1c3RvbVNjaGVkdWxlR2xvYmFsIDogY3VzdG9tU2NoZWR1bGVOb25HbG9iYWw7XG4gICAgICAgICAgICB2YXIgY3VzdG9tQ2FuY2VsID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBjdXN0b21DYW5jZWxHbG9iYWwgOiBjdXN0b21DYW5jZWxOb25HbG9iYWw7XG4gICAgICAgICAgICB2YXIgY29tcGFyZVRhc2tDYWxsYmFja1ZzRGVsZWdhdGUgPSBmdW5jdGlvbiAodGFzaywgZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZU9mRGVsZWdhdGUgPSB0eXBlb2YgZGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlT2ZEZWxlZ2F0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0YXNrLmNhbGxiYWNrID09PSBkZWxlZ2F0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHR5cGVPZkRlbGVnYXRlID09PSAnb2JqZWN0JyAmJiB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPT09IGRlbGVnYXRlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY29tcGFyZSA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmRpZmYpID8gcGF0Y2hPcHRpb25zLmRpZmYgOiBjb21wYXJlVGFza0NhbGxiYWNrVnNEZWxlZ2F0ZTtcbiAgICAgICAgICAgIHZhciB1bnBhdGNoZWRFdmVudHMgPSBab25lW3pvbmVTeW1ib2wkMSgnVU5QQVRDSEVEX0VWRU5UUycpXTtcbiAgICAgICAgICAgIHZhciBwYXNzaXZlRXZlbnRzID0gX2dsb2JhbFt6b25lU3ltYm9sJDEoJ1BBU1NJVkVfRVZFTlRTJyldO1xuICAgICAgICAgICAgdmFyIG1ha2VBZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYXRpdmVMaXN0ZW5lciwgYWRkU291cmNlLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbiwgcmV0dXJuVGFyZ2V0LCBwcmVwZW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldHVyblRhcmdldCA9PT0gdm9pZCAwKSB7IHJldHVyblRhcmdldCA9IGZhbHNlOyB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXBlbmQgPT09IHZvaWQgMCkgeyBwcmVwZW5kID0gZmFsc2U7IH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb2RlICYmIGV2ZW50TmFtZSA9PT0gJ3VuY2F1Z2h0RXhjZXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgcGF0Y2ggdW5jYXVnaHRFeGNlcHRpb24gb2Ygbm9kZWpzIHRvIHByZXZlbnQgZW5kbGVzcyBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBjcmVhdGUgdGhlIGJpbmQgZGVsZWdhdGUgZnVuY3Rpb24gZm9yIGhhbmRsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgaGVyZSB0byBpbXByb3ZlIGFkZEV2ZW50TGlzdGVuZXIgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBjcmVhdGUgdGhlIGJpbmQgZGVsZWdhdGUgd2hlbiBpbnZva2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzSGFuZGxlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWxlZ2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZS5oYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlSGFuZGxlciAmJiAhdmFsaWRhdGVIYW5kbGVyKG5hdGl2ZUxpc3RlbmVyLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3NpdmUgPSBwYXNzaXZlU3VwcG9ydGVkICYmICEhcGFzc2l2ZUV2ZW50cyAmJiBwYXNzaXZlRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyhhcmd1bWVudHNbMl0sIHBhc3NpdmUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodW5wYXRjaGVkRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB1bnBhdGNoZWQgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bnBhdGNoZWRFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSB1bnBhdGNoZWRFdmVudHNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5jYWxsKHRhcmdldCwgZXZlbnROYW1lLCBkZWxlZ2F0ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9ICFvcHRpb25zID8gZmFsc2UgOiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nID8gdHJ1ZSA6IG9wdGlvbnMuY2FwdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9uY2UgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyA/IG9wdGlvbnMub25jZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBhcmVFdmVudE5hbWVzKGV2ZW50TmFtZSwgZXZlbnROYW1lVG9TdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZSA9IHN5bWJvbEV2ZW50TmFtZXNbY2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhpc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgaGF2ZSB0YXNrIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRXhpc3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGV4aXN0aW5nVGFza3NbaV0sIGRlbGVnYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2FtZSBjYWxsYmFjaywgc2FtZSBjYXB0dXJlLCBzYW1lIGV2ZW50IG5hbWUsIGp1c3QgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3RydWN0b3JOYW1lID0gdGFyZ2V0LmNvbnN0cnVjdG9yWyduYW1lJ107XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRTb3VyY2UgPSBnbG9iYWxTb3VyY2VzW2NvbnN0cnVjdG9yTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IHRhcmdldFNvdXJjZVtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBjb25zdHJ1Y3Rvck5hbWUgKyBhZGRTb3VyY2UgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBjcmVhdGUgYSBuZXcgb2JqZWN0IGFzIHRhc2suZGF0YSB0byBwYXNzIHRob3NlIHRoaW5nc1xuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IHVzZSB0aGUgZ2xvYmFsIHNoYXJlZCBvbmVcbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBhZGRFdmVudExpc3RlbmVyIHdpdGggb25jZSBvcHRpb25zLCB3ZSBkb24ndCBwYXNzIGl0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuYXRpdmUgYWRkRXZlbnRMaXN0ZW5lciwgaW5zdGVhZCB3ZSBrZWVwIHRoZSBvbmNlIHNldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBoYW5kbGUgb3Vyc2VsdmVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEub3B0aW9ucy5vbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS5jYXB0dXJlID0gY2FwdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS5pc0V4aXN0aW5nID0gaXNFeGlzdGluZztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB1c2VHbG9iYWxDYWxsYmFjayA/IE9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCB0YXNrRGF0YSBpbnRvIGRhdGEgdG8gYWxsb3cgb25TY2hlZHVsZUV2ZW50VGFzayB0byBhY2Nlc3MgdGhlIHRhc2sgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGFza0RhdGEgPSB0YXNrRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHpvbmUuc2NoZWR1bGVFdmVudFRhc2soc291cmNlLCBkZWxlZ2F0ZSwgZGF0YSwgY3VzdG9tU2NoZWR1bGVGbiwgY3VzdG9tQ2FuY2VsRm4pO1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgY2xlYXIgdGFza0RhdGEudGFyZ2V0IHRvIGF2b2lkIG1lbW9yeSBsZWFrXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzc3VlLCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDQ0MlxuICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS50YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGNsZWFyIHVwIHRhc2tEYXRhIGJlY2F1c2UgaXQgaXMgYSBnbG9iYWwgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRhc2tEYXRhID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIHNhdmUgdGhvc2UgaW5mb3JtYXRpb24gdG8gdGFzayBpbiBjYXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIG1heSBjYWxsIHRhc2suem9uZS5jYW5jZWxUYXNrKCkgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoIXBhc3NpdmVTdXBwb3J0ZWQgJiYgdHlwZW9mIHRhc2sub3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm90IHN1cHBvcnQgcGFzc2l2ZSwgYW5kIHdlIHBhc3MgYW4gb3B0aW9uIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYWRkRXZlbnRMaXN0ZW5lciwgd2Ugc2hvdWxkIHNhdmUgdGhlIG9wdGlvbnMgdG8gdGFza1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YXNrLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jYXB0dXJlID0gY2FwdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0hhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIG9yaWdpbmFsIGRlbGVnYXRlIGZvciBjb21wYXJlIHRvIGNoZWNrIGR1cGxpY2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5vcmlnaW5hbERlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmVwZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVyblRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXSA9IG1ha2VBZGRMaXN0ZW5lcihuYXRpdmVBZGRFdmVudExpc3RlbmVyLCBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsLCByZXR1cm5UYXJnZXQpO1xuICAgICAgICAgICAgaWYgKG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgcHJvdG9bUFJFUEVORF9FVkVOVF9MSVNURU5FUl0gPSBtYWtlQWRkTGlzdGVuZXIobmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIsIFBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZVByZXBlbmQsIGN1c3RvbUNhbmNlbCwgcmV0dXJuVGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9ICFvcHRpb25zID8gZmFsc2UgOiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nID8gdHJ1ZSA6IG9wdGlvbnMuY2FwdHVyZTtcbiAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVIYW5kbGVyICYmXG4gICAgICAgICAgICAgICAgICAgICF2YWxpZGF0ZUhhbmRsZXIobmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciwgZGVsZWdhdGUsIHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbEV2ZW50TmFtZSA9IHN5bWJvbEV2ZW50TmFtZXNbY2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nVGFza3MgPSBzeW1ib2xFdmVudE5hbWUgJiYgdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrID0gZXhpc3RpbmdUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGV4aXN0aW5nVGFzaywgZGVsZWdhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGlzUmVtb3ZlZCB0byBkYXRhIGZvciBmYXN0ZXIgaW52b2tlVGFzayBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFzay5pc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIGFuZCByZW1vdmUgdGhlIHRhc2sgY2FjaGUgZnJvbSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrLmFsbFJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIHRoZSB0YXJnZXQsIHdlIGhhdmUgYW4gZXZlbnQgbGlzdGVuZXIgd2hpY2ggaXMgYWRkZWQgYnkgb25fcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VjaCBhcyB0YXJnZXQub25jbGljayA9IGZ1bmN0aW9uKCkge30sIHNvIHdlIG5lZWQgdG8gY2xlYXIgdGhpcyBpbnRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9wZXJ0eSB0b28gaWYgYWxsIGRlbGVnYXRlcyBhbGwgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvblByb3BlcnR5U3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgJ09OX1BST1BFUlRZJyArIGV2ZW50TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtvblByb3BlcnR5U3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrLnpvbmUuY2FuY2VsVGFzayhleGlzdGluZ1Rhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlzc3VlIDkzMCwgZGlkbid0IGZpbmQgdGhlIGV2ZW50IG5hbWUgb3IgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAvLyBmcm9tIHpvbmUga2VwdCBleGlzdGluZ1Rhc2tzLCB0aGUgY2FsbGJhY2sgbWF5YmVcbiAgICAgICAgICAgICAgICAvLyBhZGRlZCBvdXRzaWRlIG9mIHpvbmUsIHdlIG5lZWQgdG8gY2FsbCBuYXRpdmUgcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgICAgIC8vIHRvIHRyeSB0byByZW1vdmUgaXQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciB0YXNrcyA9IGZpbmRFdmVudFRhc2tzKHRhcmdldCwgZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGRlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBFVkVOVF9OQU1FX1NZTUJPTF9SRUdYLmV4ZWMocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZ0TmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gbm9kZWpzIEV2ZW50RW1pdHRlciwgcmVtb3ZlTGlzdGVuZXIgZXZlbnQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZWQgZm9yIG1vbml0b3JpbmcgdGhlIHJlbW92ZUxpc3RlbmVyIGNhbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyBqdXN0IGtlZXAgcmVtb3ZlTGlzdGVuZXIgZXZlbnRMaXN0ZW5lciB1bnRpbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIG90aGVyIGV2ZW50TGlzdGVuZXJzIGFyZSByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0TmFtZSAmJiBldnROYW1lICE9PSAncmVtb3ZlTGlzdGVuZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCBldnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgcmVtb3ZlTGlzdGVuZXIgbGlzdGVuZXIgZmluYWxseVxuICAgICAgICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsICdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW0ZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sQ2FwdHVyZUV2ZW50TmFtZSA9IHN5bWJvbEV2ZW50TmFtZXNbVFJVRV9TVFJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZVRhc2tzID0gdGFyZ2V0W3N5bWJvbENhcHR1cmVFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZVRhc2tzID0gdGFza3Muc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gcmVtb3ZlVGFza3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVUYXNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVUYXNrcyA9IGNhcHR1cmVUYXNrcy5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3ZlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSByZW1vdmVUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gdGFzay5vcmlnaW5hbERlbGVnYXRlID8gdGFzay5vcmlnaW5hbERlbGVnYXRlIDogdGFzay5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgZXZlbnROYW1lLCBkZWxlZ2F0ZSwgdGFzay5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJldHVyblRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gZm9yIG5hdGl2ZSB0b1N0cmluZyBwYXRjaFxuICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgaWYgKG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmF0aXZlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZUxpc3RlbmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFwaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdHNbaV0gPSBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhhcGlzW2ldLCBwYXRjaE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaW5kRXZlbnRUYXNrcyh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAoIWV2ZW50TmFtZSkge1xuICAgICAgICAgICAgdmFyIGZvdW5kVGFza3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gRVZFTlRfTkFNRV9TWU1CT0xfUkVHWC5leGVjKHByb3ApO1xuICAgICAgICAgICAgICAgIHZhciBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgaWYgKGV2dE5hbWUgJiYgKCFldmVudE5hbWUgfHwgZXZ0TmFtZSA9PT0gZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFza3MgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVGFza3MucHVzaCh0YXNrc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZm91bmRUYXNrcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgaWYgKCFzeW1ib2xFdmVudE5hbWUpIHtcbiAgICAgICAgICAgIHByZXBhcmVFdmVudE5hbWVzKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYXB0dXJlRmFsc2VUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVbRkFMU0VfU1RSXV07XG4gICAgICAgIHZhciBjYXB0dXJlVHJ1ZVRhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZVtUUlVFX1NUUl1dO1xuICAgICAgICBpZiAoIWNhcHR1cmVGYWxzZVRhc2tzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FwdHVyZVRydWVUYXNrcyA/IGNhcHR1cmVUcnVlVGFza3Muc2xpY2UoKSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNhcHR1cmVUcnVlVGFza3MgPyBjYXB0dXJlRmFsc2VUYXNrcy5jb25jYXQoY2FwdHVyZVRydWVUYXNrcykgOlxuICAgICAgICAgICAgICAgIGNhcHR1cmVGYWxzZVRhc2tzLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hFdmVudFByb3RvdHlwZShnbG9iYWwsIGFwaSkge1xuICAgICAgICB2YXIgRXZlbnQgPSBnbG9iYWxbJ0V2ZW50J107XG4gICAgICAgIGlmIChFdmVudCAmJiBFdmVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIGFwaS5wYXRjaE1ldGhvZChFdmVudC5wcm90b3R5cGUsICdzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24nLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgc2VsZltJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjYWxsIHRoZSBuYXRpdmUgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXG4gICAgICAgICAgICAgICAgLy8gaW4gY2FzZSBpbiBzb21lIGh5YnJpZCBhcHBsaWNhdGlvbiwgc29tZSBwYXJ0IG9mXG4gICAgICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gd2lsbCBiZSBjb250cm9sbGVkIGJ5IHpvbmUsIHNvbWUgYXJlIG5vdFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlICYmIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfTsgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gcGF0Y2hDYWxsYmFja3MoYXBpLCB0YXJnZXQsIHRhcmdldE5hbWUsIG1ldGhvZCwgY2FsbGJhY2tzKSB7XG4gICAgICAgIHZhciBzeW1ib2wgPSBab25lLl9fc3ltYm9sX18obWV0aG9kKTtcbiAgICAgICAgaWYgKHRhcmdldFtzeW1ib2xdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5hdGl2ZURlbGVnYXRlID0gdGFyZ2V0W3N5bWJvbF0gPSB0YXJnZXRbbWV0aG9kXTtcbiAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBmdW5jdGlvbiAobmFtZSwgb3B0cywgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IFwiXCIuY29uY2F0KHRhcmdldE5hbWUsIFwiLlwiKS5jb25jYXQobWV0aG9kLCBcIjo6XCIpICsgY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm90b3R5cGUgPSBvcHRzLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogdGhlIGBwYXRjaENhbGxiYWNrc2AgaXMgdXNlZCBmb3IgcGF0Y2hpbmcgdGhlIGBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnRgIGFuZFxuICAgICAgICAgICAgICAgICAgICAvLyBgY3VzdG9tRWxlbWVudHMuZGVmaW5lYC4gV2UgZXhwbGljaXRseSB3cmFwIHRoZSBwYXRjaGluZyBjb2RlIGludG8gdHJ5LWNhdGNoIHNpbmNlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrcyBtYXkgYmUgYWxyZWFkeSBwYXRjaGVkIGJ5IG90aGVyIHdlYiBjb21wb25lbnRzIGZyYW1ld29ya3MgKGUuZy4gTFdDKSwgYW5kIHRoZXlcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSB0aG9zZSBwcm9wZXJ0aWVzIG5vbi13cml0YWJsZS4gVGhpcyBtZWFucyB0aGF0IHBhdGNoaW5nIGNhbGxiYWNrIHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gYGNhbm5vdCBhc3NpZ24gdG8gcmVhZC1vbmx5IHByb3BlcnR5YC4gU2VlIHRoaXMgY29kZSBhcyBhbiBleGFtcGxlOlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2FsZXNmb3JjZS9sd2MvYmxvYi9tYXN0ZXIvcGFja2FnZXMvQGx3Yy9lbmdpbmUtY29yZS9zcmMvZnJhbWV3b3JrL2Jhc2UtYnJpZGdlLWVsZW1lbnQudHMjTDE4MC1MMTg2XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gc3RvcCB0aGUgYXBwbGljYXRpb24gcmVuZGVyaW5nIGlmIHdlIGNvdWxkbid0IHBhdGNoIHNvbWVcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2ssIGUuZy4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvdG90eXBlLmhhc093blByb3BlcnR5KGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShkZXNjcmlwdG9yLnZhbHVlLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkob3B0cy5wcm90b3R5cGUsIGNhbGxiYWNrLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvdG90eXBlW2NhbGxiYWNrXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b3R5cGVbY2FsbGJhY2tdID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUocHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm90b3R5cGVbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG90eXBlW2NhbGxiYWNrXSA9IGFwaS53cmFwV2l0aEN1cnJlbnRab25lKHByb3RvdHlwZVtjYWxsYmFja10sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiB3ZSBsZWF2ZSB0aGUgY2F0Y2ggYmxvY2sgZW1wdHkgc2luY2UgdGhlcmUncyBubyB3YXkgdG8gaGFuZGxlIHRoZSBlcnJvciByZWxhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBub24td3JpdGFibGUgcHJvcGVydHkuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVEZWxlZ2F0ZS5jYWxsKHRhcmdldCwgbmFtZSwgb3B0cywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIGFwaS5hdHRhY2hPcmlnaW5Ub1BhdGNoZWQodGFyZ2V0W21ldGhvZF0sIG5hdGl2ZURlbGVnYXRlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gZmlsdGVyUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcykge1xuICAgICAgICBpZiAoIWlnbm9yZVByb3BlcnRpZXMgfHwgaWdub3JlUHJvcGVydGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpcCA9IGlnbm9yZVByb3BlcnRpZXMuZmlsdGVyKGZ1bmN0aW9uIChpcCkgeyByZXR1cm4gaXAudGFyZ2V0ID09PSB0YXJnZXQ7IH0pO1xuICAgICAgICBpZiAoIXRpcCB8fCB0aXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gb25Qcm9wZXJ0aWVzO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzID0gdGlwWzBdLmlnbm9yZVByb3BlcnRpZXM7XG4gICAgICAgIHJldHVybiBvblByb3BlcnRpZXMuZmlsdGVyKGZ1bmN0aW9uIChvcCkgeyByZXR1cm4gdGFyZ2V0SWdub3JlUHJvcGVydGllcy5pbmRleE9mKG9wKSA9PT0gLTE7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGFyZ2V0IGlzIGF2YWlsYWJsZSwgc29tZXRpbWVzIHRhcmdldCB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgICAvLyBiZWNhdXNlIGRpZmZlcmVudCBicm93c2VyIG9yIHNvbWUgM3JkIHBhcnR5IHBsdWdpbi5cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlsdGVyZWRQcm9wZXJ0aWVzID0gZmlsdGVyUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKHRhcmdldCwgZmlsdGVyZWRQcm9wZXJ0aWVzLCBwcm90b3R5cGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGV2ZW50IG5hbWUgcHJvcGVydGllcyB3aGljaCB0aGUgZXZlbnQgbmFtZSBzdGFydHNXaXRoIGBvbmBcbiAgICAgKiBmcm9tIHRoZSB0YXJnZXQgb2JqZWN0IGl0c2VsZiwgaW5oZXJpdGVkIHByb3BlcnRpZXMgYXJlIG5vdCBjb25zaWRlcmVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE9uRXZlbnROYW1lcyh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG5hbWUuc3RhcnRzV2l0aCgnb24nKSAmJiBuYW1lLmxlbmd0aCA+IDI7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBuYW1lLnN1YnN0cmluZygyKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoKGFwaSwgX2dsb2JhbCkge1xuICAgICAgICBpZiAoaXNOb2RlICYmICFpc01peCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldKSB7XG4gICAgICAgICAgICAvLyBldmVudHMgYXJlIGFscmVhZHkgYmVlbiBwYXRjaGVkIGJ5IGxlZ2FjeSBwYXRjaC5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaWdub3JlUHJvcGVydGllcyA9IF9nbG9iYWxbJ19fWm9uZV9pZ25vcmVfb25fcHJvcGVydGllcyddO1xuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCB3ZSBjYW4gcGF0Y2ggdGhlIGRlc2NyaXB0b3I6ICBDaHJvbWUgJiBGaXJlZm94XG4gICAgICAgIHZhciBwYXRjaFRhcmdldHMgPSBbXTtcbiAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgdmFyIGludGVybmFsV2luZG93XzEgPSB3aW5kb3c7XG4gICAgICAgICAgICBwYXRjaFRhcmdldHMgPSBwYXRjaFRhcmdldHMuY29uY2F0KFtcbiAgICAgICAgICAgICAgICAnRG9jdW1lbnQnLCAnU1ZHRWxlbWVudCcsICdFbGVtZW50JywgJ0hUTUxFbGVtZW50JywgJ0hUTUxCb2R5RWxlbWVudCcsICdIVE1MTWVkaWFFbGVtZW50JyxcbiAgICAgICAgICAgICAgICAnSFRNTEZyYW1lU2V0RWxlbWVudCcsICdIVE1MRnJhbWVFbGVtZW50JywgJ0hUTUxJRnJhbWVFbGVtZW50JywgJ0hUTUxNYXJxdWVlRWxlbWVudCcsICdXb3JrZXInXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVFcnJvclByb3BlcnRpZXMgPSBpc0lFKCkgPyBbeyB0YXJnZXQ6IGludGVybmFsV2luZG93XzEsIGlnbm9yZVByb3BlcnRpZXM6IFsnZXJyb3InXSB9XSA6IFtdO1xuICAgICAgICAgICAgLy8gaW4gSUUvRWRnZSwgb25Qcm9wIG5vdCBleGlzdCBpbiB3aW5kb3cgb2JqZWN0LCBidXQgaW4gV2luZG93UHJvdG90eXBlXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIHBhc3MgV2luZG93UHJvdG90eXBlIHRvIGNoZWNrIG9uUHJvcCBleGlzdCBvciBub3RcbiAgICAgICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKGludGVybmFsV2luZG93XzEsIGdldE9uRXZlbnROYW1lcyhpbnRlcm5hbFdpbmRvd18xKSwgaWdub3JlUHJvcGVydGllcyA/IGlnbm9yZVByb3BlcnRpZXMuY29uY2F0KGlnbm9yZUVycm9yUHJvcGVydGllcykgOiBpZ25vcmVQcm9wZXJ0aWVzLCBPYmplY3RHZXRQcm90b3R5cGVPZihpbnRlcm5hbFdpbmRvd18xKSk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2hUYXJnZXRzID0gcGF0Y2hUYXJnZXRzLmNvbmNhdChbXG4gICAgICAgICAgICAnWE1MSHR0cFJlcXVlc3QnLCAnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCcsICdJREJJbmRleCcsICdJREJSZXF1ZXN0JywgJ0lEQk9wZW5EQlJlcXVlc3QnLFxuICAgICAgICAgICAgJ0lEQkRhdGFiYXNlJywgJ0lEQlRyYW5zYWN0aW9uJywgJ0lEQkN1cnNvcicsICdXZWJTb2NrZXQnXG4gICAgICAgIF0pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGNoVGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IF9nbG9iYWxbcGF0Y2hUYXJnZXRzW2ldXTtcbiAgICAgICAgICAgIHRhcmdldCAmJiB0YXJnZXQucHJvdG90eXBlICYmXG4gICAgICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXModGFyZ2V0LnByb3RvdHlwZSwgZ2V0T25FdmVudE5hbWVzKHRhcmdldC5wcm90b3R5cGUpLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBab25lLl9fbG9hZF9wYXRjaCgndXRpbCcsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICAvLyBDb2xsZWN0IG5hdGl2ZSBldmVudCBuYW1lcyBieSBsb29raW5nIGF0IHByb3BlcnRpZXNcbiAgICAgICAgLy8gb24gdGhlIGdsb2JhbCBuYW1lc3BhY2UsIGUuZy4gJ29uY2xpY2snLlxuICAgICAgICB2YXIgZXZlbnROYW1lcyA9IGdldE9uRXZlbnROYW1lcyhnbG9iYWwpO1xuICAgICAgICBhcGkucGF0Y2hPblByb3BlcnRpZXMgPSBwYXRjaE9uUHJvcGVydGllcztcbiAgICAgICAgYXBpLnBhdGNoTWV0aG9kID0gcGF0Y2hNZXRob2Q7XG4gICAgICAgIGFwaS5iaW5kQXJndW1lbnRzID0gYmluZEFyZ3VtZW50cztcbiAgICAgICAgYXBpLnBhdGNoTWFjcm9UYXNrID0gcGF0Y2hNYWNyb1Rhc2s7XG4gICAgICAgIC8vIEluIGVhcmxpZXIgdmVyc2lvbiBvZiB6b25lLmpzICg8MC45LjApLCB3ZSB1c2UgZW52IG5hbWUgYF9fem9uZV9zeW1ib2xfX0JMQUNLX0xJU1RFRF9FVkVOVFNgIHRvXG4gICAgICAgIC8vIGRlZmluZSB3aGljaCBldmVudHMgd2lsbCBub3QgYmUgcGF0Y2hlZCBieSBgWm9uZS5qc2AuXG4gICAgICAgIC8vIEluIG5ld2VyIHZlcnNpb24gKD49MC45LjApLCB3ZSBjaGFuZ2UgdGhlIGVudiBuYW1lIHRvIGBfX3pvbmVfc3ltYm9sX19VTlBBVENIRURfRVZFTlRTYCB0byBrZWVwXG4gICAgICAgIC8vIHRoZSBuYW1lIGNvbnNpc3RlbnQgd2l0aCBhbmd1bGFyIHJlcG8uXG4gICAgICAgIC8vIFRoZSAgYF9fem9uZV9zeW1ib2xfX0JMQUNLX0xJU1RFRF9FVkVOVFNgIGlzIGRlcHJlY2F0ZWQsIGJ1dCBpdCBpcyBzdGlsbCBiZSBzdXBwb3J0ZWQgZm9yXG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgICAgICB2YXIgU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFMgPSBab25lLl9fc3ltYm9sX18oJ0JMQUNLX0xJU1RFRF9FVkVOVFMnKTtcbiAgICAgICAgdmFyIFNZTUJPTF9VTlBBVENIRURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdVTlBBVENIRURfRVZFTlRTJyk7XG4gICAgICAgIGlmIChnbG9iYWxbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdKSB7XG4gICAgICAgICAgICBnbG9iYWxbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdID0gZ2xvYmFsW1NZTUJPTF9VTlBBVENIRURfRVZFTlRTXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSkge1xuICAgICAgICAgICAgWm9uZVtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10gPSBab25lW1NZTUJPTF9VTlBBVENIRURfRVZFTlRTXSA9XG4gICAgICAgICAgICAgICAgZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXTtcbiAgICAgICAgfVxuICAgICAgICBhcGkucGF0Y2hFdmVudFByb3RvdHlwZSA9IHBhdGNoRXZlbnRQcm90b3R5cGU7XG4gICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0ID0gcGF0Y2hFdmVudFRhcmdldDtcbiAgICAgICAgYXBpLmlzSUVPckVkZ2UgPSBpc0lFT3JFZGdlO1xuICAgICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3REZWZpbmVQcm9wZXJ0eTtcbiAgICAgICAgYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICAgICAgYXBpLk9iamVjdENyZWF0ZSA9IE9iamVjdENyZWF0ZTtcbiAgICAgICAgYXBpLkFycmF5U2xpY2UgPSBBcnJheVNsaWNlO1xuICAgICAgICBhcGkucGF0Y2hDbGFzcyA9IHBhdGNoQ2xhc3M7XG4gICAgICAgIGFwaS53cmFwV2l0aEN1cnJlbnRab25lID0gd3JhcFdpdGhDdXJyZW50Wm9uZTtcbiAgICAgICAgYXBpLmZpbHRlclByb3BlcnRpZXMgPSBmaWx0ZXJQcm9wZXJ0aWVzO1xuICAgICAgICBhcGkuYXR0YWNoT3JpZ2luVG9QYXRjaGVkID0gYXR0YWNoT3JpZ2luVG9QYXRjaGVkO1xuICAgICAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgICAgIGFwaS5wYXRjaENhbGxiYWNrcyA9IHBhdGNoQ2FsbGJhY2tzO1xuICAgICAgICBhcGkuZ2V0R2xvYmFsT2JqZWN0cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICBnbG9iYWxTb3VyY2VzOiBnbG9iYWxTb3VyY2VzLFxuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXM6IHpvbmVTeW1ib2xFdmVudE5hbWVzLFxuICAgICAgICAgICAgZXZlbnROYW1lczogZXZlbnROYW1lcyxcbiAgICAgICAgICAgIGlzQnJvd3NlcjogaXNCcm93c2VyLFxuICAgICAgICAgICAgaXNNaXg6IGlzTWl4LFxuICAgICAgICAgICAgaXNOb2RlOiBpc05vZGUsXG4gICAgICAgICAgICBUUlVFX1NUUjogVFJVRV9TVFIsXG4gICAgICAgICAgICBGQUxTRV9TVFI6IEZBTFNFX1NUUixcbiAgICAgICAgICAgIFpPTkVfU1lNQk9MX1BSRUZJWDogWk9ORV9TWU1CT0xfUFJFRklYLFxuICAgICAgICAgICAgQUREX0VWRU5UX0xJU1RFTkVSX1NUUjogQUREX0VWRU5UX0xJU1RFTkVSX1NUUixcbiAgICAgICAgICAgIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFI6IFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFJcbiAgICAgICAgfSk7IH07XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLypcbiAgICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgQ2hyb21lIGFuZCBDaHJvbWUgbW9iaWxlLCB0byBlbmFibGVcbiAgICAgKiB0aGluZ3MgbGlrZSByZWRlZmluaW5nIGBjcmVhdGVkQ2FsbGJhY2tgIG9uIGFuIGVsZW1lbnQuXG4gICAgICovXG4gICAgdmFyIHpvbmVTeW1ib2w7XG4gICAgdmFyIF9kZWZpbmVQcm9wZXJ0eTtcbiAgICB2YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICB2YXIgX2NyZWF0ZTtcbiAgICB2YXIgdW5jb25maWd1cmFibGVzS2V5O1xuICAgIGZ1bmN0aW9uIHByb3BlcnR5UGF0Y2goKSB7XG4gICAgICAgIHpvbmVTeW1ib2wgPSBab25lLl9fc3ltYm9sX187XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSA9IE9iamVjdFt6b25lU3ltYm9sKCdkZWZpbmVQcm9wZXJ0eScpXSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgICAgICAgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdFt6b25lU3ltYm9sKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InKV0gPVxuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICAgICAgX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG4gICAgICAgIHVuY29uZmlndXJhYmxlc0tleSA9IHpvbmVTeW1ib2woJ3VuY29uZmlndXJhYmxlcycpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICBpZiAoaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGFzc2lnbiB0byByZWFkIG9ubHkgcHJvcGVydHkgXFwnJyArIHByb3AgKyAnXFwnIG9mICcgKyBvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyA9IGRlc2MuY29uZmlndXJhYmxlO1xuICAgICAgICAgICAgaWYgKHByb3AgIT09ICdwcm90b3R5cGUnKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3RyeURlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYywgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnKTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBwcm9wcykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBwcm9wc1twcm9wXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BzKTsgX2kgPCBfYi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ltID0gX2JbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm9wcywgc3ltKTtcbiAgICAgICAgICAgICAgICAvLyBTaW5jZSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgcmV0dXJucyAqYWxsKiBzeW1ib2xzLFxuICAgICAgICAgICAgICAgIC8vIGluY2x1ZGluZyBub24tZW51bWVyYWJsZSBvbmVzLCByZXRyaWV2ZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGFuZCBjaGVja1xuICAgICAgICAgICAgICAgIC8vIGVudW1lcmFiaWxpdHkgdGhlcmUuIFByb2NlZWQgd2l0aCB0aGUgcmV3cml0ZSBvbmx5IHdoZW4gYSBwcm9wZXJ0eSBpc1xuICAgICAgICAgICAgICAgIC8vIGVudW1lcmFibGUgdG8gbWFrZSB0aGUgbG9naWMgY29uc2lzdGVudCB3aXRoIHRoZSB3YXkgcmVndWxhclxuICAgICAgICAgICAgICAgIC8vIHByb3BlcnRpZXMgYXJlIHJldHJpZXZlZCAodmlhIGBPYmplY3Qua2V5c2AsIHdoaWNoIHJlc3BlY3RzXG4gICAgICAgICAgICAgICAgLy8gYGVudW1lcmFibGU6IGZhbHNlYCBmbGFnKS4gTW9yZSBpbmZvcm1hdGlvbjpcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0VudW1lcmFiaWxpdHlfYW5kX293bmVyc2hpcF9vZl9wcm9wZXJ0aWVzI3JldHJpZXZhbFxuICAgICAgICAgICAgICAgIGlmIChkZXNjID09PSBudWxsIHx8IGRlc2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlc2MuZW51bWVyYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBzeW0sIHByb3BzW3N5bV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAocHJvdG8sIHByb3BlcnRpZXNPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc09iamVjdCA9PT0gJ29iamVjdCcgJiYgIU9iamVjdC5pc0Zyb3plbihwcm9wZXJ0aWVzT2JqZWN0KSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXNPYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc09iamVjdFtwcm9wXSA9IHJld3JpdGVEZXNjcmlwdG9yKHByb3RvLCBwcm9wLCBwcm9wZXJ0aWVzT2JqZWN0W3Byb3BdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfY3JlYXRlKHByb3RvLCBwcm9wZXJ0aWVzT2JqZWN0KTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgICAgICAgICAgIHZhciBkZXNjID0gX2dldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuICAgICAgICAgICAgaWYgKGRlc2MgJiYgaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZXNjO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcmVkZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyA9IGRlc2MuY29uZmlndXJhYmxlO1xuICAgICAgICBkZXNjID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgcmV0dXJuIF90cnlEZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MsIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqW3VuY29uZmlndXJhYmxlc0tleV0gJiYgb2JqW3VuY29uZmlndXJhYmxlc0tleV1bcHJvcF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYykge1xuICAgICAgICAvLyBpc3N1ZS05MjcsIGlmIHRoZSBkZXNjIGlzIGZyb3plbiwgZG9uJ3QgdHJ5IHRvIGNoYW5nZSB0aGUgZGVzY1xuICAgICAgICBpZiAoIU9iamVjdC5pc0Zyb3plbihkZXNjKSkge1xuICAgICAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIC8vIGlzc3VlLTkyNywgaWYgdGhlIG9iaiBpcyBmcm96ZW4sIGRvbid0IHRyeSB0byBzZXQgdGhlIGRlc2MgdG8gb2JqXG4gICAgICAgICAgICBpZiAoIW9ialt1bmNvbmZpZ3VyYWJsZXNLZXldICYmICFPYmplY3QuaXNGcm96ZW4ob2JqKSkge1xuICAgICAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eShvYmosIHVuY29uZmlndXJhYmxlc0tleSwgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldKSB7XG4gICAgICAgICAgICAgICAgb2JqW3VuY29uZmlndXJhYmxlc0tleV1bcHJvcF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIEluIGNhc2Ugb2YgZXJyb3JzLCB3aGVuIHRoZSBjb25maWd1cmFibGUgZmxhZyB3YXMgbGlrZWx5IHNldCBieSByZXdyaXRlRGVzY3JpcHRvcigpLFxuICAgICAgICAgICAgICAgIC8vIGxldCdzIHJldHJ5IHdpdGggdGhlIG9yaWdpbmFsIGZsYWcgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGVzYy5jb25maWd1cmFibGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN3YWxsb3dFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2NyZWF0ZWRDYWxsYmFjaycgfHwgcHJvcCA9PT0gJ2F0dGFjaGVkQ2FsbGJhY2snIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wID09PSAnZGV0YWNoZWRDYWxsYmFjaycgfHwgcHJvcCA9PT0gJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgc3dhbGxvdyB0aGUgZXJyb3IgaW4gcmVnaXN0ZXJFbGVtZW50IHBhdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSB3b3JrIGFyb3VuZCBzaW5jZSBzb21lIGFwcGxpY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFpbCBpZiB3ZSB0aHJvdyB0aGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YWxsb3dFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzd2FsbG93RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEBKaWFMaVBhc3Npb24sIFNvbWUgYXBwbGljYXRpb24gc3VjaCBhcyBgcmVnaXN0ZXJFbGVtZW50YCBwYXRjaFxuICAgICAgICAgICAgICAgICAgICAvLyBzdGlsbCBuZWVkIHRvIHN3YWxsb3cgdGhlIGVycm9yLCBpbiB0aGUgZnV0dXJlIGFmdGVyIHRoZXNlIGFwcGxpY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAvLyBhcmUgdXBkYXRlZCwgdGhlIGZvbGxvd2luZyBsb2dpYyBjYW4gYmUgcmVtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2NKc29uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NKc29uID0gSlNPTi5zdHJpbmdpZnkoZGVzYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjSnNvbiA9IGRlc2MudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gY29uZmlndXJlICdcIi5jb25jYXQocHJvcCwgXCInIHdpdGggZGVzY3JpcHRvciAnXCIpLmNvbmNhdChkZXNjSnNvbiwgXCInIG9uIG9iamVjdCAnXCIpLmNvbmNhdChvYmosIFwiJyBhbmQgZ290IGVycm9yLCBnaXZpbmcgdXA6IFwiKS5jb25jYXQoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBldmVudFRhcmdldExlZ2FjeVBhdGNoKF9nbG9iYWwsIGFwaSkge1xuICAgICAgICB2YXIgX2IgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBldmVudE5hbWVzID0gX2IuZXZlbnROYW1lcywgZ2xvYmFsU291cmNlcyA9IF9iLmdsb2JhbFNvdXJjZXMsIHpvbmVTeW1ib2xFdmVudE5hbWVzID0gX2Iuem9uZVN5bWJvbEV2ZW50TmFtZXMsIFRSVUVfU1RSID0gX2IuVFJVRV9TVFIsIEZBTFNFX1NUUiA9IF9iLkZBTFNFX1NUUiwgWk9ORV9TWU1CT0xfUFJFRklYID0gX2IuWk9ORV9TWU1CT0xfUFJFRklYO1xuICAgICAgICB2YXIgV1RGX0lTU1VFXzU1NSA9ICdBbmNob3IsQXJlYSxBdWRpbyxCUixCYXNlLEJhc2VGb250LEJvZHksQnV0dG9uLENhbnZhcyxDb250ZW50LERMaXN0LERpcmVjdG9yeSxEaXYsRW1iZWQsRmllbGRTZXQsRm9udCxGb3JtLEZyYW1lLEZyYW1lU2V0LEhSLEhlYWQsSGVhZGluZyxIdG1sLElGcmFtZSxJbWFnZSxJbnB1dCxLZXlnZW4sTEksTGFiZWwsTGVnZW5kLExpbmssTWFwLE1hcnF1ZWUsTWVkaWEsTWVudSxNZXRhLE1ldGVyLE1vZCxPTGlzdCxPYmplY3QsT3B0R3JvdXAsT3B0aW9uLE91dHB1dCxQYXJhZ3JhcGgsUHJlLFByb2dyZXNzLFF1b3RlLFNjcmlwdCxTZWxlY3QsU291cmNlLFNwYW4sU3R5bGUsVGFibGVDYXB0aW9uLFRhYmxlQ2VsbCxUYWJsZUNvbCxUYWJsZSxUYWJsZVJvdyxUYWJsZVNlY3Rpb24sVGV4dEFyZWEsVGl0bGUsVHJhY2ssVUxpc3QsVW5rbm93bixWaWRlbyc7XG4gICAgICAgIHZhciBOT19FVkVOVF9UQVJHRVQgPSAnQXBwbGljYXRpb25DYWNoZSxFdmVudFNvdXJjZSxGaWxlUmVhZGVyLElucHV0TWV0aG9kQ29udGV4dCxNZWRpYUNvbnRyb2xsZXIsTWVzc2FnZVBvcnQsTm9kZSxQZXJmb3JtYW5jZSxTVkdFbGVtZW50SW5zdGFuY2UsU2hhcmVkV29ya2VyLFRleHRUcmFjayxUZXh0VHJhY2tDdWUsVGV4dFRyYWNrTGlzdCxXZWJLaXROYW1lZEZsb3csV2luZG93LFdvcmtlcixXb3JrZXJHbG9iYWxTY29wZSxYTUxIdHRwUmVxdWVzdCxYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LFhNTEh0dHBSZXF1ZXN0VXBsb2FkLElEQlJlcXVlc3QsSURCT3BlbkRCUmVxdWVzdCxJREJEYXRhYmFzZSxJREJUcmFuc2FjdGlvbixJREJDdXJzb3IsREJJbmRleCxXZWJTb2NrZXQnXG4gICAgICAgICAgICAuc3BsaXQoJywnKTtcbiAgICAgICAgdmFyIEVWRU5UX1RBUkdFVCA9ICdFdmVudFRhcmdldCc7XG4gICAgICAgIHZhciBhcGlzID0gW107XG4gICAgICAgIHZhciBpc1d0ZiA9IF9nbG9iYWxbJ3d0ZiddO1xuICAgICAgICB2YXIgV1RGX0lTU1VFXzU1NV9BUlJBWSA9IFdURl9JU1NVRV81NTUuc3BsaXQoJywnKTtcbiAgICAgICAgaWYgKGlzV3RmKSB7XG4gICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvcjogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS90cmFjaW5nLWZyYW1ld29yay9pc3N1ZXMvNTU1XG4gICAgICAgICAgICBhcGlzID0gV1RGX0lTU1VFXzU1NV9BUlJBWS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuICdIVE1MJyArIHYgKyAnRWxlbWVudCc7IH0pLmNvbmNhdChOT19FVkVOVF9UQVJHRVQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9nbG9iYWxbRVZFTlRfVEFSR0VUXSkge1xuICAgICAgICAgICAgYXBpcy5wdXNoKEVWRU5UX1RBUkdFVCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBOb3RlOiBFdmVudFRhcmdldCBpcyBub3QgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyxcbiAgICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSwgd2UgaW5zdGVhZCBwYXRjaCB0aGUgQVBJcyBpbiB0aGUgSURMIHRoYXQgaW5oZXJpdCBmcm9tIEV2ZW50VGFyZ2V0XG4gICAgICAgICAgICBhcGlzID0gTk9fRVZFTlRfVEFSR0VUO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0Rpc2FibGVJRUNoZWNrID0gX2dsb2JhbFsnX19ab25lX2Rpc2FibGVfSUVfY2hlY2snXSB8fCBmYWxzZTtcbiAgICAgICAgdmFyIGlzRW5hYmxlQ3Jvc3NDb250ZXh0Q2hlY2sgPSBfZ2xvYmFsWydfX1pvbmVfZW5hYmxlX2Nyb3NzX2NvbnRleHRfY2hlY2snXSB8fCBmYWxzZTtcbiAgICAgICAgdmFyIGllT3JFZGdlID0gYXBpLmlzSUVPckVkZ2UoKTtcbiAgICAgICAgdmFyIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgPSAnLmFkZEV2ZW50TGlzdGVuZXI6JztcbiAgICAgICAgdmFyIEZVTkNUSU9OX1dSQVBQRVIgPSAnW29iamVjdCBGdW5jdGlvbldyYXBwZXJdJztcbiAgICAgICAgdmFyIEJST1dTRVJfVE9PTFMgPSAnZnVuY3Rpb24gX19CUk9XU0VSVE9PTFNfQ09OU09MRV9TQUZFRlVOQygpIHsgW25hdGl2ZSBjb2RlXSB9JztcbiAgICAgICAgdmFyIHBvaW50ZXJFdmVudHNNYXAgPSB7XG4gICAgICAgICAgICAnTVNQb2ludGVyQ2FuY2VsJzogJ3BvaW50ZXJjYW5jZWwnLFxuICAgICAgICAgICAgJ01TUG9pbnRlckRvd24nOiAncG9pbnRlcmRvd24nLFxuICAgICAgICAgICAgJ01TUG9pbnRlckVudGVyJzogJ3BvaW50ZXJlbnRlcicsXG4gICAgICAgICAgICAnTVNQb2ludGVySG92ZXInOiAncG9pbnRlcmhvdmVyJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJMZWF2ZSc6ICdwb2ludGVybGVhdmUnLFxuICAgICAgICAgICAgJ01TUG9pbnRlck1vdmUnOiAncG9pbnRlcm1vdmUnLFxuICAgICAgICAgICAgJ01TUG9pbnRlck91dCc6ICdwb2ludGVyb3V0JyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJPdmVyJzogJ3BvaW50ZXJvdmVyJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJVcCc6ICdwb2ludGVydXAnXG4gICAgICAgIH07XG4gICAgICAgIC8vICBwcmVkZWZpbmUgYWxsIF9fem9uZV9zeW1ib2xfXyArIGV2ZW50TmFtZSArIHRydWUvZmFsc2Ugc3RyaW5nXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgZmFsc2VFdmVudE5hbWUgPSBldmVudE5hbWUgKyBGQUxTRV9TVFI7XG4gICAgICAgICAgICB2YXIgdHJ1ZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIFRSVUVfU1RSO1xuICAgICAgICAgICAgdmFyIHN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIGZhbHNlRXZlbnROYW1lO1xuICAgICAgICAgICAgdmFyIHN5bWJvbENhcHR1cmUgPSBaT05FX1NZTUJPTF9QUkVGSVggKyB0cnVlRXZlbnROYW1lO1xuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHt9O1xuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtUUlVFX1NUUl0gPSBzeW1ib2xDYXB0dXJlO1xuICAgICAgICB9XG4gICAgICAgIC8vICBwcmVkZWZpbmUgYWxsIHRhc2suc291cmNlIHN0cmluZ1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFdURl9JU1NVRV81NTVfQVJSQVkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBXVEZfSVNTVUVfNTU1X0FSUkFZW2ldO1xuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSBnbG9iYWxTb3VyY2VzW3RhcmdldF0gPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZXZlbnROYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVzW2pdO1xuICAgICAgICAgICAgICAgIHRhcmdldHNbZXZlbnROYW1lXSA9IHRhcmdldCArIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgKyBldmVudE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoZWNrSUVBbmRDcm9zc0NvbnRleHQgPSBmdW5jdGlvbiAobmF0aXZlRGVsZWdhdGUsIGRlbGVnYXRlLCB0YXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICghaXNEaXNhYmxlSUVDaGVjayAmJiBpZU9yRWRnZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0VuYWJsZUNyb3NzQ29udGV4dENoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdFN0cmluZyA9IGRlbGVnYXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHRlc3RTdHJpbmcgPT09IEZVTkNUSU9OX1dSQVBQRVIgfHwgdGVzdFN0cmluZyA9PSBCUk9XU0VSX1RPT0xTKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVsZWdhdGUuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RTdHJpbmcgPSBkZWxlZ2F0ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHRlc3RTdHJpbmcgPT09IEZVTkNUSU9OX1dSQVBQRVIgfHwgdGVzdFN0cmluZyA9PSBCUk9XU0VSX1RPT0xTKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVsZWdhdGUuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRW5hYmxlQ3Jvc3NDb250ZXh0Q2hlY2spIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVsZWdhdGUuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgYXBpVHlwZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IF9nbG9iYWxbYXBpc1tpXV07XG4gICAgICAgICAgICBhcGlUeXBlcy5wdXNoKHR5cGUgJiYgdHlwZS5wcm90b3R5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHZoIGlzIHZhbGlkYXRlSGFuZGxlciB0byBjaGVjayBldmVudCBoYW5kbGVyXG4gICAgICAgIC8vIGlzIHZhbGlkIG9yIG5vdChmb3Igc2VjdXJpdHkgY2hlY2spXG4gICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIGFwaSwgYXBpVHlwZXMsIHtcbiAgICAgICAgICAgIHZoOiBjaGVja0lFQW5kQ3Jvc3NDb250ZXh0LFxuICAgICAgICAgICAgdHJhbnNmZXJFdmVudE5hbWU6IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRlckV2ZW50TmFtZSA9IHBvaW50ZXJFdmVudHNNYXBbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnRlckV2ZW50TmFtZSB8fCBldmVudE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRUYXJnZXQnKV0gPSAhIV9nbG9iYWxbRVZFTlRfVEFSR0VUXTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIC8vIHdlIGhhdmUgdG8gcGF0Y2ggdGhlIGluc3RhbmNlIHNpbmNlIHRoZSBwcm90byBpcyBub24tY29uZmlndXJhYmxlXG4gICAgZnVuY3Rpb24gYXBwbHkoYXBpLCBfZ2xvYmFsKSB7XG4gICAgICAgIHZhciBfYiA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIEFERF9FVkVOVF9MSVNURU5FUl9TVFIgPSBfYi5BRERfRVZFTlRfTElTVEVORVJfU1RSLCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSID0gX2IuUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUjtcbiAgICAgICAgdmFyIFdTID0gX2dsb2JhbC5XZWJTb2NrZXQ7XG4gICAgICAgIC8vIE9uIFNhZmFyaSB3aW5kb3cuRXZlbnRUYXJnZXQgZG9lc24ndCBleGlzdCBzbyBuZWVkIHRvIHBhdGNoIFdTIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgIC8vIE9uIG9sZGVyIENocm9tZSwgbm8gbmVlZCBzaW5jZSBFdmVudFRhcmdldCB3YXMgYWxyZWFkeSBwYXRjaGVkXG4gICAgICAgIGlmICghX2dsb2JhbC5FdmVudFRhcmdldCkge1xuICAgICAgICAgICAgYXBpLnBhdGNoRXZlbnRUYXJnZXQoX2dsb2JhbCwgYXBpLCBbV1MucHJvdG90eXBlXSk7XG4gICAgICAgIH1cbiAgICAgICAgX2dsb2JhbC5XZWJTb2NrZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgdmFyIHNvY2tldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gbmV3IFdTKHgsIHkpIDogbmV3IFdTKHgpO1xuICAgICAgICAgICAgdmFyIHByb3h5U29ja2V0O1xuICAgICAgICAgICAgdmFyIHByb3h5U29ja2V0UHJvdG87XG4gICAgICAgICAgICAvLyBTYWZhcmkgNy4wIGhhcyBub24tY29uZmlndXJhYmxlIG93biAnb25tZXNzYWdlJyBhbmQgZnJpZW5kcyBwcm9wZXJ0aWVzIG9uIHRoZSBzb2NrZXQgaW5zdGFuY2VcbiAgICAgICAgICAgIHZhciBvbm1lc3NhZ2VEZXNjID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb2NrZXQsICdvbm1lc3NhZ2UnKTtcbiAgICAgICAgICAgIGlmIChvbm1lc3NhZ2VEZXNjICYmIG9ubWVzc2FnZURlc2MuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHByb3h5U29ja2V0ID0gYXBpLk9iamVjdENyZWF0ZShzb2NrZXQpO1xuICAgICAgICAgICAgICAgIC8vIHNvY2tldCBoYXZlIG93biBwcm9wZXJ0eSBkZXNjcmlwdG9yICdvbm9wZW4nLCAnb25tZXNzYWdlJywgJ29uY2xvc2UnLCAnb25lcnJvcidcbiAgICAgICAgICAgICAgICAvLyBidXQgcHJveHlTb2NrZXQgbm90LCBzbyB3ZSB3aWxsIGtlZXAgc29ja2V0IGFzIHByb3RvdHlwZSBhbmQgcGFzcyBpdCB0b1xuICAgICAgICAgICAgICAgIC8vIHBhdGNoT25Qcm9wZXJ0aWVzIG1ldGhvZFxuICAgICAgICAgICAgICAgIHByb3h5U29ja2V0UHJvdG8gPSBzb2NrZXQ7XG4gICAgICAgICAgICAgICAgW0FERF9FVkVOVF9MSVNURU5FUl9TVFIsIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIsICdzZW5kJywgJ2Nsb3NlJ10uZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlTb2NrZXRbcHJvcE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcGkuQXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcE5hbWUgPT09IEFERF9FVkVOVF9MSVNURU5FUl9TVFIgfHwgcHJvcE5hbWUgPT09IFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJncy5sZW5ndGggPiAwID8gYXJnc1swXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eVN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXygnT05fUFJPUEVSVFknICsgZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0W3Byb3BlcnR5U3ltYm9sXSA9IHByb3h5U29ja2V0W3Byb3BlcnR5U3ltYm9sXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ja2V0W3Byb3BOYW1lXS5hcHBseShzb2NrZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgY2FuIHBhdGNoIHRoZSByZWFsIHNvY2tldFxuICAgICAgICAgICAgICAgIHByb3h5U29ja2V0ID0gc29ja2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBpLnBhdGNoT25Qcm9wZXJ0aWVzKHByb3h5U29ja2V0LCBbJ2Nsb3NlJywgJ2Vycm9yJywgJ21lc3NhZ2UnLCAnb3BlbiddLCBwcm94eVNvY2tldFByb3RvKTtcbiAgICAgICAgICAgIHJldHVybiBwcm94eVNvY2tldDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdsb2JhbFdlYlNvY2tldCA9IF9nbG9iYWxbJ1dlYlNvY2tldCddO1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIFdTKSB7XG4gICAgICAgICAgICBnbG9iYWxXZWJTb2NrZXRbcHJvcF0gPSBXU1twcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JMZWdhY3lQYXRjaChhcGksIF9nbG9iYWwpIHtcbiAgICAgICAgdmFyIF9iID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgaXNOb2RlID0gX2IuaXNOb2RlLCBpc01peCA9IF9iLmlzTWl4O1xuICAgICAgICBpZiAoaXNOb2RlICYmICFpc01peCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IoYXBpLCBfZ2xvYmFsKSkge1xuICAgICAgICAgICAgdmFyIHN1cHBvcnRzV2ViU29ja2V0ID0gdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICAvLyBTYWZhcmksIEFuZHJvaWQgYnJvd3NlcnMgKEplbGx5IEJlYW4pXG4gICAgICAgICAgICBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cyhhcGkpO1xuICAgICAgICAgICAgYXBpLnBhdGNoQ2xhc3MoJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgICAgICBhcHBseShhcGksIF9nbG9iYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWm9uZVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50cycpXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IoYXBpLCBfZ2xvYmFsKSB7XG4gICAgICAgIHZhciBfYiA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIGlzQnJvd3NlciA9IF9iLmlzQnJvd3NlciwgaXNNaXggPSBfYi5pc01peDtcbiAgICAgICAgaWYgKChpc0Jyb3dzZXIgfHwgaXNNaXgpICYmXG4gICAgICAgICAgICAhYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJykgJiZcbiAgICAgICAgICAgIHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gV2ViS2l0IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzQzNjRcbiAgICAgICAgICAgIC8vIElETCBpbnRlcmZhY2UgYXR0cmlidXRlcyBhcmUgbm90IGNvbmZpZ3VyYWJsZVxuICAgICAgICAgICAgdmFyIGRlc2MgPSBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycpO1xuICAgICAgICAgICAgaWYgKGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRyeSB0byB1c2Ugb25jbGljayB0byBkZXRlY3Qgd2hldGhlciB3ZSBjYW4gcGF0Y2ggdmlhIHByb3BlcnR5RGVzY3JpcHRvclxuICAgICAgICAgICAgLy8gYmVjYXVzZSBYTUxIdHRwUmVxdWVzdCBpcyBub3QgYXZhaWxhYmxlIGluIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgICAgICBpZiAoZGVzYykge1xuICAgICAgICAgICAgICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gISFkaXYub25jbGljaztcbiAgICAgICAgICAgICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJywgZGVzYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3QgPSBfZ2xvYmFsWydYTUxIdHRwUmVxdWVzdCddO1xuICAgICAgICBpZiAoIVhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAvLyBYTUxIdHRwUmVxdWVzdCBpcyBub3QgYXZhaWxhYmxlIGluIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIE9OX1JFQURZX1NUQVRFX0NIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgICAgIHZhciB4aHJEZXNjID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFKTtcbiAgICAgICAgLy8gYWRkIGVudW1lcmFibGUgYW5kIGNvbmZpZ3VyYWJsZSBoZXJlIGJlY2F1c2UgaW4gb3BlcmFcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub25yZWFkeXN0YXRlY2hhbmdlIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyB3aXRob3V0IGFkZGluZyBlbnVtZXJhYmxlIGFuZCBjb25maWd1cmFibGUgd2lsbCBjYXVzZSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZVxuICAgICAgICAvLyBhbmQgaWYgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9ucmVhZHlzdGF0ZWNoYW5nZSBpcyB1bmRlZmluZWQsXG4gICAgICAgIC8vIHdlIHNob3VsZCBzZXQgYSByZWFsIGRlc2MgaW5zdGVhZCBhIGZha2Ugb25lXG4gICAgICAgIGlmICh4aHJEZXNjKSB7XG4gICAgICAgICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsIE9OX1JFQURZX1NUQVRFX0NIQU5HRSwge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAhIXJlcS5vbnJlYWR5c3RhdGVjaGFuZ2U7XG4gICAgICAgICAgICAvLyByZXN0b3JlIG9yaWdpbmFsIGRlc2NcbiAgICAgICAgICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFLCB4aHJEZXNjIHx8IHt9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgU1lNQk9MX0ZBS0VfT05SRUFEWVNUQVRFQ0hBTkdFXzEgPSBhcGkuc3ltYm9sKCdmYWtlJyk7XG4gICAgICAgICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsIE9OX1JFQURZX1NUQVRFX0NIQU5HRSwge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VfMV07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW1NZTUJPTF9GQUtFX09OUkVBRFlTVEFURUNIQU5HRV8xXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgdmFyIGRldGVjdEZ1bmMgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZGV0ZWN0RnVuYztcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXFbU1lNQk9MX0ZBS0VfT05SRUFEWVNUQVRFQ0hBTkdFXzFdID09PSBkZXRlY3RGdW5jO1xuICAgICAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBnbG9iYWxFdmVudEhhbmRsZXJzRXZlbnROYW1lcyA9IFtcbiAgICAgICAgJ2Fib3J0JyxcbiAgICAgICAgJ2FuaW1hdGlvbmNhbmNlbCcsXG4gICAgICAgICdhbmltYXRpb25lbmQnLFxuICAgICAgICAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICAgICAgJ2F1eGNsaWNrJyxcbiAgICAgICAgJ2JlZm9yZWlucHV0JyxcbiAgICAgICAgJ2JsdXInLFxuICAgICAgICAnY2FuY2VsJyxcbiAgICAgICAgJ2NhbnBsYXknLFxuICAgICAgICAnY2FucGxheXRocm91Z2gnLFxuICAgICAgICAnY2hhbmdlJyxcbiAgICAgICAgJ2NvbXBvc2l0aW9uc3RhcnQnLFxuICAgICAgICAnY29tcG9zaXRpb251cGRhdGUnLFxuICAgICAgICAnY29tcG9zaXRpb25lbmQnLFxuICAgICAgICAnY3VlY2hhbmdlJyxcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgJ2Nsb3NlJyxcbiAgICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICAgJ2N1cmVjaGFuZ2UnLFxuICAgICAgICAnZGJsY2xpY2snLFxuICAgICAgICAnZHJhZycsXG4gICAgICAgICdkcmFnZW5kJyxcbiAgICAgICAgJ2RyYWdlbnRlcicsXG4gICAgICAgICdkcmFnZXhpdCcsXG4gICAgICAgICdkcmFnbGVhdmUnLFxuICAgICAgICAnZHJhZ292ZXInLFxuICAgICAgICAnZHJvcCcsXG4gICAgICAgICdkdXJhdGlvbmNoYW5nZScsXG4gICAgICAgICdlbXB0aWVkJyxcbiAgICAgICAgJ2VuZGVkJyxcbiAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgJ2ZvY3VzJyxcbiAgICAgICAgJ2ZvY3VzaW4nLFxuICAgICAgICAnZm9jdXNvdXQnLFxuICAgICAgICAnZ290cG9pbnRlcmNhcHR1cmUnLFxuICAgICAgICAnaW5wdXQnLFxuICAgICAgICAnaW52YWxpZCcsXG4gICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgJ2tleXByZXNzJyxcbiAgICAgICAgJ2tleXVwJyxcbiAgICAgICAgJ2xvYWQnLFxuICAgICAgICAnbG9hZHN0YXJ0JyxcbiAgICAgICAgJ2xvYWRlZGRhdGEnLFxuICAgICAgICAnbG9hZGVkbWV0YWRhdGEnLFxuICAgICAgICAnbG9zdHBvaW50ZXJjYXB0dXJlJyxcbiAgICAgICAgJ21vdXNlZG93bicsXG4gICAgICAgICdtb3VzZWVudGVyJyxcbiAgICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgICAnbW91c2Vtb3ZlJyxcbiAgICAgICAgJ21vdXNlb3V0JyxcbiAgICAgICAgJ21vdXNlb3ZlcicsXG4gICAgICAgICdtb3VzZXVwJyxcbiAgICAgICAgJ21vdXNld2hlZWwnLFxuICAgICAgICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAgICAgICAncGF1c2UnLFxuICAgICAgICAncGxheScsXG4gICAgICAgICdwbGF5aW5nJyxcbiAgICAgICAgJ3BvaW50ZXJjYW5jZWwnLFxuICAgICAgICAncG9pbnRlcmRvd24nLFxuICAgICAgICAncG9pbnRlcmVudGVyJyxcbiAgICAgICAgJ3BvaW50ZXJsZWF2ZScsXG4gICAgICAgICdwb2ludGVybG9ja2NoYW5nZScsXG4gICAgICAgICdtb3pwb2ludGVybG9ja2NoYW5nZScsXG4gICAgICAgICd3ZWJraXRwb2ludGVybG9ja2VyY2hhbmdlJyxcbiAgICAgICAgJ3BvaW50ZXJsb2NrZXJyb3InLFxuICAgICAgICAnbW96cG9pbnRlcmxvY2tlcnJvcicsXG4gICAgICAgICd3ZWJraXRwb2ludGVybG9ja2Vycm9yJyxcbiAgICAgICAgJ3BvaW50ZXJtb3ZlJyxcbiAgICAgICAgJ3BvaW50b3V0JyxcbiAgICAgICAgJ3BvaW50ZXJvdmVyJyxcbiAgICAgICAgJ3BvaW50ZXJ1cCcsXG4gICAgICAgICdwcm9ncmVzcycsXG4gICAgICAgICdyYXRlY2hhbmdlJyxcbiAgICAgICAgJ3Jlc2V0JyxcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgICdzY3JvbGwnLFxuICAgICAgICAnc2Vla2VkJyxcbiAgICAgICAgJ3NlZWtpbmcnLFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ3NlbGVjdGlvbmNoYW5nZScsXG4gICAgICAgICdzZWxlY3RzdGFydCcsXG4gICAgICAgICdzaG93JyxcbiAgICAgICAgJ3NvcnQnLFxuICAgICAgICAnc3RhbGxlZCcsXG4gICAgICAgICdzdWJtaXQnLFxuICAgICAgICAnc3VzcGVuZCcsXG4gICAgICAgICd0aW1ldXBkYXRlJyxcbiAgICAgICAgJ3ZvbHVtZWNoYW5nZScsXG4gICAgICAgICd0b3VjaGNhbmNlbCcsXG4gICAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgICAndG91Y2hzdGFydCcsXG4gICAgICAgICd0b3VjaGVuZCcsXG4gICAgICAgICd0cmFuc2l0aW9uY2FuY2VsJyxcbiAgICAgICAgJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICAnd2FpdGluZycsXG4gICAgICAgICd3aGVlbCdcbiAgICBdO1xuICAgIHZhciBkb2N1bWVudEV2ZW50TmFtZXMgPSBbXG4gICAgICAgICdhZnRlcnNjcmlwdGV4ZWN1dGUnLCAnYmVmb3Jlc2NyaXB0ZXhlY3V0ZScsICdET01Db250ZW50TG9hZGVkJywgJ2ZyZWV6ZScsICdmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsICdtc2Z1bGxzY3JlZW5jaGFuZ2UnLCAnZnVsbHNjcmVlbmVycm9yJyxcbiAgICAgICAgJ21vemZ1bGxzY3JlZW5lcnJvcicsICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InLCAnbXNmdWxsc2NyZWVuZXJyb3InLCAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICAgICAgICd2aXNpYmlsaXR5Y2hhbmdlJywgJ3Jlc3VtZSdcbiAgICBdO1xuICAgIHZhciB3aW5kb3dFdmVudE5hbWVzID0gW1xuICAgICAgICAnYWJzb2x1dGVkZXZpY2VvcmllbnRhdGlvbicsXG4gICAgICAgICdhZnRlcmlucHV0JyxcbiAgICAgICAgJ2FmdGVycHJpbnQnLFxuICAgICAgICAnYXBwaW5zdGFsbGVkJyxcbiAgICAgICAgJ2JlZm9yZWluc3RhbGxwcm9tcHQnLFxuICAgICAgICAnYmVmb3JlcHJpbnQnLFxuICAgICAgICAnYmVmb3JldW5sb2FkJyxcbiAgICAgICAgJ2RldmljZWxpZ2h0JyxcbiAgICAgICAgJ2RldmljZW1vdGlvbicsXG4gICAgICAgICdkZXZpY2VvcmllbnRhdGlvbicsXG4gICAgICAgICdkZXZpY2VvcmllbnRhdGlvbmFic29sdXRlJyxcbiAgICAgICAgJ2RldmljZXByb3hpbWl0eScsXG4gICAgICAgICdoYXNoY2hhbmdlJyxcbiAgICAgICAgJ2xhbmd1YWdlY2hhbmdlJyxcbiAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAnbW96YmVmb3JlcGFpbnQnLFxuICAgICAgICAnb2ZmbGluZScsXG4gICAgICAgICdvbmxpbmUnLFxuICAgICAgICAncGFpbnQnLFxuICAgICAgICAncGFnZXNob3cnLFxuICAgICAgICAncGFnZWhpZGUnLFxuICAgICAgICAncG9wc3RhdGUnLFxuICAgICAgICAncmVqZWN0aW9uaGFuZGxlZCcsXG4gICAgICAgICdzdG9yYWdlJyxcbiAgICAgICAgJ3VuaGFuZGxlZHJlamVjdGlvbicsXG4gICAgICAgICd1bmxvYWQnLFxuICAgICAgICAndXNlcnByb3hpbWl0eScsXG4gICAgICAgICd2cmRpc3BsYXljb25uZWN0ZWQnLFxuICAgICAgICAndnJkaXNwbGF5ZGlzY29ubmVjdGVkJyxcbiAgICAgICAgJ3ZyZGlzcGxheXByZXNlbnRjaGFuZ2UnXG4gICAgXTtcbiAgICB2YXIgaHRtbEVsZW1lbnRFdmVudE5hbWVzID0gW1xuICAgICAgICAnYmVmb3JlY29weScsICdiZWZvcmVjdXQnLCAnYmVmb3JlcGFzdGUnLCAnY29weScsICdjdXQnLCAncGFzdGUnLCAnZHJhZ3N0YXJ0JywgJ2xvYWRlbmQnLFxuICAgICAgICAnYW5pbWF0aW9uc3RhcnQnLCAnc2VhcmNoJywgJ3RyYW5zaXRpb25ydW4nLCAndHJhbnNpdGlvbnN0YXJ0JywgJ3dlYmtpdGFuaW1hdGlvbmVuZCcsXG4gICAgICAgICd3ZWJraXRhbmltYXRpb25pdGVyYXRpb24nLCAnd2Via2l0YW5pbWF0aW9uc3RhcnQnLCAnd2Via2l0dHJhbnNpdGlvbmVuZCdcbiAgICBdO1xuICAgIHZhciBpZUVsZW1lbnRFdmVudE5hbWVzID0gW1xuICAgICAgICAnYWN0aXZhdGUnLFxuICAgICAgICAnYWZ0ZXJ1cGRhdGUnLFxuICAgICAgICAnYXJpYXJlcXVlc3QnLFxuICAgICAgICAnYmVmb3JlYWN0aXZhdGUnLFxuICAgICAgICAnYmVmb3JlZGVhY3RpdmF0ZScsXG4gICAgICAgICdiZWZvcmVlZGl0Zm9jdXMnLFxuICAgICAgICAnYmVmb3JldXBkYXRlJyxcbiAgICAgICAgJ2NlbGxjaGFuZ2UnLFxuICAgICAgICAnY29udHJvbHNlbGVjdCcsXG4gICAgICAgICdkYXRhYXZhaWxhYmxlJyxcbiAgICAgICAgJ2RhdGFzZXRjaGFuZ2VkJyxcbiAgICAgICAgJ2RhdGFzZXRjb21wbGV0ZScsXG4gICAgICAgICdlcnJvcnVwZGF0ZScsXG4gICAgICAgICdmaWx0ZXJjaGFuZ2UnLFxuICAgICAgICAnbGF5b3V0Y29tcGxldGUnLFxuICAgICAgICAnbG9zZWNhcHR1cmUnLFxuICAgICAgICAnbW92ZScsXG4gICAgICAgICdtb3ZlZW5kJyxcbiAgICAgICAgJ21vdmVzdGFydCcsXG4gICAgICAgICdwcm9wZXJ0eWNoYW5nZScsXG4gICAgICAgICdyZXNpemVlbmQnLFxuICAgICAgICAncmVzaXplc3RhcnQnLFxuICAgICAgICAncm93ZW50ZXInLFxuICAgICAgICAncm93ZXhpdCcsXG4gICAgICAgICdyb3dzZGVsZXRlJyxcbiAgICAgICAgJ3Jvd3NpbnNlcnRlZCcsXG4gICAgICAgICdjb21tYW5kJyxcbiAgICAgICAgJ2NvbXBhc3NuZWVkc2NhbGlicmF0aW9uJyxcbiAgICAgICAgJ2RlYWN0aXZhdGUnLFxuICAgICAgICAnaGVscCcsXG4gICAgICAgICdtc2NvbnRlbnR6b29tJyxcbiAgICAgICAgJ21zbWFuaXB1bGF0aW9uc3RhdGVjaGFuZ2VkJyxcbiAgICAgICAgJ21zZ2VzdHVyZWNoYW5nZScsXG4gICAgICAgICdtc2dlc3R1cmVkb3VibGV0YXAnLFxuICAgICAgICAnbXNnZXN0dXJlZW5kJyxcbiAgICAgICAgJ21zZ2VzdHVyZWhvbGQnLFxuICAgICAgICAnbXNnZXN0dXJlc3RhcnQnLFxuICAgICAgICAnbXNnZXN0dXJldGFwJyxcbiAgICAgICAgJ21zZ290cG9pbnRlcmNhcHR1cmUnLFxuICAgICAgICAnbXNpbmVydGlhc3RhcnQnLFxuICAgICAgICAnbXNsb3N0cG9pbnRlcmNhcHR1cmUnLFxuICAgICAgICAnbXNwb2ludGVyY2FuY2VsJyxcbiAgICAgICAgJ21zcG9pbnRlcmRvd24nLFxuICAgICAgICAnbXNwb2ludGVyZW50ZXInLFxuICAgICAgICAnbXNwb2ludGVyaG92ZXInLFxuICAgICAgICAnbXNwb2ludGVybGVhdmUnLFxuICAgICAgICAnbXNwb2ludGVybW92ZScsXG4gICAgICAgICdtc3BvaW50ZXJvdXQnLFxuICAgICAgICAnbXNwb2ludGVyb3ZlcicsXG4gICAgICAgICdtc3BvaW50ZXJ1cCcsXG4gICAgICAgICdwb2ludGVyb3V0JyxcbiAgICAgICAgJ21zc2l0ZW1vZGVqdW1wbGlzdGl0ZW1yZW1vdmVkJyxcbiAgICAgICAgJ21zdGh1bWJuYWlsY2xpY2snLFxuICAgICAgICAnc3RvcCcsXG4gICAgICAgICdzdG9yYWdlY29tbWl0J1xuICAgIF07XG4gICAgdmFyIHdlYmdsRXZlbnROYW1lcyA9IFsnd2ViZ2xjb250ZXh0cmVzdG9yZWQnLCAnd2ViZ2xjb250ZXh0bG9zdCcsICd3ZWJnbGNvbnRleHRjcmVhdGlvbmVycm9yJ107XG4gICAgdmFyIGZvcm1FdmVudE5hbWVzID0gWydhdXRvY29tcGxldGUnLCAnYXV0b2NvbXBsZXRlZXJyb3InXTtcbiAgICB2YXIgZGV0YWlsRXZlbnROYW1lcyA9IFsndG9nZ2xlJ107XG4gICAgdmFyIGV2ZW50TmFtZXMgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIGdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE5hbWVzLCB0cnVlKSwgd2ViZ2xFdmVudE5hbWVzLCB0cnVlKSwgZm9ybUV2ZW50TmFtZXMsIHRydWUpLCBkZXRhaWxFdmVudE5hbWVzLCB0cnVlKSwgZG9jdW1lbnRFdmVudE5hbWVzLCB0cnVlKSwgd2luZG93RXZlbnROYW1lcywgdHJ1ZSksIGh0bWxFbGVtZW50RXZlbnROYW1lcywgdHJ1ZSksIGllRWxlbWVudEV2ZW50TmFtZXMsIHRydWUpO1xuICAgIC8vIFdoZW5ldmVyIGFueSBldmVudExpc3RlbmVyIGZpcmVzLCB3ZSBjaGVjayB0aGUgZXZlbnRMaXN0ZW5lciB0YXJnZXQgYW5kIGFsbCBwYXJlbnRzXG4gICAgLy8gZm9yIGBvbndoYXRldmVyYCBwcm9wZXJ0aWVzIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB6b25lLWJvdW5kIGZ1bmN0aW9uc1xuICAgIC8vIC0gQ2hyb21lIChmb3Igbm93KVxuICAgIGZ1bmN0aW9uIHBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzKGFwaSkge1xuICAgICAgICB2YXIgdW5ib3VuZEtleSA9IGFwaS5zeW1ib2woJ3VuYm91bmQnKTtcbiAgICAgICAgdmFyIF9sb29wXzUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gZXZlbnROYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBvbnByb3BlcnR5ID0gJ29uJyArIHByb3BlcnR5O1xuICAgICAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKHByb3BlcnR5LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWx0ID0gZXZlbnQudGFyZ2V0LCBib3VuZCwgc291cmNlO1xuICAgICAgICAgICAgICAgIGlmIChlbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gZWx0LmNvbnN0cnVjdG9yWyduYW1lJ10gKyAnLicgKyBvbnByb3BlcnR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gJ3Vua25vd24uJyArIG9ucHJvcGVydHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChlbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsdFtvbnByb3BlcnR5XSAmJiAhZWx0W29ucHJvcGVydHldW3VuYm91bmRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3VuZCA9IGFwaS53cmFwV2l0aEN1cnJlbnRab25lKGVsdFtvbnByb3BlcnR5XSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kW3VuYm91bmRLZXldID0gZWx0W29ucHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWx0W29ucHJvcGVydHldID0gYm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWx0ID0gZWx0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfNShpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZWdpc3RlckVsZW1lbnRQYXRjaChfZ2xvYmFsLCBhcGkpIHtcbiAgICAgICAgdmFyIF9iID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgaXNCcm93c2VyID0gX2IuaXNCcm93c2VyLCBpc01peCA9IF9iLmlzTWl4O1xuICAgICAgICBpZiAoKCFpc0Jyb3dzZXIgJiYgIWlzTWl4KSB8fCAhKCdyZWdpc3RlckVsZW1lbnQnIGluIF9nbG9iYWwuZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IFsnY3JlYXRlZENhbGxiYWNrJywgJ2F0dGFjaGVkQ2FsbGJhY2snLCAnZGV0YWNoZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXTtcbiAgICAgICAgYXBpLnBhdGNoQ2FsbGJhY2tzKGFwaSwgZG9jdW1lbnQsICdEb2N1bWVudCcsICdyZWdpc3RlckVsZW1lbnQnLCBjYWxsYmFja3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAoZnVuY3Rpb24gKF9nbG9iYWwpIHtcbiAgICAgICAgdmFyIHN5bWJvbFByZWZpeCA9IF9nbG9iYWxbJ19fWm9uZV9zeW1ib2xfcHJlZml4J10gfHwgJ19fem9uZV9zeW1ib2xfXyc7XG4gICAgICAgIGZ1bmN0aW9uIF9fc3ltYm9sX18obmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbFByZWZpeCArIG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgX2dsb2JhbFtfX3N5bWJvbF9fKCdsZWdhY3lQYXRjaCcpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBab25lID0gX2dsb2JhbFsnWm9uZSddO1xuICAgICAgICAgICAgWm9uZS5fX2xvYWRfcGF0Y2goJ2RlZmluZVByb3BlcnR5JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgICAgICAgICAgYXBpLl9yZWRlZmluZVByb3BlcnR5ID0gX3JlZGVmaW5lUHJvcGVydHk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlQYXRjaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBab25lLl9fbG9hZF9wYXRjaCgncmVnaXN0ZXJFbGVtZW50JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJFbGVtZW50UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBab25lLl9fbG9hZF9wYXRjaCgnRXZlbnRUYXJnZXRMZWdhY3knLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldExlZ2FjeVBhdGNoKGdsb2JhbCwgYXBpKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eURlc2NyaXB0b3JMZWdhY3lQYXRjaChhcGksIGdsb2JhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIHdpbmRvdyA6XG4gICAgICAgIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9KTtcbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgdGFza1N5bWJvbCA9IHpvbmVTeW1ib2wkMSgnem9uZVRhc2snKTtcbiAgICBmdW5jdGlvbiBwYXRjaFRpbWVyKHdpbmRvdywgc2V0TmFtZSwgY2FuY2VsTmFtZSwgbmFtZVN1ZmZpeCkge1xuICAgICAgICB2YXIgc2V0TmF0aXZlID0gbnVsbDtcbiAgICAgICAgdmFyIGNsZWFyTmF0aXZlID0gbnVsbDtcbiAgICAgICAgc2V0TmFtZSArPSBuYW1lU3VmZml4O1xuICAgICAgICBjYW5jZWxOYW1lICs9IG5hbWVTdWZmaXg7XG4gICAgICAgIHZhciB0YXNrc0J5SGFuZGxlSWQgPSB7fTtcbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgZGF0YS5hcmdzWzBdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLmludm9rZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlSWQgPSBzZXROYXRpdmUuYXBwbHkod2luZG93LCBkYXRhLmFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIHJldHVybiBjbGVhck5hdGl2ZS5jYWxsKHdpbmRvdywgdGFzay5kYXRhLmhhbmRsZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBzZXROYXRpdmUgPVxuICAgICAgICAgICAgcGF0Y2hNZXRob2Qod2luZG93LCBzZXROYW1lLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zXzEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1BlcmlvZGljOiBuYW1lU3VmZml4ID09PSAnSW50ZXJ2YWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IChuYW1lU3VmZml4ID09PSAnVGltZW91dCcgfHwgbmFtZVN1ZmZpeCA9PT0gJ0ludGVydmFsJykgPyBhcmdzWzFdIHx8IDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrXzEgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgICAgICBhcmdzWzBdID0gZnVuY3Rpb24gdGltZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFja18xLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZS05MzQsIHRhc2sgd2lsbCBiZSBjYW5jZWxsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBldmVuIGl0IGlzIGEgcGVyaW9kaWMgdGFzayBzdWNoIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0SW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy80MDM4N1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFudXAgdGFza3NCeUhhbmRsZUlkIHNob3VsZCBiZSBoYW5kbGVkIGJlZm9yZSBzY2hlZHVsZVRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSBzb21lIHpvbmVTcGVjIG1heSBpbnRlcmNlcHQgYW5kIGRvZXNuJ3QgdHJpZ2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlRm4oc2NoZWR1bGVUYXNrKSBwcm92aWRlZCBoZXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG9wdGlvbnNfMS5pc1BlcmlvZGljKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNfMS5oYW5kbGVJZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIG5vbi1ub2RlanMgZW52LCB3ZSByZW1vdmUgdGltZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSBsb2NhbCBjYWNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVJZFtvcHRpb25zXzEuaGFuZGxlSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnNfMS5oYW5kbGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm9kZSByZXR1cm5zIGNvbXBsZXggb2JqZWN0cyBhcyBoYW5kbGVJZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIHJlbW92ZSB0YXNrIHJlZmVyZW5jZSBmcm9tIHRpbWVyIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc18xLmhhbmRsZUlkW3Rhc2tTeW1ib2xdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShzZXROYW1lLCBhcmdzWzBdLCBvcHRpb25zXzEsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBOb2RlLmpzIG11c3QgYWRkaXRpb25hbGx5IHN1cHBvcnQgdGhlIHJlZiBhbmQgdW5yZWYgZnVuY3Rpb25zLlxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlID0gdGFzay5kYXRhLmhhbmRsZUlkO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBub24gbm9kZWpzIGVudiwgd2Ugc2F2ZSBoYW5kbGVJZDogdGFza1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFwcGluZyBpbiBsb2NhbCBjYWNoZSBmb3IgY2xlYXJUaW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrc0J5SGFuZGxlSWRbaGFuZGxlXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3Igbm9kZWpzIGVudiwgd2Ugc2F2ZSB0YXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWZlcmVuY2UgaW4gdGltZXJJZCBPYmplY3QgZm9yIGNsZWFyVGltZW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlW3Rhc2tTeW1ib2xdID0gdGFzaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGhhbmRsZSBpcyBudWxsLCBiZWNhdXNlIHNvbWUgcG9seWZpbGwgb3IgYnJvd3NlclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmcm9tIHNldFRpbWVvdXQvc2V0SW50ZXJ2YWwvc2V0SW1tZWRpYXRlL3JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlICYmIGhhbmRsZS5yZWYgJiYgaGFuZGxlLnVucmVmICYmIHR5cGVvZiBoYW5kbGUucmVmID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgaGFuZGxlLnVucmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnJlZiA9IGhhbmRsZS5yZWYuYmluZChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay51bnJlZiA9IGhhbmRsZS51bnJlZi5iaW5kKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGUgPT09ICdudW1iZXInIHx8IGhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07IH0pO1xuICAgICAgICBjbGVhck5hdGl2ZSA9XG4gICAgICAgICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIGNhbmNlbE5hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIHZhciB0YXNrO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vbiBub2RlanMgZW52LlxuICAgICAgICAgICAgICAgICAgICB0YXNrID0gdGFza3NCeUhhbmRsZUlkW2lkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vZGVqcyBlbnYuXG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSBpZCAmJiBpZFt0YXNrU3ltYm9sXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXIgZW52aXJvbm1lbnRzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sgPSBpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGFzayAmJiB0eXBlb2YgdGFzay50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSAhPT0gJ25vdFNjaGVkdWxlZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrLmNhbmNlbEZuICYmIHRhc2suZGF0YS5pc1BlcmlvZGljIHx8IHRhc2sucnVuQ291bnQgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlSWRbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFt0YXNrU3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgY2FuY2VsIGFscmVhZHkgY2FuY2VsZWQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUuY2FuY2VsVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGUuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9OyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gcGF0Y2hDdXN0b21FbGVtZW50cyhfZ2xvYmFsLCBhcGkpIHtcbiAgICAgICAgdmFyIF9iID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgaXNCcm93c2VyID0gX2IuaXNCcm93c2VyLCBpc01peCA9IF9iLmlzTWl4O1xuICAgICAgICBpZiAoKCFpc0Jyb3dzZXIgJiYgIWlzTWl4KSB8fCAhX2dsb2JhbFsnY3VzdG9tRWxlbWVudHMnXSB8fCAhKCdjdXN0b21FbGVtZW50cycgaW4gX2dsb2JhbCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gWydjb25uZWN0ZWRDYWxsYmFjaycsICdkaXNjb25uZWN0ZWRDYWxsYmFjaycsICdhZG9wdGVkQ2FsbGJhY2snLCAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ107XG4gICAgICAgIGFwaS5wYXRjaENhbGxiYWNrcyhhcGksIF9nbG9iYWwuY3VzdG9tRWxlbWVudHMsICdjdXN0b21FbGVtZW50cycsICdkZWZpbmUnLCBjYWxsYmFja3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBldmVudFRhcmdldFBhdGNoKF9nbG9iYWwsIGFwaSkge1xuICAgICAgICBpZiAoWm9uZVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50VGFyZ2V0JyldKSB7XG4gICAgICAgICAgICAvLyBFdmVudFRhcmdldCBpcyBhbHJlYWR5IHBhdGNoZWQuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9iID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgZXZlbnROYW1lcyA9IF9iLmV2ZW50TmFtZXMsIHpvbmVTeW1ib2xFdmVudE5hbWVzID0gX2Iuem9uZVN5bWJvbEV2ZW50TmFtZXMsIFRSVUVfU1RSID0gX2IuVFJVRV9TVFIsIEZBTFNFX1NUUiA9IF9iLkZBTFNFX1NUUiwgWk9ORV9TWU1CT0xfUFJFRklYID0gX2IuWk9ORV9TWU1CT0xfUFJFRklYO1xuICAgICAgICAvLyAgcHJlZGVmaW5lIGFsbCBfX3pvbmVfc3ltYm9sX18gKyBldmVudE5hbWUgKyB0cnVlL2ZhbHNlIHN0cmluZ1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIGZhbHNlRXZlbnROYW1lID0gZXZlbnROYW1lICsgRkFMU0VfU1RSO1xuICAgICAgICAgICAgdmFyIHRydWVFdmVudE5hbWUgPSBldmVudE5hbWUgKyBUUlVFX1NUUjtcbiAgICAgICAgICAgIHZhciBzeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyBmYWxzZUV2ZW50TmFtZTtcbiAgICAgICAgICAgIHZhciBzeW1ib2xDYXB0dXJlID0gWk9ORV9TWU1CT0xfUFJFRklYICsgdHJ1ZUV2ZW50TmFtZTtcbiAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSB7fTtcbiAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bVFJVRV9TVFJdID0gc3ltYm9sQ2FwdHVyZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgRVZFTlRfVEFSR0VUID0gX2dsb2JhbFsnRXZlbnRUYXJnZXQnXTtcbiAgICAgICAgaWYgKCFFVkVOVF9UQVJHRVQgfHwgIUVWRU5UX1RBUkdFVC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhcGkucGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGksIFtFVkVOVF9UQVJHRVQgJiYgRVZFTlRfVEFSR0VULnByb3RvdHlwZV0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hFdmVudChnbG9iYWwsIGFwaSkge1xuICAgICAgICBhcGkucGF0Y2hFdmVudFByb3RvdHlwZShnbG9iYWwsIGFwaSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdsZWdhY3knLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBsZWdhY3lQYXRjaCA9IGdsb2JhbFtab25lLl9fc3ltYm9sX18oJ2xlZ2FjeVBhdGNoJyldO1xuICAgICAgICBpZiAobGVnYWN5UGF0Y2gpIHtcbiAgICAgICAgICAgIGxlZ2FjeVBhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgncXVldWVNaWNyb3Rhc2snLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgYXBpLnBhdGNoTWV0aG9kKGdsb2JhbCwgJ3F1ZXVlTWljcm90YXNrJywgZnVuY3Rpb24gKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBab25lLmN1cnJlbnQuc2NoZWR1bGVNaWNyb1Rhc2soJ3F1ZXVlTWljcm90YXNrJywgYXJnc1swXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgndGltZXJzJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICB2YXIgc2V0ID0gJ3NldCc7XG4gICAgICAgIHZhciBjbGVhciA9ICdjbGVhcic7XG4gICAgICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnVGltZW91dCcpO1xuICAgICAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ0ludGVydmFsJyk7XG4gICAgICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW1tZWRpYXRlJyk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsIGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgcGF0Y2hUaW1lcihnbG9iYWwsICdyZXF1ZXN0JywgJ2NhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuICAgICAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ21velJlcXVlc3QnLCAnbW96Q2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG4gICAgICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAnd2Via2l0UmVxdWVzdCcsICd3ZWJraXRDYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnYmxvY2tpbmcnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lKSB7XG4gICAgICAgIHZhciBibG9ja2luZ01ldGhvZHMgPSBbJ2FsZXJ0JywgJ3Byb21wdCcsICdjb25maXJtJ107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tpbmdNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZV8yID0gYmxvY2tpbmdNZXRob2RzW2ldO1xuICAgICAgICAgICAgcGF0Y2hNZXRob2QoZ2xvYmFsLCBuYW1lXzIsIGZ1bmN0aW9uIChkZWxlZ2F0ZSwgc3ltYm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBab25lLmN1cnJlbnQucnVuKGRlbGVnYXRlLCBnbG9iYWwsIGFyZ3MsIG5hbWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdFdmVudFRhcmdldCcsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBwYXRjaEV2ZW50KGdsb2JhbCwgYXBpKTtcbiAgICAgICAgZXZlbnRUYXJnZXRQYXRjaChnbG9iYWwsIGFwaSk7XG4gICAgICAgIC8vIHBhdGNoIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQncyBhZGRFdmVudExpc3RlbmVyL3JlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSBnbG9iYWxbJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnXTtcbiAgICAgICAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgJiYgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KGdsb2JhbCwgYXBpLCBbWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGVdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdNdXRhdGlvbk9ic2VydmVyJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgIHBhdGNoQ2xhc3MoJ011dGF0aW9uT2JzZXJ2ZXInKTtcbiAgICAgICAgcGF0Y2hDbGFzcygnV2ViS2l0TXV0YXRpb25PYnNlcnZlcicpO1xuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBwYXRjaENsYXNzKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicpO1xuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdGaWxlUmVhZGVyJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgIHBhdGNoQ2xhc3MoJ0ZpbGVSZWFkZXInKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnb25fcHJvcGVydHknLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgcHJvcGVydHlEZXNjcmlwdG9yUGF0Y2goYXBpLCBnbG9iYWwpO1xuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdjdXN0b21FbGVtZW50cycsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBwYXRjaEN1c3RvbUVsZW1lbnRzKGdsb2JhbCwgYXBpKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnWEhSJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSkge1xuICAgICAgICAvLyBUcmVhdCBYTUxIdHRwUmVxdWVzdCBhcyBhIG1hY3JvdGFzay5cbiAgICAgICAgcGF0Y2hYSFIoZ2xvYmFsKTtcbiAgICAgICAgdmFyIFhIUl9UQVNLID0gem9uZVN5bWJvbCQxKCd4aHJUYXNrJyk7XG4gICAgICAgIHZhciBYSFJfU1lOQyA9IHpvbmVTeW1ib2wkMSgneGhyU3luYycpO1xuICAgICAgICB2YXIgWEhSX0xJU1RFTkVSID0gem9uZVN5bWJvbCQxKCd4aHJMaXN0ZW5lcicpO1xuICAgICAgICB2YXIgWEhSX1NDSEVEVUxFRCA9IHpvbmVTeW1ib2wkMSgneGhyU2NoZWR1bGVkJyk7XG4gICAgICAgIHZhciBYSFJfVVJMID0gem9uZVN5bWJvbCQxKCd4aHJVUkwnKTtcbiAgICAgICAgdmFyIFhIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEID0gem9uZVN5bWJvbCQxKCd4aHJFcnJvckJlZm9yZVNjaGVkdWxlZCcpO1xuICAgICAgICBmdW5jdGlvbiBwYXRjaFhIUih3aW5kb3cpIHtcbiAgICAgICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdCA9IHdpbmRvd1snWE1MSHR0cFJlcXVlc3QnXTtcbiAgICAgICAgICAgIGlmICghWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBYTUxIdHRwUmVxdWVzdCBpcyBub3QgYXZhaWxhYmxlIGluIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO1xuICAgICAgICAgICAgZnVuY3Rpb24gZmluZFBlbmRpbmdUYXNrKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbWEhSX1RBU0tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9yaUFkZExpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RQcm90b3R5cGVbWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIHZhciBvcmlSZW1vdmVMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlW1pPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICBpZiAoIW9yaUFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRfMSA9IHdpbmRvd1snWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCddO1xuICAgICAgICAgICAgICAgIGlmIChYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0XzEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRQcm90b3R5cGUgPSBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0XzEucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgICAgICBvcmlBZGRMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRQcm90b3R5cGVbWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgICAgICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlW1pPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIFJFQURZX1NUQVRFX0NIQU5HRSA9ICdyZWFkeXN0YXRlY2hhbmdlJztcbiAgICAgICAgICAgIHZhciBTQ0hFRFVMRUQgPSAnc2NoZWR1bGVkJztcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRhdGEudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0YXJnZXRbWEhSX0xJU1RFTkVSXTtcbiAgICAgICAgICAgICAgICBpZiAoIW9yaUFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyID0gdGFyZ2V0W1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyID0gdGFyZ2V0W1pPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICBvcmlSZW1vdmVMaXN0ZW5lci5jYWxsKHRhcmdldCwgUkVBRFlfU1RBVEVfQ0hBTkdFLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuZXdMaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnJlYWR5U3RhdGUgPT09IHRhcmdldC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzb21ldGltZXMgb24gc29tZSBicm93c2VycyBYTUxIdHRwUmVxdWVzdCB3aWxsIGZpcmUgb25yZWFkeXN0YXRlY2hhbmdlIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlYWR5U3RhdGU9NCBtdWx0aXBsZSB0aW1lcywgc28gd2UgbmVlZCB0byBjaGVjayB0YXNrIHN0YXRlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5hYm9ydGVkICYmIHRhcmdldFtYSFJfU0NIRURVTEVEXSAmJiB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSB4aHIgaGFzIHJlZ2lzdGVyZWQgb25sb2FkIGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhhdCBpcyB0aGUgY2FzZSwgdGhlIHRhc2sgc2hvdWxkIGludm9rZSBhZnRlciBhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmxvYWQgbGlzdGVuZXJzIGZpbmlzaC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHNvIGlmIHRoZSByZXF1ZXN0IGZhaWxlZCB3aXRob3V0IHJlc3BvbnNlIChzdGF0dXMgPSAwKSwgdGhlIGxvYWQgZXZlbnQgaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbGwgbm90IGJlIHRyaWdnZXJlZCwgaW4gdGhhdCBjYXNlLCB3ZSBzaG91bGQgYWxzbyBpbnZva2UgdGhlIHBsYWNlaG9sZGVyIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gY2xvc2UgdGhlIFhNTEh0dHBSZXF1ZXN0OjpzZW5kIG1hY3JvVGFzay5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zODc5NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2FkVGFza3MgPSB0YXJnZXRbWm9uZS5fX3N5bWJvbF9fKCdsb2FkZmFsc2UnKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5zdGF0dXMgIT09IDAgJiYgbG9hZFRhc2tzICYmIGxvYWRUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlJbnZva2VfMSA9IHRhc2suaW52b2tlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gbG9hZCB0aGUgdGFza3MgYWdhaW4sIGJlY2F1c2UgaW4gb3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgbGlzdGVuZXIsIHRoZXkgbWF5IHJlbW92ZSB0aGVtc2VsdmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZFRhc2tzID0gdGFyZ2V0W1pvbmUuX19zeW1ib2xfXygnbG9hZGZhbHNlJyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2FkVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZFRhc2tzW2ldID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFzay5zdGF0ZSA9PT0gU0NIRURVTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpSW52b2tlXzEuY2FsbCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIG9jY3VycyB3aGVuIHhoci5zZW5kKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRURdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3JpQWRkTGlzdGVuZXIuY2FsbCh0YXJnZXQsIFJFQURZX1NUQVRFX0NIQU5HRSwgbmV3TGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZWRUYXNrID0gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0b3JlZFRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W1hIUl9UQVNLXSA9IHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbmROYXRpdmUuYXBwbHkodGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBwbGFjZWhvbGRlckNhbGxiYWNrKCkgeyB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhclRhc2sodGFzaykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgICAgIC8vIE5vdGUgLSBpZGVhbGx5LCB3ZSB3b3VsZCBjYWxsIGRhdGEudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIgaGVyZSwgYnV0IGl0J3MgdG9vIGxhdGVcbiAgICAgICAgICAgICAgICAvLyB0byBwcmV2ZW50IGl0IGZyb20gZmlyaW5nLiBTbyBpbnN0ZWFkLCB3ZSBzdG9yZSBpbmZvIGZvciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICAgICAgICAgICAgZGF0YS5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWJvcnROYXRpdmUuYXBwbHkoZGF0YS50YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3Blbk5hdGl2ZSA9IHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnb3BlbicsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgc2VsZltYSFJfU1lOQ10gPSBhcmdzWzJdID09IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlbGZbWEhSX1VSTF0gPSBhcmdzWzFdO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcGVuTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfTsgfSk7XG4gICAgICAgICAgICB2YXIgWE1MSFRUUFJFUVVFU1RfU09VUkNFID0gJ1hNTEh0dHBSZXF1ZXN0LnNlbmQnO1xuICAgICAgICAgICAgdmFyIGZldGNoVGFza0Fib3J0aW5nID0gem9uZVN5bWJvbCQxKCdmZXRjaFRhc2tBYm9ydGluZycpO1xuICAgICAgICAgICAgdmFyIGZldGNoVGFza1NjaGVkdWxpbmcgPSB6b25lU3ltYm9sJDEoJ2ZldGNoVGFza1NjaGVkdWxpbmcnKTtcbiAgICAgICAgICAgIHZhciBzZW5kTmF0aXZlID0gcGF0Y2hNZXRob2QoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsICdzZW5kJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoWm9uZS5jdXJyZW50W2ZldGNoVGFza1NjaGVkdWxpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGEgZmV0Y2ggaXMgc2NoZWR1bGluZywgc28gd2UgYXJlIHVzaW5nIHhociB0byBwb2x5ZmlsbCBmZXRjaFxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgYmVjYXVzZSB3ZSBhbHJlYWR5IHNjaGVkdWxlIG1hY3JvVGFzayBmb3IgZmV0Y2gsIHdlIHNob3VsZFxuICAgICAgICAgICAgICAgICAgICAvLyBub3Qgc2NoZWR1bGUgYSBtYWNyb1Rhc2sgZm9yIHhociBhZ2FpblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VuZE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGZbWEhSX1NZTkNdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBYSFIgaXMgc3luYyB0aGVyZSBpcyBubyB0YXNrIHRvIHNjaGVkdWxlLCBqdXN0IGV4ZWN1dGUgdGhlIGNvZGUuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZW5kTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHRhcmdldDogc2VsZiwgdXJsOiBzZWxmW1hIUl9VUkxdLCBpc1BlcmlvZGljOiBmYWxzZSwgYXJnczogYXJncywgYWJvcnRlZDogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShYTUxIVFRQUkVRVUVTVF9TT1VSQ0UsIHBsYWNlaG9sZGVyQ2FsbGJhY2ssIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYgJiYgc2VsZltYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPT09IHRydWUgJiYgIW9wdGlvbnMuYWJvcnRlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zdGF0ZSA9PT0gU0NIRURVTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB4aHIgcmVxdWVzdCB0aHJvdyBlcnJvciB3aGVuIHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpbnZva2UgdGFzayBpbnN0ZWFkIG9mIGxlYXZpbmcgYSBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlbmRpbmcgbWFjcm9UYXNrXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTsgfSk7XG4gICAgICAgICAgICB2YXIgYWJvcnROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ2Fib3J0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFzayA9IGZpbmRQZW5kaW5nVGFzayhzZWxmKTtcbiAgICAgICAgICAgICAgICBpZiAodGFzayAmJiB0eXBlb2YgdGFzay50eXBlID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgY29tcGxldGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGJlZW4gYWJvcnRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICAgICAgLy8gRml4ICM1NjksIGNhbGwgYWJvcnQgbXVsdGlwbGUgdGltZXMgYmVmb3JlIGRvbmUgd2lsbCBjYXVzZVxuICAgICAgICAgICAgICAgICAgICAvLyBtYWNyb1Rhc2sgdGFzayBjb3VudCBiZSBuZWdhdGl2ZSBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suY2FuY2VsRm4gPT0gbnVsbCB8fCAodGFzay5kYXRhICYmIHRhc2suZGF0YS5hYm9ydGVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChab25lLmN1cnJlbnRbZmV0Y2hUYXNrQWJvcnRpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhYm9ydCBpcyBjYWxsZWQgZnJvbSBmZXRjaCBwb2x5ZmlsbCwgd2UgbmVlZCB0byBjYWxsIG5hdGl2ZSBhYm9ydCBvZiBYSFIuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhYm9ydE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgdHJ5aW5nIHRvIGFib3J0IGFuIFhIUiB3aGljaCBoYXMgbm90IHlldCBiZWVuIHNlbnQsIHNvIHRoZXJlIGlzIG5vXG4gICAgICAgICAgICAgICAgLy8gdGFza1xuICAgICAgICAgICAgICAgIC8vIHRvIGNhbmNlbC4gRG8gbm90aGluZy5cbiAgICAgICAgICAgIH07IH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ2dlb2xvY2F0aW9uJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAvLy8gR0VPX0xPQ0FUSU9OXG4gICAgICAgIGlmIChnbG9iYWxbJ25hdmlnYXRvciddICYmIGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICAgIHBhdGNoUHJvdG90eXBlKGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24sIFsnZ2V0Q3VycmVudFBvc2l0aW9uJywgJ3dhdGNoUG9zaXRpb24nXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnUHJvbWlzZVJlamVjdGlvbkV2ZW50JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSkge1xuICAgICAgICAvLyBoYW5kbGUgdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcihldnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRUYXNrcyA9IGZpbmRFdmVudFRhc2tzKGdsb2JhbCwgZXZ0TmFtZSk7XG4gICAgICAgICAgICAgICAgZXZlbnRUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93cyBoYXMgYWRkZWQgdW5oYW5kbGVkcmVqZWN0aW9uIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyaWdnZXIgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIHZhciBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPSBnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddO1xuICAgICAgICAgICAgICAgICAgICBpZiAoUHJvbWlzZVJlamVjdGlvbkV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZ0ID0gbmV3IFByb21pc2VSZWplY3Rpb25FdmVudChldnROYW1lLCB7IHByb21pc2U6IGUucHJvbWlzZSwgcmVhc29uOiBlLnJlamVjdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFzay5pbnZva2UoZXZ0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsWydQcm9taXNlUmVqZWN0aW9uRXZlbnQnXSkge1xuICAgICAgICAgICAgWm9uZVt6b25lU3ltYm9sJDEoJ3VuaGFuZGxlZFByb21pc2VSZWplY3Rpb25IYW5kbGVyJyldID1cbiAgICAgICAgICAgICAgICBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicpO1xuICAgICAgICAgICAgWm9uZVt6b25lU3ltYm9sJDEoJ3JlamVjdGlvbkhhbmRsZWRIYW5kbGVyJyldID1cbiAgICAgICAgICAgICAgICBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoJ3JlamVjdGlvbmhhbmRsZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkpO1xuIl0sIm5hbWVzIjpbIl9fc3ByZWFkQXJyYXkiLCJ0byIsImZyb20iLCJwYWNrIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiaSIsImwiLCJhciIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiY29uY2F0IiwiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsImdsb2JhbCIsInBlcmZvcm1hbmNlIiwibWFyayIsIm5hbWUiLCJwZXJmb3JtYW5jZU1lYXN1cmUiLCJsYWJlbCIsInN5bWJvbFByZWZpeCIsIl9fc3ltYm9sX18iLCJjaGVja0R1cGxpY2F0ZSIsIkVycm9yIiwiWm9uZSIsInBhcmVudCIsInpvbmVTcGVjIiwiX3BhcmVudCIsIl9uYW1lIiwiX3Byb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiX3pvbmVEZWxlZ2F0ZSIsIl9ab25lRGVsZWdhdGUiLCJhc3NlcnRab25lUGF0Y2hlZCIsInBhdGNoZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInpvbmUiLCJjdXJyZW50IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIl9jdXJyZW50Wm9uZUZyYW1lIiwiX2N1cnJlbnRUYXNrIiwiX19sb2FkX3BhdGNoIiwiZm4iLCJpZ25vcmVEdXBsaWNhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInBlcmZOYW1lIiwiX2FwaSIsImtleSIsImdldFpvbmVXaXRoIiwiZm9yayIsIndyYXAiLCJjYWxsYmFjayIsInNvdXJjZSIsIl9jYWxsYmFjayIsImludGVyY2VwdCIsInJ1bkd1YXJkZWQiLCJydW4iLCJhcHBseVRoaXMiLCJhcHBseUFyZ3MiLCJpbnZva2UiLCJlcnJvciIsImhhbmRsZUVycm9yIiwicnVuVGFzayIsInRhc2siLCJOT19aT05FIiwic3RhdGUiLCJub3RTY2hlZHVsZWQiLCJ0eXBlIiwiZXZlbnRUYXNrIiwibWFjcm9UYXNrIiwicmVFbnRyeUd1YXJkIiwicnVubmluZyIsIl90cmFuc2l0aW9uVG8iLCJzY2hlZHVsZWQiLCJydW5Db3VudCIsInByZXZpb3VzVGFzayIsImRhdGEiLCJpc1BlcmlvZGljIiwiY2FuY2VsRm4iLCJ1bmRlZmluZWQiLCJpbnZva2VUYXNrIiwidW5rbm93biIsIl91cGRhdGVUYXNrQ291bnQiLCJzY2hlZHVsZVRhc2siLCJuZXdab25lIiwic2NoZWR1bGluZyIsInpvbmVEZWxlZ2F0ZXMiLCJfem9uZURlbGVnYXRlcyIsIl96b25lIiwiZXJyIiwic2NoZWR1bGVNaWNyb1Rhc2siLCJjdXN0b21TY2hlZHVsZSIsIlpvbmVUYXNrIiwibWljcm9UYXNrIiwic2NoZWR1bGVNYWNyb1Rhc2siLCJjdXN0b21DYW5jZWwiLCJzY2hlZHVsZUV2ZW50VGFzayIsImNhbmNlbFRhc2siLCJjYW5jZWxpbmciLCJjb3VudCIsIkRFTEVHQVRFX1pTIiwib25IYXNUYXNrIiwiZGVsZWdhdGUiLCJfIiwidGFyZ2V0IiwiaGFzVGFza1N0YXRlIiwiaGFzVGFzayIsIm9uU2NoZWR1bGVUYXNrIiwib25JbnZva2VUYXNrIiwib25DYW5jZWxUYXNrIiwicGFyZW50RGVsZWdhdGUiLCJfdGFza0NvdW50cyIsIl9wYXJlbnREZWxlZ2F0ZSIsIl9mb3JrWlMiLCJvbkZvcmsiLCJfZm9ya0RsZ3QiLCJfZm9ya0N1cnJab25lIiwiX2ludGVyY2VwdFpTIiwib25JbnRlcmNlcHQiLCJfaW50ZXJjZXB0RGxndCIsIl9pbnRlcmNlcHRDdXJyWm9uZSIsIl9pbnZva2VaUyIsIm9uSW52b2tlIiwiX2ludm9rZURsZ3QiLCJfaW52b2tlQ3VyclpvbmUiLCJfaGFuZGxlRXJyb3JaUyIsIm9uSGFuZGxlRXJyb3IiLCJfaGFuZGxlRXJyb3JEbGd0IiwiX2hhbmRsZUVycm9yQ3VyclpvbmUiLCJfc2NoZWR1bGVUYXNrWlMiLCJfc2NoZWR1bGVUYXNrRGxndCIsIl9zY2hlZHVsZVRhc2tDdXJyWm9uZSIsIl9pbnZva2VUYXNrWlMiLCJfaW52b2tlVGFza0RsZ3QiLCJfaW52b2tlVGFza0N1cnJab25lIiwiX2NhbmNlbFRhc2taUyIsIl9jYW5jZWxUYXNrRGxndCIsIl9jYW5jZWxUYXNrQ3VyclpvbmUiLCJfaGFzVGFza1pTIiwiX2hhc1Rhc2tEbGd0IiwiX2hhc1Rhc2tEbGd0T3duZXIiLCJfaGFzVGFza0N1cnJab25lIiwiem9uZVNwZWNIYXNUYXNrIiwicGFyZW50SGFzVGFzayIsInRhcmdldFpvbmUiLCJhcHBseSIsInJldHVyblRhc2siLCJwdXNoIiwic2NoZWR1bGVGbiIsInZhbHVlIiwiaXNFbXB0eSIsImNvdW50cyIsInByZXYiLCJuZXh0IiwiY2hhbmdlIiwib3B0aW9ucyIsIl9zdGF0ZSIsInNlbGYiLCJ1c2VHIiwiYXJncyIsIl9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMiLCJkcmFpbk1pY3JvVGFza1F1ZXVlIiwiY2FuY2VsU2NoZWR1bGVSZXF1ZXN0IiwidG9TdGF0ZSIsImZyb21TdGF0ZTEiLCJmcm9tU3RhdGUyIiwidG9TdHJpbmciLCJoYW5kbGVJZCIsInRvSlNPTiIsInN5bWJvbFNldFRpbWVvdXQiLCJzeW1ib2xQcm9taXNlIiwic3ltYm9sVGhlbiIsIl9taWNyb1Rhc2tRdWV1ZSIsIl9pc0RyYWluaW5nTWljcm90YXNrUXVldWUiLCJuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UiLCJuYXRpdmVTY2hlZHVsZU1pY3JvVGFzayIsImZ1bmMiLCJyZXNvbHZlIiwibmF0aXZlVGhlbiIsInF1ZXVlIiwib25VbmhhbmRsZWRFcnJvciIsIm1pY3JvdGFza0RyYWluRG9uZSIsInN5bWJvbCIsImN1cnJlbnRab25lRnJhbWUiLCJub29wIiwic2hvd1VuY2F1Z2h0RXJyb3IiLCJwYXRjaEV2ZW50VGFyZ2V0IiwicGF0Y2hPblByb3BlcnRpZXMiLCJwYXRjaE1ldGhvZCIsImJpbmRBcmd1bWVudHMiLCJwYXRjaFRoZW4iLCJwYXRjaE1hY3JvVGFzayIsInBhdGNoRXZlbnRQcm90b3R5cGUiLCJpc0lFT3JFZGdlIiwiZ2V0R2xvYmFsT2JqZWN0cyIsIk9iamVjdERlZmluZVByb3BlcnR5IiwiT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0Q3JlYXRlIiwiQXJyYXlTbGljZSIsInBhdGNoQ2xhc3MiLCJ3cmFwV2l0aEN1cnJlbnRab25lIiwiZmlsdGVyUHJvcGVydGllcyIsImF0dGFjaE9yaWdpblRvUGF0Y2hlZCIsIl9yZWRlZmluZVByb3BlcnR5IiwicGF0Y2hDYWxsYmFja3MiLCJ3aW5kb3ciLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3RHZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiY3JlYXRlIiwiQUREX0VWRU5UX0xJU1RFTkVSX1NUUiIsIlJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIiLCJaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVIiLCJaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVIiLCJUUlVFX1NUUiIsIkZBTFNFX1NUUiIsIlpPTkVfU1lNQk9MX1BSRUZJWCIsInNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lIiwiem9uZVN5bWJvbCQxIiwiaXNXaW5kb3dFeGlzdHMiLCJpbnRlcm5hbFdpbmRvdyIsIl9nbG9iYWwiLCJSRU1PVkVfQVRUUklCVVRFIiwicGF0Y2hQcm90b3R5cGUiLCJmbk5hbWVzIiwiY29uc3RydWN0b3IiLCJfbG9vcF8xIiwibmFtZV8xIiwicHJvdG90eXBlRGVzYyIsImlzUHJvcGVydHlXcml0YWJsZSIsInBhdGNoZWQiLCJwcm9wZXJ0eURlc2MiLCJ3cml0YWJsZSIsInNldCIsImlzV2ViV29ya2VyIiwiV29ya2VyR2xvYmFsU2NvcGUiLCJpc05vZGUiLCJwcm9jZXNzIiwiaXNCcm93c2VyIiwiaXNNaXgiLCJ6b25lU3ltYm9sRXZlbnROYW1lcyQxIiwid3JhcEZuIiwiZXZlbnQiLCJldmVudE5hbWVTeW1ib2wiLCJsaXN0ZW5lciIsInJlc3VsdCIsImVycm9yRXZlbnQiLCJtZXNzYWdlIiwiZmlsZW5hbWUiLCJsaW5lbm8iLCJjb2xubyIsInByZXZlbnREZWZhdWx0IiwicGF0Y2hQcm9wZXJ0eSIsIm9iaiIsInByb3AiLCJkZXNjIiwib25Qcm9wUGF0Y2hlZFN5bWJvbCIsIm9yaWdpbmFsRGVzY0dldCIsIm9yaWdpbmFsRGVzY1NldCIsImV2ZW50TmFtZSIsIm5ld1ZhbHVlIiwicHJldmlvdXNWYWx1ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQXR0cmlidXRlIiwib25Qcm9wZXJ0aWVzIiwiaiIsIm9yaWdpbmFsSW5zdGFuY2VLZXkiLCJjbGFzc05hbWUiLCJPcmlnaW5hbENsYXNzIiwiYSIsImluc3RhbmNlIiwicGF0Y2hGbiIsInByb3RvIiwiZGVsZWdhdGVOYW1lIiwicGF0Y2hEZWxlZ2F0ZV8xIiwiZnVuY05hbWUiLCJtZXRhQ3JlYXRvciIsInNldE5hdGl2ZSIsImNiSWR4IiwibWV0YSIsIm9yaWdpbmFsIiwiaXNEZXRlY3RlZElFT3JFZGdlIiwiaWVPckVkZ2UiLCJpc0lFIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiYXBpIiwicmVhZGFibGVPYmplY3RUb1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJfdW5jYXVnaHRQcm9taXNlRXJyb3JzIiwiaXNEaXNhYmxlV3JhcHBpbmdVbmNhdWdodFByb21pc2VSZWplY3Rpb24iLCJjcmVhdGlvblRyYWNlIiwiZSIsInJlamVjdGlvbiIsImNvbnNvbGUiLCJzdGFjayIsIl9sb29wXzIiLCJ1bmNhdWdodFByb21pc2VFcnJvciIsInNoaWZ0IiwidGhyb3dPcmlnaW5hbCIsImhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbiIsIlVOSEFORExFRF9QUk9NSVNFX1JFSkVDVElPTl9IQU5ETEVSX1NZTUJPTCIsImhhbmRsZXIiLCJpc1RoZW5hYmxlIiwidGhlbiIsImZvcndhcmRSZXNvbHV0aW9uIiwiZm9yd2FyZFJlamVjdGlvbiIsIlpvbmVBd2FyZVByb21pc2UiLCJyZWplY3QiLCJzeW1ib2xTdGF0ZSIsInN5bWJvbFZhbHVlIiwic3ltYm9sRmluYWxseSIsInN5bWJvbFBhcmVudFByb21pc2VWYWx1ZSIsInN5bWJvbFBhcmVudFByb21pc2VTdGF0ZSIsIlVOUkVTT0xWRUQiLCJSRVNPTFZFRCIsIlJFSkVDVEVEIiwiUkVKRUNURURfTk9fQ0FUQ0giLCJtYWtlUmVzb2x2ZXIiLCJwcm9taXNlIiwidiIsInJlc29sdmVQcm9taXNlIiwib25jZSIsIndhc0NhbGxlZCIsIndyYXBwZXIiLCJ3cmFwcGVkRnVuY3Rpb24iLCJUWVBFX0VSUk9SIiwiQ1VSUkVOVF9UQVNLX1RSQUNFX1NZTUJPTCIsIm9uY2VXcmFwcGVyIiwiVHlwZUVycm9yIiwiY2xlYXJSZWplY3RlZE5vQ2F0Y2giLCJ0cmFjZSIsImN1cnJlbnRUYXNrIiwic2NoZWR1bGVSZXNvbHZlT3JSZWplY3QiLCJSRUpFQ1RJT05fSEFORExFRF9IQU5ETEVSIiwic3BsaWNlIiwiY2hhaW5Qcm9taXNlIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicHJvbWlzZVN0YXRlIiwicGFyZW50UHJvbWlzZVZhbHVlIiwiaXNGaW5hbGx5UHJvbWlzZSIsIlpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkciLCJBZ2dyZWdhdGVFcnJvciIsImV4ZWN1dG9yIiwiYW55IiwidmFsdWVzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJQcm9taXNlIiwicHJvbWlzZXMiLCJfaSIsInZhbHVlc18xIiwiZmluaXNoZWQiLCJlcnJvcnMiLCJyYWNlIiwicmVzIiwicmVqIiwib25SZXNvbHZlIiwib25SZWplY3QiLCJ2YWx1ZXNfMiIsImFsbCIsImFsbFdpdGhDYWxsYmFjayIsImFsbFNldHRsZWQiLCJQIiwidGhlbkNhbGxiYWNrIiwic3RhdHVzIiwiZXJyb3JDYWxsYmFjayIsInJlYXNvbiIsInVucmVzb2x2ZWRDb3VudCIsInZhbHVlSW5kZXgiLCJyZXNvbHZlZFZhbHVlcyIsIl9sb29wXzMiLCJ0aGlzXzEiLCJjdXJWYWx1ZUluZGV4IiwidGhlbkVyciIsInZhbHVlc18zIiwidG9TdHJpbmdUYWciLCJzcGVjaWVzIiwiX2EiLCJDIiwiY2F0Y2giLCJmaW5hbGx5Iiwib25GaW5hbGx5IiwiTmF0aXZlUHJvbWlzZSIsInN5bWJvbFRoZW5QYXRjaGVkIiwiQ3RvciIsIm9yaWdpbmFsVGhlbiIsIl90aGlzIiwid3JhcHBlZCIsInpvbmVpZnkiLCJyZXN1bHRQcm9taXNlIiwiY3RvciIsIm9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZyIsIkZ1bmN0aW9uIiwiT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MIiwiUFJPTUlTRV9TWU1CT0wiLCJFUlJPUl9TWU1CT0wiLCJuZXdGdW5jdGlvblRvU3RyaW5nIiwib3JpZ2luYWxEZWxlZ2F0ZSIsIm5hdGl2ZVByb21pc2UiLCJuYXRpdmVFcnJvciIsIm9yaWdpbmFsT2JqZWN0VG9TdHJpbmciLCJQUk9NSVNFX09CSkVDVF9UT19TVFJJTkciLCJwYXNzaXZlU3VwcG9ydGVkIiwiT1BUSU1JWkVEX1pPTkVfRVZFTlRfVEFTS19EQVRBIiwiem9uZVN5bWJvbEV2ZW50TmFtZXMiLCJnbG9iYWxTb3VyY2VzIiwiRVZFTlRfTkFNRV9TWU1CT0xfUkVHWCIsIlJlZ0V4cCIsIklNTUVESUFURV9QUk9QQUdBVElPTl9TWU1CT0wiLCJwcmVwYXJlRXZlbnROYW1lcyIsImV2ZW50TmFtZVRvU3RyaW5nIiwiZmFsc2VFdmVudE5hbWUiLCJ0cnVlRXZlbnROYW1lIiwic3ltYm9sQ2FwdHVyZSIsImFwaXMiLCJwYXRjaE9wdGlvbnMiLCJBRERfRVZFTlRfTElTVEVORVIiLCJhZGQiLCJSRU1PVkVfRVZFTlRfTElTVEVORVIiLCJybSIsIkxJU1RFTkVSU19FVkVOVF9MSVNURU5FUiIsImxpc3RlbmVycyIsIlJFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSIiwicm1BbGwiLCJ6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lciIsIkFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UiLCJQUkVQRU5EX0VWRU5UX0xJU1RFTkVSIiwiUFJFUEVORF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UiLCJpc1JlbW92ZWQiLCJoYW5kbGVFdmVudCIsImRlbGVnYXRlXzEiLCJnbG9iYWxDYWxsYmFjayIsImNvbnRleHQiLCJpc0NhcHR1cmUiLCJ0YXNrcyIsImNvcHlUYXNrcyIsIl9sb29wXzQiLCJnbG9iYWxab25lQXdhcmVDYWxsYmFjayIsImdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayIsInBhdGNoRXZlbnRUYXJnZXRNZXRob2RzIiwidXNlR2xvYmFsQ2FsbGJhY2siLCJ2YWxpZGF0ZUhhbmRsZXIiLCJ2aCIsImNoa0R1cCIsInJldHVyblRhcmdldCIsInJ0IiwidGFza0RhdGEiLCJuYXRpdmVBZGRFdmVudExpc3RlbmVyIiwibmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5hdGl2ZUxpc3RlbmVycyIsIm5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycyIsIm5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyIiwicHJlcGVuZCIsImJ1aWxkRXZlbnRMaXN0ZW5lck9wdGlvbnMiLCJwYXNzaXZlIiwiY2FwdHVyZSIsImFzc2lnbiIsImN1c3RvbVNjaGVkdWxlR2xvYmFsIiwiaXNFeGlzdGluZyIsImN1c3RvbUNhbmNlbEdsb2JhbCIsInN5bWJvbEV2ZW50TmFtZXMiLCJzeW1ib2xFdmVudE5hbWUiLCJleGlzdGluZ1Rhc2tzIiwiZXhpc3RpbmdUYXNrIiwiYWxsUmVtb3ZlZCIsImN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsIiwiY3VzdG9tU2NoZWR1bGVQcmVwZW5kIiwiY3VzdG9tQ2FuY2VsTm9uR2xvYmFsIiwiY29tcGFyZVRhc2tDYWxsYmFja1ZzRGVsZWdhdGUiLCJ0eXBlT2ZEZWxlZ2F0ZSIsImNvbXBhcmUiLCJkaWZmIiwidW5wYXRjaGVkRXZlbnRzIiwicGFzc2l2ZUV2ZW50cyIsIm1ha2VBZGRMaXN0ZW5lciIsIm5hdGl2ZUxpc3RlbmVyIiwiYWRkU291cmNlIiwiY3VzdG9tU2NoZWR1bGVGbiIsImN1c3RvbUNhbmNlbEZuIiwidHJhbnNmZXJFdmVudE5hbWUiLCJpc0hhbmRsZUV2ZW50IiwiY29uc3RydWN0b3JOYW1lIiwidGFyZ2V0U291cmNlIiwidW5zaGlmdCIsIm9uUHJvcGVydHlTeW1ib2wiLCJmaW5kRXZlbnRUYXNrcyIsImtleXMiLCJtYXRjaCIsImV4ZWMiLCJldnROYW1lIiwic3ltYm9sQ2FwdHVyZUV2ZW50TmFtZSIsImNhcHR1cmVUYXNrcyIsInJlbW92ZVRhc2tzIiwicmVzdWx0cyIsImZvdW5kVGFza3MiLCJjYXB0dXJlRmFsc2VUYXNrcyIsImNhcHR1cmVUcnVlVGFza3MiLCJFdmVudCIsInRhcmdldE5hbWUiLCJtZXRob2QiLCJjYWxsYmFja3MiLCJuYXRpdmVEZWxlZ2F0ZSIsIm9wdHMiLCJmb3JFYWNoIiwiZGVzY3JpcHRvciIsImlnbm9yZVByb3BlcnRpZXMiLCJ0aXAiLCJmaWx0ZXIiLCJpcCIsInRhcmdldElnbm9yZVByb3BlcnRpZXMiLCJvcCIsInBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyZWRQcm9wZXJ0aWVzIiwiZ2V0T25FdmVudE5hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInN0YXJ0c1dpdGgiLCJtYXAiLCJzdWJzdHJpbmciLCJwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaCIsInBhdGNoVGFyZ2V0cyIsImludGVybmFsV2luZG93XzEiLCJpZ25vcmVFcnJvclByb3BlcnRpZXMiLCJldmVudE5hbWVzIiwiU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFMiLCJTWU1CT0xfVU5QQVRDSEVEX0VWRU5UUyIsInpvbmVTeW1ib2wiLCJfZGVmaW5lUHJvcGVydHkiLCJfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX2NyZWF0ZSIsInVuY29uZmlndXJhYmxlc0tleSIsInByb3BlcnR5UGF0Y2giLCJpc1VuY29uZmlndXJhYmxlIiwib3JpZ2luYWxDb25maWd1cmFibGVGbGFnIiwicmV3cml0ZURlc2NyaXB0b3IiLCJfdHJ5RGVmaW5lUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJfYiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bSIsInByb3BlcnRpZXNPYmplY3QiLCJpc0Zyb3plbiIsInN3YWxsb3dFcnJvciIsImRlc2NKc29uIiwibG9nIiwiZXZlbnRUYXJnZXRMZWdhY3lQYXRjaCIsIldURl9JU1NVRV81NTUiLCJOT19FVkVOVF9UQVJHRVQiLCJzcGxpdCIsIkVWRU5UX1RBUkdFVCIsImlzV3RmIiwiV1RGX0lTU1VFXzU1NV9BUlJBWSIsImlzRGlzYWJsZUlFQ2hlY2siLCJpc0VuYWJsZUNyb3NzQ29udGV4dENoZWNrIiwiRlVOQ1RJT05fV1JBUFBFUiIsIkJST1dTRVJfVE9PTFMiLCJwb2ludGVyRXZlbnRzTWFwIiwidGFyZ2V0cyIsImNoZWNrSUVBbmRDcm9zc0NvbnRleHQiLCJ0ZXN0U3RyaW5nIiwiYXBpVHlwZXMiLCJwb2ludGVyRXZlbnROYW1lIiwiV1MiLCJXZWJTb2NrZXQiLCJFdmVudFRhcmdldCIsIngiLCJ5Iiwic29ja2V0IiwicHJveHlTb2NrZXQiLCJwcm94eVNvY2tldFByb3RvIiwib25tZXNzYWdlRGVzYyIsInByb3BOYW1lIiwicHJvcGVydHlTeW1ib2wiLCJnbG9iYWxXZWJTb2NrZXQiLCJwcm9wZXJ0eURlc2NyaXB0b3JMZWdhY3lQYXRjaCIsImNhblBhdGNoVmlhUHJvcGVydHlEZXNjcmlwdG9yIiwic3VwcG9ydHNXZWJTb2NrZXQiLCJwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cyIsIkhUTUxFbGVtZW50IiwiRWxlbWVudCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9uY2xpY2siLCJYTUxIdHRwUmVxdWVzdCIsIk9OX1JFQURZX1NUQVRFX0NIQU5HRSIsIlhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlIiwieGhyRGVzYyIsInJlcSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIlNZTUJPTF9GQUtFX09OUkVBRFlTVEFURUNIQU5HRV8xIiwiZGV0ZWN0RnVuYyIsImdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE5hbWVzIiwiZG9jdW1lbnRFdmVudE5hbWVzIiwid2luZG93RXZlbnROYW1lcyIsImh0bWxFbGVtZW50RXZlbnROYW1lcyIsImllRWxlbWVudEV2ZW50TmFtZXMiLCJ3ZWJnbEV2ZW50TmFtZXMiLCJmb3JtRXZlbnROYW1lcyIsImRldGFpbEV2ZW50TmFtZXMiLCJ1bmJvdW5kS2V5IiwiX2xvb3BfNSIsInByb3BlcnR5Iiwib25wcm9wZXJ0eSIsImVsdCIsImJvdW5kIiwicGFyZW50RWxlbWVudCIsInJlZ2lzdGVyRWxlbWVudFBhdGNoIiwidGFza1N5bWJvbCIsInBhdGNoVGltZXIiLCJzZXROYW1lIiwiY2FuY2VsTmFtZSIsIm5hbWVTdWZmaXgiLCJjbGVhck5hdGl2ZSIsInRhc2tzQnlIYW5kbGVJZCIsImNsZWFyVGFzayIsIm9wdGlvbnNfMSIsImRlbGF5IiwiY2FsbGJhY2tfMSIsInRpbWVyIiwiaGFuZGxlIiwicmVmIiwidW5yZWYiLCJiaW5kIiwiaWQiLCJwYXRjaEN1c3RvbUVsZW1lbnRzIiwiY3VzdG9tRWxlbWVudHMiLCJldmVudFRhcmdldFBhdGNoIiwicGF0Y2hFdmVudCIsImxlZ2FjeVBhdGNoIiwiY2xlYXIiLCJibG9ja2luZ01ldGhvZHMiLCJuYW1lXzIiLCJzIiwiWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCIsInBhdGNoWEhSIiwiWEhSX1RBU0siLCJYSFJfU1lOQyIsIlhIUl9MSVNURU5FUiIsIlhIUl9TQ0hFRFVMRUQiLCJYSFJfVVJMIiwiWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRUQiLCJmaW5kUGVuZGluZ1Rhc2siLCJvcmlBZGRMaXN0ZW5lciIsIm9yaVJlbW92ZUxpc3RlbmVyIiwiWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldF8xIiwiWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZSIsIlJFQURZX1NUQVRFX0NIQU5HRSIsIlNDSEVEVUxFRCIsIm5ld0xpc3RlbmVyIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJhYm9ydGVkIiwibG9hZFRhc2tzIiwib3JpSW52b2tlXzEiLCJzdG9yZWRUYXNrIiwic2VuZE5hdGl2ZSIsInBsYWNlaG9sZGVyQ2FsbGJhY2siLCJhYm9ydE5hdGl2ZSIsIm9wZW5OYXRpdmUiLCJYTUxIVFRQUkVRVUVTVF9TT1VSQ0UiLCJmZXRjaFRhc2tBYm9ydGluZyIsImZldGNoVGFza1NjaGVkdWxpbmciLCJ1cmwiLCJnZW9sb2NhdGlvbiIsImZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlciIsImV2ZW50VGFza3MiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJldnQiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzJdfQ==