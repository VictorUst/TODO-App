import React from 'react';
import './index.css';

import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import Footer from './Footer';

export default class App extends React.Component {
  state = {
    todos: [],
    filter: 'all',
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  onDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  removeAllTaskComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };

  filterTask = (todos, filter) => {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter((todo) => !todo.complete);
    } else if (filter === 'complete') {
      return todos.filter((todo) => todo.complete);
    }
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todos, filter } = this.state;
    const visibleTodos = this.filterTask(todos, filter);

    return (
      <>
        <NewTaskForm onSubmit={this.addTodo} />
        <TaskList
          todos={visibleTodos}
          toggleComplete={this.toggleComplete}
          onDelete={this.onDelete}
        />
        <Footer
          toDo={todos.filter((todo) => !todo.complete).length}
          filter={filter}
          onFilterChange={this.onFilterChange}
          removeAllTaskComplete={this.removeAllTaskComplete}
        />
      </>
    );
  }
}
