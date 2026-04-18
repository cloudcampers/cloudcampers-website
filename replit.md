# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### CloudCampers Website (`artifacts/cloudcampers`)
- **Type**: react-vite (frontend-only, no backend)
- **URL**: `/` (root preview path)
- **Purpose**: Professional Salesforce & MuleSoft consulting website for cloudcampers.net
- **Pages**:
  - `/` — Home: hero, stats, services overview, why-us, testimonials, CTA
  - `/services` — Full breakdown of Salesforce and MuleSoft services
  - `/about` — Company mission, values, team/leadership, certifications
  - `/case-studies` — 3 detailed case studies with metrics
  - `/contact` — Contact form with service interest dropdown
- **Design**: Trusted Advisor theme — warm cream (#FAF8F4) background, forest green (#2D6A4F) primary, Playfair Display serif headings, Inter body text, dark testimonial section (#1C1C1E), framer-motion animations
- **Logo**: Cloud + tent-peak SVG in forest green (#2D6A4F) with "CloudCampers" wordmark (green/charcoal)
- **Services**: Sales Cloud, Service Cloud, Marketing Cloud, Agentforce, Experience Cloud, MuleSoft, Process Automation, Analytics
- **Dependencies**: Framer Motion, react-icons (ri + si), wouter routing

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
