import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName: string) : Observable<WeatherData>
  {
    return this.http.get<WeatherData>('https://weatherapi-com.p.rapidapi.com/current.json',{
      headers : new HttpHeaders()
      .set('X-RapidAPI-Key','7064d1a7bcmshd4c668cf85c7c5bp167420jsn450bf0b05f0b')
      .set('X-RapidAPI-Host','weatherapi-com.p.rapidapi.com'),
      params : new HttpParams()
      .set('q',cityName)
    })
  }

}
