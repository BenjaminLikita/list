let list = document.getElementById("list")
let filter = document.getElementById("filter")
let clearBtn = document.getElementById("clear")
let newTask = document.getElementById("newTask")
let submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener("click", addTask) 
list.addEventListener("click", deleteTask)
clearBtn.addEventListener("dblclick", clearTask)
filter.addEventListener("keyup", filterTask)

function addTask(){
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
        newTask.value = ""
        li.style.fontSize = "20px"
        li.style.lineHeight = "1.5"
        a.style.backgroundColor = "gray"       
        a.style.color = "white"       
        a.style.borderRadius = "10px"       
        a.style.padding = "5px"       
        a.style.fontSize = "15px"       
        a.style.borderRadius = "2px"       
        a.style.textDecoration = "none"       
    }
    // e.preventDefault()
}
function deleteTask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are you sure?")){
            let ele = e.target.parentElement
            ele.remove()
        }
    }
}
function clearTask(){
    if(confirm("Are you sure?")){
        list.innerHTML = ""
    }
}
function filterTask(e){
    let text = e.target.value.toLowerCase()
    document.querySelectorAll("li").forEach(task => {
        let item = task.firstChild.textContent.toLowerCase().indexOf(text)
        if (item != -1){
            task.style.display = "block"
        }else(
            task.style.display = "none"
        )
    })
}