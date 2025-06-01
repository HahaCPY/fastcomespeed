// ShowImageOnPlane.ts
const { ccclass, property } = cc._decorator;

@ccclass
export default class ShowImageOnPlane extends cc.Component {
    @property({ type: cc.Texture2D })
    texture: cc.Texture2D = null;

    start() {
        // 若未指定，則動態加載
        if (!this.texture) {
            cc.loader.loadRes("background/brickWall", cc.Texture2D, (err, tex: cc.Texture2D) => {
                if (err) {
                    cc.error("載入圖片失敗", err);
                    return;
                }
                this.applyTexture(tex);
            });
        } else {
            this.applyTexture(this.texture);
        }
    }

    applyTexture(tex: cc.Texture2D) {
        const meshRenderer = this.node.getComponent(cc.MeshRenderer);
        if (!meshRenderer) {
            cc.error("本節點沒有 MeshRenderer 組件！");
            return;
        }
        // 取得材質
        const material = meshRenderer.getMaterial(0);
        if (!material) {
            cc.error("MeshRenderer 沒有材質！");
            return;
        }
        // 設定貼圖，Unlit 材質屬性名稱是 texture
        material.setProperty("texture", tex);
        meshRenderer.setMaterial(0, material);
    }
}
