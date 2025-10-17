let div1=document.getElementById("boxes");
let taskdiv;
let task_input;
let task_done;
let  task_delete;

function add_task(){

//div creation    
let taskdiv=document.createElement("div");
taskdiv.style.width="100%";
taskdiv.style.marginBottom="30px";
taskdiv.style.height="50px";
taskdiv.style.display="flex";
taskdiv.style.justifyContent="space-evenly";
div1.appendChild(taskdiv);

//input
let task_input=document.createElement("input");
task_input.setAttribute("placeholder","enter the task");
taskdiv.appendChild(task_input);


//done btn
let task_done=document.createElement("button");
task_done.style.height="auto";
task_done.innerHTML="done";
task_done.style.backgroundColor="green";
task_done.style.color="white";
task_done.style.width="auto";
taskdiv.appendChild(task_done);
task_done.onclick=function(){
    task_done.remove();
    task_input.style.textDecoration="line-through";
}

//delet btn
let task_delete=document.createElement("button");
task_delete.innerHTML="delete";
task_delete.style.height="auto";
task_delete.style.width="auto";
task_delete.style.backgroundColor="red";
task_delete.style.color="white";
taskdiv.appendChild(task_delete);
task_delete.onclick=function(){
    taskdiv.remove();
}

}

function clears()
{
    
    div1.innerHTML="";
}

function daymode(){
   alert("day mode activated");
    let  div_main=document.getElementById("main");
    div_main.style.border="4px solid  blue";

   let  div_b1=document.getElementById("b1");
   div_b1.style.backgroundColor="#FFFFFF";

   let div_b2=document.getElementById("b2");
   div_b2.style.backgroundColor="#0D47A1";

   let div_b3=document.getElementById("b3");
   div_b3.style.backgroundColor="#0D47A1";

   let head=document.getElementById("t1");
   head.style.color="#0D47A1";

   let body=document.body;
   body.style.backgroundColor="#E3F2FD";

   localStorage.setItem("mode","day");

   let clear_btn=document.getElementById("clears");
   clear_btn.style.backgroundColor="#F57C00"
}

function nightmode(){
   alert("night mode activated");

   let  div_main=document.getElementById("main");
    div_main.style.border="none";

   let  div_b1=document.getElementById("b1");
   div_b1.style.backgroundColor="#121212";

   let div_b2=document.getElementById("b2");
   div_b2.style.backgroundColor="#121212c0";

   let div_b3=document.getElementById("b3");
   div_b3.style.backgroundColor="#121212c0";

   let head=document.getElementById("t1");
   head.style.color="white";

   let body=document.body;
   body.style.backgroundColor="gray";

   localStorage.setItem("mode","night");

   let clear_btn=document.getElementById("clears");
   clear_btn.style.backgroundColor="#2196F3"

}


window.onload=function(){

    let color_mode=this.localStorage.getItem("mode");
    if(color_mode==="day")
        {
            daymode();
        }    
    else {
        nightmode();
    }    
}