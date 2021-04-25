import Temperature from "./Temperature";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <Temperature defaultCity="San Francisco" />
        <small>
          <a
            href="https://github.com/karynhuynh/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code
          </a>{" "}
          by Karyn Huynh
        </small>
      </div>
    </div>
  );
}

export default App;
