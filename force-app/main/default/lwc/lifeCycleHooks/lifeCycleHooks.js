import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    constructor() {
        super();
        console.log('constructor');
    }

    connectedCallback() {
        console.log('connectedCallback');
    }

    renderedCallback() {
        console.log('renderedCallback');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }

    errorCallback(error, stack) {
        console.log('errorCallback');
    }

    // Initialise variables                     —		 constructor()
    // Fetch data or start processes    —  connectedcallback()
    // Work with DOM elements  —renderedcallback()
    // Clean up timers or listeners —disconnectedcallback()
    // Handle errors—errorCallback()


    // assignment-->
    // 1.if i am adding a child component what is the order of execution of life cycle hooks
    // 2.if i am removing a child component what is the order of execution of life cycle hooks
    // 3.why disconnectedCallback and errorcallback is not visible in console
}