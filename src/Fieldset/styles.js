import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledFieldset = styled.fieldset`
  display: flex;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme?.fieldset?.border?.color || inube.fieldset.border.color};
  padding: ${({ $isMobile }) =>
    $isMobile ? "8px 12px 16px" : "12px 20px 24px"};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  > *:not(:first-child) {
    margin-top: -8px;
  }
`;

export { StyledFieldset };
