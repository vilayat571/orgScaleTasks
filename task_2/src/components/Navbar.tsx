import type { Dispatch, SetStateAction } from "react";
import { english, malay } from "../data/language.ts";

interface NavbarProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const changeLanguage = () => {
    setLanguage(language === "English" ? "Malay" : "English");
  };

  const texts = language === "English" ? english : malay;

  return (
    <nav className="w-full flex items-center justify-center h-12 relative top-8">
      <div className="w-4/5 border-[1.2px] border-[#e0b47b] rounded-full px-16 py-4 flex items-center justify-between">
        <h2>DROME</h2>
        <div className="links flex gap-4">
          <a>{texts.about}</a>
          <a>{texts.exchange}</a>
          <a>{texts.marketplace}</a>
          <a>{texts.solution}</a>
        </div>
        <button
          onClick={changeLanguage}
          className="cursor-pointer hover:bg-[#e0b47b] transition bg-transparent duration-300 lang-btn"
        >
          {language === "English" ? "Malay" : "English"}
        </button>
      </div>
    </nav>
  );
}
