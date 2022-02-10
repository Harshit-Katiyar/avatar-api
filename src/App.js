import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  return (
    <div className="App">
        {data.map((item) => (
        <div className="card">
        <img src={`https://avatars.dicebear.com/v2/avataaars/${item.username}.svg?options[mood][]=happy`} />
        <h1>{item.name}</h1>
        <p><b>Email:</b> {item.email}</p>
        <p><b>Phone:</b> {item.phone}</p>
        <p><b>Company:</b> {item.company.name}</p>
        <p><b>Website:</b> {item.website}</p>
        <p><b>Address:</b> {item.address.street},{item.address.city},{item.address.suite}{item.address.zipcode}</p>
        </div>
        ))}
    </div>
  );
}
export default App;
