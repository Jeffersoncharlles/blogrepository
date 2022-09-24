import styled from 'styled-components';

export const PostContainer = styled.main`
    width: min(1440px, 100%);
    margin: 0 auto;
    margin-bottom: 48px;
    padding: 16px;

    @media  (max-width:425px) {
        padding: 12px;
    }

`;

export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 32px;
    gap: 24px;
`;
export const CardContainer = styled.div`
    margin-top: -64px;
    background: ${({ theme }) => theme.colors.baseProfile};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    padding: 32px;

    h1{
        font-size: ${({ theme }) => theme.fonts[24]};
        line-height: 1.3;

    }

    @media  (max-width:425px) {
        padding: 16px;

        h1{
            font-size: ${({ theme }) => theme.fonts[16]};
            line-height: 1.6;
        }


    }
`;


export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.blue};

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
`;

export const InfoContainer = styled.div`
    color: ${({ theme }) => theme.colors.baseSpan};
    margin-top: 1rem;
    display: flex;
    gap: 32px;

    span{
        display: flex;
        align-items: center;

        svg{
            margin-right: 8px;
        }
    }

    @media  (max-width:425px) {
        span{
            font-size: ${({ theme }) => theme.fonts[12]};
        }
    }
`;
