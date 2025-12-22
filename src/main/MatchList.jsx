const matches = [
  { home: "Chelsea", score: "2 : 1", away: "Man United" },
  { home: "Brentford", score: "0 : 1", away: "Liverpool" }
];

export default function MatchList() {
  return (
    <div className="bg-card rounded-xl p-4">
      <h2 className="font-semibold mb-3">Live Matches</h2>
      <div className="space-y-3">
        {matches.map((m, i) => (
          <div
            key={i}
            className="flex justify-between bg-bg px-4 py-2 rounded-md"
          >
            <span>{m.home}</span>
            <span className="font-semibold">{m.score}</span>
            <span>{m.away}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
