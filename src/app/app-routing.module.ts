/**
 * Title: app-routing.module.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 10/01/2023
 * Description: Routing module for the application.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  { path: '',
    component: LoanCalculatorComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'contact',
    component: ContactComponent
  },
  { path: 'bar-chart',
  component: BarChartComponent},
  { path: '**',
    component: NotFoundComponent
  }
  //this last path has to be the last path in the array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
