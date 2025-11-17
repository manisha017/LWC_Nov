public with sharing class accountController {
    @AuraEnabled
    public static List<Account> getAccounts(){
     return [SELECT Id, Name, Phone, Website FROM Account limit 5];
  }
}


//1.code which we have written in accountList.js is it enough to fetch data automatically?
//if not then what changes needs to be done and why..