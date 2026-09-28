import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import GitHubContributions from "@/components/sections/GitHubContributions";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    // Changed pb-6 to pb-0 here so it ends perfectly flush with the bottom
    <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-0 pt-32 sm:px-6 lg:px-8">
      
      {/* Main sections keep the large 128px spacing (gap-32) between them */}
      <div className="flex flex-col gap-32">
        <Hero />
        <Projects />
        <Resume />
        <GitHubContributions/>
        <Contact />
      </div>

      {/* Footer is placed outside the gap, with a top margin to separate it from Contact */}
      <div className="mt-16">
        <Footer />
      </div>
      
    </div>
  );
}