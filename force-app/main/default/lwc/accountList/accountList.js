import getAccounts from '@salesforce/apex/accountController.getAccounts';
import { LightningElement,wire } from 'lwc';

export default class AccountList extends LightningElement {
    @wire(getAccounts)
    accounts;
 


}


//action item
//1.can we see data in html without using any additional logic(getter..)
//2.if not apart from getter method what are other approaches
//3.implement only one