import React, { useState } from "react";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, deleteTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitEdit = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        delete
      </button>
      <button className="edit-button" onClick={() => setEdit({ id: todo.id, value: todo.text })}>
        edit
      </button>
    </div>
  ));
}

export default Todo;
