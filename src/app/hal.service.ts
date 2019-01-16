import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://api.archives-ouvertes.fr/search/UNIV-BORDEAUX/';
const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':  'application/json'
	})
};

@Injectable({
	providedIn: 'root'
})

export class HalService {

	constructor(private http: HttpClient) { }

	// test : recherche titre avec "parole" dedans
	getDataByTitle(title: string): Observable<any> {
		return this.http.get(endpoint + `?q=title_t:${title}&fl=*`).pipe(
			map(this.extractData)
		);
	}

	private extractData(res: Response) {
		let body = JSON.stringify(res);
		let jsonObj = JSON.parse(body);
		return jsonObj.response.docs || ['Doesnt', 'work'];
	}
}