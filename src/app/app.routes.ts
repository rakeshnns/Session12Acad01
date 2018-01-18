import { Routes } from '@angular/router';

import { AppAddComponent, AppViewComponent } from './app.addview.component';


export const routes: Routes = [
  { path: '', component: AppAddComponent },
  { path: 'view', component: AppViewComponent }
];
