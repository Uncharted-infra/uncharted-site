# AGENTS.md — Uncharted Context + Cursor Plan Mode

Uncharted is an **AI travel agent**, not a general chatbot and not a generic SaaS dashboard.

Users talk to Uncharted to **explore destinations, plan trips, and book real travel**.

The website is a consumer landing experience with an embedded chat interface — similar in interaction model to ChatGPT, Lovable, or Manus — but focused entirely on real-world travel.

The agent should feel like:

**a travel agent in your pocket**

Not a productivity tool.
Not a developer platform.
Not a B2B analytics dashboard.

---

## Critical Design Rule (VERY IMPORTANT)

You are **NOT allowed to redesign the UI system.**

The current UI components, typography, spacing scale, color tokens, and design language are the source of truth.

You may:
• Reuse components
• Recompose components
• Extend components carefully
• Add new components that MATCH the system

You may NOT:
• Replace the design system
• Introduce a second UI library
• Change typography scale
• Change color primitives
• Create one-off styled components that break consistency
• Convert the site into a dashboard aesthetic

This repo should visually feel like the same product, just with more pages and functionality.

If you believe a design system change is required, you must explain why and ask first.

---

## Typography

The site uses two fonts:

**Fenix** — Default font for the site.
Use for all landing content, headings, par agraphs, and UI text. Applied via `font-landing`.

**Departure Mono** — Only for the navbar (logo, nav items, buttons).
Applied via `font-navbar-title`.

Do not introduce additional fonts.

---

## Website Goals

This is NOT documentation and NOT an admin panel.

This is a **conversion-focused consumer landing site** whose job is to:

1. Explain what Uncharted does in seconds
2. Let users try the agent immediately
3. Build trust
4. Encourage account creation

The homepage must communicate:
• This is an AI travel agent
• It can actually handle travel logistics
• It works before, during, and after a trip

Avoid enterprise language like:
“workflow optimization”
“productivity platform”
“AI workspace”

Use consumer language:
“trip”
“weekend”
“book”
“plans”
“where to go”

---

## Chat Interface Principles

The chat is the **primary feature**, not a support widget.

It must feel like:
• the product itself
• interactive
• immediate

The landing page should guide users to naturally type messages like:

“weekend trips from chicago”
“plan a 5 day italy trip”
“find hotels in kyoto”

Do NOT treat chat as a contact form.

**Primary conversion = user sending their first message.**

---

## Maps (Internal Concept)

Uncharted internally measures agent work using **Maps**.

A Map represents when the agent actively performs travel work such as:
• searching real travel options
• building itineraries
• organizing plans
• preparing bookings

Users do not need implementation details in the UI, but the site should communicate:

Uncharted is free to explore ideas, and becomes more powerful when actively helping.

---

# Landing Page Structure (Non-Negotiable)

The homepage is a narrative journey, not stacked marketing sections.

The page scrolls as a single story:

**Hero → Chat Prompting → Explore → Plan → Book → How It Works → Pricing → Demo CTA → Closing Message**

No abrupt visual resets.
No hard background swaps.
No template-style blocks.

The user should feel like they are moving through the same journey they would take with a real travel agent.

---

## Section Intent

### Hero

Immediately communicate you can talk to an AI travel agent.

Must:
• show chat input immediately
• include example prompts
• encourage typing

The chat box is the product.

---

### Explore

Answer: **“Can this help me figure out where to go?”**

Focus:
• destination discovery
• recommendations
• spontaneous trips

Do NOT talk about booking here.

This is the curiosity hook.

---

### Plan

Answer: **“Can this actually organize a real trip?”**

Communicate:
• itineraries
• schedules
• logistics coordination

This is the relief moment — cool AI → useful assistant.

---

### Book

Answer: **“Will this actually handle the annoying parts?”**

Communicate:
• reservations
• confirmations
• tickets
• logistics handled for the user

This builds trust.

This is where the user understands:
**this is a real travel agent, not a recommendation engine.**

---

## Progressive Trust Rule

Each section must increase trust:

Explore → curiosity
Plan → confidence
Book → reliance

If a section repeats the previous message, it is wrong.

---

## How the Agent Works

This is not a feature list.

It answers the hidden fear:
“what actually happens after I send a message?”

Explain the relationship between user and agent.
Keep it human.

Never mention:
• APIs
• providers
• integrations
• LLMs
• technical architecture

---

## Animation & Motion Rules

Motion must feel calm and intentional.

Allowed:
• soft fades
• parallax movement
• message appearing
• progressive reveal
• micro-interactions

Not allowed:
• bouncing animations
• flashy marketing effects
• looping hero videos
• decorative loaders

Think Apple product page, not startup template.

---

## Visual Continuity

Avoid:
• hard dividers
• boxed sections
• card grids everywhere
• dashboard layouts

Prefer:
• overlapping transitions
• gradients
• scroll storytelling

The landing page should feel like one continuous canvas.

---

## Demo CTA

The demo is not just sales.

It serves:

1. curious users
2. power travelers
3. companies

It should feel like:
**talk to a human travel concierge**

Not “contact sales.”

---

## Closing Section

End emotionally, not transactionally.

The user should feel:
“I want this when I travel.”

Uncharted is not a planner.

It is a **travel companion that stays with you before, during, and after a trip.**

---

## Implementation Constraints

When adding sections:

• reuse layout containers
• reuse spacing tokens
• reuse buttons
• reuse typography components

Create new components only if composition is impossible.

Do NOT introduce:
• new grid systems
• new spacing scale
• new color variables
• new animation libraries

---

## Absolute Prohibition

Do NOT turn the homepage into:

• feature comparison page
• SaaS dashboard
• documentation site
• productivity tool landing page

If it resembles Notion, Linear, or Stripe Dashboard UI, it is wrong.

Closest mental model:
**a modern digital travel agency powered by conversation.**

---

# Cursor Plan Mode

Review this plan thoroughly before making code changes. For every issue:

• explain tradeoffs
• give an opinionated recommendation
• ask for input before proceeding

### Engineering Preferences

• DRY is important
• well-tested code is non-negotiable
• engineered enough (no hacks, no over-abstraction)
• handle edge cases
• explicit > clever

---

## Review Sections

1. Architecture review
2. Code quality review
3. Test review
4. Performance review

After each section, pause and ask for feedback.

---

## For Each Issue Found

Provide:
• concrete description with file references
• 2–3 options (including do nothing)
• effort, risk, impact, maintenance burden
• recommendation mapped to preferences
• explicit confirmation request

Number issues and letter options.
Recommended option must always be first.

---

## Before Starting

Ask which mode:

**1 — BIG CHANGE:** full interactive review (max 4 issues per section)
**2 — SMALL CHANGE:** one question per review section

Do not assume priorities or timelines.

---

## Alignment with repo execution docs

Marketing language should stay consistent with **`../docs/`**: **[`../docs/icp-and-product-edges.md`](../docs/icp-and-product-edges.md)**, **[`../docs/competitive-positioning.md`](../docs/competitive-positioning.md)**. Shared vocabulary (phases, edges, north-star checkout): **[`../docs/doc-map-and-conventions.md`](../docs/doc-map-and-conventions.md)**.
