import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './components/flights/flights/flights.component';
import { PassengerComponent } from './components/passenger/passenger/passenger.component';

const routes: Routes = [
  { path: 'flights', component: FlightsComponent },
  { path: 'passenger', component: PassengerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
