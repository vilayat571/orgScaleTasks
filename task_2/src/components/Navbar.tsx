import type { Dispatch, SetStateAction } from "react";
import DesktopNavbar from "../atoms/DesktopNavbar";
import MobileNavbar from "../atoms/MobileNavbar";


interface NavbarProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  return (
    <>
      <DesktopNavbar language={language} setLanguage={setLanguage} />
      <MobileNavbar language={language} setLanguage={setLanguage} />
    </>
  );
}
