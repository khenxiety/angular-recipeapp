import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  id:any;
  data:any=[]

  ingredients:any=[]

  active:boolean=true

  constructor(private activatedRoute:ActivatedRoute) {
    this.data=localStorage.getItem('recipes')
    this.data=JSON.parse(this.data)


   }

  ngOnInit(): void {
    window.scroll({
      top:0
    })

    this.activatedRoute.params.subscribe(params=>{
      this.id=params['id']
    }
    )
    

    this.data=this.data.filter((item:any)=>item.id==this.id)[0]
    console.log(this.data)

    

    
  }

  nav(cond:boolean){
    // this.active=this.active==true ? false :true
    this.active=cond

  }

}
