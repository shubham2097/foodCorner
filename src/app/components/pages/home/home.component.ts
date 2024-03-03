import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods:Food[] = [];
  constructor(private fs: FoodService, private router: ActivatedRoute) { 
    let foodObservable: Observable<Food[]>;
    this.router.params.subscribe(params=>{
      if(params['searchItem']){
        foodObservable = this.fs.getAllFoodbySearchTerm(params['searchItem']);
      }else if(params['tag']){
        foodObservable = this.fs.getAllFoodByTag(params['tag']);
        console.log("hi")
      } else{
        foodObservable = this.fs.getAll();
      }
      foodObservable.subscribe((food)=>{
        this.foods = food;
      })
  })
  }

  ngOnInit(): void {
  }

}
