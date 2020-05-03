import React, { useState, useCallback } from "react";
import "./App.css";
// import Form from "../src/components/UseState/UseState";
// import UseEffect from "../src/components/UseEffect/UseEffect";
// import Hello from "../src/components/UseEffect/Hello";
// import UseRef from "../src/components/UseRef/UseRef";
import UseCallback from "../src/components/UseCallback/UseCallback";

function App() {
  // const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <div className="App">
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button> */}
      {/* <Form /> */}
      {/* <UseEffect /> */}
      {/* {showHello && <Hello />} */}
      {/* <UseRef /> */}
      <UseCallback increment={increment} />
      <div>Count: {count}</div>
    </div>
  );
}

export default App;
