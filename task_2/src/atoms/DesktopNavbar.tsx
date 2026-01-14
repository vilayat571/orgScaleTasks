import type { Dispatch, SetStateAction } from "react";
import { english, malay } from "../data/language.ts";

interface DesktopNavbarProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export default function DesktopNavbar({ language, setLanguage }: DesktopNavbarProps) {
  const changeLanguage = () => {
    setLanguage(language === "English" ? "Malay" : "English");
  };

  const texts = language === "English" ? english : malay;

  return (
    <nav className="hidden md:flex w-full items-center justify-center h-12 relative top-8">
      <div className="w-4/5 border-[1.2px] border-[#e0b47b] rounded-full px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <h2 className="font-bold text-xl">DOMIE</h2>

        {/* Links */}
        <div className="links flex gap-4">
          <a>{texts.about}</a>
          <a>{texts.exchange}</a>
          <a>{texts.marketplace}</a>
          <a>{texts.solution}</a>
        </div>

        {/* Language Button */}
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
