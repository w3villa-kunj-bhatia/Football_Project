import { useState } from "react";

import chelsea from "../assets/teams/chelsea.png";
import liverpool from "../assets/teams/liverpool.png";
import manCity from "../assets/teams/man-city.png";
import manUnited from "../assets/teams/man-united.png";
import premierLeague from "../assets/leagues/premierLeague.png";

const logos = [chelsea, liverpool, manCity, manUnited];

const teams = [
  { name: "Chelsea", stats: [14, 13, 22] },
  { name: "Liverpool", stats: [14, 10, 21] },
  { name: "Man City", stats: [14, 15, 20] },
  { name: "Man Utd", stats: [14, 8, 18] },
  { name: "Arsenal", stats: [14, 6, 16] },
  { name: "Totteham", stats: [14, 4, 14] },
  { name: "Bourne", stats: [14, -2, 10] },
  { name: "Brentford", stats: [14, -2, 10] },
  { name: "Burnley", stats: [14, -5, 9] },
  { name: "Fulham", stats: [14, -5, 9] },
  { name: "Leeds", stats: [14, -3, 9] },
  { name: "Notting", stats: [14, -6, 7] },
  { name: "Forest", stats: [14, -6, 7] },
  { name: "Wolves", stats: [14, -8, 6] },
  { name: "Aston Villa", stats: [14, -8, 6] },
  { name: "Brighton", stats: [14, -10, 5] },
  { name: "Spurs", stats: [14, -11, 4] },
  { name: "Everton", stats: [14, -15, 2] },
  { name: "West Ham", stats: [14, -18, 1] },
  { name: "Hamshire", stats: [14, -20, 0] },
];

const leagues = [
  "Premier League",
  "Champions League",
  "La Liga",
  "International",
];

export default function Standings() {
  const [open, setOpen] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("Premier League");

  return (
    <div>
      <div className="flex items-center gap-2 mb-2 ml-2">
        <h2 className="text-xl font-semibold">Standings</h2>
        <img
          src={premierLeague}
          alt="Premier League"
          className="w-6 h-6 object-contain ml-20"
        />
      </div>

      <div className="relative mb-3">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between bg-bg px-3 py-1 rounded-md text-sm hover:bg-slate-700 transition"
        >
          <span>{selectedLeague}</span>
          <svg
            className={`w-6 h-6 transition-transform ${
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
          <div className="absolute left-0 right-0 mt-1 bg-bg rounded-md border border-slate-800 z-50">
            {leagues.map((league) => (
              <button
                key={league}
                onClick={() => {
                  setSelectedLeague(league);
                  setOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-sm hover:bg-card transition"
              >
                {league}
              </button>
            ))}
          </div>
        )}

        {teams.map((team, index) => {
          let rowClasses = "bg-bg";
          if (index < 4) rowClasses = "bg-[#1a2039]";
          else if (index === 4) rowClasses = "bg-[#f47e01]";
          else if (index >= teams.length - 3) rowClasses = "bg-[#b70000]";

          const logo = logos[index % logos.length];

          return (
            <div
              key={team.name}
              className={`text-sm flex justify-between items-center rounded-md px-1 py-1.5 gap-1 mt-2.5 ${rowClasses}`}
            >
              <div className="flex items-center gap-2.5 flex-1">
                <span className="w-5 shrink-0 text-right">{index + 1}</span>

                <img
                  src={logo}
                  alt="Team logo"
                  className="w-4 h-4 shrink-0 object-contain"
                />

                <span className="truncate">{team.name}</span>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium shrink-0">
                <span className="w-4 text-center">{team.stats[0]}</span>
                <span className="w-4 text-center">{team.stats[1]}</span>
                <span className="w-4 text-center">{team.stats[2]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
