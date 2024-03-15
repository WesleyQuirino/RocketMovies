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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;

    > div {
        display: flex;
        gap: 20px;
    }
`;

export const Markers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY3};
    }
`;

export const MarkersList = styled.div`
    display: flex;
    border-radius: 8px;
    padding: 16px;
    gap: 24px;
    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND6};
`;