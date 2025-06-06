const { ccclass, property } = cc._decorator;

@ccclass
export default class DebugController extends cc.Component {
    onLoad() {
        cc.director.getPhysicsManager().enabled = true;

        // 顯示碰撞形狀（綠框/藍框）+ 邊界 AABB
        /*cc.director.getPhysicsManager().debugDrawFlags = 
        cc.PhysicsManager.DrawBits.e_shapeBit |
        cc.PhysicsManager.DrawBits.e_aabbBit;*/
    }
}
