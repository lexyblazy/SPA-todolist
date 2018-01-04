import React, { Component } from "react";
import "./TodoForm.css";

class TodoForm extends Component {
  render() {
    return (
      <section className="form">
        <input type="text" id="todoInput" placeholder="Put your task here" />
      </section>
    );
  }
}

export default TodoForm;
