import { LightningElement, wire } from "lwc";
import getAccounts from "@salesforce/apex/Q322150.getAccounts";

export default class Q322150 extends LightningElement {
  @wire(getAccounts, { inputDate: "$inputDate" }) accounts;
  inputDate = new Date(new Date().setFullYear(new Date().getFullYear() - 2));
  columns = [
    { fieldName: "Name", label: "Name" },
    { fieldName: "Industry", label: "Industry" },
  ];
  updateDate(event) {
    this.inputDate = event.target.value;
  }
}