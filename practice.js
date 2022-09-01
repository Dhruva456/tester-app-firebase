//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyAZNthrwazwCcXdyjFRics2CCCOq_xe8Ms",
  authDomain: "test-proje-7bf83.firebaseapp.com",
  databaseURL: "https://test-proje-7bf83-default-rtdb.firebaseio.com",
  projectId: "test-proje-7bf83",
  storageBucket: "test-proje-7bf83.appspot.com",
  messagingSenderId: "272159592168",
  appId: "1:272159592168:web:20180be0b458ee91d5835d",
  measurementId: "G-NZ2LCT66YK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function adduser() {
  username = document.getElementById("input_text").value;
  firebase.database().ref("/").child(username).update({
    purpose: "addinguser",
  });
}
