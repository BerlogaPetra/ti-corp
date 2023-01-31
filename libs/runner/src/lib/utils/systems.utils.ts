import { nanoid } from '@reduxjs/toolkit';
import { Planet, System } from '@ti-corp/primitives';



export function createGalaxy(): { systems: System[]; planets: Planet[] } {
  return { systems: [], planets: [] };
}

export function create(
  name: string,
  params?: Omit<System, 'id' | 'name'>
): System {
  return {
    id: nanoid(),
    name,
    planetsIds: [],
    activatedFactionsIds: [],
    unitsIds: [],
    anomaly: null,
    ...params,
  };
}
