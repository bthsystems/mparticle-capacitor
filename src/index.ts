import { registerPlugin } from '@capacitor/core';

import type { mParticleCapacitorPlugin } from './definitions';

const mParticleCapacitor = registerPlugin<mParticleCapacitorPlugin>(
  'mParticleCapacitor',
  {
    web: () => import('./web').then(m => new m.mParticleCapacitorWeb()),
  },
);

export * from './definitions';
export { mParticleCapacitor };
