# Scripts

Automation and utility scripts for IIC-Platform operations.

---

## Planned Scripts

| Script | Language | Purpose |
|--------|----------|---------|
| `piba-registry-check.sh` | Bash | Fetch daily PIBA contractor registry from gov.il |
| `fx-rate-fetch.js` | Node.js/TS | Bank of Israel USD/ILS rate via public API |
| `invoice-generator.py` | Python | Generate placement fee + retainer invoices |
| `compliance-checker.py` | Python | Validate worker documentation against PIBA checklist |
| `bi-report.py` | Python | Weekly BI summary: complaints, quota, placements |

---

## Bank of Israel FX API

Free public endpoint — no authentication required:

```bash
# Get current USD/ILS rate
curl "https://edge.boi.org.il/FusionEdgeServer/sdmx/v2/data/dataflow/BOI.STATISTICS/EXR/1.0/RER_USD_ILS?startperiod=$(date +%Y-%m-%d)&endperiod=$(date +%Y-%m-%d)&format=json"
```

---

## PIBA Registry

The registry at [gov.il/apps/moch/rasham/home](https://www.gov.il/apps/moch/rasham/home) is updated daily.
Currently: **879 licensed contractors**.

Manual check process until automated:
1. Visit registry URL
2. Filter by: foreign worker license active
3. Cross-reference against IIC shortlist (top 10 in `docs/icp-and-outreach.md`)
