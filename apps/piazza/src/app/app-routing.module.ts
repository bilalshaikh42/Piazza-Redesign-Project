import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ClassComponent } from './class/class.component';

const routes = [
  {
    path: ':id',
    component: ClassComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      { path: ':post', component: PostComponent },
    ],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
