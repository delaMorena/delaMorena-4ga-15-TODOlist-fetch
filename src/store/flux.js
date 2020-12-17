export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            loading: false,
            test: [
                        { label: "Make the bed", done: false },
                        { label: "Walk the dog", done: false },
                        { label: "Do the replits", done: false }
                    ]
        },
        actions: {
            setLoading(status) {
                setStore({loading: status})
            },
            toggleLoader() {
                const store = getStore()
                setStore({loading: !store.loading})
            }
        }
    }
}