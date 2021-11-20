
  // const listEl = document.getElementById("todos");
  // const getbtn = document.getElementById("btn")
  // const getInput = document.getElementById("enter")
  // getbtn.addEventListener("click", () => {
  //   const myValue = getInput.value
  //   if (myValue !== ""){
  //    //console.log(myValue)
  //   let blank = []
  //   blank.push(myValue)
  //   // console.log(blank)
  // let liEl = document.createElement('li')
  // let tickBox = document.createElement('i')
  // tickBox.className = "far fa-circle"
  // liEl.className = "note"
  // liEl.textContent =  blank
  // liEl.appendChild(tickBox)
  // listEl.appendChild(liEl)
  // const noteEls = document.querySelectorAll(".note")
  // for (let i = 0; i < noteEls.length; i++){
  //     noteEls[i].addEventListener("click", function () {
        
  //       noteEls[i].children[0].classList.toggle("note-checked")
  //     })
  //     console.log(noteEls)
  // } console.log(blank)
  // }})

const getUl = document.getElementById("box")
const getBtn = document.getElementById("btn")
const getVal = document.getElementById("value")
const noteEls=document.querySelectorAll(".note")
const getDelBtn = document.getElementById("deleteBtn")
let currentCount = 0
getBtn.addEventListener("click", () => {  
  if (getVal.value == "") {
    alert("you're missing entries !")
  } else if (currentCount < 6){
    currentCount += 1;
    // console.log(currentCount)
    const itemEl = document.createElement("li")
  const tickBox = document.createElement("i")
  tickBox.className = "far fa-circle mt-2.5"
    itemEl.className = "leading-loose text-lg note flex justify-between"
    itemEl.textContent = getVal.value
    itemEl.appendChild(tickBox)
    getUl.appendChild(itemEl)
    deleteBtn.addEventListener("click", () => {
      getUl.removeChild(itemEl)
      currentCount = 0
  })
  }
  else {
    alert("Too many work !");
  }
  const noteEls = document.querySelectorAll(".note")
  for (let i = 0; i < noteEls.length; i++){
      noteEls[i].addEventListener("click", function () {
          // noteEls[i].classList.toggle("note-active")
          noteEls[i].children[0].classList.toggle("note-checked")
      })
  }
})

  
  
  
  
  
