import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAll():Food[]{
    return sample_foods;
  }

  getFoodbyId(id:number): Food {
    return this.getAll().find(item => item.id == id)!;
  }

  getAllFoodByTag(tag:string):Food[]{
     return tag.toLowerCase() == 'all' ?  this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
}
