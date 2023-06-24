import "./App.css";
import Form from "./components/Form.js";
import { useState } from "react";
import { uid} from 'uid';

export default function App() {
    
const [name, setName] = useState([]);
const [isForGoodWeather, setActivity] = useState("");

const data = {
    name: name,
    isForGoodWeather: isForGoodWeather
}; 
localStorage.setItem(uid(), JSON.stringify(data));



return (
        <div className="container">
            <h1>Weather App </h1>
            <Form onNameChange={setName} onAddActivity={setActivity} />
            <h2>Your activities:</h2>
            <p>
                <span className="output">{name}</span>
            </p>
            <p>  
                <span className="output">{isForGoodWeather}</span>
            </p>
        </div>
    );
}
