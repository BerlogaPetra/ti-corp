export interface Planet {
  readonly id: string;
  readonly name: string;
  readonly systemId: string;
  readonly resources: number;
  readonly influences: number;

  readonly trait: string | null
  readonly tech: string | null

  readonly unitsIds: string[]

  isExhausted: boolean;
}
