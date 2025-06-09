const { ccclass, property } = cc._decorator;
import PlayerModeSelector from "./PlayerModeSelector";

@ccclass
export default class GameManager extends cc.Component {
    @property(cc.Prefab)
    girl1Prefab: cc.Prefab = null;

    @property(cc.Prefab)
    girl2Prefab: cc.Prefab = null;

    @property(cc.Node)
    spawnPoint1: cc.Node = null;

    @property(cc.Node)
    spawnPoint2: cc.Node = null;

    // 存放選擇角色的 index（0: girl1, 1: girl2）
    public static selectedCharIndex: number = 0;

    start() {
        // ✅ 開啟物理系統
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;


        // ✅ 關閉重力（設成 0）
        cc.director.getPhysicsManager().gravity = cc.v2(0, 0);
        this.spawnPlayers();
    }

    spawnPlayers() {
        const playerCount = PlayerModeSelector.player_mode;
        const charIndex = GameManager.selectedCharIndex;

        const prefab = charIndex === 0 ? this.girl1Prefab : this.girl2Prefab;

        // Instantiate 玩家1
        const p1 = cc.instantiate(prefab);
        p1.setPosition(this.spawnPoint1.getPosition());
        this.node.addChild(p1);

        // Instantiate 玩家2（如果是雙人模式）
        if (playerCount === 1) {
            const p2 = cc.instantiate(prefab);
            p2.setPosition(this.spawnPoint2.getPosition());
            this.node.addChild(p2);
        }
    }
}
