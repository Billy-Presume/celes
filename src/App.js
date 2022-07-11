/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { fetchData } from "./services/api";
import { URL } from "./utils/constants/url.constants";

function App() {
  const [bodies, setBodies] = useState({});

  // use useEffect to fetch the data from the API
  useEffect(() => {
    fetchData(URL).then((bodies) => setBodies(bodies["bodies"]));
    console.log(bodies[0]);
  }, []);

  return <div className="App">Celes</div>;
}

export default App;
