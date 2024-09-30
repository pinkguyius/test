import { computed, flow, makeObservable, observable } from "mobx";
import { getCountryByName, CountryInfo } from "../../api/apiService";
import { debounce } from "../../utils";
import { ControlVM } from "../../viewmodels";

export enum FetchState {
  "done",
  "pending",
  "error",
}

export type Option = { label: string; value: string };

export class ControlAutocompleteVM extends ControlVM {
  search = '';
  timeout: NodeJS.Timeout | undefined;
  dropdownLimit;
  countries: CountryInfo[] = [];
  fetchState = FetchState.done;

  constructor({ dropdownLimit = 10 }) {
    super();
    this.dropdownLimit = dropdownLimit;
    makeObservable(this, {
      timeout: observable,
      dropdownLimit: observable,
      countries: observable,
      fetchState: observable,
      search: observable,
      options: computed
    });
  }

  get options() {
    return this.countries
      .map(({ name, fullName, flag }) => ({
        label: name,
        value: fullName,
        flag
      }))
      .splice(0, this.dropdownLimit);
  }

  onSearch(value: string) {
    this.search = value;
    this.debouncedGetCountries();
  }

  getCountries = flow(function* (this: ControlAutocompleteVM) {
    this.countries = [];
    this.fetchState = FetchState.pending;
    try {
      this.countries = yield getCountryByName(this.search);
      this.fetchState = FetchState.done;
    } catch (error) {
      this.fetchState = FetchState.error;
    }
  });

  debouncedGetCountries = debounce(this.getCountries.bind(this), 200)
}
