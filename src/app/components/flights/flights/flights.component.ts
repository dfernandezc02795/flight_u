import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AirportsService } from 'src/app/services/airports/airports.service';
import { PlanesService } from 'src/app/services/planes/planes.service';
import { ReservesService } from 'src/app/services/reserves/reserves.service';
import { FlightsService } from 'src/app/services/flights/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flightForm: FormGroup;
  flightNumberForm: FormGroup;
  flightPassenger: FormGroup;
  planes: any;
  reserves: any;
  airports: any;
  flights: any;

  constructor(
    public fb: FormBuilder,
    public planesService: PlanesService,
    public airportsService: AirportsService,
    public reservesService: ReservesService,
    public flightsService: FlightsService
  ) { }

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      flightNumber: ['', Validators.required],
      flightType: ['', Validators.required],
      stateFlight: ['', Validators.required],
      planeId: ['', Validators.required],
      reserveId: ['', Validators.required],
      airportId: ['', Validators.required],
      passengerId: [''],
      seatId: [''],
      rateId:['']
    })

    this.flightNumberForm = this.fb.group({
      searchFlightNumber: ['', Validators.required]
    })

    this.flightPassenger = this.fb.group({
      passengerId: ['',Validators.required]
    })

    this.airportsService.getAllAirports().subscribe(resp => {
      this.airports = resp;
    }, error => { console.error(error) })
    
    this.reservesService.getAllReserves().subscribe(resp =>{
      this.reserves = resp;
    }, error => { console.error(error) })
    
    this.planesService.getAllPlanes().subscribe(resp => {
      this.planes = resp;
    }, error => { console.error(error) })

    this.flightsService.getAllFlights().subscribe(resp => {
      this.flights = resp;
    }, error => { console.error(error) })
    
  }

  onflightNumber(flightNumber: string): void{
    this.flightsService.getFlightNumber(flightNumber).subscribe(resp => {
      console.log("Entro" + flightNumber + " / " + resp)
      this.flights = resp;
    })
  }
  
}
