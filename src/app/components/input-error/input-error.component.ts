import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input
} from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputErrorComponent implements AfterContentChecked {
  @Input() errorMessage = ''
  @Input() error: 'required' | 'email' = 'required'
  @Input() formControl: FormControl = new FormControl()

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterContentChecked(): void {
    this.cd.detectChanges()
  }
}
