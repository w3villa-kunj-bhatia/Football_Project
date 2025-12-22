const teams = [
  { name: "Chelsea", pts: 24 },
  { name: "Man City", pts: 21 },
  { name: "Liverpool", pts: 12 },
  { name: "Man United", pts: 8 }
];

export default function Standings() {
  return (
    <div>
      <h2 className="text-sm font-semibold mb-3">Standings</h2>
      <div className="space-y-2 text-sm">
        {teams.map((team, index) => (
          <div
            key={team.name}
            className="flex justify-between bg-bg rounded-md px-3 py-2"
          >
            <span>{index + 1}. {team.name}</span>
            <span>{team.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
