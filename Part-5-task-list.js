//select button
var addBtn = document.querySelector('#addBtn')
addBtn.addEventListener(
    'click',
    function(){
        var taskElem = document.querySelector('#task')
        console.log ('task: ', taskElem.value)
    }
)

addBtn.addEventListener(
    'click',
    function(){
        var duedateElem = document.querySelector('#due-date')
        console.log ('Due date: ', duedateElem.value)
    }
)

addBtn.addEventListener(
    'click',
    function(){
        var priorityElem = document.querySelector('#priority')
        console.log ('Priority: ', priorityElem.value)
    }
)