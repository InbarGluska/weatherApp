import "./App.css";
import Form from "./components/Form.js";
import { useState, useEffect } from "react";
import { uid } from "uid";

export default function App() {
    const [name, setName] = useState("");
    const [isForGoodWeather, setActivity] = useState("");
    // const [activities, setActivities] = useState([]);

    useEffect(() => {
        const data = {
            name: name,
            isForGoodWeather: isForGoodWeather,
        };
        localStorage.setItem(uid(), JSON.stringify(data));
    }, [name, isForGoodWeather]);

    const data = {
        name: name,
        isForGoodWeather: isForGoodWeather,
    };
    localStorage.setItem(uid(), JSON.stringify(data));

    return (
        <div className="container">
            <h1>Weather App </h1>
            {/* <h2>Your activities:</h2> */}
            <p>
                <div className="outputName">{name}</div>
            </p>
            <p>
                <div className="output">{isForGoodWeather}</div>
            </p>
            <Form onNameChange={setName} onAddActivity={setActivity} />
        </div>
    );
}
