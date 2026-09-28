import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import GitHubContributions from "@/components/sections/GitHubContributions";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-0 pt-32 sm:px-6 lg:px-8">
      
      <div className="flex flex-col gap-32">
        <Hero />
        <Projects />
        <Resume />
        <GitHubContributions/>
        <Contact />
      </div>

      <div className="mt-16">
        <Footer />
      </div>
      
    </div>
  );
}