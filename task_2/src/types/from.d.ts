interface SwapFormProps {
  language: string;
}

 interface CurrencyInputProps {
  currency: string;
  setCurrency: (value: string) => void;
  inputValue: number | string;
  setInputValue: (value: number) => void;
  showCurrency?: boolean;
  texts?: any;
  type: "from" | "to";
  loading?: boolean;
}

interface SwapButtonProps {
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
}

interface ConnectWalletButtonProps {
  texts: any;
}