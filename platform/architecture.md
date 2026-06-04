# Microsoft Azure Platform Architecture

**IIC-Platform — Ta'agid Compliance & Billing Automation**

---

## Overview

The Microsoft-based stack automates three core functions:
1. **Personnel management** — worker onboarding, documentation, status tracking
2. **Financial accounting** — payroll transparency, fee invoicing, bank guarantee tracking
3. **Compliance enforcement** — PIBA + MEA rule validation, complaint monitoring, reporting

---

## Core Modules

### Module 1: Compliance Documentation Engine
- Worker document collection and validation (passports, visas, MEA receipts)
- PIBA bank guarantee tracking per worker (₪9,326/worker threshold)
- Zero-fee audit: IRA fee receipt verification against ₪30,000 GST cap
- Automated PIBA reporting templates

**Azure Services:** Azure Blob Storage (documents), Azure Form Recognizer (OCR/AI extraction), Azure Logic Apps (workflow triggers)

---

### Module 2: Worker Pipeline Management
- Worker status dashboard: sourced → screened → approved → deployed → active
- IRA coordination portal: quota requests, candidate submissions, MOU tracking
- NSDC/HKRN/MITRA channel integration
- Replacement worker alert system (triggered by churn threshold)

**Azure Services:** Azure SQL Database, Power Apps (portal), Power BI (dashboard)

---

### Module 3: Financial & Billing
- Ta'agid invoice generation: placement fee ($300/worker), retainer ($2,500/month)
- IRA payment ledger: fee caps, receipts, GST tracking
- Payroll transparency layer: wage monitoring per worker vs. ₪6,247.67/month minimum
- FX tracking: USD/ILS rate (Bank of Israel API)

**Azure Services:** Azure SQL, Power Automate (invoice generation), Azure Functions

---

### Module 4: BI & Monitoring
- PIBA/CIMI complaint tracker (967 in 2024 benchmark)
- Quota utilization by Ta'agid (against PIBA-approved limits)
- Worker complaint rate dashboard (target: <3%, vs. current 7.4%)
- Weekly BI report auto-generation for each Ta'agid client

**Azure Services:** Power BI, Azure Data Factory, Azure Monitor

---

### Module 5: AI Layer
- Document verification: AI-powered passport/visa validation
- Anomaly detection: unusual fee patterns, underpayment signals
- Compliance risk scoring per IRA and Ta'agid
- Natural language Q&A on regulatory procedures (via Azure OpenAI)

**Azure Services:** Azure OpenAI Service, Azure Cognitive Services, Azure Form Recognizer

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────┐
│                   IIC-Platform Core                  │
├──────────────┬──────────────┬──────────────┬─────────┤
│  Compliance  │   Pipeline   │   Billing    │   BI    │
│  Engine      │   Manager    │   Module     │  Layer  │
├──────────────┴──────────────┴──────────────┴─────────┤
│              Microsoft Azure Infrastructure           │
│  Blob Storage · SQL DB · Power BI · Logic Apps       │
│  Azure OpenAI · Form Recognizer · Functions          │
└─────────────────────────────────────────────────────┘
         ↑                              ↑
    Ta'agid Portal               IRA Portal
  (Israeli side)               (India side)
```

---

## Security & Compliance

- All worker PII stored in Azure with Israeli data residency preference
- Role-based access: Ta'agid sees only their workers; IRA sees only their candidates
- Audit log for every document access and status change
- GDPR + Israeli Privacy Protection Law (PPL) compliance

---

*Source: Detailed Plan — Microsoft Architecture for Ta'agid Compliance & Billing.docx; Platform_Stack_and_Cost_Estimate_Alex_Rogovin.docx*
