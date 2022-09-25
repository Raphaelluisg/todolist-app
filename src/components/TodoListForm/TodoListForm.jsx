import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoListForm = ({ input , setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => {
            todo.id === id ? { title, id, completed } : todo
        });
        setTodos(newTodo);
        setEditTodo("");
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([ ...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed )
        }
    };
    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input 
                type="text" 
                placeholder="Add a todo" 
                className="task-input"
                value={input}
                onChange={onInputChange}
                required />
                <button 
                className="button-add" 
                type="submit">Add</button>
            </form>
        </>
    )
}

export default TodoListForm;