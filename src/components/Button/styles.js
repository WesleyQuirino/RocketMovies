import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-align: center;

    width: 100%;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme, $del }) => $del ? theme.COLORS.PINK :theme.COLORS.BACKGROUND2};
    text-align: center;
    
    padding: 16px;
    
    border: none;
    border-radius: 10px;
    background-color: ${({ theme, $del }) => $del ? theme.COLORS.BACKGROUND6 :theme.COLORS.PINK};
`;