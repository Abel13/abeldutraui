import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    outline: 0,
  },

  body: {
    background: "$background",
    color: "$white",
    "-webkit-font-smoothing": "antialiased",
  },

  a: {
    color: "$secondary",
    textDecoration: "none",
  },

  span: {
    fontSize: 14,
    whiteSpace: "pre-line",
  },

  "body, input, button": {
    fontFamily: "Raleway",
    fontSize: 16,
  },

  h2: {
    fontFamily: "Raleway",
    fontWeight: 300,
    fontSize: "0.8rem",
    color: "$white",
  },

  h3: {
    fontFamily: "Raleway",
    fontWeight: 300,
    fontSize: "0.8rem",
    color: "$text",
  },

  "h1, h4, h5, h6, strong": {
    fontFamily: "Yanone Kaffeesatz",
    fontWeight: 400,
    fontSize: "1.5rem",
    color: "$primary",
  },

  button: {
    cursor: "pointer",
  },
});
