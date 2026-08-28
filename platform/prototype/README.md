# IICPlatform — Operational Evidence Prototype v0.2

Controlled, frontend-only prototype for a licensed Israeli Ta'agid case manager. The product journey now begins in an Operational Command Center, where exception cases are triaged, and continues into an evidence-first worker case file with access scope and an append-only audit trail.

## Prototype boundaries

- Synthetic data only.
- AI is disabled.
- No live identity, government, client, payment, email, or document-storage integrations.
- No real personal-data processing.
- No visa, permit, employment, legal, or government decision is made by the prototype.
- The build does not authorize a pilot, production release, or procurement.

## Implemented journey

- Triage six synthetic exceptions in the Command Center.
- Filter by category and urgency, search cases, and inspect blocker details.
- Select `Worker 00417` and open case `CAS-2026-00417`.
- Inspect case `CAS-2026-00417` and its evidence groups.
- Expand or collapse evidence groups.
- Request selected missing evidence through an audit-aware modal.
- Record an operational review without changing case state.
- Inspect the resulting events in the History view and the recent audit panel.
- Return from the case file to the exception queue.
- Open out-of-scope navigation destinations and return through an explicit prototype boundary.

## Run locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run build
npm run test:sites
```

## Sources of visual truth

- `design-reference-option-1.png`: Operational Command Center and exception queue.
- `design-reference-option-2.png`: Evidence-first case file.

The implementation follows their shared navy/teal visual system while using semantic React controls, synthetic data and a responsive desktop layout.
