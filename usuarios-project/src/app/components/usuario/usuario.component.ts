import { AfterViewInit, Component, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { departamentos } from '../departamentos/departamentos.model';
import { DepartamentosService } from '../departamentos/departamentos.service';
import { usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit, AfterViewInit {
  private usuarioSubscription: Subscription;
  departamentos: departamentos[]=[];
  constructor(private UsuarioService:UsuarioService, private departamentosServices:DepartamentosService){}
  desplegarColumnas = ['id','nombres', 'apellidos', 'genero', 'cedula','fechaDeNacimiento','cargo','SupervisorInmediato','departamentosId','Nombre','codigo'];
  dataSource = new MatTableDataSource<usuario>();
  @ViewChild(MatSort) ordenamiento: MatSort;

  ngOnInit():void{
this.UsuarioService.obtenerUsuarios();
  this.usuarioSubscription = this.UsuarioService
  .obtenerActualListenerData()
  .subscribe((usuario:usuario[])=>{
     this.dataSource.data = usuario;
  });
 // this.departamentos = this.departamentosServices.obtenerDepartamentos();
}

  ngAfterViewInit(){
    this.dataSource.sort = this.ordenamiento;
  }
  ngOnDestroy(){
    this.usuarioSubscription.unsubscribe;

    }
}
