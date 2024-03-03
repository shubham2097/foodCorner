import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { Tag } from '../shared/model/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_TAGS_SEARCH_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_ID_URL, FOOD_SEARCH_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }
  
  getAll():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getFoodbyId(id:number):Observable<Food> {
    return this.http.get<Food>(FOOD_ID_URL + id);
  }

  getAllFoodByTag(tag:string):Observable<Food[]>{
     return this.http.get<Food[]>(FOODS_TAGS_SEARCH_URL + tag);
  }

  getAllFoodbySearchTerm(searchTerm:string):Observable<Food[]>{
    return this.http.get<Food[]>(FOOD_SEARCH_URL + searchTerm);
  }
}
