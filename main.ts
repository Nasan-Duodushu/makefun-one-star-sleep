// One-Star Review of Something Essential: a deadpan one-star review of
// sleep, 160 characters or fewer.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'One star. Sleep takes eight hours to install, crashes the moment you think about it, and the trial ends every morning at the worst possible time.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
