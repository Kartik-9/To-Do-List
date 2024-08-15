const input = document.getElementById("input-box");
const list_C = document.getElementById("list-container");

function addTask(){
    if(input.value === ''){
        alert("Required Input")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list_C.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
}

list_C.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);