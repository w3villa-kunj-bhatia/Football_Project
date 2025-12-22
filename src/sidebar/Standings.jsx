import { useState } from "react";

const teams = [
  { name: "Chelsea", pts: 24 },
  { name: "Man City", pts: 21 },
  { name: "Liverpool", pts: 20 },
  { name: "Man United", pts: 18 },
  { name: "Arsenal", pts: 16 },
  { name: "Tottenham", pts: 14 },
  { name: "Bournemouth", pts: 10 },
  { name: "Brentford", pts: 10 },
  { name: "Burnley", pts: 9 },
  { name: "Fulham", pts: 9 },
  { name: "Leeds", pts: 9 },
  { name: "Nottingham", pts: 7 },
  { name: "Forest", pts: 7 },
  { name: "Wolves", pts: 6 },
  { name: "Aston Villa", pts: 6 },
  { name: "Brighton", pts: 5 },
  { name: "Crystal Palace", pts: 4 },
  { name: "Everton", pts: 2 },
  { name: "West Ham", pts: 1 },
  { name: "Southhampton", pts: 0 },
];

const leagues = ["Premier League", "Champions League", "La Liga", "International"];

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
            className={`w-6 h-6 transition-transform mr-0 ${
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
