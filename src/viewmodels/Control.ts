import { action, makeObservable, observable } from "mobx";

export class ControlVM {
  value = "";

  constructor() {
    makeObservable(this, { value: observable, onChange: action.bound });
  }

  onChange(value: string) {
    this.value = value;
  }
}
