import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, map } from 'rxjs';
import { Side } from '../models/side.model';
import { FleetUtilsService } from './fleet-utils.service';

@Injectable({ providedIn: 'root' })
export class SideService {
  constructor(private readonly fleetUtilsService: FleetUtilsService) {}

  readonly #attacker = new BehaviorSubject<Side | undefined>(undefined);

  readonly #defender = new BehaviorSubject<Side | undefined>(undefined);

  public readonly attacker$ = this.#attacker.asObservable();

  public readonly defender$ = this.#defender.asObservable();

  public readonly existingAttacker$ = this.attacker$.pipe(filter(Boolean));

  public readonly existingDefender$ = this.defender$.pipe(filter(Boolean));

  public readonly isReadyToRoll$ = combineLatest([
    this.attacker$,
    this.defender$,
  ]).pipe(
    map(([attacker, defender]) => {
      return [attacker, defender].every(Boolean);
    })
  );

  public readonly isReadyToAFB$ = combineLatest([
    this.existingAttacker$,
    this.existingDefender$,
  ]).pipe(
    map(([attacker, defender]) => {
      return [attacker, defender].some((side) => {
        return this.fleetUtilsService.checkIsAbleToAFB(side);
      });
    })
  );

  public setAttacker(value: Side | undefined): void {
    this.#attacker.next(value);
  }

  public setDefender(value: Side | undefined): void {
    this.#defender.next(value);
  }
}
