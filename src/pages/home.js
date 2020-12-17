import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    return (
        <div className="container-fluid">
            <h2>todos mis ToDos</h2>
            <div className="container">
                <input
                    type="text"
                    // onChange={handleChange}
                    // onKeyPress={handleKeyPress}
                    placeholder="próxima tarea"
                    >
                </input>

                <h5>Mis tareas son:</h5>
                <ul>
                    {store.test.map((element, index) => {
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