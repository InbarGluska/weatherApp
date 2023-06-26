export default function Form({ onAddActivities }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formElements = form.elements;
        const data = {
            name: formElements.name.value,
            isForGoodWeather: formElements.isForGoodWeather.checked,
        };
        document.getElementById("name").focus();
        event.target.reset();
        onAddActivities(data);
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
