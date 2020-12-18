import React, { useContext, useState, useEffect } from "react";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    const [task, setTask] = useState();
    
    const handleChange = event => {
        setTask(event.target.value);
    };

    const handleKeyPress = event => {
		if (event.key === "Enter" && task != "") {
            //1. llamamos a la funcion de update con el paramatro a incluir
            actions.updateListTodos(task);
            //necesito convertir  task en objeto con label y done. ahora es un string.
            // setStore({ todos: task })
            setTask ("");
		}
    };

    useEffect(() => {
        console.log("getListTodos");
        actions.getListTodos()
        console.log("store.username: ", store.username);
        // console.log("store.tasks: ", store.tasks) 
    }, [])
    

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
                        <li key={index}>
                            <h5 className= "task">
                                {element.label}                                
                            </h5>
                        </li>
                    )})}
                </ul>
                <br />
            </div>
        </div>
    )
}