"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { categories, projects, type Category } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive = cat === active;
          const count =
            cat === "All"
              ? projects.length
              : projects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                isActive
                  ? "bg-gradient-to-r from-accent-3 to-accent-2 text-[#04060c] shadow-lg shadow-accent/20"
                  : "glass text-muted hover:text-foreground"
              )}
            >
              {cat}
              <span
                className={cn(
                  "ml-1.5 text-xs",
                  isActive ? "text-[#04060c]/70" : "text-muted/60"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
