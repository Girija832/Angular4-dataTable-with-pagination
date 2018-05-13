import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserComponent} from "./user/user.component";


const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: ':name', component: UserDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class myRoutes {}
