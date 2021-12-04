// Import stuffs
import {
getFirestore,
addDoc,
collection,
} 
from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"
// Import stuffs

// Get
const db = getFirestore();
const messageRef = collection(db, "messages")
// Get

// Defined
export function saveMessageToCollection(msg){
    console.log(msg)
    addDoc(messageRef, msg);
}
// Defined