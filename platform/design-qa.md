# Design QA — Evidence-First Case File

## Evidence

- Visual source of truth: `design-reference-option-2.png` (`1487 × 1058` pixels), preserved in the fixed prototype archive at the repository root.
- Implementation: live cloud-browser capture, inspected inline together with the reference on 27 Aug 2026.
- Browser viewport: `1363 × 936` CSS pixels at device pixel ratio `1`.
- State: Case `CAS-2026-00417`, `Evidence & tasks` selected, all four evidence groups expanded.
- Full-view comparison: reference and implementation were reviewed in the same comparison response at the same desktop state.
- Focused-region review: the case header, evidence table, right-side integrity/access/audit panels, and left navigation were all visible in the full-view capture; no separate crop was required.

## Visual findings

| Priority | Finding | Resolution |
|---|---|---|
| P0 | None. | — |
| P1 | None. | — |
| P2 | The implementation viewport is narrower than the source image, so the table and audit rail are proportionally denser and the final rows continue below the fold. | Accepted responsive adaptation; information hierarchy, controls, spacing rhythm, and panel order remain intact. |
| P3 | The implementation uses the closest available Lucide line icons rather than pixel-identical source icons. | Accepted; icon semantics and weight remain consistent with the selected visual language. |

## Functional checks

- Evidence group collapse and re-expand: passed.
- Missing-evidence modal open, selection, message edit, and submit: passed.
- Audit event and success toast after evidence request: passed.
- History view shows the new evidence-request event: passed.
- Operational review modal, note edit, and submit: passed.
- Recent audit panel shows the recorded review and evidence request: passed.
- Out-of-scope Reports destination and return-to-case path: passed.
- Semantic landmarks, tab roles, dialog labels, table headers, and control names: inspected and present.
- Application console errors/warnings on `terminal.local`: none. Browser-extension metadata errors were excluded because they do not originate from the prototype.

## Comparison history

1. Initial desktop implementation compared with the selected reference.
2. No P0/P1 mismatches found.
3. P2 density difference confirmed as a viewport adaptation rather than a structural mismatch.
4. Main journey exercised after visual comparison; resulting audit states verified.

## Final result

passed
