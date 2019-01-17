import { Component } from '@angular/core';
import { HalService } from './hal.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Outil de recherche de collaborations entre laboratoires';

	clicked = false;

	results: any = [];

	constructor(public hal: HalService) { }

	ngOnInit() { }

	getArticles(title: string, lab: string, typeDoc: string, firstDate: Date, lastDate: Date) {
		this.results = [];

		if(title || lab || firstDate || lastDate){
			this.hal.getData(title, lab, typeDoc, firstDate, lastDate).subscribe((data: {}) => {
				console.log(data);
				this.results = data;
			});	
		}
	}
}