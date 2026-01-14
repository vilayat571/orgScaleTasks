import type { Dispatch, SetStateAction } from "react";
import { english, malay } from "../data/language";
import { FaDiscord, FaTwitter, FaReddit } from "react-icons/fa"; // Using react-icons for social media

interface FooterProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export default function Footer({ language, setLanguage }: FooterProps) {
  const texts = language === "English" ? english : malay;

  return (
    <footer className="w-full bg-[#0a0a0a] text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Left: Social Media */}
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <span className="font-semibold mb-2">{texts.socialMedia || "Social Media"}</span>
        <div className="flex gap-4 text-2xl">
          <a href="#" aria-label="Discord">
            <FaDiscord />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Reddit">
            <FaReddit />
          </a>
        </div>
      </div>

      {/* Right: Info */}
      <div className="flex flex-col items-center md:items-end">
        <span className="font-semibold mb-1">{texts.footerTitle || "EcoSwap"}</span>
        <p className="text-sm text-gray-400 text-center md:text-right">
          {texts.footerDescription ||
            "Effortlessly exchange items, reduce waste, and make eco-friendly choices."}
        </p>

        {/* Optional: language toggle inside footer */}
        <button
          onClick={() =>
            setLanguage(language === "English" ? "Malay" : "English")
          }
          className="mt-4 px-3 py-1 bg-[#e0b47b] rounded hover:bg-[#d4a85a] transition"
        >
          {language === "English" ? "Malay" : "English"}
        </button>
      </div>
    </footer>
  );
}
