import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/model/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input() foodPagetags?: string[];
  @Input() justifyContent?: string = 'center';
  tags?:Tag[] = [];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    if(!this.foodPagetags)
    this.foodService.getAllTags().subscribe(tags=>{this.tags = tags});
  }
}
