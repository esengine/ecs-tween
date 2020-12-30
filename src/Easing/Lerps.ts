module es {
    /**
     * 一系列静态方法来处理所有常见的tween类型结构，以及它们的unclamped lerps.unclamped lerps对于超过0-1范围的bounce、elastic或其他tweens是必需的
     */
    export class Lerps {
        public static lerp(from: number, to: number, t: number) {
            return from + (to - from) * t;
        }

        public static lerpVector2(from: Vector2, to: Vector2, t: number) {
            return new Vector2(from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
        }

        public static lerpRectangle(from: Rectangle, to: Rectangle, t: number) {
            return new Rectangle(
                (from.x + (to.x - from.x) * t),
                (from.y + (to.x - from.y) * t),
                (from.width + (to.width - from.width) * t),
                (from.height + (to.height - from.height) * t)
            );
        }

        public static angleLerp(from: Vector2, to: Vector2, t: number) {
            // 我们计算这个lerp的最短角差
            let toMinusFrom = new Vector2(MathHelper.deltaAngle(from.x, to.x), MathHelper.deltaAngle(from.y, to.y));
            return new Vector2(from.x + toMinusFrom.x * t, from.y + toMinusFrom.y * t);
        }

        public static ease(easeType: EaseType, from: number, to: number, t: number, duration: number) {
            return this.lerp(from, to, EaseHelper.ease(easeType, t, duration));
        }

        public static easeVector2(easeType: EaseType, from: Vector2, to: Vector2, t: number, duration: number) {
            return this.lerpVector2(from, to, EaseHelper.ease(easeType, t, duration));
        }

        public static easeRectangle(easeType: EaseType, from: Rectangle, to: Rectangle, t: number, duration: number) {
            return this.lerpRectangle(from, to, EaseHelper.ease(easeType, t, duration));
        }

        public static easeAngle(easeType: EaseType, from: Vector2, to: Vector2, t: number, duration: number) {
            return this.angleLerp(from, to, EaseHelper.ease(easeType, t, duration));
        }

        /**
         * 使用半隐式欧拉方法。速度较慢，但总是很稳定。见
         * http://allenchou.net/2015/04/game-math-more-on-numeric-springing/
         * @param currentValue 
         * @param targetValue 
         * @param velocity Velocity的引用。如果在两次调用之间改变targetValue，请务必将其重置为0
         * @param dampingRatio 值越低，阻尼越小，值越高，阻尼越大，导致弹簧度越小，应在0.01-1之间，以避免系统不稳定
         * @param angularFrequency 角频率为2pi(弧度/秒)意味着振荡在一秒钟内完成一个完整的周期，即1Hz.应小于35左右才能保持稳定
         */
        public static fastSpring(currentValue: Vector2, targetValue: Vector2, velocity: Vector2,
            dampingRatio: number, angularFrequency: number) {
            velocity.add(new Vector2(-2 * Time.deltaTime * dampingRatio * angularFrequency)
                .multiply(velocity)
                .add(new Vector2(Time.deltaTime * angularFrequency * angularFrequency)
                    .multiply(Vector2.subtract(targetValue, currentValue))));
            currentValue.add(new Vector2(Time.deltaTime).multiply(velocity));
            return currentValue;
        }
    }
}