import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './Platform/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetailCvComponent } from './Platform/detail-cv/detail-cv.component';
import { PageDetailComponent } from './Platform/cv/page-detail/page-detail.component';
// import { DeleteCvComponent } from './Platform/cv/delete-cv/delete-cv.component';
import { AddCvComponent } from './Platform/cv/add-cv/add-cv.component';
import { ErrorComponent } from './Platform/cv/error/error.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';

export const routes: Routes = [
  {
    path: 'cv',
    component: CvComponent,
    children: [
      // {
      //   path: ':id',
      //   component: DetailCvComponent,
      // },
      {
        path: 'delete/:id',
        component: CvComponent,
      },
      {
        path: 'add/:id',
        component: AddCvComponent,
      },
    ],
  },
  {
    path: 'cv/:id',
    component: PageDetailComponent,
  },
  {
    path: '',
    redirectTo: 'cv',
    pathMatch: 'full',
  },
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

export const ROUTING = RouterModule.forRoot(routes);
