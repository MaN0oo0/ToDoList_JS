//Settin Up Variable


let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");

let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");


//Foucs On Input Field



window.onload=function(){
    theInput.focus();
}

//Addin The Task


theAddButton.onclick=function(){
    if (theInput.value==="") {
        alert("No Value")
    }
    else{

        let noTask = document.querySelector(".no-tasks");

        if (document.body.contains(document.querySelector(".no-tasks"))) {
            
            noTask.remove();
        }
        //Create Span Element

        let mainSpan=document.createElement("span");

        //Create Dlete Button

        let DeleteButton=document.createElement("span");

        //add Text To MainSpan

        let text=document.createTextNode(theInput.value);

         //add Text To DeleteButton

         let DeleteText=document.createTextNode("Delete");

         //Add Text to span
          mainSpan.appendChild(text);

          //Add Class To Span

          mainSpan.className="task-box";
          //add text to delete button

          DeleteButton.appendChild(DeleteText);

          //add Class To Delete Button

          DeleteButton.className="delete";

          //Add Delete Button To MainSpan
          mainSpan.appendChild(DeleteButton);
          
          //Add The Task To The CONTAINER

          tasksContainer.appendChild(mainSpan);
          theInput.value="";
          theInput.focus();
          CalcTasks();

    }
};
document.addEventListener('click',function(e){


//Delete Task

if(e.target.className=='delete'){

    //remove Current Task
e.target.parentNode.remove();

//check number Of Tasks 

if (tasksContainer.childElementCount==0) {
    CreateNoTasks();
}
}

//Finsh Task
if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
}
CalcTasks();

});


//Function ToCreate No Tasks

function CreateNoTasks(){
    let msgSpan=document.createElement("span");

    let msgtext=document.createTextNode("No Tasks To Show");

    msgSpan.appendChild(msgtext);

    msgSpan.className="no-tasks";

    tasksContainer.appendChild(msgSpan);


}

//Function To Calc Tasks


function CalcTasks()
{
    //calc all Tasks
    tasksCount.innerHTML=document.querySelectorAll(".tasks-content .task-box").length;


    //calc Completed Tasks

    tasksCompleted.innerHTML=document.querySelectorAll(".tasks-content .finished").length;

}