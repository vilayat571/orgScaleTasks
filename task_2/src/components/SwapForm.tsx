import { useState, useEffect } from "react";
import data from "../data/currencies";
import "react-toastify/dist/ReactToastify.css";
import { english, malay } from "../data/language.ts";

interface SwapFormProps {
  language: string;
}

export default function SwapForm({ language }: SwapFormProps) {
  const texts = language === "English" ? english : malay;

  const [inputCurrency, setInputCurrency] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState(
    localStorage.getItem("currency") || "USD"
  );
  const [showCurrency, setShowCurrency] = useState(false);
  const [toCurrency, setToCurrency] = useState<string>("BLUR");
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

  const changeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowCurrency(true);
    setFromCurrency(e.target.value);
  };

  return (
    <div className="w-full flex items-center justify-center relative top-16">
      {/* Background overlay */}
      <div className="absolute w-1/3 h-75 p-6 rounded-xl bg-[#28190A] opacity-60"></div>

      <div className="relative w-1/3 p-6 rounded-xl bg-transparent z-10">
        {/* FROM INPUT */}
        <div className="flex items-center justify-between p-4 mb-4 rounded-lg bg-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            <select
              value={showCurrency ? fromCurrency : localStorage.getItem("currency") || ""}
              onChange={changeCurrency}
              className="bg-transparent text-white outline-none cursor-pointer"
            >
              {data.map((item) => (
                <option key={item.currency} value={item.currency}>
                  {item.currency}
                </option>
              ))}
            </select>
          </div>
          <input
            type="number"
            value={inputCurrency}
            onChange={(e) => setInputCurrency(Number(e.target.value))}
            className="bg-transparent text-white w-16 text-right outline-none"
            placeholder={texts.amount}
          />
        </div>

        {/* SWAP BUTTON */}
        <div className="flex justify-center mb-4">
          <button
            onClick={convertPrice}
            disabled={inputCurrency === 0 || fromCurrency === toCurrency}
            className={`w-12 h-12 rounded-full cursor-pointer 
              ${inputCurrency === 0 || fromCurrency === toCurrency ? "" : "bg-orange-500"}
              text-2xl font-bold flex items-center justify-center hover:bg-orange-600 transition`}
          >
            <span className={`inline-block transition-transform ${loading ? "animate-spin" : ""}`}>
              ⮃
            </span>
          </button>
        </div>

        {/* TO INPUT */}
        <div className="flex items-center justify-between p-4 mb-6 rounded-lg bg-gray-700">
          <div className="flex items-center gap-2">
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="bg-transparent text-white outline-none cursor-pointer"
            >
              {data.map((item) => (
                <option key={item.currency} value={item.currency}>
                  {item.currency}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            readOnly
            value={
              loading
                ? texts.calculating
                : `~ ${Number(outputCurrency || 0).toFixed(2)}`
            }
            className="bg-transparent text-white w-auto text-right outline-none"
          />
        </div>

        {/* CONNECT WALLET BUTTON */}
        <button className="w-full py-3 bg-orange-500 to-yellow-400 rounded-lg text-white font-semibold hover:from-orange-600 hover:to-yellow-500 transition">
          {texts.connectWallet}
        </button>
      </div>
    </div>
  );
}
