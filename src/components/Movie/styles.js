import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    h2 {
        display: flex;
        align-items: baseline;
        gap: 15px;
        font-size: 36px;
        margin-bottom: 20px;
    }

    p {
        text-align: justify;
        font-size: 16px;
    }

    span {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: 'Roboto';

        img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 20px;
        }
    }

    > footer {
        display: flex;
        gap: 8px;
    }
`;

export const Rating = styled.div`
    display: flex;
    gap: 6px;
    
    svg {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .fill{
        fill: ${({ theme }) => theme.COLORS.PINK};
    }
    .fill-transparent{
        fill: transparent;
    }
`;