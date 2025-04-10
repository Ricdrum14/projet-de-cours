import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.css'
})
export class SingleFaceSnapComponent implements OnInit {

   faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasLiked!:boolean;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute){}

  ngOnInit(): void {
      
      this.prepareInterface();
      this.getFaceSnap();
  }

  
  onSnap(): void{
    if(this.userHasLiked){
      this.unSnap();
    }
    else{
      this.snap();
    }
    
  }
  
  snap(): void{
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = "unLike";
    this.userHasLiked = true;
  }
  
  unSnap(): void{
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unSnap');
    this.snapButtonText = "like";
    this.userHasLiked = false;
  }
  
  private prepareInterface(){
    this.snapButtonText = 'like';
    this.userHasLiked = false;
  }

  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}
