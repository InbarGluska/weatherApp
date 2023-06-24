import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import Form from "./components/Form.js";
import List from "./components/List.js";
import { uid } from "uid";
import Weather from "./components/Weather";

import { useEffect } from "react";

const URL = "https://example-apis.vercel.app/api/weather";

export default function App() {
    const [activities, setActivities] = useLocalStorageState("activities", {
        defaultValue: [
            { name: "running", isForGoodWeather: false, id: "34fg67rty" },
        ],
    });
    const [weather, setWeather] = useLocalStorageState("weather", {
        defaultValue: "",
      });

      useEffect(() => {
        async function fetchingWeatherApi() {
          try {
            const response = await fetch(URL);
            const weather = await response.json();
            console.log(weather);
            setWeather(weather);
          } catch (error) {
            console.log("ERROR in FETCH: ", error);
          }
          const id = setInterval(fetchingWeatherApi, 5000); //5000
          return () => {
            clearInterval(id);
          };
        }
        fetchingWeatherApi();
      }, [setWeather]);

    console.log("activities", activities);

    function handleAddActivities(newActivity) {
        setActivities([...activities, { id: uid(), ...newActivity }]);
    }

    // const weather = true;

    const filteredActivitiesGoodWeather = activities.filter(
        (activity) => activity.isForGoodWeather === weather
    );
    const filteredActivitiesBadWeather = activities.filter(
        (activity) => !activity.isForGoodWeather
    );

    function handleDeleteActivity(id) {
        setActivities(activities.filter((activity) => activity.id !== id));
    }

    return (
        <>
            <div className="container">
                <h1>Weather App </h1>
                <Weather weather={weather}/>
                <List
                    activities={filteredActivitiesGoodWeather}
                    isGoodWeather={weather?.isGoodWeather}
                    onDeleteActivity={handleDeleteActivity}
                />
                 <h3>Bad Weather</h3>
                <List
                    activities={filteredActivitiesBadWeather}
                    isGoodWeather={weather?.isGoodWeather}
                    onDeleteActivity={handleDeleteActivity}
                /> 
                <Form onAddActivities={handleAddActivities} />
            </div>
        </>
    );
}
