const {ccclass, property} = cc._decorator;
//import firebase from "firebase/app";

@ccclass
export default class FirebaseManager extends cc.Component {
    private static instance: FirebaseManager = null;
    private isInitialized: boolean = false;

    private readonly firebaseConfig = {
  apiKey: "AIzaSyAdc_uIvYNT9KXZ_m13xOBVmvJIrg5gwA8",
  authDomain: "fastcomespeed-f9362.firebaseapp.com",
  databaseURL: "https://fastcomespeed-f9362-default-rtdb.firebaseio.com",
  projectId: "fastcomespeed-f9362",
  storageBucket: "fastcomespeed-f9362.firebasestorage.app",
  messagingSenderId: "571200091740",
  appId: "1:571200091740:web:2eff9910f4ad1fdf7b9899",
  measurementId: "G-VM73CJP2KC"
};
    

    onLoad() {
        //alert("FirebaseManager onLoad");
        if (FirebaseManager.instance === null) {
            FirebaseManager.instance = this;
            cc.game.addPersistRootNode(this.node);
            this.initializeFirebase();
        } else {
            this.node.destroy();
        }
    }

    private initializeFirebase() {
        try {
            if (!this.isInitialized) {
                const app = firebase.initializeApp(this.firebaseConfig);
                //alert(app);
                this.isInitialized = true;
                console.log("Firebase initialized successfully:", app);
            }
        } catch (error) {
            console.error("Firebase initialization error:", error);
            // 如果已經初始化過，會拋出錯誤，這是正常的
            if (error.code === 'app/duplicate-app') {
                this.isInitialized = true;
                console.warn("Firebase app already initialized, using existing instance.");
            }
            else{
                alert(error);
            }
        }
    }

    public static getInstance(): FirebaseManager {
        return FirebaseManager.instance;
    }

    public isFirebaseInitialized(): boolean {
        return this.isInitialized;
    }

    public getAuth() {
        if (!this.isInitialized) {
            throw new Error("Firebase not initialized");
        }
        return firebase.auth();
    }

    public getDatabase() {
        if (!this.isInitialized) {
            throw new Error("Firebase not initialized");
        }
        return firebase.database();
    }

    public static getFirebaseManager(): FirebaseManager {
        if (FirebaseManager.instance === null) {
            console.warn("FirebaseManager instance is null, creating a new one.");
            const node = new cc.Node('FirebaseManager');
            cc.game.addPersistRootNode(node);
            return node.addComponent(FirebaseManager);
        }
        return FirebaseManager.instance;
    }
}