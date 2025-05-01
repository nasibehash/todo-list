import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.scss';

const App = () => {
    return (
        <div className="container">
            <h1>لیست وظایف</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    );
};

export default App;
