import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleClick() {
    this.props.deleteTodo(this.state.todo);
  }
  handleToggle(e) {
    if (e.target.className !== "task") {
      return;
    }
    const updatedTodo = {
      ...this.state.todo,
      completed: !this.state.todo.completed
    };
    this.setState({ todo: updatedTodo }, () => {
      this.props.updateTodo(this.state.todo);
    });
  }
  render() {
    const { todo } = this.props;
    let style = {};
    if (todo.completed) {
      style = { textDecoration: "line-through"};
    }

    return (
      <li className="task" style={style} name="todo" onClick={this.handleToggle}>
        {todo.name}{" "}
        <span name="delete" onClick={this.handleClick}>
          X
        </span>{" "}
      </li>
    );
  }
}

export default TodoItem;
