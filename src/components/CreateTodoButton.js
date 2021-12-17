import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {

  const onClickButton = () => {
    setOpenModal(prevState => !prevState)
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={ onClickButton }
    >+</button>
  );
}

export { CreateTodoButton };