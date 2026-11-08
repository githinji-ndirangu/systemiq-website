import { Link } from 'react-router-dom'
import { Phone, Mail, Globe } from 'lucide-react'
import Logo from './Logo.jsx'
import { contact, services } from '../data/content.js'
export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-6 max-w-sm text-white/60">Software, intelligent systems and automation for businesses that want to operate better.</p>
          <ul className="mt-8 space-y-3 text-sm text-white/80">
            <li><a className="inline-flex items-center gap-3 hover:text-accent" href={contact.phoneHref}><Phone size={16} />{contact.phone}</a></li>
            <li><a className="inline-flex items-center gap-3 hover:text-accent" href={`mailto:${contact.email}`}><Mail size={16} />{contact.email}</a></li>
            <li className="inline-flex items-center gap-3"><Globe size={16} />{contact.site}</li>
          </ul>
        </div>
        <div className="md:col-span-3 md:col-start-7">
          <h3 className="text-sm text-white/40">Company</h3>
          <ul className="mt-4 space-y-3">{[['/', 'Home'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([t, l]) => <li key={t}><Link className="hover:text-accent" to={t}>{l}</Link></li>)}</ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-sm text-white/40">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">{services.map(s => <li key={s.id}><Link className="hover:text-accent" to={`/services#${s.id}`}>{s.title.split(' (')[0]}</Link></li>)}</ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 py-6 text-xs text-white/40 md:flex-row md:justify-between md:px-10">
        <span>© {new Date().getFullYear()} Systemiq. All rights reserved.</span><span>Kenya</span>
      </div>
    </footer>
  )
}
