# Platform Cost Estimate

**IIC-Platform — Microsoft Azure Stack**  
Author: Alex Rogovin | Updated: June 2026

---

## Monthly Operating Cost Estimate

### Per Client (1 Active Ta'agid)

| Service | Tier | Est. Monthly Cost (USD) |
|---------|------|------------------------|
| Azure SQL Database | Standard S2 | $75 |
| Azure Blob Storage | LRS, ~50GB | $5 |
| Power BI Pro (1 user) | Per user | $10 |
| Azure Logic Apps | ~500 runs/month | $5 |
| Azure Functions | Consumption plan | $5 |
| Azure OpenAI Service | GPT-4o, ~50K tokens/month | $15 |
| Azure Form Recognizer | ~500 documents/month | $30 |
| Microsoft 365 Business Basic | 2 users | $12 |
| Power Apps per-app plan | 2 apps × 1 user | $20 |
| Networking / misc | — | $10 |
| **Total per client** | | **~$187/month** |

---

## Scaling Model

| Active Clients | Monthly Platform Cost | Cost/Client | Revenue | Net Margin |
|---------------|----------------------|-------------|---------|-----------|
| 1 | ~$300 (setup amortized) | $300 | $5,500 | 95% |
| 2 | ~$450 | $225 | $11,000 | 96% |
| 4 | ~$750 | $187 | $22,000 | 97% |
| 10 | ~$1,500 | $150 | $55,000 | 97% |

*Revenue = retainer ($2,500) + placement fees (15 workers × $300) per client per month*

---

## One-Time Setup Costs

| Item | Cost (USD) |
|------|-----------|
| Azure environment provisioning | $500 |
| Power Apps portal development | $1,000 |
| Power BI dashboard setup | $500 |
| Initial data model + SQL schema | $500 |
| Security & compliance review | $500 |
| **Total setup** | **~$3,000** |

---

## Cost vs. Revenue Snapshot

At 4 clients (Year-1 target):
- Platform cost: ~$750/month
- IIC revenue: ~$22,000/month
- **Platform cost as % of revenue: 3.4%**

The Microsoft stack is essentially negligible relative to the B2B fee structure.

---

## Notes

- Costs above are estimates; actual Azure billing depends on usage
- Power BI and Power Apps costs can be bundled under Microsoft 365 E3 at scale
- Azure OpenAI costs scale with document volume — monitor monthly
- Bank of Israel FX API is free (public API)
- PIBA registry is public (gov.il, no API cost)

---

*Source: Platform_Stack_and_Cost_Estimate_Alex_Rogovin.docx; NotebookLM notebook "Стек и смета платформы Microsoft"*
