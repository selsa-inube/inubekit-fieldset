import { Fieldset, FieldsetProps } from ".";
import { props, parameters } from "./props";

const story = {
  component: Fieldset,
  title: "input/Fieldset",
  tags: ["autodocs"],
  parameters,
  argTypes: {
    ...props,
  },
};

export const Default = (args: FieldsetProps) => <Fieldset {...args} />;

Default.args = {
  title: "User Information",
};

export default story;
