function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <p className="uppercase tracking-[4px] text-cyan-400 text-sm">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;