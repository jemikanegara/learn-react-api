import React, { Component } from "react";
import axios from "axios";
import TodoDetail from "./TodoDetail";
import Form from "./Form";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputDescription: ""
    };
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos = () => {
    axios
      .get("https://ib-api-todo-list.herokuapp.com/todos")
      .then(res => this.setState({ todos: res.data.data }))
      .catch(err => console.log(err));
  };

  deleteTodo = index => {
    axios
      .delete(`https://ib-api-todo-list.herokuapp.com/todos/${index}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.getAllTodos();
  };

  submitTodo = async () => {
    await axios
      .post(`https://ib-api-todo-list.herokuapp.com/todos`, {
        description: this.state.inputDescription,
        done: false
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    this.setState({ inputDescription: "" });
    this.getAllTodos();
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Worldssz</h1>
        <Form
          handleOnChange={this.handleOnChange}
          inputDescription={this.state.inputDescription}
          submitTodo={this.submitTodo}
        />

        {this.state.todos.map((todo, index) => (
          <TodoDetail
            desc={todo.description}
            done={JSON.stringify(todo.done)}
            deleteTodo={this.deleteTodo}
            key={index}
            index={index}
          />
        ))}
      </div>
    );
  }
}

export default App;
