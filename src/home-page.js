import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {Page} from './framework/page.js';
import {application} from './app.js';

export class HomePage extends Page {
    constructor() {
        super('Home');
    }

    createElement() {
        super.createElement();

        // Image
        let i = new Image('../images/drone.jpg');
        i.appendToElement(this.element);

        // Style String
        let styleString = 'width: 300px; height: 80px; font-size: 14px;';

        // Button - Cars
        let b = new Button('Self Driving Cars');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Cars'));

        // Button - Drones
        b = new Button('Drones');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Drones'));
    }

    getElementString() {
        return `<div style="text-align: center;"></div>`;
    }
}