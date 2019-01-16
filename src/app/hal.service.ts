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
	getDataTest(): Observable<any> {
		return this.http.get(endpoint + '?q=title_t:parole').pipe(
			map(this.extractData)
		);
	}

	private extractData(res: Response) {
		let body = res;
		return body || ['Doesnt', 'work'];
	}

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
