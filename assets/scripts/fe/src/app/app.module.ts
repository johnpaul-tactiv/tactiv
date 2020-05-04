import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UIRouterModule } from '@uirouter/angular';

import { TokenService } from './commons/services/auth/interceptors/token.service';
import { APP_STATES } from './commons/utils/app.states';

import { UsersModule } from './components/users/users.module';
import { ProjectsModule } from './components/projects/projects.module';
import { PartialsModule } from './components/partials/partials.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot(APP_STATES),
    PartialsModule,
    UsersModule,
    ProjectsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
