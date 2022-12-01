import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  // flights: Flight[] = [
  //   {
  //     origin: 'Miami',
  //     destination: 'Chicago',
  //     flightNumber: 345,
  //     depart: new Date('2020-02-25T23:18:21.932Z'),
  //     arrive: new Date('2020-02-25T23:21:21.932Z'),
  //     nonstop: true
  //   },
  //   {
  //     origin: 'Medan',
  //     destination: 'Bandung',
  //     flightNumber: 156,
  //     depart: new Date('2020-02-25T15:18:21.932Z'),
  //     arrive: new Date('2020-02-25T16:21:21.932Z'),
  //     nonstop: false
  //   },
  // ]; 
  constructor(private http: HttpClient) {
    this.backEndURL = this.getBackEndUrl();
  }
  backEndURL: string;

  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/query/${orig}/${dest}`);
  }

  getAllFlights(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights`);
  }

  getAllOrigins(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/cities/origins`);
  }

  getAllDestinations(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/cities/destinations`);
  }

  postFlight(flight: Flight) {
    return this.http.post(`http://localhost:3000/flights`, flight);
  }

  updateFlight(flight: Flight) {
    return this.http.post(`${this.backEndURL}/flights/${flight.id}/update`, flight);
  }

  deleteFlight(id: number) {
    return this.http.post(`${this.backEndURL}/flights/${id}/delete`, null);
  }
  getBackEndUrl(): string {
    const segements = document.URL.split('/');
    const reggie = new RegExp(/localhost/);
    return reggie.test(segements[2]) ? 'http://localhost:3000' : 'https://nestjs-typeorm-postgres.herokuapp.com';
  }
}
