import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    if (this.props.todos.length === 0) {
      return <div className="list">Loading...</div>;
    }
    const { deleteTodo } = this.props;
    const { updateTodo } = this.props;
    const todos = this.props.todos.map((todo, index) => {
      return (
        <TodoItem
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      );
    });

    return <ul className="list"> {todos}</ul>;
  }
}

export default TodoList;
