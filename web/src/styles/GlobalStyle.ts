import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :focus{
                outline: 0;
                box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue};
    }
    *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
    }
    body {
            background-color: ${({ theme }) => theme.colors.baseBackground};
            color: ${({ theme }) => theme.colors.baseText};
            -webkit-font-smoothing:antialiased;
    }
    body,input,textarea,button{
            font: 400 1rem 'Nunito' ,sans-serif;
    }

    button{
        cursor: pointer;
        border: 0;
    }

    a{
        text-decoration: none;
        color: inherit;
        transition: all .2s;


    }

`
