import React, { Component } from "react";
import Calendario from "./components/Calendario.jsx";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="app-inicio">
        <Calendario />
      </div>
    );
  }
}

export default App;
