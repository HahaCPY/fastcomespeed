const { ccclass, property } = cc._decorator;

@ccclass
export default class CattySpawner extends cc.Component {
    @property({ type: cc.Prefab })
    cattyPrefab: cc.Prefab = null;

    @property({ type: [cc.Node] })
    spawnPoints: cc.Node[] = [];

    @property
    spawnInterval: number = 6;

    private timer: number = 0;

    update(dt: number) {
        this.timer += dt;
        if (this.timer >= this.spawnInterval) {
            this.timer = 0;
            this.spawnCatty();
        }
    }

    spawnCatty() {
        if (!this.cattyPrefab || this.spawnPoints.length === 0) return;

        const index = Math.floor(Math.random() * this.spawnPoints.length);
        const spawnPoint = this.spawnPoints[index];

        const catty = cc.instantiate(this.cattyPrefab);
        catty.setPosition(spawnPoint.getPosition());
        catty.parent = this.node;

        console.log("🐱 生成一隻閒晃中的 Catty");
    }
}
