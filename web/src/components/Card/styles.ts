import styled from 'styled-components';

export const CardContainer = styled.div`




    background-color: ${({ theme }) => theme.colors.basePost};
    border-radius: 10px;
    padding: 32px;

    >div{
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3{
            font-weight: 700;
            font-size: ${({ theme }) => theme.fonts[20]};
            line-height: 1.6;
            color: ${({ theme }) => theme.colors.baseTitle};
        }
    }

    p{

        font-size: ${({ theme }) => theme.fonts[16]};
        color: ${({ theme }) => theme.colors.baseText};

        word-wrap: break-word;
        white-space: pre-wrap;

        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;

        overflow-y: hidden;
    }


    @media (max-width:768px) {
       padding: 16px;

       >div{
            margin-bottom: 16px;

            h3{
                font-size: ${({ theme }) => theme.fonts[12]};
            }


       }

       p{
        font-size: ${({ theme }) => theme.fonts[12]};
        word-wrap: break-word;
        white-space: pre-wrap;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        overflow-y: hidden;
       }
    }
`;
