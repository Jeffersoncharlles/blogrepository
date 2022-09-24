import styled from 'styled-components';

export const ProfileContainer = styled.section`
    background: ${({ theme }) => theme.colors.baseProfile};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    height: 212px;
    padding: 32px 0;
    display: flex;

    picture{
        padding-right: 32px;
        padding-left: 40px;

        img{
            width: 148px;
        height: 148px;
        }
    }

    @media  (max-width:425px) {
        padding: 24px 0;

        picture{
        padding-right: 16px;
        padding-left: 18px;

            img{
                width: 82px;
                height: 82px;
            }
        }
    }
`;
export const ContentCardProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    P{
        margin-top: 8px;
        font-weight: 400;
        font-size: ${({ theme }) => theme.fonts[16]};
        color: ${({ theme }) => theme.colors.baseText};
    }

    @media (max-width:768px) {
        p{
            font-size: ${({ theme }) => theme.fonts[14]};
            margin-right: 18px;
            word-wrap: break-word;
            white-space: pre-wrap;

            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;

            overflow-y: hidden;
        }
    }

   @media  (max-width:425px) {
        p{
           margin-top: 4px; /* display: none; */
        }
    }
`;
export const HeaderContainer = styled.header`
    padding-right: 32px;
    display: flex;
    justify-content: space-between;

    h1{
        font-weight: 700;
        font-size: ${({ theme }) => theme.fonts[24]};
        line-height: 1.3;
    }

    a{
        font-size: ${({ theme }) => theme.fonts[14]};
        color: ${({ theme }) => theme.colors.blue};
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        align-self: center;
        justify-self: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        &:hover{
            filter: brightness(.8);
        }
    }

    @media  (max-width:425px) {
        /* padding-right: 16px; */
        gap: 16px;
        h1{
            font-size: ${({ theme }) => theme.fonts[14]};
        }

        a {
            font-size: ${({ theme }) => theme.fonts[12]};
        }
    }

`;
export const FooterContainer = styled.footer`
    margin-top: 24px;
    display: flex;


     span {
        display: flex;
        align-items: center;
        text-align: center;

        margin-right: 24px;

        svg{
            margin-right: 8px;
        }
    }

    @media (max-width:768px) {
        margin-top: 16px;

        span{
            font-size: ${({ theme }) => theme.fonts[12]};
        }
    }

    @media  (max-width:425px) {

        span{
            display: none;
        }
    }
`;
