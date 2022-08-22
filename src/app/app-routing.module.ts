import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OktaCallbackComponent } from '@okta/okta-angular'
import { CallbackComponent } from './components/auth/callback/callback.component'

const routes: Routes = [
  {
    path: 'login/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'profile',
    component: CallbackComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
