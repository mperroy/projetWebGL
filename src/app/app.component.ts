import { Component } from '@angular/core';
import { HalService } from './hal.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Collaboration centre de recherches';

	results: any = [];

	constructor(public hal: HalService) { }

	ngOnInit() { }

	getArticleByTitle(title: string) {
		this.results = [];
		this.hal.getDataByTitle(title).subscribe((data: {}) => {
			console.log(data);
			this.results = data;
		});
	}
}
