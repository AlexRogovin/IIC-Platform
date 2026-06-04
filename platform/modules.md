# Platform Modules: Development Roadmap

---

## MVP (Month 1–2) — Minimum to Operate

The MVP only needs what's required to service the first Ta'agid client.

| Module | Components | Tech |
|--------|-----------|------|
| Worker tracker | Status board (sourced → active) | Excel/SharePoint → Power Apps |
| Document store | Passport, visa, MEA receipt uploads | Azure Blob + SharePoint |
| Invoice generator | Placement fee + retainer invoices | Power Automate template |
| Compliance checklist | PIBA documentation per worker | SharePoint list |

**Cost at MVP:** ~$100/month (Microsoft 365 + minimal Azure)

---

## V1 (Month 3–4) — First Client Operational

| Module | Components | Tech |
|--------|-----------|------|
| Ta'agid portal | Worker list, quota status, invoice history | Power Apps |
| IRA portal | Candidate submissions, MOU tracking | Power Apps |
| BI dashboard | Workers active, complaints, quota utilization | Power BI |
| Automated invoicing | Monthly retainer + per-placement triggers | Logic Apps |
| FX tracking | USD/ILS rate from Bank of Israel API | Azure Function |

---

## V2 (Month 5–6) — Multi-Client Scale

| Module | Components | Tech |
|--------|-----------|------|
| AI document verification | OCR + validation for 500+ docs/month | Form Recognizer + GPT-4o |
| Anomaly detection | Fee anomalies, underpayment signals | Azure ML / OpenAI |
| Compliance risk scoring | IRA + Ta'agid risk scores | Azure SQL + Python |
| Multi-tenant isolation | Each Ta'agid sees only their data | RBAC + Azure AD |
| Automated PIBA reporting | Monthly report auto-generation | Logic Apps + Word template |

---

## Integration Points

| External System | Integration Method | Data |
|----------------|-------------------|------|
| PIBA registry (gov.il) | Web scrape / manual check | Contractor list, 879 records |
| Bank of Israel FX | REST API (free, public) | USD/ILS daily rate |
| NSDC International | Email/portal | Worker candidate data |
| PIBA/CIMI complaint log | Manual import | Complaint count by employer |
| Israeli tax authority | TBD (Phase 2) | Payroll compliance |

---

## Development Priorities

1. **Now:** Excel-based MVP (no code needed for first retainer)
2. **Month 2:** Power Apps portal for Ta'agid #1
3. **Month 4:** Power BI BI dashboard live
4. **Month 6:** AI document verification for scale
