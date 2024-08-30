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

const Default = (args: IFieldset) => (
  <Fieldset {...args}>
    <StyledChildren />
  </Fieldset>
);

Default.args = {
  legend: "User Information",
  spacing: "wide",
  width: "100%",
  height: "100",
};

export { Default };
export default story;
