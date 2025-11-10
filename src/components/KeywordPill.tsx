interface KeywordPillProps {
  label: string;
}

export function KeywordPill({ label }: KeywordPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#FBF4BD]/60 bg-white/60 backdrop-blur-md px-4 py-1 text-sm font-medium text-black shadow-sm hover:bg-[#FBF4BD]/70 transition-colors duration-300">
      {label}
    </span>
  );
}