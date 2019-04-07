import React from "react";
import axios from "axios";

const App = () => {
  const items = () => {
    axios
      .get("http://localhost:3000/categories")
      .then(res => console.log(res.data[0].name));
  };
  items();
  return (
    <div>
      <h1>Grocery List V4</h1>
    </div>
  );
};

export default App;
