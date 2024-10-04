import { useState } from "react";
import "../component/TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[]; // array of objects
  onDeleteTodos: (id: string) => void;
  handleEdit: (id: string, editedTask: string) => void;
}

export default function TodoList({
  items,
  onDeleteTodos,
  handleEdit,
}: TodoListProps) {
  const [editIndex, setEditIndex] = useState<string | null>(null);
  const [editedTask, setEditedTask] = useState<string>("");

  function handleEditClick(id: string, currentText: string) {
    setEditIndex(id);
    setEditedTask(currentText);
  }

  function handleSave(id: string) {
    handleEdit(id, editedTask);
    setEditIndex(null);
    setEditedTask("");
  }

  return (
    <div>
      <ul className="ul">
        {items.map((item) => (
          <li key={item.id} className="li">
            {editIndex === item.id ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="inputEl"
                />
                <button className="button" onClick={() => handleSave(item.id)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{item.text}</span>
                <button
                  className="buttonEdit"
                  onClick={() => handleEditClick(item.id, item.text)}
                >
                  Edit
                </button>
                <button
                  className="button"
                  onClick={() => onDeleteTodos(item.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
