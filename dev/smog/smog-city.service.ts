import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {SmogCityItem} from "./smog-city-item";
import {CITIES} from "./smog.data";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SmogCityService{
  constructor(private _http: Http){}

  addSmogCity(smogCityItem: SmogCityItem){
    CITIES.push(smogCityItem);
  }

  searchSmogCities() {
    this._http.get('http://api.gios.gov.pl/pjp-api/rest/station/findAll')
      .map(response=>response.json())
      .subscribe(
        data=>{
          // console.log(data);
          for(let city of data){
            this.addSmogCity(new SmogCityItem(city.id, city.city.name, city.city.commune.provinceName));
          }
        });
  }
}
