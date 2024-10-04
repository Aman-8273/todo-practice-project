import React, { useRef } from "react";
import "../component/NewTodo.css";

interface OnAddTodo {
  handler: (text: string) => void;
}

export default function NewTodo({ handler }: OnAddTodo) {
  const InputRef = useRef<HTMLInputElement>(null);

  function TodoSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = InputRef.current!.value;
    handler(enteredText);
  }

  return (
    <form onSubmit={TodoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">TODO LIST</label>
        <input ref={InputRef} type="text" id="todo-text" />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
}
