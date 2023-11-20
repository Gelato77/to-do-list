const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completed = [];

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        completed.push(e.target);
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function showCompleted(){
    let text = "<ul>";
    completed.forEach(line);
    text += "</ul>";

    listContainer.innerHTML = text;
    
    saveData();
}

function clearAll(){
    listContainer.remove();
    saveData();
}

function line(value) {
    text += "<li>" + value + "</li>";
  } 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();