import { ControlWithBar, ControlWithBarVM } from "../components/ControlWithBar";
import { useMemo } from "react";

export const ControlWithBarTest1 = () => {
  const controlWithBarVM = useMemo(
    () =>
      new ControlWithBarVM({
        barConfig: {
          right: [
            {
              id: "1",
              text: "Clear",
              onClick: ({ onChange }) => onChange(""),
            },
            {
              id: "2",
              text: "Set text",
              onClick: ({ onChange }) => onChange("Hello world!"),
            },
          ],
        },
      }),
    []
  );

  return <ControlWithBar vm={controlWithBarVM} />;
};

export const ControlWithBarTest2 = () => {
  const controlWithBarVM = useMemo(
    () =>
      new ControlWithBarVM({
        barConfig: {
          right: [
            {
              id: "1",
              text: "Alert",
              onClick: ({ value }) => alert(value),
            },
          ],
          left: [
            {
              id: "2",
              text: "Is Number",
              onClick: ({ value }) => {
                if (value.match(/^[0-9]{1,2}([,.][0-9]{1,2})?$/)) {
                  alert(value);
                }
              },
            },
          ],
        },
      }),
    []
  );

  return <ControlWithBar vm={controlWithBarVM} />;
};
