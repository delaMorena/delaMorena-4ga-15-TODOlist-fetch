import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        console.log("getListTodos: ", actions.getListTodos());
        actions.getListTodos()
        console.log("store.tasks: ", store.tasks) //por qué aparece vacío??
        //no entiendo el orden de los console.log en la consola. Por qué se ejecuta en ese orden??
    }, [])

    return (
        <div className="container-fluid">
            <h2>todos mis ToDos</h2>
            <div className="container">
                <input
                    type="text"
                    placeholder="próxima tarea"
                    >
                </input>

                <h5>Mis tareas son:</h5>
                <ul>
                    {store.tasks.map((element, index) => {
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