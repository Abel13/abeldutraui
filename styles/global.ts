import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: ${colors.background};
        color: ${colors.white};
        -webkit-font-smoothing: antialiased;
    }

    a {
        color: ${colors.secondary};
        text-decoration: none;
    }

    span {
        font-size: 14px;
        white-space: pre-line;
    }

    body, input, button {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
    }

    h2 {
        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-weight: 300;
        font-size: 18px;
        color: ${colors.white};
    }

    h1, h3, h4, h5, h6, strong {
        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
        color: ${colors.primary};
    }

    button {
        cursor: pointer;
    }
`;
