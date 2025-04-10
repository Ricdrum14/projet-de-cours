import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-liste',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-liste.component.html',
  styleUrl: './face-snap-liste.component.css'
})
export class FaceSnapListeComponent implements OnInit {

   faceSnaps!: FaceSnap[];
  
constructor(private faceSnapsService: FaceSnapsService){}
  
    ngOnInit(): void {
  
        this.faceSnaps = this.faceSnapsService.getFaceSnaps();

    }

}
