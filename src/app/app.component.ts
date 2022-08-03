import { Component } from '@angular/core'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeng-test'
  constructor(private messageService: MessageService) {}

  showMsg(): void {
    this.messageService.add({ severity: 'success', summary: 'Todo ok' })
  }
}
