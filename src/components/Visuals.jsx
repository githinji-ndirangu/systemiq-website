// Pure SVG/CSS product mockups. Types: dashboard crm agent flow enterprise map kanban table
const A = '#FF5B1F'
function Frame({ children, dark }) {
  return (
    <div className={`h-full w-full overflow-hidden rounded-xl border ${dark ? 'border-white/10 bg-neutral-900' : 'border-line bg-white'}`}>
      <div className={`flex items-center gap-1.5 border-b px-3 py-2 ${dark ? 'border-white/10' : 'border-line'}`}>{[0, 1, 2].map(i => <i key={i} className={`h-2 w-2 rounded-full ${dark ? 'bg-white/20' : 'bg-neutral-200'}`} />)}</div>
      <div className="p-3">{children}</div>
    </div>
  )
}
export default function Visual({ type, dark = false }) {
  const bar = dark ? 'bg-white/15' : 'bg-neutral-200'
  const soft = dark ? 'bg-white/10' : 'bg-neutral-100'
  const fg = dark ? '#fff' : '#0B0B0C'
  const v = {
    dashboard: (<div className="space-y-3"><div className="grid grid-cols-3 gap-2">{[0, 1, 2].map(i => <div key={i} className={`rounded-md p-2 ${soft}`}><div className={`h-1.5 w-8 rounded ${bar}`} /><div className="mt-2 h-3 w-10 rounded" style={{ background: i === 0 ? A : fg }} /></div>)}</div>
      <div className="flex h-24 items-end gap-1.5">{[40, 65, 50, 80, 60, 95, 75, 100, 85].map((h, i) => <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 7 ? A : dark ? '#ffffff30' : '#d4d4d0' }} />)}</div></div>),
    crm: (<div className="space-y-2">{[0, 1, 2, 3].map(i => <div key={i} className={`flex items-center gap-2 rounded-md p-2 ${soft}`}><i className="h-5 w-5 rounded-full" style={{ background: i === 1 ? A : dark ? '#ffffff40' : '#c9c9c4' }} /><div className="flex-1 space-y-1"><div className={`h-1.5 w-2/3 rounded ${bar}`} /><div className={`h-1.5 w-1/3 rounded ${bar}`} /></div><div className="h-4 w-10 rounded-full" style={{ background: i === 1 ? A : dark ? '#ffffff25' : '#e4e4df' }} /></div>)}</div>),
    agent: (<div className="space-y-2"><div className={`ml-auto w-3/4 rounded-lg p-2 ${soft}`}><div className={`h-1.5 w-full rounded ${bar}`} /><div className={`mt-1 h-1.5 w-2/3 rounded ${bar}`} /></div><div className="w-4/5 rounded-lg p-2" style={{ background: A }}><div className="h-1.5 w-full rounded bg-white/70" /><div className="mt-1 h-1.5 w-full rounded bg-white/70" /><div className="mt-1 h-1.5 w-1/2 rounded bg-white/70" /></div><div className={`ml-auto w-1/2 rounded-lg p-2 ${soft}`}><div className={`h-1.5 w-full rounded ${bar}`} /></div><div className={`mt-3 rounded-full border px-3 py-2 ${dark ? 'border-white/15' : 'border-line'}`}><div className={`h-1.5 w-1/2 rounded ${bar}`} /></div></div>),
    flow: (<svg viewBox="0 0 220 110" className="w-full"><g stroke={dark ? '#ffffff66' : '#a3a3a3'} fill="none" strokeWidth="1.5"><path className="flow" d="M40 30 C90 30 80 55 110 55" /><path className="flow" d="M40 85 C90 85 80 55 110 55" /><path className="flow" d="M110 55 C150 55 150 30 180 30" /><path className="flow" d="M110 55 C150 55 150 85 180 85" /></g>
      {[[40, 30], [40, 85], [180, 30], [180, 85]].map(([x, y], i) => <rect key={i} x={x - 16} y={y - 11} width="32" height="22" rx="6" fill={dark ? '#262628' : '#f1f1ee'} stroke={dark ? '#ffffff30' : '#d4d4d0'} />)}<circle cx="110" cy="55" r="16" fill={A} /></svg>),
    enterprise: (<div className="grid grid-cols-[1fr_2fr] gap-2"><div className={`space-y-1.5 rounded-md p-2 ${soft}`}>{[0, 1, 2, 3, 4].map(i => <div key={i} className="h-2 rounded" style={{ background: i === 1 ? A : dark ? '#ffffff25' : '#d4d4d0' }} />)}</div><div className="space-y-2"><div className="grid grid-cols-2 gap-2"><div className={`h-10 rounded-md ${soft}`} /><div className={`h-10 rounded-md ${soft}`} /></div><div className={`h-16 rounded-md ${soft}`}><svg viewBox="0 0 100 40" className="h-full w-full"><path d="M0 32 L20 24 L40 28 L60 12 L80 16 L100 4" fill="none" stroke={A} strokeWidth="2" /></svg></div></div></div>),
    map: (<div className={`relative h-32 rounded-md ${soft}`}><svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full"><path className="flow" d="M20 100 C60 90 70 40 110 50 S170 20 185 25" fill="none" stroke={A} strokeWidth="2" /><circle cx="20" cy="100" r="5" fill={fg} /><circle cx="185" cy="25" r="6" fill={A} className="node-pulse" /><circle cx="110" cy="50" r="4" fill={fg} opacity=".5" /></svg></div>),
    kanban: (<div className="grid grid-cols-3 gap-2">{[3, 2, 1].map((n, c) => <div key={c} className={`space-y-1.5 rounded-md p-1.5 ${soft}`}>{Array.from({ length: n }).map((_, i) => <div key={i} className={`h-7 rounded ${dark ? 'bg-white/15' : 'bg-white shadow-sm'}`} style={c === 2 ? { background: A } : {}} />)}</div>)}</div>),
    table: (<div className="space-y-1.5">{[0, 1, 2, 3, 4].map(i => <div key={i} className={`grid grid-cols-4 gap-2 rounded p-1.5 ${soft}`}>{[0, 1, 2, 3].map(j => <div key={j} className="h-1.5 rounded" style={{ background: i === 2 && j === 3 ? A : dark ? '#ffffff30' : '#c9c9c4' }} />)}</div>)}</div>),
  }
  return <Frame dark={dark}>{v[type] || v.dashboard}</Frame>
}
