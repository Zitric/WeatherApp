import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {

  private apiId = '0231d32cb4a73e59c5d017a499e31c38';

  constructor( private http: HttpClient ) { }

  getWeatherCity( city: string ) {

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ city }&units=metric&appid=${ this.apiId }`;

    return this.http.get( url )
      .pipe( map( response => response['list'] ));
  }

}
