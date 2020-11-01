import React, { useState, useEffect } from "react";
import getData from "./api/get-data";
import Card from "./components/card";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch((e) => console.log(e));
    return () => {};
  }, []);
  return (
    <div className="App">
      <header></header>
      <main>
        <div className="main-filter"></div>
        <div className="main-sidebar"></div>
        <div className="main-content">
          {data.map((item) => (
            <Card key={item.id} name={item.name} />
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
