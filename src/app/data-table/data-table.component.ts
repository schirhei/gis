import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'category', 'longitude', 'latitude', 'altitude', 'radius'];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('ngOninit');
    this.apiService.getUsers().subscribe(data => this.dataSource = new DataTableDataSource(this.paginator, this.sort, data));
    console.log('where am i');
  }
}
