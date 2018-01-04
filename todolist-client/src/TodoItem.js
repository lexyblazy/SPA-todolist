import React,{Component} from 'react';
import './TodoItem.css'

class TodoItem extends Component{

    render(){
        const {todo} = this.props
        return (
            <li className='task'>{todo.name}</li>
        )
    }
}

export default TodoItem;