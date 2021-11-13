
  const listEl = document.getElementById("todos");
  const getbtn = document.getElementById("btn")
  const getInput = document.getElementById("enter")
  getbtn.addEventListener("click", () => {
      let myValue = getInput.value
    //console.log(myValue)
    let blank = []
    blank.push(myValue)
    // console.log(blank)
  let liEl = document.createElement('li')
  let tickBox = document.createElement('i')
  tickBox.className = "far fa-circle"
  liEl.className = "note"
  liEl.textContent =  blank
  liEl.appendChild(tickBox)
  listEl.appendChild(liEl)
  const noteEls = document.querySelectorAll(".note")
  for (let i = 0; i < noteEls.length; i++){
      noteEls[i].addEventListener("click", function () {
        
        noteEls[i].children[0].classList.toggle("note-checked")
      })
      console.log(noteEls)
  }
  })
  
  
