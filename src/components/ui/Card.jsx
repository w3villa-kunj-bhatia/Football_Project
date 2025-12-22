export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-card rounded-xl p-4 ${className}`}>
      {children}
    </div>
  );
}
