import { styled } from "@ui/theme";

type Props = {
  color?: string;
};

export const Heading = styled.Text.attrs(() => ({
  allowFontScaling: false,
}))<Props>`
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.3px;
  font-family: ${({ theme }) => theme.fontFamily.arialBold};
  color: ${({ theme, color }) => color || theme.colors.foreground.primary};
`;
