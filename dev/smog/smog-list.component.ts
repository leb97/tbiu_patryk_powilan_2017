import {Component, OnInit} from "angular2/core";
import {SmogItemComponent} from "./smog-item.component";
import {SmogItem} from "./smog-item";
import {SMOG_INTEMS} from "./smog.data";
import {SmogService} from "./smog.service";
import {SmogCityService} from "./smog-city.service";

@Component({
  selector: 'smog-list',
  template: `
    <section class="smog-list">
      <smog-item *ngFor="#smogItem of smogItems" [item]="smogItem"></smog-item>
    </section>
  `,
  directives: [SmogItemComponent],
  // providers: [SmogService]
})
export class SmogListComponent implements OnInit {
  smogItems: SmogItem[];
  constructor(private _smogService: SmogService, private _smogCityService: SmogCityService){};
  ngOnInit(): any {
    this.smogItems = this._smogService.getSmogItems();
    this._smogCityService.searchSmogCities();
  }
}
