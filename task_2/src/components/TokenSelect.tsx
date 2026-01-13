// src/components/TokenSelect.tsx
import { useState, type JSX } from "react";
import data from "../data/currencies";

interface TokenSelectProps {
  value: Token;
  onChange: (token: Token) => void;
}

export default function TokenSelect({
  value,
  onChange,
}: TokenSelectProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="token-select">
      <div className="selected" onClick={() => setOpen((prev) => !prev)}>
        <img src={value.icon} alt={value.currency} />
        <span>{value.currency}</span>
      </div>

      {open && (
        <div className="dropdown">
          {data.map((token: Token, i: number) => (
            <div
              key={`${token.currency}-${i}`}
              className="option"
              onClick={() => {
                onChange(token);
                setOpen(false);
              }}
            >
              <img src={token.icon} alt={token.currency} />
              <span>{token.currency}</span>
              <small>${token.price.toFixed(4)}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
