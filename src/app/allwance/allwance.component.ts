import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { AllwanceData, ApiResponse, RequestTable, TableColumn } from 'src/type';
import { AllwanceService } from './allwance.service';

@Component({
  selector: 'app-allwance',
  templateUrl: './allwance.component.html',
  styleUrls: ['./allwance.component.css']
})
export class AllwanceComponent implements OnInit {

  request: RequestTable = {
    pageNum: 1,
    pageSize: 10,
  }
  private _unsubscribeAll: Subject<null> = new Subject();
  isLoading: boolean = false;
  data: AllwanceData[] = [] ;
  displayedColumns: (keyof AllwanceData)[] = ['id', 'code', 'name'];
  dataSource = new MatTableDataSource<AllwanceData>();
  columns: TableColumn<AllwanceData>[] = [
    {
      name: 'id',
      label: 'ID'
    },
    {
      name: 'code',
      label: 'Code'
    },
    {
      name: 'name',
      label: 'Name'
    },
  ]
  constructor(
    private _allwanceService: AllwanceService,
  ) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser(): void {
    
    this._allwanceService.GetAllUser(this.request)
        .pipe()
        .subscribe((res: ApiResponse<AllwanceData[]>) => {
          console.log(res);
          this.isLoading = false;
          if(res.status !== '200') return;
          this.data= res.item;
          this.dataSource.data=res.item;
        })
  }
}
