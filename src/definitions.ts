export interface mParticleCapacitorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
