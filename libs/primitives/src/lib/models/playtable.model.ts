import { TacticSteps } from '../enums/tactic-steps.enum';
import { UnitsUtils } from '../utils/units.utils';
import { LeadershipStrategy } from './leadership-strategy.model';
import { Darien } from './planets.models';
import { PlayerSheet } from './player-sheet.model';
import { Player } from './player.model';
import {
  Carrier,
  Destroyer,
  Fighter,
  Infantry,
  SpaceDock,
} from './ships.models';
import { WellonSystem } from './systems.models';

class PlayTable {
  constructor() {
    const firstPlayer = this.createFirstPlayer();

    // Game rounds
    // Round 1
    // Phases
    // Strategy Phase
    // Pick Strategy
    firstPlayer.pickStrategy(new LeadershipStrategy());
    // Action Phase
    // Perform actions: Strategy, Tactic, Component
    firstPlayer.performTactic(
      [
        {step: TacticSteps.Activation, payload: WellonSystem},
        // Update movement to exact destinations
        {step: TacticSteps.Move, payload: []},

      ]
    )

    // Status Phase

    // Agenda Phase - TODO
  }

  //   private runPhase() {}

  private createFirstPlayer() {
    const factionName = 'Yin';

    return new Player(
      factionName,
      [Darien],
      new PlayerSheet(),
      [
        ...UnitsUtils.buildUnits(factionName, Carrier, 2),
        ...UnitsUtils.buildUnits(factionName, Fighter, 4),
        ...UnitsUtils.buildUnits(factionName, Infantry, 4),
        UnitsUtils.buildUnit(factionName, Destroyer),
        UnitsUtils.buildUnit(factionName, SpaceDock),
      ],
      []
    );
  }
}
