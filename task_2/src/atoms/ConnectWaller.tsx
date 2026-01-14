
// CONNECT WALLET BUTTON COMPONENT
export function ConnectWalletButton({ texts }: ConnectWalletButtonProps) {
  return (
    <button className="w-full py-3 cursor-pointer bg-[#e29025] rounded-lg text-white hover:bg-orange-600 transition duration-300">
      {texts.connectWallet}
    </button>
  );
}