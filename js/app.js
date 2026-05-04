let $ = document;
let bodyElem = $.body;
let tasksWrapperElem = $.querySelector(".tasks")
let formElem = $.getElementsByName("form")

let tasks = [];

const reder = () => {
  tasks.forEach(task => {
    tasksWrapperElem.innerHTML += `<div class="text-slate-800 flex items-center justify-between p-2 border border-slate-300
      rounded-lg">
        <p>${task.title}</p>
        <div class="flex gap-1">
          <div class="remove p-1" onclick="removeTask(event)">
            <svg class="h-5 rotate-45 text-rose-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div class="complete p-1" onclick="completTask(event)">
            <svg class="h-5 text-green-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="m5 14l3.5 3.5L19 6.5" />
            </svg>
          </div>
          <div class="edit p-1" onclick=editTask(event)>
            <svg class="h-5 text-slate-600 cursor-pointer" cxmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M8.172 19.828L19.828 8.172c.546-.546.818-.818.964-1.112a2 2 0 0 0 0-1.776c-.146-.295-.418-.567-.964-1.112c-.545-.546-.817-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.566.418-1.112.964L4.172 15.828c-.579.578-.868.867-1.02 1.235C3 17.43 3 17.839 3 18.657V21h2.343c.818 0 1.226 0 1.594-.152c.367-.152.656-.442 1.235-1.02M12 21h6M14.5 5.5l4 4" />
            </svg>
          </div>
        </div>
      </div>`
  })
}

const removeTask = (ev) => {
  target = ev.target.parentElement.parentElement.parentElement
  target.remove()
}
const completTask = (ev) => {
  target = ev.target.parentElement.parentElement.parentElement
  target.classList.toggle("text-slate-800")
  target.classList.toggle("text-slate-400")
  target.classList.toggle("line-through")
}
const editTask = (ev) => {
  target = ev.target.parentElement.parentElement.parentElement
  target.querySelector("p").remove()
  target.classList.add("flex-row-reverse")
  target.innerHTML += `<form onsubmit=editFunc(event)><input type="text" onsubmit="Onsubmit(event)" class="border border-gray-300 rounded-sm px-1"></form>`
}

const Onsubmit = (ev) => {
  tasksWrapperElem.innerHTML = ""
  ev.preventDefault()
  let newTitle = ev.target[0].value
  let newTask = { id: tasks.length + 1, title: newTitle, status: false }
  tasks.push(newTask)
  reder()
  ev.target[0].value = ""
}

const editFunc = (ev) => {
  ev.preventDefault()
  let newtitle = ev.target[0].value
  let target = ev.target.parentElement
  target.querySelector("form").remove()
  target.innerHTML += `<p>${newtitle}</p>`
}