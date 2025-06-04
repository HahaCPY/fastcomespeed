import GoblinController from "./GoblinController"; // ✅ 放在最上面沒問題

const { ccclass, property } = cc._decorator;

@ccclass
export default class GoblinSpawner extends cc.Component {
    @property({ type: cc.Prefab })
    goblinPrefab: cc.Prefab = null;

    @property({ type: [cc.Node] })
    dropPoints: cc.Node[] = [];

    @property({ type: cc.Node })
    player1: cc.Node = null;

    @property({ type: cc.Node })
    player2: cc.Node = null;

    @property
    spawnInterval: number = 5;

    private timer: number = 0;

    update(dt: number) {
        this.timer += dt;
        if (this.timer >= this.spawnInterval) {
            this.timer = 0;
            this.spawnGoblin();
        }
    }

    spawnGoblin() {
        if (!this.goblinPrefab || this.dropPoints.length === 0) return;

        const index = Math.floor(Math.random() * this.dropPoints.length);
        const dropPoint = this.dropPoints[index];

        const goblin = cc.instantiate(this.goblinPrefab);
        goblin.setPosition(dropPoint.getPosition());
        goblin.parent = this.node;

        const controller = goblin.getComponent(GoblinController);
        if (controller && this.player1 && this.player2) {
            controller.setTargetPlayers(this.player1, this.player2);
        }
    }
}
