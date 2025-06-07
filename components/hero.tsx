// components/hero.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center">
      {/* Background photo */}
      <Image
        src="/hero_homs.jpg"          // 2400×1600 px or so
        alt="Volunteers rebuilding the streets of Homs"
        fill                                  // makes the image cover the section
        priority
        className="-z-10 object-cover object-center"
      />

      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Copy block */}
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-1 text-white">
        <h1 className="font-bold leading-tight tracking-tight text-4xl sm:text-6xl">
        Together, We Rebuild Homs
        </h1>

        <p className="mt-6 max-w-prose text-lg sm:text-xl">
          From clearing rubble to planting new trees,&nbsp;
          <span className="font-semibold">Homs Baladna</span> is restoring our
          city’s streets, schools, and spirit. Join us.
        </p>

        <Button
          asChild
          size="lg"
          className="mt-10 "
        >
          <Link href="https://github.com/9d8dev/next-wp">Learn more</Link>
        </Button>

        
      </div>
    </section>
  )
}
