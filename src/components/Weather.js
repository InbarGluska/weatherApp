export default function Weather({ weather }) {
    return (
      <header>
        <h1>
          {weather.condition}
          {weather.temperature} °C
        </h1>
      </header>
    );
  }