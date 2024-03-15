import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND3};
    color: ${({ theme }) => theme.COLORS.GRAY3};

    border-radius: 10px;
    > input {
        height: 56px;
        width: 100%;

        padding: 16px;

        color: ${({ theme }) => theme.COLORS.WHITE1};
        background: transparent;
        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY3};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;