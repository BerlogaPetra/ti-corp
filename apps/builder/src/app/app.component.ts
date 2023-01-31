import { Component, HostListener } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { runner } from '@ti-corp/runner';
import { defer, map, shareReplay, tap, timer } from 'rxjs';
@Component({
  selector: 'ti-corp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    runner();
  }

  isOpen = true;
  #form: FormGroup | null = null;

  public readonly form$ = defer(() => {
    return timer(1000).pipe(
      map(() => {
        return new FormGroup({
          list: new FormArray([
            new FormGroup({ name: new FormControl() }),
            new FormGroup({ name: new FormControl() }),
          ]),
        });
      })
    );
  }).pipe(
    shareReplay(1),
    tap((form) => {
      this.#form = form;
    })
  );

  public formList$ = this.form$.pipe(
    map((form) => form.controls.list.controls),
    tap(() => console.log('Ping'))
  );

  public onSubmit() {
    console.log(this.#form);
  }

  public onToggle() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window')
  public handle() {
    console.log('Event');
  }
}
