import fs from "node:fs";
const d = JSON.parse(fs.readFileSync(new URL("../data/predictions.json", import.meta.url)));
const ids = new Set();
let bad = 0;
for (const e of d) {
  const req = ["id","claim","predictor","made","source","deadline","verdict","domain","status"];
  for (const k of req) if (!(k in e)) { console.error(e.id, "missing", k); bad++; }
  if (ids.has(e.id)) { console.error("duplicate id", e.id); bad++; }
  ids.add(e.id);
  if (e.status === "verified" && !e.source?.url) { console.error(e.id, "verified without source url"); bad++; }
  if (e.source?.type === "social-post" && e.status === "verified" && !e.source.archive_url) console.warn(e.id, "social post without archive_url");
  if (e.status === "rejected" && !e.rejection_reason) { console.error(e.id, "rejected without reason"); bad++; }
}
console.log(d.length, "entries,", bad, "errors");
process.exit(bad ? 1 : 0);
