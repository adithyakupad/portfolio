export function RedAtmosphere({ className = "" }: { className?: string }) {
  return (
    <div className={`red-atmosphere ${className}`} aria-hidden="true">
      <span className="red-atmosphere__light" />
      <span className="red-atmosphere__membrane red-atmosphere__membrane--one" />
      <span className="red-atmosphere__membrane red-atmosphere__membrane--two" />
      <span className="red-atmosphere__grain" />
    </div>
  );
}
