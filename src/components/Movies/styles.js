import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 32px;
    border-radius: 20px;
    background-color: rgba(255, 133, 155, 0.05);

    > footer {
        display: flex;
        gap: 8px;
    }
`;

export const Rating = styled.div`
    display: flex;
    gap: 6px;
    
    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        fill: ${({ theme }) => theme.COLORS.PINK};
    }

    svg:nth-last-child(1){
        fill: transparent;
    }
`;