"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const Heading = () => {
  return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-5">
                Your ideas come to life <span className="underline">Notes</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
              <span className="underline">Notes</span> have the connected workspace here
            </h3>
            <Button>
              Enter <span className="underline">Notes</span>
              <ArrowRight />
            </Button>
        </div>
  )
}