import React from 'react';
import { Todo } from '../modules/todos';
import './TodoItem.css';
import useTodoActions from '../hooks/useTodoActions';

type TodoProps = {
   todo: Todo
}

function TodoItem({ todo }: TodoProps) {
   const { onToggle, onDelete } = useTodoActions(todo.id)
   return (
      <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
         <span className="text" onClick={onToggle}>{todo.text}</span>
         <span className="remove" onClick={onDelete}>(X)</span>
      </li>
   );
}

export default TodoItem;