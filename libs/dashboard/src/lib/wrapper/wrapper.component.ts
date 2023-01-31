import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ti-corp-wrapper]',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements AfterViewInit {
  constructor(private readonly eR: ElementRef) {}

  public ngAfterViewInit(): void {
    console.log(this.eR);
  }
}
