

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
                    store.todos.map((value, index) => {value["id"] = Math.floor(Math.random()* 100000 +1)});
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
                    // .then(resp => {
                    //     console.log("changes: ", changes)
                    //     console.log(resp.ok); // will be true if the response is successfull
                    //     console.log(resp.status); // the status code = 200 or code = 400 etc.
                    //     console.log(resp.text()); // will try return the exact result as string
                    //     return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
                    // })
                    // .then(data => {
                    //     const store = getStore()
                    //     //here is were your code should start after the fetch finishes
                    //     console.log(store.todos, data); //this will print on the console the exact object received from the server
                    // })
                    // .catch(error => {
                    //     //error handling
                    //     console.log(error);
                    // });
            },

            addTask(item,key){
                const store = getStore()
                const taskToArray = [...store.todos]
                taskToArray.push({"id": key, "label": item, "done": false })
                setStore({todos: taskToArray})
                console.log("store.todos desde addTask: ", store.todos);  
            },
            deleteTask(item){
                const store = getStore()

            }
           
        }
    }
};