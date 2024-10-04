import TodoList from "./component/TodoList";
import NewTodo from "./component/NewTodo";
import { useState } from "react";
import { Todo } from "./todo.model";
import Header from "./Layout/Header";

function TODOLIST() {
  const [addTodo, setAddTodo] = useState<Todo[]>([]);

  function todoAddHandler(text: string) {
    setAddTodo((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  }

  function handleEdit(id: string, editedTask: string) {
    const updatedTask = addTodo.map((todo) =>
      todo.id ? { ...todo, text: editedTask } : todo
    );
    // console.log(addTodo);

    setAddTodo(updatedTask);
  }

  function TodoDeleteHandler(todoId: string) {
    setAddTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId); //delete todos
    });
  }

  return (
    <>
      <Header />
      <NewTodo handler={todoAddHandler} />
      <TodoList
        items={addTodo}
        handleEdit={handleEdit}
        onDeleteTodos={TodoDeleteHandler}
      />
    </>
  );
}

export default TODOLIST;
