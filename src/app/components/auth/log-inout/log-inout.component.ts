import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-inout',
  templateUrl: './log-inout.component.html',
  styleUrls: ['./log-inout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
