import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { OktaAuthStateService } from '@okta/okta-angular'
import { AuthState, IDToken } from '@okta/okta-auth-js'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackComponent implements OnInit {
  public full: AuthState | undefined

  constructor(
    private oktaService: OktaAuthStateService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.name = this.oktaService.authState$.pipe(
    //   // filter(
    //   //   (authState: AuthState) => !!authState && !!authState.isAuthenticated
    //   // ),
    //   map((authState: AuthState) => authState.idToken ?? '')
    // )
    this.oktaService.authState$.subscribe(val => {
      this.full = val
    })
  }

  async call(): Promise<void> {
    this.http
      .get('http://localhost:5266/Okta/whoami', {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.full?.accessToken?.accessToken}`
        })
      })
      .subscribe(val => {
        console.log(val)
      })
  }
}
