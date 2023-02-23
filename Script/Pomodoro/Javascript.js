const tasks=[];
let time=0;
let timer=null;
let timerBreak=null;
let current=null; //tarea actual

const bAdd=document.querySelector("#bAdd");//el boton
const itTask=document.querySelector("#itTask");//el input
const form =document.querySelector("#form");//formulario
const taskName=document.querySelector('#time #taskName');

renderTasks();
renderTime();

form.addEventListener('submit', e =>{
    e.preventDefault();// no se envia el formulario
    if(itTask.value != ""){ //creamos tarea si es diferente de vacio
        createTask(itTask.value);
        itTask.value=""; //elimina texto del input
        renderTasks();
    }
});

function createTask(value){
    const newtask={
        id:(Math.random() * 100).toString(36).split(3),
        title:value,
        completed:false
    };
    tasks.unshift(newtask); //agregamos la tarea al arreglo
}

function renderTasks(){
    const html=tasks.map((task)=>{
        return `
        <div class="task">
        <div class="completed">${
            task.completed 
            ? `<span class="done" > Done </span>`
            :`<button class="start-button" data-id="${task.id}">Start</button>`
        }
        </div>
        <div class="title">${task.title}</div>
        </div>
        
        `;
    });

    const tasksContainer=document.querySelector('#tasks');
    tasksContainer.innerHTML=html.join("");

   const startButtons=document.querySelectorAll('.task .start-button');

   startButtons.forEach(button=>{
        button.addEventListener('click', e=>{
            if(!timer){
                const id=button.getAttribute('data-id');
                startButtonHandler(id);
                button.textContent='In progress...'
            }
        });
   });
}


function startButtonHandler(id){
    time=5;
    current=id;
    const taskIndex=tasks.findIndex(task=>task.id==id);
    taskName.textContent=tasks[taskIndex].title;

    timer=setInterval(() => {
        timeHandler(id);
    }, 1000);
}

function timeHandler(id){
    time--;
    renderTime();
        if(time==0){
            clearInterval(timer);
            timer=null;
            markCompleted(id);
            renderTasks();
            starBreak();
        }
}

function renderTime(){
const timeDiv=document.querySelector('#time #value')
const minutes=parseInt(time/60);
const seconds=parseInt(time%60);

timeDiv.textContent=`
    ${minutes < 10 ? "0" :""}
    ${minutes}
    :${seconds < 10 ? "0" :""}
    ${seconds}`;

}

function markCompleted(id){
const taskIndex=tasks.findIndex((task)=>task.id==id);
tasks[taskIndex].completed=true;
}

function starBreak(){
    time=3;
    taskName.textContent="break";
    timerBreak=setInterval(()=>{
        timerBreakHandler();
    },1000)
}

function timerBreakHandler(){
    time--;
    renderTime();

    if(time==0){
        clearInterval(timerBreak);
        current=null;
        timerBreak=null;
        taskName.textContent=""
        renderTasks();
    }
}