# On the Record

A public ledger of dated, attributable predictions and how they resolved. Working title.

## Why

Headline predictions ("10% chance AI kills humanity", "X will be the highest-paid job in three years") are rarely revisited. This site keeps the receipts: who said what, when, with what deadline, and what happened.

## Inclusion rules

An entry is published only if all of the following hold:

1. **Verbatim.** The claim is quoted, not paraphrased. Trimming with `[...]` is allowed; rewording is not.
2. **Attributable.** A named person or publication, with their role at the time.
3. **Standing.** The predictor had a reason to be listened to on the day they spoke, recorded as one of: `practitioner` (founder, executive or builder in the domain), `researcher` (scientist or academic with a publication record), `official` (elected or appointed public role), `commentator` (journalist, author, investor or broadcaster with a public audience), or `publication` (unsigned editorial). Popularity alone does not qualify; an anonymous viral post is excluded however many likes it got. Whether the person was speaking inside their own field is recorded separately, because that is often the finding.
4. **Public.** Said or written in a public venue. Private remarks reported second-hand are excluded (see Jobs/Doerr on Segway).
5. **Sourced.** A primary source (original text, video, transcript) or a contemporaneous report. Quote aggregators do not count. Social media posts count as primary but must carry an archive snapshot taken when the entry was added, and the account's reach at the time.
6. **Checkable.** Specific enough that an outcome could contradict it. Claims that fail this are kept and labelled `unfalsifiable`, because that label is itself the finding.
7. **Not a joke.** Obvious satire or self-described provocation is excluded unless it was published as a prediction under the author's name (see Krugman, kept with a note).

## Verification standard

An entry moves to `verified` only when a maintainer has personally opened the source and seen the claim in it. Acceptable sources, in order of preference:

1. The original text, recording or post (book scan, journal article, video, transcript, archived tweet).
2. A news report published at the time by a named outlet, quoting the claim.
3. A reproduction of the original by its publisher or a recognised archive (Internet Archive, Google Books full view, a quotation-research site that cites the primary source).

Not acceptable on their own: quote aggregators, listicles, Wikipedia without a checkable citation, a later recollection by a third party, or a paraphrase. If the only trail is a recollection years after the event, the entry stays `needs-verification` no matter how widely it is repeated.

If the exact wording differs between sources, the entry uses the wording from the highest-ranked source and says so in the source note.

## Verdicts

| Verdict | Meaning |
|---|---|
| `wrong` | Deadline passed or outcome clear; claim did not hold |
| `right` | Claim held |
| `partially-right` | Multiple claims in one statement with mixed outcomes |
| `unfalsifiable` | No outcome could contradict it, or a single probabilistic call that cannot be scored from one event |
| `not-yet-due` | Stated deadline is in the future |
| `unresolved` | Deadline passed but no agreed measure exists yet to score it |

## Editorial status

| Status | Meaning |
|---|---|
| `verified` | Source checked; publishable |
| `needs-verification` | Included in data, hidden on site until a source is checked |
| `rejected` | Fails a rule; kept in data and shown in a separate "Not included" section with the reason |

## Conflicts of interest

The seed dataset was compiled with help from an Anthropic model. Entries about Anthropic and its staff are flagged in `notes` for independent review. Any future entries about the maintainer's employers or investments should carry the same flag.

## Corrections

Every correction is logged in `CORRECTIONS.md` with date, entry id, what changed, and why. Nothing is silently edited.

## Files

- `data/schema.json` — JSON Schema for an entry
- `data/predictions.json` — the dataset
- `CORRECTIONS.md` — public corrections log

## Contributing

Submit entries as pull requests against `data/predictions.json`. Every new entry must have `status: needs-verification` and a source URL. Maintainers promote to `verified` after checking the source.
