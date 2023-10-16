import { Chart } from 'chart.js';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule} from '@angular/material/list';

import { MatSelectModule } from '@angular/material/select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { TemplateComponent } from './template/template.component';
import { InterestComponent } from './interest/interest.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoanCalculatorComponent,
    AboutComponent,
    ContactComponent,
    // TemplateComponent,
    InterestComponent,
    NotFoundComponent,
    PaymentComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
