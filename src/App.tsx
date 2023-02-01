import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Button from "./components/Button/button";

function App() {
  return (
    <>
      <Button size="lg" btnType="default">
        default lg
      </Button>
      <Button size="sm">default sm</Button>
      <Button
        btnType="primary"
        onClick={(e) => {
          alert(11);
          console.log(e);
        }}
      >
        default sm
      </Button>
      <Button disabled onClick={() => alert("button disabled")}>
        disabled default
      </Button>
      <Button
        btnType="link"
        target=""
        disabled
        onClick={() => alert("a disabled")}
      >
        link disabled
      </Button>
      <Button
        btnType="link"
        href="www.baidu.com"
        target="_blank"
        onClick={(e) => {
          console.log(e, "link");
        }}
      >
        link default
      </Button>
      <Button btnType="danger">danger</Button>
    </>
  );
}

export default App;
