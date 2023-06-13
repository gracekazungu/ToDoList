const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
function AddTask(){
    if(inputBox.value===""){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}



listContainer.addEventListener("click",async function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    let result=await fetch("https://dummyjson.com/todos/add",{
    method: "POST",
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(saveData())
})
.then(response=>response.json())
.then(response=>response)
.catch(error=>error.message)
console.log({result})

},false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


