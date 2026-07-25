function Card({ children }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-lg p-6 shadow-lg transition hover:border-cyan-500">
      {children}
    </div>
  );
}

export default Card;