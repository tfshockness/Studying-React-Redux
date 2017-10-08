import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList';


class App extends Component {
  render() {
    return (
      <div className="container mt-4">
          <TaskList />
          <Form />
      </div>
    );
  }
}
export default App;
