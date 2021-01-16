

export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            todos: [],
            username: "delaMorena"
        },
        actions: {
            getListTodos() {
                const store = getStore()
                const endpoint = "https://assets.breatheco.de/apis/fake/todos/user/".concat(store.username);
                const config = { method: "GET" }

                fetch(endpoint, config)
                .then(response => {
                    if(response.status >= 200 && response.status < 300){
                        return response.json();
                    }
                    else{
                        console.log(`There was an error ${response.status} with the request`);
                    }   
                })
                .then((body) => {
                    console.log("Este es el body del request", body);
                    setStore({ todos: body })
                    store.todos.map((value, index) => {value["id"] = index})
                    console.log("y esta la variable actualiza con setStore store.todos: ", store.todos);
                })
                .catch(error => {
                    console.error('Error:' ,error);
                }); 
            },
            
            updateListTodos(changes){
                console.log( "changes: ", changes)
                const store = getStore()
                const endpoint = "https://assets.breatheco.de/apis/fake/todos/user/".concat(store.username);
                const config = { 
                    method: "PUT", 
                    body: JSON.stringify(changes),
                    headers: {
                        "Content-Type": "application/json" }
                    };
                fetch(endpoint, config)
            },        

            addTask(item){
                const store = getStore()
                const taskToArray = [...store.todos]
                taskToArray.push({ "label": item, "done": false, "id" : (Math.floor(Math.random()*1000)+1)})
                setStore({todos: taskToArray})
                console.log("store.todos desde addTask: ", store.todos);  
            },
    
            deleteTask(value) {
                const store = getStore()
                const taskOut = store.todos.filter((item, index) => {
                    return (value != item.id)
                })
                setStore({ todos: taskOut})
            }
        }
    }
};


//// ANOTACIONES PARA TRABAJAR EN MENTORÍA
            // toggle(){  
            //     const store = getStore()
            //     store.todos.done =! store.todos.done;  
                
            //     // que se ejecute onclick y cambie a true y luego llame o lo que sea a borrar. if store.todos.done == true sacar. 
            // },
            // deleteTaskDone(){
            //     const store = getStore()
            //     if (store.todos.done == true) {
            //         console.log("se ejecuta deleteTaskDone ", store.todos.done)
            //     } 
            // },