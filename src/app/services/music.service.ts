import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Music, MusicCadastrar } from "../models/music.model"
import { Observable } from "rxjs";

@Injectable ({
  providedIn: 'root'
})
export class MusicService {
  private url = `${environment.api}/musics`;


constructor(private httpClient:HttpClient) {}

obterMusicas(): Observable<Music[]> {
  return this.httpClient.get<Music[]>(this.url);
}

cadastrarMusica(musica: Music): Observable<Music> {
  musica.id = String(musica.id);
  return this.httpClient.post<Music>(this.url, musica);
}

editarMusica(musica: Music): Observable<Music> {
  musica.id = String(musica.id);
  return this.httpClient.put<Music>(`${this.url}/${musica.id}`, musica)
}

remover(id: number): Observable<void> {
  return this.httpClient.delete<void>(`${this.url}/${String(id)}`)
}

}
