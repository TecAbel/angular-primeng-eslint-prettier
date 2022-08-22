import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { MessageService } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { ToastModule } from 'primeng/toast'
import { AutoCompleteModule } from 'primeng/autocomplete'

import { ComponentContainerComponent } from './components/component-container/component-container.component'
import { FormComponent } from './components/form/form.component'
import { GoogleIconComponent } from './components/google-icon/google-icon.component'
import { InputGroupComponent } from './components/input-group/input-group.component'
import { InputErrorComponent } from './components/input-error/input-error.component'
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular'
import { CallbackComponent } from './components/auth/callback/callback.component'
import { OktaAuth } from '@okta/okta-auth-js';
import { LogInoutComponent } from './components/auth/log-inout/log-inout.component'

const oktaAuth = new OktaAuth({
  issuer: 'https://trial-5857165.okta.com/oauth2/default',
  clientId: '0oa20aqqq5WthnRkT697',
  redirectUri: window.location.origin + '/login/callback'
})

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ComponentContainerComponent,
    GoogleIconComponent,
    InputGroupComponent,
    InputErrorComponent,
    CallbackComponent,
    LogInoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutoCompleteModule,
    FormsModule,
    OktaAuthModule
  ],
  providers: [
    MessageService,
    {
      provide: OKTA_CONFIG,
      useValue: { oktaAuth }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
