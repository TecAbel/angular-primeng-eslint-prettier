import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { MessageService } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { ToastModule } from 'primeng/toast'

import { ComponentContainerComponent } from './components/component-container/component-container.component'
import { FormComponent } from './components/form/form.component';
import { GoogleIconComponent } from './components/google-icon/google-icon.component';
import { InputGroupComponent } from './components/input-group/input-group.component'

@NgModule({
  declarations: [AppComponent, FormComponent, ComponentContainerComponent, GoogleIconComponent, InputGroupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
