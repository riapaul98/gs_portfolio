var todos = [{
    id: 1,
    title: "meeting",
    desc: "meeting at 6pm with VC"
},
{
    id: 2,
    title: "shopping",
    desc: "shopping at 7pm"
}]; //entry array

var show_todo = document.querySelector('.show_todo');

if (todos.length == 0) {
    show_todo.textContent = "No Todos";
}
else {
    todos.forEach(function (todo) {
        var todo_wrapper = document.createElement('div');

        var wrapper_div = document.createElement('div');
        var action_wrapper = document.createElement('div');

        var title = document.createElement('h3');
        var desc = document.createElement('h5');

        title.textContent = todo.title;
        desc.textContent = todo.desc;

        var deleteButton = document.createElement('button');
        var editButton = document.createElement('button');

        deleteButton.addEventListener('click', function () {
            console.log(todo.id);
            //deleteTodo
        });

        editButton.addEventListener('click', function () {
            console.log(todo.id);
        });

        deleteButton.textContent = 'Delete';
        editButton.textContent = 'Edit';

        wrapper_div.appendChild(title);
        wrapper_div.appendChild(desc);

        action_wrapper.appendChild(deleteButton);
        action_wrapper.appendChild(editButton);

        todo_wrapper.appendChild(wrapper_div);
        todo_wrapper.appendChild(action_wrapper);

        show_todo.appendChild(todo_wrapper);

    });
}


