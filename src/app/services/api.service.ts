import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers= new HttpHeaders({
    'Content-Type': 'application/json',
    
    
   
    
  })
  apikey='77e17a113c4e47a3b12227f98f0fe64d';

  constructor(private http:HttpClient) { }


  getRecipe(){
    return this.http.get(`https://api.spoonacular.com/recipes/random?apiKey=${this.apikey}&number=20`,{headers:this.headers});
  }
}
