interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}

interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}

interface Props extends BoxProps {}

const WalletPage: React.FC<Props> = ({ children, ...rest }: Props) => {
  const balances = useWalletBalances(); // returns WalletBalance[]
  const prices = usePrices(); // { [currency: string]: number }

  // Predefined blockchain priorities
  const getPriority = (blockchain: string): number => {
    switch (blockchain) {
      case 'Osmosis': return 100;
      case 'Ethereum': return 50;
      case 'Arbitrum': return 30;
      case 'Zilliqa': return 20;
      case 'Neo': return 20;
      default: return -99;
    }
  };

  // Filter and sort balances with useMemo for performance
  const sortedFormattedBalances: FormattedWalletBalance[] = useMemo(() => {
    return balances
      // Keep only positive balances and recognized blockchains
      .filter(balance => balance.amount > 0 && getPriority(balance.blockchain) > -99)
      // Map to include formatted amount and priority
      .map(balance => ({
        ...balance,
        formatted: balance.amount.toFixed(),
        priority: getPriority(balance.blockchain) // add priority for sorting
      }))
      // Sort descending by priority
      .sort((a, b) => b.priority - a.priority)
      // Remove temporary priority property
      .map(({ priority, ...rest }) => rest);
  }, [balances]);

  // Render rows
  const rows = sortedFormattedBalances.map(balance => {
    const usdValue = (prices[balance.currency] || 0) * balance.amount;
    return (
      <WalletRow
        key={`${balance.currency}-${balance.blockchain}`} // stable unique key
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    );
  });

  return <div {...rest}>{rows}</div>;
};
