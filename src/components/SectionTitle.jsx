export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-prose text-slate-300">{subtitle}</p>
      ) : null}
    </div>
  );
}