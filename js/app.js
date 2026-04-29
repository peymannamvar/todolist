let $ = document;
let bodyElem = $.body;

let tasks = [
    {id:0, title: "Learning JS", status: false},
    {id:1, title: "Do exersise", status: false},
    {id:1, title: "Go to work", status: false},
];

const dataStructure = () => {
    tasks.forEach(task => {
        bodyElem.innerHTML += `<li class="m-4 p-4 text-lg border border-gray-200 rounded-2xl list-none">${task.title}</li>`
    })
}

dataStructure()