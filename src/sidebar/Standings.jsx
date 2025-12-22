import { useState } from "react";

const teams = [
  { name: "Chelsea", pts: 24 },
  { name: "Man City", pts: 21 },
  { name: "Liverpool", pts: 12 },
  { name: "Man United", pts: 8 },
];

const leagues = [
  "Premier League",
  "La Liga",
  "Serie A",
  "Bundesliga",
];

export default function Standings() {
  const [open, setOpen] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("Premier League");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Standings</h2>
      <div className="relative mb-3">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between bg-bg px-3 py-1 rounded-md text-sm hover:bg-slate-700 transition"
        >
          <span>{selectedLeague}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div className="absolute left-0 right-0 mt-2 bg-card rounded-md border border-slate-800 z-50">
            {leagues.map((league) => (
              <button
                key={league}
                onClick={() => {
                  setSelectedLeague(league);
                  setOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-sm hover:bg-bg transition"
              >
                {league}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-2 text-sm">
        {teams.map((team, index) => (
          <div
            key={team.name}
            className="flex justify-between bg-bg rounded-md px-3 py-2"
          >
            <span>
              {index + 1}. {team.name}
            </span>
            <span className="font-medium">{team.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
