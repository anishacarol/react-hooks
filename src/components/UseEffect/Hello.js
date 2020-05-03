import React from "react";

const Hello = () => {
  React.useEffect(() => {
    console.log("rendered");

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default Hello;
