import Link from "next/link";
import { published, rejected } from "@/lib/data";
import { Ledger } from "@/components/Ledger";
import { Entry } from "@/components/Entry";

export default function Home() {
  const counts = published.reduce<Record<string, number>>((acc, p) => {
    acc[p.verdict] = (acc[p.verdict] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <main>
      <section className="intro">
        <h1>Public predictions, quoted verbatim, scored when due.</h1>
        <p>
          A ledger of what confident people said would happen, when they said
          it, what deadline they gave, and what happened. Every quote is taken
          from a source the maintainer has opened. Nothing is paraphrased.
        </p>
        <p>
          {published.length} entries, {published[0].made.slice(0, 4)} back to{" "}
          {published[published.length - 1].made.slice(0, 4)}:{" "}
          {counts.wrong ?? 0} wrong, {counts.right ?? 0} right,{" "}
          {counts["partially-right"] ?? 0} partially right,{" "}
          {counts.unfalsifiable ?? 0} unfalsifiable,{" "}
          {(counts["not-yet-due"] ?? 0) + (counts.unresolved ?? 0)} pending.
          Selection is not random. <Link href="/method">Read how entries are chosen.</Link>
        </p>
      </section>

      <Ledger items={published} />

      <section className="rejected">
        <h2 className="section-head">Not included</h2>
        <p className="section-lede">
          Famous predictions that fail the sourcing standard. They are listed
          so the omission is visible and the reasoning can be checked.
        </p>
        {rejected.map((p) => (
          <Entry key={p.id} p={p} rejected />
        ))}
      </section>
    </main>
  );
}
