import React from "react";
import { useParams } from "react-router-dom";

export default function(props) {
    const params = useParams()

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>User {params.id} page</h1>
            </div>
        </div>
    )
}