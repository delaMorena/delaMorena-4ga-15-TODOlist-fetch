import React, { useContext, useState, useEffect } from "react";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    const [task, setTask] = useState();

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
                        <li key={index} className="task">
                            <h6> 
                               <button 
                                onClick={() => {
                                    actions.deleteTask(element.id)
                                    actions.updateListTodos(store.todos)
                                }}>ok
                                </button> {element.label} 
                            </h6> 
                            
                        </li>
                    )})}
                </ul>
                <br />
            </div>
        </div>
    )
}
// ANOTACIONES PARA TRABAJAR EN MENTORÍA:

  // MANEJADOR DEL BUTTON
    // const handleClickDone = (index) => {
    //     actions.toggle()
    //     console.log("he llegado al home")
    //     actions.updateListTodos(store.todos);
    // };
    // const handleClick = (() =>  {
    //     actions.deleteLabel(element.id)
    //     actions.updateListTodos()
    // })