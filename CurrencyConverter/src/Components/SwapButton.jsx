function SwapButton({ onClick }) {
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={onClick}
        className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-full transition"
      >
        ⇅ Swap
      </button>
    </div>
  );
}

export default SwapButton;