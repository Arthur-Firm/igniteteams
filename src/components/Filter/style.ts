import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type FilterStyleProps = {
    isActive?: boolean
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
    ${({ theme, isActive}) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `}
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    border-radius:6px;
    width: 70px;
    height: 38px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    text-transform:uppercase;
`;