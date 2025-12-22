import HeroBanner from "./HeroBanner";
import MatchList from "./MatchList";

export default function MainContent() {
  return (
    <main className="flex flex-col gap-4">
      <HeroBanner />
      <MatchList />
    </main>
  );
}
