"use client";

import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import {
  ExternalLink,
  Code2,
  Box,
  Server,
  Settings,
  Database,
  Info,
  X,
  CheckCircle2
} from "lucide-react";

// Helper dictionary mapping your core stack to icons and exact color schemes
const techConfig: Record<string, { icon: ReactNode; color: string }> = {
  "React": { icon: <Code2 size={14} />, color: "text-blue-400" }, // Updated to match your main stack colors
  "Next JS": { icon: <Box size={14} />, color: "text-white" },
  "Node": { icon: <Server size={14} />, color: "text-green-500" },
  "Express": { icon: <Settings size={14} />, color: "text-gray-300" },
  "MongoDB": { icon: <Database size={14} />, color: "text-green-400" },
};

// Theme definitions mapping colors to Tailwind classes
const themeMap: Record<string, {
  frontHover: string;
  barGradient: string;
  backBg: string;
  backBorder: string;
  accentText: string;
}> = {
  blue: {
    frontHover: "group-hover:border-blue-500/50 group-hover:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.2)]",
    barGradient: "from-blue-600 to-blue-300",
    backBg: "bg-blue-950/80",
    backBorder: "border-blue-500/30",
    accentText: "text-blue-400"
  },
  green: {
    frontHover: "group-hover:border-green-500/50 group-hover:shadow-[0_15px_40px_-15px_rgba(74,222,128,0.2)]",
    barGradient: "from-green-600 to-green-400",
    backBg: "bg-green-950/80",
    backBorder: "border-green-500/30",
    accentText: "text-green-400"
  },
  red: {
    frontHover: "group-hover:border-red-500/50 group-hover:shadow-[0_15px_40px_-15px_rgba(248,113,113,0.2)]",
    barGradient: "from-red-600 to-red-400",
    backBg: "bg-red-950/80",
    backBorder: "border-red-500/30",
    accentText: "text-red-400"
  },
  orange: {
    frontHover: "group-hover:border-orange-500/50 group-hover:shadow-[0_15px_40px_-15px_rgba(251,146,60,0.2)]",
    barGradient: "from-orange-600 to-orange-400",
    backBg: "bg-orange-950/80",
    backBorder: "border-orange-500/30",
    accentText: "text-orange-400"
  },
  yellow: {
    frontHover: "group-hover:border-yellow-500/50 group-hover:shadow-[0_15px_40px_-15px_rgba(250,204,21,0.2)]",
    barGradient: "from-yellow-600 to-yellow-300",
    backBg: "bg-yellow-950/80",
    backBorder: "border-yellow-500/30",
    accentText: "text-yellow-400"
  },
};

type ProjectType = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  themeKey: string;
  frontend: string[];
  backend: string[];
};

export default function Projects() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const projects: ProjectType[] = [
    {
      title: "CRM",
      description: "CRM (Customer Relationship Management) is a software used to manage customers, leads, sales, and customer interactions in one place.",
      image: "/1.png",
      tech: ["React", "Next JS", "Node", "Express", "MongoDB"],
      live: "https://crm.techsunset.com",
      themeKey: "blue",
      frontend: [
        "Customer list and customer details",
        "Customer add and edit forms",
        "Lead management screens",
        "Search and filtering",
        "Dashboard and basic data display",
        "API integration with the backend",
        "Form validation and error handling"
      ],
      backend: [
        "CRUD APIs for customer data",
        "Lead management",
        "Searching customers and leads",
        "Updating customer status",
        "User authentication and authorization",
        "Request validation and error handling",
        "Connecting APIs with the database"
      ]
    },
    {
      title: "Books",
      description: "TechSunset Books is accounting and invoicing software used to manage invoices, payments, expenses, customers, vendors, GST, and financial reports in one place.",
      image: "/2.png",
      tech: ["React", "Next JS", "Node", "Express", "MongoDB"],
      live: "https://books.techsunset.com",
      themeKey: "green",
      frontend: [
        "Dashboard and financial summary",
        "Invoice list and invoice creation forms",
        "Customer and vendor management",
        "Expense tracking screens",
        "Payment tracking",
        "GST summary and reports",
        "API integration, form validation and error handling"
      ],
      backend: [
        "Creating, updating, deleting and getting invoices",
        "Customer and vendor management",
        "Expense management",
        "Payment tracking",
        "GST and financial report data",
        "Request validation and error handling",
        "Connecting APIs with the database"
      ]
    },
    {
      title: "HRMS",
      description: "TechSunset HR is an Human Resource management software used to manage employees, attendance, leaves, onboarding, departments, holidays, and HR reports in one place.",
      image: "/3.png",
      tech: ["React", "Next JS", "Node", "Express", "MongoDB"],
      live: "https://hr.techsunset.com",
      themeKey: "red",
      frontend: [
        "Employee list and employee details",
        "Employee add and edit forms",
        "Attendance management screens",
        "Leave request and approval screens",
        "Department and holiday management",
        "Onboarding screens",
        "HR reports and dashboard",
        "API integration, form validation and error handling"
      ],
      backend: [
        "Employee CRUD operations",
        "Attendance management",
        "Leave management",
        "Department and holiday management",
        "Employee onboarding",
        "HR reports and data",
        "Authentication, validation and error handling",
        "Connecting APIs with the database"
      ]
    },
    {
      title: "Inventory",
      description: "TechSunset Inventory is inventory management software used to manage products, stock, orders, suppliers, warehouses, and fulfillment in one place.",
      image: "/4.png",
      tech: ["React", "Next JS", "Node", "Express", "MongoDB"],
      live: "https://inventory.techsunset.com",
      themeKey: "orange",
      frontend: [
        "Product list and product details",
        "Add and edit product forms",
        "Inventory and stock management",
        "Order management screens",
        "Supplier management",
        "Warehouse management",
        "Fulfillment and stock reports",
        "API integration, search and filtering"
      ],
      backend: [
        "Product CRUD operations",
        "Stock and inventory management",
        "Sales order management",
        "Supplier and purchase order management",
        "Warehouse management",
        "Stock reservation and stock updates",
        "Request validation and error handling",
        "Connecting APIs with the database"
      ]
    },
    {
      title: "Project",
      description: "TechSunset Project is project and task management software used to manage projects, tasks, deadlines, milestones, team workload, and progress in one place.",
      image: "/5.png",
      tech: ["React", "Next JS", "Node", "Express", "MongoDB"],
      live: "https://project.techsunset.com",
      themeKey: "yellow",
      frontend: [
        "Project list and project details",
        "Task creation and task management",
        "Kanban board",
        "Task status and priority",
        "Calendar and deadlines",
        "Milestone and project progress",
        "Team workload and reports",
        "API integration and form validation"
      ],
      backend: [
        "Project CRUD operations",
        "Task and subtask management",
        "Assigning tasks to team members",
        "Task status and priority management",
        "Milestone and deadline management",
        "Team workload and time tracking",
        "Request validation and error handling",
        "Connecting APIs with the database"
      ]
    },
    {
      title: "TS Campus",
      description: "TS Campus is a school management system used to manage admissions, students, attendance, fees, exams, staff, communication, and other school operations in one place.",
      image: "/6.png",
      tech: ["React", "Next JS", "Node", "Express", "MongoDB"],
      live: "https://tscampus.com",
      themeKey: "blue",
      frontend: [
        "Student list and student details",
        "Admission and student forms",
        "Attendance management",
        "Fee management and payment screens",
        "Class, section and subject management",
        "Exam and report card screens",
        "Staff and HR management",
        "Dashboard, reports and notifications",
        "API integration, form validation and error handling"
      ],
      backend: [
        "Student and admission management",
        "Attendance management",
        "Fee and payment management",
        "Class, section and subject management",
        "Exam and result management",
        "Staff and employee management",
        "Notifications and communication",
        "Authentication, validation and error handling",
        "Connecting APIs with the database"
      ]
    }
  ];

  return (
    <section id="projects" className="w-full scroll-mt-24 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-14 flex flex-col gap-2"
      >
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          My <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-gray-400">A selection of my recent full-stack projects.</p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const isFlipped = flippedIndex === index;
          const currentTheme = themeMap[project.themeKey];

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="relative h-[460px] w-full perspective-[1000px] group"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative h-full w-full rounded-3xl"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* ==================== FRONT FACE ==================== */}
                <div
                  className={`absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-[#141414] to-[#0a0a0a] transition-all duration-300 ${currentTheme.frontHover} ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Project Image Container - Grouped separately (group/img) so ONLY image hover triggers scroll */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-gray-900 shrink-0 group/img">
                    <div className="absolute inset-0 z-10 bg-black/20 transition-colors duration-500 group-hover/img:bg-transparent pointer-events-none" />
                    
                    {/* 5-Second Scrolling Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-[object-position] duration-1000 ease-out group-hover/img:duration-[5000ms] group-hover/img:ease-linear group-hover/img:object-bottom"
                    />

                    {/* Floating Action Buttons */}
                    <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
                      <button
                        onClick={() => setFlippedIndex(index)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-yellow-400 hover:text-black"
                        title="Architecture & Info"
                      >
                        <Info size={18} />
                      </button>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-green-400 hover:text-black"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className={`text-xl font-bold text-white transition-colors group-hover:${currentTheme.accentText}`}>
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-400 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Colorful Animated Tech Stack Pills */}
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      {project.tech.map((tech) => {
                        const techData = techConfig[tech];
                        return (
                          <motion.div
                            key={tech}
                            whileHover="hover"
                            variants={{
                              hover: { y: -3, scale: 1.05 }
                            }}
                            className="flex cursor-default items-center gap-1.5 rounded-full border border-gray-800 bg-gray-900/50 px-2.5 py-1 text-[10px] font-medium text-gray-400 transition-colors duration-300 hover:border-gray-500 hover:bg-gray-800 hover:text-white hover:shadow-md"
                          >
                            {techData && (
                              <motion.span
                                variants={{
                                  hover: {
                                    scale: 1.2,
                                    rotate: [0, -15, 15, -5, 5, 0],
                                    transition: { duration: 0.5, ease: "easeInOut" }
                                  }
                                }}
                                className={techData.color}
                              >
                                {techData.icon}
                              </motion.span>
                            )}
                            <motion.span
                              variants={{ hover: { x: 2 } }}
                              transition={{ duration: 0.2 }}
                            >
                              {tech}
                            </motion.span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Animated Bottom Glow Bar */}
                  <div className={`absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r ${currentTheme.barGradient} transition-all duration-500 group-hover:w-full`} />
                </div>

                {/* ==================== BACK FACE (BLURRED BLOG READER) ==================== */}
                <div
                  className={`absolute inset-0 flex flex-col rounded-3xl border ${currentTheme.backBorder} ${currentTheme.backBg} p-6 shadow-2xl backdrop-blur-2xl`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* Top Header & Close Button */}
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4 shrink-0">
                    <h3 className="text-lg font-bold text-white">
                      {project.title} <span className={currentTheme.accentText}>Details</span>
                    </h3>
                    <button
                      onClick={() => setFlippedIndex(null)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 hover:text-white"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Scrollable Content Area for Frontend/Backend details */}
                  <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40">
                    
                    {/* Frontend Section */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 size={16} className={currentTheme.accentText} />
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Frontend Work</h4>
                      </div>
                      <ul className="space-y-2.5">
                        {project.frontend.map((task, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                            <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${currentTheme.accentText}`} />
                            <span className="leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Backend Section */}
                    <div className="pb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Server size={16} className={currentTheme.accentText} />
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Backend Work</h4>
                      </div>
                      <ul className="space-y-2.5">
                        {project.backend.map((task, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                            <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${currentTheme.accentText}`} />
                            <span className="leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}