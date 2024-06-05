import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledChildren = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  border-width: 0px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme?.fieldset?.border?.color || inube.fieldset.border.color};
  background-color: ${({ theme }) =>
    theme?.fieldset?.legend?.color || inube.fieldset.legend.color};
`;

export { StyledChildren };
