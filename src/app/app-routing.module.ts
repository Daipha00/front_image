import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { ManageComponent } from './manage/manage.component';
import { ReportComponent } from './report/report.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'container',component:ContainerComponent,
  children:[
      {path:'create-member',component:CreateMemberComponent},
      {path:'update-member',component:UpdateMemberComponent},
      {path:'side-bar/manage',component:ManageComponent},
      {path:'side-bar/report',component:ReportComponent},
      {path:'main',component:MainComponent}
    ]
} 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
