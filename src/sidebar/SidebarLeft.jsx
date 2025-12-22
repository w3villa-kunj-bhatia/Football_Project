import Standings from "./Standings";

export default function SidebarLeft() {
  return (
    <aside className="bg-card rounded-xl p-4 flex flex-col gap-6">
      <h1 className="text-xl font-bold">GOLVIO</h1>

      <div class="w-full max-w-sm min-w">
        <div class="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>

          <input
            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md text-center pl-10 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
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

      <Standings />
    </aside>
  );
}
