import * as React from "react";
import "./Core.css";
import { MemberList } from "./components";
import { Cancel, Success, TeamSelection, PlanSelection } from "./sections";
import CompareButtons from "./sections/CompareButtons/CompareButtons";
import CartProvider from './context/CartContext';
import { BrowserRouter, Routes, Route, Outlet, Link,useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<PlanSelection />} />
            <Route path="selectteam" element={<TeamSelection />} />
            <Route path="memberlist" element={<MemberList />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="buttons" element={<CompareButtons />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </header>
    </div>
  );
}

export default App;
