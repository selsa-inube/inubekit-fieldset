import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledFieldset = styled.fieldset`
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme?.fieldset?.border?.color || inube.fieldset.border.color};
  > legend > div > p {
    color: ${({ theme }) =>
      theme?.fieldset?.legend?.color || inube.fieldset.legend.color};
  }
  padding: ${({ $isMobile }) =>
    $isMobile ? "8px 12px 16px" : "12px 20px 24px"};
`;

export { StyledFieldset };
