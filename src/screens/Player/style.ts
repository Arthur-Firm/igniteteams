import styled, {css} from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
`;

export const HeaderFilter = styled.View`
    width: 100%;
    flex-direction: row;
    margin: 32px 0px 12px;
`

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`