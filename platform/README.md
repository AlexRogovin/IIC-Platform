# IICPlatform — Evidence-First Prototype

Controlled, frontend-only prototype for a licensed Israeli Ta'agid case manager. The selected product direction makes the worker case file the operational source of truth, with evidence completeness, access scope, and an append-only audit trail visible in one workspace.

## Prototype boundaries

- Synthetic data only.
- AI is disabled.
- No live identity, government, client, payment, email, or document-storage integrations.
- No real personal-data processing.
- No visa, permit, employment, legal, or government decision is made by the prototype.
- The build does not authorize a pilot, production release, or procurement.

## Implemented journey

- Inspect case `CAS-2026-00417` and its evidence groups.
- Expand or collapse evidence groups.
- Request selected missing evidence through an audit-aware modal.
- Record an operational review without changing case state.
- Inspect the resulting events in the History view and the recent audit panel.
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

## Source of visual truth

The selected Product Design reference is preserved in the fixed archive `IICPlatform_Evidence_First_Prototype_v0.1.zip` at the repository root. The implementation follows its evidence-first desktop information architecture and navy/teal visual system while using semantic React controls and a responsive layout.
