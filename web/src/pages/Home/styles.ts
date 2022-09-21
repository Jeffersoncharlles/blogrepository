import styled from 'styled-components';

export const HomeContainer = styled.main`
     width: min(1440px, 100%);
     margin: 0 auto;
     margin-bottom: 48px;

     >div {
          margin-top:  -100px;
     }
`;

export const SectionContainer = styled.section`
     padding-top:72px ;

     >div{
          display: flex;
          flex-direction: column;

          >input{
               padding: 12px 16px;
               background: ${({ theme }) => theme.colors.baseInput};
               border:  1px solid #1C2F41;
               border-radius: 6px;

               font-size: 1rem;
               line-height: 1.6;

               &placeholder{
                    color: ${({ theme }) => theme.colors.baseLabel};
               }
          }


          >div{
               display: flex;
               justify-content: space-between;
               margin-bottom: 12px;
          }
     }

`;


export const ArticleContainer = styled.article`
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 32px;
     padding-top: 48px;

     a{
          &:hover{
                filter: brightness(.9);
        }
     }
`;
