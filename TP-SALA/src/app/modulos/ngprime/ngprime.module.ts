import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProgressBarModule} from 'primeng/progressbar';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem,Message,SelectItem} from 'primeng/api';
import {InputTextModule, ButtonModule, GrowlModule, AccordionModule} from 'primeng/primeng';
import { DropdownModule,PanelModule  } from 'primeng/primeng'
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';



@NgModule({
  imports: [
    CommonModule,ProgressBarModule,MenubarModule,InputTextModule, ButtonModule, GrowlModule, AccordionModule,DropdownModule,PanelModule,TabMenuModule,TableModule
  ],
  exports:[ProgressBarModule,MenubarModule,InputTextModule, ButtonModule, GrowlModule, AccordionModule,DropdownModule,PanelModule,TabMenuModule,TableModule]
  ,
  declarations: []
})
export class NgprimeModule { }
