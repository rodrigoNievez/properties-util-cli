import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single/single.component';
import { MultipleComponent } from './multiple/multiple.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SingleComponent, MultipleComponent]
})
export class MergeModule { }
