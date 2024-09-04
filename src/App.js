import "./styles.css";
import { useState, useEffect } from "react";
import { Loader } from "react-feather";
import UserDetails from "./UserDetails";

const App = () => {

  const [data, setData] = useState({});
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch("https://randomuser.me/api/");
        // const response = await request.json();
        // const results = response.results;    // Assigns response to the results object property
        const {results} = await request.json(); // This line does the same thing as the above two lines together by destructuring the results immediately from the response
        setData(results[0]);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <UserDetails />
    </div>
  );
};

export default App;
