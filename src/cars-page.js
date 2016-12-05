import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js'
import {application} from './app.js';

export class CarsPage extends Page {
    constructor() {
        super('Cars');
    }

    createElement() {
        super.createElement();

        let headers = 'License Make Model Miles'.split(' ');
        let t = new DataTable(headers, application.dataService.cars);
        t.appendToElement(this.element);

        this.createButton({
            styleString: 'margin-top: 15px;',
            title: 'Back',
            element: this.element,
            actionType: 'click',
            actionTarget: 'Home'
        });
    }

    getElementString() {
        return `<div style="margin: 20px;">
                    <h3>Cars</h3>
                </div>`;
    }
}