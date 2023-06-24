import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import Form from "./components/Form.js";
import List from "./components/List.js";
import { uid } from "uid";
import Weather from "./components/Weather";
import Video from "./video/video.mp4"

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
            console.log("fetching")
          } catch (error) {
            console.log("ERROR in FETCH: ", error);
          }
        }
        fetchingWeatherApi();
        const id = setInterval(fetchingWeatherApi, 5000);
        return () => {
          clearInterval(id);
        };
      }, [setWeather]);

    function handleAddActivities(newActivity) {
        setActivities([...activities, { id: uid(), ...newActivity }]);
    }

    const filteredActivities = activities.filter(
        (activity) => activity.isForGoodWeather === weather.isGoodWeather
    );

    function handleDeleteActivity(id) {
        setActivities(activities.filter((activity) => activity.id !== id));
    }

    return (
        <>
            <div className="container">
             <div className="gif">

            </div>
                <Weather weather={weather}/>
                <List
                    activities={filteredActivities}
                    isGoodWeather={weather?.isGoodWeather}
                    onDeleteActivity={handleDeleteActivity}
                />
                <Form onAddActivities={handleAddActivities} />
            </div>
        </>
    );
}
