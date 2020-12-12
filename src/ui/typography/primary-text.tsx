import { styled } from "@ui/theme";

type Props = {
  color?: string;
};

export const PrimaryText = styled.Text.attrs(() => ({
  allowFontScaling: false,
}))<Props>`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.3px;
  font-family: ${({ theme }) => theme.fontFamily.openSansRegular};
  color: ${({ theme, color }) => color || theme.colors.foreground.primary};
`;
