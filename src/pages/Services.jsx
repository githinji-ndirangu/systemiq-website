import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Check } from 'lucide-react'
import Button from '../components/Button.jsx'
import Visual from '../components/Visuals.jsx'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import { services } from '../data/content.js'

export default function Services() {
  const { hash } = useLocation()
  useEffect(() => { if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 80) }, [hash])
  return (
    <>
      <section className="bg-ink px-5 pb-20 pt-40 text-white md:px-10 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <h1 className="hero-rise max-w-4xl text-5xl font-medium leading-[1] tracking-tightest md:text-7xl">Five services that work as one system.</h1>
          <p className="hero-rise mt-8 max-w-xl text-lg text-white/60" style={{ animationDelay: '.15s' }}>Build the software, organise the business, automate the repetition and connect it all. Use one service or combine them.</p>
          <nav className="mt-12 flex flex-wrap gap-3" aria-label="Services">{services.map(s => <a key={s.id} href={`#/services#${s.id}`} onClick={e => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }) }} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 transition-colors hover:border-accent hover:text-white">{s.title.split(' (')[0].split(' &')[0]}</a>)}</nav>
        </div>
      </section>

      {services.map((s, i) => (
        <section id={s.id} key={s.id} className={`scroll-mt-4 px-5 py-20 md:px-10 md:py-28 ${i % 2 ? 'bg-paper' : 'bg-white'}`}>
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
            <Reveal className={`md:col-span-6 ${i % 2 ? 'md:order-2 md:col-start-7' : ''}`}>
              <span className="text-sm text-mute">Service {i + 1} of {services.length}</span>
              <h2 className="mt-3 text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl">{s.title}</h2>
              <p className="mt-6 max-w-lg text-lg text-mute">{s.description}</p>
              <div className="mt-8 hidden md:block" />
              <div className="mt-10 rounded-3xl bg-ink p-6 md:p-10"><Visual type={s.visual} dark /></div>
            </Reveal>
            <Reveal delay={100} className={`md:col-span-5 ${i % 2 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-8'}`}>
              <h3 className="text-sm font-medium text-mute">What it involves</h3>
              <ul className="mt-3 divide-y divide-ink/10 border-y border-ink/10">{s.involves.map(x => <li key={x} className="py-3">{x}</li>)}</ul>
              <h3 className="mt-10 text-sm font-medium text-mute">Problems it solves</h3>
              <ul className="mt-3 space-y-2">{s.solves.map(x => <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{x}</li>)}</ul>
              <h3 className="mt-10 text-sm font-medium text-mute">Key capabilities</h3>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">{s.capabilities.map(x => <li key={x} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent" />{x}</li>)}</ul>
              <div className="mt-10"><Button to="/contact">Discuss this service</Button></div>
            </Reveal>
          </div>
        </section>
      ))}
      <CTA title="Not sure which service you need?" text="Describe the problem. We\u2019ll recommend the simplest route to solving it." />
    </>
  )
}
