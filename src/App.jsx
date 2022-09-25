import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoListForm from './components/TodoListForm/TodoListForm';
import TodosList from './components/TodosList/TodosList';

function App() {
    
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <Header />
                </div>
                <div>
                    <TodoListForm
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo} />
                </div>
                <div>
                    <TodosList 
                        todos={todos} 
                        setTodos={setTodos}
                        setEditTodo={setEditTodo} />
                </div>
            </div>
        </div>
    );
};

export default App;
