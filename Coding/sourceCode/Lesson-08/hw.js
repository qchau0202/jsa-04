
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

  // const addEl = document.getElementById("add");
// const subEl = document.getElementById("sub");
// const countEl = document.getElementById("count");

// let currentCount = 0;

// addEl.addEventListener("click", () => {
//   if (currentCount < 10) {
//     currentCount += 1;
//     countEl.textContent = currentCount;
//   } else {
//     alert("khong duoc phep tang nua");
//   }
// });

// subEl.addEventListener("click", () => {
//   if (currentCount > 0) {
//     currentCount -= 1;
//     countEl.textContent = currentCount;
//   } else {
//     alert("khong duoc phep giam nua");
//   }
// });

const todos = [
  // { title: "Ăn tối", isDone: false, id: 1 },
  // { title: "Học bài", isDone: false, id: 2 },
  // { title: "Đi ngủ", isDone: false, id: 3 },
];

console.log("before", todos);

const todoEls = document.getElementById("todos");
const todoInput = document.getElementById("todoVal");
const todoBtn = document.getElementById("addTodo");

function generatorTodoElement(todo) {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent = "space-between";
  container.style.marginBottom = "10px";

  const deleteEl = document.createElement("span");
  deleteEl.textContent = "X";
  deleteEl.classList.add("deleteTodo");
  deleteEl.setAttribute("data-id", todo.id);

  const todoElement = document.createElement("li");
  todoElement.setAttribute("class", todo.isDone ? "todoItem done" : "todoItem");
  todoElement.setAttribute("data-id", todo.id);
  todoElement.textContent = todo.title;

  container.appendChild(todoElement);
  container.appendChild(deleteEl);
  return container;
}

function renderTodos(todosData) {
  for (let todo of todosData) {
    let todoNode = generatorTodoElement(todo);
    todoEls.appendChild(todoNode);
  }
  editTodo();
  removeTodo();
}

function editTodo() {
  const todoItemEls = document.querySelectorAll(".todoItem");
  todoItemEls.forEach((item) => {
    item.addEventListener("dblclick", () => {
      let todoId = item.getAttribute("data-id");
      for (let val of todos) {
        if (val.id == todoId) {
          val.isDone = !val.isDone;
        }
      }
      reRenderTodos();
    });
  });
}

function removeTodo() {
  const todoItemEls = document.querySelectorAll(".deleteTodo");
  for (let item of todoItemEls) {
    item.addEventListener("click", () => {
      let todoId = item.getAttribute("data-id");
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == todoId) {
          todos.splice(i, 1);
          reRenderTodos();
          break;
        }
      }
    });
  }
}

function reRenderTodos() {
  todoEls.innerHTML = "";
  renderTodos(todos);
}

todoBtn.addEventListener("click", () => {
  if (todoInput.value !== "") {
    const newTodo = {
      title: todoInput.value,
      isDone: false,
      id: `${new Date().valueOf()}`,
    };
    todos.push(newTodo);
    todoInput.value = "";
    reRenderTodos();
  } else {
    alert("Input khong duoc de trong");
  }
});

renderTodos(todos);

  
  
  
  
  
