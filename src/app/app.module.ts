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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ComponentContainerComponent,
    GoogleIconComponent,
    InputGroupComponent
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
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
