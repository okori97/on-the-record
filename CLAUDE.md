# On the Record

Ledger of dated, sourced public predictions. Next.js 16, no Tailwind, plain CSS in `app/globals.css`.

- Data lives in `data/predictions.json`; schema in `data/schema.json`. Run `npm run validate` after editing.
- Only `status: verified` entries render in the main list. `rejected` entries render under "Not included". `needs-verification` entries are hidden.
- Read `README.md` for inclusion rules and the verification standard before adding or editing entries. Quotes are verbatim; no adjectives in entry text.
- `/data` serves the JSON.
- Log any change to a published entry in `CORRECTIONS.md`.
