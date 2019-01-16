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

	ngOnInit() {
		this.getTest();
	}

	getTest() {
		this.results = [];
		this.hal.getDataTest().subscribe((data: {}) => {
			console.log(data);
			this.results = data;
		});
	}
}
