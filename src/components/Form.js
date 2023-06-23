// import { useState } from "react";

export default function Form({ onNameChange, onAddActivity }) {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onNameChange(event.target.name.value);
        onAddActivity(event.target.checkbox.value);
    }

    return (
        <form
            className="form"
            aria-labelledby="weather-activities"
            onSubmit={handleSubmit}
        >
            <h2 id="weather-activities">Add new activity:</h2>
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" type="text" placeholder="running" />
            <br/>
            <label htmlFor="checkbox">Good-weather activity </label>
            <input id="checkbox" name="checkbox" type="checkbox" />
            <br/>
            <button className="form__submit-button" type="submit">
                Submit
            </button>
        </form>
    );
}
