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
`;
export const ContentCardProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    P{
        margin-top: 8px;
    }
`;
export const HeaderContainer = styled.header`
    padding-right: 32px;
    display: flex;
    justify-content: space-between;
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
`;
