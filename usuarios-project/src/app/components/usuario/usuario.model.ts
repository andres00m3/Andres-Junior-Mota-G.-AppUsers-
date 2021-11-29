import { departamentos } from "../departamentos/departamentos.model";

export interface usuario{
  id:number;
  Nombres: string;
  Apellidos:String;
  Genero:string;
  Cedula:string;
  FechaDeNacimiento: string;
  Cargo:string;
  SupervisorInmediato:string;
  Data: departamentos[];

}
