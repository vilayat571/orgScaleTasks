import data from "../data/currencies.ts";

const Currency = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.currency}>
          <img src={item.icon} alt={item.currency} width={24} height={24} />
          {item.currency}: {item.price}
        </div>
      ))}
    </div>
  );
};

export default Currency;
