import React from 'react';
import Todo from '../../models/todo';
import TodoItem from '../todoItem/todoItem';
import './todos.scss';

// here we can't let typescript infer types, and he're i'm defining my own props

const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = (
  props
) => (
  <ul className="todos">
    {props.items.map((item) => (
      <TodoItem
        key={item.id}
        text={item.text}
        onRemove={props.onRemove.bind(null, item.id)}
      />
    ))}
  </ul>
);

export default Todos;
