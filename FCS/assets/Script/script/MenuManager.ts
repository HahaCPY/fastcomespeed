import AudioManager from "./AudioManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MenuManager extends cc.Component {
    @property({ type: cc.AudioClip })
    bgm: cc.AudioClip = null;

    @property(cc.Node)
    bgmSlider: cc.Node = null;

    @property(cc.Node)
    sfxSlider: cc.Node = null;

    @property(cc.Button)
    scoreboardButton: cc.Button = null;

    private bgmAudioId: number = -1;

    start() {
        // 播放 BGM，使用全域音量
        this.bgmAudioId = cc.audioEngine.play(this.bgm, true, AudioManager.getInstance().bgmVolume);

        if (this.bgmSlider) {
            //this.bgmSlider.getComponent(cc.Slider).progress = AudioManager.getInstance().bgmVolume;
            this.bgmSlider.getComponent(cc.Slider).node.on('slide', this.onBgmSliderChanged, this);
        }
        if (this.sfxSlider) {
            //this.sfxSlider.getComponent(cc.Slider).progress = AudioManager.getInstance().sfxVolume;
            this.sfxSlider.getComponent(cc.Slider).node.on('slide', this.onSfxSliderChanged, this);
        }

        // 排行榜按鈕
        if (this.scoreboardButton) {
            this.scoreboardButton.node.on('click', this.onScoreboardButtonClicked, this);
        }
    }

    onScoreboardButtonClicked() {
        cc.director.loadScene('scoreboard'); // 假設排行榜場景名稱為 'scoreboard'
    }

    onBgmSliderChanged(slider: cc.Slider) {
        AudioManager.getInstance().bgmVolume = slider.progress;
        if (this.bgmAudioId !== -1) {
            cc.audioEngine.setVolume(this.bgmAudioId, slider.progress);
        }
    }

    onSfxSliderChanged(slider: cc.Slider) {
        AudioManager.getInstance().sfxVolume = slider.progress;
        cc.audioEngine.setEffectsVolume(slider.progress);
    }

    onDestroy() {
        if (this.bgmAudioId !== -1) {
            cc.audioEngine.stop(this.bgmAudioId);
        }
    }
}