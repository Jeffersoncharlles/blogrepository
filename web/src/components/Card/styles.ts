import styled from 'styled-components';

export const Container = styled.div`

    background-color: ${({ theme }) => theme.colors.basePost};
    border-radius: 10px;

    >div{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`;
