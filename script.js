let list = document.getElementById("list")
let filter = document.getElementById("filter")
let clearBtn = document.getElementById("clear")
let newTask = document.getElementById("newTask")
let submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener("click", addTask) 
list.addEventListener("click", deleteTask)

function addTask(e){
    if(newTask.value === ""){
        alert("Add a Task")
    } else{
        let li = document.createElement("li")
        li.innerText = `${newTask.value} `
        let a = document.createElement("a")
        a.setAttribute("href", "#")
        a.innerText = "X"
        li.appendChild(a)
        list.appendChild(li)       
    }
    e.preventDefault()
}
function deleteTask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are you sure?")){
            let ele = e.target.parentElement
            ele.remove()
        }
    }
}
