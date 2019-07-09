import React from 'react';
import NewTodoForm from './NewTodoForm';
import './Todo.css';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            id: this.props.id,
            text: this.props.text,
            completed: this.props.completed
        }
    }
    handleDelete = (e) => {
        e.preventDefault();
        this.props.removeTodo(this.state.id);
    }
    handleToggle = () => {
        this.setState(state => ({
            completed: !state.completed
        }))
        this.props.toggleTodo(this.state)
    }

    updateTodo = (newText) => { //Step 1:  Update current state 
        this.setState({
            text: newText,
            isEdit: false
        })
    }
    handleEdit = () => {
        this.props.editTodo(this.state)  //Step 2: after updating the current todo pass it up to parent to update 
        this.setState({                  // the entire todo list
            isEdit: true
        })
    }

  
    render() {
        return(
            <div>
            {this.state.isEdit ? (<NewTodoForm 
                                    addTodo={this.props.addTodo} 
                                    isEdit={this.state.isEdit} 
                                    id={this.state.id} 
                                    text={this.state.text} 
                                    completed={this.state.completed} 
                                    updateTodo={this.updateTodo}
                                    />
                                    ) : (
                                        <div className="Todo">
                                            <li  className={this.state.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggle}>
                                                {this.state.text}
                                            </li>
                                            <div className="Todo-buttons">
                                                <button onClick={this.handleEdit}><i className='fas fa-pen'/></button>
                                                {/* <button onClick={this.handleEdit}>Edit</button> */}
                                                <button onClick={this.handleDelete}><i className='fas fa-trash'/></button>
                                            </div>
                                        </div>
                                        
                                        
                )}
                
            </div>
        )
    }
}
