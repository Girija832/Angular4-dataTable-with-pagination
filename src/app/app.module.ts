import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterTextPipe } from './filter-text.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { myRoutes } from './app.routing';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { GetDataService } from './services/get-data.service';
import { PaginationService } from './services/pagination.service';


@NgModule({
  declarations: [
    AppComponent,
    FilterTextPipe,
    UserDetailsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    myRoutes,
  ],
  providers: [
    GetDataService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
