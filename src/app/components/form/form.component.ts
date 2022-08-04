import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  public submitted = false

  registerUserFm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  public fieldControl(key: string): FormControl {
    return this.registerUserFm.get(key) as FormControl
  }

  public submitUserFm(): void {
    this.submitted = true
  }
}
