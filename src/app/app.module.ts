import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallerComponent } from './caller/caller.component';
import { CallerListComponent } from './caller-list/caller-list.component';
import { CallerService} from './shared/caller.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CallerComponent,
    CallerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  providers: [CallerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
