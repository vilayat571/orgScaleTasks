import type { JSX } from "react";

// src/components/SwapCard.tsx
interface SwapCardProps {
  amount: number | "";
  setAmount: React.Dispatch<React.SetStateAction<number | "">>;
  token: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
}

export default function SwapCard({
  amount,
  setAmount,
  token,
}: SwapCardProps): JSX.Element {
  return (
    <div className="swap-card">
      <div className="token">
        <img src={token.icon} alt={token.currency} />
        <span>{token.currency}</span>
      </div>

      <input
        type="number"
        className=" outline-0"
        value={amount}
        placeholder="0.0"
        onChange={(e) =>
          setAmount(e.target.value === "" ? "" : Number(e.target.value))
        }
      />
    </div>
  );
}
