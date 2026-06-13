# Workflow Labels

The autonomous lifecycle is label-driven: opening or merging an issue/PR with a
given label fires the matching routine/skill. This repo follows travel-planner's
`ai:*` vocabulary (ADR 057) so it runs the same flow. The routines are not
wired up in `about` yet — these are the labels to create/apply when they are.

| Lifecycle role        | Label              | Fires / means                                |
| --------------------- | ------------------ | -------------------------------------------- |
| plan a SPEC           | `ai:plan`      | `draft-spec` — issue → SPEC PR               |
| plan an EPIC          | `ai:plan-epic` | `draft-epic` — issue → EPIC PR               |
| revise from feedback  | `ai:revise-now`| `revise-spec` — rewrite spec/epic PR         |
| implement             | `ai:implement` | `implement-spec` — merged spec PR → impl PR  |
| ready for review      | `ai:done`      | implementation PR awaiting human review      |
| blocked               | `ai:blocked`   | a routine hit a wall; needs a human          |
| already planned       | `ai:planned`   | issue already drafted; routine won't redo it |

When a skill mentions a lifecycle role, apply the corresponding label string.
