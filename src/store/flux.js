export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            loading: false
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