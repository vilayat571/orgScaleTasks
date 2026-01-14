import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PortalModal from "./components/PortalModal";
import HeroSection from "./components/HeroSection";
import { english, malay } from "./data/language";

export default function App() {
  const [portal, setPortal] = useState(true);
  const [currency, setCurrency] = useState("Currency");
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "English"
  );

  // Sync language & currency to localStorage
  useEffect(() => localStorage.setItem("language", language), [language]);
  useEffect(() => localStorage.setItem("currency", currency), [currency]);

  const texts = language === "English" ? english : malay;

  return (
    <div className="flex flex-col bg-gradient-radial from-[#2b1d0f] to-black text-white">
    {portal && (
        <PortalModal
          currency={currency}
          setCurrency={setCurrency}
          texts={texts}
          closePortal={() => setPortal(false)}
        />
      )} 

      <Navbar language={language} setLanguage={setLanguage} />

      <HeroSection language={language} texts={texts} />

      <Footer language={language} />
    </div>
  );
}
