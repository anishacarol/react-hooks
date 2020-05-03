import React from "react";
import { useRenders } from "./UseRenders";
const UseCallback = React.memo(({ increment }) => {
  useRenders();
  return (
    <div>
      <button onClick={increment}>Hello</button>;
    </div>
  );
});

export default UseCallback;
