"use client"

import Image from "next/image"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface TechStackIconProps {
  src: string
  alt: string
  name: string
  width?: number
  height?: number
}

export default function TechStackIcon({ src, alt, name, width = 64, height = 64 }: TechStackIconProps) {
  return (
    <div className="flex flex-col items-center">
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          <div className="w-16 h-16 mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={width}
              height={height}
              className="hover:opacity-80 transition-opacity duration-200"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium">{name}</p>
        </TooltipContent>
      </Tooltip>
      <span className="text-muted text-sm">{name}</span>
    </div>
  )
}
