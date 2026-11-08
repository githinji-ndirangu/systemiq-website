import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
const styles = {
  dark: 'bg-ink text-white hover:bg-accent',
  light: 'bg-white text-ink hover:bg-accent hover:text-white',
  accent: 'bg-accent text-white hover:bg-white hover:text-ink',
  ghost: 'text-current border border-current/30 hover:border-current',
}
export default function Button({ to, href, children, variant = 'dark', icon = true, className = '', ...p }) {
  const cls = `group inline-flex items-center gap-3 rounded-full py-2 text-sm font-medium transition-colors duration-300 ${icon ? 'pl-6 pr-2' : 'px-6 py-3'} ${styles[variant]} ${className}`
  const inner = <>{children}{icon && <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight size={16} /></span>}</>
  if (to) return <Link to={to} className={cls} {...p}>{inner}</Link>
  return <a href={href} className={cls} {...p}>{inner}</a>
}
