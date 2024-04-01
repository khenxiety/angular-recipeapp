import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeNavComponent } from './components/home/home-components/recipe-nav/recipe-nav.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { FormsModule } from '@angular/forms';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { ScrollupButtonComponent } from './components/scrollup-button/scrollup-button.component';
import { LoaderComponent } from './shared/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilterPipe,
    FooterComponent,
    RecipeNavComponent,
    RecipeComponent,
    BackButtonComponent,
    ScrollupButtonComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig )),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
