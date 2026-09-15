import type { Metadata } from "next";

export const metadata: Metadata = { title: "Method · On the Record" };

export default function Method() {
  return (
    <main className="prose">
      <h1>Method</h1>
      <p>
        Headline predictions are rarely revisited. A claim that AI has a ten
        percent chance of ending humanity, or that a particular job will be
        the best paid in three years, gets published, repeated, and forgotten.
        This site keeps the receipts.
      </p>

      <h2>What gets in</h2>
      <p>An entry is published only if all of the following hold.</p>
      <ol>
        <li>
          <b>Verbatim.</b> The claim is quoted, not paraphrased. Trimming with
          [...] is allowed. Rewording is not.
        </li>
        <li>
          <b>Attributable.</b> A named person or publication, with their role
          at the time.
        </li>
        <li>
          <b>Standing.</b> The predictor had a reason to be listened to when
          they spoke: a practitioner building in the field, a researcher with a
          publication record, an official in a public role, a commentator with
          a public audience, or an unsigned editorial voice. Popularity alone
          does not qualify. Whether the person was speaking inside their own
          field is recorded separately, because that is often the finding.
        </li>
        <li>
          <b>Public.</b> Said or written in a public venue. Private remarks
          reported second-hand are excluded.
        </li>
        <li>
          <b>Sourced.</b> The original text, recording or post; a news report
          published at the time; or a reproduction by the publisher or a
          recognised archive. Quote aggregators, listicles and later
          recollections do not count. If the only trail is someone
          remembering it years later, it stays out however widely it is
          repeated.
        </li>
        <li>
          <b>Checkable.</b> Specific enough that an outcome could contradict
          it. Claims that fail this are kept and labelled unfalsifiable,
          because that label is itself the finding.
        </li>
      </ol>

      <h2>Verdicts</h2>
      <table>
        <tbody>
          <tr><th>Wrong</th><td>Deadline passed or outcome clear; the claim did not hold.</td></tr>
          <tr><th>Right</th><td>The claim held.</td></tr>
          <tr><th>Partially right</th><td>Several claims in one statement with mixed outcomes.</td></tr>
          <tr><th>Unfalsifiable</th><td>No outcome could contradict it, or a single probabilistic call that cannot be scored from one event.</td></tr>
          <tr><th>Not yet due</th><td>The stated deadline is in the future.</td></tr>
          <tr><th>Unresolved</th><td>The deadline has passed but no agreed measure exists yet to score it.</td></tr>
        </tbody>
      </table>

      <h2>On probabilities</h2>
      <p>
        A forecast of 70 percent is not wrong when the 30 percent happens.
        It can only be judged across many forecasts. So a single probabilistic
        call is marked unfalsifiable, not wrong, unless the predictor
        themselves withdrew it or the mechanism it depended on never occurred.
        A claim of 99 percent with a bet attached is treated as a certainty.
      </p>
      <p>
        Extinction odds are a special case. If the event occurs there is no
        one to score it. If it does not, any estimate is consistent with that.
        There is no reference class of past extinctions to calibrate against.
        Such claims are recorded, with the comparators their authors give,
        and marked unfalsifiable.
      </p>

      <h2>Selection</h2>
      <p>
        The list is curated, not sampled. The seed set leans towards
        technology and economics because those are the fields where dated,
        quoted, resolved predictions are easiest to source, and it leans
        recent because more people make more public predictions now. The
        decade strip at the top of the ledger shows that skew rather than
        hiding it. Right predictions are included from the start so that the
        ratio is the argument, not the editing.
      </p>

      <h2>Corrections and conflicts</h2>
      <p>
        Every change to a published entry is logged with the date and reason.
        Nothing is silently edited. The seed dataset was compiled with help
        from an AI model made by Anthropic; entries about Anthropic and its
        staff are flagged for independent review.
      </p>

      <h2>Contribute</h2>
      <p>
        The data is a single JSON file with a schema, in the{" "}
        <a href="https://github.com/okori-valarian/on-the-record" rel="noreferrer">public repository</a>. New entries arrive as pull requests marked needs
        verification, with a source URL. A maintainer opens the source before
        anything is published.
      </p>
    </main>
  );
}
