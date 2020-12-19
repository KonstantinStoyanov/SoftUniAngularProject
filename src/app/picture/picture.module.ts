import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getPictureComponent } from './getPicture/getPicture.component';
import {AngularFirestoreModule} from '@angular/fire/firestore/'
import { PictureService } from './picture.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    getPictureComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers:[
    PictureService
  ]
}) 
export class PictureModule { 
 
}





