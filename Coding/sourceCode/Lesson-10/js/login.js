// Import stuffs
import {
    GoogleAuthProvider,
    signInWithPopup,
    getAuth,
    onAuthStateChanged,
    } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
    import {saveUserToLocalStorage, getUserFromLocalStorage} from "./helper.js"
// Import stuffs
    
// Get
    const logInGGacc = document.getElementById("logInGoogleAcc")
    const auth = getAuth();
// Get

// Define Google Sign in
  function signinWithGoogleAccount() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          saveUserToLocalStorage(user)
          window.location.href = `./chat.html?uid=${user.uid}`
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        })
    }

    // Define sign-in ( not returning to sign up page )
  function onAuthenticationListener(user){
console.log(user)
if(user){
  window.location.href = `./chat.html`
} 
  }
logInGGacc.addEventListener("click", signinWithGoogleAccount);

onAuthStateChanged(auth, onAuthenticationListener );

   