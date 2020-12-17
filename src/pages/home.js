import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Home page</h1>
                <button type="button" onClick={() => actions.toggleLoader()}>
                    {store.loading ? "Parar":"Cargar"}
                </button>
            </div>
        </div>
    )
}