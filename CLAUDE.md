# TrailSense Website

Marketing site for TrailSense — property security via passive mobile device detection.

## Stack

- Next.js 14 (App Router) + TypeScript (strict)
- Tailwind CSS + shadcn/ui (Radix primitives)
- React Hook Form + Zod
- Forms via Formspree
- Deploy target: Vercel/Netlify

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
