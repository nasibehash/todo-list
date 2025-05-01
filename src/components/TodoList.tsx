import React from 'react';

import {useTodoStore} from "../store/TodoStore";

import styles from './TodoList.module.scss';
import Button from "./Button";

export default function TodoList() {
    const {todos, toggleTodo, deleteTodo} = useTodoStore();

    return (
        <div className={styles['todo-list']}>
            {todos.map(todo => (
                <div
                    key={todo.id}
                    className={`${styles['todo-item']} ${todo.completed ? styles.completed : ''}`}
                >
                    <span>{todo.title}</span>
                    <div className={styles['action-button']}>
                        <Button onClick={() => toggleTodo(todo.id)}>تکمیل{todo.completed}</Button>
                        <Button onClick={() => deleteTodo(todo.id)}>حذف</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
