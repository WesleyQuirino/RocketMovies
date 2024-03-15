import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE1};
    background: ${({ theme }) => theme.COLORS.BACKGROUND3};
    border: none;
    border-radius: 10px;
    resize: none;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY3};
    }
`;