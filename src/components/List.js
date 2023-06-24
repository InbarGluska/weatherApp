export default function List({ activities, isGoodWeather, onDeleteActivity }) {
    return (
        <>
            <h1>{isGoodWeather ? "Good weather" : "Bad weather"}</h1>
            <ul class name="list">
                {activities.map((activity) => (
                    
            <li key={activity.id} className={` ${activity.isForGoodWeather ? "good-weather" : "list_item"}`}
          >
                        <p>{activity.name}</p>
                        <button
                            type="button"
                            aria-label="delete item"
                            className="delete-button"
                            onClick={() => onDeleteActivity(activity.id)}
                        >
                            <p>X</p>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}