# SoftwarePar - Partner Tecnológico en Paraguay

## Overview
Full-stack web application for SoftwarePar, a Paraguayan software company. Features include project management, electronic invoicing (SIFEN), partner management, portfolio, ticketing, and more.

## Architecture
- **Frontend**: React 18 + Vite + TypeScript + Tailwind CSS + shadcn/ui components
- **Backend**: Express.js (TypeScript) serving both API and frontend on port 5000
- **Database**: PostgreSQL (Replit native) with Drizzle ORM
- **Auth**: JWT-based authentication with bcrypt password hashing
- **Routing**: Wouter (client-side), Express (server-side API)

## Project Structure
```
client/          - React frontend (Vite)
  src/
    components/  - Symlink to root /components (shadcn/ui based)
    pages/       - Page components
    hooks/       - Custom hooks
    lib/         - Utilities
    types/       - TypeScript types
components/      - shadcn/ui components (root, symlinked from client/src/components)
contexts/        - React contexts
server/          - Express backend
  index.ts       - Server entry point
  routes.ts      - API routes
  db.ts          - Database connection (Drizzle + PostgreSQL)
  auth.ts        - JWT authentication
  email.ts       - Email via Nodemailer/Gmail
  facturasend.ts - Electronic invoicing integration
  sifen.ts       - SIFEN (Paraguay tax system)
shared/
  schema.ts      - Drizzle database schema
uploads/         - User-uploaded files (payment proofs, etc.)
```

## Key Commands
- `npm run dev` - Start development server (port 5000)
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run db:push` - Push schema changes to database

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (Replit native, auto-configured)
- `GMAIL_USER` / `GMAIL_PASS` - Email sending credentials
- `FACTURASEND_API_KEY` - Electronic invoicing API
- `RECAPTCHA_SECRET_KEY` / `VITE_RECAPTCHA_SITE_KEY` - reCAPTCHA
- `JWT_SECRET` - JWT signing key (auto-generated in dev if not set)

## Important Notes
- The root `/components` directory contains all UI components and is symlinked from `client/src/components` so Vite can resolve `@/components` imports
- The app runs both the API backend and Vite HMR frontend on port 5000 (single server mode)
- Database schema is managed via Drizzle ORM (`shared/schema.ts`)
- The SQL dump `softwarepar.sql` contains the original database schema/data from the initial Neon PostgreSQL instance

## Recent Changes
- 2026-03-04: Imported to Replit environment. Provisioned Replit native PostgreSQL database, applied schema via drizzle-kit generate + psql, created symlink `client/src/components -> /components` for Vite alias resolution, configured workflow on port 5000.
