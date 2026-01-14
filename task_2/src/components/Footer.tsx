import { english, malay } from "../data/language";
import { FaDiscord, FaTwitter, FaReddit } from "react-icons/fa";

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const texts = language === "English" ? english : malay;

  return (
    <footer className="w-full bg-transparent text-white px-4 sm:px-6 pb-12 flex xl:mt-20 lg:mt-0 md:mt-0 sm:mt-0 justify-center">
      {/* Centered container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
        
        {/* Left: Social Media */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-semibold">{texts.socialMedia || "Social Media"}</span>
          <div className="flex gap-4 text-2xl mt-2">
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
        <div className="flex justify-center md:justify-end w-full md:w-2/3">
          <div className="text-center xl:w-2/5 lg:w-2/5 md:w-full sm:w-full md:text-left">
            <p className="font-semibold mb-1">{texts.footerTitle || "EcoSwap"}</p>
            <p className="text-sm text-gray-400">
              {texts.footerDescription ||
                "Effortlessly exchange items, reduce waste, and make eco-friendly choices."}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
