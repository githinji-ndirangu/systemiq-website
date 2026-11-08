import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
const links = [['/', 'Home'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']]
export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <Link to="/" aria-label="Systemiq home"><Logo light /></Link>
        <nav className="hidden items-center gap-9 text-sm text-white/60 md:flex" aria-label="Main">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white' : ''}`}>{label}</NavLink>
          ))}
        </nav>
        <div className="hidden md:block"><Button to="/contact" variant="light">Start a project</Button></div>
        <button className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
      {open && (
        <div className="mx-5 rounded-3xl bg-white p-6 text-ink shadow-xl md:hidden">
          {links.map(([to, label]) => <NavLink key={to} to={to} end className={({ isActive }) => `block border-b border-line py-4 text-2xl font-medium tracking-tight ${isActive ? 'text-accent' : ''}`}>{label}</NavLink>)}
          <div className="pt-6"><Button to="/contact">Start a project</Button></div>
        </div>
      )}
    </header>
  )
}
