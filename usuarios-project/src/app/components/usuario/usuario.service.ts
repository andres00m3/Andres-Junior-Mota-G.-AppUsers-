import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { usuario } from "./usuario.model";

@Injectable({
  providedIn:'root'
})

export class UsuarioService{
baseUrl = environment.baseUrl;
private UsuarioLista:usuario[] = []
private usuarioSubject = new Subject<usuario[]>();
constructor(private http: HttpClient){}


obtenerUsuarios(){
  this.http.get<usuario[]>(this.baseUrl + 'api/Usuarios1')
  .subscribe((data)=>{
    this.UsuarioLista = data;
    this.usuarioSubject.next([...this.UsuarioLista])
  });
}

obtenerActualListener(){
  return this.usuarioSubject.asObservable();
}
}
