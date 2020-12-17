// const fetch = requier("node-fetch");

export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            test: [
                { "label": "Make the bed", "done": false },
                { "label": "Walk the dog", "done": false },
                { "label": "Do the replits", "done": false }
            ],
            tasks: [],
            // username: "delaMorena"
        },
        actions: {
            getListTodos() {
                const store = getStore()
                const endpoint = "https://assets.breatheco.de/apis/fake/todos/user/delaMorena";
                const config = { method: "GET" }

                fetch(endpoint, config)
                .then(response => {
                    if(response.status >= 200 && response.status < 300){
                        console.log(response.status);
                        // console.log("response.json(): ", response.json())
                        return response.json();
                    }
                    else{
                        console.log(`There was an error ${response.status} with the request`);
                    }   
                })
                .then((body) => {
                    console.log("Este es el body del request", body);
                    // body.map(task => task.label)
                    // console.log(body.map(task => tasks.label).join(", "));
                    setStore({ tasks: body })
                    // console.log("tasks: ", tasks)
                    setStore()
                    console.log(store.tasks);
                })
                .catch(error => {
                    console.error('Error:' ,error);
                }); 
            }
        }
    }
};