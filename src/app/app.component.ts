import { Component } from '@angular/core';
import { HalService } from './hal.service';

import { Collaboration } from './collaboration';

// declare var ol: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'Outil de recherche de collaborations entre laboratoires';

	clicked = false;
	
	results: any = [];

	collab: any = [];
	collabs: Collaboration[] = [];

	// OpenStreetMap
	// lngB: number = -0.57918;
	// latB: number = 44.837789;
	// map: any;

	constructor(public hal: HalService) { }

	// Init OSM
	ngOnInit() {
		// this.map = new ol.Map({
		// 	target: 'map',
		// 	layers: [
		// 	new ol.layer.Tile({
		// 		source: new ol.source.OSM()
		// 	})
		// 	],
		// 	view: new ol.View({
		// 		center: ol.proj.fromLonLat([this.lngB, this.latB]),
		// 		zoom: 12
		// 	})
		// });
	}

	private delay(ms: number) {
  		return new Promise(resolve => setTimeout(resolve, ms));
	}

	private async setCollabOfLab() {
 		await this.delay(1500);

		for(let r of this.results) {
			for(let lab of r.labStructName_s) {
				if(!this.labInCollabs(lab)){
					this.collabs.push({name:lab, collaborations:Object.assign([], r.labStructName_s)});
				}
			}
		}

		this.removeMainLabFromCollabs();
	}

    getArticles(title: string, lab: string, typeDoc: string, firstDate: Date, lastDate: Date) {
		this.results = [];
		this.collabs = [];

		if(title || lab || firstDate || lastDate){
			this.hal.getData(title, lab, typeDoc, firstDate, lastDate).subscribe((data: {}) => {
				//console.log(data);
				this.results = data;
			});	
		}
		this.setCollabOfLab();
	}

	labInCollabs(lab: string) {
		for(let c of this.collabs) {
			if(c.name == lab)
				return true;
		}
		return false;
	}

	removeMainLabFromCollabs() {
		for(let c of this.collabs) {
			c.collaborations.splice(c.collaborations.indexOf(c.name), 1);
		}
	}
}