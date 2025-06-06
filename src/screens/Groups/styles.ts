import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600}
`

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #fff;
`