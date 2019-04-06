import React, {useState} from 'react';
interface ToDo {
    task: string;
}
interface ITodoProps {
    todos: ToDo[];
}
const TodoApp = (props: ITodoProps) => {
    const [inputValue, updateInputText] = useState('');
    const [todos, updateTodos] = useState(props.todos);
    const addToDo = () => {
        const newToDos = [...todos, {task: inputValue}];
        updateTodos(newToDos);
        updateInputText('');
    };
    return <div>
        <ul>
            {todos && todos.map((todo, index) => <li key={index}>{todo.task}</li>)}
        </ul>
        <input
            value={inputValue}
            onChange={(event) => updateInputText(event.target.value)}
        />
        <button onClick={addToDo}>Add Todo</button>
    </div>
};

export default TodoApp;