import data from "@/data/posters.json";

export type PosterEntry = {
  id: string;
  title: string;
  year: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  objective: string;
  visualLogic: string;
};

export const posters: PosterEntry[] = data.posters;
