import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service'

@Component({
  selector: 'app-getPicture',
  templateUrl: './getPicture.component.html',
  styleUrls: ['./getPicture.component.css']
})
export class getPictureComponent implements OnInit {

  userList: any;
  constructor(
    private pictureS: PictureService,


  ) { }

  ngOnInit() {
    this.pictureS.loadPicture().subscribe(userList => {
      this.userList = userList;
    }
    )
  }
  newRow(arr:number){
    if(+arr%3==0){return true}else{return false}
  }
}






