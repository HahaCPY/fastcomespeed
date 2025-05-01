
// assets/Scripts/Network/NetworkManager.ts

import { _decorator, Component } from 'cc';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, update } from 'firebase/database';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

const { ccclass } = _decorator;

@ccclass('NetworkManager')
export class NetworkManager extends Component {
    private firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT.firebaseapp.com",
        databaseURL: "https://YOUR_PROJECT.firebaseio.com",
        projectId: "YOUR_PROJECT",
        storageBucket: "YOUR_PROJECT.appspot.com",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    private app = null;
    private db = null;
    private auth = null;
    private uid = '';
    private roomId = 'room1'; // default room

    onLoad() {
        this.initFirebase();
    }

    initFirebase() {
        this.app = initializeApp(this.firebaseConfig);
        this.db = getDatabase(this.app);
        this.auth = getAuth(this.app);

        signInAnonymously(this.auth).then(() => {
            console.log('🔐 Signed in anonymously');
        });

        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                this.uid = user.uid;
                this.joinRoom(this.roomId);
            }
        });
    }

    joinRoom(roomId: string) {
        const playerRef = ref(this.db, `rooms/${roomId}/players/${this.uid}`);
        set(playerRef, {
            x: 0,
            y: 0,
            heldObject: null
        });
        console.log(`✅ Joined room: ${roomId}`);
    }

    syncPlayerPosition(x: number, y: number, heldObject: string | null = null) {
        if (!this.uid) return;
        const posRef = ref(this.db, `rooms/${this.roomId}/players/${this.uid}`);
        update(posRef, { x, y, heldObject });
    }

    watchPlayers(callback: (data: any) => void) {
        const playersRef = ref(this.db, `rooms/${this.roomId}/players`);
        onValue(playersRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    }

    getUid() {
        return this.uid;
    }
}
