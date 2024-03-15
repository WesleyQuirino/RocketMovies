import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    text-align: center;

    > h1 {
        align-self: start;
        font-size: 48px;
        font-weight: bold;

        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > h2 {
        align-self: start;
        font-size: 24px;
        margin: 48px 0;

        color: ${({ theme }) => theme.COLORS.WHITE1};
    }

    > p {
        align-self: start;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY1};
    }

    > a {
        margin-top: 42px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;