import { Router } from '@angular/router';
import { GalleryComponent} from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
import { AuthenticationGuardService } from './app/authentication-guard.service';


export const appRoutes: Router = [
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuardService]},
  { path: 'upload', component:  UploadComponent, canActivate: [AuthenticationGuardService]},
  { path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuardService]},
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
];
