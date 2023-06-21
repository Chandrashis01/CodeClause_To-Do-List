 const inputBox=document.getElementById("input-box");
 const listContainer= document.getElementById("list-container")
 const priority= document.getElementById("priority-select")

 function addTask(){
    if(inputBox.value === '')
    {
        alert("You Must Write Something!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        var priority_chosen= priority.options[priority.selectedIndex].value;
        if(priority_chosen === "low")
        {
            let span1=document.createElement("span1");
            span1.innerHTML="Low";
            li.append(span1);
        }
        else if(priority_chosen === "medium")
        {
            let span2=document.createElement("span2");
            span2.innerHTML="Med";
            li.append(span2);
        }
        else if(priority_chosen === "high")
        {
            let span3=document.createElement("span3");
            span3.innerHTML="High";
            li.append(span3);
        }
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.append(span);
    }
    inputBox.value='';
    priority.value="low";
    saveData();
 }

 listContainer.addEventListener("click",function(e)
 {
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
 },false);

 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }


 function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
 }
 showTask();
