export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-card rounded-xl p-5 ${className}`}>
      {children}
    </div>
  );
}
