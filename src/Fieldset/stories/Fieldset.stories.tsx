import { Fieldset, IFieldset } from "..";
import { props, parameters } from "../props";
import { StyledChildren } from "./styles";

const story = {
  component: Fieldset,
  title: "input/Fieldset",
  tags: ["autodocs"],
  parameters,
  argTypes: {
    ...props,
  },
};

export const Default = (args: IFieldset) => (
  <Fieldset {...args}>
    <StyledChildren />
  </Fieldset>
);

Default.args = {
  legend: "User Information",
  spacing: "wide",
};

export default story;
