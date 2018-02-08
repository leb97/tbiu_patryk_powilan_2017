import {Component} from 'angular2/core';
import {SmogListComponent} from "./smog/smog-list.component";
import {SmogSearchComponent} from "./smog/smog-search.component";

@Component({
    selector: 'my-app',
    template: `
      <header>
        <article class="header-class">
          <h1>czym oddycham?</h1>
          <h2>sprawdz warunki smogowe w swoim miescie</h2>
        </article>

      </header>
      <smog-search></smog-search>
      <smog-list></smog-list>
    `,
  directives: [SmogListComponent, SmogSearchComponent]
})
export class AppComponent {

}
