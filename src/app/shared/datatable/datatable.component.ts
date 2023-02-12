import { DATA_MOVIES } from './module/movies';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, AfterViewInit {

  // o ViewChild serve para linkar que a paginação é de um outro componente (uma fonte de dados)
  // definindo que será paginator de tal dado

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  // public data = DATA_MOVIES;
  public data = new MatTableDataSource(DATA_MOVIES)
  displayedColumns = ['name', 'category', 'rating', 'year', 'director'];

  constructor() { }

  ngAfterViewInit(): void {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }

  ngOnInit() {
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLocaleLowerCase();
  }

}
