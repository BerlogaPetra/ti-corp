export interface System {
  readonly id: string;
  readonly name: string;
  readonly planetsIds: string[];
  readonly anomaly: null;
  readonly unitsIds: string[];
  readonly activatedFactionsIds: string[];
}
