import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { departamentos } from "./departamentos.model";

@Injectable({
  providedIn:'root'
})

export class DepartamentosService{
baseUrl = environment.baseUrl;
private DepartamentosLista:departamentos[] = []
private DepartamentosSubject = new Subject<departamentos[]>();
constructor(private http: HttpClient){}


obtenerDepartamentoss(){
  this.http.get<departamentos[]>(this.baseUrl + 'api/Departamentos')
  .subscribe((data)=>{
    this.DepartamentosLista = data;
    this.DepartamentosSubject.next([...this.DepartamentosLista])
  });
}

obtenerActualListener(){
  return this.DepartamentosSubject.asObservable();
}
}
