public with sharing class accountController {
    @AuraEnabled
    public static List<Account> getAccounts(){
     return [SELECT Id, Name, Phone, Website FROM Account limit 5];
  }
}