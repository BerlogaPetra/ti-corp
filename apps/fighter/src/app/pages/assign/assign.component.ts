import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ti-corp-assign',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
