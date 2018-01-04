import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import TodoList from './TodoList';
import TodoFrom from './TodoForm'

class App extends Component {
  constructor(props){
      super(props);
      this.state={
        todos:['Eat food','drink water']
      }
    }

  render(){
   
    return (
      <div>
        <Header/>
        <TodoFrom />
        <TodoList todos = {this.state. todos}/>
      </div>
    )
  }
}

export default App;
