import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
imports:[MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatSortModule],
exports:[MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatSortModule]
})

export class MaterialModule{};
