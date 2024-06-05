import { StyledFieldset, StyledLegend } from "./styles";
import { IFieldsetSpacing } from "./props";
import { Stack } from "@inubekit/stack";

interface IFieldset {
  legend: string;
  children: React.ReactNode;
  spacing?: IFieldsetSpacing;
}

function Fieldset(props: IFieldset) {
  const { legend, children, spacing = "compact" } = props;

  return (
    <StyledFieldset $spacing={spacing}>
      <StyledLegend>{legend}</StyledLegend>
      <Stack
        height="100%"
        width="100%"
        padding={spacing === "wide" ? "24px 20px" : "16px 12px"}
      >
        {children}
      </Stack>
    </StyledFieldset>
  );
}

export { Fieldset };
export type { IFieldset };
