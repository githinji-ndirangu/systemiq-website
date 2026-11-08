export const contact = { phone: '0780671695', phoneHref: 'tel:+254780671695', email: 'hello@systemiq.co.ke', site: 'systemiq.co.ke' }

export const services = [
  { id: 'custom-software', visual: 'dashboard', title: 'Custom Software & Web Applications',
    short: 'Web platforms and internal tools designed around how your business actually runs.',
    description: 'Off-the-shelf tools force you to adapt your process to them. We build software that adapts to you: fast, secure web applications your team and customers will want to use.',
    involves: ['Discovery workshops and requirement mapping', 'UX design and clickable prototypes', 'Full-stack build, testing and launch', 'Ongoing support and iteration'],
    solves: ['Spreadsheets and paper that no longer scale', 'Tools that don\u2019t fit your workflow', 'Slow, outdated customer-facing systems'],
    capabilities: ['Customer portals', 'Admin dashboards', 'Booking & ordering platforms', 'Progressive web apps'] },
  { id: 'business-systems', visual: 'crm', title: 'Business Management Systems (CRM/ERP)',
    short: 'One source of truth for customers, stock, finance and operations.',
    description: 'We consolidate scattered records into a single system so every department sees the same numbers, and managers can decide with confidence instead of guesswork.',
    involves: ['Process audit across departments', 'Data migration from existing files and tools', 'Role-based access and approvals', 'Staff training and handover'],
    solves: ['Duplicated data across teams', 'No visibility on sales, stock or cash flow', 'Manual reporting that takes days'],
    capabilities: ['Customer & lead pipelines', 'Inventory and procurement', 'Invoicing and payments tracking', 'Management reporting'] },
  { id: 'ai-automation', visual: 'agent', title: 'AI Agents & Business Process Automation',
    short: 'Assistants that handle repetitive work so your people focus on decisions.',
    description: 'We apply AI where it earns its place: answering routine enquiries, sorting documents, drafting responses and moving work through approval steps, with humans kept in control.',
    involves: ['Identifying high-value tasks to automate', 'Building and testing AI agents on your data', 'Human review and fallback rules', 'Monitoring and continuous tuning'],
    solves: ['Teams buried in repetitive admin', 'Slow response to customer enquiries', 'Inconsistent manual processing'],
    capabilities: ['Customer support assistants', 'Document processing', 'Smart routing and approvals', 'Internal knowledge assistants'] },
  { id: 'integrations', visual: 'flow', title: 'API Integrations & Workflow Automation',
    short: 'Connect the tools you already use so data moves without re-typing.',
    description: 'Payments, accounting, messaging, e-commerce, government portals: we link your systems so information flows automatically and errors from manual entry disappear.',
    involves: ['Mapping your tools and data flows', 'Secure API connections and webhooks', 'Error handling and alerts', 'Documentation for your team'],
    solves: ['Copy-pasting between systems', 'Delays and mistakes in handoffs', 'Disconnected software stacks'],
    capabilities: ['Payment and accounting sync', 'Messaging and notification flows', 'Third-party API connectors', 'Scheduled data pipelines'] },
  { id: 'enterprise', visual: 'enterprise', title: 'Enterprise Software Solutions',
    short: 'Robust, secure systems for large teams, multiple branches and complex rules.',
    description: 'For organisations where reliability, security and governance matter most. We architect software that handles scale, audit requirements and long-term maintenance.',
    involves: ['Architecture and security review', 'Multi-branch and multi-role design', 'Phased rollout with minimal disruption', 'Service-level support agreements'],
    solves: ['Legacy systems that are hard to change', 'Compliance and audit gaps', 'Performance problems at scale'],
    capabilities: ['Legacy modernisation', 'Role and permission engines', 'Audit trails and reporting', 'Cloud deployment and monitoring'] },
]

// PLACEHOLDER projects for layout only — replace with real work. Not client work.
export const projects = [
  { id: 1, title: 'Northwind Ops Suite', category: 'Business Systems', visual: 'dashboard', tags: ['React', 'Node.js', 'PostgreSQL'], description: 'Sales, stock and finance in one management platform for a growing distributor.' },
  { id: 2, title: 'Haul Route Manager', category: 'Logistics', visual: 'map', tags: ['React', 'Maps API', 'Realtime'], description: 'Fleet dispatch, delivery tracking and driver check-ins on a single live board.' },
  { id: 3, title: 'Talent Pipeline', category: 'Recruitment', visual: 'kanban', tags: ['React', 'REST API', 'Email'], description: 'Candidate tracking, interview scheduling and offer workflows for recruiters.' },
  { id: 4, title: 'Atlas Enterprise Portal', category: 'Enterprise', visual: 'enterprise', tags: ['TypeScript', 'SSO', 'Cloud'], description: 'Multi-branch web application with roles, approvals and audit trails.' },
  { id: 5, title: 'Sage Support Agent', category: 'AI Automation', visual: 'agent', tags: ['LLM', 'Automation', 'WhatsApp'], description: 'AI assistant that answers routine enquiries and hands complex ones to staff.' },
  { id: 6, title: 'Client Compass CRM', category: 'Customer Management', visual: 'crm', tags: ['React', 'Node.js', 'Analytics'], description: 'Lead pipeline and customer history for service teams that live on follow-ups.' },
  { id: 7, title: 'Ledger Bridge', category: 'AI Automation', visual: 'flow', tags: ['APIs', 'Webhooks', 'M-Pesa'], description: 'Automated sync between payments, invoicing and accounting records.' },
  { id: 8, title: 'Shelf Inventory Hub', category: 'Business Systems', visual: 'table', tags: ['React', 'Barcode', 'Reports'], description: 'Multi-location stock control with low-stock alerts and purchase orders.' },
]

export const approach = [
  { t: 'Understand', d: 'We learn how your business runs, where time is lost and what success looks like.' },
  { t: 'Design', d: 'Clear flows and prototypes you can click through before any code is written.' },
  { t: 'Build', d: 'Short build cycles with regular demos, so there are no surprises at the end.' },
  { t: 'Launch & support', d: 'Training, deployment and ongoing improvements as your business grows.' },
]
