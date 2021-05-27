import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  console.log(`top todos todos `, todos)
  // lowest-priority # is the highest priority
  let top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
  //dont need a key because we only show one
  return <Todo  
          key={top.id}
          title={top.title}
          description={top.description}
          priority={top.priority}
          />;
}

export default TopTodo;