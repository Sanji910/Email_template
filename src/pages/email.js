import { Wait } from './Wait';
import { render } from '@react-email/render';

const html = render(<Wait />, {
  pretty: true,
});

console.log(html);
