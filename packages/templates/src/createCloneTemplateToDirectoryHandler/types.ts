export enum EnvironmentModes {
  'LOCAL' = 'LOCAL',
  'REMOTE' = 'REMOTE',
}

export type EnvironmentMode = keyof typeof EnvironmentModes;
