import React from "react";
import { observer } from "mobx-react-lite";
import { ControlWithBarProps } from "./ControlWithBar.types";
import { Button, Flex, Input } from "antd";

export const ControlWithBar: React.FC<ControlWithBarProps> = observer(
  ({ vm: { value, onChange, barConfig }, vm }) => {
    return (
      <Flex gap={4}>
        {barConfig?.left?.map(({ id, text, onClick }) => (
          <Button type="primary" key={id} onClick={() => onClick(vm)}>
            {text}
          </Button>
        ))}

        <Input
          style={{ width: 300 }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {barConfig?.right?.map(({ id, text, onClick }) => (
          <Button type="primary" key={id} onClick={() => onClick(vm)}>
            {text}
          </Button>
        ))}
      </Flex>
    );
  }
);
