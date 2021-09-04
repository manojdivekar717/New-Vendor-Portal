import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveGrnComponent } from './grn/approve-grn/approve-grn.component';
import { GRNComponent } from './grn/grn.component';
import { ApproveinvoicesComponent } from './invoices/approveinvoices/approveinvoices.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NewsComponent } from './news/news.component';

import { PoliciesComponent } from './policies/policies.component';


import { AllpurchaseorderComponent } from './purchaseorder/allpurchaseorder/allpurchaseorder.component';
import { PurchaseorderDetailComponent } from './purchaseorder/purchaseorder-detail/purchaseorder-detail.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';

import { RFQComponent } from './rfq/rfq.component';
import { SendrfqComponent } from './rfq/sendrfq/sendrfq.component';
import { SideComponent } from './side/side.component';



const routes: Routes = [
         
  { path: '', redirectTo: '/side', pathMatch: 'full' },
    {path:'side',component:SideComponent},
    {path:'invoices',component:InvoicesComponent},
    {path:'policies',component:PoliciesComponent},
    {path:'news',component:NewsComponent},

    {path:'purchaseorder',component:PurchaseorderComponent},
    {path:'allpurchaseorder',component:AllpurchaseorderComponent},
    {path:'purchaseorderdetail',component:PurchaseorderDetailComponent},
    {path:'grn',component:GRNComponent},
    {path:'approvegrn',component:ApproveGrnComponent},
    {path:'approveinvoices',component:ApproveinvoicesComponent},
    {path:'rfq',component:RFQComponent},
    {path:'sendrfq',component:SendrfqComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
