import { Component } from '@angular/core';
/**
* This class represents the main application component.
*/
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent {
    private design_method: string;
    private element: string;
    private profile_type: string;
    private flexion_type: string;

    constructor() {
    }
    
    private setDesignMethod(method: string) {
        this.design_method = method;
    }

    private setElement(element: string) {
        this.element = element;
    }

    private setProfileType(profile_type: string) {
        this.profile_type = profile_type;
    }

    private setFlexionType(flexion_type: string) {
        this.flexion_type = flexion_type;
    }
}