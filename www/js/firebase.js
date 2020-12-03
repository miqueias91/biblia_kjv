// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlE1HKVBsEmKFhkoC5rJim-MBqH7Ppbi4",
  authDomain: "biblia-sagrada-acf.firebaseapp.com",
  databaseURL: "https://biblia-sagrada-acf.firebaseio.com",
  projectId: "biblia-sagrada-acf",
  storageBucket: "biblia-sagrada-acf.appspot.com",
  messagingSenderId: "452663083474",
  appId: "1:452663083474:web:bc74e6a6862649d97f080b",
  measurementId: "G-BKKH4SM9QR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().signInAnonymously().catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
});