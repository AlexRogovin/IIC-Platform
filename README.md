# IICPlatform

**Compliance-first governance and workflow platform for regulated cross-border workforce administration.**

IICPlatform is being designed as an Israel-controlled technology and administrative enablement layer. Its first implementation environment is the India–Israel construction workforce corridor for licensed Israeli Ta'agidim and other legally authorized participants.

## Current status

The project is at **controlled technical prototype** stage.

- Target architecture baseline: approved.
- Evidence-first case-file prototype: implemented with synthetic data.
- Gate 7: pending execution evidence and Owner decision.
- Pilot, production, procurement, personal-data processing, and AI activation: **not authorized**.

## What the platform is

- Workflow and case-management infrastructure.
- Evidence and document-governance layer.
- Role-based operational workspace.
- Append-only audit and control surface.
- Configurable foundation for regulated workforce administration.

## What the platform is not

- An employer or Employer of Record.
- A recruiting agency or manpower corporation.
- A visa, permit, licensing, or government decision-maker.
- A payroll operator.
- A substitute for legal, privacy, security, or regulatory accountability.

## Controlled prototype

The working frontend source is located in [`platform/prototype`](platform/prototype/README.md).

The prototype demonstrates one evidence-first worker case for a licensed Ta'agid case manager:

- evidence completeness and controlled task groups;
- missing-evidence requests;
- operational review notes;
- access scope and integrity indicators;
- append-only audit events and history;
- explicit boundaries for functions outside the prototype scope.

The prototype uses synthetic fixtures only. AI and live integrations are disabled.

## Target architecture principles

- Shared Azure control plane with tenant-isolated data planes.
- Microsoft Entra federation for organizational identities.
- Role-based access, contextual controls, and segregation of duties.
- Israel-primary hosting subject to service availability and legal review.
- Configuration and feature flags instead of client-specific code forks.
- Human authority for every legally significant decision.
- AI limited to supervised checking, search, explanation, and recommendations after a separate activation decision.

## Repository structure

```text
IIC-Platform/
├── README.md
├── docs/                    # Research and operating-model materials
├── platform/
│   ├── architecture.md      # Earlier exploratory architecture note
│   ├── cost-estimate.md     # Earlier exploratory estimate; not a commitment
│   ├── modules.md           # Earlier module roadmap
│   └── prototype/           # Controlled evidence-first frontend source
└── scripts/
```

> Some earlier research notes remain in the repository for traceability. Values, legal statements, costs, schedules, and commercial assumptions in those notes are not controlled commitments unless adopted in a later approved master document.

## Run the prototype

```bash
cd platform/prototype
npm install
npm run dev
```

Validation:

```bash
npm run build
npm run test:sites
```

## License

MIT © 2026 Alex Rogovin


