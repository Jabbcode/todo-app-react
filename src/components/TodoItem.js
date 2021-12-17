import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={ props.onComplete }
      >
        <i className="fas fa-check"></i>
      </span>
      
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        { props.text }
      </p>

      <span 
        className="Icon Icon-delete"
        onClick={ props.onDelete }
      >
        <i className="fas fa-trash-alt"></i>
      </span>
    </li>
  );
}

export { TodoItem };