import React from "react";
import { storiesOf } from "@storybook/react-native";

import { PrimaryText, SecondaryText, Heading } from "./index";

storiesOf("Typography", module).add("texts", () => (
  <>
    <Heading>Heading</Heading>
    <PrimaryText>PrimaryText</PrimaryText>
    <SecondaryText>SecondaryText</SecondaryText>
  </>
));
