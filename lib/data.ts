import raw from "@/data/predictions.json";

export type Verdict =
  | "wrong"
  | "right"
  | "partially-right"
  | "unfalsifiable"
  | "not-yet-due"
  | "unresolved";

export type Status = "verified" | "needs-verification" | "rejected";

export type Standing =
  | "practitioner"
  | "researcher"
  | "official"
  | "commentator"
  | "publication";

export interface Prediction {
  id: string;
  claim: string;
  context?: string;
  predictor: {
    name: string;
    role_at_time: string;
    expertise_domain?: string;
    speaking_in_own_field?: boolean;
    standing: Standing;
    audience_at_time?: string;
  };
  made: string;
  venue?: string;
  source: {
    url: string;
    archive_url?: string;
    type: "primary" | "contemporaneous-report" | "secondary" | "social-post";
    note?: string;
  };
  deadline: { stated: boolean; date?: string; text?: string };
  domain: string;
  tags?: string[];
  verdict: Verdict;
  resolution?: { summary?: string; resolved_date?: string; source_url?: string };
  confidence_expressed?: string;
  status: Status;
  rejection_reason?: string;
  notes?: string;
  added?: string;
  last_reviewed?: string;
}

export const predictions = raw as Prediction[];

export const published = predictions
  .filter((p) => p.status === "verified")
  .sort((a, b) => a.made.localeCompare(b.made));

export const rejected = predictions
  .filter((p) => p.status === "rejected")
  .sort((a, b) => a.made.localeCompare(b.made));

export const VERDICT_LABEL: Record<Verdict, string> = {
  wrong: "Wrong",
  right: "Right",
  "partially-right": "Partially right",
  unfalsifiable: "Unfalsifiable",
  "not-yet-due": "Not yet due",
  unresolved: "Unresolved",
};

export const DOMAIN_LABEL: Record<string, string> = {
  technology: "Technology",
  economics: "Economics",
  medicine: "Medicine",
  energy: "Energy",
  demographics: "Demographics",
  geopolitics: "Politics",
  science: "Science",
  climate: "Climate",
  ai: "AI",
  other: "Other",
};

export const STANDING_LABEL: Record<Standing, string> = {
  practitioner: "Practitioner",
  researcher: "Researcher",
  official: "Official",
  commentator: "Commentator",
  publication: "Publication",
};

export function year(d: string): string {
  return d.slice(0, 4);
}

export function decade(d: string): string {
  return `${d.slice(0, 3)}0s`;
}

export function formatDate(d: string): string {
  const [y, m, day] = d.split("-");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  if (!m) return y;
  const mon = months[parseInt(m, 10) - 1];
  return day ? `${parseInt(day, 10)} ${mon} ${y}` : `${mon} ${y}`;
}
