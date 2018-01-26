import { Injectable } from '@angular/core';
import { Config } from '../../shared/config/env.config';
/**
* This class represents the service component.
*/
@Injectable()
export class CoreService {
	private elements: any;
	/* CONSTRUCTOR */
	constructor() {
		this.elements = {};
	}
	
	public addElement(id: string, element: number) {
		this.elements[id] = element;
		console.log('elements: ', this.elements);
	}
}