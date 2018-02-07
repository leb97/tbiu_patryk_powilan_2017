import {Component} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {SmogService} from "./smog.service";
import {SmogItem} from "./smog-item";
import {CITIES} from "./smog.data";
import {SmogCityItem} from "./smog-city-item";

@Component({
  selector: 'smog-search',
  template: `
    <section class="smog-search">
      <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <label for="city">City</label>
        <input ngControl="location" type="text" id="city" required>
        <button type="submit">Add City</button>
      </form>
    </section>
  `,
  providers: [SmogService]
})
export class SmogSearchComponent
{
  constructor(private _smogService: SmogService){}
  onSubmit(form: ControlGroup){
    let cityItem: SmogCityItem = CITIES.filter(SmogCityItem=>SmogCityItem.cityName  === form.value.location,)[0];
    // console.log(cityItem);
    this._smogService.SearchSmogData(cityItem.cityId)
      .subscribe(
        data=> {
          const smogItem = new SmogItem(cityItem.cityName, cityItem.cityProwince, data
            .no2IndexLevel.indexLevelName)
          this._smogService.addSmogItem(smogItem);
        }
      );

  }
}

