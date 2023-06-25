// import { useState } from "react";
export default function Form({ onNameChange, onAddActivity, onAddActivities }) {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        onNameChange(event.target.name.value);
        onAddActivity(event.target.isForGoodWeather.checked);
        onAddActivities(event.target.Form);
        event.target.reset();
        document.getElementById("name").focus();
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
            <br />
            <label htmlFor="isForGoodWeather">Good-weather activity </label>
            <input
                id="isForGoodWeather"
                name="isForGoodWeather"
                type="checkbox"
            />
            <br />
            <button className="form__submit-button" type="submit">
                Submit
            </button>
        </form>
    );
}
