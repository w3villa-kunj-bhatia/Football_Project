import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faG,
  faFutbol,
  faTrophy,
  faStar,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import Standings from "./Standings";

const leagues = [
  { name: "Premier League", icon: faCrown },
  { name: "Champions League", icon: faStar },
  { name: "LaLiga", icon: faTrophy },
  { name: "Ligue 1", icon: faFutbol },
];

export default function SidebarLeft() {
  return (
    <aside className="bg-card rounded-xl p-4 flex flex-col gap-6 text-white">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg flex items-center justify-center w-8 h-10">
            <FontAwesomeIcon icon={faG} className="text-white text-xl" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">GOLVIO</h1>
        </div>

        <div className="w-full">
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute w-5 h-5 left-3 text-slate-100"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              class="w-full bg-bg placeholder:text-slate-100 text-slate-100 text-sm  rounded-md text-center pl-10 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow"
              placeholder="Search"
            />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold mb-2">Top Leagues</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>Premier League</li>
            <li>Champions League</li>
            <li>LaLiga</li>
            <li>Ligue 1</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-4">
        <Standings />
      </div>
    </aside>
  );
}
