"use client"

import Image from "next/image"

interface TechStackIconProps {
  src: string
  alt: string
  name: string
  width?: number
  height?: number
}

export default function TechStackIcon({ src, alt, name, width = 64, height = 64 }: TechStackIconProps) {
  return (
    <div className="flex flex-col items-center group relative">
      <div className="w-16 h-16 mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer relative">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="hover:opacity-80 transition-opacity duration-200"
        />

        {/* CSS Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
          {name}
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
      <span className="text-muted text-sm">{name}</span>
    </div>
  )
}
