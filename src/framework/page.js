import {BaseElement} from '../ui/base-element.js';
import {ButtonFactory} from '../ui/factories/button-factory.js';

export class Page extends BaseElement {
    constructor(pageTitle) {
        super();
        this.pageTitle = pageTitle;
    }

    createButton(object) {
        return new ButtonFactory(object);
    }
}