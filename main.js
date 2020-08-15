var todos =[];
var todo_list_wrapper=document.querySelector('.show_todo');
function updateTodolist(todos){
    if(todos.length==0)
    {
        todo_list_wrapper.textContent="No Todos";
    }
}
updateTodolist(todos);