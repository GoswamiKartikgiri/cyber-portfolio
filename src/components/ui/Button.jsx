function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20",

    secondary:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black",

    ghost:
      "text-white hover:text-cyan-400",
  };

  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;