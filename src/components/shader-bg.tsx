export function ShaderBg({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 bg-[#0F0F0F] ${className}`}
      aria-hidden
    />
  );
}
