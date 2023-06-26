export default function List({ activities, isGoodWeather, onDeleteActivity }) {
    return (
        <>
            <h1>{isGoodWeather ? "Good weather" : "Bad weather"}</h1>
            <ul class name="list">
                {activities.map((activity) => (
                    <li key={activity.id} className="list_item">
                        {activity.name}
                        <button
                            type="button"
                            aria-label="delete item"
                            className="delete-button"
                            onClick={() => onDeleteActivity(activity.id)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
