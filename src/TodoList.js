import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
import uuid from 'uuid';
import './TodoList.css';


export default class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {text:"Feed the Cat", id:uuid(), completed: false}, 
                {text:"Cancel Videotron Cable", id:uuid(), completed: false} 
            ]
        }
    }

    addTodo = (todo) => {
        let newTodo = {...todo, id:uuid(), completed: false};
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }))
        console.log("this.state.todos1= ", this.state.todos);
    }

    removeTodo = (id) => {
        let newTodos = this.state.todos.filter(todo => todo.id !== id)
        this.setState(({
            todos: newTodos
        }))
    }

    editTodo = (todoChanges) => {
        let updatedTodos = this.state.todos;
        let index = updatedTodos.findIndex(item => item.id === todoChanges.id); //find index
        updatedTodos[index] = todoChanges;
        this.setState(({
            todos: updatedTodos
        }))
    }

    toggleCompletion = (todoChanges) => {
        let updatedTodos = this.state.todos;
        let index = updatedTodos.findIndex(item => item.id === todoChanges.id); //find index
        updatedTodos[index] = todoChanges;
        this.setState(({
            todos: updatedTodos
        }))
    }
   
    render() {
        const todoList = this.state.todos.map(todo => (
            <Todo 
                key={todo.id}
                id={todo.id} 
                text={todo.text}
                completed={todo.completed} 
                removeTodo={this.removeTodo}
                editTodo={this.editTodo}
                toggleTodo={this.toggleCompletion}
            />
        ))
        
        return (
            <div className="TodoList">
                <h1>
                    Todo List!<span>A simple React Todo List App.</span>
                </h1>
                <ul>
                    {todoList}
                </ul>
                <NewTodoForm addTodo={this.addTodo}/>
                
            </div>
        )
    }
}