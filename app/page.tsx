import { Archive } from "@/components/archive/Archive";
import { Hero } from "@/components/hero/Hero";
import { PlayerStats } from "@/components/player-stats/PlayerStats";

export default function Home() {
  return (
    <>
      <Hero />
      <Archive />
      <PlayerStats />
    </>
  );
}
