const taskform = document.querySelector('.task-form')
const taskinput = document.querySelector('.task-input')
const categorydropdown = document.querySelector('.category-dropdown')
const tasklistDiv  = document.querySelector('.task-list')
const taskcard  = document.querySelector('.task-card')
const submit = document.querySelector('.btn-primary')
const totaltasksCount = document.querySelector('#total-tasks')
const completedTasksCount = document.querySelector('#completed-tasks')
const DarkMode = document.querySelector('.theme-toggle-btn')
const body = document.querySelector('body')
const searchBar = document.querySelector('.search-bar')

const filterDropdown = document.querySelector('.filter-dropdown')

let searchText = ""
let selectedCategory = "all"

let arryOfInputs =  JSON.parse(localStorage.getItem('Obj')) ||  []



// -----------------------------THIS ONE IS FOR RANDERING THE INPUTS  
let randerInputs = function(){

  tasklistDiv.innerHTML = ''

  let filteredTasks = arryOfInputs.filter(task => {

    let matchText = task.Input.toLowerCase().includes(searchText)

    let matchCategory =
      selectedCategory === "all" ||
      task.category === selectedCategory

    return matchText && matchCategory
  })

  let completedCount = filteredTasks.filter(task => task.completedTask).length
  completedTasksCount.textContent = completedCount



  totaltasksCount.textContent = filteredTasks.length

  filteredTasks.forEach((index,i)=>{

    tasklistDiv.innerHTML += `
      <div class="task-card ${index.completedTask ? "completed" : ""}">
        <div class="task-details">
          <h3 class="task-title">${index.Input}</h3>

          <div class="task-tags">
            <span class="badge ${getCategoryClass(index.category)}">
              ${index.category}
            </span>

            <span class="status-label ${index.completedTask ? "status-completed" : "status-pending"}">
              ${index.completedTask ? "Completed" : "Pending"}
            </span>
          </div>

        </div>

        <div class="task-actions">
          <button onclick="EditTask(${i})" class="btn btn-action btn-edit">Edit</button>
          <button onclick="comleteTask(${i})" class="btn btn-action btn-complete">
            ${index.completedTask ? "Undo" : "Complete"}
          </button>
          <button onclick="deleteTask(${i})" class="btn btn-action btn-delete">Delete</button>
        </div>

      </div>`
  })
}



searchBar.addEventListener("input", (e) => {
    searchText = e.target.value.toLowerCase()
    randerInputs()
})

filterDropdown.addEventListener("change", (e) => {
    selectedCategory = e.target.value
    randerInputs()
})

// -----------------------------THIS ONE IS FOR compeleting  THE INPUTS cards
let comleteTask = (i) => {

 if(arryOfInputs[i].completedTask === false){
    arryOfInputs[i].completedTask = true
 }
else{
    arryOfInputs[i].completedTask = false
}
  localStorage.setItem('Obj',JSON.stringify(arryOfInputs))
  randerInputs()
}

// -----------------------------THIS ONE IS FOR catagore color 
function getCategoryClass(category){

    if(category === "work"){
        return "badge-work";
    }

    if(category === "study"){
        return "badge-study";
    }

    if(category === "personal"){
        return "badge-personal";
    }

}


// -----------------------------THIS ONE IS FOR Deleting  THE INPUTS cards
let deleteTask=(i)=>{

  arryOfInputs.splice(i,1)
  localStorage.setItem('Obj',JSON.stringify(arryOfInputs))
  randerInputs()
 
}

// -----------------------------THIS ONE IS FOR Edit task --------- 
let EditTaskIndex = null
function EditTask(i){
EditTaskIndex = i
let editTaskValue= arryOfInputs[i]
taskinput.value = editTaskValue.Input
categorydropdown.value =editTaskValue.category
submit.textContent = 'Save Edit'
localStorage.setItem('Obj',JSON.stringify(arryOfInputs))
}

// -----------------------------THIS ONE IS FOR TAKING THE INPUTS 


taskform.addEventListener('submit',(e)=>{
e.preventDefault()
 let Inputs = taskinput.value
 let category = categorydropdown.value
let objOfInput = {
 Input:Inputs,
 category:category,
 completedTask:false
}


if(EditTaskIndex !== null){
    arryOfInputs[EditTaskIndex].Input = Inputs
    arryOfInputs[EditTaskIndex].category = category
    EditTaskIndex = null
}
else{
    arryOfInputs.push(objOfInput)
}


localStorage.setItem('Obj',JSON.stringify(arryOfInputs))
taskform.reset()
submit.textContent = 'Add Task'
randerInputs();

})
/// ******************* dark mode************

DarkMode.addEventListener('click', () => {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        DarkMode.textContent = "Dark Mode OFF";
        localStorage.setItem("theme", "dark");
    } else {
        DarkMode.textContent = "Dark Mode ON";
        localStorage.setItem("theme", "light");
    }

});






//--------------------

document.querySelector("#taskContainer").addEventListener("click", function (e) {

    if (e.target.classList.contains("delete")) {
        console.log("Delete clicked");
    }

    if (e.target.classList.contains("complete")) {
        console.log("Complete clicked");
    }

});




//-------------------------

document.querySelector("#grand").addEventListener("click", () => {
    console.log("Grandparent");
});

document.querySelector("#parent").addEventListener("click", () => {
    console.log("Parent");
});

document.querySelector("#child").addEventListener("click", () => {
    console.log("Child");
});



//********************* */

document.querySelector("#grand").addEventListener("click", () => {
    console.log("Grandparent (capture)");
}, true);

document.querySelector("#parent").addEventListener("click", () => {
    console.log("Parent (capture)");
}, true);

document.querySelector("#child").addEventListener("click", () => {
    console.log("Child (capture)");
}, true);


let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    DarkMode.textContent = "Dark Mode OFF";
} else {
    body.classList.remove("dark-mode");
    DarkMode.textContent = "Dark Mode ON";
}

randerInputs();