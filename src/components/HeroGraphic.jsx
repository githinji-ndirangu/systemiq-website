// Interconnected-systems hero visual: flowing ribbons + live node network
export default function HeroGraphic() {
  const nodes = [[70, 90, 'CRM'], [250, 40, 'API'], [330, 170, 'AI'], [150, 230, 'ERP'], [300, 300, 'Apps']]
  const edges = [[0, 1], [1, 2], [0, 3], [3, 2], [2, 4], [3, 4], [1, 3]]
  return (
    <svg viewBox="0 0 400 340" className="h-full w-full" role="img" aria-label="Connected systems diagram">
      <defs><radialGradient id="g" cx="50%" cy="50%"><stop offset="0" stopColor="#FF5B1F" stopOpacity=".3" /><stop offset="1" stopColor="#FF5B1F" stopOpacity="0" /></radialGradient></defs>
      <circle cx="200" cy="170" r="150" fill="url(#g)" />
      {[0, 1, 2, 3, 4, 5].map(i => <path key={i} d={`M-20 ${230 + i * 10} C120 ${80 + i * 14} 260 ${330 - i * 12} 420 ${120 + i * 8}`} fill="none" stroke="#fff" strokeOpacity={0.05 + i * 0.03} />)}
      {edges.map(([a, b], i) => <line key={i} className="flow" x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#fff" strokeOpacity=".5" strokeWidth="1.2" />)}
      {nodes.map(([x, y, l], i) => (
        <g key={l} className="node-pulse" style={{ animationDelay: `${i * 0.4}s` }}>
          <circle cx={x} cy={y} r="26" fill="#0B0B0C" stroke={i === 2 ? '#FF5B1F' : '#ffffff55'} />
          <text x={x} y={y + 4} textAnchor="middle" fontSize="12" fill="#fff" fontFamily="Inter Tight, sans-serif">{l}</text>
        </g>
      ))}
    </svg>
  )
}
