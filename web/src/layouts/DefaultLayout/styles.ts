import styled from 'styled-components';

export const LayoutContainer = styled.div`

    margin: 0 auto;
`;


export const LayoutHeaderContainer = styled.div`

    background: ${({ theme }) => theme.colors.baseProfile};
    background-image: url('/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
