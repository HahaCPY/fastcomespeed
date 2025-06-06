const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {
    private static _instance: AudioManager = null;

    public static getInstance(): AudioManager {
        if (!AudioManager._instance) {
            // 在第一個場景 Canvas 掛 AudioManager，或動態建立
            let node = new cc.Node("AudioManager");
            AudioManager._instance = node.addComponent(AudioManager);
            cc.game.addPersistRootNode(node);
        }
        return AudioManager._instance;
    }

    public bgmVolume: number = 20;
    public sfxVolume: number = 20;
}