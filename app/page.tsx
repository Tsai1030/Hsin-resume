import { TopBar } from "@/components/TopBar";
import { Rail } from "@/components/Rail";
import { Hero } from "@/components/Hero";
import { Strengths } from "@/components/Strengths";
import { Gallery } from "@/components/Gallery";
import { Experience } from "@/components/Experience";
import { Story } from "@/components/Story";
import { InfoPanel } from "@/components/InfoPanel";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Rail />
      <main>
        <Hero />
        <Strengths />
        <Gallery />
        <Experience />
        <Story />
        <InfoPanel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
