import { FaGithub } from "react-icons/fa";
import AnimatedCounter from "../ui/AnimatedCounter";
import AnimatedCatLogo from "../ui/AnimatedCatLogo";
import MotionWrapper from "../ui/MotionWrapper";

const GITHUB_QUERY = `
  query($userName: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $userName) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

async function getContributions() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    console.error("Missing GITHUB_TOKEN or GITHUB_USERNAME in .env.local");
    return { days: [], firstDayOfWeek: 0, totalMonthlyContributions: 0 };
  }

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  
  const firstDay = new Date(Date.UTC(year, month, 1)).toISOString();
  const lastDay = new Date(Date.UTC(year, month + 1, 0, 23, 59, 59)).toISOString();

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GITHUB_QUERY,
        variables: { userName: username, from: firstDay, to: lastDay },
      }),
      next: { revalidate: 3600 }, 
    });

    const data = await res.json();
    const weeks = data.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
    
    const contributionDays = weeks.flatMap((week: any) => week.contributionDays);
    
    const currentMonthDays = contributionDays.filter((day: any) => {
      const dayMonth = new Date(day.date).getMonth();
      return dayMonth === month;
    });

    const days = Array.from({ length: daysInMonth }, (_, index) => {
      const dateString = new Date(Date.UTC(year, month, index + 1)).toISOString().split('T')[0];
      const foundDay = currentMonthDays.find((d: any) => d.date.startsWith(dateString));
      return {
        date: dateString,
        dayNumber: index + 1,
        count: foundDay ? foundDay.contributionCount : 0,
      };
    });

    const totalMonthlyContributions = days.reduce((sum, day) => sum + day.count, 0);

    return { days, firstDayOfWeek, totalMonthlyContributions };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return { days: [], firstDayOfWeek: 0, totalMonthlyContributions: 0 };
  }
}

export default async function GitHubContributions() {
  const { days, firstDayOfWeek, totalMonthlyContributions } = await getContributions();
  const currentMonthName = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();

  if (!days.length) return null;

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getTierStyle = (count: number) => {
    if (count === 0) return "bg-white/[0.02] border-white/5 text-gray-600 hover:border-white/20 hover:bg-white/[0.05]"; 
    if (count >= 1 && count <= 3) return "bg-green-900/40 border-green-800/50 text-green-200 hover:bg-green-800/60 hover:shadow-[0_0_15px_rgba(20,83,45,0.6)]"; 
    if (count >= 4 && count <= 6) return "bg-green-600/70 border-green-500/50 text-white font-bold hover:bg-green-500/80 hover:shadow-[0_0_20px_rgba(22,163,74,0.6)]"; 
    return "bg-green-400 border-green-300 text-black font-extrabold shadow-[0_0_10px_rgba(74,222,128,0.3)] hover:bg-green-300 hover:shadow-[0_0_25px_rgba(74,222,128,0.8)]"; 
  };

  return (
    <section id="github" className="w-full scroll-mt-24 pb-8">
        
      {/* Custom CSS for Cat Animations only (Fade-In handled by Framer Motion now) */}
      <style>{`
        @keyframes pawWalk {
          0% { opacity: 0; transform: scale(0.5); }
          25% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 8px rgba(74,222,128,0.8)); }
          50%, 100% { opacity: 0; transform: scale(1); }
        }
        
        @keyframes catPounce {
          0%, 100% { transform: scale(1) translateY(0); }
          15% { transform: scale(1.1, 0.9) translateY(4px); } 
          30% { transform: scale(0.9, 1.1) translateY(-10px); } 
          50% { transform: scale(1.05, 0.95) translateY(0); } 
        }
        
        .cat-container:hover .cat-icon {
          animation: catPounce 2s infinite ease-in-out;
          color: #4ade80;
        }
        
        .cat-container:hover .paw-1 { animation: pawWalk 2s infinite ease-in-out; animation-delay: 0.1s; }
        .cat-container:hover .paw-2 { animation: pawWalk 2s infinite ease-in-out; animation-delay: 0.35s; }
        .cat-container:hover .paw-3 { animation: pawWalk 2s infinite ease-in-out; animation-delay: 0.6s; }
        .cat-container:hover .paw-4 { animation: pawWalk 2s infinite ease-in-out; animation-delay: 0.85s; }
      `}</style>

      {/* Header Section wrapped in Motion */}
      <MotionWrapper className="mb-8 flex flex-col items-center gap-4 text-center md:mb-10 md:items-start md:text-left">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-green-400 backdrop-blur-md transition-transform hover:scale-105">
          <FaGithub size={16} />
          <span>Live GitHub Sync</span>
        </div>
        
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Code <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Activity</span>
          </h2>
          <p className="text-gray-400">
            A real-time reflection of my commits, pull requests, and code reviews for {currentMonthName} {currentYear}.
          </p>
      </MotionWrapper>

      {/* Unified Premium Dashboard Card wrapped in Motion with a slight delay */}
      <MotionWrapper delay={0.2} duration={0.8} className="group/card flex w-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a]/40 shadow-2xl backdrop-blur-xl transition-colors duration-500 hover:border-white/10 lg:flex-row">
        
        {/* Left Side: Stats & Legend */}
        <div className="flex flex-col items-center justify-center border-b border-white/5 bg-white/[0.02] p-6 md:p-8 lg:w-1/3 lg:border-b-0 lg:border-r">
          
          <AnimatedCatLogo />

          <p className="text-5xl font-black tracking-tighter text-white md:text-6xl">
            <AnimatedCounter target={totalMonthlyContributions} />
          </p>
          
          <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 transition-all duration-500 group-hover/card:w-20"></div>
          
          <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-gray-500 md:text-sm">
            Contributions in<br/>
            <span className="text-gray-300">{currentMonthName} {currentYear}</span>
          </p>
          
          <div className="mt-6 flex w-full flex-col items-center gap-2 rounded-2xl border border-white/5 bg-[#0a0a0a]/50 p-3 transition-colors hover:border-white/10 md:mt-8 md:p-4">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-600 md:text-[10px]">Activity Level</p>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[9px] text-gray-500 md:text-[10px]">Less</span>
              <div className="h-2.5 w-2.5 rounded-[3px] bg-white/[0.02] border border-white/5 md:h-3 md:w-3"></div>
              <div className="h-2.5 w-2.5 rounded-[3px] bg-green-900/40 border border-green-800/50 md:h-3 md:w-3"></div>
              <div className="h-2.5 w-2.5 rounded-[3px] bg-green-600/70 border border-green-500/50 md:h-3 md:w-3"></div>
              <div className="h-2.5 w-2.5 rounded-[3px] bg-green-400 border border-green-300 shadow-[0_0_5px_rgba(74,222,128,0.4)] md:h-3 md:w-3"></div>
              <span className="text-[9px] text-gray-500 md:text-[10px]">More</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Calendar Grid (Fully Responsive) */}
        <div className="flex w-full flex-col items-center justify-center p-4 sm:p-6 md:p-10 lg:w-2/3">
          
          <div className="mx-auto w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px]">
            
            <div className="mb-2 grid grid-cols-7 gap-1 text-center text-[9px] font-bold uppercase tracking-wider text-gray-500 md:gap-2 md:text-[10px]">
              {weekDays.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1 sm:gap-1.5 md:gap-2">
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square w-full" />
              ))}
              
              {days.map((day) => (
                <div
                  key={day.date}
                  className={`group relative flex aspect-square w-full cursor-default flex-col items-center justify-center rounded-md border transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:scale-110 md:rounded-lg ${getTierStyle(day.count)}`}
                >
                  <span className="text-[9px] md:text-xs">{day.dayNumber}</span>
                  
                  {day.count > 0 && (
                    <div className="pointer-events-none absolute bottom-[120%] left-1/2 hidden -translate-x-1/2 translate-y-2 scale-95 whitespace-nowrap rounded-md border border-white/10 bg-[#111111] px-2 py-1 text-[10px] font-medium text-gray-200 opacity-0 shadow-xl transition-all duration-300 group-hover:block group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 md:px-2.5 md:text-[11px]">
                      <strong className="text-green-400">{day.count}</strong> commits
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </MotionWrapper>
      
    </section>
  );
}