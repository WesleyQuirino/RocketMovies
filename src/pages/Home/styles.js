import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "Header"
    "Content";

    main {
        display: flex;
        flex-direction: column;
        gap: 48px;
        grid-area: Content;
        padding: 50px 80px;
        overflow: hidden;

        section{
            height: 680px;
            display: flex;
            flex-direction: column;
            gap: 24px;
            overflow-y: auto;
        }

        section::-webkit-scrollbar {
            width: 16px;
        }

        section::-webkit-scrollbar-track {
            background: none;
        }

        section::-webkit-scrollbar-thumb {
            margin: 0 2px;
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 8px;
            border: 4px solid ${({ theme }) => theme.COLORS.BACKGROUND5};
        }
    }
`;