$(document).ready(function(){

    $.getJSON('/api/todos')
    .then( todos => {
        todos.forEach(todo =>{
            showTodo(todo)
        })
    })

    $('#todoInput').keypress(function(e){
        var todo = $('#todoInput').val();
        if(e.keyCode === 13){
            addTodo(todo);
            $('#todoInput').val('')
        }
    })

  
    $('.list').on('click','span',function(){
      deleteTodo($(this).parent());
      e.stopPropagation();
    })

    $('.list').on('click','li',function(){
        updateTodo($(this))
    })
  
    
})


    


function showTodo(todo){
    var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>')
    newTodo.data('id',todo._id);
    newTodo.data('completed',todo.completed);
    if(todo.completed){
        newTodo.addClass('done');
    }
    $('ul').append(newTodo);
}

function  addTodo(todo){
    $.post('/api/todos',{name:todo})
    .then( todo => {
        showTodo(todo);
    })
}

function updateTodo(todo){
    var clickedID =todo.data('id');
    var updateUrl = '/api/todos/' + clickedID;
    var isDone = !todo.data('completed');
    var updateData = {completed:isDone}
    $.ajax({
        method:'PUT',
        url:updateUrl ,
        data:updateData
    }).then(res =>{
        console.log(res);
        todo.toggleClass('done');
        todo.data('completed',isDone)
    })
}

function deleteTodo(todo){
    var clickedID =todo.data('id');
    var deleteUrl = '/api/todos/' + clickedID;
    $.ajax({
        method:'DELETE',
        url:deleteUrl 
    }).then(res =>{
        console.log('Deleted todo',res);
        todo.remove()
    })
}