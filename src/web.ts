import { WebPlugin } from '@capacitor/core';

import type { mParticleCapacitorPlugin } from './definitions';

export class mParticleCapacitorWeb
  extends WebPlugin
  implements mParticleCapacitorPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
