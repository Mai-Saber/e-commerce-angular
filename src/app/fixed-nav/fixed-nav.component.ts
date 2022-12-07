import { Component } from '@angular/core';

@Component({
  selector: 'app-fixed-nav',
  templateUrl: './fixed-nav.component.html',
  styleUrls: ['./fixed-nav.component.css']
})
export class FixedNavComponent {

cartNumber=localStorage.getItem('quantity')



}
