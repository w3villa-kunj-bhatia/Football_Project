import Standings from "./Standings";

export default function SidebarLeft() {
  return (
    <aside className="bg-card rounded-xl p-4 flex flex-col gap-6">
      <h1 className="text-xl font-bold">GOLVIO</h1>

      <input
        placeholder="Search"
        className="bg-bg rounded-md px-3 py-2 text-sm outline-none"
      />

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
