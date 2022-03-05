import React from 'react';
import Button from './components/Button/button';


const App:React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button size="sm" onClick={(e) => {e.preventDefault(); alert(123)}}>btn</Button>
        <Button size="sm">btn</Button>
        <Button btnType="link" href='https://www.baidu.com' target="_blank">btn</Button>
        <h1>hello world</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <hr />
        <code>
          const a = 'b'
        </code>
        <p className='test'>
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
}

export default App;
