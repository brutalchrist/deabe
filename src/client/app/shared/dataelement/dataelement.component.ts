import { Component, Input } from '@angular/core';

import { CoreService } from '../../services/core/core.service';
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
	@Input() private id: string;
	@Input() private label: string;
	@Input() private type: string;
	@Input() private unit: string;

	constructor(private coreService: CoreService) {
	}
	
	private sendValue(input: any) {
		console.log('value: ', input.value);
		this.coreService.addElement(this.id, parseFloat(input.value));
	}
}