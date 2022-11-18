import { Injectable } from '@angular/core';
import {Flight} from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  flights: Flight[] = [
    {
      origin: 'Miami',
      destination: 'Chicago',
      flightNumber: 345,
      depart: new Date('2020-02-25T23:18:21.932Z'),
      arrive: new Date('2020-02-25T23:21:21.932Z'),
      nonstop: true
    },
    {
      origin: 'Medan',
      destination: 'Bandung',
      flightNumber: 156,
      depart: new Date('2020-02-25T15:18:21.932Z'),
      arrive: new Date('2020-02-25T16:21:21.932Z'),
      nonstop: false
    },
  ]; 
  constructor() { }
  getFlights() {
    return this.flights;
  }
  postFlight(flight: Flight) {

  }
  deleteFlight(id: number) {

  }
}
