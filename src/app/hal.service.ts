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
	query: string;

	constructor(private http: HttpClient) { }

	getData(title: string, lab: string, firstDate: Date, lastDate: Date): Observable<any> {
		this.query = endpoint + '?q=';

		if(title){
			this.getDataByTitle(title);
		}

		if(lab){
			this.getDataByLab(lab);
		}

		if(firstDate || lastDate){
			this.getDataByDate(firstDate, lastDate);
		}

		return this.http.get(this.query + '&rows=50&fl=*').pipe(
			map(this.extractData)
		);
	}

	getDataByTitle(title: string) {
		this.query += `title_t:${title}`;
	}

	getDataByLab(lab:string) {
		this.query += `labStructName_t:"${lab}"`;
	}

	getDataByDate(firstDate: Date, lastDate: Date) {
		var fDate = new Date(firstDate);
		var lDate = new Date(lastDate);

		this.query += '&fq=submittedDate_tdate:'
		if(firstDate)
			this.query += `[${fDate.toISOString()} TO `;
		else
			this.query += '[* TO ';

		if(lastDate)
			this.query += `${lDate.toISOString()}]`;
		else
			this.query += 'NOW]';
	}

	private extractData(res: Response) {
		let body = JSON.stringify(res);
		let jsonObj = JSON.parse(body);
		let allDocs = jsonObj.response.docs;
		let jsonRes = [];
		for(let r of allDocs) {
			if (r.labStructName_s.length == 1) {
				//allDocs.splice(allDocs.indexOf(r), 1);
				jsonRes.push(r);
				let labStructName = [];
				for(let labName of r.labStructName_s) {
					if(!labStructName.includes(labName))
						labStructName.push(labName);
				}
				r.labStructName_s = labStructName; 
			}
		} 
		
		return jsonRes || [];
	}
}