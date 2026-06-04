# IIC-Platform
**Israel–India Corridor Platform — Administrative Enablement Provider**

> B2B compliance and orchestration layer connecting PIBA-licensed Israeli Ta'agidim with MEA/NSDC-registered Indian Recruiting Agents (IRAs).

---

## What IIC-Platform IS

| Role | Description |
|------|-------------|
| Administrative Enablement Provider | Compliance execution layer between Ta'agid and IRA |
| Compliance Documentation Engine | End-to-end PIBA + MEA documentation governance |
| India–Israel Orchestration | Worker pipeline coordination, BI monitoring, reporting |
| Risk-Reduction Partner | Audit trails, zero-fee enforcement, complaint tracking |

## What IIC-Platform is NOT

- ❌ Employer / Employer of Record
- ❌ PIBA license holder
- ❌ Signatory to worker employment contracts
- ❌ Payroll operator
- ❌ Recruiter charging workers

---

## Business Model

```
Ta'agid (Israeli EOR)  ←→  IIC-Platform  ←→  IRA (India recruiter)
                                 ↑
                     Administrative Enablement
                     Compliance Documentation
                     Worker Pipeline Governance
```

**Revenue streams:**
- Per-worker placement fee: **$300 USD** (one-time, paid by Ta'agid)
- Monthly governance retainer: **$2,500 USD/client** (recurring)

**Year-1 target:** 4 active Ta'agid clients → ~$135K revenue

---

## Key Market Data

| Metric | Value | Source |
|--------|-------|--------|
| PIBA-licensed contractors | 879 | [gov.il registry](https://www.gov.il/apps/moch/rasham/home) |
| Indian workers in Israel (2025) | ~20,000 | PIBA/CIMI |
| Foreign worker quota (2024) | 65,000+ | Government announcement |
| 2030 target (Modi–Netanyahu, Feb 2026) | 50,000 | Bilateral agreement |
| Worker complaints 2024 | 967 | PIBA/CIMI |
| Compliance gap rate | 7.4% | Calculated |

---

## Regulatory Framework

### Israeli Side — PIBA Procedure 9.4.0001
- Ta'agid is the Employer of Record (EOR)
- Workers recruited only via G2G/bilateral mechanisms
- Min. equity for 351–1,000 workers: ₪2,000,000
- Bank guarantee: ₪9,326/worker

### Indian Side — MEA / NSDC
- IRA agents registered with Ministry of External Affairs
- IRA fee cap: Rs. 30,000 + 18% GST
- **Zero-fee principle**: workers pay nothing for employment
- Key G2G channel: [NSDC International](https://nsdcinternational.com)

---

## Top Target Partners

### Israeli Ta'agidim (PIBA-licensed)
| Company | Score | Priority | Contact |
|---------|-------|----------|---------|
| Hoshiar | 115/130 | HIGH | info@hoshiar.co.il |
| Reshef Group | 105/130 | HIGH | office@reshef-group.co.il |
| Michlol Engineering | 105/130 | MEDIUM-HIGH | via website |
| Kasif / Rishon LeZion | 90/130 | MEDIUM | local office |

### Indian IRAs
- Dynamic Staffing Services (105 Israeli employer agreements)
- Gowell International
- Travel Touch Manpower Agency
- HBS Consultancy

---

## Repository Structure

```
IIC-Platform/
├── README.md                    # This file
├── LICENSE                      # MIT
├── .gitignore
├── docs/
│   ├── operating-model.md       # End-to-end operating model (11-step flow)
│   ├── legal-framework.md       # Zero-fee principle, PIBA + MEA rules
│   ├── icp-and-outreach.md      # ICP definition, top 10 shortlist, scripts
│   └── 90-day-plan.md           # Activation plan: first retainer in 45 days
├── platform/
│   ├── architecture.md          # Microsoft Azure stack overview
│   ├── cost-estimate.md         # Platform cost estimate (Alex Rogovin)
│   └── modules.md               # Compliance, billing, AI modules
└── scripts/
    └── README.md                # CLI tools and automation scripts
```

---

## 90-Day Activation Gate

> **Gate condition:** First paid Ta'agid retainer signed within **45 days**

| Phase | Days | Key Actions |
|-------|------|-------------|
| Activate | 1–30 | Outreach to Hoshiar + Reshef; IRA MOU with Dynamic Staffing |
| Convert | 31–60 | Close first retainer; follow up Michlol + Kasif |
| Scale | 61–90 | Onboard 2nd Ta'agid; caregiver sector assessment |

---

## Tech Stack (Microsoft Azure)

The platform uses a Microsoft-based architecture for:
- Personnel management automation
- Financial accounting and payroll transparency
- Migration law compliance (PIBA + MEA)
- AI-powered document verification
- Labor condition monitoring

See [`platform/architecture.md`](platform/architecture.md) for full details.

---

## License

MIT © 2026 Alex Rogovin
