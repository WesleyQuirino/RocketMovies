import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 180px auto;
    grid-template-areas: 
    "Header"
    "Content";

    header{
        display: flex;
        align-items: center;
        padding: 80px;
        grid-area: Header;
        background-color: rgba(255, 133, 155, 0.05);
        a{
            font-size: 20px;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: Content;
        padding: 80px;
    }
`;

export const Form = styled.form`
    margin-top: -170px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 400px;
`;

export const Section = styled.section`
    display: grid;
    gap: 8px;
`;

export const Avatar = styled.div`
    position: relative;
    display: flex;
    margin: 0 auto 80px;
    width: 180px;
    height: 180px;

    img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }
    label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        input {
            display: none;
        }
    }
`;