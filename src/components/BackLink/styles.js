import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;

    button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > svg {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;