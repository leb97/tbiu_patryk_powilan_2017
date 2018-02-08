import {Injectable} from "angular2/core";
import {SMOG_INTEMS} from "./smog.data";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import 'rxjs/Rx';
import {SmogItem} from "./smog-item";

@Injectable()
export class SmogService
{
  constructor(private _http: Http){}
  getSmogItems(){
    return SMOG_INTEMS;
  }
  addSmogItem(smogItem: SmogItem){
    SMOG_INTEMS.push(smogItem);
  }
  deleteSmogItem(smogItem: SmogItem){
    SMOG_INTEMS.splice(SMOG_INTEMS.indexOf(smogItem), 1);
  }
  SearchSmogData(stationId: Number): Observable<any>{
    return this._http.get('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/' + stationId)
      .map(response=>response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json())
      });
  }
}
