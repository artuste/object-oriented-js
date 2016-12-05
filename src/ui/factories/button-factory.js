import {Button} from '../button.js';
import {application} from '../../app.js';

export class ButtonFactory {
    constructor(object) {
        this.styleString = object.styleString;
        this.title = object.title;
        this.element = object.element;
        this.actionType = object.actionType;
        this.actionExecute = object.actionExecute;
        this.actionTarget = object.actionTarget;

        this.createFactory();
    }

    createFactory() {
        let b = new Button(this.title);
        b.setStyleString(this.styleString);
        b.appendToElement(this.element);
        b.element[this.actionType](() => application.activateRoute(this.actionTarget));
    }
}