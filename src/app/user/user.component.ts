import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private totalList = [];
  searchText = '';
  pager: any = {};
  pagedItems: any = [];

  constructor(private _getDataService: GetDataService, private _pagerService: PaginationService) {
  }

  ngOnInit() {
    this._getDataService.getList().subscribe(data => {
      this.totalList = data;
      this.setPage(1);
    });

  }
  setPage(page: number) {

    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this._pagerService.getPager(this.totalList.length, page);

    // get current page of items
    this.pagedItems = this.totalList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
