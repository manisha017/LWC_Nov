import { LightningElement,api } from 'lwc';

export default class DecoratorsChildComp extends LightningElement {
    @api message = 'hello from child'

    
}