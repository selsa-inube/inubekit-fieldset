import { StyledFieldset, StyledLegend } from "./styles";
import { Spacing } from "./props";

interface IFieldset {
  legend: string;
  children: React.ReactNode;
  spacing?: Spacing;
}

function Fieldset(props: IFieldset) {
  const { legend, children, spacing = "compact" } = props;

  return (
    <StyledFieldset $spacing={spacing}>
      <StyledLegend>{legend}</StyledLegend>
      {children}
    </StyledFieldset>
  );
}

export { Fieldset };
export type { IFieldset };
