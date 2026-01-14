import data from "../data/currencies";

// FROM INPUT COMPONENT
export function FromInput({
  currency,
  setCurrency,
  inputValue,
  setInputValue,
  showCurrency = false,
  texts,
}: CurrencyInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between p-4 rounded-lg bg-gray-700 mb-0">
      <div className="flex items-center gap-2 mb-2 sm:mb-0 w-full sm:w-auto">
        <img
          src={data.find((item) => item.currency == currency)?.icon}
          alt=""
          className="w-6 h-6"
        />
        <select
          value={showCurrency ? currency : localStorage.getItem("currency") || "USD"}
          onChange={handleChange}
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
        value={inputValue as number}
        onChange={(e) => setInputValue(Number(e.target.value))}
        className="bg-transparent text-white w-full sm:w-24 text-right outline-none"
        placeholder={texts.amount}
      />
    </div>
  );
}
