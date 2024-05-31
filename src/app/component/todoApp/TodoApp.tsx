// TodoApp.tsx avec gestion d'états et stockage local

"use client"

import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
};

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]")
        return savedTodos
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);


    const addTodo = ((text: string,) => {
        const newTodo = { id: uuidv4(), text, completed: false }
        setTodos([...todos, newTodo])
    });

    const toggleTodo = ((id: string) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    });

    const deleteTodo = ((id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    });

    return (
        <>
            <div>
                <h2>To do App</h2>
            </div>
            <div>
                <p><strong style={{ color: "green" }}>With</strong> saved data in local storage</p>
            </div>
            <div>
                <TodoForm addTodo={addTodo} />
            </div>
            <div>
                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </div>
            <hr />
        </>
    )
};


// PROPS TodoForm
interface TodoFormProps {
    addTodo: (text: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = (({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = ((event: React.FormEvent) => {
        event.preventDefault();
        if (text.trim() !== "") {
            addTodo(text)
            setText("")
        }
    });

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Save new todo' value={text} onChange={(event) => setText(event.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </>
    )
});


// PROPS TodoList
interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = (({ todos, toggleTodo, deleteTodo }) => {

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        <span style={{ color: todo.completed ? "green" : "grey" }}> | {todo.text} ➡️ </span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
});

export default TodoApp;


// Interface définissant la structure d'une tâche Todo

// Composant principal de l'application Todo

// État local pour stocker la liste des tâches Todo, initialisé avec les données du localStorage
// useEffect pour sauvegarder les tâches dans le localStorage à chaque modification de la liste des tâches

// Fonction pour ajouter une nouvelle tâche à la liste avec generation uuidv4
// Fonction pour basculer l'état de complétion d'une tâche (complétée ou non)
// Fonction pour supprimer une tâche de la liste

// Rendu du composant ToDoApp (Avec PROPS 1 et PROPS 2)

// -- PROPS 1 --
// Props pour le composant TodoForm
// Composant pour le formulaire d'ajout de nouvelles tâches :
//   -> État local pour stocker le texte de la nouvelle tâche
//   -> Fonction pour gérer la soumission du formulaire
//   -> Rendu du composant TodoForm

// -- PROPS 2 --
// Props pour le composant TodoList
// Composant pour afficher la liste des tâches
//   -> Mapping sur la liste des tâches pour afficher chaque tâche
//   -> Style conditionnel pour barrer le texte des tâches terminées
//   -> Événement onClick pour basculer l'état de complétion d'une tâche
//   -> Bouton pour supprimer une tâche
