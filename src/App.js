import React from "react";
import "./App.css";
import Form from "./components/Form.js";
import { useState } from "react";

export default function App() {
    const [name, setName] = useState("");
    const [checkbox, setActivity] = useState("");

    return (
        <div className="container">
            <h1>Weather App </h1>
            <Form onNameChange={setName} onAddActivity={setActivity} />
            <h2>Your activities:</h2>
            <p>
                Name: <span className="output">{name}</span>
            </p>
            <p>
                Good-weather activity:{" "}
                <span className="output">{checkbox}</span>
            </p>
        </div>
    );

}
