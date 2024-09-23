import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DetailsComponent } from './components/details/details.component';
import { HeaderComponent } from './components/header/header.component';
import { TopToursComponent } from './components/top-tours/top-tours.component';
import { TourCardsComponent } from './components/tour-cards/tour-cards.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ReviewcardComponent } from './components/reviewcard/reviewcard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DetailsComponent,
    HeaderComponent,
    TopToursComponent,
    TourCardsComponent,
    OverviewComponent,
    ReviewcardComponent,
    ProfileComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
