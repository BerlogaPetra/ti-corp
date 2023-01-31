import { nanoid } from '@reduxjs/toolkit';
import { Planet, PLANETS, System } from '@ti-corp/primitives';

type Galaxy = { systems: System[]; planets: Planet[] };

type Flatten<Type> = Type extends Array<infer U> ? U : Type;

function createRawPlanet(rawPlanet: Flatten<typeof PLANETS>): Planet {
  return {
    id: nanoid(),
    influences: rawPlanet.Influence,
    resources: rawPlanet.Resource,
    trait: rawPlanet.Trait,
    tech: rawPlanet.Tech,
    unitsIds: [],
    isExhausted: false,
    name: rawPlanet.Name,
    systemId: '',
  };
}

function createRawSystem(systemName: string, planetId: string): System {
  return {
    id: nanoid(),
    activatedFactionsIds: [],
    anomaly: null,
    name: systemName,
    planetsIds: [planetId],
    unitsIds: [],
  };
}

export function create(): Galaxy {
  return PLANETS.reduce(
    (base, planet) => {
      const currentPlanet = createRawPlanet(planet);

      let currentSystem = base.systems.find(
        (system) => system.name === planet.Tile
      );

      const isCurrentSystemExist = !!currentSystem;

      if (currentSystem) {
        Object.assign(currentSystem, {
          planetsIds: [...currentSystem.planetsIds, currentPlanet.id],
        });
      } else {
        currentSystem = createRawSystem(planet.Tile, currentPlanet.id);
      }

      Object.assign(currentPlanet, { systemId: currentSystem.id });

      return {
        ...base,
        planets: [...base.planets, currentPlanet],
        systems: isCurrentSystemExist
          ? base.systems
          : [...base.systems, currentSystem],
      } as Galaxy;
    },
    { systems: [] as System[], planets: [] as Planet[] }
  );
}
