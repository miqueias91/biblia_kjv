  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDLBA7bfXA5mvYvVdlz_t0VcAtMPR2si3c",
    authDomain: "biblia-sagrada-ntlh.firebaseapp.com",
    databaseURL: "https://biblia-sagrada-ntlh-default-rtdb.firebaseio.com",
    projectId: "biblia-sagrada-ntlh",
    storageBucket: "biblia-sagrada-ntlh.appspot.com",
    messagingSenderId: "519771413167",
    appId: "1:519771413167:web:c32fac7919b534f787125a",
    measurementId: "G-D594E6Z95R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });