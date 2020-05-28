// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'SUNY Oswego',
  brandUrl: 'https://www.oswego.edu',
  brandImage:
    'https://ww1.oswego.edu/themes/custom/sunyoswego/logo.svg',
});
