import React, { useContext } from 'react'

import { TodoContext } from './TodoContext';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from './components/TodoList';
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from './components/CreateTodoButton';

import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { MyLoader } from './loading-skeleton';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext)
    
    return (
        <> 
            <TodoCounter />

            <TodoSearch />

            <TodoList>
                { error && <p>Desesperate, hubo un error...</p> }
                { loading && <MyLoader /> }
                { (!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p> }
                { searchedTodos.map(todo => (
                <TodoItem 
                    key={ todo.text } 
                    text={ todo.text } 
                    completed={ todo.completed }
                    onComplete={ () => completeTodo(todo.text) }
                    onDelete={ () => deleteTodo(todo.text) }
                />
                ))}
            </TodoList>

            { openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton 
                setOpenModal={ setOpenModal }
            />
        </>
    )
}

export default AppUI
