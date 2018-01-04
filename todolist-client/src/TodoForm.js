import React, { Component } from "react";
import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo:'',
      value:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const {newTodo} = this.state;
    this.props.addTodo({name:newTodo});
    this.setState({value:''})
  }
  handleChange(e){
    const value = e.target.value;
    this.setState((prevState,props)=>{
      return {
        value,
        newTodo:value
      }
    })

  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="todoInput"
          value={this.state.value}
          placeholder="Put your task here"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default TodoForm;
