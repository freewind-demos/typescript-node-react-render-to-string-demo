import { renderToStaticMarkup } from 'react-dom/server';

import { Hello } from './Hello';

console.log(renderToStaticMarkup(
  Hello,
))
