function addTask(){
    let text= document.getElementById("text").value;
    localStorage.setItem(localStorage.length+1,text);
    document.location.reload(true);
}
for(let i=0 ;i<localStorage.length; i++) {
    let taskId = document.createElement("div");
    taskId.innerText = `${i + 1}`;
    taskId.className = "task-id";

    let taskText = document.createElement("div");
    let text = document.createTextNode(localStorage.getItem(localStorage.key(i)));
    taskText.appendChild(text);
    taskText.className = "task-text";

    let newTask = document.createElement("div");
    newTask.className = "task";

    newTask.appendChild(taskId);
    newTask.appendChild(taskText);

    document.getElementById("tasks").appendChild(newTask);
}
function removeTasks(){
    localStorage.clear();
    document.location.reload(true);
    
}

    