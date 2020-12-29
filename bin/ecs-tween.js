var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var es;
(function (es) {
    var LoopType;
    (function (LoopType) {
        LoopType[LoopType["none"] = 0] = "none";
        LoopType[LoopType["restartFromBeginning"] = 1] = "restartFromBeginning";
        LoopType[LoopType["pingpong"] = 2] = "pingpong";
    })(LoopType = es.LoopType || (es.LoopType = {}));
    var TweenState;
    (function (TweenState) {
        TweenState[TweenState["running"] = 0] = "running";
        TweenState[TweenState["paused"] = 1] = "paused";
        TweenState[TweenState["complete"] = 2] = "complete";
    })(TweenState = es.TweenState || (es.TweenState = {}));
    var Tween = (function () {
        function Tween() {
            this._shouldRecycleTween = true;
            this._tweenState = TweenState.complete;
            this._timeScale = 1;
        }
        Tween.prototype.setEaseType = function (easeType) {
            this._easeType = easeType;
            return this;
        };
        Tween.prototype.setDelay = function (delay) {
            this._delay = delay;
            this._elapsedTime = -this._delay;
            return this;
        };
        Tween.prototype.setDuration = function (duration) {
            this._duration = duration;
            return this;
        };
        Tween.prototype.setTimeScale = function (timeSclae) {
            this._timeScale = timeSclae;
            return this;
        };
        Tween.prototype.setIsTimeScaleIndependent = function () {
            this._isTimeScaleIndependent = true;
            return this;
        };
        Tween.prototype.setCompletionHandler = function (completeHandler) {
            this._completionHandler = completeHandler;
            return this;
        };
        Tween.prototype.setLoops = function (loopType, loops, delayBetweenLoops) {
            if (loops === void 0) { loops = 1; }
            if (delayBetweenLoops === void 0) { delayBetweenLoops = 0; }
            this._loopType = loopType;
            this._delayBetweenLoops = delayBetweenLoops;
            if (loops < 0)
                loops = -1;
            if (loopType == LoopType.pingpong)
                loops = loops * 2;
            this._loops = loops;
            return this;
        };
        Tween.prototype.setLoopCompletionHanlder = function (loopCompleteHandler) {
            this._loopCompleteHandler = loopCompleteHandler;
            return this;
        };
        Tween.prototype.setFrom = function (from) {
            this._isFromValueOverridden = true;
            this._fromValue = from;
            return this;
        };
        Tween.prototype.prepareForReuse = function (from, to, duration) {
            this.initialize(this._target, to, duration);
            return this;
        };
        Tween.prototype.setRecycleTween = function (shouldRecycleTween) {
            this._shouldRecycleTween = shouldRecycleTween;
            return this;
        };
        Tween.prototype.setContext = function (context) {
            this.context = context;
            return this;
        };
        Tween.prototype.setNextTween = function (nextTween) {
            this._nextTween = nextTween;
            return this;
        };
        Tween.prototype.tick = function () {
            if (this._tweenState == TweenState.paused)
                return false;
            var elapsedTimeExcess = 0;
            if (!this._isRunningInReverse && this._elapsedTime >= this._duration) {
                elapsedTimeExcess = this._elapsedTime - this._duration;
                this._elapsedTime = this._duration;
                this._tweenState = TweenState.complete;
            }
            else if (this._isRunningInReverse && this._elapsedTime <= 0) {
                elapsedTimeExcess = 0 - this._elapsedTime;
                this._elapsedTime = 0;
                this._tweenState = TweenState.complete;
            }
            if (this._elapsedTime >= 0 && this._elapsedTime <= this._duration) {
                this.updateValue();
            }
            if (this._loopType != LoopType.none && this._tweenState == TweenState.complete && this._loops != 0) {
                this.handleLooping(elapsedTimeExcess);
            }
            var deltaTime = this._isTimeScaleIndependent ? es.Time.unscaledDeltaTime : es.Time.deltaTime;
            deltaTime *= this._timeScale;
            if (this._isRunningInReverse)
                this._elapsedTime -= deltaTime;
            else
                this._elapsedTime += deltaTime;
            if (this._tweenState == TweenState.complete) {
                this._completionHandler && this._completionHandler(this);
                if (this._nextTween != null) {
                    this._nextTween.start();
                    this._nextTween = null;
                }
                return true;
            }
            return false;
        };
        Tween.prototype.recycleSelf = function () {
            if (this._shouldRecycleTween) {
                this._target = null;
                this._nextTween = null;
            }
        };
        Tween.prototype.isRunning = function () {
            return this._tweenState == TweenState.running;
        };
        Tween.prototype.start = function () {
            if (!this._isFromValueOverridden)
                this._fromValue = this._target.getTargetObject();
            if (this._tweenState == TweenState.complete) {
                this._tweenState = TweenState.running;
                es.TweenManager.addTween(this);
            }
        };
        Tween.prototype.pause = function () {
            this._tweenState = TweenState.paused;
        };
        Tween.prototype.resume = function () {
            this._tweenState = TweenState.running;
        };
        Tween.prototype.stop = function (bringToCompletion) {
            if (bringToCompletion === void 0) { bringToCompletion = false; }
            this._tweenState = TweenState.complete;
            if (bringToCompletion) {
                this._elapsedTime = this._isRunningInReverse ? 0 : this._duration;
                this._loopType = LoopType.none;
                this._loops = 0;
            }
            else {
                es.TweenManager.removeTween(this);
            }
        };
        Tween.prototype.jumpToElapsedTime = function (elapsedTime) {
            this._elapsedTime = es.MathHelper.clamp(elapsedTime, 0, this._duration);
            this.updateValue();
        };
        Tween.prototype.reverseTween = function () {
            this._isRunningInReverse = !this._isRunningInReverse;
        };
        Tween.prototype.waitForCompletion = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._tweenState != TweenState.complete)) return [3, 2];
                        return [4, null];
                    case 1:
                        _a.sent();
                        return [3, 0];
                    case 2: return [2];
                }
            });
        };
        Tween.prototype.getTargetObject = function () {
            return this._target.getTargetObject();
        };
        Tween.prototype.resetState = function () {
            this.context = null;
            this._completionHandler = this._loopCompleteHandler = null;
            this._isFromValueOverridden = false;
            this._isTimeScaleIndependent = false;
            this._tweenState = TweenState.complete;
            this._isRelative = false;
            this._easeType = es.TweenManager.defaultEaseType;
            if (this._nextTween != null) {
                this._nextTween.recycleSelf();
                this._nextTween = null;
            }
            this._delay = 0;
            this._duration = 0;
            this._timeScale = 1;
            this._elapsedTime = 0;
            this._loopType = LoopType.none;
            this._delayBetweenLoops = 0;
            this._loops = 0;
            this._isRunningInReverse = false;
        };
        Tween.prototype.initialize = function (target, to, duration) {
            this.resetState();
            this._target = target;
            this._toValue = to;
            this._duration = duration;
        };
        Tween.prototype.handleLooping = function (elapsedTimeExcess) {
            this._loops--;
            if (this._loopType == LoopType.pingpong) {
                this.reverseTween();
            }
            if (this._loopType == LoopType.restartFromBeginning || this._loops % 2 == 0) {
                this._loopCompleteHandler && this._completionHandler(this);
            }
            if (this._loops != 0) {
                this._tweenState = TweenState.running;
                if (this._loopType == LoopType.restartFromBeginning) {
                    this._elapsedTime = elapsedTimeExcess - this._delayBetweenLoops;
                }
                else {
                    if (this._isRunningInReverse)
                        this._elapsedTime += this._delayBetweenLoops - elapsedTimeExcess;
                    else
                        this._elapsedTime = elapsedTimeExcess - this._delayBetweenLoops;
                }
                if (this._delayBetweenLoops == 0 && elapsedTimeExcess > 0) {
                    this.updateValue();
                }
            }
        };
        return Tween;
    }());
    es.Tween = Tween;
})(es || (es = {}));
var es;
(function (es) {
    var EaseType;
    (function (EaseType) {
        EaseType[EaseType["linear"] = 0] = "linear";
        EaseType[EaseType["sineIn"] = 1] = "sineIn";
        EaseType[EaseType["sineOut"] = 2] = "sineOut";
        EaseType[EaseType["sineInOut"] = 3] = "sineInOut";
        EaseType[EaseType["quadIn"] = 4] = "quadIn";
        EaseType[EaseType["quadOut"] = 5] = "quadOut";
        EaseType[EaseType["quadInOut"] = 6] = "quadInOut";
        EaseType[EaseType["cubicIn"] = 7] = "cubicIn";
        EaseType[EaseType["cubicOut"] = 8] = "cubicOut";
        EaseType[EaseType["cubicInOut"] = 9] = "cubicInOut";
        EaseType[EaseType["quartIn"] = 10] = "quartIn";
        EaseType[EaseType["quartOut"] = 11] = "quartOut";
        EaseType[EaseType["quartInOut"] = 12] = "quartInOut";
        EaseType[EaseType["expoIn"] = 13] = "expoIn";
        EaseType[EaseType["expoOut"] = 14] = "expoOut";
        EaseType[EaseType["expoInOut"] = 15] = "expoInOut";
        EaseType[EaseType["circleIn"] = 16] = "circleIn";
        EaseType[EaseType["circleOut"] = 17] = "circleOut";
        EaseType[EaseType["circleInOut"] = 18] = "circleInOut";
        EaseType[EaseType["elasticIn"] = 19] = "elasticIn";
        EaseType[EaseType["elasticOut"] = 20] = "elasticOut";
        EaseType[EaseType["elasticInOUT"] = 21] = "elasticInOUT";
        EaseType[EaseType["punch"] = 22] = "punch";
        EaseType[EaseType["backIn"] = 23] = "backIn";
        EaseType[EaseType["backOut"] = 24] = "backOut";
        EaseType[EaseType["backInOut"] = 25] = "backInOut";
        EaseType[EaseType["bounceIn"] = 26] = "bounceIn";
        EaseType[EaseType["bounceOut"] = 27] = "bounceOut";
        EaseType[EaseType["bounceInOut"] = 28] = "bounceInOut";
    })(EaseType = es.EaseType || (es.EaseType = {}));
    var EaseHelper = (function () {
        function EaseHelper() {
        }
        EaseHelper.oppositeEaseType = function (easeType) {
            switch (easeType) {
                case EaseType.linear:
                    return easeType;
                case EaseType.backIn:
                    return EaseType.backOut;
                case EaseType.backOut:
                    return EaseType.backIn;
                case EaseType.backInOut:
                    return easeType;
                case EaseType.bounceIn:
                    return EaseType.bounceOut;
                case EaseType.bounceOut:
                    return EaseType.bounceIn;
                case EaseType.bounceInOut:
                    return easeType;
                case EaseType.circleIn:
                    return EaseType.circleOut;
                case EaseType.circleOut:
                    return EaseType.circleIn;
                case EaseType.circleInOut:
                    return easeType;
                case EaseType.cubicIn:
                    return EaseType.cubicOut;
                case EaseType.cubicOut:
                    return EaseType.cubicIn;
                case EaseType.circleInOut:
                    return easeType;
                case EaseType.punch:
                    return easeType;
                case EaseType.expoIn:
                    return EaseType.expoOut;
                case EaseType.expoOut:
                    return EaseType.expoIn;
                case EaseType.expoInOut:
                    return easeType;
                case EaseType.quadIn:
                    return EaseType.quadOut;
                case EaseType.quadOut:
                    return EaseType.quadIn;
                case EaseType.quadInOut:
                    return easeType;
                case EaseType.quartIn:
                    return EaseType.quadOut;
                case EaseType.quartOut:
                    return EaseType.quartIn;
                case EaseType.quadInOut:
                    return easeType;
                case EaseType.sineIn:
                    return EaseType.sineOut;
                case EaseType.sineOut:
                    return EaseType.sineIn;
                case EaseType.sineInOut:
                    return easeType;
                default:
                    return easeType;
            }
        };
        return EaseHelper;
    }());
    es.EaseHelper = EaseHelper;
})(es || (es = {}));
var es;
(function (es) {
    var TweenManager = (function (_super) {
        __extends(TweenManager, _super);
        function TweenManager() {
            var _this = _super.call(this) || this;
            _this._activeTweens = [];
            _this._tempTweens = [];
            TweenManager._instance = _this;
            return _this;
        }
        TweenManager.prototype.update = function () {
            this._isUpdating = true;
            for (var i = this._activeTweens.length - 1; i >= 0; --i) {
                var tween = this._activeTweens[i];
                if (tween.tick())
                    this._tempTweens.push(tween);
            }
            this._isUpdating = false;
            for (var i = 0; i < this._tempTweens.length; i++) {
                this._tempTweens[i].recycleSelf();
                new linq.List(this._activeTweens).remove(this._tempTweens[i]);
            }
            this._tempTweens.length = 0;
        };
        TweenManager.addTween = function (tween) {
            TweenManager._instance._activeTweens.push(tween);
        };
        TweenManager.removeTween = function (tween) {
            if (TweenManager._instance._isUpdating) {
                TweenManager._instance._tempTweens.push(tween);
            }
            else {
                tween.recycleSelf();
                new linq.List(TweenManager._instance._activeTweens).remove(tween);
            }
        };
        TweenManager.stopAllTweens = function (bringToCompletion) {
            if (bringToCompletion === void 0) { bringToCompletion = false; }
            for (var i = TweenManager._instance._activeTweens.length - 1; i >= 0; --i)
                TweenManager._instance._activeTweens[i].stop(bringToCompletion);
        };
        TweenManager.allTweensWithContext = function (context) {
            var foundTweens = [];
            for (var i = 0; i < TweenManager._instance._activeTweens.length; i++) {
                if (TweenManager._instance._activeTweens[i].context == context)
                    foundTweens.push(TweenManager._instance._activeTweens[i]);
            }
            return foundTweens;
        };
        TweenManager.stopAllTweensWithContext = function (context, bringToCompletion) {
            if (bringToCompletion === void 0) { bringToCompletion = false; }
            for (var i = TweenManager._instance._activeTweens.length - 1; i >= 0; --i) {
                if (TweenManager._instance._activeTweens[i].context == context)
                    TweenManager._instance._activeTweens[i].stop(bringToCompletion);
            }
        };
        TweenManager.allTweenWithTarget = function (target) {
            var foundTweens = [];
            for (var i = 0; i < TweenManager._instance._activeTweens.length; i++) {
                if (TweenManager._instance._activeTweens[i]) {
                    var tweenControl = TweenManager._instance._activeTweens[i];
                    if (tweenControl.getTargetObject() == target)
                        foundTweens.push(TweenManager._instance._activeTweens[i]);
                }
            }
            return foundTweens;
        };
        TweenManager.stopAllTweensWithTarget = function (target, bringToCompletion) {
            if (bringToCompletion === void 0) { bringToCompletion = false; }
            for (var i = TweenManager._instance._activeTweens.length - 1; i >= 0; --i) {
                if (TweenManager._instance._activeTweens[i]) {
                    var tweenControl = TweenManager._instance._activeTweens[i];
                    if (tweenControl.getTargetObject() == target)
                        tweenControl.stop(bringToCompletion);
                }
            }
        };
        TweenManager.defaultEaseType = es.EaseType.quartIn;
        TweenManager.removeAllTweensOnLevelLoad = false;
        TweenManager.cacheNumberTweens = true;
        TweenManager.cacheVector2Tweens = true;
        TweenManager.cacheRectTweens = true;
        return TweenManager;
    }(es.GlobalManager));
    es.TweenManager = TweenManager;
})(es || (es = {}));
var es;
(function (es) {
    var Easing;
    (function (Easing) {
        var Linear = (function () {
            function Linear() {
            }
            Linear.easeNone = function (t, d) {
                return t / d;
            };
            return Linear;
        }());
        Easing.Linear = Linear;
        var Quadratic = (function () {
            function Quadratic() {
            }
            Quadratic.easeIn = function (t, d) {
                return (t /= d) * t;
            };
            Quadratic.easeOut = function (t, d) {
                return -1 * (t /= d) * (t - 2);
            };
            Quadratic.easeInOut = function (t, d) {
                if ((t /= d / 2) < 1)
                    return 0.5 * t * t;
                return -0.5 * ((--t) * (t - 2) - 1);
            };
            return Quadratic;
        }());
        Easing.Quadratic = Quadratic;
        var Back = (function () {
            function Back() {
            }
            Back.easeIn = function (t, d) {
                return (t /= d) * t * ((1.70158 + 1) * t - 1.70158);
            };
            Back.easeOut = function (t, d) {
                return ((t = t / d - 1) * t * ((1.70158 + 1) * t + 1.70158) + 1);
            };
            Back.easeInOut = function (t, d) {
                var s = 1.70158;
                if ((t /= d / 2) < 1) {
                    return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
                }
                return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
            };
            return Back;
        }());
        Easing.Back = Back;
        var Bounce = (function () {
            function Bounce() {
            }
            Bounce.easeOut = function (t, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return (7.5625 * t * t);
                }
                else if (t < (2 / 2.75)) {
                    return (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
                }
                else if (t < (2.5 / 2.75)) {
                    return (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
                }
                else {
                    return (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
                }
            };
            Bounce.easeIn = function (t, d) {
                return 1 - this.easeOut(d - t, d);
            };
            Bounce.easeInOut = function (t, d) {
                if (t < d / 2)
                    return this.easeIn(t * 2, d) * 0.5;
                else
                    return this.easeOut(t * 2 - d, d) * 0.5 + 1 * 0.5;
            };
            return Bounce;
        }());
        Easing.Bounce = Bounce;
        var Circular = (function () {
            function Circular() {
            }
            Circular.easeIn = function (t, d) {
                return -(Math.sqrt(1 - (t /= d) * t) - 1);
            };
            Circular.easeOut = function (t, d) {
                return Math.sqrt(1 - (t = t / d - 1) * t);
            };
            Circular.easeInOut = function (t, d) {
                if ((t /= d / 2) < 1)
                    return -0.5 * (Math.sqrt(1 - t * t) - 1);
                return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            };
            return Circular;
        }());
        Easing.Circular = Circular;
        var Cubic = (function () {
            function Cubic() {
            }
            Cubic.easeIn = function (t, d) {
                return (t /= d) * t * t;
            };
            Cubic.easeOut = function (t, d) {
                return ((t = t / d - 1) * t * t + 1);
            };
            Cubic.easeInOut = function (t, d) {
                if ((t /= d / 2) < 1)
                    return 0.5 * t * t * t;
                return 0.5 * ((t -= 2) * t * t + 2);
            };
            return Cubic;
        }());
        Easing.Cubic = Cubic;
        var Elastic = (function () {
            function Elastic() {
            }
            Elastic.easeIn = function (t, d) {
                if (t == 0)
                    return 0;
                if ((t /= d) == 1)
                    return 1;
                var p = d * 0.3;
                var s = p / 4;
                return -(1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p));
            };
            Elastic.easeOut = function (t, d) {
                if (t == 0)
                    return 0;
                if ((t /= d) == 1)
                    return 1;
                var p = d * 0.3;
                var s = p / 4;
                return (1 * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + 1);
            };
            Elastic.easeInOut = function (t, d) {
                if (t == 0)
                    return 0;
                if ((t /= d / 2) == 2)
                    return 1;
                var p = d * (0.3 * 1.5);
                var s = p / 4;
                if (t < 1)
                    return -0.5 * (Math.pow(2, 10 * (t -= 1)) * Math.sin(t * d - s) * (2 * Math.PI) / p);
                return (Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + 1);
            };
            Elastic.punch = function (t, d) {
                if (t == 0)
                    return 0;
                if ((t /= d) == 1)
                    return 0;
                var p = 0.3;
                return (Math.pow(2, -10 * t) * Math.sin(t * (2 * Math.PI) / p));
            };
            return Elastic;
        }());
        Easing.Elastic = Elastic;
        var Exponential = (function () {
            function Exponential() {
            }
            Exponential.easeIn = function (t, d) {
                return (t == 0) ? 0 : Math.pow(2, 10 * (t / d - 1));
            };
            Exponential.easeOut = function (t, d) {
                return t == d ? 1 : (-Math.pow(2, -10 * t / d) + 1);
            };
            Exponential.easeInOut = function (t, d) {
                if (t == 0)
                    return 0;
                if (t == d)
                    return 1;
                if ((t /= d / 2) < 1) {
                    return 0.5 * Math.pow(2, 10 * (t - 1));
                }
                return 0.5 * (-Math.pow(2, -10 * --t) + 2);
            };
            return Exponential;
        }());
        Easing.Exponential = Exponential;
        var Quartic = (function () {
            function Quartic() {
            }
            Quartic.easeIn = function (t, d) {
                return (t /= d) * t * t * t;
            };
            Quartic.easeOut = function (t, d) {
                return -1 * ((t = t / d - 1) * t * t * t - 1);
            };
            Quartic.easeInOut = function (t, d) {
                t /= d / 2;
                if (t < 1)
                    return 0.5 * t * t * t * t;
                t -= 2;
                return -0.5 * (t * t * t * t - 2);
            };
            return Quartic;
        }());
        Easing.Quartic = Quartic;
        var Quintic = (function () {
            function Quintic() {
            }
            Quintic.easeIn = function (t, d) {
                return (t /= d) * t * t * t * t;
            };
            Quintic.easeOut = function (t, d) {
                return ((t = t / d - 1) * t * t * t * t + 1);
            };
            Quintic.easeInOut = function (t, d) {
                if ((t /= d / 2) < 1)
                    return 0.5 * t * t * t * t * t;
                return 0.5 * ((t -= 2) * t * t * t * t + 2);
            };
            return Quintic;
        }());
        Easing.Quintic = Quintic;
        var Sinusoidal = (function () {
            function Sinusoidal() {
            }
            Sinusoidal.easeIn = function (t, d) {
                return -1 * Math.cos(t / d * (Math.PI / 2)) + 1;
            };
            Sinusoidal.easeOut = function (t, d) {
                return Math.sin(t / d * (Math.PI / 2));
            };
            Sinusoidal.easeInOut = function (t, d) {
                return -0.5 * (Math.cos(Math.PI * t / d) - 1);
            };
            return Sinusoidal;
        }());
        Easing.Sinusoidal = Sinusoidal;
    })(Easing = es.Easing || (es.Easing = {}));
})(es || (es = {}));
