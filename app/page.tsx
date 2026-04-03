import { Hero } from "@/components/hero/Hero";
import { HomeArchiveList } from "@/components/home/HomeArchiveList";
import { HomeBiosPreview } from "@/components/home/HomeBiosPreview";
import { HomeSkillsList } from "@/components/home/HomeSkillsList";
import { Transmission } from "@/components/transmission/Transmission";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeBiosPreview />
      <HomeArchiveList />
      <HomeSkillsList />
      <Transmission />
    </>
  );
}
