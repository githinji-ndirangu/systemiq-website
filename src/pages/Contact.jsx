import { useState } from 'react'
import { Phone, Mail, Check } from 'lucide-react'
import Button from '../components/Button.jsx'
import { contact, services } from '../data/content.js'

const empty = { name: '', email: '', company: '', service: '', message: '' }
function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (!v.service) e.service = 'Choose a service.'
  if (v.message.trim().length < 10) e.message = 'Tell us a little more (at least 10 characters).'
  return e
}
function Field({ label, error, children }) {
  return <label className="block"><span className="text-sm font-medium">{label}</span>{children}{error && <span role="alert" className="mt-1 block text-sm text-red-600">{error}</span>}</label>
}
const input = 'mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-ink'

export default function Contact() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const set = k => e => setV({ ...v, [k]: e.target.value })
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Project enquiry: ' + (v.service || 'General'))}&body=${encodeURIComponent(`Name: ${v.name}\nCompany: ${v.company}\nEmail: ${v.email}\nService: ${v.service}\n\n${v.message}`)}`
  const submit = e => { e.preventDefault(); const er = validate(v); setErrors(er); if (!Object.keys(er).length) setDone(true) }
  return (
    <>
      <section className="bg-ink px-5 pb-20 pt-40 text-white md:px-10 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <h1 className="hero-rise max-w-4xl text-5xl font-medium leading-[1] tracking-tightest md:text-7xl">Tell us what you want to build.</h1>
          <p className="hero-rise mt-8 max-w-xl text-lg text-white/60" style={{ animationDelay: '.15s' }}>Whether it is a new platform or a process that needs fixing, we are happy to talk it through.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-medium tracking-tight">Talk to us directly</h2>
          <ul className="mt-8 space-y-6">
            <li><a href={contact.phoneHref} className="group flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-paper transition-colors group-hover:bg-accent group-hover:text-white"><Phone size={18} /></span><span><span className="block text-sm text-mute">Phone</span>{contact.phone}</span></a></li>
            <li><a href={`mailto:${contact.email}`} className="group flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-paper transition-colors group-hover:bg-accent group-hover:text-white"><Mail size={18} /></span><span><span className="block text-sm text-mute">Email</span>{contact.email}</span></a></li>
          </ul>
          <p className="mt-10 max-w-xs text-mute">We usually respond within one working day.</p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {done ? (
            <div className="rounded-3xl bg-paper p-8 md:p-12" role="status">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white"><Check /></span>
              <h2 className="mt-6 text-3xl font-medium tracking-tight">Your message is ready, {v.name.split(' ')[0]}.</h2>
              <p className="mt-3 max-w-md text-mute">This website does not send messages to a server. Press the button to open your email app with everything filled in, then hit send.</p>
              <div className="mt-8 flex flex-wrap gap-4"><Button href={mailto}>Open in email app</Button><button onClick={() => { setDone(false); setV(empty) }} className="px-4 text-sm underline">Start over</button></div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Name" error={errors.name}><input className={input} value={v.name} onChange={set('name')} autoComplete="name" /></Field>
                <Field label="Email" error={errors.email}><input type="email" className={input} value={v.email} onChange={set('email')} autoComplete="email" /></Field>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Company (optional)"><input className={input} value={v.company} onChange={set('company')} autoComplete="organization" /></Field>
                <Field label="Service interested in" error={errors.service}>
                  <select className={input} value={v.service} onChange={set('service')}><option value="">Select a service</option>{services.map(s => <option key={s.id}>{s.title}</option>)}<option>Not sure yet</option></select>
                </Field>
              </div>
              <Field label="Message" error={errors.message}><textarea rows="6" className={input} value={v.message} onChange={set('message')} placeholder="What are you trying to achieve?" /></Field>
              <button type="submit" className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent">Prepare my message</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
