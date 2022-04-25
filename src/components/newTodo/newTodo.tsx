import React, { useRef } from 'react';
import './newTodo.scss';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    props.onAddTodo(enteredText!);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
