import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {PictureService} from './picture/picture.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  constructor(firestore: AngularFirestore) {

  }
  
}
