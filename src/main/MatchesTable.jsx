import chelsea from "../assets/teams/chelsea.png";
import liverpool from "../assets/teams/liverpool.png";
import manCity from "../assets/teams/man-city.png";
import manUnited from "../assets/teams/man-united.png";

import laliga from "../assets/leagues/laliga.png";
import premierLeague from "../assets/leagues/premierLeague.png";

const teamLogos = {
  Chelsea: chelsea,
  Sweden: chelsea,
  Liverpool: liverpool,
  "Man City": manCity,
  Arsenal: manCity,
  Genk: liverpool,
  Spain: liverpool,
  "Man United": manUnited,
  Netherlands: manUnited,
  Brentford: manUnited,
  Japan: manUnited,
  Olympiakos: manUnited,
};

const leagueLogos = {
  "England - Premier League": premierLeague,
  "Spain - La Liga": laliga,
};

function TeamCell({ name, align = "right" }) {
  const logo = teamLogos[name];

  return (
    <div
      className={`flex items-center gap-2 ${
        align === "right" ? "justify-end pr-3" : "justify-start pl-3"
      }`}
    >
      {align === "left" && logo && (
        <img src={logo} alt={name} className="w-5 h-5 object-contain" />
      )}

      <span className="truncate">{name}</span>

      {align === "right" && logo && (
        <img src={logo} alt={name} className="w-5 h-5 object-contain" />
      )}
    </div>
  );
}

export default function MatchesTable() {
  const sections = [
    {
      league: "England - Premier League",
      matches: [
        {
          time: "Live",
          home: "Chelsea",
          score: "2 - 1",
          away: "Man United",
          live: true,
        },
        {
          time: "13:40",
          home: "Brentford",
          score: null,
          away: "Liverpool",
        },
        {
          time: "18:20",
          home: "Arsenal",
          score: null,
          away: "Genk",
        },
      ],
    },
    {
      league: "Spain - La Liga",
      matches: [
        {
          time: "01:43",
          home: "Spain",
          score: null,
          away: "Netherlands",
        },
        {
          time: "13:40",
          home: "Japan",
          score: null,
          away: "Sweden",
        },
        {
          time: "18:20",
          home: "Olympiakos",
          score: null,
          away: "Genk",
        },
      ],
    },
  ];

  return (
    <div className="space-y-4 w-full">
      {sections.map((section, i) => (
        <div key={i} className="bg-card rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-black text-sm font-bold">
            {leagueLogos[section.league] && (
              <img
                src={leagueLogos[section.league]}
                alt={section.league}
                className="w-5 h-5 object-contain"
              />
            )}
            <span>{section.league}</span>
          </div>

          <div className="divide-y divide-white/5">
            {section.matches.map((match, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[70px_1fr_70px_1fr] items-center px-4 py-3 text-sm"
              >
                <div
                  className={
                    match.live ? "text-lime-400 font-medium" : "text-muted"
                  }
                >
                  {match.time}
                </div>

                <TeamCell name={match.home} align="right" />

                <div className="text-center font-semibold">
                  {match.score ?? "—"}
                </div>

                <TeamCell name={match.away} align="left" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
