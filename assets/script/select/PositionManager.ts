// PositionManager.ts
export default class PositionManager {
    private static savedPos: cc.Vec3 = null;

    static savePosition(pos: cc.Vec3) {
        this.savedPos = pos.clone();
    }

    static getSavedPosition(): cc.Vec3 {
        return this.savedPos;
    }

    static clear() {
        this.savedPos = null;
    }
}