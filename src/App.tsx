import { observer } from "mobx-react-lite";
import { Divider, Flex } from "antd";
import {
  ControlWithBarTest1,
  ControlWithBarTest2,
} from "./examples/ControlWithBar";
import {
  ControlAutocompleteTest1,
  ControlAutocompleteTest2,
} from "./examples/ControlAutocomplete";

const App = observer(() => (
  <Flex vertical gap={24} align="left" justify="left" style={{ margin: 24 }}>
    <Divider orientation="left">Control with buttons</Divider>

    <ControlWithBarTest1 />
    <ControlWithBarTest2 />

    <Divider orientation="left">Control with autocomplete</Divider>

    <ControlAutocompleteTest1 />
    <ControlAutocompleteTest2 />
  </Flex>
));

export default App;
