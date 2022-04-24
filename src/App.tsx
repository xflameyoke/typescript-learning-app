import React from 'react';
import Todos from './components/todos';
import Todo from './models/todo';

const App = () => {
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  return <Todos items={todos} />;
};

export default App;
