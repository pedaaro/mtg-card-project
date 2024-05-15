import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MagicService {
  private baseUrl = 'https://api.magicthegathering.io/v1';

  constructor(private http: HttpClient) {}

  searchSets(name: string, block: string): Observable<any> {
    let url = `${this.baseUrl}/sets?`;
    if (name) {
      url += `name=${name}&`;
    }
    if (block) {
      url += `block=${block}&`;
    }
    return this.http.get<any>(url).pipe(
      map(response => {
        console.log('API Response:', response); 
        return response.sets;
      })
    );
  }

  getBooster(setCode: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sets/${setCode}/booster`);
  }
}
