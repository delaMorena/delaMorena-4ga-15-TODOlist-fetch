import React, { useContext, useState, useEffect } from "react";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    const [task, setTask] = useState();
    // const [key, setKey] = useState(0);
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
            actions.addTask(task); 
            setTask ("");
            actions.updateListTodos(store.todos);
		}
    };
    // MANEJADOR DEL CHECKBOX
    const handleClickDone = (index) => {
        setDone(index)
        actions.toggle()
        actions.deleteTaskDone(store.todos.id)
        actions.updateListTodos(store.todos);
    };

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
                            {element.label} index: {index} element.id:{element.id}
                            <button onClick= {handleClickDone}
                            name={index}>Done</button>
                        </li>
                    )})}
                </ul>
                <br />
            </div>
        </div>
    )
}