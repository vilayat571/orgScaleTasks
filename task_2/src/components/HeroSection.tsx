import SwapForm from "./SwapForm";

// Define props type
interface HeroSectionProps {
  language: string;
  texts: {
    swap: string;
    stake: string;
    earn: string;
  };
}

export default function HeroSection({ language, texts }: HeroSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-8 lg:px-16 mt-24 md:mt-32 gap-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        {texts.swap}, {texts.stake}, and {texts.earn}
        <br />
        All in One Place
      </h1>
      <p className="max-w-3xl text-center italic text-sm sm:text-base md:text-lg whitespace-pre-line">
        {language === "English"
          ? "Take full control of your crypto journey with our all-in-one DeFi platform. Instantly swap tokens with low fees, stake your assets to earn passive income."
          : "Ambil kawalan penuh terhadap perjalanan kripto anda dengan platform DeFi sehenti kami.\nTukar token dengan yuran rendah, dan pertaruhkan aset anda untuk mendapat pendapatan pasif."}
      </p>

      <SwapForm language={language} />
    </div>
  );
}
