
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {SelectionModel} from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MultiComboInputInputTagsMode } from 'smart-webcomponents-angular';

 
export interface PeriodicElement {
  SR_NO:number;
  PURCHASE_ORDER_NO:number;
 
  RELEASE_ON:string;
 
  PO_AMOUNT:number;
 
  ACTION:string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {SR_NO:1, PURCHASE_ORDER_NO: 1234,   RELEASE_ON:'30/12/2021',PO_AMOUNT:1234, ACTION:'edit'},
  {SR_NO:2, PURCHASE_ORDER_NO: 1234,   RELEASE_ON:'30/12/2021',PO_AMOUNT:1234, ACTION:'edit'},
  {SR_NO:3, PURCHASE_ORDER_NO: 1234,   RELEASE_ON:'30/12/2021',PO_AMOUNT:1234, ACTION:'edit'},
  {SR_NO:4, PURCHASE_ORDER_NO: 1234,   RELEASE_ON:'30/12/2021',PO_AMOUNT:1234, ACTION:'edit'},
  {SR_NO:5, PURCHASE_ORDER_NO: 1234,   RELEASE_ON:'30/12/2021',PO_AMOUNT:1234, ACTION:'edit'},
 
];


@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements AfterViewInit {


 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
constructor(private breakpointObserver: BreakpointObserver ) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  
  displayedColumns: string[] = [ 'SR_NO', 'PURCHASE_ORDER_NO', 'RELEASE_ON','PO_AMOUNT','ACTION'];
  selection = new SelectionModel<PeriodicElement>(true, []);
  dataSource = new MatTableDataSource<PeriodicElement>( ELEMENT_DATA) ;
  checked = false;
  
 


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  head: any;
  ELEMENT_DATA: any;
 

  
  ngOnInit(): void {
 
    setTimeout(()=> this.dataSource.paginator=this.paginator);
  }

  applyFilter(filterValue:string) { 
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 

}
