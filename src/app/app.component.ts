import { Component, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular'
import { OktaAuth } from '@okta/okta-auth-js'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeng-test'
  constructor(
    private messageService: MessageService,
    private router: Router,
    private oktaService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private auth: OktaAuth
  ) {}

  showMsg(): void {
    this.messageService.add({ severity: 'success', summary: 'Todo ok' })
  }

  async singIn(): Promise<void> {
    console.log('singIn')
    await this.auth.signInWithRedirect().then(() => this.router.navigate(['']))
  }
}
