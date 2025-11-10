import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
    constructor() {
        super();
        console.log('constructor 2');
    }

    connectedCallback() {
        console.log('connectedCallback 2');
    }

    renderedCallback() {
        console.log('renderedCallback 2');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback 2' );
    }

    errorCallback(error, stack) {
        console.log('errorCallback 2');
    }

}