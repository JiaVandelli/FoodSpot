// src/assets/branding/OrboLogo.tsx
type OrboLogoProps = {
  size?: number
  animated?: boolean
  className?: string
}

const OrboLogo = ({ size = 300, animated = true, className = "" }: OrboLogoProps) => {
  const fontSize = size * 0.11
  
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 300 300" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="orboSunset" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#F7931E" />
          <stop offset="100%" stopColor="#C44569" />
        </linearGradient>
        <filter id="orboShadow">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.4"/>
        </filter>
      </defs>
      
      <g filter="url(#orboShadow)">
        <polygon 
          points="150,80 220,120 220,200 150,240 80,200 80,120" 
          fill="url(#orboSunset)" 
          stroke="#fff" 
          strokeWidth="2" 
          opacity="0.95"
        />
        <text 
          x="150" 
          y="140" 
          textAnchor="middle" 
          fontFamily="Arial, sans-serif" 
          fontSize={fontSize} 
          fontWeight="800" 
          fill="#fff"
        >
          OR
        </text>
        <text 
          x="150" 
          y="190" 
          textAnchor="middle" 
          fontFamily="Arial, sans-serif" 
          fontSize={fontSize} 
          fontWeight="800" 
          fill="#fff"
        >
          BO
        </text>
      </g>
      
      <circle cx="60" cy="80" r="22" fill="#FF6347" opacity="0.9" filter="url(#orboShadow)">
        {animated && <animate attributeName="cy" values="80;90;80" dur="3s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="240" cy="120" r="20" fill="#FFA500" opacity="0.9" filter="url(#orboShadow)">
        {animated && <animate attributeName="cy" values="120;110;120" dur="4s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="150" cy="30" r="18" fill="#FFB6C1" opacity="0.9" filter="url(#orboShadow)">
        {animated && <animate attributeName="cy" values="30;40;30" dur="3.5s" repeatCount="indefinite"/>}
      </circle>
    </svg>
  )
}

export default OrboLogo