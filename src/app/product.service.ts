import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
  restaurantId: number;
  vegetarian: boolean;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];

  constructor() {
    this.products = JSON.parse(`[{
      "id": 1,
      "name": "Leeks - Large",
      "price": "€1,18",
      "stock": 19,
      "restaurantId": 4,
      "vegetarian": true,
      "description": "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut"
    }, {
      "id": 2,
      "name": "Sword Pick Asst",
      "price": "€0,10",
      "stock": 40,
      "restaurantId": 10,
      "vegetarian": false,
      "description": "curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet"
    }, {
      "id": 3,
      "name": "Cookie - Oreo 100x2",
      "price": "€10,11",
      "stock": 15,
      "restaurantId": 10,
      "vegetarian": false,
      "description": "et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis"
    }, {
      "id": 4,
      "name": "Bagel - 12 Grain Preslice",
      "price": "€4,86",
      "stock": 36,
      "restaurantId": 4,
      "vegetarian": false,
      "description": "sit amet lobortis sapien sapien non mi integer ac neque duis"
    }, {
      "id": 5,
      "name": "Puree - Pear",
      "price": "€11,89",
      "stock": 48,
      "restaurantId": 1,
      "vegetarian": false,
      "description": "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue"
    }, {
      "id": 6,
      "name": "Oil - Shortening - All - Purpose",
      "price": "€8,85",
      "stock": 19,
      "restaurantId": 9,
      "vegetarian": true,
      "description": "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas"
    }, {
      "id": 7,
      "name": "Sesame Seed",
      "price": "€3,81",
      "stock": 12,
      "restaurantId": 8,
      "vegetarian": false,
      "description": "metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna"
    }, {
      "id": 8,
      "name": "Broom And Brush Rack Black",
      "price": "€11,47",
      "stock": 15,
      "restaurantId": 3,
      "vegetarian": true,
      "description": "pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id"
    }, {
      "id": 9,
      "name": "Wine - Magnotta - Belpaese",
      "price": "€11,27",
      "stock": 35,
      "restaurantId": 10,
      "vegetarian": false
    }, {
      "id": 10,
      "name": "Flower - Carnations",
      "price": "€1,80",
      "stock": 7,
      "restaurantId": 3,
      "vegetarian": true
    }, {
      "id": 11,
      "name": "Kellogs Special K Cereal",
      "price": "€2,81",
      "stock": 60,
      "restaurantId": 10,
      "vegetarian": false,
      "description": "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis"
    }, {
      "id": 12,
      "name": "Cheese - St. Andre",
      "price": "€10,18",
      "stock": 29,
      "restaurantId": 6,
      "vegetarian": false,
      "description": "suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium"
    }, {
      "id": 13,
      "name": "Cauliflower",
      "price": "€10,00",
      "stock": 49,
      "restaurantId": 1,
      "vegetarian": true
    }, {
      "id": 14,
      "name": "Shrimp - 16/20, Iqf, Shell On",
      "price": "€9,17",
      "stock": 58,
      "restaurantId": 2,
      "vegetarian": true,
      "description": "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse"
    }, {
      "id": 15,
      "name": "Mince Meat - Filling",
      "price": "€9,34",
      "stock": 30,
      "restaurantId": 9,
      "vegetarian": false,
      "description": "iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula"
    }, {
      "id": 16,
      "name": "Wine - Stoneliegh Sauvignon",
      "price": "€2,92",
      "stock": 62,
      "restaurantId": 8,
      "vegetarian": true,
      "description": "massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt"
    }, {
      "id": 17,
      "name": "Pastry - Mini French Pastries",
      "price": "€1,22",
      "stock": 59,
      "restaurantId": 5,
      "vegetarian": true,
      "description": "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non"
    }, {
      "id": 18,
      "name": "Chinese Foods - Chicken Wing",
      "price": "€8,38",
      "stock": 10,
      "restaurantId": 5,
      "vegetarian": false
    }, {
      "id": 19,
      "name": "Muffin Mix - Banana Nut",
      "price": "€9,82",
      "stock": 61,
      "restaurantId": 3,
      "vegetarian": false,
      "description": "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante"
    }, {
      "id": 20,
      "name": "Pork - Smoked Kassler",
      "price": "€10,61",
      "stock": 37,
      "restaurantId": 5,
      "vegetarian": true
    }, {
      "id": 21,
      "name": "Plate Pie Foil",
      "price": "€8,74",
      "stock": 60,
      "restaurantId": 10,
      "vegetarian": true,
      "description": "nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis"
    }, {
      "id": 22,
      "name": "Cheese - Cambozola",
      "price": "€4,19",
      "stock": 11,
      "restaurantId": 2,
      "vegetarian": false
    }, {
      "id": 23,
      "name": "Jam - Raspberry,jar",
      "price": "€4,08",
      "stock": 33,
      "restaurantId": 5,
      "vegetarian": true,
      "description": "suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac"
    }, {
      "id": 24,
      "name": "Wine - Cotes Du Rhone Parallele",
      "price": "€9,87",
      "stock": 10,
      "restaurantId": 4,
      "vegetarian": false,
      "description": "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque"
    }, {
      "id": 25,
      "name": "Honey - Comb",
      "price": "€0,17",
      "stock": 16,
      "restaurantId": 9,
      "vegetarian": false,
      "description": "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque"
    }, {
      "id": 26,
      "name": "Nacho Chips",
      "price": "€6,93",
      "stock": 52,
      "restaurantId": 2,
      "vegetarian": false,
      "description": "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc"
    }, {
      "id": 27,
      "name": "Mace Ground",
      "price": "€8,49",
      "stock": 22,
      "restaurantId": 8,
      "vegetarian": true
    }, {
      "id": 28,
      "name": "Beer - Upper Canada Light",
      "price": "€10,61",
      "stock": 8,
      "restaurantId": 1,
      "vegetarian": true,
      "description": "at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit"
    }, {
      "id": 29,
      "name": "Higashimaru Usukuchi Soy",
      "price": "€6,10",
      "stock": 5,
      "restaurantId": 1,
      "vegetarian": false,
      "description": "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue"
    }, {
      "id": 30,
      "name": "Sour Puss Sour Apple",
      "price": "€10,75",
      "stock": 36,
      "restaurantId": 9,
      "vegetarian": false,
      "description": "nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh"
    }, {
      "id": 31,
      "name": "Lentils - Green, Dry",
      "price": "€3,14",
      "stock": 56,
      "restaurantId": 9,
      "vegetarian": false,
      "description": "nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut"
    }, {
      "id": 32,
      "name": "Artichokes - Jerusalem",
      "price": "€5,95",
      "stock": 36,
      "restaurantId": 4,
      "vegetarian": false,
      "description": "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare"
    }, {
      "id": 33,
      "name": "Salsify, Organic",
      "price": "€1,10",
      "stock": 48,
      "restaurantId": 10,
      "vegetarian": false,
      "description": "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum"
    }, {
      "id": 34,
      "name": "Basil - Thai",
      "price": "€2,85",
      "stock": 20,
      "restaurantId": 5,
      "vegetarian": false,
      "description": "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada"
    }, {
      "id": 35,
      "name": "Puree - Mocha",
      "price": "€11,62",
      "stock": 34,
      "restaurantId": 5,
      "vegetarian": true,
      "description": "morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in"
    }, {
      "id": 36,
      "name": "French Pastry - Mini Chocolate",
      "price": "€2,99",
      "stock": 22,
      "restaurantId": 6,
      "vegetarian": false
    }, {
      "id": 37,
      "name": "Muffin Chocolate Individual Wrap",
      "price": "€7,00",
      "stock": 13,
      "restaurantId": 6,
      "vegetarian": false,
      "description": "velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante"
    }, {
      "id": 38,
      "name": "Beans - Soya Bean",
      "price": "€8,42",
      "stock": 16,
      "restaurantId": 7,
      "vegetarian": false,
      "description": "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices"
    }, {
      "id": 39,
      "name": "Bagel - Ched Chs Presliced",
      "price": "€7,43",
      "stock": 25,
      "restaurantId": 3,
      "vegetarian": false,
      "description": "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies"
    }, {
      "id": 40,
      "name": "Glycerine",
      "price": "€4,71",
      "stock": 55,
      "restaurantId": 4,
      "vegetarian": true,
      "description": "augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent"
    }, {
      "id": 41,
      "name": "Pasta - Fusili, Dry",
      "price": "€7,14",
      "stock": 17,
      "restaurantId": 9,
      "vegetarian": true
    }, {
      "id": 42,
      "name": "Corn Syrup",
      "price": "€9,08",
      "stock": 36,
      "restaurantId": 9,
      "vegetarian": false,
      "description": "vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit"
    }, {
      "id": 43,
      "name": "Flour - So Mix Cake White",
      "price": "€4,96",
      "stock": 27,
      "restaurantId": 2,
      "vegetarian": false,
      "description": "porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu"
    }, {
      "id": 44,
      "name": "Yoplait - Strawbrasp Peac",
      "price": "€8,85",
      "stock": 34,
      "restaurantId": 1,
      "vegetarian": false,
      "description": "maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas"
    }, {
      "id": 45,
      "name": "Tea - Mint",
      "price": "€5,74",
      "stock": 33,
      "restaurantId": 5,
      "vegetarian": true,
      "description": "amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed"
    }, {
      "id": 46,
      "name": "Wine - Cabernet Sauvignon",
      "price": "€3,55",
      "stock": 43,
      "restaurantId": 6,
      "vegetarian": true,
      "description": "morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras"
    }, {
      "id": 47,
      "name": "Lettuce - Arugula",
      "price": "€9,93",
      "stock": 12,
      "restaurantId": 10,
      "vegetarian": false,
      "description": "tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero"
    }, {
      "id": 48,
      "name": "Icecream Bar - Del Monte",
      "price": "€7,90",
      "stock": 1,
      "restaurantId": 3,
      "vegetarian": true,
      "description": "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget"
    }, {
      "id": 49,
      "name": "Muffin Batt - Carrot Spice",
      "price": "€5,54",
      "stock": 52,
      "restaurantId": 9,
      "vegetarian": true,
      "description": "pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis"
    }, {
      "id": 50,
      "name": "Wine - Crozes Hermitage E.",
      "price": "€6,69",
      "stock": 59,
      "restaurantId": 1,
      "vegetarian": true,
      "description": "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris"
    }]`);
  }

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product {
    return this.products.find(r => (r.id === id));
  }

  removeById(id: number): Product {
    return this.products.splice(this.products.findIndex(r => (r.id === id)), 1)[0];
  }
}
