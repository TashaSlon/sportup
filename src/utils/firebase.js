import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXM5dvUs2a_5AMODNaHHleNzGSCOZVDsE",
    authDomain: "italkwcs-c9a9d.firebaseapp.com",
    databaseURL: "https://italkwcs-c9a9d.firebaseio.com",
    projectId: "italkwcs-c9a9d",
    storageBucket: "italkwcs-c9a9d.appspot.com",
    messagingSenderId: "530195798354",
    appId: "1:530195798354:web:0158529e3632027871c28b",
    measurementId: "G-PQHTDEP3V7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export function authorize() {
    return signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            console.log(token, user);
            return token;
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
  });
}