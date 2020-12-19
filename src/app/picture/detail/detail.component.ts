import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, switchMap, find } from 'rxjs/operators';
import { PictureService } from '../picture.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pictureList: any;
  currentPictureId: number | any;
  picture: any;
  p: any
  ac: any
  userList: any;
  constructor(
    private pictureS: PictureService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.route.params.pipe(
      tap((params) => {
        this.currentPictureId = +params.id;
      }),
      switchMap(() => this.pictureS.loadPicture())).subscribe(pictureList => {
        this.userList = pictureList
      })
      // this.pictureS.loadPicture().subscribe(userList => {
      //   this.userList = userList;
      // }
      // )
    }
    id(arr1:any,arr2:any){
     return (arr1==arr2)?true:false
    }
    
    

  }

