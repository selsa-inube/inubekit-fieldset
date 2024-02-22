import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { StyledFieldset } from "./styles";
import { Size, TypographyType } from "./props";

interface FieldsetProps {
  title: string;
  children: React.ReactNode;
  type?: TypographyType;
  size?: Size;
}

function Fieldset(props: FieldsetProps) {
  const { title, children, type = "title", size = "medium" } = props;

  const isMobile = useMediaQuery("(max-width: 740px)");

  return (
    <StyledFieldset isMobile={isMobile}>
      <legend>
        <Stack padding="4px">
          <Text type={type} size={size}>
            {title}
          </Text>
        </Stack>
      </legend>
      {children}
    </StyledFieldset>
  );
}

export { Fieldset };
export type { FieldsetProps };
