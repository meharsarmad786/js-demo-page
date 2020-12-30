import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCeDAJB3N5sXk54dZJa7z6Fem81cIzTBng",
  authDomain: "shoppingcart-853b4.firebaseapp.com",
  databaseURL: "https://shoppingcart-853b4.firebaseio.com",
  projectId: "shoppingcart-853b4",
  storageBucket: "shoppingcart-853b4.appspot.com",
  messagingSenderId: "1037144194039",
  appId: "1:1037144194039:web:c2dc54e21b99a718468cf2",
  measurementId: "G-25ZX4Y2NS3"
});

const auth = firebase.auth();

export {auth};
