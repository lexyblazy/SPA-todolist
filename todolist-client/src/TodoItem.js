import React,{Component} from 'react';
import './TodoItem.css'

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={
            todo: this.props.todo
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.deleteTodo(this.state.todo);
    }
    render(){
        const {todo} = this.props
        return (
            <li className='task'>{todo.name}  <span onClick={this.handleClick}>X</span> </li>
        )
    }
}

export default TodoItem;