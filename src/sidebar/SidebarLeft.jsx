import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";

import Standings from "./Standings";
import Card from "../components/ui/Card";

import premierLeague from "../assets/premierLeague.png";
import championsLeague from "../assets/uefa.png";
import laliga from "../assets/laliga.png";
import international from "../assets/fifa.png";

const leagues = [
  { name: "Premier League", icon: premierLeague },
  { name: "Champions League", icon: championsLeague },
  { name: "LaLiga", icon: laliga },
  { name: "International", icon: international },
];

export default function SidebarLeft() {
  return (
    <aside className="flex flex-col gap-4 h-full text-white">
      
      <Card>
        <div className="flex items-center gap-1 mb-4 ml-2">
          <FontAwesomeIcon icon={faG} className="text-3xl" />
          <h1 className="text-2xl font-bold">GOLVIO</h1>
        </div>

        <div className="relative mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute w-5 h-5 left-3 top-1/2 -translate-y-1/2 text-slate-100"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5
              6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1
              14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06
              1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>

          <input
            placeholder="Search"
            className="w-full bg-bg placeholder:text-slate-100 text-slate-100 text-sm rounded-md pl-10 pr-4 py-2 outline-none"
          />
        </div>

        <h2 className="text-xl font-semibold mb-3">Top Leagues</h2>
        <ul className="space-y-2">
          {leagues.map((league) => (
            <li
              key={league.name}
              className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-bg cursor-pointer text-sm"
            >
              <img
                src={league.icon}
                alt={league.name}
                className="w-5 h-5 object-contain"
              />
              <span>{league.name}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="flex-1 overflow-hidden">
        <Standings />
      </Card>
    </aside>
  );
}
