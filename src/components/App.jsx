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

  getUpdateTask = (id, arr, propName) => {
    return arr.map((el) => (el.id === id ? { ...el, [propName]: !el[propName] } : el));
  };

  onEdit = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.getUpdateTask(id, todos, 'isEditing'),
      };
    });
  };

  onComplete = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.getUpdateTask(id, todos, 'isCompleted'),
      };
    });
  };

  onDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  removeAllTaskComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.isCompleted),
    });
  };

  filterTask = (todos, filter) => {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === 'complete') {
      return todos.filter((todo) => todo.isCompleted);
    }
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  editText = (id, text) => {
    this.setState(({ todos }) => {
      const updateTodos = todos.map((el) =>
        el.id === id ? { ...el, text: text, isEditing: !el.isEditing } : el
      );

      return {
        todos: updateTodos,
      };
    });
  };

  render() {
    const { todos, filter } = this.state;
    const visibleTodos = this.filterTask(todos, filter);

    return (
      <>
        <header className='header'>
          <h1>todos</h1>
          <NewTaskForm onSubmit={this.addTodo} />
        </header>
        <TaskList
          todos={visibleTodos}
          onComplete={this.onComplete}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
          onEditText={this.editText}
          onBlur={this.onEdit}
        />
        <Footer
          toDo={todos.filter((todo) => !todo.isCompleted).length}
          filter={filter}
          onFilterChange={this.onFilterChange}
          removeAllTaskComplete={this.removeAllTaskComplete}
        />
      </>
    );
  }
}
