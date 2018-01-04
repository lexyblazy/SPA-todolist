import React, { Component } from "react";
import TodoItem from './TodoItem';


class TodoList extends Component {
  render() {
    const todos = this.props.todos.map((todo,index)=>{
        return <TodoItem key = {index} todo={todo}/>
    })

    return <ul className="list"> {todos}</ul>;
  }
}

export default TodoList;
