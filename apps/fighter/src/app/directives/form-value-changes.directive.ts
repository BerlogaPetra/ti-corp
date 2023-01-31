import {
    Directive,
    EventEmitter,
    Host,
    OnDestroy,
    OnInit,
    Optional,
    Output
} from '@angular/core';
import { FormControlDirective, FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  standalone: true,
  selector: '[tiCorpFormValueChanges]',
})
export class FormValueChangesDirective implements OnInit, OnDestroy {
  constructor(
    @Host() @Optional() private readonly formGroupDirective: FormGroupDirective,
    @Host()
    @Optional()
    private readonly formControlDirective: FormControlDirective
  ) {}

  @Output('tiCorpFormValueChanges') public readonly valueChange =
    new EventEmitter<unknown>();

  #subscription = new Subscription();

  public ngOnInit(): void {
    this.#subscribeValueChanges();
  }

  public ngOnDestroy(): void {
    this.#unsubscribeValueChanges();
  }

  #subscribeValueChanges(): void {
    this.#subscription.add(
      this.#targetControl.valueChanges?.subscribe((value) => {
        this.valueChange.emit(value);
      })
    );
  }

  #unsubscribeValueChanges(): void {
    this.#subscription.unsubscribe();
  }

  get #targetControl() {
    return this.formGroupDirective ?? this.formControlDirective;
  }
}
