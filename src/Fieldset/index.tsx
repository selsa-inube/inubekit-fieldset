import { StyledFieldset } from "./styles";
import { IFieldsetSpacing } from "./props";
import { Stack } from "@inubekit/stack";
import { IText, Text } from "@inubekit/text";

interface IFieldset {
  legend: string;
  children: React.ReactNode;
  spacing?: IFieldsetSpacing;
  type: IText["type"];
  size: IText["size"];
  width?: string;
  height?: string;
}

function Fieldset(props: IFieldset) {
  const {
    legend,
    children,
    spacing = "compact",
    type = "title",
    size = "medium",
    width = "auto",
    height = "auto",
  } = props;

  return (
    <StyledFieldset $spacing={spacing}>
      <legend>
        <Text appearance="gray" type={type} size={size} margin="0 0 0 6px">
          {legend}
        </Text>
      </legend>
      <Stack
        height={height}
        width={width}
        padding={spacing === "wide" ? "24px 20px" : "16px 12px"}
      >
        {children}
      </Stack>
    </StyledFieldset>
  );
}

export { Fieldset };
export type { IFieldset };
