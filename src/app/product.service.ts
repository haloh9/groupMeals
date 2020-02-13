import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any[];

  constructor() {
    this.products = JSON.parse(`[{
      "id": 1,
      "name": "Wine - Placido Pinot Grigo",
      "price": "€8,74",
      "stock": "€28,51",
      "restaurantId": 3,
      "vegetarian": false,
      "vegan": true,
      "description": "amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus"
    }, {
      "id": 2,
      "name": "Wine - Remy Pannier Rose",
      "price": "€8,89",
      "stock": "€10,60",
      "restaurantId": 10,
      "vegetarian": false,
      "vegan": true,
      "description": "luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue"
    }, {
      "id": 3,
      "name": "French Pastries",
      "price": "€7,54",
      "stock": "€16,91",
      "restaurantId": 3,
      "vegetarian": false,
      "vegan": true,
      "description": "fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis"
    }, {
      "id": 4,
      "name": "Juice - Apple, 1.36l",
      "price": "€3,51",
      "stock": "€11,12",
      "restaurantId": 3,
      "vegetarian": false,
      "vegan": true
    }, {
      "id": 5,
      "name": "Bread - 10 Grain Parisian",
      "price": "€10,55",
      "stock": "€4,03",
      "restaurantId": 1,
      "vegetarian": true,
      "vegan": true
    }, {
      "id": 6,
      "name": "Bagel - Ched Chs Presliced",
      "price": "€10,98",
      "stock": "€2,34",
      "restaurantId": 5,
      "vegetarian": false,
      "vegan": false,
      "description": "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus"
    }, {
      "id": 7,
      "name": "Lamb Rack - Ontario",
      "price": "€4,97",
      "stock": "€20,11",
      "restaurantId": 1,
      "vegetarian": false,
      "vegan": true,
      "description": "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu"
    }, {
      "id": 8,
      "name": "Crab - Claws, 26 - 30",
      "price": "€10,38",
      "stock": "€20,11",
      "restaurantId": 5,
      "vegetarian": true,
      "vegan": false,
      "description": "aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis"
    }, {
      "id": 9,
      "name": "Artichokes - Knobless, White",
      "price": "€11,52",
      "stock": "€16,22",
      "restaurantId": 6,
      "vegetarian": true,
      "vegan": false,
      "description": "augue vel accumsan tellus nisi eu orci mauris lacinia sapien"
    }, {
      "id": 10,
      "name": "Pepper - Cayenne",
      "price": "€8,55",
      "stock": "€4,11",
      "restaurantId": 5,
      "vegetarian": true,
      "vegan": false,
      "description": "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla"
    }, {
      "id": 11,
      "name": "Cheese - Havarti, Roasted Garlic",
      "price": "€6,51",
      "stock": "€29,89",
      "restaurantId": 2,
      "vegetarian": false,
      "vegan": false
    }, {
      "id": 12,
      "name": "Pepper - Julienne, Frozen",
      "price": "€4,08",
      "stock": "€29,66",
      "restaurantId": 3,
      "vegetarian": true,
      "vegan": true,
      "description": "sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante"
    }, {
      "id": 13,
      "name": "Bread Base - Toscano",
      "price": "€7,93",
      "stock": "€22,25",
      "restaurantId": 7,
      "vegetarian": true,
      "vegan": true,
      "description": "habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum"
    }, {
      "id": 14,
      "name": "Lid - Translucent, 3.5 And 6 Oz",
      "price": "€0,53",
      "stock": "€7,02",
      "restaurantId": 4,
      "vegetarian": true,
      "vegan": true,
      "description": "mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et"
    }, {
      "id": 15,
      "name": "Wine - Red, Mosaic Zweigelt",
      "price": "€9,66",
      "stock": "€8,48",
      "restaurantId": 6,
      "vegetarian": false,
      "vegan": true
    }, {
      "id": 16,
      "name": "Sugar Thermometer",
      "price": "€2,75",
      "stock": "€16,50",
      "restaurantId": 6,
      "vegetarian": true,
      "vegan": true
    }, {
      "id": 17,
      "name": "Water - Perrier",
      "price": "€9,54",
      "stock": "€28,71",
      "restaurantId": 6,
      "vegetarian": true,
      "vegan": true,
      "description": "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec"
    }, {
      "id": 18,
      "name": "Daves Island Stinger",
      "price": "€7,42",
      "stock": "€28,72",
      "restaurantId": 2,
      "vegetarian": true,
      "vegan": false,
      "description": "augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst"
    }, {
      "id": 19,
      "name": "Numi - Assorted Teas",
      "price": "€5,10",
      "stock": "€21,10",
      "restaurantId": 5,
      "vegetarian": true,
      "vegan": false,
      "description": "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et"
    }, {
      "id": 20,
      "name": "Tea - Orange Pekoe",
      "price": "€6,01",
      "stock": "€26,10",
      "restaurantId": 2,
      "vegetarian": false,
      "vegan": true,
      "description": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla"
    }, {
      "id": 21,
      "name": "Pepper - Red Chili",
      "price": "€6,87",
      "stock": "€27,97",
      "restaurantId": 3,
      "vegetarian": false,
      "vegan": true
    }, {
      "id": 22,
      "name": "Onion - Dried",
      "price": "€6,83",
      "stock": "€2,03",
      "restaurantId": 2,
      "vegetarian": true,
      "vegan": false,
      "description": "porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis"
    }, {
      "id": 23,
      "name": "Prunes - Pitted",
      "price": "€7,58",
      "stock": "€27,14",
      "restaurantId": 8,
      "vegetarian": false,
      "vegan": true,
      "description": "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac"
    }, {
      "id": 24,
      "name": "Sage - Rubbed",
      "price": "€7,88",
      "stock": "€6,48",
      "restaurantId": 6,
      "vegetarian": false,
      "vegan": true,
      "description": "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus"
    }, {
      "id": 25,
      "name": "Pastry - Key Limepoppy Seed Tea",
      "price": "€5,29",
      "stock": "€17,11",
      "restaurantId": 3,
      "vegetarian": true,
      "vegan": true,
      "description": "non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam"
    }, {
      "id": 26,
      "name": "Juice - Grape, White",
      "price": "€11,14",
      "stock": "€25,50",
      "restaurantId": 8,
      "vegetarian": true,
      "vegan": false,
      "description": "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel"
    }, {
      "id": 27,
      "name": "Bok Choy - Baby",
      "price": "€10,18",
      "stock": "€9,54",
      "restaurantId": 1,
      "vegetarian": true,
      "vegan": false,
      "description": "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est"
    }, {
      "id": 28,
      "name": "Trout - Rainbow, Frozen",
      "price": "€0,76",
      "stock": "€1,89",
      "restaurantId": 8,
      "vegetarian": true,
      "vegan": false
    }, {
      "id": 29,
      "name": "Mushroom - Crimini",
      "price": "€2,92",
      "stock": "€27,29",
      "restaurantId": 7,
      "vegetarian": true,
      "vegan": true,
      "description": "nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante"
    }, {
      "id": 30,
      "name": "Butter - Salted, Micro",
      "price": "€0,19",
      "stock": "€2,13",
      "restaurantId": 6,
      "vegetarian": true,
      "vegan": true,
      "description": "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean"
    }, {
      "id": 31,
      "name": "Rabbit - Saddles",
      "price": "€2,16",
      "stock": "€18,79",
      "restaurantId": 3,
      "vegetarian": true,
      "vegan": false,
      "description": "potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem"
    }, {
      "id": 32,
      "name": "Potatoes - Pei 10 Oz",
      "price": "€3,23",
      "stock": "€12,60",
      "restaurantId": 5,
      "vegetarian": true,
      "vegan": false
    }, {
      "id": 33,
      "name": "Maintenance Removal Charge",
      "price": "€8,71",
      "stock": "€3,29",
      "restaurantId": 8,
      "vegetarian": false,
      "vegan": false
    }, {
      "id": 34,
      "name": "Flower - Daisies",
      "price": "€3,16",
      "stock": "€17,55",
      "restaurantId": 8,
      "vegetarian": false,
      "vegan": false
    }, {
      "id": 35,
      "name": "Watercress",
      "price": "€0,54",
      "stock": "€27,42",
      "restaurantId": 2,
      "vegetarian": false,
      "vegan": true,
      "description": "nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit"
    }, {
      "id": 36,
      "name": "French Pastries",
      "price": "€1,55",
      "stock": "€2,83",
      "restaurantId": 5,
      "vegetarian": false,
      "vegan": false,
      "description": "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet"
    }, {
      "id": 37,
      "name": "Wine - Riesling Dr. Pauly",
      "price": "€9,86",
      "stock": "€8,08",
      "restaurantId": 8,
      "vegetarian": true,
      "vegan": true,
      "description": "tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed"
    }, {
      "id": 38,
      "name": "Paper Towel Touchless",
      "price": "€9,05",
      "stock": "€5,95",
      "restaurantId": 8,
      "vegetarian": false,
      "vegan": true,
      "description": "lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in"
    }, {
      "id": 39,
      "name": "Cake - French Pear Tart",
      "price": "€8,09",
      "stock": "€27,99",
      "restaurantId": 1,
      "vegetarian": true,
      "vegan": false,
      "description": "ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus"
    }, {
      "id": 40,
      "name": "Wine - White Cab Sauv.on",
      "price": "€8,40",
      "stock": "€29,66",
      "restaurantId": 10,
      "vegetarian": true,
      "vegan": false,
      "description": "nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit"
    }, {
      "id": 41,
      "name": "Wine - Baron De Rothschild",
      "price": "€11,70",
      "stock": "€4,99",
      "restaurantId": 3,
      "vegetarian": true,
      "vegan": false
    }, {
      "id": 42,
      "name": "Ecolab - Solid Fusion",
      "price": "€11,52",
      "stock": "€11,72",
      "restaurantId": 3,
      "vegetarian": true,
      "vegan": false,
      "description": "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend"
    }, {
      "id": 43,
      "name": "Tart Shells - Sweet, 4",
      "price": "€6,19",
      "stock": "€0,64",
      "restaurantId": 3,
      "vegetarian": false,
      "vegan": true,
      "description": "congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis"
    }, {
      "id": 44,
      "name": "Salt - Seasoned",
      "price": "€0,61",
      "stock": "€15,78",
      "restaurantId": 7,
      "vegetarian": true,
      "vegan": false,
      "description": "platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo"
    }, {
      "id": 45,
      "name": "Shrimp - Black Tiger 6 - 8",
      "price": "€5,07",
      "stock": "€22,15",
      "restaurantId": 6,
      "vegetarian": true,
      "vegan": false,
      "description": "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat"
    }, {
      "id": 46,
      "name": "Nut - Pistachio, Shelled",
      "price": "€2,14",
      "stock": "€11,54",
      "restaurantId": 1,
      "vegetarian": false,
      "vegan": false,
      "description": "pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien"
    }, {
      "id": 47,
      "name": "Lettuce - Romaine",
      "price": "€3,73",
      "stock": "€7,83",
      "restaurantId": 5,
      "vegetarian": true,
      "vegan": false,
      "description": "condimentum neque sapien placerat ante nulla justo aliquam quis turpis"
    }, {
      "id": 48,
      "name": "Island Oasis - Mango Daiquiri",
      "price": "€7,37",
      "stock": "€6,86",
      "restaurantId": 1,
      "vegetarian": false,
      "vegan": false,
      "description": "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum"
    }, {
      "id": 49,
      "name": "Bread - French Baquette",
      "price": "€1,78",
      "stock": "€8,47",
      "restaurantId": 8,
      "vegetarian": true,
      "vegan": true,
      "description": "suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel"
    }, {
      "id": 50,
      "name": "Bread Roll Foccacia",
      "price": "€1,60",
      "stock": "€26,67",
      "restaurantId": 3,
      "vegetarian": true,
      "vegan": true
    }]`);
  }

  getAll(): any[] {
    return this.products;
  }

  getById(id: number): any {
    return this.products.find(r => (r.id === id));
  }

  removeById(id: number): any {
    return this.products.splice(this.products.findIndex(r => (r.id === id)), 1);
  }
}
