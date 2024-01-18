//your code here

function generateTodo() {
    const newTodoInput =document.getElementById("newTodoInput").value;

    const add =document.getElementById("add");

    const list=document.createElement('li');

    list.innerText=newTodoInput;
    add.appendChild(list);
}