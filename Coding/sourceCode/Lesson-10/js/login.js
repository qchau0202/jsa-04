// Sign in with google
import {
    GoogleAuthProvider,
    signInWithPopup,
    getAuth,
    } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
    // console.log(GoogleAuthProvider)
    import {saveUserToLocalStorage} from "./helper.js"
    
    const logInGGacc = document.getElementById("logInGoogleAcc")
    
    function signinWithGoogleAccount () {
        const provider = new GoogleAuthProvider()
        const auth = getAuth();
    
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          saveUserToLocalStorage()
          window.location.href = `./chat.html?uid=${user.uid}`
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        })
    }
    logInGGacc.addEventListener("click", signinWithGoogleAccount);

    // Sign in with github
   