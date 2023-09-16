import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import App from "./App-v2";
import App from "./App-v3";

/*function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StartRating color="blue" maxRating={8} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StartRating
      maxRating={5}
      color="red"
      defaultRating={3}
      // messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
<Test /> */}
  </React.StrictMode>
);
