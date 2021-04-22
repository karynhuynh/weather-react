// import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";
import Temperature from "./Temperature";

import "./App.css";

function App() {
  return (
    <div className="weather mt-5">
      <Search />
      <Temperature />
      <hr />
      <Forecast />
      <small>
        <a href="https://github.com/karynhuynh/weather-react">
          Open-source code
        </a>{" "}
        by Karyn Huynh
      </small>
    </div>
  );
}

export default App;
