import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledFieldset = styled.fieldset`
  display: flex;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme?.fieldset?.border?.color || inube.fieldset.border.color};
  & > legend {
    padding-left: 4px;
  }

  > *:not(:first-child) {
    margin-top: -8px;
  }
`;

export { StyledFieldset };
