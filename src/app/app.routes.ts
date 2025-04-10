import { Routes } from '@angular/router';
import { FaceSnapListeComponent } from './face-snap-liste/face-snap-liste.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

export const routes: Routes = [
    {path:'facesnaps/:id', component: SingleFaceSnapComponent},
    {path: 'facesnaps', component: FaceSnapListeComponent},
    {path: '', component: LandingPageComponent}
];
