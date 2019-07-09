import React from 'react';
import './NewTodoForm.css'

export default class NewTodoForm extends React.Component {
    static defaultProps = {
        isEdit: false,
        id: null,
        text: ""
    }
    constructor(props){
        super(props);
        this.state = {
            isEdit: this.props.isEdit,
            id: this.props.id,
            text: this.props.text
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.isEdit) {
            this.props.addTodo(this.state);
            this.setState({
                text:""
            })
        } else {
            this.props.updateTodo(this.state.text);
            this.setState({
                isEdit: false,
                id: null,
                text:""
            })
        }
       

    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (

            <form className={this.state.isEdit ? "NewTodoForm edit" : "NewTodoForm"}  onSubmit={this.handleSubmit}>
                <label htmlFor='todo'>New Todo</label>
                <input 
                    id="todo"
                    name="todo"
                    value= {this.state.text}
                    onChange={this.handleChange}
                />
                {this.state.isEdit ? <button>Update Todo</button> : <button>Add Todo</button>}
            </form>
        )
    }
}