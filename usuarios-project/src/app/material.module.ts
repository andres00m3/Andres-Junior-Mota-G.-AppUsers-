import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
imports:[MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule],
exports:[MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule]
})

export class MaterialModule{};
