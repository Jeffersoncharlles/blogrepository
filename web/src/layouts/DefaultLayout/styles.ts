import styled from 'styled-components';

export const LayoutContainer = styled.div`

    margin: 0 auto;
`;


export const LayoutHeaderContainer = styled.div`
    /* max-width: 1440px; */

    background: ${({ theme }) => theme.colors.baseProfile};
    /* /* width: 100%; */
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
