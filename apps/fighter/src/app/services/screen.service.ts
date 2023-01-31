import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScreensType } from '../enums/screens.enum';

@Injectable({ providedIn: 'root' })
export class ScreenTypeService {
  private readonly screensSubject = new BehaviorSubject<ScreensType>('Setup');

  public readonly screen$ = this.screensSubject.asObservable();

  public setScreen(value: ScreensType) {
    this.screensSubject.next(value);
  }
}
