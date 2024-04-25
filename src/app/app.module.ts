import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisteredComponent } from './registered/registered.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { DeclinedComponent } from './declined/declined.component';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule }  from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { VerificationComponent } from './verification/verification.component';
import { ManageComponent } from './manage/manage.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { ReportComponent } from './report/report.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SideBarComponent,
    RegisteredComponent,
    AuthenticatedComponent,
    DeclinedComponent,
    LoginComponent,
    ContainerComponent,
    VerificationComponent,
    ManageComponent,
    CreateMemberComponent,
    UpdateMemberComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    HttpClientModule 

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
