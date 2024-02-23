import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledFieldset = styled.fieldset`
  display: flex;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme?.fieldset?.border?.color || inube.fieldset.border.color};

  padding: ${({ $spacing }) => {
    if ($spacing === "wide") return "24px 20px";
    return "16px 12px";
  }};

  > *:not(:first-child) {
    margin-top: -8px;
  }
`;

const StyledLegend = styled.legend`
  font-family: Roboto, sans-serif;
  line-height: 20px;
  font-size: 14px;
  letter-spacing: 0.1px;
  font-weight: 500;
  color: ${({ theme }) =>
    theme?.fieldset?.legend?.color || inube.fieldset.legend.color};
`;

export { StyledFieldset, StyledLegend };
