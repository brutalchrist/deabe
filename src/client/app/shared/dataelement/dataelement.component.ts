import { Component, Input } from '@angular/core';
/**
* This class represents the main application component.
*/
@Component({
	moduleId: module.id,
	selector: 'sd-dataelement',
	templateUrl: 'dataelement.component.html',
	styleUrls: ['dataelement.component.css'],
})
export class DataelementComponent {
	@Input() private label: string;
	@Input() private type: string;
	@Input() private unit: string;

	constructor() {
	}
	
}