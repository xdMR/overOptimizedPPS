import "./Core.css";
import { Cart, Headline, SliderTeam, SelectPackage, Button } from "./components";
import { Cancel, Success, TeamSelection, PlanSelection } from "./sections";
import * as React from "react";

import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  const items = [
    { id: "price_1MLYKjCpotfJBdLxeR976tgu", quantity: 1 },
    { id: "price_1MLYMsCpotfJBdLxCNAu52ft", quantity: 4 },
    // cant mix payment types
    // {id:"price_1MLyEFCpotfJBdLxfsfwb0Qd", quantity:1}
  ];

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); //Forward User To Stripe
        }
      })
      .catch((error) => console.error("Error", error));
  };

  const handleClick = () => {
    checkout();
    console.log("handle click");
  };
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index element={<PlanSelection />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>

          <Button boring={true} title="Boring"/>
          <Button boring={false} title="Microinteractions"/>

        <Cart />
        <Headline />
        <SliderTeam />
        <SelectPackage />
        <button
          onClick={handleClick}
          style={{ fontSize: "22px", padding: "5px" }}
        >
          Start Checkout
        </button>
      </header>
    </div>
  );
}

export default App;
