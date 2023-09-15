import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerShutdownComponent } from './server-shutdown/server-shutdown.component';

const routes: Routes = [
  {path:'',component:HomeComponent,data : {title: 'StreamAR'}},
  {path:'serverShutdown',component:ServerShutdownComponent,data:{title:'Server Shutdown'}},
  {path:'error-404',component:PageNotFoundComponent,data:{title:'Error 404 - Page Not Found'}},
  {path:'**',pathMatch:'full',redirectTo:'error-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
