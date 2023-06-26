import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form.js";
import List from "./components/List.js";
import { useState, useEffect } from "react";
import { uid } from "uid";

export default function App() {
    const [name, setName] = useLocalStorageState("name");
    const [isForGoodWeather, setActivity] =
        useLocalStorageState("isForGoodWeather");
    const [activities, setActivities] = useLocalStorageState("activities");

    function handleAddActivities(newActivity) {
        setActivities([...activities, { id: uid(), ...newActivity }]);
    }

    // useEffect(() => {
    //     const data = {
    //         name: name,
    //         isForGoodWeather: isForGoodWeather,
    //     };

    //     localStorage.setItem(uid(), JSON.stringify(data));
    // }, [name, isForGoodWeather]);

    // const data = {
    //     name: name,
    //     isForGoodWeather: isForGoodWeather,
    // };
    // localStorage.setItem(uid(), JSON.stringify(data));

    return (
        <div className="container">
            <h1>Weather App </h1>
            {/* <h2>Your activities:</h2> */}
            <p>
                <div className="outputName">{name}</div>
            </p>
            <p>
                <span className="output">{isForGoodWeather}</span>
            </p>
            <Form
                onNameChange={setName}
                onAddActivity={setActivity}
                onAddActivities={handleAddActivities}
            />
        </div>
    );
}
