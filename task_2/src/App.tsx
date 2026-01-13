// src/pages/Home.jsx

import Navbar from "./components/Navbar";
import SwapForm from "./components/SwapForm";


export default function App() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex flex-col text-center relative top-56">
        <h1 className="text-7xl text-center">Swap, Stake, and Earn<br/>All in One Place</h1>
        <p className="relative top-5 italic">
          Take full control of your crypto journey with our all-in-one DeFi
          platform. Instantly swap tokens with low fees, <br /> stake your assets to
          earn passive income.
        </p>

        <SwapForm />
      </div>
    </div>
  );
}
