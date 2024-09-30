import React from "react";
import { observer } from "mobx-react-lite";
import { ControlAutocompleteVM, FetchState } from "./ControlAutocompleteVM";
import { Col, Flex, Row, Select, Typography } from "antd";

export interface ControlAutocompleteProps {
  vm: ControlAutocompleteVM;
}

export const ControlAutocomplete: React.FC<ControlAutocompleteProps> = observer(
  ({ vm }) => (
    <Flex>
      <Select
        style={{ width: 700 }}
        showSearch
        notFoundContent={null}
        loading={vm.fetchState === FetchState.pending}
        options={vm.options}
        value={vm.value}
        onSearch={(val) => vm.onSearch(val)}
        onSelect={(val) => vm.onChange(val)}
        optionRender={(option) => (
          <Row gutter={8} align="middle">
            <Col flex="25px">
              <img src={option.data.flag} height="18" width="30" />
            </Col>

            <Col flex="auto">{option.data.label}</Col>

            <Col flex="none">
              <Typography.Text type="secondary">
                {option.data.value}
              </Typography.Text>
            </Col>
          </Row>
        )}
      />
    </Flex>
  )
);
