import firebase from '@react-native-firebase/app'
import Auth from '@react-native-firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVutXgwz5NczT3jhelIVKv9Ctt0OeoD6s",
    authDomain: "photolootapp-8f6fa.firebaseapp.com",
    projectId: "photolootapp-8f6fa",
    storageBucket: "photolootapp-8f6fa.appspot.com",
    messagingSenderId: "1067887492802",
    appId: "1:1067887492802:web:a188cb247f1662e105c55b",
    measurementId: "G-MDB5F9EJ2N"
  };


if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
export default () =>{
  return{firebase , Auth}
}