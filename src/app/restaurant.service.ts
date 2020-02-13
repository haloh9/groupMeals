import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: any[];

  constructor() {
    this.restaurants = JSON.parse(`[{
      "id": 1,
      "name": "Bogisich-Hartmann",
      "adress": "77 Helena Terrace",
      "minAmount": "€28,91",
      "reviews": 1.5,
      "partner": true,
      "sponsored": false,
      "delivery": "1:17",
      "description": "nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id"
    }, {
      "id": 2,
      "name": "Haley LLC",
      "adress": "6 Eggendart Way",
      "minAmount": "€8,63",
      "reviews": 3.5,
      "partner": true,
      "sponsored": true,
      "delivery": "1:43",
      "description": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et"
    }, {
      "id": 3,
      "name": "Wolff-Keebler",
      "adress": "26112 Bowman Junction",
      "minAmount": "€26,13",
      "reviews": 3.3,
      "partner": true,
      "sponsored": false,
      "delivery": "0:14",
      "description": "lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum"
    }, {
      "id": 4,
      "name": "Marvin, Quitzon and Hintz",
      "adress": "44 Hermina Pass",
      "minAmount": "€4,35",
      "reviews": 1.0,
      "partner": false,
      "sponsored": false,
      "delivery": "1:21",
      "description": "cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit"
    }, {
      "id": 5,
      "name": "Sporer-Hilll",
      "adress": "77499 Atwood Crossing",
      "minAmount": "€23,10",
      "reviews": 1.8,
      "partner": false,
      "sponsored": false,
      "delivery": "0:11",
      "description": "justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut"
    }, {
      "id": 6,
      "name": "Leuschke and Sons",
      "adress": "350 Novick Alley",
      "minAmount": "€4,32",
      "reviews": 2.9,
      "partner": false,
      "sponsored": true,
      "delivery": "1:25",
      "description": "volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut"
    }, {
      "id": 7,
      "name": "Jakubowski, West and Nitzsche",
      "adress": "4362 North Crossing",
      "minAmount": "€0,82",
      "reviews": 3.0,
      "partner": true,
      "sponsored": false,
      "delivery": "1:13",
      "description": "tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis"
    }, {
      "id": 8,
      "name": "King-Wehner",
      "adress": "62 Forest Run Way",
      "minAmount": "€3,13",
      "reviews": 4.1,
      "partner": true,
      "sponsored": true,
      "delivery": "1:31",
      "description": "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem"
    }, {
      "id": 9,
      "name": "Greenfelder-Pfannerstill",
      "adress": "489 Barby Trail",
      "minAmount": "€23,40",
      "reviews": 3.2,
      "partner": true,
      "sponsored": false,
      "delivery": "0:32",
      "description": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis"
    }, {
      "id": 10,
      "name": "Keeling, Brown and Tillman",
      "adress": "45 Morningstar Avenue",
      "minAmount": "€8,59",
      "reviews": 4.0,
      "partner": true,
      "sponsored": true,
      "delivery": "0:48",
      "description": "dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque"
    }]`);
  }

  getAll(): any[] {
    return this.restaurants;
  }

  getById(id: number): any {
    return this.restaurants.find(r => (r.id === id));
  }

  removeById(id: number): any {
    return this.restaurants.splice(this.restaurants.findIndex(r => (r.id === id)), 1);
  }
}
