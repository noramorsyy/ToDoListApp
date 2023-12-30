// Get references to the input box and list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask(){
    // Check if the input box is empty
    if(inputBox.value === ''){
        alert("Make sure to write something.");
    }else{
        // Create a new task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create a delete button for the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Clear the input box after adding a task
    inputBox.value = "";
    // Save the updated task list to local storage
    saveData();
}
// Event listener for marking tasks as checked or deleting them
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// Function to save the current task list to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// Function to display tasks from local storage on page load
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// Load and display tasks from local storage when the page loads
showTask();