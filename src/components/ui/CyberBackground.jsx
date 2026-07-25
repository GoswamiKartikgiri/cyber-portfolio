function CyberBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}

      <div className="absolute left-1/4 top-20 w-96 h-96 bg-cyan-500 rounded-full blur-[180px] opacity-20 animate-pulse"></div>

      <div className="absolute right-1/4 bottom-10 w-80 h-80 bg-blue-500 rounded-full blur-[180px] opacity-10 animate-pulse"></div>

    </div>
  );
}

export default CyberBackground;