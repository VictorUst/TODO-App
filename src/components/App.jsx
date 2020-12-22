import React, { useState } from 'react';
import './index.css';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import Footer from './Footer';

const App = () => {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const getUpdateTask = (id, arr, propName) => {
    return arr.map((el) => (el.id === id ? { ...el, [propName]: !el[propName] } : el));
  };

  const onEdit = (id) => {
    setTodos(getUpdateTask(id, todos, 'isEditing'));
  };

  const onComplete = (id) => {
    setTodos(getUpdateTask(id, todos, 'isCompleted'));
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editText = (id, text) => {
    setTodos(() => {
      const updateTodos = todos.map((el) => (el.id === id ? { ...el, text, isEditing: !el.isEditing } : el));

      return updateTodos;
    });
  };

  const removeAllTaskComplete = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const filterTask = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.isCompleted);
      case 'complete':
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  };

  const onFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const visibleTodos = filterTask(todos, filter);

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onSubmit={addTodo} />
      </header>
      <TaskList
        todos={visibleTodos}
        onComplete={onComplete}
        onEdit={onEdit}
        onDelete={onDelete}
        onEditText={editText}
        onBlur={onEdit}
      />
      <Footer
        toDo={todos.filter((todo) => !todo.isCompleted).length}
        filter={filter}
        onFilterChange={onFilterChange}
        removeAllTaskComplete={removeAllTaskComplete}
      />
    </>
  );
};

export default App;
