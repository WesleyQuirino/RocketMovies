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
        gap: 30px;
        grid-area: Content;
        padding: 30px 80px;
        overflow-y: auto;
        }
        
        h1 {
            font-size: 36px;
            text-align: left;
        }

        main::-webkit-scrollbar {
            width: 16px;
        }

        main::-webkit-scrollbar-track {
            background: none;
        }

        main::-webkit-scrollbar-thumb {
            margin: 0 2px;
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 8px;
            border: 4px solid ${({ theme }) => theme.COLORS.BACKGROUND5};
        }
`;