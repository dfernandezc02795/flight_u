import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


import { CountriesService } from 'src/app/services/countries/countries.service'; 
import { PassengersService } from 'src/app/services/passengers/passengers.service';


@Component({
  selector: 'app-root',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  passengerForm: FormGroup;
  passengerSearchingForm: FormGroup;
  updateForm: FormGroup;
  countries: any;
  passengers: any;
  langs: String[] = [];
  isAlert = false;
  alertMsg = "Pasajero no existe, debe registrarlo para hacer efectiva la busqueda";
  isAlertSuccess = false;
  alertMsgSuccess ="Pasajero encontrado"

  constructor(
    public fb: FormBuilder,
    private translateService: TranslateService,
    public countriesService: CountriesService,
    public passengersService: PassengersService,
    
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('es');
    this.translateService.addLangs(['es', 'en']);
    this.langs = this.translateService.getLangs();
  }

  ngOnInit(): void {
    this.passengerForm = this.fb.group({
      idPassenger: [''],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      typeDocument: ['', Validators.required],
      birthDate: ['', Validators.required],
      numberDocument: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.email],
      countryId: ['', Validators.required],
    })
    
    this.passengerSearchingForm = this.fb.group({
      searchPassenger: ['', Validators.required]
    })

    this.updateForm = this.fb.group({
      idPassenger: [''],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      numberDocument: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.email],
      countryId: ['', Validators.required],
    })

    this.countriesService.getAllCountries().subscribe(resp => {
      this.countries = resp;
      console.log(resp);
    }, error => { console.error(error) });

    this.passengersService.getAllPassengers().subscribe(resp => {
      this.passengers = resp;
    }, error => { console.error(error) });
    
    
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
  }

  save(): void {
    this.passengersService.savePassenger(this.passengerForm.value).subscribe(resp => {
      this.passengerForm.reset();
      this.passengers.push(resp);
      this.passengers.push();
    },
      error => { console.error(error) }
    )
  }

  editi(): void {
    this.passengersService.editPassenger(this.updateForm.value).subscribe(resp => {
      this.updateForm.reset();
      //alert("se actualizaron los datos del pasajero")
      this.passengers.push(resp);
    }, error => { console.error(error) }
    )
  }

  delete(passenger: any): void {
    this.passengersService.deletePassenger(passenger.idPassenger).subscribe(resp => {
      console.log(resp);
      if (resp == true) {
        this.passengers.pop(passenger);
      }
    })
  }

  edit(passenger: any) {
    this.updateForm.setValue({
      idPassenger: passenger.idPassenger,
      name: passenger.name,
      lastName: passenger.lastName,
      birthDate: passenger.birthDate,
      numberDocument: passenger.numberDocument,
      telephone: passenger.telephone,
      email: passenger.email,
      countryId: passenger.countryId,
    })
  }

  closeIsAlertWarning() {
    setTimeout(() => {
      this.isAlert = false;
      this.isAlertSuccess = false;
    }, 2500);
  }
  closeIsAlertSuccess() {
    setTimeout(() => {
      this.isAlertSuccess = false;
    }, 2000);
  }


  onSearch(numberDocument: string): void {
    this.passengersService.searchPassenger(numberDocument).subscribe(resp => {
      if (resp == "") {
        this.isAlert = true;
        this.alertMsg;
        this.closeIsAlertWarning();
        // setTimeout(() => document.getElementById('alert').style.display='none',5000);
      } else {
        this.isAlertSuccess = true;
        this.alertMsgSuccess;
        this.closeIsAlertSuccess();
      }
      this.passengers = resp;
    })

  }
}
