import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  //Subscribe eh o metodo que quer o service da requisicao do array restaurants do banco
  ngOnInit() {
    this.restaurantsService.restaurants()     //retorna um Observable
    .subscribe(restaurants => this.restaurants = restaurants)
  }

}
