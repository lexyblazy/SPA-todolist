import React, { Component } from "react";
// import logo from './logo.svg';
import Header from "./Header";
import TodoList from "./TodoList";
import TodoFrom from "./TodoForm";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.getTodos = this.getTodos.bind(this);
    this.getTodos();
  }

  getTodos() {
    axios
      .get("/api/todos")
      .then(res => {
        const todos = res.data
        this.setState({ todos });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <Header />
        <TodoFrom />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
