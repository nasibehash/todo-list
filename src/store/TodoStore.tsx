import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
};

type TodoState = {
    todos: Todo[];
    addTodo: (title: string) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
};

export const useTodoStore = create<TodoState>()(

    persist(
        (set) => ({
            todos: [],
            addTodo: (title) =>
                set((state) => ({
                    todos: [
                        ...state.todos,
                        {id: Date.now().toString(), title, completed: false},
                    ],
                })),
            toggleTodo: (id) =>
                set((state) => {
                    const updatedTodos = state.todos.map((todo) =>
                        todo.id === id ? {...todo, completed: !todo.completed} : todo
                    );
                    if (JSON.stringify(state.todos) !== JSON.stringify(updatedTodos)) {
                        return {todos: updatedTodos};
                    }
                    return state;
                }),
            deleteTodo: (id) =>
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                })),
        }),
        {
            name: 'todo-storage',
        }
    )
);
