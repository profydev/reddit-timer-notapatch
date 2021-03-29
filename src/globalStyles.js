import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    background-color: ${(props) => props.theme.color.backgroundColor};
  }
`;

export default GlobalStyle;
