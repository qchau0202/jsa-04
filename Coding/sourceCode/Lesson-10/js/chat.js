import {renderMessages} from "./helper.js"
import {mockData} from "./mockData.js";
// import { generatorMessageElement } from "./helper.js";
const urlParams = new URLSearchParams(window.location.search);
const senderId = urlParams.get("uid");
// console.log(senderId);

const getBtn = document.getElementById("btn")
const getInputVal = document.getElementById("getValue")

getBtn.addEventListener("click", () => {
    if (getInputVal.value !== ""){
        let newVal = getInputVal.value
        const newObj = {
            id:"",
            avatar:"https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",
            content: newVal,
            createdAt: "9:00",
            senderId:""
        }
mockData.push(newObj)
console.log(mockData)
renderMessages(mockData, msgContainer);
    }
})
const msgContainer = document.getElementById("msgContainer");


