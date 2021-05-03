import React, { Component } from "react";
import "./Todo.css";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.removeTask(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }
  handleToggle(e) {
    this.props.toggleTask(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo-edit-form">
          <form onSubmit={this.handleUpdate}>
            <input onChange={this.handleChange} type="text" name="task" value={this.state.task} />
            <button>save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo-container">
          <li className={this.props.completed ? "Todo-container-completed" : ""} onClick={this.handleToggle}>
            {this.props.task}
          </li>
          <button onClick={this.handleRemove}>
            <i className="bi bi-trash"></i>
          </button>
          <button onClick={this.toggleForm}>
            <i className="bi bi-pencil"></i>
          </button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
