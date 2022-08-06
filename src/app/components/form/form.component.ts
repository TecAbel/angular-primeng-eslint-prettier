import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Result } from 'src/app/interfaces/responses/characterslist'
import { RicknmortyApiService } from 'src/app/services/ricknmorty.api.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  public submitted = false
  public charlist: Result[] = []
  public charFiltered: Result[] = []

  constructor(private rnMorty: RicknmortyApiService) {}
  ngOnInit(): void {
    this.getCharacters()
  }

  registerUserFm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    character: new FormControl('', [Validators.required])
  })

  async getCharacters(): Promise<void> {
    this.charlist = await this.rnMorty.getCharacters()
  }

  public fieldControl(key: string): FormControl {
    return this.registerUserFm.get(key) as FormControl
  }

  public submitUserFm(): void {
    this.submitted = true
  }

  public complete(event: string) {
    if (event.length > 0) {
      this.charFiltered = this.charlist.filter(i =>
        i.name.toLocaleLowerCase().includes(event.toLocaleLowerCase())
      )
      return
    } else {
      this.charFiltered = this.charlist
      return
    }
  }
}
