import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-google-icon',
  templateUrl: './google-icon.component.html',
  styleUrls: ['./google-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleIconComponent {
  @Input() icon = ''
}
