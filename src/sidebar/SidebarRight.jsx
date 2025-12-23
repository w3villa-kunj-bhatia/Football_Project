import { useState } from "react";
import Card from "../components/ui/Card";

export default function SidebarRight() {
  const [theme, setTheme] = useState("light");

  return (
    <aside className="flex flex-col gap-2">
      <Card className="flex justify-center p-0.5 w-full">
  <div className="flex items-center rounded-sm bg-neutral-700 p-1.5">
    <button
      onClick={() => setTheme("light")}
      className={`flex items-center gap-2 rounded-sm px-8 py-1.5 text-m font-medium transition
        ${
          theme === "light"
            ? "bg-neutral-800 text-white"
            : "text-neutral-400 hover:text-white"
        }`}
    >
      <i className="fa-solid fa-sun text-[11px]" />
      Light
    </button>

    <button
      onClick={() => setTheme("dark")}
      className={`flex items-center gap-2 rounded-sm px-7 py-1.5 text-sm font-medium transition
        ${
          theme === "dark"
            ? "bg-neutral-800 text-white"
            : "text-neutral-400 hover:text-white"
        }`}
    >
      <i className="fa-solid fa-moon text-[11px]" />
      Dark
    </button>
  </div>
</Card>

      <Card className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">News</h2>
        <i className="fa-solid fa-chevron-right text-lime-400 text-sm" />
      </Card>

      <Card>
        <h2 className="font-semibold mb-2">Podcast</h2>
        <p className="text-sm text-muted-foreground">
          Breaking down the top matches
        </p>
      </Card>
    </aside>
  );
}
