import { useMemo, useState } from "react";
import {
  Archive,
  ArrowLeft,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleAlert,
  CircleHelp,
  Clock3,
  Database,
  FileCheck2,
  FileClock,
  FilePlus2,
  Files,
  Folder,
  Funnel,
  History,
  Info,
  LayoutList,
  LockKeyhole,
  Mail,
  Menu,
  MessageSquareText,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Search,
  Send,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "cases", label: "Command Center", icon: LayoutList },
  { id: "new", label: "New case", icon: FilePlus2 },
  { id: "workers", label: "Workers", icon: UsersRound },
  { id: "tasks", label: "Tasks", icon: FileCheck2, count: 6 },
  { id: "evidence", label: "Evidence library", icon: Files },
  { id: "communications", label: "Communications", icon: Mail },
  { id: "reports", label: "Reports", icon: LayoutList },
  { id: "audit", label: "Audit log", icon: Archive },
  { id: "settings", label: "Settings", icon: Settings },
];

const QUEUE_CASES = [
  { id: "CAS-2026-00417", worker: "Worker 00417", step: "Pre-Submission Check", reason: "Passport verification failed", blockedOn: "27 Aug 2026", owner: "Ta'agid Review", urgency: "Overdue", age: "2d", category: "Document issues", tone: "critical" },
  { id: "CAS-2026-00432", worker: "Worker 00432", step: "Document Verification", reason: "Employment contract missing page", blockedOn: "26 Aug 2026", owner: "Ta'agid Review", urgency: "Due soon", age: "1d", category: "Document issues", tone: "warning" },
  { id: "CAS-2026-00458", worker: "Worker 00458", step: "Medical Clearance", reason: "Medical report expired", blockedOn: "25 Aug 2026", owner: "Clinic", urgency: "Overdue", age: "3d", category: "Medical issues", tone: "critical" },
  { id: "CAS-2026-00479", worker: "Worker 00479", step: "Application Submission", reason: "Insurance document invalid", blockedOn: "25 Aug 2026", owner: "Ta'agid Review", urgency: "Due soon", age: "1d", category: "Application issues", tone: "warning" },
  { id: "CAS-2026-00491", worker: "Worker 00491", step: "Background Check", reason: "Police clearance pending", blockedOn: "24 Aug 2026", owner: "Government Agency", urgency: "Due soon", age: "2d", category: "Eligibility issues", tone: "warning" },
  { id: "CAS-2026-00502", worker: "Worker 00502", step: "Pre-Submission Check", reason: "Photo not compliant", blockedOn: "24 Aug 2026", owner: "Ta'agid Review", urgency: "Overdue", age: "1d", category: "Eligibility issues", tone: "critical" },
];

const QUEUE_TABS = ["All exceptions", "Document issues", "Eligibility issues", "Application issues", "Medical issues"];

const GROUPS = [
  {
    id: "engagement",
    title: "1. Worker engagement",
    summary: "2 of 2 completed",
    tone: "complete",
    defaultOpen: true,
    items: [
      { name: "Signed worker declaration", requirement: "Required", status: "Completed", updated: "26 Aug 2026" },
      { name: "Terms of employment (IW)", requirement: "Required", status: "Completed", updated: "26 Aug 2026" },
    ],
  },
  {
    id: "predeparture",
    title: "2. Pre-departure compliance",
    summary: "2 of 5 completed",
    tone: "warning",
    defaultOpen: true,
    items: [
      { name: "Medical fitness certificate", requirement: "Required", status: "Completed", updated: "25 Aug 2026" },
      { name: "Skills assessment / trade test", requirement: "Required", status: "Completed", updated: "25 Aug 2026" },
      { name: "Safety training certificate", requirement: "Required", status: "Missing", updated: "—" },
      { name: "Insurance (health & personal accident)", requirement: "Required", status: "Missing", updated: "—" },
      { name: "Background check attestation", requirement: "Required", status: "Missing", updated: "—" },
    ],
  },
  {
    id: "travel",
    title: "3. Travel & documentation",
    summary: "0 of 3 completed",
    tone: "neutral",
    defaultOpen: true,
    items: [
      { name: "Passport biographic page", requirement: "Required", status: "Not started", updated: "—" },
      { name: "Work visa approval", requirement: "Required", status: "Not started", updated: "—" },
      { name: "Flight itinerary", requirement: "Required", status: "Not started", updated: "—" },
    ],
  },
  {
    id: "employer",
    title: "4. Employer undertakings",
    summary: "0 of 2 completed",
    tone: "neutral",
    defaultOpen: true,
    items: [
      { name: "Employer undertaking", requirement: "Required", status: "Not started", updated: "—" },
      { name: "Accommodation confirmation", requirement: "Required", status: "Not started", updated: "—" },
    ],
  },
];

const INITIAL_AUDIT = [
  { time: "27 Aug 2026, 09:14", title: "Case updated", detail: "Evidence status changed for 2 items", actor: "Case Manager" },
  { time: "26 Aug 2026, 16:02", title: "Evidence uploaded", detail: "Terms of employment (IW)", actor: "Case Manager" },
  { time: "26 Aug 2026, 15:48", title: "Evidence uploaded", detail: "Signed worker declaration", actor: "Case Manager" },
  { time: "20 Aug 2026, 11:07", title: "Case created", detail: "Synthetic case fixture initialized", actor: "Case Manager" },
];

function Logo() {
  return <div className="logo" aria-label="IICPlatform"><span>IIC</span>Platform</div>;
}

function StatusIcon({ status }) {
  if (status === "Completed") return <CheckCircle2 aria-hidden="true" />;
  if (status === "Missing") return <CircleAlert aria-hidden="true" />;
  return <Circle aria-hidden="true" />;
}

function Sidebar({ collapsed, activeNav, onNavigate, onCollapse }) {
  return (
    <aside className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>
      <div className="tenant-block">
        <div className="tenant-icon"><Building2 aria-hidden="true" /></div>
        {!collapsed && <div><strong>Cedar Workforce Ltd.</strong><span>Licensed Ta'agid</span></div>}
      </div>
      <nav aria-label="Primary navigation">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "nav-item--active" : ""}`}
              onClick={() => onNavigate(item.id)}
              title={collapsed ? item.label : undefined}
            >
              <Icon aria-hidden="true" />
              {!collapsed && <span>{item.label}</span>}
              {!collapsed && item.count && <span className="nav-count">{item.count}</span>}
            </button>
          );
        })}
      </nav>
      <div className="sidebar-bottom">
        <button className="nav-item" onClick={() => onNavigate("help")} title={collapsed ? "Help" : undefined}>
          <CircleHelp aria-hidden="true" />{!collapsed && <span>Help</span>}
        </button>
        <button className="collapse-button" onClick={onCollapse} aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}>
          {collapsed ? <PanelLeftOpen aria-hidden="true" /> : <PanelLeftClose aria-hidden="true" />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}

function Header({ onMobileMenu, queueMode }) {
  return (
    <header className={`topbar ${queueMode ? "topbar--queue" : ""}`}>
      <button className="mobile-menu" onClick={onMobileMenu} aria-label="Open navigation"><Menu /></button>
      <Logo />
      <div className="corridor-title">India–Israel Construction Workforce Corridor</div>
      <div className="topbar-controls">
        <span className="environment-chip"><Database />Synthetic data</span>
        <span className="environment-chip"><ShieldCheck />Prototype — AI off</span>
        <span className="date-chip"><Clock3 />27 Aug 2026</span>
        <button className="profile-button" aria-label="Open case manager profile">CM</button>
      </div>
    </header>
  );
}

function QueueInspector({ item, onClose, onOpenCase, onAssign, onResolve }) {
  if (!item) {
    return (
      <aside className="queue-inspector queue-inspector--empty">
        <Folder aria-hidden="true" />
        <h2>Select an exception</h2>
        <p>Choose a case to inspect its blocker, owner and bounded next action.</p>
      </aside>
    );
  }

  return (
    <aside className="queue-inspector" aria-label={`${item.worker} exception details`}>
      <div className="inspector-header">
        <div><h2>{item.worker}</h2><p>Case ID: {item.id}</p></div>
        <div className="inspector-header-actions"><span className={`urgency urgency--${item.tone}`}>{item.urgency}</span><button className="icon-button" onClick={onClose} aria-label="Close case details"><X /></button></div>
      </div>
      <div className="inspector-tabs" role="tablist" aria-label="Exception detail sections"><button className="inspector-tab--active" role="tab" aria-selected="true">Overview</button><button role="tab">Details</button><button role="tab">History</button><button role="tab">Documents</button></div>
      <dl className="inspector-facts">
        <div><dt>Status</dt><dd><span className="blocked-chip">Blocked</span></dd></div>
        <div><dt>Current step</dt><dd>{item.step}</dd></div>
        <div><dt>Blocked reason</dt><dd>{item.reason}</dd></div>
        <div><dt>Blocked on</dt><dd>{item.blockedOn}</dd></div>
        <div><dt>Owner</dt><dd>{item.owner}<button className="inline-action" onClick={onAssign}>Change owner</button></dd></div>
        <div><dt>SLA</dt><dd><strong className={item.tone === "critical" ? "critical-text" : "warning-text"}>{item.urgency === "Overdue" ? `Overdue by ${item.age}` : `Due in ${item.age}`}</strong><span>Due 29 Aug 2026</span></dd></div>
      </dl>
      <section className="inspector-note"><h3>What needs attention</h3><p>{item.reason}. Supporting evidence must be corrected and reviewed before the workflow can continue.</p></section>
      <section className="inspector-note"><h3>Impact</h3><p>This case is blocked and cannot proceed to application submission until the issue is resolved.</p></section>
      <div className="inspector-actions">
        <button className="resolve-button" onClick={onResolve}><CheckCircle2 />Resolve blocker</button>
        <div><button className="secondary-button" onClick={onAssign}><UserRound />Assign</button><button className="secondary-button" onClick={onOpenCase}><Folder />Open case</button></div>
      </div>
    </aside>
  );
}

function QueueScreen({ onOpenCase, showToast }) {
  const [category, setCategory] = useState("All exceptions");
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [urgencyFilter, setUrgencyFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(QUEUE_CASES[0].id);

  const counts = useMemo(() => Object.fromEntries(QUEUE_TABS.map((tab) => [tab, tab === "All exceptions" ? QUEUE_CASES.length : QUEUE_CASES.filter((item) => item.category === tab).length])), []);
  const visibleCases = useMemo(() => QUEUE_CASES.filter((item) => {
    const matchesCategory = category === "All exceptions" || item.category === category;
    const matchesUrgency = urgencyFilter === "All" || item.urgency === urgencyFilter;
    const haystack = `${item.worker} ${item.id} ${item.step} ${item.reason} ${item.owner}`.toLowerCase();
    return matchesCategory && matchesUrgency && haystack.includes(search.trim().toLowerCase());
  }), [category, urgencyFilter, search]);
  const selected = QUEUE_CASES.find((item) => item.id === selectedId) || null;

  return (
    <main className="queue-page">
      <div className="command-strip"><strong>Operational Command Center</strong><span>/</span><span>Exception Queue</span><div><span className="strip-chip">Synthetic data</span><span className="strip-chip strip-chip--muted">Prototype — AI off</span></div></div>
      <div className="queue-layout">
        <section className="queue-workspace">
          <div className="queue-titlebar"><div><h1>Exception Queue</h1><p>Cases blocked in the compliance or application flow that require action.</p></div><button className={`filter-button ${filterOpen ? "filter-button--active" : ""}`} onClick={() => setFilterOpen((value) => !value)} aria-expanded={filterOpen}><Funnel />Filters{urgencyFilter !== "All" && <span>1</span>}</button></div>
          {filterOpen && <div className="filter-panel"><span>Urgency</span>{["All", "Overdue", "Due soon"].map((value) => <button key={value} className={urgencyFilter === value ? "filter-option--active" : ""} onClick={() => setUrgencyFilter(value)}>{value}</button>)}<button className="filter-clear" onClick={() => { setUrgencyFilter("All"); setSearch(""); }}>Clear filters</button></div>}
          <div className="queue-tools"><div className="queue-tabs" role="tablist" aria-label="Exception categories">{QUEUE_TABS.map((tab) => <button key={tab} role="tab" aria-selected={category === tab} className={category === tab ? "queue-tab--active" : ""} onClick={() => setCategory(tab)}>{tab}<span>{counts[tab]}</span></button>)}</div><label className="queue-search"><Search aria-hidden="true" /><span className="sr-only">Search exceptions</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search cases" /></label></div>
          <div className="queue-table" role="table" aria-label="Exception cases">
            <div className="queue-columns queue-columns--head" role="row"><span></span><span>Worker ID</span><span>Current step</span><span>Blocked reason</span><span>Blocked on</span><span>Owner</span><span>SLA</span></div>
            {visibleCases.map((item) => <button key={item.id} role="row" className={`queue-columns queue-row ${selectedId === item.id ? "queue-row--selected" : ""}`} onClick={() => setSelectedId(item.id)} onDoubleClick={() => item.id === "CAS-2026-00417" && onOpenCase()}>
              <span role="cell" className={`exception-marker exception-marker--${item.tone}`}><CircleAlert /></span>
              <span role="cell" className="worker-link"><strong>{item.worker}</strong><small>{item.id}</small></span>
              <span role="cell">{item.step}</span><span role="cell">{item.reason}</span><span role="cell">{item.blockedOn}</span><span role="cell">{item.owner}</span><span role="cell" className="sla-cell"><strong className={`urgency urgency--${item.tone}`}>{item.urgency}</strong><small>{item.age}</small></span>
            </button>)}
            {!visibleCases.length && <div className="queue-empty"><Search /><strong>No matching exceptions</strong><span>Adjust the category, urgency or search term.</span></div>}
          </div>
          <div className="queue-footer"><span>Showing {visibleCases.length} of {QUEUE_CASES.length} exceptions</span><div><button disabled aria-label="Previous page"><ChevronLeft /></button><span>1</span><button disabled aria-label="Next page"><ChevronRight /></button></div></div>
        </section>
        <QueueInspector item={selected} onClose={() => setSelectedId(null)} onOpenCase={() => selected?.id === "CAS-2026-00417" ? onOpenCase() : showToast("Detailed case workspace is included for Worker 00417 in this prototype")} onAssign={() => showToast("Assignment change recorded as a prototype action")} onResolve={() => selected?.id === "CAS-2026-00417" ? onOpenCase() : showToast("Open the supporting evidence before resolving this blocker")} />
      </div>
    </main>
  );
}

function MetaItem({ label, children }) {
  return <div className="meta-item"><span>{label}</span><strong>{children}</strong></div>;
}

function EvidenceTable({ groups, openGroups, onToggle }) {
  return (
    <div className="evidence-table" role="table" aria-label="Evidence and tasks">
      <div className="evidence-columns evidence-columns--head" role="row">
        <span role="columnheader">Item</span><span role="columnheader">Requirement</span><span role="columnheader">Status</span><span role="columnheader">Updated</span>
      </div>
      {groups.map((group) => (
        <section className="evidence-group" key={group.id}>
          <button className="group-heading" onClick={() => onToggle(group.id)} aria-expanded={openGroups[group.id]}>
            <span className={`group-tone group-tone--${group.tone}`} aria-hidden="true">
              {group.tone === "complete" ? <CheckCircle2 /> : group.tone === "warning" ? <CircleAlert /> : <Circle />}
            </span>
            <span className="group-title">{group.title}</span>
            <span className="group-summary">{group.summary}</span>
            <ChevronDown className={openGroups[group.id] ? "chevron--open" : ""} aria-hidden="true" />
          </button>
          {openGroups[group.id] && (
            <div className="group-rows">
              {group.items.map((item) => (
                <div className="evidence-columns evidence-row" role="row" key={item.name}>
                  <div role="cell" className="item-name"><StatusIcon status={item.status} />{item.name}</div>
                  <span role="cell">{item.requirement}</span>
                  <span role="cell" className={`status status--${item.status.toLowerCase().replace(" ", "-")}`}><StatusIcon status={item.status} />{item.status}</span>
                  <span role="cell">{item.updated}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

function IntegrityPanel() {
  return (
    <section className="side-card integrity-card">
      <div className="side-card-title"><h2>Evidence integrity</h2><Info aria-label="Append-only evidence information" /></div>
      <p>This case file is append-only.</p>
      <dl className="integrity-list">
        <div><dt><CheckCircle2 />Digital signatures</dt><dd>Enforced</dd></div>
        <div><dt><CheckCircle2 />Hash verification</dt><dd>Enabled</dd></div>
        <div><dt><CircleAlert />Tamper detection</dt><dd>Active</dd></div>
        <div><dt><Clock3 />Last integrity check</dt><dd>27 Aug 2026, 09:14</dd></div>
      </dl>
    </section>
  );
}

function AccessPanel() {
  return (
    <section className="side-card">
      <div className="side-card-title"><h2>Access scope</h2><UsersRound aria-hidden="true" /></div>
      <p>Who can access this case</p>
      <dl className="access-list">
        <div><dt>Ta'agid staff</dt><dd>4 users</dd></div>
        <div><dt>Internal auditors</dt><dd>2 users</dd></div>
        <div><dt>Read-only auditors</dt><dd>1 user</dd></div>
      </dl>
      <button className="text-button">View full access list <ChevronRight /></button>
    </section>
  );
}

function AuditPanel({ events, onViewAll }) {
  return (
    <section className="side-card audit-card">
      <div className="side-card-title"><h2>Recent audit events</h2><History aria-hidden="true" /></div>
      <p>All events are append-only.</p>
      <ol className="timeline">
        {events.slice(0, 4).map((event) => (
          <li key={`${event.time}-${event.title}`}>
            <time>{event.time}</time>
            <strong>{event.title}</strong>
            <span>{event.detail}</span>
            <small>by {event.actor}</small>
          </li>
        ))}
      </ol>
      <button className="text-button" onClick={onViewAll}>View full audit log <ChevronRight /></button>
    </section>
  );
}

function RequestModal({ selected, setSelected, onClose, onSubmit }) {
  const missingItems = GROUPS.flatMap((group) => group.items).filter((item) => item.status === "Missing");
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="request-title">
        <div className="modal-header">
          <div><span className="eyebrow">CASE CAS-2026-00417</span><h2 id="request-title">Request missing evidence</h2></div>
          <button className="icon-button" onClick={onClose} aria-label="Close"><X /></button>
        </div>
        <p className="modal-intro">Choose the evidence items to request. This creates a recorded communication task; it does not change the case state.</p>
        <fieldset>
          <legend>Evidence items</legend>
          {missingItems.map((item) => (
            <label className="check-row" key={item.name}>
              <input
                type="checkbox"
                checked={selected.includes(item.name)}
                onChange={() => setSelected((current) => current.includes(item.name) ? current.filter((x) => x !== item.name) : [...current, item.name])}
              />
              <span className="custom-check"><Check /></span>
              <span><strong>{item.name}</strong><small>Required before pre-submission</small></span>
            </label>
          ))}
        </fieldset>
        <label className="message-label">Message<textarea defaultValue="Please provide the selected evidence items so the case review can continue. Do not send original identity documents by email." /></label>
        <div className="modal-notice"><LockKeyhole />The request is logged with its selected items, timestamp, actor and tenant context.</div>
        <div className="modal-actions">
          <button className="secondary-button" onClick={onClose}>Cancel</button>
          <button className="primary-button" onClick={onSubmit} disabled={!selected.length}><Send />Send request</button>
        </div>
      </section>
    </div>
  );
}

function ReviewModal({ onClose, onRecord }) {
  const [note, setNote] = useState("Evidence set reviewed. Missing items remain open; no state transition requested.");
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal modal--compact" role="dialog" aria-modal="true" aria-labelledby="review-title">
        <div className="modal-header">
          <div><span className="eyebrow">INTERNAL REVIEW</span><h2 id="review-title">Record review</h2></div>
          <button className="icon-button" onClick={onClose} aria-label="Close"><X /></button>
        </div>
        <div className="review-boundary"><Info />This review records an operational observation only. It is not a visa, permit, employment or government decision.</div>
        <label className="message-label">Review note<textarea value={note} onChange={(event) => setNote(event.target.value)} /></label>
        <div className="modal-actions">
          <button className="secondary-button" onClick={onClose}>Cancel</button>
          <button className="primary-button" onClick={() => onRecord(note)} disabled={!note.trim()}><FileCheck2 />Record review</button>
        </div>
      </section>
    </div>
  );
}

function CaseScreen({ events, setEvents, showToast, onBack }) {
  const [tab, setTab] = useState("Evidence & tasks");
  const [openGroups, setOpenGroups] = useState(() => Object.fromEntries(GROUPS.map((g) => [g.id, g.defaultOpen])));
  const [modal, setModal] = useState(null);
  const [selectedMissing, setSelectedMissing] = useState(["Safety training certificate", "Insurance (health & personal accident)"]);
  const tabs = ["Case overview", "Evidence & tasks", "Communications", "History"];

  const submitRequest = () => {
    const event = { time: "27 Aug 2026, 11:42", title: "Evidence requested", detail: `${selectedMissing.length} missing item${selectedMissing.length === 1 ? "" : "s"}`, actor: "Case Manager" };
    setEvents((current) => [event, ...current]);
    setModal(null);
    showToast("Evidence request recorded and queued");
  };

  const recordReview = (note) => {
    setEvents((current) => [{ time: "27 Aug 2026, 11:45", title: "Review recorded", detail: note, actor: "Case Manager" }, ...current]);
    setModal(null);
    showToast("Review appended to the case history");
  };

  return (
    <>
      <main className="case-page">
        <button className="back-link" onClick={onBack}><ArrowLeft />Back to cases</button>
        <section className="case-heading">
          <div className="title-row"><h1>Case CAS-2026-00417</h1><span className="state-chip"><CircleAlert />Evidence incomplete</span></div>
          <div className="case-meta">
            <MetaItem label="Worker ID">Worker 00417</MetaItem>
            <MetaItem label="Ta'agid">Cedar Workforce Ltd.</MetaItem>
            <MetaItem label="Case type">Construction Worker</MetaItem>
            <MetaItem label="Date opened">20 Aug 2026</MetaItem>
            <MetaItem label="Current stage">Pre-Submission</MetaItem>
            <MetaItem label="Last updated">27 Aug 2026</MetaItem>
          </div>
        </section>
        <div className="tabs" role="tablist" aria-label="Case sections">
          {tabs.map((name) => <button key={name} role="tab" aria-selected={tab === name} className={tab === name ? "tab--active" : ""} onClick={() => setTab(name)}>{name}</button>)}
        </div>
        <div className="content-grid">
          <section className="main-card">
            {tab === "Evidence & tasks" && (
              <>
                <div className="main-card-header">
                  <div><h2>Evidence & tasks</h2><p>Complete all required items to move to submission.</p></div>
                  <div className="header-actions">
                    <button className="secondary-button" onClick={() => setModal("review")}><FileCheck2 />Record review</button>
                    <button className="primary-button" onClick={() => setModal("request")}><Mail />Request missing evidence</button>
                  </div>
                </div>
                <EvidenceTable groups={GROUPS} openGroups={openGroups} onToggle={(id) => setOpenGroups((current) => ({ ...current, [id]: !current[id] }))} />
              </>
            )}
            {tab === "Case overview" && <OverviewTab />}
            {tab === "Communications" && <CommunicationsTab onRequest={() => setModal("request")} events={events} />}
            {tab === "History" && <HistoryTab events={events} />}
          </section>
          <aside className="right-column">
            <IntegrityPanel />
            <AccessPanel />
            <AuditPanel events={events} onViewAll={() => setTab("History")} />
          </aside>
        </div>
        <footer className="page-footer"><span>All timestamps in local time (UTC+3).</span><span>Prototype fixture PT-CASE-00417</span></footer>
      </main>
      {modal === "request" && <RequestModal selected={selectedMissing} setSelected={setSelectedMissing} onClose={() => setModal(null)} onSubmit={submitRequest} />}
      {modal === "review" && <ReviewModal onClose={() => setModal(null)} onRecord={recordReview} />}
    </>
  );
}

function OverviewTab() {
  return (
    <div className="tab-content overview-content">
      <div className="main-card-header"><div><h2>Case overview</h2><p>Current operational state and bounded next actions.</p></div></div>
      <div className="overview-banner"><CircleAlert /><div><strong>Three required evidence items are missing</strong><span>The case remains in Pre-Submission until the evidence is recorded and reviewed.</span></div></div>
      <div className="overview-sections">
        <section><h3>Current responsibility</h3><dl><div><dt>Owner</dt><dd>Ta'agid Case Management</dd></div><div><dt>Next action</dt><dd>Request missing evidence</dd></div><div><dt>SLA state</dt><dd>Due in 2 working days</dd></div></dl></section>
        <section><h3>Boundary</h3><p>IICPlatform records workflow and evidence. It does not issue permits, visas, employment decisions or legal conclusions.</p></section>
      </div>
    </div>
  );
}

function CommunicationsTab({ onRequest, events }) {
  const requests = events.filter((e) => e.title === "Evidence requested");
  return (
    <div className="tab-content communications-content">
      <div className="main-card-header"><div><h2>Communications</h2><p>Case-bound messages and requests.</p></div><button className="primary-button" onClick={onRequest}><Plus />New evidence request</button></div>
      {requests.length ? requests.map((request) => <article className="communication-row" key={request.time}><div className="communication-icon"><Mail /></div><div><strong>{request.title}</strong><span>{request.detail}</span><small>{request.time} · {request.actor}</small></div><span className="delivery-state"><CheckCircle2 />Queued</span></article>) : <div className="empty-state"><MessageSquareText /><h3>No case communications yet</h3><p>Requests sent from this case will appear here with delivery evidence.</p></div>}
    </div>
  );
}

function HistoryTab({ events }) {
  return (
    <div className="tab-content history-content">
      <div className="main-card-header"><div><h2>Case history</h2><p>Append-only operational events for this synthetic case.</p></div><button className="secondary-button"><SlidersHorizontal />Filter</button></div>
      <ol className="history-list">
        {events.map((event) => <li key={`${event.time}-${event.title}`}><div className="history-marker"><FileClock /></div><div><time>{event.time}</time><strong>{event.title}</strong><p>{event.detail}</p><small>Recorded by {event.actor}</small></div></li>)}
      </ol>
    </div>
  );
}

function PlaceholderScreen({ activeNav, onBack }) {
  const item = NAV_ITEMS.find((nav) => nav.id === activeNav);
  return (
    <main className="placeholder-page">
      <button className="back-link" onClick={onBack}><ArrowLeft />Return to case</button>
      <div className="placeholder-panel">
        <div className="placeholder-icon">{item ? <item.icon /> : <CircleHelp />}</div>
        <span className="eyebrow">PROTOTYPE BOUNDARY</span>
        <h1>{item?.label || "Help"}</h1>
        <p>This destination is represented in navigation but is outside the selected evidence-first prototype journey.</p>
        <button className="primary-button" onClick={onBack}>Open Case CAS-2026-00417</button>
      </div>
    </main>
  );
}

export function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("cases");
  const [workspaceView, setWorkspaceView] = useState("queue");
  const [events, setEvents] = useState(INITIAL_AUDIT);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 3200);
  };

  const navigate = (id) => {
    setActiveNav(id);
    if (id === "cases") setWorkspaceView("queue");
    setMobileNavOpen(false);
  };

  return (
    <div className={`app-shell ${sidebarCollapsed ? "app-shell--collapsed" : ""} ${mobileNavOpen ? "app-shell--mobile-open" : ""}`}>
      <Header onMobileMenu={() => setMobileNavOpen(true)} queueMode={activeNav === "cases" && workspaceView === "queue"} />
      {mobileNavOpen && <button className="mobile-scrim" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation" />}
      <Sidebar collapsed={sidebarCollapsed} activeNav={activeNav} onNavigate={navigate} onCollapse={() => setSidebarCollapsed((value) => !value)} />
      {activeNav === "cases" && workspaceView === "queue" && <QueueScreen onOpenCase={() => setWorkspaceView("case")} showToast={showToast} />}
      {activeNav === "cases" && workspaceView === "case" && <CaseScreen events={events} setEvents={setEvents} showToast={showToast} onBack={() => setWorkspaceView("queue")} />}
      {activeNav !== "cases" && <PlaceholderScreen activeNav={activeNav} onBack={() => { setActiveNav("cases"); setWorkspaceView("case"); }} />}
      {toast && <div className="toast" role="status"><CheckCircle2 />{toast}</div>}
    </div>
  );
}
