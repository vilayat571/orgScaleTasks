import type { Dispatch, SetStateAction } from "react";
import { english, malay } from "../data/language.ts";

interface MobileMenuProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  closeMenu: () => void;
}

export default function MobileMenu({ language, setLanguage, closeMenu }: MobileMenuProps) {
  const texts = language === "English" ? english : malay;

  const changeLanguage = () => {
    setLanguage(language === "English" ? "Malay" : "English");
    closeMenu();
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-2 bg-black/90 border border-[#e0b47b] rounded-lg py-4 mx-6">
      <a onClick={closeMenu} className="text-white hover:text-[#e0b47b] cursor-pointer">{texts.about}</a>
      <a onClick={closeMenu} className="text-white hover:text-[#e0b47b] cursor-pointer">{texts.exchange}</a>
      <a onClick={closeMenu} className="text-white hover:text-[#e0b47b] cursor-pointer">{texts.marketplace}</a>
      <a onClick={closeMenu} className="text-white hover:text-[#e0b47b] cursor-pointer">{texts.solution}</a>
      <button
        onClick={changeLanguage}
        className="border border-[#e0b47b] text-white py-2 px-6 rounded-full hover:bg-[#e0b47b] hover:text-black transition"
      >
        {language === "English" ? "Malay" : "English"}
      </button>
    </div>
  );
}
