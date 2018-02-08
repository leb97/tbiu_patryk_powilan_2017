import {Component, Input} from "angular2/core";
import {SmogItem} from "./smog-item";
import {SmogService} from "./smog.service";

@Component({
  selector: 'smog-item',
  template: `
    <article class="smog-element">
      <div class="col-1">
        <h3>{{ smogItem.cityName }}</h3>
        <p class="province">{{ smogItem.province }}</p>
      </div>
      <div class="col-2">
        <span class="info">stan powietrza: {{ smogItem.info }}</span>
      </div>
      <span class="close" (click)="onCloseSmogitem($event, smogItem)">X</span>
    </article>
  
  `,
  styleUrls: ['src/css/smog-item.css'],
  // inputs: ['smogItem: item']

})
export class SmogItemComponent{
  @Input('item') smogItem: SmogItem;

  constructor(private _smogService: SmogService){}

  onCloseSmogitem(event: Event, smogItem: SmogItem){
    this._smogService.deleteSmogItem(smogItem);
  }


}
