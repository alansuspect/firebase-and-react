import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBT_GmsrPemQJAf1OdZEGM3nKtqATXgmVY",
  authDomain: "fir-and-react-d5544.firebaseapp.com",
  databaseURL: "https://fir-and-react-d5544.firebaseio.com",
  projectId: "fir-and-react-d5544",
  storageBucket: "fir-and-react-d5544.appspot.com",
  messagingSenderId: "631826614203"
};
var fire = firebase.initializeApp(config);
export default fire;
