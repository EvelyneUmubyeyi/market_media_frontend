import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() images:carouselImage[] =[]
  
  selectedIndex = 0;
  selectImage(index:number):void{
    this.selectedIndex = index;
  }

}
