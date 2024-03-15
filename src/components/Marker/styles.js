import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE1};
    font-size: 16px;
    
    background: ${({ theme, $isnew }) => $isnew ? theme.COLORS.BACKGROUND5 : theme.COLORS.BACKGROUND3};
    border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.GRAY3}` : "none"};
    border-radius: 10px;

    > input {
        width: 100%;
        height: 56px;

        padding: 12px;
        
        color: ${({ theme }) => theme.COLORS.WHITE1};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY3};
        }
    }

    > button {
        border: none;
        background: none;
        
        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

`;