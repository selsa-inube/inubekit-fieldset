import { typography } from "./typography";

type TypographyType = keyof typeof typography;

const type = Object.keys(typography);

export const sizes = ["large", "medium", "small"] as const;
export type Size = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "This component helps us to be able to separate content and title it.",
    },
  },
};

const props = {
  title: {
    description:
      "A string that represents the title or heading for the fieldset component.",
  },

  children: {
    description:
      "A prop that expects React nodes as its value, used to render the content inside the fieldset.",
  },
  type: {
    control: "select",
    options: type,
    description: "Controls the type of the legend",
  },
  size: {
    control: "select",
    options: sizes,
    description: "Controls the size of the legend",
  },
};

export { props, parameters };
export type { TypographyType };
