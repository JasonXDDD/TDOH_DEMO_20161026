import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAJiNe6U2VrF33n74bqv_crihWuer6fh7I",
  authDomain: "tdoh-demo.firebaseapp.com",
  databaseURL: "https://tdoh-demo.firebaseio.com",
  storageBucket: "tdoh-demo.appspot.com",
  messagingSenderId: "390481359697"
};

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
