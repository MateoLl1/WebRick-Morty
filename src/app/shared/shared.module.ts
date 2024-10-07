import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';
import { CustomSpanComponent } from './components/custom-span/custom-span.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ImageLoaderComponent,
    CustomSpanComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SidebarComponent,
    CustomSpanComponent
  ]
})
export class SharedModule { }
