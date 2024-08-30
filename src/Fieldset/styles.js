import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledFieldset = styled.fieldset`
  display: flex;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme?.fieldset?.border?.color || inube.fieldset.border.color};
  padding-left: 24px;
  > *:not(:first-child) {
    margin-top: -8px;
    min-height: 150px;
  }
`;

export { StyledFieldset };
