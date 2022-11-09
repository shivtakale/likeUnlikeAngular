import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LikeDislikeComponent } from './shared/component/like-dislike/like-dislike.component';
import { HeartComponent } from './shared/component/heart/heart.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeDislikeComponent,
    HeartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
