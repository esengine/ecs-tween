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

        public static ease(easeType: EaseType, from: number, to: number, t: number, duration: number) {
            return this.lerp(from, to, EaseHelper.ease(easeType, t, duration));
        }

        public static easeVector2(easeType: EaseType, from: Vector2, to: Vector2, t: number, duration: number) {
            return this.lerpVector2(from, to, EaseHelper.ease(easeType, t, duration));
        }

        public static easeRectangle(easeType: EaseType, from: Rectangle, to: Rectangle, t: number, duration: number) {
            return this.lerpRectangle(from, to, EaseHelper.ease(easeType, t, duration));
        }
    }
}