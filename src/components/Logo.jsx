export default function Logo({ light }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xl font-semibold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill={light ? '#fff' : '#0B0B0C'} /><circle cx="10" cy="11" r="3" fill="#FF5B1F" /><circle cx="22" cy="21" r="3" fill={light ? '#0B0B0C' : '#fff'} /><path d="M10 11 C18 11 14 21 22 21" stroke={light ? '#0B0B0C' : '#fff'} strokeWidth="2" fill="none" /></svg>
      Systemiq
    </span>
  )
}
