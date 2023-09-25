import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
  { path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
