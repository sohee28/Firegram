import * as firebase from 'firebase/app'
import 'firebase/storage'; //images
import 'firebase/firestore'; //database

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB82wej0hLXRtr9JHhJg_PlCVpa7CADkk0",
    authDomain: "firegram-app-63139.firebaseapp.com",
    databaseURL: "https://firegram-app-63139.firebaseio.com",
    projectId: "firegram-app-63139",
    storageBucket: "firegram-app-63139.appspot.com",
    messagingSenderId: "648073173898",
    appId: "1:648073173898:web:ab39f27cefa8909e128673"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage;
  const projectFirestore = firebase.firestore;

  export {projectStorage, projectFirestore};
