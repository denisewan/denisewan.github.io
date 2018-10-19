//select button
var mkList = function (taskName, dueDate, priority){
    //create <li></li>
    var liElem = document.createElement('li');
    // >li> a task - due date  </li>
    liElem.textContent = '${taskName} - ${dueDate}';
    // <li class="list-group"> a task - due date </li>
    liElem.classList.add('list-group-item');
    return (liElem)
}


var addBtn = document.querySelector('#addBtn')
addBtn.addEventListener(
    'click',
    function(){
        var taskElem = document.querySelector('#task');
        var duedateElem = document.querySelector('#due-date');
        var priorityElem = document.querySelector('#priority');
        var todoElem = mkList(taskElem.value, duedateElem.value, priorityElem.value);
        var todoListElem = document.querySelector('#todo-list');
        todoListElem.appendChild(todoElem);

    }
)