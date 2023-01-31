import React from "react";
import logo from "./logo.svg";
// import "./App.css";

function App() {
  console.log(1234);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>123</h1>
        <h2>123</h2>
        <h3>123</h3>
        <hr />
        <code>const a = 'b'</code>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
