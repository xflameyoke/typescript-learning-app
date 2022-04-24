import React from 'react';
import Todo from '../models/todo';
import TodoItem from './todoItem';

// here we can't let typescript infer types, and he're i'm defining my own props

const Todos: React.FC<{ items: Todo[] }> = (props) => (
  <ul>
    {props.items.map((item) => (
      <TodoItem key={item.id} text={item.text} />
    ))}
  </ul>
);

export default Todos;
