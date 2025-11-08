import * as React from "react"
import type { SVGProps } from "react"

export function NelsonGPTIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g>
        {/* Medical cross background */}
        <rect x="10" y="4" width="4" height="16" fill="currentColor" rx="1"/>
        <rect x="4" y="10" width="16" height="4" fill="currentColor" rx="1"/>
        
        {/* Pediatric heart accent */}
        <path 
          d="M12 8.5 L10.5 7 Q10 6.5 10 6 Q10 5 11 5 Q11.5 5 12 5.5 Q12.5 5 13 5 Q14 5 14 6 Q14 6.5 13.5 7 Z" 
          fill="currentColor"
          opacity="0.8"
        />
      </g>
    </svg>
  )
}
