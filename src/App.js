// import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";
import Temperature from './Temperature'
import "./App.css";

function App() {
  return (
    <div className="weather">
      <Search />
      <Temperature />
      <hr />
      <Forecast />
    </div>
  );
}

export default App;
