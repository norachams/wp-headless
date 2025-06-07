// components/stats.tsx
"use client"

import { cn } from "@/lib/utils"

type Stat = {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: "238",  label: "Volunteers" },
  { value: "12",   label: "Projects" },
  { value: "10k",  label: "Barriers Removed" },
  { value: "450",  label: "Solar Lights Installed" },
]

export function Stats({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "bg-white dark:bg-slate-900 border-t border-b",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <ul className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0 text-center">
          {stats.map(({ value, label }) => (
            <li key={label} className="flex flex-col items-center">
              <span className="text-4xl font-bold tracking-tight sm:text-4xl">
                {value}
              </span>
              <span className="mt-2 text-lg font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
