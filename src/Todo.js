import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(){
        this.props.removeTodo(this.props.id)
    }
    render(){
        return(
            <div>
                <li>{this.props.task}</li>
                <button className='btn' onClick={this.handleRemove}>Delete</button>
            </div>
        )
    }
}

export default Todo;