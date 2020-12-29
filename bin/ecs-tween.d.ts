declare module es {
    enum LoopType {
        none = 0,
        restartFromBeginning = 1,
        pingpong = 2
    }
    enum TweenState {
        running = 0,
        paused = 1,
        complete = 2
    }
    abstract class Tween<T> implements ITweenable, ITween<T> {
        protected _target: ITweenTarget<T>;
        protected _isFromValueOverridden: boolean;
        protected _fromValue: T;
        protected _toValue: T;
        protected _easeType: EaseType;
        protected _shouldRecycleTween: boolean;
        protected _isRelative: boolean;
        protected _completionHandler: (tween: ITween<T>) => void;
        protected _loopCompleteHandler: (tween: ITween<T>) => void;
        protected _nextTween: ITweenable;
        protected _tweenState: TweenState;
        private _isTimeScaleIndependent;
        protected _delay: number;
        protected _duration: number;
        protected _timeScale: number;
        protected _elapsedTime: number;
        protected _loopType: LoopType;
        protected _loops: number;
        protected _delayBetweenLoops: number;
        private _isRunningInReverse;
        context: any;
        setEaseType(easeType: EaseType): ITween<T>;
        setDelay(delay: number): ITween<T>;
        setDuration(duration: number): ITween<T>;
        setTimeScale(timeSclae: number): ITween<T>;
        setIsTimeScaleIndependent(): ITween<T>;
        setCompletionHandler(completeHandler: (tween: ITween<T>) => void): ITween<T>;
        setLoops(loopType: LoopType, loops?: number, delayBetweenLoops?: number): ITween<T>;
        setLoopCompletionHanlder(loopCompleteHandler: (tween: ITween<T>) => void): ITween<T>;
        setFrom(from: T): ITween<T>;
        prepareForReuse(from: T, to: T, duration: number): ITween<T>;
        setRecycleTween(shouldRecycleTween: boolean): ITween<T>;
        abstract setIsRelative(): ITween<T>;
        setContext(context: any): ITween<T>;
        setNextTween(nextTween: ITweenable): ITween<T>;
        tick(): boolean;
        recycleSelf(): void;
        isRunning(): boolean;
        start(): void;
        pause(): void;
        resume(): void;
        stop(bringToCompletion?: boolean): void;
        jumpToElapsedTime(elapsedTime: any): void;
        reverseTween(): void;
        waitForCompletion(): IterableIterator<any>;
        getTargetObject(): any;
        private resetState;
        initialize(target: ITweenTarget<T>, to: T, duration: number): void;
        private handleLooping;
        protected abstract updateValue(): any;
    }
}
declare module es {
    enum EaseType {
        linear = 0,
        sineIn = 1,
        sineOut = 2,
        sineInOut = 3,
        quadIn = 4,
        quadOut = 5,
        quadInOut = 6,
        cubicIn = 7,
        cubicOut = 8,
        cubicInOut = 9,
        quartIn = 10,
        quartOut = 11,
        quartInOut = 12,
        expoIn = 13,
        expoOut = 14,
        expoInOut = 15,
        circleIn = 16,
        circleOut = 17,
        circleInOut = 18,
        elasticIn = 19,
        elasticOut = 20,
        elasticInOUT = 21,
        punch = 22,
        backIn = 23,
        backOut = 24,
        backInOut = 25,
        bounceIn = 26,
        bounceOut = 27,
        bounceInOut = 28
    }
    class EaseHelper {
        static oppositeEaseType(easeType: EaseType): EaseType.linear | EaseType.sineIn | EaseType.sineOut | EaseType.sineInOut | EaseType.quadIn | EaseType.quadOut | EaseType.quadInOut | EaseType.cubicIn | EaseType.cubicOut | EaseType.cubicInOut | EaseType.quartIn | EaseType.quartInOut | EaseType.expoIn | EaseType.expoOut | EaseType.expoInOut | EaseType.circleIn | EaseType.circleOut | EaseType.circleInOut | EaseType.elasticIn | EaseType.elasticOut | EaseType.elasticInOUT | EaseType.punch | EaseType.backIn | EaseType.backOut | EaseType.backInOut | EaseType.bounceIn | EaseType.bounceOut | EaseType.bounceInOut;
    }
}
declare module es {
    class TweenManager extends GlobalManager {
        static defaultEaseType: EaseType;
        static removeAllTweensOnLevelLoad: boolean;
        static cacheNumberTweens: boolean;
        static cacheVector2Tweens: boolean;
        static cacheRectTweens: boolean;
        private _activeTweens;
        private _tempTweens;
        private _isUpdating;
        private static _instance;
        constructor();
        update(): void;
        static addTween(tween: ITweenable): void;
        static removeTween(tween: ITweenable): void;
        static stopAllTweens(bringToCompletion?: boolean): void;
        static allTweensWithContext(context: any): ITweenable[];
        static stopAllTweensWithContext(context: any, bringToCompletion?: boolean): void;
        static allTweenWithTarget(target: any): ITweenable[];
        static stopAllTweensWithTarget(target: any, bringToCompletion?: boolean): void;
    }
}
declare module es {
    module Easing {
        class Linear {
            static easeNone(t: number, d: number): number;
        }
        class Quadratic {
            static easeIn(t: number, d: number): number;
            static easeOut(t: number, d: number): number;
            static easeInOut(t: number, d: number): number;
        }
        class Back {
            static easeIn(t: number, d: number): number;
            static easeOut(t: number, d: number): number;
            static easeInOut(t: number, d: number): number;
        }
        class Bounce {
            static easeOut(t: number, d: number): number;
            static easeIn(t: number, d: number): number;
            static easeInOut(t: number, d: number): number;
        }
        class Circular {
            static easeIn(t: number, d: number): number;
            static easeOut(t: number, d: number): number;
            static easeInOut(t: number, d: number): number;
        }
        class Cubic {
            static easeIn(t: number, d: number): number;
            static easeOut(t: number, d: number): number;
            static easeInOut(t: number, d: number): number;
        }
        class Elastic {
            static easeIn(t: number, d: number): number;
            static easeOut(t: number, d: number): number;
            static easeInOut(t: number, d: number): number;
            static punch(t: number, d: number): number;
        }
        class Exponential {
            static easeIn(t: number, d: number): number;
            static easeOut(t: number, d: number): number;
            static easeInOut(t: number, d: number): number;
        }
        class Quartic {
            static easeIn(t: number, d: number): number;
            static easeOut(t: number, d: number): number;
            static easeInOut(t: number, d: number): number;
        }
        class Quintic {
            static easeIn(t: number, d: number): number;
            static easeOut(t: number, d: number): number;
            static easeInOut(t: number, d: number): number;
        }
        class Sinusoidal {
            static easeIn(t: number, d: number): number;
            static easeOut(t: number, d: number): number;
            static easeInOut(t: number, d: number): number;
        }
    }
}
declare module es {
    interface ITween<T> extends ITweenControl {
        setEaseType(easeType: EaseType): ITween<T>;
        setDelay(delay: number): ITween<T>;
        setDuration(duration: number): ITween<T>;
        setTimeScale(timeScale: number): ITween<T>;
        setIsTimeScaleIndependent(): ITween<T>;
        setCompletionHandler(completionHandler: (tween: ITween<T>) => void): ITween<T>;
        setLoops(loopType: LoopType, loops: number, delayBetweenLoops: number): ITween<T>;
        setFrom(from: T): ITween<T>;
        prepareForReuse(from: T, to: T, duration: number): ITween<T>;
        setRecycleTween(shouldRecycleTween: boolean): ITween<T>;
        setIsRelative(): ITween<T>;
        setContext(context: any): ITween<T>;
        setNextTween(nextTween: ITweenable): ITween<T>;
    }
}
declare module es {
    interface ITweenControl extends ITweenable {
        context: any;
        jumpToElapsedTime(elapsedTime: number): any;
        waitForCompletion(): any;
        getTargetObject(): any;
    }
}
declare module es {
    interface ITweenTarget<T> {
        setTweenedValue(value: T): any;
        getTweenedValue(): T;
        getTargetObject(): any;
    }
}
declare module es {
    interface ITweenable {
        tick(): boolean;
        recycleSelf(): any;
        isRunning(): boolean;
        start(): any;
        pause(): any;
        resume(): any;
        stop(bringToCompletion: boolean): any;
    }
}
