const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");
function addtask(){
    if(input.value === " "){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value= " ";
    saveData();
}

listContainer.addEventListener("click",function(e){
   if(e.target.tagName === "LI"){
    e.targer.classList.toggle("checked");
    saveData();
   }
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
   }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}

function showtask(){
    listContainer.innerHTML = localStrorage.getItem("data");
}
showtask();