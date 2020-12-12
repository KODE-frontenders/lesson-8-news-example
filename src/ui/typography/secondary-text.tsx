import { styled } from "@ui/theme";

type Props = {
  color?: string;
};

export const SecondaryText = styled.Text.attrs(() => ({
  allowFontScaling: false,
}))<Props>`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.3px;
  font-family: ${({ theme }) => theme.fontFamily.openSansRegular};
  color: ${({ theme, color }) => color || theme.colors.foreground.secondary};
`;
