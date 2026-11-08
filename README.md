# Systemiq website
React (Vite) + Tailwind CSS + React Router (hash routing) + Lucide icons. Frontend only.

## Run
    npm install
    npm run dev        # http://localhost:5173

## Build / deploy
    npm run build      # outputs /dist, deploy to any static host
    npm run preview

Hash routing (`/#/services`) means no server rewrite rules are needed.

## Edit content
- `src/data/content.js`: contact details, services, portfolio projects, approach steps
- `src/data/images.js`: photo slots (leave null for built-in placeholders)
- Portfolio projects are FICTIONAL placeholders. Replace them with real work.

## Contact form
Client-side validation only. On success it offers a `mailto:` link; nothing is sent to a server.
