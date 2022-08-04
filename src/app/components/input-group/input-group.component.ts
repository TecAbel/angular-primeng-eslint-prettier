import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core'


@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputGroupComponent implements OnInit {
  @Input() labelFor: string | undefined
  @Input() labelName: string | undefined
  @Input() required = false
  @Input() icon: string | undefined

  constructor() { }

  ngOnInit(): void { }
}
