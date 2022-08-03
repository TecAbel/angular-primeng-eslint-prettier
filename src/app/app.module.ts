import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ButtonModule } from 'primeng/button'
import { ToastModule } from 'primeng/toast'

import { FormComponent } from './components/form/form.component'
import { ComponentContainerComponent } from './components/component-container/component-container.component'
import { MessageService } from 'primeng/api'

@NgModule({
  declarations: [AppComponent, FormComponent, ComponentContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
