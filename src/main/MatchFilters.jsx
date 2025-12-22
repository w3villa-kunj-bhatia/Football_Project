const filters = ["Live", "Today", "Tomorrow", "Sunday", "Monday"];

export default function MatchFilters() {
  return (
    <div className="flex items-center gap-2">
      {filters.map(filter => (
        <button
          key={filter}
          className="px-4 py-2 rounded-full bg-card text-sm hover:bg-bg"
        >
          {filter}
        </button>
      ))}

      <button className="ml-auto px-4 py-2 bg-card rounded-md text-sm">
        Calendar
      </button>
    </div>
  );
}
