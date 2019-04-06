import React, { Component } from 'react';
import './App.css';
// import Counter from "./hooks/Counter";
import TodoApp from "./hooks/todo/TodoApp";

const initialTodos = [{task: 'Grocery'}, {task: 'Laundry'}]

class App extends Component {
  render() {
    return (
      <TodoApp todos={initialTodos}/>
    );
  }
}

export default App;
