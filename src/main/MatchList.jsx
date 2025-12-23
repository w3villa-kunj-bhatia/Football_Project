import { Search, Calendar } from "lucide-react";
import Card from "../components/ui/Card";
import MatchesTable from "./MatchesTable";

export default function MatchHeader() {
  const days = [
    { label: "Wednesday", date: "09 Aug" },
    { label: "Yesterday", date: "10 Aug" },
    { label: "Today", date: "11 Aug", active: true },
    { label: "Tomorrow", date: "12 Aug" },
    { label: "Sunday", date: "13 Aug" },
    { label: "Sunday", date: "13 Aug" },
  ];

  return (
    <div className="space-y-3 w-full bg-card p-4 rounded-xl">
      <div className="flex items-center gap-3 w-full">
        <div className="flex items-center gap-2 bg-bg px-3 py-2 rounded-lg text-sm shrink-0">
          <span className="w-3 h-3 rounded-full bg-lime-400" />
          <span className="font-medium text-lime-400">Live</span>
          <span className="text-muted text-lime-400">(1)</span>
        </div>

        <div className="relative flex-1 min-w-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-4 h-4" />
          <input
            type="text"
            placeholder="Search For Matches"
            className="w-full bg-bg rounded-lg pl-10 pr-4 py-2 text-sm outline-none text-center"
          />
        </div>

        <button className="bg-bg px-4 py-2 rounded-lg text-sm shrink-0">
          All Matches
        </button>
      </div>

      <div className="flex items-center gap-3 w-full overflow-hidden">
        <div className="flex items-center gap-2 flex-1 overflow-x-auto no-scrollbar">
          {days.map((day, i) => (
            <button
              key={i}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm text-left border w-fit
          ${
            day.active
              ? "border-lime-400 text-lime-400"
              : "border-transparent bg-bg"
          }`}
            >
              <div className="text-xs opacity-80">{day.label}</div>
              <div className="font-semibold">{day.date}</div>
            </button>
          ))}
        </div>

        <button className="shrink-0 items-center gap-2 border border-lime-400 text-lime-400 px-2 py-2 rounded-lg text-sm">
          <Calendar className="w-4 h-4 ml-9.5" />
          View Calendar
        </button>
      </div>
      <Card>
        <MatchesTable />
      </Card>
    </div>
  );
}
