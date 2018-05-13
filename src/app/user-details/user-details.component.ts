import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  url: string = 'https://api.github.com/users/';
  login: any;
  userAllDetails: any = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _HttpClient: HttpClient,
    private location: Location
  ) { }


  ngOnInit() {
    this._activatedRoute.params.subscribe(res => {
      this.login = res.name;
    });

    this.getUserDetails(this.login);
  }

  private getUserDetails(login: string): void {
    this._HttpClient.get(this.url + login).subscribe(res => {
        this.userAllDetails = res;
      },
      myError => {
        console.log('Error===========>  ', myError);
      });
  }
  goBack(): void {
    this.location.back();
  }
}
