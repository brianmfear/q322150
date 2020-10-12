public inherited sharing class Q322150 {
  @AuraEnabled(cacheable=true)
  public static Account[] getAccounts(Date inputDate) {
    return inputDate == null
      ? [SELECT Name, Industry FROM Account WHERE CreatedDate = LAST_N_DAYS:730]
      : [SELECT Name, Industry FROM Account WHERE CreatedDate >= :inputDate];
  }
}