"use client";

import { useMemo, useState } from "react";
import {
  type Prediction,
  type Verdict,
  VERDICT_LABEL,
  DOMAIN_LABEL,
  decade,
} from "@/lib/data";
import { Entry } from "./Entry";

const VERDICTS: Verdict[] = [
  "wrong",
  "right",
  "partially-right",
  "unfalsifiable",
  "not-yet-due",
  "unresolved",
];

export function Ledger({ items }: { items: Prediction[] }) {
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [domain, setDomain] = useState<string | null>(null);
  const [outside, setOutside] = useState(false);

  const domains = useMemo(
    () => Array.from(new Set(items.map((p) => p.domain))).sort(),
    [items],
  );

  const filtered = items.filter(
    (p) =>
      (!verdict || p.verdict === verdict) &&
      (!domain || p.domain === domain) &&
      (!outside || p.predictor.speaking_in_own_field === false),
  );

  const decades = useMemo(() => {
    const all = items.map((p) => decade(p.made));
    const first = parseInt(all[0], 10);
    const last = parseInt(all[all.length - 1], 10);
    const out: { label: string; total: number; shown: number }[] = [];
    for (let d = first; d <= last; d += 10) {
      const label = `${d}s`;
      out.push({
        label,
        total: all.filter((x) => x === label).length,
        shown: filtered.filter((p) => decade(p.made) === label).length,
      });
    }
    return out;
  }, [items, filtered]);
  const max = Math.max(...decades.map((d) => d.total), 1);

  function jump(label: string) {
    const el = document.getElementById(`decade-${label}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  let lastDecade = "";

  return (
    <>
      <div className="decades">
        {decades.map((d) => (
          <button
            key={d.label}
            type="button"
            className={`bar ${d.shown ? "active" : ""}`}
            title={d.shown ? `${d.label}: ${d.total} entries` : `${d.label}: none shown`}
            disabled={!d.shown}
            onClick={() => jump(d.label)}
          >
            <i style={{ height: `${(d.total / max) * 100}%` }} />
          </button>
        ))}
      </div>
      <div className="decade-labels">
        {decades.map((d) => (
          <button
            key={d.label}
            type="button"
            disabled={!d.shown}
            onClick={() => jump(d.label)}
          >
            {d.label.slice(0, 4)}
          </button>
        ))}
      </div>

      <div className="filters">
        <div className="group">
          <button className={!verdict ? "on" : ""} onClick={() => setVerdict(null)}>
            All
          </button>
          {VERDICTS.map((v) => (
            <button
              key={v}
              className={verdict === v ? "on" : ""}
              onClick={() => setVerdict(verdict === v ? null : v)}
            >
              {VERDICT_LABEL[v]}
            </button>
          ))}
        </div>
        <div className="group">
          {domains.map((d) => (
            <button
              key={d}
              className={domain === d ? "on" : ""}
              onClick={() => setDomain(domain === d ? null : d)}
            >
              {DOMAIN_LABEL[d] ?? d}
            </button>
          ))}
        </div>
        <div className="group">
          <button className={outside ? "on" : ""} onClick={() => setOutside(!outside)}>
            Outside own field
          </button>
        </div>
        <span className="count">
          {filtered.length}/{items.length}
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className="empty">Nothing matches.</p>
      ) : (
        filtered.map((p) => {
          const dec = decade(p.made);
          const first = dec !== lastDecade;
          lastDecade = dec;
          return (
            <div key={p.id} id={first ? `decade-${dec}` : undefined} className={first ? "decade-start" : undefined}>
              {first && <div className="decade-marker">{dec}</div>}
              <Entry p={p} />
            </div>
          );
        })
      )}
    </>
  );
}
