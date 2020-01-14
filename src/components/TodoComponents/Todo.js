import React from 'react';

const Todo = props => {
  return (
    <div
      className={`todo${props.todo.completed ? ' purchased' : ''}`}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;