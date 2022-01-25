import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/card";

// function App() {
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <Card
            title="ferrari"
            desc="Ferrari S.p.A. is an Italian luxury sports car"
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/1/13/Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg"
          />
          <Card
            title="G-Wagon"
            desc="The G-Class has always led the way in terms of climbing ability"
            imgUrl="https://cdn.motor1.com/images/mgl/ozYE4/s1/bulletproof-mercedes-amg-g63-by-inkas.jpg"
          />
          <Card
            title="Rolls-Royce"
            desc="Rolls-Royce Motor Cars Limited is a British luxury"
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQYO6V6xfixaIaPcr_XCiccOIrdB6QvUwf3ofnmD5Gqx-S-hnpMNIncDn3-PjJFMqUz8&usqp=CAU"
          />
        </div>
      </div>
    </>
  );
};

export default App;
