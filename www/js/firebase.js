  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCg0otYeMK0aLc9eTae4vh2mn2AK7NAwDQ",
    authDomain: "biblia-sagrada-kja.firebaseapp.com",
    databaseURL: "https://biblia-sagrada-kja.firebaseio.com",
    projectId: "biblia-sagrada-kja",
    storageBucket: "biblia-sagrada-kja.appspot.com",
    messagingSenderId: "804565278470",
    appId: "1:804565278470:web:823c28ccc153c84f20c887",
    measurementId: "G-WS0N1K4PBG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });