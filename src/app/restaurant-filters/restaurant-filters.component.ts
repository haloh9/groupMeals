import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-filters',
  templateUrl: './restaurant-filters.component.html',
  styleUrls: ['./restaurant-filters.component.css']
})
export class RestaurantFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleSort(e: Event) {
    console.log('e', e);
    document.getElementById('sortDropdown').textContent = (e.target as HTMLButtonElement).textContent;
  }

}
