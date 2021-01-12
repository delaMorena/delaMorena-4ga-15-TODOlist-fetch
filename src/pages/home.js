import React, { useContext, useState, useEffect } from "react";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    const [task, setTask] = useState();
    const [key, setKey] = useState(0);

    // useEffect(()=>{
    //      GRAN ERROR!! ESTUDIAR!!!
    //     console.log("entro una vez");
    //     actions.updateListTodos(store.todos);   
    //     console.log("store.todos despues del update: ", store.todos);
    // },[store.todos]);

    useEffect(() => {
        actions.getListTodos()
    }, [])
    // si pongo store.todos como dependecia no para de actualizar.
    
    const handleChange = event => {
        setTask(event.target.value);
    };

    const handleKeyPress = event => {
		if (event.key === "Enter" && task != "") {
            actions.addTask(task, key); 
            setTask ("");
            setKey(key + 1);
            actions.updateListTodos(store.todos);
		}
    };
    function toggle(done){
        done = false;
        done =! done
        console.log('Toggled bool of done is', done, "y el store.todos: ",store.todos); 
        
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
                        <li key={index}>
                            <h5 className= "task">
                                {element.label}  
                                <button onClick={()=> toggle(element.done)}> hecho </button>                         
                            </h5>
                        </li>
                    )})}
                </ul>
                <br />
            </div>
        </div>
    )
}