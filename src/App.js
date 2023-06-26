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

    console.log("activities", activities);

    function handleAddActivities(newActivity) {
        setActivities([...activities, { id: uid(), ...newActivity }]);
    }

    const weather = true;

    const filteredActivitiesGoodWeather = activities.filter(
        (activity) => activity.isForGoodWeather === weather
    );
    // const filteredActivitiesBadWeather = activities.filter(
    //     (activity) => !activity.isForGoodWeather
    // );

    function handleDeleteActivity(id) {
        setActivities(activities.filter((activity) => activity.id !== id));
    }

    return (
        <>
            <div className="container">
                <h1>Weather App </h1>
                <h3>Good Weather</h3>
                <List
                    activities={filteredActivitiesGoodWeather}
                    isGoodWeather={weather?.isGoodWeather}
                    onDeleteActivity={handleDeleteActivity}
                />
                {/* <h3>Bad Weather</h3>
                <List
                    activities={filteredActivitiesBadWeather}
                    isGoodWeather={weather?.isGoodWeather}
                    onDeleteActivity={handleDeleteActivity}
                /> */}
                <Form onAddActivities={handleAddActivities} />
            </div>
        </>
    );
}
