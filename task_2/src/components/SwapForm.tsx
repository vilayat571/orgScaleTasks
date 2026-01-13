// src/components/SwapForm.tsx
import { useState, type JSX } from "react";
import SwapCard from "./SwapCard";
import data from "../data/currencies";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SwapForm(): JSX.Element {
  const [fromToken, setFromToken] = useState<Token>(data[4]); // ETH
  const [toToken, setToToken] = useState<Token>(data[3]); // USD

  const [fromAmount, setFromAmount] = useState<number | "">("");
  const [toAmount, setToAmount] = useState<number | "">("");

  const handleSwap = (): void => {
    if (fromAmount === "" || fromAmount <= 0) return;

    const usdValue = fromAmount * fromToken.price;
    const result = usdValue / toToken.price;

    setToAmount(Number(result.toFixed(6)));
  };

  const switchTokens = (): void => {
    setFromToken(toToken);
    setToToken(fromToken);

    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="swap-form w-1/3 relative top-12">
      <SwapCard
        amount={fromAmount}
        setAmount={setFromAmount}
        token={fromToken}
        setToken={setFromToken}
      />

      <button className="switch-btn" onClick={switchTokens}>
     {/*    <FontAwesomeIcon icon={["fad", "exchange"]} /> */}
      </button>

      <SwapCard
        amount={toAmount}
        setAmount={setToAmount}
        token={toToken}
        setToken={setToToken}
      />

      <button className="swap-btn" onClick={handleSwap}>
        Connect Wallet
      </button>
    </div>
  );
}
