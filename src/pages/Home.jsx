import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from '../components/Button.jsx'
import HeroGraphic from '../components/HeroGraphic.jsx'
import Person from '../components/Person.jsx'
import Visual from '../components/Visuals.jsx'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import { services, projects, approach } from '../data/content.js'
import { images } from '../data/images.js'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-60" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => <path key={i} d={`M-100 ${620 + i * 8} C300 ${140 + i * 16} 700 ${900 - i * 18} 1300 ${260 + i * 10}`} fill="none" stroke="#fff" strokeOpacity={0.03 + i * 0.012} />)}
      </svg>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-36 md:grid-cols-12 md:px-10 md:pt-44">
        <div className="md:col-span-7">
          <h1 className="hero-rise text-5xl font-medium leading-[0.98] tracking-tightest sm:text-6xl lg:text-[5.5rem]">Technology built around your business.</h1>
          <p className="hero-rise mt-8 max-w-xl text-lg text-white/60" style={{ animationDelay: '.15s' }}>We design and build software, intelligent systems and automation that help businesses operate better, work smarter and grow.</p>
          <div className="hero-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '.3s' }}>
            <Button to="/contact" variant="accent">Start a project</Button>
            <Button to="/portfolio" variant="ghost" icon={false}>See our work</Button>
          </div>
        </div>
        <div className="hero-rise md:col-span-5" style={{ animationDelay: '.25s' }}>
          <div className="drift aspect-[400/340] w-full"><HeroGraphic /></div>
        </div>
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-px border-t border-white/10 px-5 md:grid-cols-4 md:px-10">
        {['Custom software', 'CRM & ERP systems', 'AI agents', 'Integrations'].map(t => <div key={t} className="py-6 text-sm text-white/50">{t}</div>)}
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
      <div className="md:col-span-7">
        <Reveal><p className="text-3xl font-medium leading-[1.15] tracking-tightest md:text-5xl">We partner with owners and teams who are done working around their tools. <span className="text-mute">We build systems that fit the way you work, then stay to make them better.</span></p></Reveal>
        <Reveal delay={100}><p className="mt-8 max-w-lg text-mute">Systemiq is a software company that combines product thinking, solid engineering and practical automation. Every project begins with your process, not our preferred technology.</p></Reveal>
        <Reveal delay={150} className="mt-8"><Button to="/services">What we do</Button></Reveal>
      </div>
      <Reveal className="md:col-span-4 md:col-start-9"><Person src={images.aboutPhoto} label="Team photo" className="rounded-2xl" /></Reveal>
    </section>
  )
}

function ServiceList() {
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-paper px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        <div className="md:col-span-4"><h2 className="text-4xl font-medium tracking-tightest md:text-5xl">Five capabilities, one connected system.</h2><p className="mt-5 max-w-xs text-mute">Start with one, add others as you grow. They are designed to work together.</p></div>
        <div className="md:col-span-8">
          {services.map((s, i) => (
            <div key={s.id} className="border-b border-ink/15">
              <button className="flex w-full items-center justify-between gap-6 py-6 text-left" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className={`text-2xl font-medium tracking-tight transition-colors md:text-3xl ${open === i ? 'text-ink' : 'text-ink/40 hover:text-ink'}`}>{s.title}</span>
                <ChevronDown className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-500 ${open === i ? 'grid-rows-[1fr] pb-8' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden"><div className="grid gap-6 md:grid-cols-[1fr_220px]"><div><p className="max-w-md text-mute">{s.short}</p><Link to={`/services#${s.id}`} className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:text-accent">Learn more <ArrowRight size={16} /></Link></div><div className="hidden md:block"><Visual type={s.visual} /></div></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  const items = [
    ['Built for how you work', 'We map your process first. The software follows, not the other way round.'],
    ['Clear and honest delivery', 'Fixed scope, regular demos and plain-language updates. You always know where things stand.'],
    ['Made to last', 'Clean, documented code and secure foundations your team can rely on and extend.'],
  ]
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal><h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tightest md:text-6xl">Software should save you time, not create more work.</h2></Reveal>
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {items.map(([t, d], i) => (
          <Reveal key={t} delay={i * 90} className="border-t-2 border-ink pt-6"><h3 className="text-xl font-medium tracking-tight">{t}</h3><p className="mt-3 text-mute">{d}</p></Reveal>
        ))}
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section className="bg-ink px-5 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-xl text-4xl font-medium tracking-tightest md:text-5xl">How we work</h2>
        <ol className="mt-14 grid gap-0 md:grid-cols-4">
          {approach.map((s, i) => (
            <li key={s.t} className="relative border-l border-white/15 pb-10 pl-6 md:pb-0 md:pr-6">
              <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="text-sm text-white/40">Step {i + 1}</span>
              <h3 className="mt-2 text-2xl font-medium tracking-tight">{s.t}</h3>
              <p className="mt-3 text-white/60">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Featured() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div><h2 className="text-4xl font-medium tracking-tightest md:text-6xl">Selected work</h2><p className="mt-3 text-mute">Placeholder projects shown for layout. Real case studies coming soon.</p></div>
        <Button to="/portfolio" variant="dark">View all</Button>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-12">
        {[projects[0], projects[1], projects[4]].map((p, i) => (
          <Reveal key={p.id} delay={i * 100} className={i === 0 ? 'md:col-span-7' : i === 1 ? 'md:col-span-5 md:mt-24' : 'md:col-span-6 md:col-start-4'}>
            <Link to="/portfolio" className="group block">
              <div className="rounded-2xl bg-paper p-6 transition-colors group-hover:bg-neutral-200 md:p-10"><Visual type={p.visual} /></div>
              <div className="mt-4 flex items-baseline justify-between"><h3 className="text-xl font-medium tracking-tight">{p.title}</h3><span className="text-sm text-mute">{p.category}</span></div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return <><Hero /><Intro /><ServiceList /><Why /><Approach /><Featured /><CTA /></>
}
