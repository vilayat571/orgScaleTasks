// SWAP BUTTON COMPONENT
export function SwapButton({ onClick, disabled, loading }: SwapButtonProps) {
  return (
    <div className="flex justify-center my-0">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-12 h-12 rounded-full cursor-pointer 
          ${disabled ? "" : "bg-orange-500"}
          text-2xl font-bold flex items-center justify-center hover:bg-orange-600 transition`}
      >
        <span className={`inline-block transition-transform ${loading ? "animate-spin" : ""}`}>
          ⮃
        </span>
      </button>
    </div>
  );
}