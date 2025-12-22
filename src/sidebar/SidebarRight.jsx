export default function SidebarRight() {
  return (
    <aside className="bg-card rounded-xl p-4 flex flex-col gap-6">
      <div className="flex justify-end gap-2 text-sm">
        <button className="px-3 py-1 bg-bg rounded-md">Light</button>
        <button className="px-3 py-1 bg-bg rounded-md">Dark</button>
      </div>

      <div>
        <h2 className="font-semibold mb-2">News</h2>
        <div className="space-y-3 text-sm text-muted">
          <p>Results and scores from the Premier League</p>
          <p>Top 100 players and managers</p>
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Podcast</h2>
        <div className="bg-bg p-3 rounded-md text-sm">
          Breaking down the top matches
        </div>
      </div>
    </aside>
  );
}
