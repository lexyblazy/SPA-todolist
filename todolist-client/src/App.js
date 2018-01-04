import React, { Component } from "react";
// import logo from './logo.svg';
import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.getTodos = this.getTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    setTimeout(this.getTodos,1000) 
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
  addTodo(todo){
   
    axios.post('/api/todos',{name:todo.name})
    .then(res=>{
      console.log(res.data);
      this.getTodos();
    }).catch(e=>{
      console.log(e)
    })
  }
  render() {
    return (
      <div>
        <Header />
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
