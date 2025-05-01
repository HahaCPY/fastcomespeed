
// assets/Scripts/UI/UIManager.ts

import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    @property(Label)
    recipeLabel: Label = null;

    @property(Label)
    feedbackLabel: Label = null;

    @property(Label)
    cutProgressLabel: Label = null;

    showRecipes(recipes: string[][]) {
        const text = recipes.map((r, i) => \`\${i + 1}. \${r.join(" + ")}\`).join('\n');
        this.recipeLabel.string = text;
    }

    showCutProgress(percent: number) {
        this.cutProgressLabel.string = percent >= 100 ? '✅ 完成！' : \`\${Math.round(percent)}%\`;
    }

    clearCutProgress() {
        this.cutProgressLabel.string = '';
    }

    showFeedback(success: boolean) {
        this.feedbackLabel.string = success ? '✅ 送餐成功！' : '❌ 送錯了！';
        this.scheduleOnce(() => {
            this.feedbackLabel.string = '';
        }, 1.5);
    }
}
