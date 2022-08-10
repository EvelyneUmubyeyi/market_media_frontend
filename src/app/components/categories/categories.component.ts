import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  imageSrc = "C:/Users/HP/OneDrive/Desktop/test.jpg";
  // imageSrc = "../../../assets/Images/Logo2.png";
  // imageSrc="C:\\Users\\HP\\Documents\\Documents\\ASP\\MarketMedia\\wwwroot\\uploads\\jerry-wang-qBrF1yu5Wys-unsplash.jpg"


  categories: any;

  constructor(
    private httpService: HttpService,
    private sanitizer: DomSanitizer,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.getCategories();
  }


  sanitizeImageUrl(imageUrl: string): SafeUrl {
    // return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }

  getCategories(): void {
    this.httpService.getMainCategories()
      .subscribe(categories => this.categories = categories);
  }

  setCategoryId(categoryId: number): void {
    this.route.navigate(['/products'], { queryParams: { data: categoryId } });
    this.httpService.setCategoryId(categoryId);
  }

}
