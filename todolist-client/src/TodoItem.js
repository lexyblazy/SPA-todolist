import React,{Component} from 'react';

class TodoItem extends Component{

    render(){
        const {todo} = this.props
        return (
            <li>{todo}</li>
        )
    }
}

export default TodoItem;