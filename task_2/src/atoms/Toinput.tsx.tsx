import data from "../data/currencies";

// TO INPUT COMPONENT
export function ToInput({
  currency,
  setCurrency,
  inputValue,
  texts,
  loading = false,
}: CurrencyInputProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between p-4 mb-6 rounded-lg bg-gray-700">
      <div className="flex items-center gap-2 mb-2 sm:mb-0 w-full sm:w-auto">
        <img
          src={data.find((item) => item.currency == currency)?.icon}
          alt=""
          className="w-6 h-6"
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
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
            : `~ ${Number(inputValue || 0).toFixed(2)}`
        }
        className="bg-transparent text-white w-full sm:w-auto text-right outline-none"
      />
    </div>
  );
}
