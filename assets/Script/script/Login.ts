const {ccclass, property} = cc._decorator;
import FirebaseManager from './FirebaseManager';

@ccclass
export default class Login extends cc.Component {
    private firebaseManager: FirebaseManager = null;

    start() {
         //cc.director.loadScene("Loading"); 
        // 使用新的方式獲取 FirebaseManager 實例
        this.firebaseManager = FirebaseManager.getFirebaseManager();
        if (!this.firebaseManager.isFirebaseInitialized()) {
            console.error("Firebase not initialized!");
            return;
        }

        let continueButton = new cc.Component.EventHandler();
        continueButton.target = this.node;
        continueButton.component = "Login";
        continueButton.handler = "onLogin";
        
        cc.find("Canvas/Login/Submit").getComponent(cc.Button).clickEvents.push(continueButton);
    }

    onLogin() {
        // 檢查輸入是否為空
        const email = cc.find("Canvas/Login/Email").getComponent(cc.EditBox).string;
        const password = cc.find("Canvas/Login/Password").getComponent(cc.EditBox).string;

        if (!email || !password) {
            alert("請填寫所有欄位");
            return;
        }

        // 檢查 email 格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("請輸入有效的電子郵件地址");
            return;
        }

        console.log("嘗試登入:", email);
        
        // 使用 FirebaseManager 進行登入
        this.firebaseManager.getAuth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
            console.log("登入成功:", userCredential.user.email);

            // 存到 PersistentUser
            const persistNode = cc.director.getScene().getChildByName('PersistentUser');
            if (persistNode) {
                const persistScript = persistNode.getComponent('PersistentUser');
                // 取得 nickname 需從 firebase db 抓
                this.firebaseManager.getDatabase().ref('users/' + userCredential.user.uid).once('value')
                    .then((snapshot) => {
                        const nickname = snapshot.val() && snapshot.val().nickname ? snapshot.val().nickname : "";
                        persistScript.setUserInfo(userCredential.user.uid, userCredential.user.email, nickname);
                        this.loadMenuPage();
                    })
                    .catch(() => {
                        persistScript.setUserInfo(userCredential.user.uid, userCredential.user.email, "");
                        this.loadMenuPage();
                    });
            } else {
                console.warn("找不到 PersistentUser persist node！");
                this.loadMenuPage();
            }
        });
    }

    loadMenuPage() {
        cc.director.loadScene("Loading");
    }
}
 