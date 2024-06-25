import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { DistrictComponent } from './pages/district/district.component';
import { DistrictlistComponent } from './pages/districtlist/districtlist.component';



export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'district',
    component: DistrictComponent,
  },
  {
    path: 'districtlist/:title',
    component: DistrictlistComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
   },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'about', component: AboutComponent },
];
