interface SwapFormProps {
  language: string;
}
type Texts = {
  amount: string;
  calculating: string;
  connectWallet: string;
};

 interface CurrencyInputProps {
  currency: string;
  setCurrency: (value: string) => void;
  inputValue: number | string | boolean;
  setInputValue: (value: number) => void;
  showCurrency?: boolean;
  texts?: any;
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