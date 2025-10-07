interface KeywordPillProps {
  label: string;
}

export function KeywordPill({ label }: KeywordPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1 text-sm font-medium text-slate-300">
      {label}
    </span>
  );
}
