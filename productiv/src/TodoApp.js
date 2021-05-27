import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TodoForm from "./TodoForm"
import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {

  const [todos, setTodos] = useState(initialTodos)

  /** add a new todo to list */
  function create(newTodo) {
    console.log("create function newtodo", newTodo)
    let todo = { ...newTodo, id: uuid() }
    setTodos(todos => [...todos, todo]);
  }

  // function addItem(item) {
  //   let newItem = { ...item, id: uuid() };
  //   setItems(items => [...items, newItem]);
  // }

  /** update a todo with updatedTodo */
  //use callback pattern
  //TODO use map, if todo id matches updated todo id replace. MAP will keep everything in the same order
  function update(updatedTodo) {
    setTodos(todos => [...todos.filter(todo => todo.id !== updatedTodo.id), updatedTodo])
  }

  /** delete a todo by id */
  //use callback pattern
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">

          {todos.length > 0
            ? <EditableTodoList todos={todos} update={update} remove={remove} />
            : <span className="text-muted">You have no todos.</span>}
        </div>

        <div className="col-md-6">


          {/* (if no top todo, omit this whole section) */}
          {todos.length > 0 && <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo todos={todos} />
          </section>}

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm 
              handleSave={create}
              />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;