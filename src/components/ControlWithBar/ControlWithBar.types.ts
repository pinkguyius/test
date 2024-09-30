import { ControlWithBarVM } from "./ControlWithBarVM";

export type barPosition = "left" | "right";

export type barButton = {
  id: string;
  text: string;
  onClick: (vm: ControlWithBarVM) => void;
};

export type barConfig = { [key in barPosition]?: barButton[] };

export interface ControlWithBarProps {
  vm: ControlWithBarVM;
}
