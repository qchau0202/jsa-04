// Import stuffs
import {
    getAuth,
    signOut
    } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import {saveUserToLocalStorage, getUserFromLocalStorage} from "./helper.js"
import {renderMessages} from "./helper.js"
import{saveMessageToCollection} from "./firebase-helper.js"
// Import stuffs

// Get
const currentUser = getUserFromLocalStorage() // Get current user
const auth = getAuth() // Authentication
const urlParams = new URLSearchParams(window.location.search); // URL params
const senderId = currentUser.uid // Get UID
const msgContainer = document.getElementById("msgContainer"); // Get ul tag
const getBtn = document.getElementById("btn") // Get send button
const getInputVal = document.getElementById("getValue") // Get input element
// Get

// Click send
getBtn.addEventListener("click", (e) => {
    e.preventDefault();
        let newVal = getInputVal.value
        const newObj = {
            // id: "",
            avatar: currentUser.photoURL,
            content: newVal,
            createdAt: "9:00",
            senderId: senderId,
        }
saveMessageToCollection(newObj)
})
// Click send

// Log out
const logout = document.getElementById("logOut")
logout.addEventListener("click", () => {
    signOut(auth);
    window.location.href = `./index.html`
})
