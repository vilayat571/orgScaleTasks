import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SwapForm from "../components/SwapForm";
import data from "../data/currencies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { english, malay } from "../data/language.ts";

export default function App() {
  const [portal, setPortal] = useState(true);
  const [currency, setCurrency] = useState("Currency");
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "English");

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  // Select texts based on language
  const texts = language === "English" ? english : malay;

  const closePortal = () => {
    if (currency === texts.currency) {
      toast(texts.chooseCurrencyError, {
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
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-100 h-auto bg-white text-black rounded-lg p-6 z-10"
          >
            <form className="flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <label className="font-semibold text-xl italic">
                  {texts.currency}:
                </label>
              </div>
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
                {texts.select}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      <Navbar language={language} setLanguage={setLanguage} />

   <div className="flex flex-col items-center justify-center text-center w-full relative top-56 gap-6">
  <h1 className="text-7xl">
    {texts.swap}, {texts.stake}, and {texts.earn}
    <br />
    All in One Place
  </h1>
  <p className="w-2/3 italic text-center whitespace-pre-line">
    {language === "English"
      ? "Take full control of your crypto journey with our all-in-one DeFi platform. Instantly swap tokens with low fees, stake your assets to earn passive income."
      : "Ambil kawalan penuh terhadap perjalanan kripto anda dengan platform DeFi sehenti kami.\nTukar token dengan yuran rendah, dan pertaruhkan aset anda untuk mendapat pendapatan pasif."}
  </p>

  <SwapForm language={language} />
</div>




    </div>
  );
}
