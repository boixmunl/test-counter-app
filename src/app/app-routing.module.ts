import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DownComponent } from './components/down/down.component';
import { ResetComponent } from './components/reset/reset.component';
import { UpComponent } from './components/up/up.component';

const routes: Routes = [
  { path: '', redirectTo: '/up', pathMatch: 'full' },
  { path: 'up', component: UpComponent },
  { path: 'down', component: DownComponent },
  { path: 'reset', component: ResetComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
