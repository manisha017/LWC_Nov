import { LightningElement } from 'lwc';

export default class ComponentRendering extends LightningElement {
    showMessage = false

    toggleMessage() {
        this.showMessage = !this.showMessage
    }
}