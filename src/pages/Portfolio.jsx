import { useState } from 'react'
import Visual from '../components/Visuals.jsx'
import CTA from '../components/CTA.jsx'
import { projects } from '../data/content.js'

export default function Portfolio() {
  const cats = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? projects : projects.filter(p => p.category === cat)
  return (
    <>
      <section className="bg-ink px-5 pb-20 pt-40 text-white md:px-10 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <h1 className="hero-rise max-w-4xl text-5xl font-medium leading-[1] tracking-tightest md:text-7xl">Selected work.</h1>
          <p className="hero-rise mt-8 max-w-xl text-lg text-white/60" style={{ animationDelay: '.15s' }}>A preview of the kinds of systems we build. These are fictional placeholder projects used to show layout. They are not client work.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {cats.map(c => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded-full border px-4 py-2 text-sm transition-colors ${cat === c ? 'border-ink bg-ink text-white' : 'border-line hover:border-ink'}`}>{c}</button>)}
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {list.map((p, i) => (
            <article key={p.id} className={`group ${i % 2 ? 'md:mt-16' : ''}`}>
              <div className="rounded-2xl bg-paper p-6 transition-colors duration-300 group-hover:bg-ink md:p-10"><Visual type={p.visual} /></div>
              <div className="mt-5 flex items-baseline justify-between gap-4"><h2 className="text-2xl font-medium tracking-tight">{p.title}</h2><span className="shrink-0 text-sm text-mute">{p.category}</span></div>
              <p className="mt-2 max-w-md text-mute">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map(t => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{t}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
      <CTA title="Your project could be next." />
    </>
  )
}
