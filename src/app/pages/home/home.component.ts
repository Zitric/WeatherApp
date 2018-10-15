import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  city = '';
  today = '';
  data: any[] = [];
  dayOne: any[] = [];
  dayTwo: any[] = [];
  dayThree: any[] = [];
  dayFour: any[] = [];
  dayFive: any[] = [];
  arrayOfDays: any[] = [];


  constructor( private _serviceWether: WeatherService ) { }

  emptyData() {
    this.city = '';
    this.today = '';
    this.data = [];
    this.dayOne = [];
    this.dayTwo = [];
    this.dayThree = [];
    this.dayFour = [];
    this.dayFive = [];
    this.arrayOfDays = [];
  }

  getDataWeather( city: string ) {

    this.emptyData();

    this._serviceWether.getWeatherCity( city )
      .subscribe( ( response ) => {

        this.city = city;
        this.data = response;
        this.today = response[0].dt_txt.split(' ')[0];

        this.fillDaysArrays( this.today );
        this.fillArrayOfDays();

      });
  }

  fillDaysArrays( day: string ) {

    let numberOfDay = 1;

    for ( const value of this.data ) {

      if ( day !== value.dt_txt.split(' ')[0]) {
        day = value.dt_txt.split(' ')[0];
        numberOfDay++;
      }

      switch ( numberOfDay ) {
        case 1: this.dayOne.push( value );   break;
        case 2: this.dayTwo.push( value );   break;
        case 3: this.dayThree.push( value ); break;
        case 4: this.dayFour.push( value );  break;
        case 5: this.dayFive.push( value );  break;
      }
    }
  }

  fillArrayOfDays() {

    this.arrayOfDays.push( this.dayOne );
    this.arrayOfDays.push( this.dayTwo );
    this.arrayOfDays.push( this.dayThree );
    this.arrayOfDays.push( this.dayFour );
    this.arrayOfDays.push( this.dayFive );
  }

}
