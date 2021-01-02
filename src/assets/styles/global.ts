import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 62.5%;

  --color-background: #774DD6;
  --color-background-white: #FFF;
  --color-background-ligth: #F2EEFB;

  --color-text: #774DD6;
  --color-text-white: #FFF;
  --color-text-black: #000;
  --color-text-gray: #A89CAB;
  --color-text-gray-ligth: #A89CAB;
  --color-text-green: #04d361;

  --color-line: #774DD6;
  --color-line-in-white: #E6E6F0;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100vh;
  overflow: hidden;
}

body {
  background: var(--color-background);
}

#root {
  display: flex;
}

body,
input,
button,
textarea {
  font: 500 1.6rem Archivo;
  color: var(--color-text-white);
}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`;
