import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtistSearchComponent } from './artist-search/artist-search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistDetailsComponent,
    ArtistSearchComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
