import { useState, useEffect } from "react";
import data from "../data/currencies";
import "react-toastify/dist/ReactToastify.css";
import { english, malay } from "../data/language.ts";
import { ToInput } from "../atoms/Toinput.tsx.tsx";
import { FromInput } from "../atoms/FromInput.tsx";
import { SwapButton } from "../atoms/SwapButton.tsx";
import { ConnectWalletButton } from "../atoms/ConnectWaller.tsx";

// MAIN SWAP FORM
export default function SwapForm({ language }: SwapFormProps) {
  const texts = language === "English" ? english : malay;

  const [inputCurrency, setInputCurrency] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState(
    localStorage.getItem("currency") || "USD"
  );
  const [showCurrency, setShowCurrency] = useState(false);
  const [toCurrency, setToCurrency] = useState<string>("DUSD");
  const [loading, setLoading] = useState(false);
  const [outputCurrency, setOutputCurrency] = useState<number | false>(0);

  useEffect(() => {
    localStorage.setItem("currency", fromCurrency);
  }, [fromCurrency]);

  const convertPrice = () => {
    setLoading(true);

    const fromCurrencyPrice = data.find(
      (bitcoin) => bitcoin.currency === fromCurrency
    );
    const toCurrencyPrice = data.find(
      (bitcoin) => bitcoin.currency === toCurrency
    );

    const result =
      fromCurrencyPrice &&
      toCurrencyPrice &&
      inputCurrency * (fromCurrencyPrice.price / toCurrencyPrice.price);

    setOutputCurrency(result || 0);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full flex items-center justify-center relative xl:mb-4 lg:mb-0 md:mb-0 sm:mb-0 xl:-bottom-2 lg:bottom-0 md:bottom-0 sm:bottom-0  px-4">
      <div className="absolute w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:h-72 sm:h-80 md:h-96 p-8 rounded-xl xl:bg-[#28190A]
        lg:bg-[#28190A]  md:bg-transparent  sm:bg-transparent opacity-60"></div>

      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl p-6 rounded-xl bg-transparent z-10">
        <FromInput
          currency={fromCurrency}
          setCurrency={(val) => {
            setShowCurrency(true);
            setFromCurrency(val);
          }}
          inputValue={inputCurrency}
          setInputValue={setInputCurrency}
          showCurrency={showCurrency}
          texts={texts}
          type="from"
        />

        <SwapButton
          onClick={convertPrice}
          disabled={inputCurrency === 0 || fromCurrency === toCurrency}
          loading={loading}
        />

        <ToInput
          currency={toCurrency}
          setCurrency={setToCurrency}
          inputValue={outputCurrency}
          texts={texts}
          loading={loading}
          type="to"
        />

        <ConnectWalletButton texts={texts} />
      </div>
    </div>
  );
}
