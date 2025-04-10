import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
    private faceSnaps:FaceSnap[] = [
        new FaceSnap(
          'Darha',
          'Mon amour de tous les temps',
          'https://picsum.photos/1920/1083',
          new Date(),
          10,
        ),
        new FaceSnap(
          'Ricardo',
          'Mon Meilleur ami',
          'https://picsum.photos/1920/1081',
          new Date(),
          8,
        ).withLocation('En Amérique'),
        new FaceSnap(
          'Léa',
          'Ma petite sœur',
          'https://picsum.photos/1920/1082',
          new Date(),
          255,
        )

      ];

      getFaceSnaps(): FaceSnap[] {

        return [...this.faceSnaps];

      }

      getFaceSnapById( faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!foundFaceSnap){
          throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
      }

      snapFaceSnapById( faceSnapId : string, snapType: SnapType): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(snapType);
      }

      
      
  }
