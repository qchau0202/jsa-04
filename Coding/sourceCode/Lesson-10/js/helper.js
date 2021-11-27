
export function saveUserToLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  
  export function getUserFromLocalStorage() {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
  
function generatorMessageElement(msg) {
    return `
      <li class="flex items-center mb-4">
        <div class="mr-2">
          <img class="w-12 object-cover h-auto rounded-full"
            src="${msg.avatar}" alt="">
          <p class="mt-2 text-xs font-bold text-center">${msg.createdAt}</p>
        </div>
        <p class="p-2 bg-gray-200 rounded-md">${msg.content}</p>
      </li>
    `
  }
  
  export function renderMessages(messages, container) {
    let messageHtmls = "";
    for (let msg of messages) {
      messageHtmls += generatorMessageElement(msg);
    }
 container.innerHTML = messageHtmls;
  }
  

