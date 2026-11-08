import { useState } from 'react'
// Shows a photo if a URL is provided and loads; otherwise a tidy placeholder.
export default function Person({ src, label = 'Photo', className = '', ratio = 'aspect-[4/5]' }) {
  const [bad, setBad] = useState(false)
  if (src && !bad) return <img src={src} alt={label} loading="lazy" onError={() => setBad(true)} className={`${ratio} w-full object-cover ${className}`} />
  return (
    <div className={`${ratio} relative w-full overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-950 ${className}`} role="img" aria-label={`${label} placeholder`}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="50" cy="48" r="17" fill="#FF5B1F" opacity=".9" /><path d="M14 125 C14 85 86 85 86 125Z" fill="#2a2a2c" />
        {[30, 45, 60].map(r => <circle key={r} cx="50" cy="48" r={r} fill="none" stroke="#fff" strokeOpacity=".08" />)}
      </svg>
      <span className="absolute bottom-3 left-3 text-xs text-white/50">{label}: add in data/images.js</span>
    </div>
  )
}
