const {ccclass, property} = cc._decorator;
import FirebaseManager from './FirebaseManager';
 
@ccclass
export default class Signup extends cc.Component {
    private firebaseManager: FirebaseManager = null;

    start() {
        console.log("Signup component started");
        // 使用新的方式獲取 FirebaseManager 實例
        this.firebaseManager = FirebaseManager.getFirebaseManager();
        if (!this.firebaseManager.isFirebaseInitialized()) {
            console.error("Firebase not initialized!");
            return;
        }

        let continueButton = new cc.Component.EventHandler();
        continueButton.target = this.node;
        continueButton.component = "Signup";
        continueButton.handler = "onSignUp";
        
        cc.find("Canvas/Signup/Submit").getComponent(cc.Button).clickEvents.push(continueButton);
    }

    onSignUp() {
        
        const email = cc.find("Canvas/Signup/Email").getComponent(cc.EditBox).string;
        const password = cc.find("Canvas/Signup/Password").getComponent(cc.EditBox).string;
        const nickname = cc.find("Canvas/Signup/Nickname").getComponent(cc.EditBox).string;

        console.log(email, password, nickname);
        // 檢查輸入是否為空

        if (!email || !password || !nickname) {
            alert("請填寫所有欄位");
            return;
        }

        // 使用 FirebaseManager 進行註冊
        this.firebaseManager.getAuth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
    const userId = userCredential.user.uid;
    return this.firebaseManager.getDatabase().ref('users/' + userId).set({
        nickname: nickname,
        email: email
    }).then(() => {
        // 存到 PersistentUser
        const persistNode = cc.director.getScene().getChildByName('PersistentUser');
        if (persistNode) {
            const persistScript = persistNode.getComponent('PersistentUser');
            persistScript.setUserInfo(userId, email, nickname);
        } else {
            console.warn("找不到 PersistentUser persist node！");
        }
    });
            })
            .then(() => {
                console.log('註冊成功');
                alert("註冊成功");
                cc.director.loadScene("Loading");
            });
            
    }

    private getErrorMessage(errorCode: string): string {
        switch (errorCode) {
            case 'auth/invalid-email':
                return '無效的電子郵件地址';
            case 'auth/email-already-in-use':
                return '此電子郵件已被使用';
            case 'auth/weak-password':
                return '密碼強度太弱';
            default:
                return '註冊失敗，請稍後再試';
        }
    }
}