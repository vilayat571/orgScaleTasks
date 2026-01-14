import { useState } from "react";
import Navbar from "../components/Navbar";
import SwapForm from "../components/SwapForm";
import data from "../data/currencies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function App() {
  const [portal, setPortal] = useState(true);
  const [currency, setCurrency] = useState("Currency");

  localStorage.setItem("currency", currency);

  const closePortal = () => {
    if (currency == "Currency") {
      toast("Please choose the currency", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Poppins",
        },
      });
    } else {
      setPortal(false);
    }
  };

  return (
    <div className="flex flex-col">
      {portal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar
            closeOnClick
            pauseOnHover
            draggable={false}
            theme="colored"
            style={{ zIndex: 9999 }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // start slightly left
            animate={{ opacity: 1, x: 0 }} // move to original position
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-100 h-auto bg-white text-black rounded-lg p-6 z-10"
          >
            <form className="flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <label className="font-semibold text-xl italic">
                  Select default currency:
                </label>
              </div>{" "}
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="border rounded px-3 py-2 outline-none py-5 cursor-pointer"
              >
                {data.map((item) => (
                  <option key={item.currency} value={item.currency}>
                    {item.currency}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="bg-black hover:bg-green-700 rounded-sm transition cursor-pointer text-white px-2 py-4 inline"
                onClick={closePortal}
              >
                Choose & close
              </button>
            </form>
          </motion.div>
        </div>
      )}

      <Navbar />
      <div className="flex flex-col text-center relative top-56">
        <h1 className="text-7xl text-center">
          Swap, Stake, and Earn
          <br />
          All in One Place
        </h1>
        <p className="relative top-5 italic">
          Take full control of your crypto journey with our all-in-one DeFi
          platform. Instantly swap tokens with low fees, <br /> stake your
          assets to earn passive income.
        </p>

        <SwapForm />
      </div>
    </div>
  );
}
