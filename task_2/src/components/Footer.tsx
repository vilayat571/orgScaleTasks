import { english, malay } from "../data/language";
import { FaDiscord, FaTwitter, FaReddit } from "react-icons/fa"; // Using react-icons for social media

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const texts = language === "English" ? english : malay;

  return (
    <footer className="w-full bg-transparent text-white pb-12 px-6 flex justify-center absolute bottom-0">
      {/* Centered container with same width as Navbar */}
      <div className="w-4/5 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Social Media */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <span className="font-semibold">{texts.socialMedia || "Social Media"}</span>
          <div className="flex gap-3 text-2xl mt-2">
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
        <div className=" flex justify-end relative left-12 ">
        <div className=" w-2/3">
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
