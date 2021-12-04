// Save user to local storage
export function saveUserToLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  
// Get user from local storage
  export function getUserFromLocalStorage() {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
  
// Generate Messages
function generatorMessageElement(msg, senderId) {
    return `
    <li class="flex 
    ${msg.senderId === senderId && "justify-end"} 
    items-center mb-4">
      <div class="mr-2">
        <img class="w-12 object-cover h-auto rounded-full"
          src="${msg.avatar}" alt="">
        <p class="mt-2 text-xs font-bold text-center">${msg.createdAt}</p>
      </div>
      <p class="p-2 bg-gray-200 rounded-md mr-12">${msg.content}</p>
    </li>
  `
  }

  // Rendering messages
  export function renderMessages(messages, container, senderId) {
    let messageHtmls = "";
    for (let msg of messages) {
      messageHtmls += generatorMessageElement(msg, senderId);
    }
 container.insertAdjacentHTML("afterbegin", messageHtmls)
  }
  

