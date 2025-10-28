import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    a = 'Vaibhav';
    b = 'Girish';
    // reactive property bound to lightning-input
    storeValue = '';

    handleChangeEvent(event) {
        // update the bound property so UI reflects the change
        this.storeValue = event.target.value;
        // Optional debug:
        // console.log('New value:', this.storeValue);
    }
}
