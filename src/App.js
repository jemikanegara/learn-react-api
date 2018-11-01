import React, { Component } from "react";
import axios from "axios";
import TodoDetail from "./TodoDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
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

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Worldssz</h1>
        {this.state.todos.map((todo, index) => (
          <TodoDetail
            desc={todo.description}
            done={JSON.stringify(todo.done)}
            deleteTodo={this.deleteTodo}
            onChange={this.onChange}
            key={index}
            index={index}
          />
        ))}
      </div>
    );
  }
}

export default App;
