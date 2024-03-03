import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods:Food[] = [];
  constructor(private fs: FoodService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
        if(params['searchItem']){
          this.foods = this.fs.getAllFoodbySearchTerm(params['searchItem']);
        }else if(params['tag']){
          this.foods = this.fs.getAllFoodByTag(params['tag']);
          console.log("hi")
        } else{
          this.foods = this.fs.getAll();
        }
    })
  }

}
