import { useState } from "react";
import Card from "../components/ui/Card";

export default function SidebarRight() {
  const [theme, setTheme] = useState("light");

  const [newsBookmarks, setNewsBookmarks] = useState({});
  const [podcastBookmarks, setPodcastBookmarks] = useState({});
  const [featuredNewsBookmark, setFeaturedNewsBookmark] = useState(false);
  const [featuredPodcastBookmark, setFeaturedPodcastBookmark] = useState(false);

  const toggleNewsBookmark = (index) => {
    setNewsBookmarks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const togglePodcastBookmark = (index) => {
    setPodcastBookmarks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <aside className="flex flex-col gap-2">
      <Card className="flex justify-center w-full pt-3 pb-3">
        <div className="flex items-center rounded-md bg-neutral-700 p-1 w-60">
          <button
            onClick={() => setTheme("light")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-sm font-medium transition ${
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
            className={`flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-sm font-medium transition ${
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

      <Card className="p-3">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold">News</h2>
          <i className="fa-solid fa-chevron-right text-lime-400 text-xl" />
        </div>

        <div className="mb-4 overflow-hidden rounded-sm bg-bg p-1">
          <img
            src="https://images.ctfassets.net/phva2knh4vy5/6yXGzb0DrUPKQwceOUwywB/915f7bb1ae7643580cad2e6ac550f6a9/Brenden_Aaronson_USMNT_Paraguay_Nov_25.jpg"
            alt="Featured news"
            className="h-40 w-full object-cover"
          />
          <div className="py-2">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="text-sm font-bold leading-tight">
                  Results And Scores From The Premier League
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  1 day ago · 3 min read
                </p>
              </div>
              <button
                onClick={() => setFeaturedNewsBookmark((prev) => !prev)}
                className="shrink-0"
              >
                <i
                  className={`${
                    featuredNewsBookmark ? "fa-solid" : "fa-regular"
                  } fa-bookmark text-lime-400 text-lg`}
                />
              </button>
            </div>
          </div>
        </div>

        <ul className="flex flex-col gap-4 px-1.5">
          {[
            "Heavy On The Top 100 Players And Managers",
            "Results And Scores From The Premier League",
            "Top 10 Goals In Football This Week",
            "Results And Scores From Premier League",
          ].map((title, index) => (
            <li key={index} className="flex items-start gap-3 cursor-pointer">
              <img
                src="https://cdn.britannica.com/31/183231-050-8D8EB720/Carli-Lloyd-penalty-goal-semifinal-match-Germany-2015.jpg"
                alt=""
                className="h-16 w-16 rounded-sm object-cover shrink-0"
              />
              <div className="flex flex-1 items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold leading-snug line-clamp-2">
                    {title}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    1 day ago · 3 min read
                  </p>
                </div>
                <button
                  onClick={() => toggleNewsBookmark(index)}
                  className="shrink-0"
                >
                  <i
                    className={`${
                      newsBookmarks[index] ? "fa-solid" : "fa-regular"
                    } fa-bookmark text-lime-400 text-lg`}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-3">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Podcast</h2>
          <i className="fa-solid fa-chevron-right text-lime-400 text-xl" />
        </div>

        <div className="mb-4 overflow-hidden rounded-sm bg-bg p-1">
          <img
            src="https://ichef.bbci.co.uk/images/ic/480x270/p0dxg3x1.jpg"
            alt="Featured podcast"
            className="h-40 w-full object-cover"
          />
          <div className="py-2">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="text-sm font-bold leading-tight">
                  Breaking The Weekend Top Matches
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  10 min · Football Weekly
                </p>
              </div>
              <button
                onClick={() => setFeaturedPodcastBookmark((prev) => !prev)}
                className="shrink-0"
              >
                <i
                  className={`${
                    featuredPodcastBookmark ? "fa-solid" : "fa-regular"
                  } fa-bookmark text-lime-400 text-lg`}
                />
              </button>
            </div>
          </div>
        </div>

        <ul className="flex flex-col gap-4 px-1.5">
          {[
            "Here Are The Top 100 Players And Managers",
            "Results And Scores From The Premier League",
            "Top 10 Goals In Football This Week",
            "Premier League Weekly Roundup",
          ].map((title, index) => (
            <li key={index} className="flex items-start gap-3 cursor-pointer">
              <img
                src="https://cdn.britannica.com/31/183231-050-8D8EB720/Carli-Lloyd-penalty-goal-semifinal-match-Germany-2015.jpg"
                alt=""
                className="h-16 w-16 rounded-sm object-cover shrink-0"
              />
              <div className="flex flex-1 items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold leading-snug line-clamp-2">
                    {title}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    10 min · Football Weekly
                  </p>
                </div>
                <button
                  onClick={() => togglePodcastBookmark(index)}
                  className="shrink-0"
                >
                  <i
                    className={`${
                      podcastBookmarks[index] ? "fa-solid" : "fa-regular"
                    } fa-bookmark text-lime-400 text-lg`}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </aside>
  );
}
