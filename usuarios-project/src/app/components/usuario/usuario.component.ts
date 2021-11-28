import { AfterViewInit, Component, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit, AfterViewInit {
  private usuarioSubscription: Subscription;
constructor(private UsuarioService:UsuarioService){}
  desplegarColumnas = ['id','nombres', 'apellidos', 'genero', 'cedula','fechaDeNacimiento','cargo','SupervisorInmediato','DepartamentosID'];
  dataSource = new MatTableDataSource<usuario>();
  @ViewChild(MatSort) ordenamiento: MatSort;

  ngOnInit():void{
this.UsuarioService.obtenerUsuarios();
  this.usuarioSubscription = this.UsuarioService
  .obtenerActualListener()
  .subscribe((usuario:usuario[])=>{
     this.dataSource.data = usuario;
  });
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.ordenamiento;
  }
  ngOnDestroy(){
    this.usuarioSubscription.unsubscribe;

    }
}
