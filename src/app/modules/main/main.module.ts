import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [ContentComponent]
})
export class MainModule { }
