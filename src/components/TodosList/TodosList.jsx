import React, { useState } from 'react';
import TodoDetailsModal from '../TodoDetailsModal/TodoDetailsModal';

const TodosList = ({ todos, setTodos, setEditTodo, clickItem }) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const [todoModal, setTodoModal] = useState(false);

    return (
        <>
            {todos.map((todo) => (
                <li 
                className="list-item" 
                key={todo.id}>
                    <input 
                    type="text" 
                    value={todo.title}
                    className={`list ${todo.completed ? "complete" : ""}`} 
                    onChange={(e) => e.preventDefault()} />
                    <div>
                        <button 
                            className="button-complete task-button" 
                            onClick={() => handleComplete(todo)} >
                            <i className="fa fa-check-square-o"></i>
                        </button>
                        <button 
                            className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </button>
                        <button 
                            className="button-delete task-button" onClick={() => handleDelete(todo)} >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
            {todoModal && <TodoDetailsModal todo={todoModal} closeModal={() => setTodoModal(false)} />}
        </>
    );
};

export default TodosList;