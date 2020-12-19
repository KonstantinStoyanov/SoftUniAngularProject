import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getPictureComponent } from './getPicture/getPicture.component';
import { PictureService } from './picture.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { PictureRoutingModule } from './picture-routing.module';




@NgModule({
  declarations: [
    getPictureComponent,
    DetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    PictureRoutingModule
  ],
  exports:[getPictureComponent],
  providers:[
    PictureService
  ]
}) 
export class PictureModule { 
 
}





