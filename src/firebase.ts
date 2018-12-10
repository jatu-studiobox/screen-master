// Initialize Firebase
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDUwPdCORQxE7cOxdID7nRs8Rknz2lfKzM",
    authDomain: "screen-master-1f250.firebaseapp.com",
    databaseURL: "https://screen-master-1f250.firebaseio.com",
    projectId: "screen-master-1f250",
    storageBucket: "screen-master-1f250.appspot.com",
    messagingSenderId: "177320088940"
};
firebase.initializeApp(config);

export { firebase };