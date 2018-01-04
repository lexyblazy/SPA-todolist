import React,{Component} from 'react';
import './TodoItem.css'

class TodoItem extends Component{

    render(){
        const {todo} = this.props
        return (
            <li className='task'>{todo}</li>
        )
    }
}

export default TodoItem;