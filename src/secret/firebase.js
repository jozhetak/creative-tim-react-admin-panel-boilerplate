import * as firebase from 'firebase';
// secret file have firebase configuration and auth stuff
import secret from './secret';
// Initialize Firebase
firebase.initializeApp(secret.firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
