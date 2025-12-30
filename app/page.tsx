import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import CampusLinks from "@/components/CampusLinks";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
        navItems={navItems} />
        <Hero />
        <Grid />
        <CampusLinks />
        {/*<Skills /> */}
        <RecentProjects />
        {/* <Client /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
