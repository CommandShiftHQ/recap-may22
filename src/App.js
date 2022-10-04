import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios"
import CatInfo from './components/CatInfo';


function App() {
  const [catData, setCatData] = useState("");

  const getCatData = () => {
    const random = Math.ceil(Math.random() * 10)
    axios.get(`https://api.thecatapi.com/v1/breeds?limit=1&page=${random}`).then(result => setCatData(result.data[0])
    )
  }

  useEffect(() => {
    getCatData();
  }, [])

  // console.log(catsData)

  return (
    <div className="App">
      <h1>Recap</h1>
      {catData && <CatInfo catData={catData} handleClick={getCatData} />}
    </div>
  );
}

export default App;
