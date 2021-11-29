import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { departamentos } from "../departamentos/departamentos.model";
import { DepartamentosService } from "../departamentos/departamentos.service";
import { usuario } from "./usuario.model";

@Injectable({
  providedIn:'root'
})

export class UsuarioService{
baseUrl = environment.baseUrl;
private UsuarioLista:usuario[] = []
private usuarioSubject = new Subject<usuario[]>();



constructor(private http: HttpClient, private departamentosServise: DepartamentosService ){}


obtenerUsuarios(){
  this.http.get<usuario[]>(this.baseUrl + 'api/Usuarios1')
  .subscribe((data)=>{
    this.UsuarioLista = data;
    this.usuarioSubject.next([...this.UsuarioLista])
  });
}


obtenerdata(Nombres:string,Apellidos:string,Genero:string,Cedula:string,FechaDeNacimiento:string,Cargo:string,SupervisorInmediato:string,Nombre:string,Codigo:string){
const request ={
  Nombres: Nombres,
  Apellidos: Apellidos,
  Genero: Genero,
  Cedula: Cedula,
  FechaDeNacimiento: FechaDeNacimiento,
  Cargo: Cargo,
  SupervisorInmediato: SupervisorInmediato,
  Nombre: Nombre,
  Codigo:Codigo
};
this.http.get<usuario[]>(this.baseUrl + 'api/Usuarios1/Departamentos')
.subscribe((data)=>{
  this.UsuarioLista = data;
  this.usuarioSubject.next(this.UsuarioLista);

});

}
obtenerActualListenerData(){
  return this.usuarioSubject.asObservable();
}


obtenerActualListener(){
  return this.usuarioSubject.asObservable();
}
}
