import Temperature from "./Temperature";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container my-5">
        <Temperature defaultCity="San Francisco" />
      </div>
    </div>
  );
}

export default App;
