import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import MobileMenu from "./MobileMenu";

interface MobileNavbarProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export default function MobileNavbar({ language, setLanguage }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex flex-col gap-2 px-6 py-4 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h2 className="font-bold text-xl">DOMIE</h2>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-6 h-6 focus:outline-none"
        >
          <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu language={language} setLanguage={setLanguage} closeMenu={() => setIsOpen(false)} />}
    </div>
  );
}
