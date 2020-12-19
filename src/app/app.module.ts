import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from '@angular/fire'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';
import {HttpClientModule} from '@angular/common/http'
import { PictureModule } from './picture/picture.module';
import { getPictureComponent } from './picture/getPicture/getPicture.component';
import { PictureService } from './picture/picture.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    HttpClientModule,
    PictureModule
  ],
  providers: [PictureService],
  bootstrap: [AppComponent,
  HeaderComponent,
  getPictureComponent,
FooterComponent]
})
export class AppModule { }
