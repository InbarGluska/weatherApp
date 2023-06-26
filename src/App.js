import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form.js";
import List from "./components/List.js";
import { uid } from "uid";

export default function App() {
    const [activities, setActivities] = useLocalStorageState("activities", {
        // defaultValue: [
        //     { name: "mama", isForGoodWeather: false, id: "34fg67rty" },
        // ],
    });

    function handleAddActivities(newActivity) {
        setActivities([...activities, { id: uid(), ...newActivity }]);
    }

    const weather = true;

    const filteredActivities = activities.filter(
        (activity) => activity.isForGoodWeather === weather.isGoodWeather
    );

    function handleDeleteActivity(id) {
        setActivities(activities.filter((activity) => activity.id !== id));
    }

    return (
        <>
            <div className="container">
                <h1>Weather App </h1>
                <List
                    activities={activities}
                    isGoodWeather={weather?.isGoodWeather}
                    onDeleteActivity={handleDeleteActivity}
                />
                <Form onAddActivities={handleAddActivities} />
            </div>
        </>
    );
}