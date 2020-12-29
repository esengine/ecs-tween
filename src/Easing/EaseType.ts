module es {
    export enum EaseType {
        linear,

        sineIn,
        sineOut,
        sineInOut,

        quadIn,
        quadOut,
        quadInOut,

        cubicIn,
        cubicOut,
        cubicInOut,

        quartIn,
        quartOut,
        quartInOut,

        expoIn,
        expoOut,
        expoInOut,

        circleIn,
        circleOut,
        circleInOut,

        elasticIn,
        elasticOut,
        elasticInOUT,
        punch,

        backIn,
        backOut,
        backInOut,

        bounceIn,
        bounceOut,
        bounceInOut
    }

    /**
     * 助手的一个方法，它接收一个EaseType，并通过给定的持续时间和时间参数来应用该Ease方程。
     * 我们这样做是为了避免传来传去的Funcs为垃圾收集器制造大量垃圾
     */
    export class EaseHelper {
        /**
         * 返回 easeType 的相反 EaseType
         * @param easeType 
         */
        public static oppositeEaseType(easeType: EaseType) {
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
        }
    }
}