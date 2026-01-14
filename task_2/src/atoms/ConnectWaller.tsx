
// CONNECT WALLET BUTTON COMPONENT
export function ConnectWalletButton({ texts }: ConnectWalletButtonProps) {
  return (
    <button className="w-full py-3 bg-orange-500 rounded-lg text-white font-semibold hover:bg-orange-600 transition">
      {texts.connectWallet}
    </button>
  );
}