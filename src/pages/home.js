import React, { useContext, useState, useEffect } from "react";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    const [task, setTask] = useState();
    const [key, setKey] = useState(0);
    const [done, setDone] = useState();

    useEffect(() => {
        actions.getListTodos()
    }, [])
    
    
    //MANEJADOR DEL INPUT
    const handleChange = event => {
        setTask(event.target.value);
    };
    // MANEJADOR DE LA FUNCIÓN QUE GUARDA EN STORE.TODOS
    const handleKeyPress = event => {
		if (event.key === "Enter" && task != "") {
            actions.addTask(task, key); 
            setTask ("");
            setKey(key + 1);
            actions.updateListTodos(store.todos);
		}
    };
    // MANEJADOR DEL CHECKBOX
    const handleClickDone = (index) => {
        setDone(index)
        actions.deleteTask()
    };
    // function toggle(item){
    //     item = false;
    //     item =! item
    //     console.log('Toggled bool of item is', item, "y el store.todos.done: ",store.todos.done); 
        
    // };

    return (
        <div className="container-fluid">
            <h2>todos mis ToDos</h2>
            <div className="container">
                <input
                    type="text"
                    placeholder = "próxima tarea"
                    onChange = {handleChange}
                    onKeyPress = {handleKeyPress}
                    value = {task}
                    >
                </input>

                <h5>Mis tareas son: {task}</h5>
                <ul>
                    {store.todos.map((element, index) => {
                        return (
                        <li key={index} className= 
                        {done === index ? "taskDone": "task"}>
                            {element.label} 
                            <button onClick= {() => handleClickDone(index)} name={index}>Done</button>
                        </li>
                    )})}
                </ul>
                <br />
            </div>
        </div>
    )
}