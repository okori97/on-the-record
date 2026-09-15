import {
  type Prediction,
  VERDICT_LABEL,
  STANDING_LABEL,
  formatDate,
  year,
} from "@/lib/data";

function deadlineText(p: Prediction): string {
  if (!p.deadline.stated) return "No deadline given";
  const t = p.deadline.text ? `“${p.deadline.text}”` : "";
  const d = p.deadline.date ? ` → ${p.deadline.date}` : "";
  return `Deadline: ${t}${d}`;
}

export function Entry({ p, rejected = false }: { p: Prediction; rejected?: boolean }) {
  const own = p.predictor.speaking_in_own_field;
  return (
    <article className="entry" id={p.id}>
      <div className="year">{year(p.made)}</div>
      <div>
        <blockquote>{p.claim}</blockquote>
        <p className="who">
          <b>{p.predictor.name}</b>{" "}
          <span>· {p.predictor.role_at_time}</span>
        </p>
        <p className="meta">
          {formatDate(p.made)}
          {p.venue ? ` · ${p.venue}` : ""}
        </p>
        {!rejected && <p className="meta">{deadlineText(p)}</p>}
        {p.context && <p className="meta">{p.context}</p>}

        {rejected ? (
          <p className="outcome">
            <span className="reason">Not included · {p.rejection_reason}</span>
          </p>
        ) : (
          <p className="outcome">
            <span className={`verdict v-${p.verdict}`}>{VERDICT_LABEL[p.verdict]}</span>
            {p.resolution?.summary}
          </p>
        )}

        {p.notes && <p className="notes">{p.notes}</p>}

        <div className="badges">
          <span className="badge">{STANDING_LABEL[p.predictor.standing]}</span>
          {own === true && <span className="badge">Own field</span>}
          {own === false && <span className="badge warn">Outside own field</span>}
          {p.confidence_expressed && (
            <span className="badge">Confidence: {p.confidence_expressed}</span>
          )}
        </div>

        <p className="links">
          <a href={p.source.url} rel="noreferrer">
            Source ({p.source.type.replace("-", " ")})
          </a>
          {p.source.archive_url && (
            <a href={p.source.archive_url} rel="noreferrer">Archive</a>
          )}
          {p.resolution?.source_url && (
            <a href={p.resolution.source_url} rel="noreferrer">Outcome source</a>
          )}
          <a href={`#${p.id}`}>#</a>
        </p>
      </div>
    </article>
  );
}
