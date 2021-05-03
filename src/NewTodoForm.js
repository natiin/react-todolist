import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewToDoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const task = { ...this.state, id: uuidv4(), completed: false };

    this.props.createTask(task);
    this.setState({ task: "" });
  }
  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }

  render() {
    return (
      <form className="NewToDoForm-container" onSubmit={this.handleSubmit}>
        <label htmlFor="task"></label>
        <input type="text" id="task" name="task" value={this.state.task} onChange={this.handleChange}></input>
        <button>
          <i className="bi bi-plus-square-fill"></i>
        </button>
      </form>
    );
  }
}

export default NewTodoForm;
