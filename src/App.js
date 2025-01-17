import "./styles.css";
import { useState, useEffect } from "react";
import { Loader } from "react-feather";
import UserDetails from "./UserDetails";

const App = () => {

  const [data, setData] = useState({});
  const [status, setStatus] = useState("loading");

  const fetchData = async () => {
    try {
      setStatus("loading");
      const request = await fetch("https://randomuser.me/api/");
      // const response = await request.json();
      // const results = response.results;    // Assigns response to the results object property
      const {results} = await request.json(); // This line does the same thing as the above two lines together by destructuring the results immediately from the response
      if (request.status === 200) {
        setData(results[0]);
        setStatus("success");
      }
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      {status === "loading" && <Loader />}
      {status === "success" && <UserDetails data={data} fetchData={fetchData} />}
      {status === "error" && "Something went wrong."}
    </div>
  );
};

export default App;
