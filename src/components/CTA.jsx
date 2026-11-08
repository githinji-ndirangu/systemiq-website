import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
export default function CTA({ title = 'Have a system in mind? Let\u2019s build it.', text = 'Tell us what slows your business down. We\u2019ll reply with practical next steps.' }) {
  return (
    <section className="bg-white px-5 py-20 md:px-10">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-accent p-8 text-white md:p-16">
        <svg className="pointer-events-none absolute -right-20 -top-20 h-[140%] opacity-25" viewBox="0 0 400 400" fill="none" aria-hidden="true">{[60, 100, 140, 180].map(r => <circle key={r} cx="300" cy="100" r={r} stroke="#fff" strokeWidth="1.5" />)}</svg>
        <h2 className="relative max-w-3xl text-4xl font-medium leading-[1.05] tracking-tightest md:text-6xl">{title}</h2>
        <p className="relative mt-6 max-w-xl text-lg text-white/85">{text}</p>
        <div className="relative mt-10 flex flex-wrap gap-4"><Button to="/contact" variant="dark">Start a project</Button><Button to="/services" variant="ghost" icon={false}>Explore services</Button></div>
      </Reveal>
    </section>
  )
}
