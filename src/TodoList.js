import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./ToDoList.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(task) {
    const newTask = { ...task };
    if (!newTask.task) return;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  }
  remove(id) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  }
  update(id, updatedTask) {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, task: updatedTask };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  }
  toggleCompletion(id) {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  }
  render() {
    const tasks = this.state.tasks.map((el) => {
      return <Todo task={el.task} key={el.id} id={el.id} removeTask={this.remove} updateTask={this.update} completed={el.completed} toggleTask={this.toggleCompletion} />;
    });
    return (
      <div className="ToDoList-container">
        <h1>
          <span className="ToDoList-container-heading">to do list</span>
        </h1>
        <NewTodoForm createTask={this.create} />
        <ul className="ToDoList-list">{tasks}</ul>
      </div>
    );
  }
}

export default ToDoList;
