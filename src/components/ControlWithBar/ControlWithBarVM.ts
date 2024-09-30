import { makeObservable, observable } from "mobx";
import { ControlVM } from "../../viewmodels";
import { barConfig } from "./ControlWithBar.types";

export class ControlWithBarVM extends ControlVM {
  barConfig: barConfig;

  constructor({ barConfig }: { barConfig: barConfig }) {
    super();
    makeObservable(this, { barConfig: observable });
    this.barConfig = barConfig;
  }
}
