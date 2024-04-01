import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];
  vegie: any;

  text: any;
  searching: boolean = false;

  isLoading: boolean = false;

  constructor(private api: ApiService, private router: Router) {}
  config1: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    freeMode: true,

    pagination: { clickable: true },
    scrollbar: { draggable: true },

    breakpoints: {
      '@0.10': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '@0.50': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  };
  config2: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // arrows

    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      '@0.10': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@0.50': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };

  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange(event: any) {
    console.log(event[0].progress);

    // if(event[0].progress==1){
    //   alert('last Reached')
    // }
  }

  ngOnInit(): void {
    this.getData();

    window.scroll({
      top: 0,
    });
  }

  input() {
    if (this.text) {
      this.recipes = this.recipes.filter((item: any) =>
        item.title.toLowerCase().includes(this.text.toLowerCase())
      );

      this.searching = true;
    } else {
      this.inputClear();
    }
  }

  inputClear() {
    this.text = '';
    this.ngOnInit();
    this.searching = false;
  }

  getData() {
    this.isLoading = true;
    const check = localStorage.getItem('recipes');
    if (check) {
      this.recipes = JSON.parse(check);
      console.log(this.recipes);
      this.vegie = this.recipes.filter((item: any) => item.vegetarian == true);
      console.log(this.vegie);
      this.isLoading = false;
    } else {
      this.api.getRecipe().subscribe((res: any) => {
        console.log(res.recipes);

        this.recipes = res.recipes;
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
        this.isLoading = false;
      }),
        (err: any) => {
          console.log(err);
        };
    }
  }

  toDetails(recipe: any) {
    console.log(recipe.id);

    this.router.navigate(['/recipe', recipe.id]);
  }
}
