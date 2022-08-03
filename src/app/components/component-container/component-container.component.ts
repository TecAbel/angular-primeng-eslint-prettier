import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-container',
  templateUrl: './component-container.component.html',
  styleUrls: ['./component-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
