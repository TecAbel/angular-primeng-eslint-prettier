import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MessageService } from 'primeng/api'
import { firstValueFrom } from 'rxjs'
import {
  CharacterResponse,
  Result
} from '../interfaces/responses/characterslist'

@Injectable({
  providedIn: 'root'
})
export class RicknmortyApiService {
  baseUrl = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient, private msg: MessageService) {}

  async getCharacters(): Promise<Result[]> {
    return await firstValueFrom(
      this.http.get<CharacterResponse>(this.baseUrl + '/character')
    )
      .then(r => r.results)
      .catch(() => {
        this.msg.add({ severity: 'error', summary: 'Hubo un error inesperado' })
        return []
      })
  }
}
