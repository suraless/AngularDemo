import { Component } from '@angular/core';

@Component({
  selector: 'app-root',// In the index.html file this selector is referred and hence, below templateUrl is pasted in the index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'AngularDemo';
}
