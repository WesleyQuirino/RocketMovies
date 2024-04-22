import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    gap: 5%;
    grid-area: Header;

    padding: 0 80px;
    
    h2 {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: right;

    h2 {
        width: 150px;
    }

    p {
        display: flex;
        flex-direction: column;
        width: 150px;
        font-size: 14px;

        > a, button {
            border: none;
            background: none;
            font-weight: bold;
            text-align: left;
            color: ${({ theme }) => theme.COLORS.WHITE3};
            > span {
                color: ${({ theme }) => theme.COLORS.GRAY3};
            }
        }
    }

    img {
        width: 56px;
        height: 56px;

        border-radius: 50%;
    }
`;