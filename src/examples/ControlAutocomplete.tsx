import { ControlAutocomplete } from "../components/ControlAutocomplete/ControlAutocomplete";
import { ControlAutocompleteVM } from "../components/ControlAutocomplete";
import { useMemo } from "react";

export const ControlAutocompleteTest1 = () => {
  const controlAutocompleteVM = useMemo(
    () => new ControlAutocompleteVM({ dropdownLimit: 10 }),
    []
  );

  return <ControlAutocomplete vm={controlAutocompleteVM} />;
};

export const ControlAutocompleteTest2 = () => {
  const controlAutocompleteVM = useMemo(
    () => new ControlAutocompleteVM({ dropdownLimit: 3 }),
    []
  );

  return <ControlAutocomplete vm={controlAutocompleteVM} />;
};
