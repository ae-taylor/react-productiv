import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 * 
 * State
 * - isEditing: boolean to toggle form & todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {

  const [isEditing, setIsEditing] = useState(false)

  /** Toggle if this is being edited */
  //TODO use regular if else
  function toggleEdit() {
    isEditing ? setIsEditing(false) : setIsEditing(true)
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id)
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    console.log(formData)
    update(formData)
    toggleEdit()
  }

  return (
    <div className="EditableTodo">

      {isEditing &&
        <TodoForm
          initialFormData={todo}
          handleSave={handleSave} />}

      {!isEditing &&
        <div className="mb-3">
          <div className="float-right text-sm-right">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
                      </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
                      </button>
          </div>
          <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} priority={todo.priority} />
        </div>
      }

    </div>
  );
}

export default EditableTodo;
