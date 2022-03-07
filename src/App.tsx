import React from "react";
import Button from "./components/Button";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          disabled
          onClick={(e) => {
            alert(123);
          }}
        >
          btn
        </Button>
        <Button size="sm" btnType="danger">
          btn
        </Button>
        <Button btnType="link" href="https://www.baidu.com" target="_blank">
          btn
        </Button>
        <Button
          disabled
          btnType="link"
          href="https://www.baidu.com"
          target="_blank"
          onClick={() => alert(123)}
        >
          link disabled
        </Button>
        <Button disabled btnType="primary">
          disabled
        </Button>
        <Button size="lg">default</Button>
        <h1>hello world</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <hr />
        <code>const a = 'b'</code>
        <p className="test">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
};

export default App;
